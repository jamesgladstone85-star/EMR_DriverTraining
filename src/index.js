// Single Worker entry point for the whole site.
//
// Cloudflare's current Workers platform (Pages merged in) wants one script
// that both serves static files and handles any dynamic routes — not a
// folder of separate per-route files like the old Pages Functions model.
//
// - /api/progress, /api/auth, /api/admin-reset-pin -> handled here
// - everything else (index.html, module.html, assets/*, PDFs) -> passed
//   straight through to the static asset store (env.ASSETS)

function keyFor(user){
  return String(user || "").trim().toLowerCase();
}

function json(obj, status = 200){
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "content-type": "application/json" },
  });
}

function kvMissing(){
  return json({ error: "Storage not connected yet — PROGRESS_KV binding is missing." }, 500);
}

async function getRecord(env, user){
  const raw = await env.PROGRESS_KV.get(user);
  return raw ? JSON.parse(raw) : null;
}

async function handleProgressGet(request, env){
  if (!env.PROGRESS_KV) return kvMissing();
  const url = new URL(request.url);
  const user = keyFor(url.searchParams.get("user"));
  const pin = String(url.searchParams.get("pin") || "").trim();
  if (!user) return json({ error: "missing user" }, 400);

  const existing = await getRecord(env, user);
  if (!existing) return json({ error: "not signed in yet" }, 404);
  if (existing.pin && existing.pin !== pin) return json({ error: "incorrect PIN" }, 401);

  // Visit tracking: count as a new visit if last seen more than 30 minutes
  // ago, so browsing several pages in one sitting counts as one visit.
  const now = new Date();
  const lastVisit = existing.lastVisit ? new Date(existing.lastVisit) : null;
  const THIRTY_MIN = 30 * 60 * 1000;
  if (!lastVisit || (now - lastVisit) > THIRTY_MIN) {
    existing.visits = (existing.visits || 0) + 1;
  }
  existing.lastVisit = now.toISOString();
  await env.PROGRESS_KV.put(user, JSON.stringify(existing));

  const { pin: _omit, ...safe } = existing;
  return json(safe);
}

async function handleProgressPost(request, env){
  if (!env.PROGRESS_KV) return kvMissing();
  let body;
  try{
    body = await request.json();
  }catch(e){
    return json({ error: "invalid JSON body" }, 400);
  }
  const user = keyFor(body.user);
  const pin = String(body.pin || "").trim();
  if (!user) return json({ error: "missing user" }, 400);

  const existing = await getRecord(env, user);
  if (!existing) return json({ error: "not signed in yet" }, 404);
  if (existing.pin && existing.pin !== pin) return json({ error: "incorrect PIN" }, 401);

  const merged = Object.assign({}, existing, body.data || {}, { pin: existing.pin });
  await env.PROGRESS_KV.put(user, JSON.stringify(merged));
  return json({ ok: true });
}

async function handleAuth(request, env){
  if (!env.PROGRESS_KV) return kvMissing();
  let body;
  try{
    body = await request.json();
  }catch(e){
    return json({ ok:false, error:"Invalid request." }, 400);
  }

  const user = keyFor(body.user);
  const pin = String(body.pin || "").trim();

  if(!user) return json({ ok:false, error:"Pick a name." }, 400);
  if(!/^\d{4}$/.test(pin)) return json({ ok:false, error:"PIN must be exactly 4 digits." }, 400);

  const existing = await getRecord(env, user);

  if(!existing){
    await env.PROGRESS_KV.put(user, JSON.stringify({ pin, topics:{}, quizAttempts:{} }));
    return json({ ok:true, isNew:true });
  }

  if(!existing.pin){
    existing.pin = pin;
    await env.PROGRESS_KV.put(user, JSON.stringify(existing));
    return json({ ok:true, isNew:false });
  }

  if(existing.pin !== pin){
    return json({ ok:false, error:"Incorrect PIN for that name." }, 401);
  }

  return json({ ok:true, isNew:false });
}

