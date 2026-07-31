// POST /api/admin-reset-pin   body: { adminSecret, user }
//
// Clears a forgotten PIN without touching that person's actual progress.
// Requires ADMIN_SECRET set as an environment variable on this Pages
// project (Cloudflare dashboard → Settings → Environment variables) —
// never committed to the repo.

function keyFor(user){
  return String(user || "").trim().toLowerCase();
}

function json(obj, status = 200){
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "content-type": "application/json" },
  });
}

export async function onRequestPost({ request, env }){
  const adminSecret = env.ADMIN_SECRET;
  if(!adminSecret){
    return json({ ok:false, error:"ADMIN_SECRET is not set in Cloudflare's environment variables yet." }, 500);
  }

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

  const raw = await env.PROGRESS_KV.get(user);
  const existing = raw ? JSON.parse(raw) : null;

  if(!existing){
    return json({ ok:false, error:"That name has no record yet — nothing to reset." }, 404);
  }

  delete existing.pin;
  await env.PROGRESS_KV.put(user, JSON.stringify(existing));

  return json({ ok:true });
}
