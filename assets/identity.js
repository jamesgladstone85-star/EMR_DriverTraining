// Simple identity: each person picks a name once, remembered on that
// device. No password — it's just a key for looking up their progress.
// Same name on a different device = same progress, synced via the
// /api/progress serverless function.

const IDENTITY_KEY = "emrTrainDrivingUser_v1";

function getIdentity(){
  try{
    return window.localStorage.getItem(IDENTITY_KEY) || null;
  }catch(e){
    return window.__identityFallback || null;
  }
}

function setIdentity(name){
  const clean = String(name || "").trim();
  try{
    window.localStorage.setItem(IDENTITY_KEY, clean);
  }catch(e){
    window.__identityFallback = clean;
  }
  return clean;
}

function clearIdentity(){
  try{
    window.localStorage.removeItem(IDENTITY_KEY);
  }catch(e){
    window.__identityFallback = null;
  }
}

// Shows a small blocking modal asking for a name if none is stored yet.
// Resolves with the name once one is available (existing or newly entered).
function ensureIdentity(){
  return new Promise((resolve)=>{
    const existing = getIdentity();
    if(existing){
      resolve(existing);
      return;
    }

    const overlay = document.createElement("div");
    overlay.id = "identityOverlay";
    Object.assign(overlay.style, {
      position:"fixed", inset:"0", background:"rgba(4,2,8,0.82)",
      display:"flex", alignItems:"center", justifyContent:"center",
      zIndex:"2000", fontFamily:"var(--ui, sans-serif)",
    });
    overlay.innerHTML = `
      <div style="background:var(--bg-panel,#120B1A);border:1px solid var(--border-hair-strong,#333);
                  border-radius:14px;padding:28px 30px;max-width:340px;width:90%;">
        <h2 style="font-family:var(--display,sans-serif);font-size:19px;margin:0 0 8px;color:var(--text-hi,#fff);">
          What's your name?
        </h2>
        <p style="font-size:12.5px;color:var(--text-mid,#aaa);margin:0 0 16px;line-height:1.5;">
          This is just so your progress can follow you across devices — no password needed.
          Use the same name each time.
        </p>
        <input id="identityInput" type="text" placeholder="e.g. James Gladstone"
          style="width:100%;padding:10px 12px;border-radius:8px;border:1px solid var(--border-hair-strong,#444);
                 background:var(--bg-card,#170F21);color:var(--text-hi,#fff);font-family:var(--mono,monospace);
                 font-size:13px;outline:none;box-sizing:border-box;margin-bottom:14px;">
        <button id="identitySubmit"
          style="width:100%;padding:10px;border-radius:8px;border:none;background:var(--accent-purple,#C77DFF);
                 color:#170022;font-weight:700;font-family:var(--ui,sans-serif);font-size:13px;cursor:pointer;">
          Continue
        </button>
      </div>
    `;
    document.body.appendChild(overlay);

    const input = overlay.querySelector("#identityInput");
    const submit = overlay.querySelector("#identitySubmit");
    input.focus();

    function submitName(){
      const val = input.value.trim();
      if(!val) { input.focus(); return; }
      setIdentity(val);
      overlay.remove();
      resolve(val);
    }
    submit.addEventListener("click", submitName);
    input.addEventListener("keydown", (e)=>{ if(e.key === "Enter") submitName(); });
  });
}
