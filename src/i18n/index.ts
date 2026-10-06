import { pt } from './pt';
import { en } from './en';

export type Lang = 'pt' | 'en';
export const t = (lang: Lang) => (lang === 'en' ? en : pt);

/** Mesmo caminho no outro idioma: /x ↔ /en/x */
export const altPath = (path: string, lang: Lang) =>
  lang === 'en' ? path.replace(/^\/en(\/|$)/, '/') : `/en${path === '/' ? '/' : path}`;
