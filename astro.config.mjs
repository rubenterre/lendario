import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lendario.rubenterre.me',
  integrations: [sitemap()],
});
