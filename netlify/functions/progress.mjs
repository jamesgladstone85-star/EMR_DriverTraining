// GET  /api/progress?user=NAME&pin=1234   -> that person's saved progress
// POST /api/progress                       -> body: { user, pin, data }
//
// The PIN is checked on every request (not just at sign-in), so knowing
// someone's name alone isn't enough to read or change their record via the
// API directly. Still not real security for a public app — fine for a
// small trusted team using their own PIN.

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
  const store = getStore({ name: "progress", consistency: "strong" });
  const url = new URL(req.url);

  if (req.method === "GET") {
    const user = keyFor(url.searchParams.get("user"));
    const pin = String(url.searchParams.get("pin") || "").trim();
    if (!user) return json({ error: "missing user" }, 400);

    const existing = await store.get(user, { type: "json" });
    if (!existing) return json({ error: "not signed in yet" }, 404);
    if (existing.pin && existing.pin !== pin) return json({ error: "incorrect PIN" }, 401);

    const { pin: _omit, ...safe } = existing;
    return json(safe);
  }

  if (req.method === "POST") {
    let body;
    try{
      body = await req.json();
    }catch(e){
      return json({ error: "invalid JSON body" }, 400);
    }
    const user = keyFor(body.user);
    const pin = String(body.pin || "").trim();
    if (!user) return json({ error: "missing user" }, 400);

    const existing = await store.get(user, { type: "json" });
    if (!existing) return json({ error: "not signed in yet" }, 404);
    if (existing.pin && existing.pin !== pin) return json({ error: "incorrect PIN" }, 401);

    const merged = Object.assign({}, existing, body.data || {}, { pin: existing.pin });
    await store.setJSON(user, merged);
    return json({ ok: true });
  }

  return new Response("Method not allowed", { status: 405 });
};

export const config = { path: "/api/progress" };
