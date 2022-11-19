import { TextNavigationBar } from "../data/text-navigation-bar";
import { TextGreeter } from "../data/text-greeter";
import { aboutText, aboutItems } from "../data/about";
import Link from "next/link";

export const NavigationBar = () => {
  const handleChangeLanguageClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const language = document.getElementById("language");

    if (language.innerHTML === "DE") {
      language.innerHTML = "EN";
      for (const [key, value] of Object.entries(TextNavigationBar)) {
        document.getElementById("nav-" + key).innerHTML = value.de;
      }
      for (const [key, value] of Object.entries(TextGreeter)) {
        document.getElementById("greeter-" + key).innerHTML = value.de;
      }
      for (const [key, value] of Object.entries(aboutText)) {
        document.getElementById("about-" + key).innerHTML = value.de;
      }
      for (const [key, value] of Object.entries(aboutItems)) {
        console.log (value.title.en);
        document.getElementById("about-title-" + value.title.en).innerHTML = value.title.de + ':';
        document.getElementById("about-value-" + value.title.en).innerHTML = value.value.de;
      }
    } else {
      language.innerHTML = "DE";
      for (const [key, value] of Object.entries(TextNavigationBar)) {
        document.getElementById("nav-" + key).innerHTML = value.en;
      }
      for (const [key, value] of Object.entries(TextGreeter)) {
        document.getElementById("greeter-" + key).innerHTML = value.en;
      }
      for (const [key, value] of Object.entries(aboutText)) {
        document.getElementById("about-" + key).innerHTML = value.en;
      }
      for (const [key, value] of Object.entries(aboutItems)) {
        document.getElementById("about-title-" + value.title.en).innerHTML = value.title.en + ':';
        document.getElementById("about-value-" + value.title.en).innerHTML = value.value.en;
      }
    }
  };

  return (
    <div className="fixed top-0 z-50 flex w-full bg-slate-900 bg-opacity-70 text-lg font-semibold text-white text-opacity-100">
      <div className="mx-auto flex">
        <Link href="/#menu">
          <a
            id="nav-home"
            className="invisible w-6 hover:text-sky-300 hover:transition-colors hover:duration-300 sm:w-auto md:visible md:p-2 md:px-4"
          >
            {TextNavigationBar.home.en}
          </a>
        </Link>
        <Link href="/#about">
          <a
            id="nav-about"
            className="p-1 hover:text-sky-300 hover:transition-colors hover:duration-300 md:p-2 md:px-4"
          >
            {TextNavigationBar.about.en}
          </a>
        </Link>
        <Link href="/#resume">
          <a
            id="nav-resume"
            className="p-1 hover:text-sky-300 hover:transition-colors hover:duration-300 md:p-2 md:px-4"
          >
            {TextNavigationBar.resume.en}
          </a>
        </Link>
        <Link href="/#profiles">
          <a
            id="nav-profiles"
            className="p-1 hover:text-sky-300 hover:transition-colors hover:duration-300 md:p-2 md:px-4"
          >
            {TextNavigationBar.profiles.en}
          </a>
        </Link>
        <Link href="/#stoating">
          <a
            id="nav-stoating"
            className="p-1 hover:text-sky-300 hover:transition-colors hover:duration-300 md:p-2 md:px-4"
          >
            {TextNavigationBar.stoating.en}
          </a>
        </Link>
        <Link href="/#contact">
          <a
            id="nav-contact"
            className="invisible w-0 p-2 px-4 hover:text-sky-300 hover:transition-colors hover:duration-300 sm:w-auto md:visible"
          >
            {TextNavigationBar.contact.en}
          </a>
        </Link>
        <button
          id="language"
          onClick={handleChangeLanguageClick}
          className="mx-1 my-2 rounded-full bg-slate-900 px-2 text-sm transition-all duration-200 hover:bg-slate-100 hover:text-slate-900"
        >
          DE
        </button>
      </div>
    </div>
  );
};
