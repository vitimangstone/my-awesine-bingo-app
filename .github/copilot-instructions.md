# Copilot Instructions for Soc Ops

## Development Checklist

Before committing changes, run:
- [ ] `npm run lint` — ESLint checks (ESLint 9 + TypeScript)
- [ ] `npm run build` — Type check + build (`tsc -b && vite build`)
- [ ] `npm run test` — Vitest tests (jsdom environment)

## Project Overview

**Soc Ops** is a social bingo game for in-person mixers. Players find people who match bingo prompts to get 5 in a row. React 19 + TypeScript web app deployed to GitHub Pages.

**Architecture**: App → StartScreen/GameScreen → BingoBoard → BingoSquare (×25). State managed by `useBingoGame()` hook with localStorage persistence.

**Business Rules**: 5×5 grid, center (index 12) is pre-marked FREE SPACE, 24 shuffled questions from `src/data/questions.ts`, win = 5 in a row (horizontal/vertical/diagonal).

## Key Files & Patterns

**Code Organization**:
- `src/types/index.ts` — All domain types (BingoSquareData, BingoLine, GameState)
- `src/utils/bingoLogic.ts` — **Pure functions** (no React): generateBoard(), toggleSquare(), checkBingo()
- `src/hooks/useBingoGame.ts` — State + localStorage with strict validation
- `src/components/*.tsx` — Presentational (props-driven, no side effects)
- `src/data/questions.ts` — Question pool (Fisher-Yates shuffled)

**Critical Patterns**:
- Game logic is **pure** and testable (in utils, see `bingoLogic.test.ts`)
- Components use explicit props (no prop drilling yet)
- **localStorage validated** on read (version + type checks in useBingoGame)
- Immutable updates for board state (return new arrays/objects)
- TypeScript strict mode (noImplicitAny)

**Common Changes**:
- Add prompts → `src/data/questions.ts`
- Change win rules → `src/utils/bingoLogic.ts` + update types + retest
- Styling → `src/components/*.tsx` (Tailwind v4 via @tailwindcss/vite)
- New game rules → `src/hooks/useBingoGame.ts` + types first

## Tech Stack

- **Vite** (`npm run dev`) — Dev server + build
- **React 19** + **TypeScript** — UI framework
- **Tailwind CSS v4** — Styling via @tailwindcss/vite
- **Vitest** — Testing (test files: `src/**/*.test.ts`)
- **GitHub Pages** — Auto-deploy on `main` (base: `/{repo-name}/`)

**Deployment**: Commits to `main` trigger GitHub Actions build. Base path uses `VITE_REPO_NAME` env var (vite.config.ts).

## Do's & Don'ts

✅ Keep game logic pure • Validate storage • Immutable updates • Test utils independently

❌ No side effects in utils • No state mutations • No localStorage access without validation
