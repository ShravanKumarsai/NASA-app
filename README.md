# Silent Explorers — NASA Hackathon

An interactive tribute to the machines left on the Moon and Mars. Six missions, two worlds, and the stories that remain.

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

Vite builds the static site into `dist/`. The relative asset base is configured for both a root domain and a GitHub Pages project site.

## Project structure

- `src/App.jsx`: React application shell and incremental component composition.
- `src/components/`: React-owned regions that preserve current content while interactions migrate.
- `src/data/missions.json`: shared mission records.
- `src/site-template.html`: existing page content preserved as the migration source.
- `public/assets/`: original mission artwork and credited planetary maps.
- `public/legacy/`: current DOM-based interactions retained during migration.
- `public/styles/`: existing visual system.
- `tools/build_solar_maps.py`: optional planetary sprite tool (requires NumPy, Pillow, and source maps passed with `--maps`).
- `backups/`: previous designs and scripts.

## Story navigation

Scroll to animate the orbit, or use its previous/next buttons, arrow keys, and mission cards to navigate without page scrolling. The page uses native browser scrolling; there is no custom wheel or touch pacing layer.

## Credits

See `public/assets/solar/ASSET_CREDITS.md` for planetary texture attribution and licensing. NASA mission sources are linked in the archive and story reader. Preserve these credits when sharing the project.
