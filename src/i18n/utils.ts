import { languages, defaultLang, isLanguageCode, type LanguageCode } from './languages';
import ar from './locales/ar.json';
import he from './locales/he.json';
import en from './locales/en.json';

const dictionaries = { ar, he, en } as const;

// Base path support (GitHub Pages project subpath, e.g. '/sara-medical-center/')
export const BASE_URL: string = import.meta.env.BASE_URL || '/';
const BASE = BASE_URL.replace(/\/$/, ''); // '' when deployed at root

/** Prefix a root-relative path with the configured base. Leaves absolute/protocol URLs untouched. */
export function withBase(path: string): string {
  if (!path) return BASE_URL;
  if (/^(https?:)?\/\//.test(path) || /^(mailto:|tel:|#|data:)/.test(path)) return path;
  return path.startsWith('/') ? `${BASE}${path}` : `${BASE}/${path}`;
}

/** Remove the base prefix from a pathname so locale parsing works under a subpath. */
export function stripBase(pathname: string): string {
  if (BASE && pathname.startsWith(BASE)) {
    const rest = pathname.slice(BASE.length);
    return rest.startsWith('/') ? rest : `/${rest}`;
  }
  return pathname;
}

export function getLangFromUrl(url: URL): LanguageCode {
  const [, lang] = stripBase(url.pathname).split('/');
  return isLanguageCode(lang) ? lang : defaultLang;
}

export function useTranslations(lang: LanguageCode) {
  const dict = dictionaries[lang] as Record<string, unknown>;
  const fallback = dictionaries[defaultLang] as Record<string, unknown>;

  return function t(key: string): string {
    const fromDict = resolveKey(dict, key);
    if (fromDict !== undefined) return fromDict;
    const fromFallback = resolveKey(fallback, key);
    if (fromFallback !== undefined) return fromFallback;
    return key;
  };
}

function resolveKey(obj: Record<string, unknown>, key: string): string | undefined {
  const parts = key.split('.');
  let current: unknown = obj;
  for (const part of parts) {
    if (current && typeof current === 'object' && part in (current as Record<string, unknown>)) {
      current = (current as Record<string, unknown>)[part];
    } else {
      return undefined;
    }
  }
  return typeof current === 'string' ? current : undefined;
}

export function getLocalizedPath(path: string, lang: LanguageCode): string {
  const stripped = stripBase(path);
  const cleaned = stripped.startsWith('/') ? stripped.slice(1) : stripped;
  const withoutLocale = cleaned.replace(/^(ar|he|en)\/?/, '');
  return withBase(withoutLocale ? `/${lang}/${withoutLocale}` : `/${lang}/`);
}

export function getAlternateUrls(pathname: string, siteUrl: string): Array<{ lang: LanguageCode; url: string }> {
  // siteUrl already includes the base path (origin + base); strip base + locale from pathname
  const pathWithoutLocale = stripBase(pathname).replace(/^\/(ar|he|en)\/?/, '/');
  return (Object.keys(languages) as LanguageCode[]).map((lang) => ({
    lang,
    url: `${siteUrl}/${lang}${pathWithoutLocale === '/' ? '/' : pathWithoutLocale}`,
  }));
}

export function getDirection(lang: LanguageCode): 'ltr' | 'rtl' {
  return languages[lang].dir;
}

export function getHtmlLang(lang: LanguageCode): string {
  return languages[lang].htmlLang;
}
