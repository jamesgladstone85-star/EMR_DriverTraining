# EMR Driver Training — Project Notes

Read this first in any new chat before making changes. It explains what
exists, how it's wired together, and what's still placeholder vs real.

## What this is
A static training site for 10 train drivers, hosted on **Cloudflare
Pages**, source in this repo, auto-deploys on every push to `main`.
(Previously on Netlify — migrated to Cloudflare because Netlify's
credit-based free tier charges per production deploy, which we were
hitting often; Cloudflare Pages + Workers KV covers the same job for
free at this scale.)

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
- `functions/api/progress.js` — GET/POST progress data (Cloudflare Workers KV), PIN required on every call
- `functions/api/auth.js` — first-use claims a name+PIN; later uses must match
- `functions/api/admin-reset-pin.js` — clears a forgotten PIN without touching that person's progress (needs `ADMIN_SECRET` env var set in Cloudflare, not in this repo)

## Cloudflare setup (one-time, dashboard only — not in this repo)
1. Cloudflare dashboard → Workers & Pages → Create → Pages → connect this GitHub repo. Framework preset: None. Build command: blank. Build output directory: `/` (repo root).
2. Workers & Pages → KV → create a namespace (e.g. `progress`).
3. Back on the Pages project → Settings → Functions → KV namespace bindings → add binding: variable name `PROGRESS_KV` → the namespace from step 2. Do this for both Production and Preview.
4. Settings → Environment variables → add `ADMIN_SECRET` (any passphrase, known only to the admin).
5. Trigger a redeploy after adding bindings/env vars so they take effect.

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
- Forgotten PIN → `admin.html`, requires `ADMIN_SECRET` (Netlify env var,
  known only to James).

## Known gaps / not yet built
- No actual quiz-taking interface yet (cards say "Start quiz →" but it's
  just a placeholder toast) — this is the next big piece.
- Many topics still have placeholder guide/quiz/tool titles — see
  `data.js` for which ones ("Add real questions here" marks placeholders).

## Working conventions
- Deploy is just: edit files → `git push` to `main` → Cloudflare Pages
  auto-builds (no build command, static site + Pages Functions).
- Always `node --check` any edited `.js` file before pushing.
- Sync (`git pull`) before editing, since edits may happen outside a
  given chat session too.
- Migrating away from Cloudflare later? The API paths (`/api/progress`,
  `/api/auth`, `/api/admin-reset-pin`) are deliberately host-agnostic —
  only the three files in `functions/api/` need rewriting for whatever
  new platform's function/storage API looks like; nothing in `assets/`
  needs to change.
