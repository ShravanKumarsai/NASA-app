# Silent Explorers — Abandoned, Not Forgotten

An educational experience about the machines left on the Moon and Mars. The original immersive page remains available while its content and interactions move into a modular React application.

## Run locally

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

The Vite build produces both the new React experience and the original page at `NASA/Silent-Explorers.html`. The relative asset base supports GitHub Pages project sites.

## Project structure

- `src/App.jsx`: React experience, mission archive, story reader, and navigation.
- `src/data/missions.json`: preserved mission records and NASA source links.
- `src/styles.css`: responsive visual system and motion preferences.
- `public/assets/`: original mission illustrations and project mark.
- `NASA/Silent-Explorers.html`: untouched original experience, retained as a migration reference and fallback.
- `NASA/Pasted markdown.md`: project requirements and implementation plan.

## Current migration milestone

The React app preserves all six mission records, search and destination filters, mission stories, timelines, accessibility labels, and source links. The original animated experience stays available at `/NASA/Silent-Explorers.html`. New simulation and 3D sections will be added in later working phases.

## Credits

Mission records link to NASA’s public mission pages. Mission illustrations are educational interpretations, not engineering models. The original experience includes its own planetary-art credits and NASA non-endorsement notice.
