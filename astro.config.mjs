// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // ⚠️ TODO: sostituisci con il dominio definitivo acquistato su Aruba
  //          (es. 'https://www.housemate.it'). Serve a sitemap, canonical e Open Graph.
  site: 'https://www.housemate.example',

  // Internazionalizzazione: italiano di default (URL alla root),
  // inglese sotto /en/. Vedi src/i18n/ per i testi.
  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
