import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-xhr-backend";

import translationEng from "./locales/en/translation.json";
import translationPol from "./locales/pl/translation.json";

i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    debug: false,
    lng: "pl",
    fallbackLng: "pl", // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome
    nsSeparator: false,

    interpolation: {
      escapeValue: false // react already safes from xss
    },

    resources: {
      en: {
        translations: translationEng
      },
      pl: {
        translations: translationPol
      }
    },
    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations"
  });

export default i18n;
