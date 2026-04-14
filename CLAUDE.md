# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server at localhost:3000
npm run build        # Production build
npm run lint         # ESLint (flat config, Next.js core-web-vitals + typescript)
npm run start        # Serve production build
```

No test framework is configured.

## Architecture

Personal academic website for Simar Kareer. Next.js 16 App Router with TypeScript, deployed on Vercel at simarkareer.com.

### Routing

- `/` — Homepage: bio, profile photo, selected works, talks (`src/app/page.tsx`)
- `/papers` — Full paper list with authors, venues, awards (`src/app/papers/page.tsx`)
- Layout with top nav is in `src/app/layout.tsx`

### Data layer

All paper data lives in `src/data/papers.ts` as a typed `Paper[]` array. Exported derived lists:
- `papersNewestFirst` — sorted by year/month descending
- `highlightedPapers` — filtered subset controlled by `highlightedPaperIds`

When adding a paper, add it to the `papers` array. To feature it on the homepage, add its `id` to `highlightedPaperIds`.

### Styling

- Global CSS only (`src/app/globals.css`) — no Tailwind, no CSS modules in active use
- CSS custom properties defined in `:root` for colors, spacing, typography
- `page.module.css` exists but is unused (leftover from Next.js scaffolding)
- Font: IBM Plex Mono loaded via `next/font/google`, set as `--font-mono` CSS variable
- Responsive breakpoints at 700px and 560px

### Path alias

`@/*` maps to `./src/*` (configured in `tsconfig.json`).
