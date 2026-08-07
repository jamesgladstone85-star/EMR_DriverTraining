# EMR Driver Training — Project Notes

Read this first in any new chat before making changes. It explains what
exists, how it's wired together, and what's still placeholder vs real.

## What this is
A static training site for 10 train drivers, hosted on **Cloudflare
Workers (with Static Assets)**, source in this repo, auto-deploys on
every push to `main`.
(Previously Netlify, then briefly attempted as Cloudflare Pages —
Cloudflare has since merged Pages into a unified Workers platform, so
the backend is structured as a single Worker script + `wrangler.jsonc`
config rather than a Pages Functions folder. If you're reading this in
a future chat and Cloudflare's dashboard looks different again, check
their current docs before assuming this structure is still right.)

## File structure
- `index.html` — homepage: sidebar (quick actions, progress rail, search/filter), main area (module groups + topic cards)
- `module.html` — one template for every topic's detail page (reads `?id=` from the URL)
- `admin.html` — hidden (not linked from nav) PIN-reset tool for whoever holds `ADMIN_SECRET`
- `assets/data.js` — **the single source of truth for all content**: `MODULE_GROUPS` (Exam Prep + Modules 1–4), each containing topics with guides/quizzes/tools. Edit this file to add/rename content — nothing else needs to change.
- `assets/team.js` — the 10 real names shown in the sign-in dropdown
- `assets/styles.css` — shared dark theme (Syne/Space Grotesk/JetBrains Mono, Linear/Vercel-style)
- `assets/identity.js` — name + PIN sign-in modal
- `assets/progress.js` — progress state: local cache + syncs to the server so it follows people across devices
- `assets/guides/*.pdf` — real uploaded revision guide PDFs, referenced by `file:` in `data.js`
- `wrangler.jsonc` — Worker config: entry script, static assets directory, (once bound) the KV namespace
- `src/index.js` — **the entire backend in one file**: routes `/api/progress`, `/api/auth`, `/api/admin-reset-pin`, and passes everything else through to static assets. PIN required on every progress read/write.
- `.assetsignore` — keeps `src/`, `wrangler.jsonc`, etc. from being served as public static files

## Cloudflare setup (status: done, live and working)
Live at: **https://dc64.drivertraining.workers.dev/**

- KV namespace `progress` created, bound in code via `wrangler.jsonc`'s
  `kv_namespaces` entry (ID `3163a60339474220ae8dd7613f7c8756`) — no
  dashboard binding needed, it's fully in version control.
- `ADMIN_SECRET` set as an encrypted Secret under the `dc64` worker's
  Settings → Variables and secrets. **Confirmed working** (admin.html
  PIN reset tested successfully).
- One Cloudflare quirk worth remembering: saving a new variable/secret
  in the dashboard creates a new *version* but does **not** automatically
  make it the active deployment — you have to go to Deployments →
  find that version → use the `...` menu → promote/deploy it. Easy to
  miss, cost real time working this out once already.
- If the KV binding ever needs redoing from scratch: Storage & Databases
  → Workers KV → Create Instance → name it → copy its ID → add a
  `kv_namespaces` entry to `wrangler.jsonc` with that ID (don't rely on
  the dashboard's own "Add binding" KV picker — it was unreliable/showed
  only docs with no actual input fields when this was set up).

## How content is structured (`assets/data.js`)
23 topics total across 5 groups (Modules 1–4, then Exam Prep last). Each
topic has:
```js
{
  id: "kebab-case-id",
  name: "Display Name",
  description: "One-line summary shown on the homepage card.",
  guides: [{ title: "...", subtitle: "optional rule book ref", file: "assets/guides/xxx.pdf" }],
  quizzes: [{ title: "...", bullets: ["topic 1", "topic 2"] }],
  tools: [{ title: "..." }],
}
```
Topics with no real content yet just have placeholder guide/quiz titles —
these are intentional, matching the real course's actual guide/quiz/tool
counts, ready to be replaced.

**When given a new revision-guide PDF:** copy it into `assets/guides/`,
add a `file:` entry to the matching topic in `data.js`. **Do not** invent
quiz questions or bullets unless explicitly asked — several past requests
were "just add the PDF, don't touch the quiz."

## Identity / progress system
- No real authentication — a name (from a fixed dropdown of 10) + a
  self-set 4-digit PIN. First use claims the PIN; the server checks it on
  every read/write. This is a lightweight deterrent for a small trusted
  team, not real security.
- Quiz retakes: **every attempt is kept** (full history), never
  overwritten — this was an explicit decision, don't change to
  "latest only" or "best only" without asking.
- Forgotten PIN → `admin.html`, requires `ADMIN_SECRET` (Cloudflare
  secret, known only to James).
- **Visit tracking**: each record also stores `visits` (count) and
  `lastVisit` (ISO timestamp), incremented server-side on every
  `/api/progress` GET — but only counted as a new visit if the last one
  was more than 30 minutes ago, so browsing several pages in one sitting
  is one visit, not five. View via `admin.html`'s "View Visit Stats"
  button (same admin secret). `TEAM_MEMBERS` is duplicated in
  `src/index.js` (server-side, for display-name lookup) — keep it in
  sync with `assets/team.js` if the roster ever changes.

## Known gaps / not yet built
- No actual quiz-taking interface yet (cards say "Start quiz →" but it's
  just a placeholder toast) — this is the next big piece.
- Many topics still have placeholder guide/quiz/tool titles — see
  `data.js` for which ones ("Add real questions here" marks placeholders).

## Working conventions
- Deploy is just: edit files → `git push` to `main` → Cloudflare Workers
  auto-builds (no build command; `wrangler.jsonc` defines the entry
  script + static assets directory + KV binding).
- **Reminder about the deploy quirk**: pushing code auto-deploys fine,
  but dashboard-only changes (like adding/editing a secret) create a
  new version that needs manually promoting in the Deployments tab —
  see the Cloudflare setup section above.
- Always `node --check` any edited `.js` file before pushing.
- Sync (`git pull`) before editing, since edits may happen outside a
  given chat session too.
- Migrating away from Cloudflare later? The API paths (`/api/progress`,
  `/api/auth`, `/api/admin-reset-pin`) are deliberately host-agnostic —
  only `src/index.js` (plus whatever config file the new host wants)
  needs rewriting for that platform's function/storage API; nothing in
  `assets/` needs to change.
