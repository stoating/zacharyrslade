import React from "react";
import Link from "next/link";

import { Language } from "../data/_types";
import { navbar } from "../data/navbar";
import { ContextLanguage } from "../context/language";

export const NavigationBar = () => {
  return (
    <div className="fixed top-0 z-50 flex w-full bg-slate-900 bg-opacity-70 text-lg font-semibold text-white text-opacity-100">
      <div className="mx-auto flex">
        <NavHome />
        <NavAbout />
        <NavResume />
        <NavProfiles />
        <NavStoating />
        <NavContact />
        <NavLanguage />
      </div>
    </div>
  );
};

const NavHome = () => {
  const { language } = React.useContext(ContextLanguage);

  const home = navbar.home[language as Language];

  return (
    <Link href="/#menu">
      <a className="invisible w-6 hover:text-sky-300 hover:transition-colors hover:duration-300 sm:w-auto md:visible md:p-2 md:px-4">
        {home}
      </a>
    </Link>
  );
};

const NavAbout = () => {
  const { language } = React.useContext(ContextLanguage);

  const about = navbar.about[language as Language];

  return (
    <Link href="/#about">
      <a className="p-1 hover:text-sky-300 hover:transition-colors hover:duration-300 md:p-2 md:px-4">
        {about}
      </a>
    </Link>
  );
};

const NavResume = () => {
  const { language } = React.useContext(ContextLanguage);

  const resume = navbar.resume[language as Language];

  return (
    <Link href="/#resume">
      <a className="p-1 hover:text-sky-300 hover:transition-colors hover:duration-300 md:p-2 md:px-4">
        {resume}
      </a>
    </Link>
  );
};

const NavProfiles = () => {
  const { language } = React.useContext(ContextLanguage);

  const profiles = navbar.profiles[language as Language];

  return (
    <Link href="/#profiles">
      <a className="p-1 hover:text-sky-300 hover:transition-colors hover:duration-300 md:p-2 md:px-4">
        {profiles}
      </a>
    </Link>
  );
};

const NavStoating = () => {
  const { language } = React.useContext(ContextLanguage);

  const stoating = navbar.stoating[language as Language];

  return (
    <Link href="/#stoating">
      <a className="p-1 hover:text-sky-300 hover:transition-colors hover:duration-300 md:p-2 md:px-4">
        {stoating}
      </a>
    </Link>
  );
};

const NavContact = () => {
  const { language } = React.useContext(ContextLanguage);

  const contact = navbar.contact[language as Language];

  return (
    <Link href="/#contact">
      <a className="invisible w-0 p-2 px-4 hover:text-sky-300 hover:transition-colors hover:duration-300 sm:w-auto md:visible">
        {contact}
      </a>
    </Link>
  );
};

const NavLanguage = () => {
  const { language, setLanguage } = React.useContext(ContextLanguage);

  return (
    <button
      onClick={() => setLanguage((language as Language) === "en" ? "de" : "en")}
      className="mx-1 my-2 rounded-full bg-slate-900 px-2 text-sm uppercase transition-all duration-200 hover:bg-slate-100 hover:text-slate-900"
    >
      {(language as Language) === "en" ? "de" : "en"}
    </button>
  );
};
