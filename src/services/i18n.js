import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import format from "./i18n-format";


i18next
  .use(initReactI18next)
  .use(HttpApi)
  .use(LanguageDetector)
  .init({
    lng: "sv",
    supportedLngs: ["de", "en", "fr", "sv"],
    fallbackLng: "sv",
    interpolation: {
      escapeValue: false,
      format,
    },
    debug: process.env.NODE_ENV === "development",
  });

export default i18next;
