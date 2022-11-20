import React from "react";
import { navigationBarText } from "../data/navigation-bar";
import { greeterText } from "../data/greeter";
import { aboutText, aboutItems } from "../data/about";
import { resumeText } from "../data/resume";
import { ContextLanguage } from "../context/language";
import Link from "next/link";

export const NavigationBar = () => {
  const { language, setLanguage } = React.useContext(ContextLanguage);

  return (
    <div className="fixed top-0 z-50 flex w-full bg-slate-900 bg-opacity-70 text-lg font-semibold text-white text-opacity-100">
      <div className="mx-auto flex">
        <Link href="/#menu">
          <a
            id="nav-home"
            className="invisible w-6 hover:text-sky-300 hover:transition-colors hover:duration-300 sm:w-auto md:visible md:p-2 md:px-4"
          >
            {navigationBarText.home[language as keyof typeof navigationBarText.home]}
          </a>
        </Link>
        <Link href="/#about">
          <a
            id="nav-about"
            className="p-1 hover:text-sky-300 hover:transition-colors hover:duration-300 md:p-2 md:px-4"
          >
            {navigationBarText.about[language as keyof typeof navigationBarText.about]}
          </a>
        </Link>
        <Link href="/#resume">
          <a
            id="nav-resume"
            className="p-1 hover:text-sky-300 hover:transition-colors hover:duration-300 md:p-2 md:px-4"
          >
            {navigationBarText.resume[language as keyof typeof navigationBarText.resume]}
          </a>
        </Link>
        <Link href="/#profiles">
          <a
            id="nav-profiles"
            className="p-1 hover:text-sky-300 hover:transition-colors hover:duration-300 md:p-2 md:px-4"
          >
            {navigationBarText.profiles[language as keyof typeof navigationBarText.profiles]}
          </a>
        </Link>
        <Link href="/#stoating">
          <a
            id="nav-stoating"
            className="p-1 hover:text-sky-300 hover:transition-colors hover:duration-300 md:p-2 md:px-4"
          >
            {navigationBarText.stoating[language as keyof typeof navigationBarText.stoating]}
          </a>
        </Link>
        <Link href="/#contact">
          <a
            id="nav-contact"
            className="invisible w-0 p-2 px-4 hover:text-sky-300 hover:transition-colors hover:duration-300 sm:w-auto md:visible"
          >
            {navigationBarText.contact[language as keyof typeof navigationBarText.contact]}
          </a>
        </Link>
        <button
          id="language"
          onClick={() => setLanguage(language === "en" ? "de" : "en")}
          className="mx-1 my-2 rounded-full bg-slate-900 px-2 text-sm uppercase transition-all duration-200 hover:bg-slate-100 hover:text-slate-900"
        >
          {language === "en" ? "de" : "en"}
        </button>
      </div>
    </div>
  );
};
