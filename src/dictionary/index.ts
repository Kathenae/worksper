import enDict from '@/dictionary/langs/en';

const dictionaries = {
    en: () => import('@/dictionary/langs/en').then((module) => module.default),
    pt: () => import('@/dictionary/langs/pt').then((module) => module.default),
}

// Types
export type Locale = keyof typeof dictionaries
export type DictionaryWord = keyof typeof defaultDict
export type LanguageDictionary = Record<keyof typeof defaultDict, string>

// Constants
export const defaultLocale = 'en';
export const defaultDict = enDict;
export const locales = Object.keys(dictionaries);
export const dictionary = (locale: Locale) => dictionaries[locale]();