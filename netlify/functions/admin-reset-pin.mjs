// POST /api/admin-reset-pin   body: { adminSecret, user }
//
// Clears the PIN for a name so they can pick it again and set a fresh one —
// their topics/quizAttempts are left completely untouched, only the PIN is
// removed. Requires ADMIN_SECRET to be set as an environment variable in
// Netlify (Site configuration → Environment variables). Nobody but whoever
// knows that secret can call this successfully.

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

  const adminSecret = process.env.ADMIN_SECRET;
  if(!adminSecret){
    return json({ ok:false, error:"ADMIN_SECRET is not set in Netlify's environment variables yet." }, 500);
  }

  let body;
  try{
    body = await req.json();
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

  const store = getStore({ name: "progress", consistency: "strong" });
  const existing = await store.get(user, { type: "json" });

  if(!existing){
    return json({ ok:false, error:"That name has no record yet — nothing to reset." }, 404);
  }

  delete existing.pin;
  await store.setJSON(user, existing);

  return json({ ok:true });
};

export const config = { path: "/api/admin-reset-pin" };
