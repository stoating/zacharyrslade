import React from "react";

export const ContextLanguage = React.createContext<String>("en");

export const ContextLanguageProvider = (props: {
  children: React.ReactNode;
}) => {
  const [appLanguage, setAppLanguage] = React.useState("en");

  return (
    <ContextLanguage.Provider value={{ appLanguage, setAppLanguage }}>
      {props.children}
    </ContextLanguage.Provider>
  );
};
