import React from "react";
import { ContextLanguage } from "../context/language";

export const TestComponent1 = () => {
    const { appLanguage, setAppLanguage } = React.useContext(ContextLanguage);
    return (
      <>
      <div>{appLanguage}</div>
        <button onClick={() => setAppLanguage('de')}>
          Update context
        </button>
      </>
    );
  };

export const TestComponent2 = () => {
    const { appLanguage, setAppLanguage } = React.useContext(ContextLanguage);
    return (
      <>
      <div>{appLanguage}</div>
        <button onClick={() => setAppLanguage('en')}>
          Update context
        </button>
      </>
    );
  };