export interface NavItem {
  label: string;
  href: string;
  hint?: string;
}

export const NAV: NavItem[] = [
  { label: 'Serviços', href: '/servicos/' },
  { label: 'Sobre Nós', href: '/sobre/' },
  { label: 'Perguntas', href: '/faq/' },
  { label: 'Contactos', href: '/contactos/' },
];

export const SEARCH = {
  action: '/pesquisa/',
  param: 'q',
} as const;

export function isActive(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(href);
}
