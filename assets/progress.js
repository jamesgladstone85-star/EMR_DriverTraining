// Cross-device progress tracking.
//
// Data shape (per person, stored server-side as one JSON blob):
// {
//   topics: { [topicId]: { covered: bool } },
//   pinnedItems: { [itemKey]: { topicId, topicName, type, title, file?, link? } },
//   quizAttempts: { [quizId]: [ { date: isoString, score: number, total: number, missedIds: [] }, ... ] },
//   wrongIds: [ questionId, ... ]  — single persistent "currently wrong" set
// }
//
// wrongIds is the ONE source of truth for what's still queued for retry.
// Every recorded attempt updates it directly: a question answered correctly
// is removed from the set (even if a different quiz variant once flagged it
// wrong), and a question answered incorrectly is added/kept. This means
// fixing a question inside Wrong Answer Review actually clears it — it
// isn't re-derived from other quizzes' old attempt history, which was the
// previous (buggy) approach.
//
// Pinning is per CONTENT ITEM (a single guide, quiz, or tool) — not per
// topic. Each item's pin button toggles its own entry in pinnedItems, and
// the sidebar's Pinned list shows those individual items, not the topic
// they came from. itemKey is deterministic (topicId + type + title) so the
// same button always maps to the same stored entry.
//
// Local storage holds a cached copy so the page renders instantly and still
// works offline; every write also gets pushed to the server so it follows
// the person to other devices. On page load, the server copy (if reachable)
// is treated as the source of truth and overwrites the local cache.

const PROGRESS_KEY = "emrTrainDrivingProgress_v2";
const API = "/api/progress";

let _cache = null; // in-memory working copy once loaded

function _emptyState(){
  return { topics: {}, pinnedItems: {}, quizAttempts: {}, wrongIds: [] };
}

// One-time migration for progress saved before wrongIds existed: rebuilds
// an initial guess by unioning each quiz variant's latest missedIds (the
// old, buggy derivation) so previously-flagged questions aren't silently
// lost on upgrade. Only runs when the raw saved object never had a
// wrongIds key at all — a legitimately empty array is left alone.
function _migrateLegacyWrongIds(rawParsed, merged){
  if(rawParsed && rawParsed.wrongIds !== undefined) return merged;
  const ids = new Set();
  Object.keys(merged.quizAttempts || {}).forEach(quizId=>{
    const hist = merged.quizAttempts[quizId];
    if(!hist || !hist.length) return;
    const latest = hist[hist.length - 1];
    (latest.missedIds || []).forEach(id => ids.add(id));
  });
  merged.wrongIds = Array.from(ids);
  return merged;
}

function _loadLocal(){
  try{
    const raw = window.localStorage.getItem(PROGRESS_KEY);
    if(!raw) return _emptyState();
    const parsed = JSON.parse(raw);
    const merged = Object.assign(_emptyState(), parsed);
    return _migrateLegacyWrongIds(parsed, merged);
  }catch(e){
    return window.__progressFallback || _emptyState();
  }
}

function _saveLocal(data){
  try{
    window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(data));
  }catch(e){
    window.__progressFallback = data;
  }
}

async function _pushToServer(identity){
  if(!identity || !identity.name || !_cache) return;
  try{
    await fetch(API, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ user: identity.name, pin: identity.pin, data: _cache }),
    });
  }catch(e){
    // offline or function unavailable — local cache still has the data,
    // it'll sync next time a push succeeds.
    console.warn("Progress sync failed (will retry on next change):", e);
  }
}

// Call once on page load, after identity ({name, pin}) is known. Tries the
// server first; falls back to whatever's cached locally if unreachable.
async function initProgress(identity){
  _cache = _loadLocal();
  if(!identity || !identity.name) return _cache;

  try{
    const qs = `user=${encodeURIComponent(identity.name)}&pin=${encodeURIComponent(identity.pin)}`;
    const res = await fetch(`${API}?${qs}`);
    if(res.ok){
      const remote = await res.json();
      if(remote && (remote.topics || remote.quizAttempts || remote.pinnedItems)){
        const merged = Object.assign(_emptyState(), remote);
        _cache = _migrateLegacyWrongIds(remote, merged);
        _saveLocal(_cache);
      }
    }
  }catch(e){
    console.warn("Could not reach progress server, using local cache:", e);
  }
  return _cache;
}

function _ensureCache(){
  if(!_cache) _cache = _loadLocal();
  return _cache;
}

function getModuleProgress(id){
  const c = _ensureCache();
  const t = c.topics[id] || {};
  return { covered: !!t.covered, acedSections: t.acedSections || [] };
}

function setModuleCovered(id, covered, identity){
  const c = _ensureCache();
  c.topics[id] = c.topics[id] || {};
  c.topics[id].covered = covered;
  _saveLocal(c);
  _pushToServer(identity);
}

// Records that a specific quiz module-section (e.g. "m3") has been aced
// (100%) for a topic. Cumulative and never regresses — once a section is
// aced it stays counted even if a later attempt on that same section isn't
// perfect. sectionKey is arbitrary (defined by the quiz itself, e.g. PTS's
// m1..m8) — progress.js doesn't need to know what it means, just that it's
// one distinct unit of credit toward that topic's completion.
function addAcedQuizSection(topicId, sectionKey, identity){
  const c = _ensureCache();
  c.topics[topicId] = c.topics[topicId] || {};
  c.topics[topicId].acedSections = c.topics[topicId].acedSections || [];
  if(!c.topics[topicId].acedSections.includes(sectionKey)){
    c.topics[topicId].acedSections.push(sectionKey);
    _saveLocal(c);
    _pushToServer(identity);
  }
}

