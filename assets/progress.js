// Per-device progress tracking.
//
// This uses the browser's own localStorage — meaning each person who opens
// this site keeps their own private tick/pin state on their own device.
// Nobody else (not other teammates, not a server, not anyone) can see it.
// There is no account system and no shared backend here — clearing browser
// data or opening the site on a different device/browser starts fresh.

const PROGRESS_KEY = "emrTrainDrivingProgress_v1";

function _loadProgress(){
  try{
    const raw = window.localStorage.getItem(PROGRESS_KEY);
    return raw ? JSON.parse(raw) : {};
  }catch(e){
    // localStorage unavailable (private browsing, disabled, etc.) — fall
    // back to an in-memory object so the page still works for this session.
    return (window.__progressFallback = window.__progressFallback || {});
  }
}

function _saveProgress(data){
  try{
    window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(data));
  }catch(e){
    window.__progressFallback = data;
  }
}

function getModuleProgress(id){
  const all = _loadProgress();
  return all[id] || { covered:false, pinned:false };
}

function setModuleCovered(id, covered){
  const all = _loadProgress();
  all[id] = all[id] || {};
  all[id].covered = covered;
  _saveProgress(all);
}

function setModulePinned(id, pinned){
  const all = _loadProgress();
  all[id] = all[id] || {};
  all[id].pinned = pinned;
  _saveProgress(all);
}

// Merges the shared module list (names, guides, quizzes — same for everyone)
// with this device's own private covered/pinned state.
function getModulesWithProgress(){
  return MODULES.map(m=>{
    const p = getModuleProgress(m.id);
    return Object.assign({}, m, {
      covered: p.covered,
      pinned: p.pinned,
    });
  });
}
