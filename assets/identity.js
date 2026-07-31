// Identity: pick your name from the team list, set/enter a 4-digit PIN.
// First time a name is used it claims that PIN; after that the same PIN is
// required. Verified against the server (see netlify/functions/progress-auth.mjs)
// so this actually works as a light gate, not just a UI suggestion.

const IDENTITY_KEY = "emrTrainDrivingIdentity_v1";

function getIdentity(){
  try{
    const raw = window.localStorage.getItem(IDENTITY_KEY);
    return raw ? JSON.parse(raw) : null;
  }catch(e){
    return window.__identityFallback || null;
  }
}

function _saveIdentity(identity){
  try{
    window.localStorage.setItem(IDENTITY_KEY, JSON.stringify(identity));
  }catch(e){
    window.__identityFallback = identity;
  }
}

function clearIdentity(){
  try{
    window.localStorage.removeItem(IDENTITY_KEY);
  }catch(e){
    window.__identityFallback = null;
  }
}

async function _verifyWithServer(name, pin){
  const res = await fetch("/api/auth", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ user: name, pin }),
  });
  const body = await res.json().catch(()=>({}));
  return { ok: res.ok && body.ok, error: body.error };
}

// Shows a blocking modal (name dropdown + PIN) if no identity is stored yet.
// Resolves with { name, pin } once signed in.
function ensureIdentity(){
  return new Promise((resolve)=>{
    const existing = getIdentity();
    if(existing && existing.name && existing.pin){
      resolve(existing);
      return;
    }

    const overlay = document.createElement("div");
    overlay.id = "identityOverlay";
    Object.assign(overlay.style, {
      position:"fixed", inset:"0", background:"rgba(4,2,8,0.85)",
      display:"flex", alignItems:"center", justifyContent:"center",
      zIndex:"2000", fontFamily:"var(--ui, sans-serif)",
    });

    const options = TEAM_MEMBERS.map(n => `<option value="${n}">${n}</option>`).join("");

    overlay.innerHTML = `
      <div style="background:var(--bg-panel,#120B1A);border:1px solid var(--border-hair-strong,#333);
                  border-radius:14px;padding:28px 30px;max-width:340px;width:90%;">
        <h2 style="font-family:var(--display,sans-serif);font-size:19px;margin:0 0 8px;color:var(--text-hi,#fff);">
          Who's this?
        </h2>
        <p style="font-size:12.5px;color:var(--text-mid,#aaa);margin:0 0 16px;line-height:1.5;">
          Pick your name and set a 4-digit PIN. First time uses it to lock in your PIN —
          after that, the same PIN is needed to get back into your progress.
        </p>
        <select id="identitySelect"
          style="width:100%;padding:10px 12px;border-radius:8px;border:1px solid var(--border-hair-strong,#444);
                 background:var(--bg-card,#170F21);color:var(--text-hi,#fff);font-family:var(--ui,sans-serif);
                 font-size:13px;outline:none;box-sizing:border-box;margin-bottom:10px;">
          ${options}
        </select>
        <input id="identityPin" type="password" inputmode="numeric" pattern="[0-9]*" maxlength="4"
          placeholder="4-digit PIN"
          style="width:100%;padding:10px 12px;border-radius:8px;border:1px solid var(--border-hair-strong,#444);
                 background:var(--bg-card,#170F21);color:var(--text-hi,#fff);font-family:var(--mono,monospace);
                 font-size:14px;letter-spacing:0.3em;outline:none;box-sizing:border-box;margin-bottom:8px;">
        <p id="identityError" style="font-size:11.5px;color:var(--accent-red,#ff5d8f);min-height:14px;margin:0 0 10px;"></p>
        <button id="identitySubmit"
          style="width:100%;padding:10px;border-radius:8px;border:none;background:var(--accent-purple,#C77DFF);
                 color:#170022;font-weight:700;font-family:var(--ui,sans-serif);font-size:13px;cursor:pointer;">
          Continue
        </button>
      </div>
    `;
    document.body.appendChild(overlay);

    const select = overlay.querySelector("#identitySelect");
    const pinInput = overlay.querySelector("#identityPin");
    const errorEl = overlay.querySelector("#identityError");
    const submit = overlay.querySelector("#identitySubmit");
    pinInput.focus();

    async function submitForm(){
      const name = select.value;
      const pin = pinInput.value.trim();
      errorEl.textContent = "";

      if(!/^\d{4}$/.test(pin)){
        errorEl.textContent = "PIN must be exactly 4 digits.";
        return;
      }

      submit.disabled = true;
      submit.textContent = "Checking…";
      try{
        const result = await _verifyWithServer(name, pin);
        if(!result.ok){
          errorEl.textContent = result.error || "Something went wrong — try again.";
          submit.disabled = false;
          submit.textContent = "Continue";
          return;
        }
        const identity = { name, pin };
        _saveIdentity(identity);
        overlay.remove();
        resolve(identity);
      }catch(e){
        errorEl.textContent = "Couldn't reach the server — check your connection and try again.";
        submit.disabled = false;
        submit.textContent = "Continue";
      }
    }

    submit.addEventListener("click", submitForm);
    pinInput.addEventListener("keydown", (e)=>{ if(e.key === "Enter") submitForm(); });
  });
}
