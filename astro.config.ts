// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/config/site';

// https://astro.build/config
export default defineConfig({
  // `site` é a base de todos os URLs absolutos: canónicos, Open Graph,
  // dados estruturados e sitemap.
  site: SITE.url,
  output: 'static',

  // Self-host das duas famílias: o Astro descarrega os `woff2` no build e
  // serve-os do próprio domínio. Zero ligações a fonts.googleapis.com.
  fonts: [
    {
      name: 'Archivo',
      cssVariable: '--gs-font-display',
      provider: fontProviders.google(),
      weights: [600, 700, 800],
      // O português europeu cabe todo no subconjunto `latin`, incluindo os
      // travessões e o ponto médio. `latin-ext` seria peso morto.
      subsets: ['latin'],
      styles: ['normal'],
      display: 'swap',
      fallbacks: ['Archivo Fallback', 'system-ui', 'sans-serif'],
    },
    {
      name: 'Inter',
      cssVariable: '--gs-font-body',
      provider: fontProviders.google(),
      weights: [400, 500, 600],
      // O português europeu cabe todo no subconjunto `latin`, incluindo os
      // travessões e o ponto médio. `latin-ext` seria peso morto.
      subsets: ['latin'],
      styles: ['normal'],
      display: 'swap',
      fallbacks: ['Inter Fallback', 'system-ui', 'sans-serif'],
    },
  ],
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      // `/pesquisa/` é `noindex`: uma página de resultados não pertence ao
      // sitemap, mesmo continuando alcançável a partir do cabeçalho.
      filter: (page) => !page.startsWith(`${SITE.url}/pesquisa/`),
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
