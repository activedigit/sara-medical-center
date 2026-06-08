import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://saramedical.co.il',
  trailingSlash: 'ignore',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      i18n: {
        defaultLocale: 'ar',
        locales: { ar: 'ar-IL', he: 'he-IL', en: 'en-US' },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'ar',
    locales: ['ar', 'he', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  image: {
    domains: [],
  },
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    css: {
      preprocessorOptions: {},
    },
  },
});
