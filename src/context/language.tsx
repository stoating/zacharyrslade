import React from "react";
import { Language } from "../data/_types";

interface LanguageContext {
  language: Language;
  setLanguage: (language: Language) => void;
}

const defaultState = {
  language: "en" as Language,
  setLanguage: (language: Language) => {
    console.log("setLanguage", language);
  },
};

export const ContextLanguage =
  React.createContext<LanguageContext>(defaultState);

export const ContextLanguageProvider = (props: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = React.useState<Language>("en");

  return (
    <ContextLanguage.Provider value={{ language, setLanguage }}>
      {props.children}
    </ContextLanguage.Provider>
  );
};
