// POST /api/auth  body: { user: "NAME", pin: "1234" }
//
// First time a name is used, it "claims" that name with the given PIN.
// Every time after that, the same PIN must be supplied or the request is
// rejected. This is a lightweight deterrent for a small trusted team, not
// real security — a determined person could still call the API directly.
// It's enough to stop someone casually picking a teammate's name off the
// dropdown.

import { getStore } from "@netlify/blobs";

function keyFor(user){
  return String(user || "").trim().toLowerCase();
}

function json(obj, status = 200){
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "content-type": "application/json" },
  });
}

export default async (req) => {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });

  let body;
  try{
    body = await req.json();
  }catch(e){
    return json({ ok:false, error:"Invalid request." }, 400);
  }

  const user = keyFor(body.user);
  const pin = String(body.pin || "").trim();

  if(!user){
    return json({ ok:false, error:"Pick a name." }, 400);
  }
  if(!/^\d{4}$/.test(pin)){
    return json({ ok:false, error:"PIN must be exactly 4 digits." }, 400);
  }

  const store = getStore({ name: "progress", consistency: "strong" });
  const existing = await store.get(user, { type: "json" });

  if(!existing){
    await store.setJSON(user, { pin, topics:{}, quizAttempts:{} });
    return json({ ok:true, isNew:true });
  }

  if(!existing.pin){
    // record exists from before the PIN feature existed — claim it now
    existing.pin = pin;
    await store.setJSON(user, existing);
    return json({ ok:true, isNew:false });
  }

  if(existing.pin !== pin){
    return json({ ok:false, error:"Incorrect PIN for that name." }, 401);
  }

  return json({ ok:true, isNew:false });
};

export const config = { path: "/api/auth" };
