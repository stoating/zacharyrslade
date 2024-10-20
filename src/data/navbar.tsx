import { Language } from "./_types"

export interface Navbar {
  home: Record<Language, string>;
  about: Record<Language, string>;
  resume: Record<Language, string>;
  profiles: Record<Language, string>;
  stoating: Record<Language, string>;
  contact: Record<Language, string>;
}

export const navbar = {
  home: {
    en: "Home",
    de: "Heim",
  },
  about: {
    en: "About",
    de: "Über mich",
  },
  resume: {
    en: "Resume",
    de: "CV",
  },
  profiles: {
    en: "Profiles",
    de: "Profile",
  },
  stoating: {
    en: "Stoating",
    de: "Stoating",
  },
  contact: {
    en: "Contact",
    de: "Kontakt",
  },
};
