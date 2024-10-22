import { Language } from "../_types";

export interface Skills {
  title: Record<Language, string>;
  skills: {
    name: Record<Language, string>;
    examples: {
      name: Record<Language, string>;
      rank: number;
    }[];
  }[];
}

export const skills: Skills = {
  title: {
    en: "Skills",
    de: "Fähigkeiten",
  },
  skills: [
    {
      name: {
        en: "Project Management",
        de: "Projektmanagement",
      },
      examples: [
        {
          name: {
            en: "Jira",
            de: "Jira",
          },
          rank: 5,
        },
        {
          name: {
            en: "Confluence",
            de: "Confluence",
          },
          rank: 3,
        },
        {
          name: {
            en: "Microsoft Project",
            de: "Microsoft Project",
          },
          rank: 2,
        },
      ],
    },
    {
      name: {
        en: "Software Tools and Methods",
        de: "Software Tools und Methoden",
      },
      examples: [
        {
          name: {
            en: "Git",
            de: "Git",
          },
          rank: 5,
        },
        {
          name: {
            en: "Agile",
            de: "Agil",
          },
          rank: 3,
        },
        {
          name: {
            en: "DOORS",
            de: "DOORS",
          },
          rank: 4,
        },
      ],
    },
    {
      name: {
        en: "Software Development",
        de: "Softwareentwicklung",
      },
      examples: [
        {
          name: {
            en: "C",
            de: "C",
          },
          rank: 5,
        },
        {
          name: {
            en: "Python",
            de: "Python",
          },
          rank: 3,
        },
        {
          name: {
            en: "JavaScript",
            de: "JavaScript",
          },
          rank: 2,
        },
      ],
    },
    {
      name: {
        en: "Platform Development",
        de: "Plattformentwicklung",
      },
      examples: [
        {
          name: {
            en: "Jenkins",
            de: "Jenkins",
          },
          rank: 5,
        },
        {
          name: {
            en: "JFrog Artifactory",
            de: "JFrog Artifactory",
          },
          rank: 2,
        },
        {
          name: {
            en: "Amazon Web Services",
            de: "Amazon Web Services",
          },
          rank: 2,
        },
      ],
    },
  ],
};
