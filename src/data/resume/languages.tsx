import { Language } from "../_types";

export interface Languages {
  text: Record<Language, string>;
  languages: {
    proficiency: Record<Language, string>;
    name: Record<Language, string>;
  }[];
}

export const languages: Languages = {
  text: {
    en: "Languages",
    de: "Sprachen",
  },
  languages: [
    {
      name: {
        en: "English",
        de: "Englisch",
      },
      proficiency: {
        en: "Native",
        de: "Muttersprache",
      },
    },
    {
      name: {
        en: "German",
        de: "Deutsch",
      },
      proficiency: {
        en: "B1",
        de: "B1",
      },
    },
  ],
};
