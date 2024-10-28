import { Language } from "../_types";

export interface Experiences {
  title: Record<Language, string>;
  experiences: {
    company: string;
    positions: {
      title: Record<Language, string>;
      location: Record<Language, string>;
      dates: Record<Language, string>;
      highlights: Record<Language, string>[];
    }[];
  }[];
}

export const experiences: Experiences = {
  title: {
    en: "Experience:",
    de: "Erfahrung:",
  },
  experiences: [
    {
      company: "Bosch Engineering GmbH",
      positions: [
        {
          title: {
            en: "Senior Automation Engineer - Active Safety",
            de: "Senior Automatisierungsingeniuer - Active Safety",
          },
          location: {
            en: "Stuttgart, Germany",
            de: "Stuttgart, Deutschland",
          },
          dates: {
            en: "May 2022 - Present",
            de: "Mai 2022 - Heute",
          },
          highlights: [
            {
              en: "Complete project ownership from design to coding of a low-cost HIL for automated testing of active safety software",
              de: "Vollständige Projektverantwortung eines kostenarm HIL für automatisierte Tests von active safety software",
            },
            {
              en: "Coordinate with leadership to plan and prioritize DevOps activities with consideration for available resources and time",
              de: "Planung und Priorisierung von DevOps-Aktivitäten unter Berücksichtigung der verfügbaren Ressourcen und Zeit",
            },
            {
              en: "Manage students and coordinate with an international team to meet timing goals for various automation initiatives",
              de: "Koordination mit Praktikanten und einem internationalen Team zur Einhaltung von Zeitzielen für Automatisierungsthemen",
            },
          ],
        },
        {
          title: {
            en: "Software Project Component Manager - Chassis Systems",
            de: "Software Project Component Manager - Chassis Systems",
          },
          location: {
            en: "Stuttgart, Germany",
            de: "Stuttgart, Deutschland",
          },
          dates: {
            en: "November 2017 - May 2022",
            de: "November 2017 - Mai 2022",
          },
          highlights: [
            {
              en: "Software Project Component Manager for the largest, most profitable radar project and team in the Bosch Engineering Group",
              de: "Software Project Component Manager für das größte und profitabelste Radarprojekt bei der Bosch Engineering GmbH",
            },
            {
              en: "Primary customer contact for technical analysis and change requests to my projects code base",
              de: "Hauptansprechpartner des Kunden für technische Analysen und Änderungswünsche an der Codebasis meines Projekts",
            },
            {
              en: `Perform detailed project planning, requirements analysis, technical implementation, testing strategy, and numerous
                  supporting tasks across multiple parts of the code base for an international, diverse team of engineers`,
              de: `Durchführung von detaillierter Projektplanung, Anforderungsanalyse, technischer Implementierung, Teststrategie und
                  diversen unterstützenden Aufgaben in mehreren Teilen der Codebasis für ein internationales, vielfältiges Ingenieurteam`,
            },
          ],
        },
      ],
    },
    {
      company: "White Tie Games LLC",
      positions: [
        {
          title: {
            en: "Co-Founder",
            de: "Mitgründer",
          },
          location: {
            en: "Akron, OH, USA",
            de: "Akron, OH, Vereinigte Staaten",
          },
          dates: {
            en: "August 2015 - July 2017",
            de: "August 2015 - Juli 2017",
          },
          highlights: [
            {
              en: "Design, build and manage an online marketplace selling PC videogames using an affiliate program with online personalities",
              de: `Design, Aufbau und Verwaltung eines Online-Marketplace für PC-Videospiele unter Verwendung eines Partnerprogramms mit
                  Online-Personalities`,
            },
            {
              en: "Full-Stack web development using the Laravel MVC Framework incl. SQL database design, PHP, HTML, CSS, and Javascript",
              de: "Full-Stack-Webentwicklung mit dem Laravel MVC Framework inkl. SQL-Datenbankdesign, PHP, HTML, CSS und Javascript",
            },
            {
              en: "Developed website design skills, UX, art asset development, IT, and Amazon Web Services (AWS) including EC2 servers and S3",
              de: "Entwickelte Fähigkeiten in den Bereichen Website-Design, UX, Entwicklung von Grafiken, IT und Amazon Web Services (AWS)",
            },
            {
              en: "Account management and team management for building art assets and managing affiliate accounts",
              de: "Account-Management und Team-Management für den Aufbau von Grafiken und die Verwaltung von Partner-Accounts",
            },
          ],
        },
      ],
    },
    {
      company: "Bosch Engineering Group",
      positions: [
        {
          title: {
            en: "Engineering Chassis Software Engineer",
            de: "Engineering Chassis Softwareingenieur",
          },
          location: {
            en: "Farmington Hills, MI, USA",
            de: "Farmington Hills, MI, Vereinigte Staaten",
          },
          dates: {
            en: "January 2014 - January 2017",
            de: "Januar 2014 - Januar 2017",
          },
          highlights: [
            {
              en: "Performed my role as Complete Software Project Responsible and oversaw the timely release of multiple projects yearly",
              de: "Gesamt-Softwareprojekt Verantwortlich. Überwachte die rechtzeitige Freigabe von mehreren Projekten pro Jahr",
            },
            {
              en: "Led small teams and coordinated with other software groups to ensure successful project releases",
              de: "Leitete kleine Teams und koordinierte mit anderen Softwaregruppen, um erfolgreiche Projektfreigaben zu gewährleisten",
            },
            {
              en: "Acted as Diagnostic Communication and Diagnostic Software Responsible for all departmental programs",
              de: "Verantwortlich für die Diagnosekommunikation und die Diagnosesoftware für alle Programme der Abteilung",
            },
          ],
        },
      ],
    },
    {
      company: "Robert Bosch LLC",
      positions: [
        {
          title: {
            en: "Complete Software Project Responsible",
            de: "Gesamt-Softwareprojekt Verantwortlich",
          },
          location: {
            en: "Farmington Hills, MI, USA",
            de: "Farmington Hills, MI, Vereinigte Staaten",
          },
          dates: {
            en: "February 2012 - August 2012",
            de: "Februar 2012 - August 2012",
          },
          highlights: [
            {
              en: "Successfully developed customer logic, network communication, diagnostics, and software integrations for electronic steering control systems",
              de: "Entwicklung von Kundenlogik, Net-Kommunikation, Diagnose und Software-Integrationen für elektronische Lenkungssysteme",
            },
            {
              en: "Produced safety critical automotive software in a large group under strict time constraints",
              de: "Erstellung von sicherheitskritischer Software für Kraftfahrzeuge in einer großen Gruppe unter strengen Zeitvorgaben",
            },
          ],
        },
        {
          title: {
            en: "Manufacturing Execution Systems (MES) Engineer",
            de: "Manufacturing Execution Systems (MES) Ingenieur",
          },
          location: {
            en: "Anderson, SC, USA",
            de: "Anderson, SC, Vereinigte Staaten",
          },
          dates: {
            en: "August 2012 - February 2013",
            de: "August 2012 - Februar 2013",
          },
          highlights: [
            {
              en: "Built SQL databases, data acquisition programs and HTML webpages for the Planar Sensor Element manufacturing line",
              de: "Erstellung von SQL-Datenbanken, Datenerfassungsprogrammen und HTML-Webseiten für das Planar Sensor Element (PSE) Fertigungslinie",
            },
            {
              en: "Reduced failed move ticket transaction time for the PSE by 39%",
              de: "Reduzierung der Transaktionszeit für fehlgeschlagene Transfers bei der PSE um 39%",
            },
          ],
        },
        {
          title: {
            en: "Automotive Radar Systems Sofware Engineer",
            de: "Automotive Radar Systems Softwareingenieur",
          },
          location: {
            en: "Abstatt, Germany",
            de: "Abstatt, Deutschland",
          },
          dates: {
            en: "February 2013 - August 2013",
            de: "Februar 2013 - August 2013",
          },
          highlights: [
            {
              en: "Developed radar software for the Porsche Cajun, Porsche E2 II, and VW PQx",
              de: "Entwicklung von Radarsoftware für den Porsche Cajun, Porsche E2 II und VW PQx",
            },
            {
              en: "Dramatically reduced endurance test sorting procedure from an overnight process to under 2 hours",
              de: "Dramatische Reduzierung des Sortierverfahrens für Dauertests von einer Nacht auf weniger als 2 Stunden",
            },
          ],
        },
        {
          title: {
            en: "Automotive Engineering Sales Associate",
            de: "Automotive Engineering Vertriebsmitarbeiter",
          },
          location: {
            en: "Farmington Hills, MI, USA",
            de: "Farmington Hills, MI, Vereinigte Staaten",
          },
          dates: {
            en: "August 2012 - February 2013",
            de: "August 2012 - Februar 2013",
          },
          highlights: [
            {
              en: "Created websites, advertisements, and images for Bosch central and head up displays",
              de: "Erstellung von Websites, Werbungen und Bildern für Bosch Central und Head-up-Displays",
            },
            {
              en: "Accurately predicted Model Year 2014 Silverado base trim radio take rate within 0.5%",
              de: "Genaue Vorhersage der Abnahmerate der Silverado-Basisausstattung für das Modelljahr 2014 mit einer Genauigkeit von 0,5",
            },
            {
              en: "Led a project to create a fully traceable, streamlined flash and deliver process for development central displays",
              de: "Leitung eines Projekts zur Schaffung eines vollständig rückverfolgbaren, Flash und Lieferprozesses für Central Displays",
            },
          ],
        },
      ],
    },
  ],
};
