import React, { createContext, useContext, useState, useMemo } from "react";

// Simple string translations (expand as needed)
const translations = {
  en: {
    home: "Home",
    bookings: "Bookings",
    dashboard: "Dashboard",
    searchLabel: "Search anything — movies, sports, flights, events, venues...",
    searchPlaceholder: "Try 'cricket finals tickets' or 'find jazz concerts nearby'",
    searchButton: "Search",
    language: "Language",
    selectLanguage: "Select language",
  },
  hi: {
    home: "मुख पृष्ठ",
    bookings: "बुकिंग्स",
    dashboard: "डैशबोर्ड",
    searchLabel: "कुछ भी खोजें — फ़िल्में, खेल, उड़ानें, कार्यक्रम, स्थल...",
    searchPlaceholder: "'क्रिकेट फाइनल टिकट्स' या 'पास के जैज़ कॉन्सर्ट खोजें' आज़माएं",
    searchButton: "खोजें",
    language: "भाषा",
    selectLanguage: "भाषा चुनें",
  },
  es: {
    home: "Inicio",
    bookings: "Reservas",
    dashboard: "Tablero",
    searchLabel: "Busca cualquier cosa — películas, deportes, vuelos, eventos, lugares...",
    searchPlaceholder: "Intenta 'entradas finales de cricket' o 'encuentra conciertos de jazz cerca'",
    searchButton: "Buscar",
    language: "Idioma",
    selectLanguage: "Seleccionar idioma",
  }
};

const defaultLang = "en";

// PUBLIC_INTERFACE
export const MultiLangContext = createContext({
  lang: defaultLang,
  setLang: () => {},
  t: (key) => translations[defaultLang][key] || key,
  supported: Object.keys(translations)
});

// PUBLIC_INTERFACE
export function useMultiLang() {
  return useContext(MultiLangContext);
}

// PUBLIC_INTERFACE
/**
 * MultiLangProvider provides language context for the app.
 * Usage: wrap around App or at desired scope; use useMultiLang() to access translation helpers.
 */
function MultiLangProvider({ children }) {
  const [lang, setLang] = useState(defaultLang);

  // translation helper
  const t = useMemo(() => (key) => translations[lang]?.[key] || translations[defaultLang][key] || key, [lang]);

  const contextValue = useMemo(
    () => ({
      lang,
      setLang,
      t,
      supported: Object.keys(translations)
    }),
    [lang, t]
  );

  return (
    <MultiLangContext.Provider value={contextValue}>
      {children}
    </MultiLangContext.Provider>
  );
}

export default MultiLangProvider;
