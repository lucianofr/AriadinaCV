# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**AriadinaCV** is a CV/portfolio landing page built with Vite + React + TypeScript. The current state is a Vite starter scaffold — the intended goal is to build it into a modern, responsive professional CV/portfolio page.

## Commands

```bash
npm run dev       # Dev server at http://localhost:5173 (HMR enabled)
npm run build     # Type-check (tsc -b) then bundle for production
npm run lint      # ESLint across all files
npm run preview   # Serve the production build locally
```

No test runner is configured.

## Architecture

Single-page app with no routing. Entry point is `src/main.tsx` → `src/App.tsx`.

**Planned structure** (per `.github/copilot-instructions.md`):
- `src/components/` — reusable React components
- `src/pages/` — main page sections
- `src/styles/` — CSS/SCSS files

**Sections to build:** Header, Sobre (About), Experiência (Experience), Skills, Projetos (Projects), Contato (Contact).

## Key Config Notes

- TypeScript strict mode is enabled (`noUnusedLocals`, `noUnusedParameters`) — unused vars/params will cause build errors (`tsc -b` runs before `vite build`).
- React 19 with the new JSX transform — no need to import React in component files.
- Vite uses `@vitejs/plugin-react` (Oxc-based transform, not Babel).
- SVG icons are loaded from `public/icons.svg` via `<use href="/icons.svg#...">` — not imported as modules.
