# Silent Explorers — Abandoned, Not Forgotten

The original animated Silent Explorers website remains the homepage. The React mission archive is a separate add-on at `/app.html`; it does not replace or rewrite the original animation experience. The animation reference is [NASA-hackathon](https://github.com/jadonjoel/NASA-hackathon).

## Run locally

Use Node.js 20.19+ or 22.12+ and npm. Open the repository folder in VS Code, then install the dependencies:

```sh
npm install
npm run dev
```

Vite prints a local URL (usually `http://localhost:5173`). Open that URL to see the original animated experience. The React add-on is at `http://localhost:5173/app.html`. The dev server refreshes the page as files change.

You can also start the server from VS Code with **Terminal → Run Task → Run Silent Explorers (Vite)**. The **Live Server** extension is not used for this React app; it does not bundle the React imports. To check a production build, run **Terminal → Run Task → Build Silent Explorers** or `npm run build`.

## Build

```sh
npm run build
npm run preview
```

The Vite build produces the original page, a homepage route to it, and the React add-on at `app.html`. The relative asset base supports GitHub Pages project sites.

## Project structure

- `src/App.jsx`: React add-on with the mission archive, story reader, and navigation.
- `app.html`: separate entry for the React add-on.
- `src/data/missions.json`: preserved mission records and NASA source links.
- `src/styles.css`: responsive visual system and motion preferences.
- `public/assets/`: original mission illustrations and project mark.
- `index.html`: routes visitors to the original animated homepage.
- `NASA/Silent-Explorers.html`: original animation source; its animation scripts and styles remain unchanged.
- `NASA/Pasted markdown.md`: project requirements and implementation plan.

## Current migration milestone

The React add-on preserves all six mission records, search and destination filters, mission stories, timelines, accessibility labels, and source links. The original animated experience remains the default homepage; its footer links to the add-on. New simulation and 3D sections will be added in later working phases.

## Original animations

The cosmic journey, destination controls, signal scene, animated story orbit, mission story presentation, and motion controls remain in `NASA/Silent-Explorers.html`. This migration only adds a footer link to the React add-on; the page's animation styles and scripts are unchanged.

## Credits

Mission records link to NASA’s public mission pages. Mission illustrations are educational interpretations, not engineering models. The original experience includes its own planetary-art credits and NASA non-endorsement notice.
