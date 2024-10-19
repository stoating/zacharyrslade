import { Language } from "../_types";

export interface Interests {
  title: Record<Language, string>;
  items: Record<Language, string[]>;
}

export const interests: Interests = {
    title: {
      en: "Interests",
      de: "Interessen",
    },
    items: {
      en: ["Camping", "Traveling", "Art"],
      de: ["Zelten", "Reisen", "Kunst"],
    },
}
