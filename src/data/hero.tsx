import { Language } from "./_types";

export interface Hero {
  text: Record<Language, string>;
}
export const hero: Hero = {
  text: {
    en: "Lifelong learner. Chronically curious",
    de: "Etwas Witziges, damit ich eingestellt werde",
  },
};
