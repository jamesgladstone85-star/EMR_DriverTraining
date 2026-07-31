# EMR Driver Training — Project Notes

Read this first in any new chat before making changes. It explains what
exists, how it's wired together, and what's still placeholder vs real.

## What this is
A static training site for 10 train drivers, deployed on Netlify at
**dc64resources.netlify.app**, source in this repo, auto-deploys on every
push to `main`.

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
- `netlify/functions/progress.mjs` — GET/POST progress data (Netlify Blobs), PIN required on every call
- `netlify/functions/progress-auth.mjs` — first-use claims a name+PIN; later uses must match
- `netlify/functions/admin-reset-pin.mjs` — clears a forgotten PIN without touching that person's progress (needs `ADMIN_SECRET` env var set in Netlify, not in this repo)

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
- Deploy is just: edit files → `git push` to `main` → Netlify auto-builds
  (no build command, static site + Netlify Functions).
- Always `node --check` any edited `.js`/`.mjs` file before pushing.
- Sync (`git pull`) before editing, since edits may happen outside a
  given chat session too.
