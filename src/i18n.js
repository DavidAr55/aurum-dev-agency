// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/common.json";
import es from "./locales/es/common.json";

i18n
  .use(LanguageDetector) // detecta idioma del navegador / localStorage
  .use(initReactI18next) // pasa i18n a react-i18next
  .init({
    resources: {
      en: { common: en },
      es: { common: es },
    },
    fallbackLng: "es",
    debug: false,
    ns: ["common"],
    defaultNS: "common",
    interpolation: {
      escapeValue: false, // react ya escapa
    },
    detection: {
      // opciones sensatas por defecto
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  });

export default i18n;