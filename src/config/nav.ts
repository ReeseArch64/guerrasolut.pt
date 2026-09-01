/**
 * Navegação principal (`PRODUCTS.md` §8). Ligações entre páginas, nunca
 * âncoras — o site é multipágina.
 */
export interface NavItem {
  label: string;
  href: string;
  /** Descrição curta usada no painel de serviços e na folha mobile. */
  hint?: string;
}

export const NAV: NavItem[] = [
  { label: 'Serviços', href: '/servicos/' },
  { label: 'Sobre Nós', href: '/sobre/' },
  { label: 'Perguntas', href: '/faq/' },
  { label: 'Contactos', href: '/contactos/' },
];

/** Destino do formulário de pesquisa do cabeçalho. */
export const SEARCH = {
  action: '/pesquisa/',
  param: 'q',
} as const;

/**
 * Marca o item activo. Com `trailingSlash: 'always'`, `/servicos/` cobre
 * também `/servicos/instalacoes-eletricas/`; a home só se marca a si mesma.
 */
export function isActive(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(href);
}
