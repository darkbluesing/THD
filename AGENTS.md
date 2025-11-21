# Repository Guidelines

## Project Structure & Module Organization
`frontend/` contains the Next.js App Router surface: routes live in `src/app`, composable UI sits in `src/components`, hooks in `src/hooks`, API clients in `src/services`, and design tokens plus Tailwind helpers in `src/styles`; public assets share `frontend/public`. Root-level `templates/` + `static/` power the legacy Flask grid, while `tests/` and `script/prd.md` support the TikTok crawler and Task Master planning. Netlify/Vercel config files and the top-level `public/` folder must stay synchronized with whichever surface is being deployed.

## Build, Test, and Development Commands
Use `cd frontend && npm run dev` during local work, `npm run build` for production bundles, and keep `npm run lint`/`npm run format` clean before committing. Run React unit tests via `npm run test:unit`, execute browser flows with `npx playwright test frontend/tests/e2e`, and validate the crawler path by calling `python crawler.py "keyword" --count 50 --refresh` plus `python -m unittest tests/test_crawler.py`.

## Coding Style & Naming Conventions
TypeScript follows the `next/core-web-vitals` ESLint preset with Prettier formatting; underline unused params (`_unused`) and let `react/jsx-sort-props` order props automatically. React components stay in PascalCase files (`SideBanner.tsx`), hooks start with `use`, and shared constants or types belong in `@/lib`. Tailwind is the styling default—extend tokens in `tailwind.config.ts` instead of scattering inline CSS. Python helpers mirror the snake_case naming seen in `tests/test_crawler.py` (`_extract_videos`, `TikTokVideo`).

## Testing Guidelines
Name all Playwright specs `*.spec.ts`, store them under `frontend/tests/e2e`, and attach the generated HTML report whenever UI regressions are touched. Unit specs should live beside their sources (mirroring `frontend/tests/unit`) and depend on `npm run test:unit` to build into `dist-tests/tests/unit`. For crawler changes, mock network calls with `unittest.mock.patch` and assert cache behavior similar to the `_CACHE` scenarios already covered.

## Commit & Pull Request Guidelines
History is empty, so default to Conventional Commits plus optional Task Master IDs (`feat: embed TikTok grid (task 2.1)`). Every PR must describe intent, include before/after media for UI updates, list the exact commands executed (`npm run test:unit`, `npx playwright test`, crawler unittest), and flag any env additions. Request review only after lint, type checks, and deployment config diffs settle.

## Security & Configuration Tips
Never commit `.env`, `.env.local`, or crawler caches. Keep `YOUTUBE_API_KEY`, `YOUTUBE_SEARCH_QUERY`, or playlist overrides inside `frontend/.env.local`; store `TIKTOK_KEYWORD`, cache TTLs, and debugging flags in a local `.env` or shell exports. Mirror secret changes in Netlify/Vercel dashboards and redact sensitive URLs before attaching logs or Playwright artifacts.
