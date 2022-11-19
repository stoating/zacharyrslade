import { navigationBarText } from "../data/navigation-bar";
import { greeterText } from "../data/greeter";
import { aboutText, aboutItems } from "../data/about";
import { resumeText } from "../data/resume";
import Link from "next/link";

export const NavigationBar = () => {
  const handleChangeLanguageClick = () => {
    const language = document.getElementById("language") as HTMLElement;

    if (language.innerHTML === "DE") {
      language.innerHTML = "EN";

      // Navigation Bar
      for (const [key, value] of Object.entries(navigationBarText)) {
        const navText = document.getElementById('nav-' + key) as HTMLElement;
        navText.innerHTML = value.de;
      }

      // Greeter
      for (const [key, value] of Object.entries(greeterText)) {
        const greeterText = document.getElementById('greeter-' + key) as HTMLElement;
        greeterText.innerHTML = value.de;
      }

      // About
      for (const [key, value] of Object.entries(aboutText)) {
        const aboutText = document.getElementById('about-' + key) as HTMLElement;
        aboutText.innerHTML = value.de;
      }
      for (const [key, value] of Object.entries(aboutItems)) {
        const aboutItemTitle = document.getElementById('about-title-' + value.title.en) as HTMLElement;
        const aboutItemValue = document.getElementById('about-value-' + value.title.en) as HTMLElement;
        aboutItemTitle.innerHTML = value.title.de + ':';
        aboutItemValue.innerHTML = value.value.de;
      }

      // Resume
      // Resume - Skills
      const skillsSection = document.getElementById('resume-' + resumeText.skills_section.key) as HTMLElement;
      skillsSection.innerHTML = resumeText.skills_section.de;
      for (const [key, skill] of Object.entries(resumeText.skills_section.skills)) {
        console.log (skill);
        const currentSkill = document.getElementById('resume-skill-' + skill.key) as HTMLElement;
        currentSkill.innerHTML = skill.de + ':';

        // Resume - Skills - Examples
        for (const [key, example] of Object.entries(skill.examples)) {
          const currentExample = document.getElementById('resume-skill-' + skill.key + '-' + example.key) as HTMLElement;
          currentExample.innerHTML = example.de;
        }
      }
    } else {
      language.innerHTML = "DE";

      // Navigation Bar
      for (const [key, value] of Object.entries(navigationBarText)) {
        const navText = document.getElementById('nav-' + key) as HTMLElement;
        navText.innerHTML = value.en;
      }

      // Greeter
      for (const [key, value] of Object.entries(greeterText)) {
        const greeterText = document.getElementById('greeter-' + key) as HTMLElement;
        greeterText.innerHTML = value.en;
      }

      // About
      for (const [key, value] of Object.entries(aboutText)) {
        const aboutText = document.getElementById('about-' + key) as HTMLElement;
        aboutText.innerHTML = value.en;
      }
      for (const [key, value] of Object.entries(aboutItems)) {
        const aboutItemTitle = document.getElementById('about-title-' + value.title.en) as HTMLElement;
        const aboutItemValue = document.getElementById('about-value-' + value.title.en) as HTMLElement;
        aboutItemTitle.innerHTML = value.title.en + ':';
        aboutItemValue.innerHTML = value.value.en;
      }

      // Resume
      // Resume - Skills
      const skillsSection = document.getElementById('resume-' + resumeText.skills_section.key) as HTMLElement;
      skillsSection.innerHTML = resumeText.skills_section.en;
      for (const [key, skill] of Object.entries(resumeText.skills_section.skills)) {
        console.log (skill);
        const currentSkill = document.getElementById('resume-skill-' + skill.key) as HTMLElement;
        currentSkill.innerHTML = skill.en + ':';

        // Resume - Skills - Examples
        for (const [key, example] of Object.entries(skill.examples)) {
          const currentExample = document.getElementById('resume-skill-' + skill.key + '-' + example.key) as HTMLElement;
          currentExample.innerHTML = example.en;
        }
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
            {navigationBarText.home.en}
          </a>
        </Link>
        <Link href="/#about">
          <a
            id="nav-about"
            className="p-1 hover:text-sky-300 hover:transition-colors hover:duration-300 md:p-2 md:px-4"
          >
            {navigationBarText.about.en}
          </a>
        </Link>
        <Link href="/#resume">
          <a
            id="nav-resume"
            className="p-1 hover:text-sky-300 hover:transition-colors hover:duration-300 md:p-2 md:px-4"
          >
            {navigationBarText.resume.en}
          </a>
        </Link>
        <Link href="/#profiles">
          <a
            id="nav-profiles"
            className="p-1 hover:text-sky-300 hover:transition-colors hover:duration-300 md:p-2 md:px-4"
          >
            {navigationBarText.profiles.en}
          </a>
        </Link>
        <Link href="/#stoating">
          <a
            id="nav-stoating"
            className="p-1 hover:text-sky-300 hover:transition-colors hover:duration-300 md:p-2 md:px-4"
          >
            {navigationBarText.stoating.en}
          </a>
        </Link>
        <Link href="/#contact">
          <a
            id="nav-contact"
            className="invisible w-0 p-2 px-4 hover:text-sky-300 hover:transition-colors hover:duration-300 sm:w-auto md:visible"
          >
            {navigationBarText.contact.en}
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
