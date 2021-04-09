// React
import React, { useState, useEffect } from 'react';
// Languages
import en from '@/languages/en.js';
import es from '@/languages/es.js';

export const translations = { en, es };

export const languageOptions = {
  en: 'English',
  es: 'Español'
};

export const LanguageContext = React.createContext({
  userLanguage: 'es',
  dictionary: translations.es,
  userLanguageChange: null
});

export const LanguageProvider = ({ children }) => {
  const [userLanguage, setUserLanguage] = useState(getInitialLang);
  const rawSetLanguage = {
    userLanguage,
    dictionary: translations[userLanguage],
    userLanguageChange: (selected: string) => {
      const newLanguage = languageOptions[selected] ? selected : 'es'
      setUserLanguage(newLanguage);
      window.localStorage.setItem('user-lang', newLanguage);

      return selected !== userLanguage
    }
  };

  return (
    <LanguageContext.Provider value={rawSetLanguage}>
      {children}
    </LanguageContext.Provider>
  );
};

export const getInitialLang = (): string => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("user-lang")
    if (typeof storedPrefs === "string") return storedPrefs
  }

  return "es"
}

export default LanguageContext
