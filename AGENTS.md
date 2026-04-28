# AGENTS.md

Guidance for AI agents working in this repository.

## Project Overview

This is the Bulked marketing/landing site, built with:

- React 18 + Vite
- TypeScript
- Tailwind CSS
- React Router
- shadcn/Radix UI primitives under `src/components/ui`
- `lucide-react` for icons

The app is mostly static marketing pages with lightweight client-side state for language selection.

## Common Commands

- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Production build: `npm run build`
- Development build: `npm run build:dev`
- Preview build: `npm run preview`
- Lint: `npm run lint`

The Vite dev server is configured for port `8080` in `vite.config.ts`.

## Repository Structure

- `src/App.tsx`: router and top-level providers.
- `src/pages/`: route-level pages.
  - `/` -> `src/pages/index.tsx`
  - `/owners` -> `src/pages/owners.tsx`
  - `/delete-account` -> `src/pages/delete-account.tsx`
- `src/components/`: landing page sections and shared app components.
- `src/components/ui/`: shadcn-style UI primitives. Avoid broad refactors here unless the task is specifically about shared UI behavior.
- `src/lib/i18n.tsx`: centralized English/Portuguese translations and language context.
- `src/lib/contants.ts`: shared external constants such as waitlist URLs. Keep the existing filename unless intentionally renaming across imports.
- `src/assets/`: local logo/image assets.
- `src/index.css`: Tailwind layers, theme tokens, and shared component utility classes.

Use the `@/` path alias for imports from `src`.

## Internationalization

All user-facing copy should live in `src/lib/i18n.tsx`.

- Do not add local `COPY` objects in components or pages.
- Use `const { t } = useI18n()` and read labels with `t("key")`.
- If a repeated UI list needs icons or route metadata, keep the structure in the component, but store titles/descriptions/labels in i18n keys.
- Add both `en` and `pt` translations for every new key.
- Exported `TranslationKey` can be used to type arrays of translation keys.

## UI And Design Conventions

- Match the existing dark, glassy visual system.
- Prefer existing shared classes:
  - `section-padding`
  - `glass-card`
  - `surface-panel`
  - `eyebrow-pill`
  - `gradient-text`
- Use `Button` from `src/components/ui/button.tsx` for CTAs.
- For buttons with links, use `Button asChild` with exactly one child element.
- Keep icons from `lucide-react` when available.
- Keep cards at `rounded-lg` unless matching an existing page section that already uses another radius.
- Avoid adding marketing explanation text inside the UI just to describe interactions.
- Keep responsive layouts readable on mobile and desktop.

## Navigation And CTAs

`src/components/Navbar.tsx` is shared by the landing page and `/owners`.

- The default navbar CTA should link to `WAITLIST_URL`.
- The `/owners` navbar CTA should stay visually and behaviorally consistent with the default navbar CTA unless the user asks otherwise.
- When adding an icon to a `Button asChild`, put the icon inside the anchor/link child, not as a sibling of it.

## Assets

- Prefer existing logo assets in `src/assets`.
- Do not replace favicon/logo assets unless requested.
- Use real SVG/icon components for small UI flags or symbols when emoji rendering may be inconsistent.

## Validation

Before finishing code changes, run:

- `npm run build`

Run `npm run lint` when the task touches lint-sensitive shared code, but be aware this project may contain pre-existing lint findings in generated/shadcn-style UI files. If lint fails for unrelated existing issues, report that clearly and include the successful build result.

## Git And Editing Notes

- The worktree may contain user changes. Do not revert unrelated edits.
- Keep changes scoped to the requested behavior.
- Do not edit generated output in `dist`.
- Use small, focused patches.
- Do not introduce a new styling framework or new routing/i18n library for simple site changes.
