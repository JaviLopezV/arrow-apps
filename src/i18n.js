import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "./locales/en/translation.json";
import esTranslations from "./locales/es/translation.json";
import frTranslations from "./locales/fr/translation.json";
import caTranslations from "./locales/ca/translation.json";

i18n.use(initReactI18next).init(
  {
    resources: {
      en: { translation: enTranslations },
      es: { translation: esTranslations },
      fr: { translation: frTranslations },
      ca: { translation: caTranslations },
    },
    lng: "es", // Idioma por defecto
    fallbackLng: "es", // Idioma de respaldo
    interpolation: {
      escapeValue: false,
    },
    debug: true, // Activa los logs de depuración
  },
  (err, t) => {
    if (err) {
      console.error("i18next initialization error:", err);
    } else {
      console.log("i18next initialized successfully");
    }
  }
);

export default i18n;
