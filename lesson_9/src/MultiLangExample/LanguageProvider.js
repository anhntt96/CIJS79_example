import { createContext, useState } from "react";
import { languageDics } from "./languages";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");


  const changeLanguage = () => {
    setLanguage( (prevLanguage) => prevLanguage === 'vi'? 'en' : 'vi')
  }

  const value = {
    dictionary: languageDics[language],
    changeLanguage
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
