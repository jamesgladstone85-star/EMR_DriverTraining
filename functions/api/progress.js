// GET  /api/progress?user=NAME&pin=1234   -> that person's saved progress
// POST /api/progress                       -> body: { user, pin, data }
//
// Requires a Workers KV namespace bound to this Pages project as
// `PROGRESS_KV` (Cloudflare dashboard → your Pages project → Settings →
// Functions → KV namespace bindings). Same PIN-on-every-request behaviour
// as before — knowing a name alone isn't enough via the API.

function keyFor(user){
  return String(user || "").trim().toLowerCase();
}

function json(obj, status = 200){
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "content-type": "application/json" },
  });
}

async function getRecord(env, user){
  const raw = await env.PROGRESS_KV.get(user);
  return raw ? JSON.parse(raw) : null;
}

export async function onRequestGet({ request, env }){
  const url = new URL(request.url);
  const user = keyFor(url.searchParams.get("user"));
  const pin = String(url.searchParams.get("pin") || "").trim();
  if (!user) return json({ error: "missing user" }, 400);

  const existing = await getRecord(env, user);
  if (!existing) return json({ error: "not signed in yet" }, 404);
  if (existing.pin && existing.pin !== pin) return json({ error: "incorrect PIN" }, 401);

  const { pin: _omit, ...safe } = existing;
  return json(safe);
}

export async function onRequestPost({ request, env }){
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
