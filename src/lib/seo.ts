import { SITE } from '../config/site';

/**
 * URL absoluto e canónico para um caminho do site.
 * Normaliza a barra final para coincidir com `trailingSlash: 'always'`.
 */
export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  const clean = `/${path.replace(/^\/+/, '')}`;
  // Ficheiros (têm extensão) não levam barra final; rotas levam sempre.
  const normalized = /\.[a-z0-9]+$/i.test(clean)
    ? clean
    : clean.replace(/\/*$/, '/');
  return `${SITE.url}${normalized}`;
}

/** Título da página: a home usa o título por defeito, as restantes levam sufixo. */
export function pageTitle(title?: string): string {
  if (!title) return SITE.defaultTitle;
  return `${title} | ${SITE.titleSuffix}`;
}
