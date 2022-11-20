import React from "react";
import { ContextLanguage } from "../context/language";

export const TestComponent1 = () => {
    const { language, setLanguage } = React.useContext(ContextLanguage);
    return (
      <>
      <div>{language}</div>
        <button onClick={() => setLanguage('de')}>
          Update context
        </button>
      </>
    );
  };

export const TestComponent2 = () => {
    const { language, setLanguage } = React.useContext(ContextLanguage);
    return (
      <>
      <div>{language}</div>
        <button onClick={() => setLanguage('en')}>
          Update context
        </button>
      </>
    );
  };