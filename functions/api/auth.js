// POST /api/auth   body: { user: "NAME", pin: "1234" }
//
// First time a name is used, it claims that PIN. Later uses must match.
// Requires the same PROGRESS_KV binding as functions/api/progress.js.

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

  const raw = await env.PROGRESS_KV.get(user);
  const existing = raw ? JSON.parse(raw) : null;

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
