import { Language } from "../_types";

export interface Education {
  name: string;
  location: string;
  gpa: string;
  gre: string;
  major: string;
  minors: Record<Language, string>[];
  graduation_date: Record<Language, string>;
}

export const education: Education = {
  name: "Valparaiso University",
  location: "Valparaiso, Indiana",
  gpa: "3.53/4.00",
  gre: "1360",
  major: "Bachelor of Science in Computer Engineering",
  minors: [
    {
      en: "Math Minor",
      de: "Nebenfach Mathe",
    },
    {
      en: "Chinese Minor",
      de: "Nebenfach Chinesisch",
    },
  ],
  graduation_date: {
    en: "December 2011",
    de: "Dezember 2011",
  },
};
