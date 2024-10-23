import { Language } from "../_types";

export interface Contact {
  title: Record<Language, string>;
  address: string;
  phone: {
    text: Record<Language, string>;
    number: string;
  };
  email: string;
}

export const contact: Contact = {
  title: {
    en: "Contact",
    de: "Kontakt",
  },
  address: "Stuttgart, Germany",
  phone: {
    text: {
      en: "Cell",
      de: "Handy",
    },
    number: "+49 172 189 3085",
  },
  email: "zack.slade@gmail.com",
};
