import React from "react";

interface ILangaugeContext {
  language: string;
  setLanguage: (language: string) => void;
}

const defaultState = {
  language: "en",
  setLanguage: (language: string) => {},
};

export const ContextLanguage = React.createContext<ILangaugeContext>(defaultState);

export const ContextLanguageProvider = (props: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = React.useState("en");

  return (
    <ContextLanguage.Provider value={{ language, setLanguage }}>
      {props.children}
    </ContextLanguage.Provider>
  );
};
