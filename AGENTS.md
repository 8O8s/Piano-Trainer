# Copilot instructions for Piano-Trainer

## Project snapshot
- SvelteKit 3 + Svelte 5 + Vite 8 web app (JavaScript, ESM). Package manager: npm (`package-lock.json` present; `.npmrc` sets `engine-strict=true`).
- Current implementation is a fresh scaffold (`src/routes/+layout.svelte`, `src/routes/+page.svelte`); [README.md](README.md) describes the planned product and course documentation structure with many `<!-- TODO -->` placeholders.

## Commands
Run from the repo root:
- Install: `npm ci`
- Dev server: `npm run dev`
- Production build: `npm run build`
- Preview production build: `npm run preview`
- SvelteKit type/sync prep: `npm run prepare` (also configured as `prepare` script)

No lint or test scripts are configured in [package.json](package.json), and no lint/test config files are present. There is currently no single-test command.

## Architecture and key files
- [vite.config.js](vite.config.js): registers `@sveltejs/kit/vite`; forces Svelte 5 runes mode for project files (`runes: ({ filename }) => filename.split(/[/\\]/).includes('node_modules') ? undefined : true`) and configures `@sveltejs/adapter-auto`.
- [src/routes/+layout.svelte](src/routes/+layout.svelte): root layout; loads favicon via `#lib/assets/favicon.svg` and renders children with Svelte 5 `{@render children()}` / `$props()`.
- [src/routes/+page.svelte](src/routes/+page.svelte): home page placeholder.
- [src/lib/index.js](src/lib/index.js): placeholder for `$lib` / `#lib` exports.
- [src/app.html](src/app.html): HTML shell; [static/](static/) holds static assets (e.g. `robots.txt`).
- [docs/](docs/): course/project artifacts by phase (`01-understand` ... `05-validate`) plus [docs/ki-einsatz.md](docs/ki-einsatz.md) for the KI log.

## Conventions
- **Svelte 5 runes**: project source is compiled in runes mode by Vite config; use runes APIs (`$props()`, `$state()`, etc.) in app code.
- **Import alias**: `#lib` is defined in [package.json](package.json) `imports` (`#lib` -> `./src/lib/index.js`, `#lib/*` -> `./src/lib/*`). Keep alias usage consistent with existing code.
- **JS config**: [jsconfig.json](jsconfig.json) extends `$app/tsconfig` and enables `strict: true`.
- **README is structured project documentation**: [README.md](README.md) follows a fixed German template (chapter order/numbering, project overview table, KI declaration). When updating it, preserve the required structure and only replace relevant TODO/placeholders; keep artifact links in the documented locations (e.g. `docs/...`).
- **KI log**: record AI-assisted work in [docs/ki-einsatz.md](docs/ki-einsatz.md) when the task falls under the project’s KI documentation practice.

## Product
Piano-Trainer: web app for self-taught piano learners. Users import MIDI files of their favourite pieces, practise them with sheet music and a virtual keyboard, and track their progress. 

## Planned stack
- Persistence: MongoDB (connection string in `.env` as `DB_URI`, never committed)
- Deployment: Netlify (`@sveltejs/adapter-netlify`, replaces adapter-auto)
- Data loading via `+page.server.js`, create/edit via SvelteKit form actions with `use:enhance`

## Rules
- UI texts in German (Swiss spelling: «ss» instead of «ß»), code and comments in English.
- Reusable UI in `src/lib/components/`, server-only code in `src/lib/server/`.
- Always show user feedback: success/error messages, loading states, confirmation before deleting.
- No new dependencies without asking first.
- Never put passwords, API keys or connection strings in code or docs.
- Only use MIDI files with a clear licence (public domain / CC); no copyrighted songs in the repo.
- Work in small steps; ask if something is unclear.
- Commits: Conventional Commits with issue reference, e.g. `feat: MIDI import (closes #3)`.
- To implement a GitHub issue, use the skill `issue-umsetzen` (`.agents/skills/issue-umsetzen/SKILL.md`).
