export const languages = {
  ar: { code: 'ar', name: 'العربية', nativeName: 'العربية', dir: 'rtl', htmlLang: 'ar-IL', fontVar: 'ar' },
  he: { code: 'he', name: 'עברית', nativeName: 'עברית', dir: 'rtl', htmlLang: 'he-IL', fontVar: 'he' },
  en: { code: 'en', name: 'English', nativeName: 'English', dir: 'ltr', htmlLang: 'en-US', fontVar: 'en' },
} as const;

export type LanguageCode = keyof typeof languages;
export const locales: LanguageCode[] = ['ar', 'he', 'en'];
export const defaultLang: LanguageCode = 'ar';

export function isLanguageCode(value: string): value is LanguageCode {
  return value in languages;
}
