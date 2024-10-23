import { FaCampground, FaGlobeAmericas, FaPalette } from "react-icons/fa";
import { Language } from "../_types";

export interface Interests {
  title: Record<Language, string>;
  interests: {
    name: Record<Language, string>;
    icon: JSX.Element;
  }[];
}

export const interests: Interests = {
  title: {
    en: "Interests",
    de: "Interessen",
  },
  interests: [
    {
      name: {
        en: "Camping",
        de: "Zelten",
      },
      icon: <FaCampground />,
    },
    {
      name: {
        en: "Traveling",
        de: "Reisen",
      },
      icon: <FaGlobeAmericas />,
    },
    {
      name: {
        en: "Art",
        de: "Kunst",
      },
      icon: <FaPalette />,
    },
  ],
};
