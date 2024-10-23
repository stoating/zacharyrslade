import { Language } from "../_types";

import { GiPieSlice, GiPretzel } from "react-icons/gi";

export interface Languages {
  title: Record<Language, string>;
  languages: {
    proficiency: Record<Language, string>;
    name: Record<Language, string>;
    icon: JSX.Element;
  }[];
}

export const languages: Languages = {
  title: {
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
      icon: <GiPieSlice />,
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
      icon: <GiPretzel />,
    },
  ],
};