// Fractional completion for a topic based on quiz-section credit — e.g.
// 3 of 8 PTS modules aced = 0.375. A topic manually marked (or otherwise)
// "covered" is always fraction 1, regardless of section count. totalSections
// is supplied by the caller (from that topic's quiz definition in data.js);
// topics with no quiz sections defined return 0 unless covered.
function getTopicQuizFraction(topicId, totalSections){
  const p = getModuleProgress(topicId);
  if(p.covered) return 1;
  if(!totalSections) return 0;
  return Math.min(1, p.acedSections.length / totalSections);
}

// Deterministic key for a single content item (one guide, quiz, or tool
// card) — same topic + type + title always maps to the same stored entry.
function itemKey(topicId, type, title){
  return `${topicId}::${type}::${title}`;
}

function isItemPinned(topicId, type, title){
  const c = _ensureCache();
  return !!c.pinnedItems[itemKey(topicId, type, title)];
}

// Pins/unpins a single item. `extra` can carry display/link info (topicName,
// file, link) so the sidebar can render and deep-link to it without needing
// to re-look-up the topic's full data.
function setItemPinned(topicId, type, title, pinned, identity, extra){
  const c = _ensureCache();
  const key = itemKey(topicId, type, title);
  if(pinned){
    c.pinnedItems[key] = Object.assign({ topicId, type, title }, extra || {});
  }else{
    delete c.pinnedItems[key];
  }
  _saveLocal(c);
  _pushToServer(identity);
}

// All currently-pinned items, across every topic — this is what the
// sidebar's Pinned list renders directly.
function getPinnedItems(){
  const c = _ensureCache();
  return Object.values(c.pinnedItems);
}

function getPinnedItemsForTopic(topicId){
  return getPinnedItems().filter(it => it.topicId === topicId);
}

// Records a new quiz attempt. Every attempt is kept in quizAttempts history
// (for Best/attempts-so-far display) — retaking a quiz never erases past
// results, it just adds another entry.
//
// attemptedIds/missedIds ALSO update the single persistent wrongIds set
// directly: every question in attemptedIds that's NOT in missedIds gets
// cleared from the wrong-answers queue (even if a different quiz variant
// had flagged it before), and every question in missedIds gets added/kept.
// This is what makes "answer it correctly and it clears" actually true,
// regardless of which quiz mode (full/module/random20/wrong-review) it was
// answered in.
function recordQuizAttempt(quizId, score, total, identity, missedIds, attemptedIds){
  const c = _ensureCache();
  c.quizAttempts[quizId] = c.quizAttempts[quizId] || [];
  c.quizAttempts[quizId].push({
    date: new Date().toISOString(),
    score,
    total,
    missedIds: missedIds || [],
  });

  if(attemptedIds && attemptedIds.length){
    const wrongSet = new Set(c.wrongIds || []);
    const missedSet = new Set(missedIds || []);
    attemptedIds.forEach(id=>{
      if(missedSet.has(id)) wrongSet.add(id);
      else wrongSet.delete(id);
    });
    c.wrongIds = Array.from(wrongSet);
  }

  _saveLocal(c);
  _pushToServer(identity);
}

function getQuizHistory(quizId){
  const c = _ensureCache();
  return c.quizAttempts[quizId] || [];
}

function getQuizBest(quizId){
  const history = getQuizHistory(quizId);
  if(history.length === 0) return null;
  return history.reduce((best, a) =>
    (a.score / a.total) > (best.score / best.total) ? a : best
  );
}

function getQuizLatest(quizId){
  const history = getQuizHistory(quizId);
  return history.length ? history[history.length - 1] : null;
}

// The current "still wrong, needs retry" question ids — a single persistent
// set, not derived from quiz history. Kept in sync by recordQuizAttempt.
function getWrongIds(){
  const c = _ensureCache();
  return c.wrongIds || [];
}

// Merges the shared module list (names, guides, quizzes — same for
// everyone) with this person's own covered state, fractional quiz-section
// completion, and whether the topic currently has ANY pinned items inside
// it (used only for the homepage's "Pinned" filter tab — the sidebar's own
// Pinned list uses getPinnedItems() directly, at the item level).
//
// quizFraction is 1 if manually/fully covered, otherwise (sections aced) /
// (that topic's quiz's totalSections field, if any quiz on the topic
// defines one) — this is what lets progress bars move incrementally as
// individual module quizzes are aced, not just on full completion.
function getModulesWithProgress(){
  const pinnedTopicIds = new Set(getPinnedItems().map(it => it.topicId));
  return MODULES.map(m=>{
    const p = getModuleProgress(m.id);
    const quizWithSections = (m.quizzes || []).find(q => q.totalSections);
    const totalSections = quizWithSections ? quizWithSections.totalSections : 0;
    return Object.assign({}, m, {
      covered: p.covered,
      quizFraction: getTopicQuizFraction(m.id, totalSections),
      hasPinnedItems: pinnedTopicIds.has(m.id),
    });
  });
}
