// Shared quiz engine — every quiz page (existing and new) is a thin config
// wrapper around this. One engine means one place to fix bugs and one place
// that has save & resume, instead of ten near-identical copies drifting
// apart over time.
//
// Question shape (assets/*-quiz-data.js), by type:
//   single/multiple : { id, section, type, question, options: [...], correct: [idx,...], rationale }
//   written          : { id, section, type: "written", gradeMode: "self"|"auto", question,
//                         answer (model answer shown on reveal), keyPoints: [...] (auto mode only),
//                         keyPointThreshold (optional override), rationale (optional) }
//
// Credit modes (config.modularCredit):
//   false (default) — a perfect score on the "all" section marks the linked
//     topic covered outright. Matches GSM-R / Colour Light / Semaphore / Shunting.
//   true — perfect score on any single non-"all" section banks that section's
//     id as aced credit (addAcedQuizSection); acing "all" banks every section
//     AND marks the topic covered. Matches PTS / Booking-Rostering. Section
//     ids in the data file must already be globally unique across quizzes
//     sharing a topic (e.g. "br-m1" vs "m1") — the engine doesn't prefix them.

const QuizEngine = (function(){

  function shuffle(arr){
    const a = arr.slice();
    for(let i = a.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function shuffleOptions(q){
    if(q.type === "written") return Object.assign({}, q);
    const order = shuffle(q.options.map((_, i) => i));
    const newOptions = order.map(origIdx => q.options[origIdx]);
    const newCorrect = q.correct
      .map(origIdx => order.indexOf(origIdx))
      .sort((a, b) => a - b);
    return Object.assign({}, q, { options: newOptions, correct: newCorrect });
  }

  // ---- Written-answer fuzzy grading ----
  // Word-level Levenshtein distance gives spelling leniency; a key point
  // (single word or short phrase) counts as present if every one of its
  // words is found somewhere in the answer, fuzzily. A configurable share
  // of key points (default 60%) must be present to mark the answer correct
  // — "just about right" rather than an exact match.
  function normalizeWords(text){
    return (text || "").toLowerCase().replace(/[^\w\s]/g, " ").split(/\s+/).filter(Boolean);
  }

  function levenshtein(a, b){
    const m = a.length, n = b.length;
    if(!m) return n;
    if(!n) return m;
    const dp = [];
    for(let i = 0; i <= m; i++){ dp.push([i]); }
    for(let j = 1; j <= n; j++){ dp[0][j] = j; }
    for(let i = 1; i <= m; i++){
      for(let j = 1; j <= n; j++){
        dp[i][j] = a[i-1] === b[j-1]
          ? dp[i-1][j-1]
          : 1 + Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]);
      }
    }
    return dp[m][n];
  }

  function fuzzyWordMatch(word, target){
    if(word === target) return true;
    if(target.length <= 3) return false; // too short to safely fuzzy-match
    const maxDist = target.length <= 5 ? 1 : (target.length <= 9 ? 2 : 3);
    return levenshtein(word, target) <= maxDist;
  }

  function keyPointPresent(keyPoint, userWords){
    const kpWords = normalizeWords(keyPoint);
    return kpWords.every(kw => userWords.some(uw => fuzzyWordMatch(uw, kw)));
  }

  function gradeWrittenAnswer(userText, q){
    const userWords = normalizeWords(userText);
    const keyPoints = q.keyPoints || [];
    if(userWords.length === 0 || keyPoints.length === 0){
      return { correct: false, matched: [], missed: keyPoints.slice() };
    }
    const matched = [], missed = [];
    keyPoints.forEach(kp => {
      if(keyPointPresent(kp, userWords)) matched.push(kp); else missed.push(kp);
    });
    const threshold = q.keyPointThreshold || Math.max(1, Math.ceil(keyPoints.length * 0.6));
    return { correct: matched.length >= threshold, matched, missed };
  }

  function isAnswerCorrect(ua, q){
    if(!ua) return false;
    if(Array.isArray(ua)){
      if(ua.length === 0) return false;
      const a = ua.slice().sort((x,y)=>x-y);
      const b = q.correct.slice().sort((x,y)=>x-y);
      return a.length === b.length && a.every((v,i) => v === b[i]);
    }
    return !!ua.correct;
  }

  function escapeHtml(s){
    return (s || "").replace(/[&<>"']/g, c => ({
      "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
    }[c]));
  }

  function toast(msg){
    let el = document.getElementById("toastEl");
    if(!el){
      el = document.createElement("div");
      el.id = "toastEl";
      Object.assign(el.style, {
        position:"fixed", bottom:"24px", left:"50%", transform:"translateX(-50%)",
        background:"var(--bg-card)", color:"var(--text-hi)", padding:"10px 18px",
        border:"1px solid var(--border-hair-strong)",
        borderRadius:"10px", fontSize:"13px", boxShadow:"0 12px 32px rgba(0,0,0,0.5)",
        zIndex:"999", fontFamily:"var(--ui)"
      });
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.style.opacity = "1";
    clearTimeout(window.__toastT);
    window.__toastT = setTimeout(()=>{ el.style.opacity = "0"; }, 2200);
  }

  function init(config){
    const {
      appEl,
      title,
      introHtml,
      questions,
      sections,
      linkedTopicId,
      passPct,
      modularCredit,
      randomExamSize,
      randomExamLabel,
    } = config;

    const QUIZ_TITLE_PREFIX = title;
    const RANDOM_QUIZ_ID = `${QUIZ_TITLE_PREFIX} — Random ${randomExamSize} (Exam Mode)`;
    const WRONG_QUIZ_ID = `${QUIZ_TITLE_PREFIX} — Wrong Answer Review`;

    let currentIdentity = null;
    let state = "menu";
    let sectionId = "all";
    let activeQuestions = [];
    let currentIndex = 0;
    let userAnswers = {};
    let score = 0;
    let justAutoCompletedTopic = false;
    let justAcedSectionId = null;
    let resumedFromSession = false;

    function quizIdFor(id){
      const section = sections.find(s => s.id === id);
      return id === "all" ? QUIZ_TITLE_PREFIX : `${QUIZ_TITLE_PREFIX} — ${section ? section.title.split(":")[0] : id}`;
    }

    function currentQuizId(){
      if(sectionId === "random") return RANDOM_QUIZ_ID;
      if(sectionId === "wrong") return WRONG_QUIZ_ID;
      return quizIdFor(sectionId);
    }

    function currentModeLabel(){
      if(sectionId === "random") return `RANDOM ${randomExamSize} — EXAM MODE`;
      if(sectionId === "wrong") return "WRONG ANSWER REVIEW";
      return sectionId === "all" ? "FULL ASSESSMENT" : sectionId.toUpperCase();
    }

    // Every quizId that could plausibly have a saved in-progress session —
    // used to populate the resume banner on the menu.
    function allPossibleQuizIds(){
      return sections.map(s => quizIdFor(s.id)).concat([RANDOM_QUIZ_ID, WRONG_QUIZ_ID]);
    }

    function sectionIdForQuizId(qid){
      if(qid === RANDOM_QUIZ_ID) return "random";
      if(qid === WRONG_QUIZ_ID) return "wrong";
      const match = sections.find(s => quizIdFor(s.id) === qid);
      return match ? match.id : null;
    }

    function persistSession(){
      saveQuizSession(currentQuizId(), {
        sectionId, currentIndex, userAnswers, activeQuestions
      }, currentIdentity);
    }

    function render(){
      if(state === "menu") return renderMenu();
      if(state === "quiz") return renderQuiz();
      if(state === "results") return renderResults();
      if(state === "review") return renderReview();
    }

    function resumeBannerHtml(){
      const found = [];
      allPossibleQuizIds().forEach(qid => {
        const s = getQuizSession(qid);
        if(s && s.activeQuestions && s.activeQuestions.length) found.push({ qid, s });
      });
      if(found.length === 0) return "";
      return found.map(({qid, s}, i) => `
        <div class="resume-banner" data-resume-idx="${i}">
          <div>
            <b>▶ Resume in progress:</b> ${qid.replace(QUIZ_TITLE_PREFIX, "").replace(/^ — /, "") || "Full assessment"}
            — Question ${s.currentIndex + 1} of ${s.activeQuestions.length}
          </div>
          <div class="resume-banner-actions">
            <button class="btn btn-primary resume-btn" data-resume-qid="${encodeURIComponent(qid)}">Resume →</button>
            <button class="btn btn-ghost discard-btn" data-discard-qid="${encodeURIComponent(qid)}">Discard</button>
          </div>
        </div>
      `).join("");
    }

    function wireResumeBanner(){
      appEl.querySelectorAll(".resume-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const qid = decodeURIComponent(btn.dataset.resumeQid);
          const s = getQuizSession(qid);
          if(!s) return;
          sectionId = s.sectionId;
          activeQuestions = s.activeQuestions;
          currentIndex = s.currentIndex;
          userAnswers = s.userAnswers || {};
          score = 0;
          resumedFromSession = true;
          state = "quiz";
          render();
          window.scrollTo(0,0);
        });
      });
      appEl.querySelectorAll(".discard-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const qid = decodeURIComponent(btn.dataset.discardQid);
          clearQuizSession(qid, currentIdentity);
          renderMenu();
        });
      });
    }

    function renderMenu(){
      const topicDone = linkedTopicId ? getModuleProgress(linkedTopicId).covered : false;
      const totalSections = sections.filter(s => s.id !== "all").length;
      const acedCount = linkedTopicId ? getModuleProgress(linkedTopicId).acedSections.length : 0;
      const acedSet = new Set(linkedTopicId ? getModuleProgress(linkedTopicId).acedSections : []);

      let statusLine;
      if(!linkedTopicId){
        statusLine = "";
      }else if(modularCredit){
        statusLine = `<p style="margin-top:10px;color:${topicDone ? 'var(--accent-green)' : 'var(--text-mid)'};font-family:var(--mono);font-size:11.5px;">
          ${topicDone
            ? "✓ Topic marked done — all modules covered."
            : `${acedCount}/${totalSections} modules aced so far — ace all ${totalSections} (or the full assessment in one sitting) to mark the topic done.`}
        </p>`;
      }else{
        statusLine = `<p style="margin-top:10px;color:${topicDone ? 'var(--accent-green)' : 'var(--text-mid)'};font-family:var(--mono);font-size:11.5px;">
          ${topicDone ? "✓ Topic marked done." : "Score 100% on the full assessment to mark this topic done."}
        </p>`;
      }

      let html = `
        <div class="quiz-intro">
          <h1>${title}</h1>
          ${introHtml}
          ${statusLine}
        </div>
        ${resumeBannerHtml()}
        <div class="section-grid">
      `;

      sections.forEach(sec => {
        const qid = quizIdFor(sec.id);
        const best = getQuizBest(qid);
        const history = getQuizHistory(qid);
        const bestLine = best
          ? `<span class="s-best">Best: ${best.score}/${best.total} (${Math.round((best.score/best.total)*100)}%) · ${history.length} attempt${history.length===1?"":"s"}</span>`
          : `<span class="s-meta">Not attempted yet</span>`;
        const count = sec.id === "all" ? questions.length : questions.filter(q => q.section === sec.id).length;
        const isAced = modularCredit && sec.id !== "all" && acedSet.has(sec.id);
        html += `
          <button class="section-card ${sec.id==='all' ? 'full' : ''}" data-section="${sec.id}">
            <span class="s-meta">${count} QUESTIONS${isAced ? ' · ✓ ACED' : ''}</span>
            <h3 class="s-title">${sec.title}</h3>
            <p class="s-desc">${sec.desc}</p>
            ${bestLine}
          </button>
        `;
      });

      const rBest = getQuizBest(RANDOM_QUIZ_ID);
      const rHistory = getQuizHistory(RANDOM_QUIZ_ID);
      const rLine = rBest
        ? `<span class="s-best">Best: ${rBest.score}/${rBest.total} (${Math.round((rBest.score/rBest.total)*100)}%) · ${rHistory.length} attempt${rHistory.length===1?"":"s"}</span>`
        : `<span class="s-meta">Not attempted yet</span>`;
      html += `
        <button class="section-card" data-mode="random">
          <span class="s-meta">${randomExamSize} QUESTIONS</span>
          <h3 class="s-title">🎯 ${randomExamLabel || `Random ${randomExamSize} — Exam Mode`}</h3>
          <p class="s-desc">${randomExamSize} random questions pulled from the full question bank, freshly shuffled each time.</p>
          ${rLine}
        </button>
      `;

      const wrongIds = getWrongIds();
      const wLine = wrongIds.length
        ? `<span class="s-best">${wrongIds.length} question${wrongIds.length===1?"":"s"} queued for retry</span>`
        : `<span class="s-meta">Nothing queued — all clear</span>`;
      html += `
        <button class="section-card" data-mode="wrong" ${wrongIds.length===0 ? "style=\"opacity:0.55;cursor:default;\"" : ""}>
          <span class="s-meta">${wrongIds.length || 0} QUESTIONS</span>
          <h3 class="s-title">⚡ Wrong Answer Review</h3>
          <p class="s-desc">Retry only the questions you got wrong on your most recent attempts.</p>
          ${wLine}
        </button>
      `;

      html += `</div>`;
      appEl.innerHTML = html;

      appEl.querySelectorAll(".section-card[data-section]").forEach(btn => {
        btn.addEventListener("click", () => startQuiz(btn.dataset.section));
      });
      const rBtn = appEl.querySelector('[data-mode="random"]');
      if(rBtn) rBtn.addEventListener("click", () => startRandomExam());
      const wrongBtn = appEl.querySelector('[data-mode="wrong"]');
      if(wrongBtn) wrongBtn.addEventListener("click", () => startWrongReview());
      wireResumeBanner();
    }

    function startFresh(id, pool){
      sectionId = id;
      activeQuestions = shuffle(pool).map(shuffleOptions);
      currentIndex = 0;
      userAnswers = {};
      score = 0;
      resumedFromSession = false;
      state = "quiz";
      render();
      window.scrollTo(0,0);
    }

    function startQuiz(id){
      const pool = id === "all" ? questions : questions.filter(q => q.section === id);
      startFresh(id, pool);
    }

    function startRandomExam(){
      sectionId = "random";
      activeQuestions = shuffle(questions).slice(0, randomExamSize).map(shuffleOptions);
      currentIndex = 0;
      userAnswers = {};
      score = 0;
      resumedFromSession = false;
      state = "quiz";
      render();
      window.scrollTo(0,0);
    }

    function startWrongReview(){
      const wrongIds = getWrongIds();
      if(wrongIds.length === 0){
        state = "menu";
        render();
        toast("Nothing to retry — no wrong answers queued.");
        return;
      }
      sectionId = "wrong";
      const pool = questions.filter(q => wrongIds.includes(q.id));
      startFresh("wrong", pool);
    }

    function renderQuiz(){
      persistSession();
      const q = activeQuestions[currentIndex];
      const total = activeQuestions.length;
      const pct = Math.round(((currentIndex) / total) * 100);
      const selected = userAnswers[currentIndex];

      let bodyHtml;
      let hasAnswer;

      if(q.type === "written"){
        const ua = selected || {};
        hasAnswer = !!ua.marked;
        const draftText = escapeHtml(ua.userText || "");
        if(!ua.revealed){
          bodyHtml = `
            <textarea id="writtenInput" class="written-input" placeholder="Write your answer here…">${draftText}</textarea>
            <button class="btn btn-primary" id="revealBtn" style="margin-top:12px;">${q.gradeMode === 'auto' ? 'Check answer' : 'Reveal answer'}</button>
          `;
        }else{
          let feedback;
          if(q.gradeMode === 'auto'){
            feedback = `<div class="grade-result ${ua.correct ? 'correct' : 'incorrect'}">${ua.correct ? '✓ Marked correct' : '✗ Marked incorrect'} — matched ${(ua.matched||[]).length}/${(ua.matched||[]).length + (ua.missed||[]).length} key points.</div>`;
          }else if(ua.marked){
            feedback = `<div class="grade-result ${ua.correct ? 'correct' : 'incorrect'}">${ua.correct ? '✓ You marked this correct' : '✗ You marked this incorrect'}</div>`;
          }else{
            feedback = `
              <div class="self-mark-buttons">
                <button class="btn btn-primary" id="markRightBtn">✓ I got it right</button>
                <button class="btn btn-outline-white" id="markWrongBtn">✗ I got it wrong</button>
              </div>
            `;
          }
          bodyHtml = `
            <div class="written-answer-box">
              <div class="written-user-answer"><b>Your answer</b>${draftText || "<i>(no answer entered)</i>"}</div>
              <div class="written-model-answer"><b>Model answer</b>${escapeHtml(q.answer)}</div>
              ${feedback}
            </div>
          `;
        }
      }else{
        const isMulti = q.type === "multiple";
        const sel = selected || [];
        hasAnswer = sel.length > 0;
        let optsHtml = "";
        q.options.forEach((opt, i) => {
          const isSelected = sel.includes(i);
          const mark = isMulti ? (isSelected ? "☑" : "☐") : (isSelected ? "●" : "○");
          optsHtml += `<button class="opt-btn ${isSelected ? 'selected' : ''}" data-opt="${i}"><span style="margin-right:9px;">${mark}</span>${opt}</button>`;
        });
        bodyHtml = `<div class="opt-list">${optsHtml}</div>`;
      }

      appEl.innerHTML = `
        <div class="quiz-header">
          <span class="badge-pill purple">${currentModeLabel()}</span>
          <span class="q-count">Question ${currentIndex + 1} of ${total}${q.type === "multiple" ? " · select all that apply" : ""}</span>
        </div>
        <div class="progress-track"><div class="progress-fill" style="width:${pct}%;"></div></div>
        <div class="q-card" style="margin-top:20px;">
          <p class="q-text">${q.question}</p>
          ${bodyHtml}
        </div>
        <div class="quiz-nav">
          <button class="btn btn-ghost" id="quitBtn">Save &amp; exit</button>
          <button class="btn btn-primary" id="nextBtn" ${hasAnswer ? "" : "disabled"}>
            ${currentIndex === total - 1 ? "Finish" : "Next →"}
          </button>
        </div>
      `;

      if(q.type === "written"){
        const ua = selected || {};
        if(!ua.revealed){
          const textarea = document.getElementById("writtenInput");
          textarea.addEventListener("input", () => {
            userAnswers[currentIndex] = Object.assign({}, userAnswers[currentIndex], {
              type: "written", userText: textarea.value, revealed: false, marked: false
            });
          });
          document.getElementById("revealBtn").addEventListener("click", () => {
            const userText = textarea.value;
            if(q.gradeMode === 'auto'){
              const result = gradeWrittenAnswer(userText, q);
              userAnswers[currentIndex] = {
                type: "written", userText, revealed: true, marked: true,
                correct: result.correct, matched: result.matched, missed: result.missed
              };
            }else{
              userAnswers[currentIndex] = { type: "written", userText, revealed: true, marked: false };
            }
            render();
          });
        }else if(!ua.marked && q.gradeMode !== 'auto'){
          document.getElementById("markRightBtn").addEventListener("click", () => {
            userAnswers[currentIndex] = Object.assign({}, ua, { marked: true, correct: true });
            render();
          });
          document.getElementById("markWrongBtn").addEventListener("click", () => {
            userAnswers[currentIndex] = Object.assign({}, ua, { marked: true, correct: false });
            render();
          });
        }
      }else{
        appEl.querySelectorAll(".opt-btn").forEach(btn => {
          btn.addEventListener("click", () => {
            const i = parseInt(btn.dataset.opt, 10);
            let cur = userAnswers[currentIndex] || [];
            if(q.type === "multiple"){
              cur = cur.includes(i) ? cur.filter(v => v !== i) : cur.concat(i);
            }else{
              cur = [i];
            }
            userAnswers[currentIndex] = cur;
            render();
          });
        });
      }

      document.getElementById("quitBtn").addEventListener("click", () => {
        persistSession();
        toast("Progress saved — resume anytime from the menu.");
        state = "menu";
        render();
      });
      const nextBtn = document.getElementById("nextBtn");
      nextBtn.addEventListener("click", () => {
        if(currentIndex < total - 1){
          currentIndex++;
          render();
          window.scrollTo(0,0);
        }else{
          finishQuiz();
        }
      });
    }

    function finishQuiz(){
      score = activeQuestions.reduce((acc, q, idx) => acc + (isAnswerCorrect(userAnswers[idx], q) ? 1 : 0), 0);
      const missedIds = activeQuestions
        .filter((q, idx) => !isAnswerCorrect(userAnswers[idx], q))
        .map(q => q.id);
      const attemptedIds = activeQuestions.map(q => q.id);
      recordQuizAttempt(currentQuizId(), score, activeQuestions.length, currentIdentity, missedIds, attemptedIds);
      clearQuizSession(currentQuizId(), currentIdentity);

      const isPerfect = score === activeQuestions.length;
      const isRealModuleSection = sections.some(s => s.id === sectionId && s.id !== "all");

      justAutoCompletedTopic = false;
      justAcedSectionId = null;

      if(linkedTopicId && modularCredit){
        if(sectionId === "all" && isPerfect){
          const wasAlreadyDone = getModuleProgress(linkedTopicId).covered;
          setModuleCovered(linkedTopicId, true, currentIdentity);
          justAutoCompletedTopic = !wasAlreadyDone;
          sections.forEach(s => { if(s.id !== "all") addAcedQuizSection(linkedTopicId, s.id, currentIdentity); });
        }else if(isRealModuleSection && isPerfect){
          addAcedQuizSection(linkedTopicId, sectionId, currentIdentity);
          justAcedSectionId = sectionId;
          const totalSections = sections.filter(s => s.id !== "all").length;
          const acedNow = getModuleProgress(linkedTopicId).acedSections.length;
          if(acedNow >= totalSections){
            const wasAlreadyDone = getModuleProgress(linkedTopicId).covered;
            setModuleCovered(linkedTopicId, true, currentIdentity);
            justAutoCompletedTopic = !wasAlreadyDone;
          }
        }
      }else if(linkedTopicId && sectionId === "all" && isPerfect){
        const wasAlreadyDone = getModuleProgress(linkedTopicId).covered;
        setModuleCovered(linkedTopicId, true, currentIdentity);
        justAutoCompletedTopic = !wasAlreadyDone;
      }

      state = "results";
      render();
      window.scrollTo(0,0);
    }

    function renderResults(){
      const total = activeQuestions.length;
      const pct = Math.round((score / total) * 100);
      const passingScore = Math.ceil(total * passPct);
      const isPassed = score >= passingScore;

      let acedNote = "";
      if(justAcedSectionId){
        const totalSections = sections.filter(s => s.id !== "all").length;
        const aced = linkedTopicId ? getModuleProgress(linkedTopicId).acedSections.length : 0;
        acedNote = `<div class="pass-gate-box" style="border-color:rgba(62,214,160,0.35);">
          <p style="margin:0;color:var(--accent-green);"><b>✓ Module aced!</b> ${aced}/${totalSections} modules aced for this topic — the progress bar has moved accordingly.</p>
        </div>`;
      }

      appEl.innerHTML = `
        <div class="result-card">
          <div class="result-badge ${isPassed ? 'pass' : 'fail'}">${isPassed ? '✓' : '✗'}</div>
          <h2>${isPassed ? 'Assessment Passed' : 'Assessment Not Passed'}</h2>
          <p class="result-score">Final score: <b>${score} / ${total}</b> (${pct}%)</p>
          <div class="pass-gate-box">
            <p style="margin:0 0 6px;"><b>Pass gate:</b> ${Math.round(passPct*100)}% (${passingScore}/${total})</p>
            <p style="margin:0;">${isPassed
              ? "You've met the required standard."
              : `You didn't reach the ${Math.round(passPct*100)}% pass mark this time. Review the explanations below and try again.`}</p>
          </div>
          ${acedNote}
          ${justAutoCompletedTopic ? `
          <div class="pass-gate-box" style="border-color:rgba(62,214,160,0.35);">
            <p style="margin:0;color:var(--accent-green);"><b>✓ Perfect score!</b> This topic has been automatically marked as done.</p>
          </div>` : ""}
          <div style="display:flex;flex-direction:column;gap:10px;">
            <button class="btn btn-primary" id="reviewBtn" style="justify-content:center;padding:12px;">Review answers &amp; explanations</button>
            <button class="btn btn-outline-white" id="menuBtn" style="justify-content:center;padding:12px;">Return to menu</button>
          </div>
        </div>
      `;
      document.getElementById("reviewBtn").addEventListener("click", () => { state = "review"; render(); window.scrollTo(0,0); });
      document.getElementById("menuBtn").addEventListener("click", () => { state = "menu"; render(); });
    }

    function renderReview(){
      const total = activeQuestions.length;
      let html = `
        <div class="quiz-header">
          <div>
            <h2 style="margin:0;font-size:16px;color:var(--text-hi);">Review</h2>
            <span class="q-count">Score: ${score} / ${total} (${Math.round((score/total)*100)}%)</span>
          </div>
          <button class="btn btn-outline-white" id="menuBtn">Main menu</button>
        </div>
      `;

      activeQuestions.forEach((q, idx) => {
        const uAns = userAnswers[idx];
        const isCorrect = isAnswerCorrect(uAns, q);
        let bodyHtml;

        if(q.type === "written"){
          const ua = uAns || {};
          bodyHtml = `
            <div class="written-answer-box" style="margin-bottom:14px;">
              <div class="written-user-answer"><b>Your answer</b>${escapeHtml(ua.userText || "") || "<i>(no answer entered)</i>"}</div>
              <div class="written-model-answer"><b>Model answer</b>${escapeHtml(q.answer)}</div>
            </div>
          `;
        }else{
          let optsHtml = "";
          q.options.forEach((opt, oIdx) => {
            const isCorrectOpt = q.correct.includes(oIdx);
            const isUserPick = (uAns || []).includes(oIdx);
            let cls = "review-opt";
            if(isCorrectOpt) cls += " correct-opt";
            else if(isUserPick) cls += " wrong-pick";
            const mark = isCorrectOpt ? "✓" : (isUserPick ? "✗" : "•");
            optsHtml += `<div class="${cls}"><span>${mark}</span>${opt}</div>`;
          });
          bodyHtml = `<div class="review-opts">${optsHtml}</div>`;
        }

        html += `
          <div class="review-item ${isCorrect ? 'correct' : ''}">
            <div class="review-item-body">
              <div class="review-q-row">
                <h3>${idx + 1}. ${q.question}</h3>
                <span class="status-pill ${isCorrect ? 'correct' : 'incorrect'}">${isCorrect ? 'Correct' : 'Incorrect'}</span>
              </div>
              ${bodyHtml}
              ${q.rationale ? `<div class="rationale-box"><b>Explanation</b>${q.rationale}</div>` : ""}
            </div>
          </div>
        `;
      });

      html += `
        <div style="text-align:center;margin-top:20px;">
          <button class="btn btn-primary" id="menuBtn2" style="padding:12px 30px;">Return to menu</button>
        </div>
      `;

      appEl.innerHTML = html;
      document.getElementById("menuBtn").addEventListener("click", () => { state = "menu"; render(); });
      document.getElementById("menuBtn2").addEventListener("click", () => { state = "menu"; render(); });
    }

    (async function boot(){
      currentIdentity = await ensureIdentity();
      await initProgress(currentIdentity);

      const startParam = new URLSearchParams(window.location.search).get("start");
      if(startParam === "random"){
        startRandomExam();
      }else if(startParam === "wrong"){
        startWrongReview();
      }else if(startParam && sections.some(s => s.id === startParam)){
        startQuiz(startParam);
      }else{
        render();
      }
    })();

    return { }; // no public API needed — everything runs off the boot IIFE
  }

  return { init, gradeWrittenAnswer, isAnswerCorrect };
})();
