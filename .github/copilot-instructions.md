# Copilot Instructions for AI Agents

## Main Inspiration
- The mais inspiration for this project is the visual presentation of the https://www.anantagame.com website.

## Project Overview
- This is a React + Vite web portfolio project. The main app is in `src/`, with components in `src/components/` and assets in `src/assets/`.
- The project uses Vite for fast development and hot module replacement (HMR).
- All game-related content is organized under `src/assets/` and referenced by components in `src/components/`.

## Key Files & Structure
- `src/main.jsx`: Entry point for the React app.
- `src/App.jsx`: Main application component.
- `src/components/`: Contains UI components (e.g., `GamesSection.jsx`, `Header.jsx`, `Introduction.jsx`).
- `public/images/`: Static images for use in the portfolio.
- `vite.config.js`: Vite configuration.
- `eslint.config.js`: ESLint rules for code quality.

## Developer Workflows
- **Start Dev Server:** `npm run dev` (runs Vite, serves at localhost)
- **Build for Production:** `npm run build`
- **Preview Production Build:** `npm run preview`
- **Lint:** `npm run lint` (if configured)

## Patterns & Conventions
- Use functional React components and hooks (no class components).
- CSS modules are used for component styling (e.g., `GamesSection.css`).
- Game data and project metadata are managed in `ProjectsData.jsx`.
- Asset imports use relative paths from `src/assets/` or `public/images/`.
- Components are organized by feature, not by type.

## Integration Points
- No backend/API integration; all data is local/static.
- External dependencies are managed via `package.json` (React, Vite, ESLint, etc.).
- Images and game assets are loaded from the `public/` and `src/assets/` folders.

## Example: Adding a New Game
1. Add game assets to `src/assets/`.
2. Update `ProjectsData.jsx` with new game metadata.
3. Reference the new game in `GamesSection.jsx`.
4. Add any required images to `public/images/`.

## Troubleshooting
- If `npm run dev` fails, check for missing dependencies or misconfigured imports.
- Ensure all asset paths are correct and files exist.
- Use Vite's error messages for debugging build and runtime issues.

---

For questions or unclear conventions, review `README.md`, `vite.config.js`, and component files in `src/components/` for examples.
