// ============================================================================
// HouseMate — Utility i18n
// ============================================================================
import { ui, defaultLang, routes, type Lang } from './ui';

/** Ricava la lingua dall'URL (es. /en/contact -> 'en'). */
export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if (maybeLang in ui) return maybeLang as Lang;
  return defaultLang;
}

/** Restituisce una funzione `t('chiave')` per tradurre i testi della lingua data. */
export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Rotte localizzate per la lingua corrente (vedi src/i18n/ui.ts). */
export function getRoutes(lang: Lang) {
  return routes[lang];
}
