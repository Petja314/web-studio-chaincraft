import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// import ss  from "../../../../../messages/"

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        saveMissing: true, // send not translated keys to endpoint
        debug: false,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        backend: {
            // loadPath: '/locales/{{lng}}/{{ns}}.json',
            // loadPath: '/locales/{{lng}}/{{ns}}.json',
            // loadPath: (await import(`../messages/{{lng}}/{{ns}}.json`)).default

            loadPath: `../messages/{{lng}}/{{ns}}.json`
        }
    });

export default i18n;
