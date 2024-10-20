import { Language } from "./_types";

export interface About {
    title: Record<Language, string>;
    name: Record<Language, string>;
    email: Record<Language, string>;
    message: Record<Language, string>;
    submit: Record<Language, string>;
  }

export const contact = {
    title: {
      en: "Reach Out",
      de: "Kontaktiere mich",
    },
    name: {
        en: "Name",
        de: "Name",
    },
    email: {
        en: "Email",
        de: "Email",
    },
    message: {
        en: "Message",
        de: "Nachricht",
    },
    submit: {
        en: "Send Message",
        de: "Nachricht senden",
    },
  };