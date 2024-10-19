import { about, About } from "./about";
import { contact, Contact } from "./contact";
import { education, Education } from "./education";
import { experiences, Experiences } from "./experiences";
import { interests, Interests } from "./interests";
import { languages, Languages } from "./languages";
import { skills, Skills } from "./skills";

export interface Resume {
  about: About;
  contact: Contact;
  education: Education;
  experiences: Experiences;
  interests: Interests;
  languages: Languages;
  skills: Skills;
}

export const resume: Resume = {
  about,
  contact,
  education,
  experiences,
  interests,
  languages,
  skills,
};
