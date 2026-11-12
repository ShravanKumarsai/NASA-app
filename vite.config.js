import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const root = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    // The original animated experience stays at the site root. React features
    // live on their own page as add-ons; the original source remains reachable.
    rolldownOptions: {
      input: {
        home: resolve(root, 'index.html'),
        app: resolve(root, 'app.html'),
        legacy: resolve(root, 'NASA/Silent-Explorers.html'),
      },
    },
  },
});
