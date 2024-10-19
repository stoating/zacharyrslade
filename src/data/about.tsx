import { Language } from "./_types";

import { FaCar } from "react-icons/fa";
import { MdPinDrop } from "react-icons/md";
import { FaFlagUsa } from "react-icons/fa";
import { GiBatMask } from "react-icons/gi";

interface AboutItem {
  title: Record<Language, string>;
  value: Record<Language, string>;
  icon: JSX.Element;
}

export const aboutText = {
  about: {
    en: 'about me',
    de: 'über mich',
  },
  description: {
    en: `My name is Zachary (but most people just call me Zack). I am a software engineer
    with a passion for learning and creating. My professional career has
    focused on embedded systems development but my technical interests
    span many areas of software development. I have experience in software
    project management, education, and hardware test systems scaling and design.
    In my free time I enjoy programming personal projects, camping, traveling
    and dabbling in art.`,
    de: `Mein Name ist Zachary (aber die meisten Leute nennen mich einfach Zack). Ich bin ein Software-Ingenieur
    mit einer Leidenschaft für Lernen und Kreieren. Meine berufliche Karriere hat sich
    mit Entwicklung von Embedded Systems konzentriert, aber meine technischen Interessen
    umfassen jedoch viele Bereiche der Softwareentwicklung. Ich habe Erfahrung im Software
    Projektmanagement, Ausbildung und Skalierung und Design von Hardware-Testsystemen.
    In meiner Freizeit programmiere ich gerne persönliche Projekte, gehe campen, reise
    und beschäftige mich mit Kunst.`,
  },
};

export const aboutItems: AboutItem[] = [
  {
    title: {
      en: "title",
      de: "titel",
    },
    value: {
      en: "Software Engineer",
      de: "Softwareentwickler",
    },
    icon: <GiBatMask />,
  },
  {
    title: {
      en: "nationality",
      de: "nationalität",
    },
    value: {
      en: "American",
      de: "Amerikaner",
    },
    icon: <FaFlagUsa />,
  },
  {
    title: {
      en: "location",
      de: "standort",
    },
    value: {
      en: "Stuttagrt, Germany",
      de: "Stuttagrt, Deutschland",
    },
    icon: <MdPinDrop />,
  },
  {
    title: {
      en: "employer",
      de: "arbeitgeber",
    },
    value: {
      en: "Bosch Engineering GmbH",
      de: "Bosch Engineering GmbH",
    },
    icon: <FaCar />,
  },
];
