import { createTranslator } from 'next-intl';

import home_en from "@/locales/english/home.json";
import header_en from "@/locales/english/header.json";
import aboutUs_en from "@/locales/english/aboutUs.json";
import ourVision_en from "@/locales/english/ourVision.json";
import leadership_en from "@/locales/english/leadership.json";
import sustainability_en from "@/locales/english/sustainability.json";
import contact_en from "@/locales/english/contact.json";
import footer_en from "@/locales/english/footer.json";
import products_en from "@/locales/english/products.json";
import commitment_en from "@/locales/english/commitment.json";
import privacy_en from "@/locales/english/privacy.json";
import terms_en from "@/locales/english/terms.json";
import cookies_en from "@/locales/english/cookies.json";
import ecoFriendly_en from "@/locales/english/ecoFriendly.json";
import greenTech_en from "@/locales/english/greenTech.json";

import home_fr from "@/locales/france/home.json";
import header_fr from "@/locales/france/header.json";
import aboutUs_fr from "@/locales/france/aboutUs.json";
import ourVision_fr from "@/locales/france/ourVision.json";
import leadership_fr from "@/locales/france/leadership.json";
import sustainability_fr from "@/locales/france/sustainability.json";
import contact_fr from "@/locales/france/contact.json";
import footer_fr from "@/locales/france/footer.json";
import products_fr from "@/locales/france/products.json";
import commitment_fr from "@/locales/france/commitment.json";
import privacy_fr from "@/locales/france/privacy.json";
import terms_fr from "@/locales/france/terms.json";
import cookies_fr from "@/locales/france/cookies.json";
import ecoFriendly_fr from "@/locales/france/ecoFriendly.json";
import greenTech_fr from "@/locales/france/greenTech.json";

// تعریف زبان پیش‌فرض
const DEFAULT_LOCALE = "en";

const translations: Partial<Record<string, any>> = {
  en: {
    header: header_en,
    home: home_en,
    aboutUs: aboutUs_en,
    ourVision: ourVision_en,
    leadership: leadership_en,
    sustainability: sustainability_en,
    contact: contact_en,
    footer: footer_en,
    products: products_en,
    commitment: commitment_en,
    privacy: privacy_en,
    terms: terms_en,
    cookies: cookies_en,
    ecoFriendly: ecoFriendly_en,
    greenTech: greenTech_en
  },
  fr: {
    header: header_fr,
    home: home_fr,
    aboutUs: aboutUs_fr,
    ourVision: ourVision_fr,
    leadership: leadership_fr,
    sustainability: sustainability_fr,
    contact: contact_fr,
    footer: footer_fr,
    products: products_fr,
    commitment: commitment_fr,
    privacy: privacy_fr,
    terms: terms_fr,
    cookies: cookies_fr,
    ecoFriendly: ecoFriendly_fr,
    greenTech: greenTech_fr
  },
};

export function getTranslator(locale: string) {
  // اگر زبان درخواستی وجود نداشت، از زبان پیش‌فرض استفاده کن
  const messages = translations[locale] || translations[DEFAULT_LOCALE];
  return createTranslator({ locale, messages });
}