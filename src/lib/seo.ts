import { SITE } from '../config/site';

export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  const clean = `/${path.replace(/^\/+/, '')}`;
  const normalized = /\.[a-z0-9]+$/i.test(clean)
    ? clean
    : clean.replace(/\/*$/, '/');
  return `${SITE.url}${normalized}`;
}

export function pageTitle(title?: string): string {
  if (!title) return SITE.defaultTitle;
  return `${title} | ${SITE.titleSuffix}`;
}
