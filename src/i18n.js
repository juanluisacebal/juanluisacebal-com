import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend) // carga las traducciones usando http (debería apuntar a la carpeta public/i18n)
  .use(LanguageDetector) // detecta el idioma del navegador
  .use(initReactI18next) // pasa i18n a react-i18next
  .init({
    fallbackLng: 'es', // usa 'es' si no se detecta ningún idioma
    debug: true, // útil para ver información de depuración en la consola
    interpolation: {
      escapeValue: false, // no es necesario escapar los valores en React
    },
    react: {
      useSuspense: false, // puede ayudar a evitar problemas de renderizado antes de que las traducciones estén listas
    },
    backend: {
      loadPath: '/i18n/{{lng}}.json', // asegúrate de que la ruta es correcta
    },
  });

export default i18n;
