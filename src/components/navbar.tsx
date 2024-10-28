import React from "react";
import Link from "next/link";

import { Language } from "../data/_types";
import { navbar } from "../data/navbar";
import { ContextLanguage } from "../context/language";

export const NavigationBar = () => {
  return (
    <div className="fixed z-50 flex w-full bg-slate-900 bg-opacity-70 p-2 text-lg font-semibold text-white text-opacity-100 ">
      <div className="mx-auto flex">
        <NavHome />
        <NavAbout />
        <NavResume />
        <NavStoating />
        <NavContact />
      </div>
      <NavLanguage />
    </div>
  );
};

const smoothScroll = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  targetId: string
) => {
  e.preventDefault();
  const targetElement = document.querySelector(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};

const NavHome = () => {
  const { language } = React.useContext(ContextLanguage);

  const home = navbar.home[language as Language];

  return (
    <Link href="/#hero">
      <a
        className="invisible w-0 hover:text-sky-300 hover:transition-colors hover:duration-300 md:visible md:w-auto md:px-2 md:pb-1"
        onClick={(e) => smoothScroll(e, "#hero")}
      >
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
      <a
        className="px-2 pb-1 hover:text-sky-300 hover:transition-colors hover:duration-300"
        onClick={(e) => smoothScroll(e, "#about")}
      >
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
      <a
        className="px-2 pb-1 hover:text-sky-300 hover:transition-colors hover:duration-300"
        onClick={(e) => smoothScroll(e, "#resume")}
      >
        {resume}
      </a>
    </Link>
  );
};

const NavStoating = () => {
  const { language } = React.useContext(ContextLanguage);

  const stoating = navbar.stoating[language as Language];

  return (
    <Link href="/#stoating">
      <a
        className="px-2 pb-1 hover:text-sky-300 hover:transition-colors hover:duration-300"
        onClick={(e) => smoothScroll(e, "#stoating")}
      >
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
      <a
        className="invisible w-0 hover:text-sky-300 hover:transition-colors hover:duration-300 md:visible md:w-auto md:px-2 md:pb-1"
        onClick={(e) => smoothScroll(e, "#contact")}
      >
        {contact}
      </a>
    </Link>
  );
};

const NavLanguage = () => {
  const { language, setLanguage } = React.useContext(ContextLanguage);

  return (
    <div className="flex justify-end">
      <button
        onClick={() =>
          setLanguage((language as Language) === "en" ? "de" : "en")
        }
        className="rounded-full px-2 py-1 text-sm uppercase bg-slate-900 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900"
      >
        {(language as Language) === "en" ? "de" : "en"}
      </button>
    </div>
  );
};
