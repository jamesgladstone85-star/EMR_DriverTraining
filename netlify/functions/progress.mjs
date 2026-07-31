// Serverless endpoint for cross-device progress sync.
//
// GET  /api/progress?user=NAME   -> returns that person's saved progress (or {})
// POST /api/progress             -> body: { user: "NAME", data: {...} }, saves it
//
// Storage is a single Netlify Blobs store called "progress", one JSON blob
// per person, keyed by their name (lowercased/trimmed). There's no password
// here — just a name someone picks once. That's a deliberate, simple choice
// for a small trusted team (10 people); anyone who knows/guesses a
// teammate's exact name could read or overwrite their record. Fine for this
// use case, but worth knowing.

import { getStore } from "@netlify/blobs";

function keyFor(user){
  return String(user || "").trim().toLowerCase();
}

export default async (req) => {
  const store = getStore({ name: "progress", consistency: "strong" });
  const url = new URL(req.url);

  if (req.method === "GET") {
    const user = keyFor(url.searchParams.get("user"));
    if (!user) {
      return new Response(JSON.stringify({ error: "missing user" }), {
        status: 400,
        headers: { "content-type": "application/json" },
      });
    }
    const data = await store.get(user, { type: "json" });
    return new Response(JSON.stringify(data || {}), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  }

  if (req.method === "POST") {
    let body;
    try {
      body = await req.json();
    } catch (e) {
      return new Response(JSON.stringify({ error: "invalid JSON body" }), {
        status: 400,
        headers: { "content-type": "application/json" },
      });
    }
    const user = keyFor(body.user);
    if (!user) {
      return new Response(JSON.stringify({ error: "missing user" }), {
        status: 400,
        headers: { "content-type": "application/json" },
      });
    }
    await store.setJSON(user, body.data || {});
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  }

  return new Response("Method not allowed", { status: 405 });
};

export const config = { path: "/api/progress" };