// Kept in sync with assets/team.js — used only to show proper display
// names in the admin stats table (KV keys are lowercased).
const TEAM_MEMBERS = [
  "Daniel Cox",
  "Daniel Fretwell",
  "Daniel Patterson",
  "Donna'Ree Bennett",
  "Lee Palmer",
  "Lukas Jotautas",
  "Luke Yusuf",
  "Oliver Stretton",
  "Tom Rose",
  "James Gladstone",
];

function displayName(key){
  const match = TEAM_MEMBERS.find(n => n.toLowerCase() === key);
  return match || key;
}

async function handleAdminStats(request, env){
  const adminSecret = env.ADMIN_SECRET;
  if(!adminSecret){
    return json({ ok:false, error:"ADMIN_SECRET is not set in Cloudflare's environment variables yet." }, 500);
  }
  if (!env.PROGRESS_KV) return kvMissing();

  let body;
  try{
    body = await request.json();
  }catch(e){
    return json({ ok:false, error:"Invalid request." }, 400);
  }

  if(body.adminSecret !== adminSecret){
    return json({ ok:false, error:"Incorrect admin secret." }, 401);
  }

  const list = await env.PROGRESS_KV.list();
  const stats = [];
  for(const entry of list.keys){
    const raw = await env.PROGRESS_KV.get(entry.name);
    if(!raw) continue;
    const rec = JSON.parse(raw);
    const topicsCovered = Object.values(rec.topics || {}).filter(t => t.covered).length;
    stats.push({
      name: displayName(entry.name),
      visits: rec.visits || 0,
      lastVisit: rec.lastVisit || null,
      hasPin: !!rec.pin,
      topicsCovered,
    });
  }

  // Include team members who've never signed in at all, for completeness.
  TEAM_MEMBERS.forEach(name => {
    if(!stats.find(s => s.name === name)){
      stats.push({ name, visits: 0, lastVisit: null, hasPin: false, topicsCovered: 0 });
    }
  });

  stats.sort((a, b) => b.visits - a.visits);

  return json({ ok:true, stats });
}

async function handleAdminReset(request, env){
  const adminSecret = env.ADMIN_SECRET;
  if(!adminSecret){
    return json({ ok:false, error:"ADMIN_SECRET is not set in Cloudflare's environment variables yet." }, 500);
  }
  if (!env.PROGRESS_KV) return kvMissing();

  let body;
  try{
    body = await request.json();
  }catch(e){
    return json({ ok:false, error:"Invalid request." }, 400);
  }

  if(body.adminSecret !== adminSecret){
    return json({ ok:false, error:"Incorrect admin secret." }, 401);
  }

  const user = keyFor(body.user);
  if(!user){
    return json({ ok:false, error:"Pick a name to reset." }, 400);
  }

  const existing = await getRecord(env, user);
  if(!existing){
    return json({ ok:false, error:"That name has no record yet — nothing to reset." }, 404);
  }

  delete existing.pin;
  await env.PROGRESS_KV.put(user, JSON.stringify(existing));

  return json({ ok:true });
}

export default {
  async fetch(request, env, ctx){
    const url = new URL(request.url);

    if(url.pathname === "/api/progress"){
      if(request.method === "GET") return handleProgressGet(request, env);
      if(request.method === "POST") return handleProgressPost(request, env);
      return new Response("Method not allowed", { status: 405 });
    }

    if(url.pathname === "/api/auth"){
      if(request.method === "POST") return handleAuth(request, env);
      return new Response("Method not allowed", { status: 405 });
    }

    if(url.pathname === "/api/admin-reset-pin"){
      if(request.method === "POST") return handleAdminReset(request, env);
      return new Response("Method not allowed", { status: 405 });
    }

    if(url.pathname === "/api/admin-stats"){
      if(request.method === "POST") return handleAdminStats(request, env);
      return new Response("Method not allowed", { status: 405 });
    }

    // Everything else is a static file — index.html, module.html, CSS, PDFs.
    return env.ASSETS.fetch(request);
  },
};
