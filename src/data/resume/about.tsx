import { Language } from "../_types";

export interface About {
  name: string;
  description: Record<Language, string>;
}

export const about: About = {
  name: "Zachary R. Slade",
  description: {
    en: "A dedicated software engineer who takes pride in his work and finds joy in helping others. An optimistic teamplayer who is not afraid to tackle difficult problems and get the job done.",
    de: "Ein engagierter Software-Ingenieur, der stolz auf seine Arbeit ist und Freude daran hat, anderen zu helfen. Ein optimistischer Teamplayer, der sich nicht scheut, schwierige Probleme anzugehen und die Arbeit zu erledigen.",
  },
};
