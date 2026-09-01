// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/config/site';

// https://astro.build/config
export default defineConfig({
  // `site` é a base de todos os URLs absolutos: canónicos, Open Graph,
  // dados estruturados e sitemap.
  site: SITE.url,
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      lastmod: new Date(),
      serialize(item) {
        // A home é a página com maior prioridade; as de serviço vêm a seguir.
        if (item.url === `${SITE.url}/`) return { ...item, priority: 1.0 };
        if (item.url.includes('/servicos/')) return { ...item, priority: 0.8 };
        return { ...item, priority: 0.5 };
      },
    }),
  ],
});
