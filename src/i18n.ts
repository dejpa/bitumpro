import { createTranslator } from 'next-intl';

import home_en from "@/locales/english/home.json"
import header_en from "@/locales/english/header.json"

import home_fr from "@/locales/france/home.json"
import header_fr from "@/locales/france/header.json"

const translations: Partial<Record<string, any>>  = {
  en: {
    // common,
    header: header_en,
    home: home_en,
    // footer
  },
  fr: {
    header: header_fr,
    home: home_fr,
  }
}

export function getTranslator(locale: string) {
  const messages = translations[locale] || translations["en"]; // اگر زبان پیدا نشد، از انگلیسی استفاده کن
  return createTranslator({ locale, messages });
}