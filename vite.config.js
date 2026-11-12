import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const root = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    // Keep the original, self-contained experience available while the React
    // version is migrated section by section.
    rolldownOptions: {
      input: {
        app: resolve(root, 'index.html'),
        legacy: resolve(root, 'NASA/Silent-Explorers.html'),
      },
    },
  },
});
