import { createTranslator } from 'next-intl';

import home_en from "@/locales/english/home.json";
import header_en from "@/locales/english/header.json";
import aboutUs_en from "@/locales/english/aboutUs.json";
import sustainability_en from "@/locales/english/sustainability.json";
import contact_en from "@/locales/english/contact.json";

import home_fr from "@/locales/france/home.json";
import header_fr from "@/locales/france/header.json";
import aboutUs_fr from "@/locales/france/aboutUs.json";
import sustainability_fr from "@/locales/france/sustainability.json";
import contact_fr from "@/locales/france/contact.json";

// تعریف زبان پیش‌فرض
const DEFAULT_LOCALE = "en";

const translations: Partial<Record<string, any>> = {
  en: {
    header: header_en,
    home: home_en,
    aboutUs: aboutUs_en,
    sustainability: sustainability_en,
    contact_en
  },
  fr: {
    header: header_fr,
    home: home_fr,
    aboutUs: aboutUs_fr,
    sustainability: sustainability_fr,
    contact: contact_fr
  },
};

export function getTranslator(locale: string) {
  // اگر زبان درخواستی وجود نداشت، از زبان پیش‌فرض استفاده کن
  const messages = translations[locale] || translations[DEFAULT_LOCALE];
  return createTranslator({ locale, messages });
}