import { languages, defaultLang, isLanguageCode, type LanguageCode } from './languages';
import ar from './locales/ar.json';
import he from './locales/he.json';
import en from './locales/en.json';

const dictionaries = { ar, he, en } as const;

export function getLangFromUrl(url: URL): LanguageCode {
  const [, lang] = url.pathname.split('/');
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
  const cleaned = path.startsWith('/') ? path.slice(1) : path;
  const withoutLocale = cleaned.replace(/^(ar|he|en)\/?/, '');
  return withoutLocale ? `/${lang}/${withoutLocale}` : `/${lang}/`;
}

export function getAlternateUrls(pathname: string, siteUrl: string): Array<{ lang: LanguageCode; url: string }> {
  const pathWithoutLocale = pathname.replace(/^\/(ar|he|en)\/?/, '/');
  return (Object.keys(languages) as LanguageCode[]).map((lang) => ({
    lang,
    url: `${siteUrl}/${lang}${pathWithoutLocale === '/' ? '/' : pathWithoutLocale}`.replace(/\/\//g, '/').replace(':/', '://'),
  }));
}

export function getDirection(lang: LanguageCode): 'ltr' | 'rtl' {
  return languages[lang].dir;
}

export function getHtmlLang(lang: LanguageCode): string {
  return languages[lang].htmlLang;
}
