// Cross-device progress tracking.
//
// Data shape (per person, stored server-side as one JSON blob):
// {
//   topics: { [topicId]: { covered: bool, pinned: bool } },
//   quizAttempts: { [quizId]: [ { date: isoString, score: number, total: number }, ... ] }
// }
//
// Local storage holds a cached copy so the page renders instantly and still
// works offline; every write also gets pushed to the server so it follows
// the person to other devices. On page load, the server copy (if reachable)
// is treated as the source of truth and overwrites the local cache.

const PROGRESS_KEY = "emrTrainDrivingProgress_v2";
const API = "/api/progress";

let _cache = null; // in-memory working copy once loaded

function _emptyState(){
  return { topics: {}, quizAttempts: {} };
}

function _loadLocal(){
  try{
    const raw = window.localStorage.getItem(PROGRESS_KEY);
    return raw ? JSON.parse(raw) : _emptyState();
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

async function _pushToServer(user){
  if(!user || !_cache) return;
  try{
    await fetch(API, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ user, data: _cache }),
    });
  }catch(e){
    // offline or function unavailable — local cache still has the data,
    // it'll sync next time a push succeeds.
    console.warn("Progress sync failed (will retry on next change):", e);
  }
}

// Call once on page load, after identity is known. Tries the server first;
// falls back to whatever's cached locally if the server can't be reached.
async function initProgress(user){
  _cache = _loadLocal();
  if(!user) return _cache;

  try{
    const res = await fetch(`${API}?user=${encodeURIComponent(user)}`);
    if(res.ok){
      const remote = await res.json();
      if(remote && (remote.topics || remote.quizAttempts)){
        _cache = Object.assign(_emptyState(), remote);
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
  return c.topics[id] || { covered:false, pinned:false };
}

function setModuleCovered(id, covered, user){
  const c = _ensureCache();
  c.topics[id] = c.topics[id] || {};
  c.topics[id].covered = covered;
  _saveLocal(c);
  _pushToServer(user);
}

function setModulePinned(id, pinned, user){
  const c = _ensureCache();
  c.topics[id] = c.topics[id] || {};
  c.topics[id].pinned = pinned;
  _saveLocal(c);
  _pushToServer(user);
}

// Records a new quiz attempt. Every attempt is kept — retaking a quiz never
// erases past results, it just adds another entry to that quiz's history.
function recordQuizAttempt(quizId, score, total, user){
  const c = _ensureCache();
  c.quizAttempts[quizId] = c.quizAttempts[quizId] || [];
  c.quizAttempts[quizId].push({
    date: new Date().toISOString(),
    score,
    total,
  });
  _saveLocal(c);
  _pushToServer(user);
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

// Merges the shared module list (names, guides, quizzes — same for
// everyone) with this person's own covered/pinned state.
function getModulesWithProgress(){
  return MODULES.map(m=>{
    const p = getModuleProgress(m.id);
    return Object.assign({}, m, {
      covered: p.covered,
      pinned: p.pinned,
    });
  });
}
