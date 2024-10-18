import React from "react";
import { ContextLanguage } from "../../context/language";
import { resumeText, interests, Language } from "../../data/resume";
import * as svg from "./svg";
import Image from "next/image";
import { Links } from "../../data/links";
import Link from "next/link";

export const Resume = () => {
  return (
    <section id="resume">
      {/* resume container */}
      <div className="container mx-auto max-w-6xl bg-white">
        {/* resume grid */}
        <div className="grid grid-cols-4">
          {/* left column */}
          <div className="col-span-1 row-span-full grid bg-slate-700 text-white">
            <ResumeProfileImage />
            <ResumeContacts />
            <ResumeLinks />
            <ResumeLanguages />
            <ResumeEducation />
            <ResumeInterests />
          </div>
          {/* right column */}
          <div className="col-span-3 row-span-full grid">
            <ResumeHeader />
            <ResumeAbout />
            <ResumeExperience />
            <ResumeSkills />
          </div>
        </div>
      </div>
      <ResumeTransitionBottom />
    </section>
  );
};

const ResumeProfileImage = () => {
  return (
    <div className="p-4 ring">
      <Image
        src="/images/zack-resume-profile.webp"
        className="rounded-full"
        alt="Berlin"
        width={300}
        height={300}
      />
    </div>
  );
};

const ResumeContacts = () => {
  const { language } = React.useContext(ContextLanguage);

  const title = resumeText.contact_section.title[language as keyof typeof resumeText.contact_section.title];
  const address = resumeText.contact_section.address;
  const phone_text =
    resumeText.contact_section.phone.text[
      language as keyof typeof resumeText.contact_section.phone.text
    ];
  const phone_number = resumeText.contact_section.phone.value;
  const email = resumeText.contact_section.email;

  return (
    <div className="p-1 ring">
      {title} {address} {phone_text} {phone_number} {email}
    </div>
  );
};

const ResumeLinks = () => {
  const MyResumeLinks = Links.filter(function (Links) {
    return Links.type === "professional" && Links.for.includes("zachary");
  });

  return (
    <div className="p-1 ring">
      <h3>Links</h3>
      {MyResumeLinks.map((item, index) => (
        <div key={index}>
          <Link href={item.ref}>
            <a
              className="-mb-2 inline-block text-3xl"
              target="_blank"
              rel="noreferrer"
            >
              {item.icon}
            </a>
          </Link>
          <div className="inline-block p-1 text-xl">{item.text}</div>
        </div>
      ))}
    </div>
  );
};

const ResumeLanguages = () => {
  const { language } = React.useContext(ContextLanguage);
  const title =
    resumeText.languages_section.text[
      language as keyof typeof resumeText.languages_section.text
    ];
  const language_sections = resumeText.languages_section.languages.map(
    (language) => (
      <ResumeLanguagesLanguage key={language.key} language={language} />
    )
  );

  return (
    <div className="p-1 ring">
      <h3>{title}</h3>
      {language_sections}
    </div>
  );
};

const ResumeLanguagesLanguage = (props: {
  key: string;
  language: typeof resumeText.languages_section.languages[0];
}) => {
  const { language } = React.useContext(ContextLanguage);
  const lang =
    props.language.text[language as keyof typeof props.language.text];
  const rank =
    props.language.rank[language as keyof typeof props.language.rank];

  return (
    <div key={props.key} className="col-span-12 font-bold">
      {lang}: {rank}
    </div>
  );
};

const ResumeEducation = () => {
  const { language } = React.useContext(ContextLanguage);

  const name = resumeText.education_section.university.name;
  const location = resumeText.education_section.university.location;
  const gpa = resumeText.education_section.university.gpa;
  const gre = resumeText.education_section.university.gre;
  const major = resumeText.education_section.university.major;
  const date =
    resumeText.education_section.university.date[
      language as keyof typeof resumeText.education_section.university.date
    ];
  const minors = resumeText.education_section.university.minors
    .map((minor) => (minor[language as keyof typeof minor]))
    .join(", ");

  return (
    <div className="p-1 ring">
      {name} {location} {gpa} {gre} {major} {date} {minors}
    </div>
  );
};

const ResumeInterests = () => {
  const { language } = React.useContext(ContextLanguage);

  const title = interests.title[language as Language];
  const items = interests.items[language as Language];

  return (
    <div className="p-1 ring">
      <div>{title}:</div>
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

const ResumeHeader = () => {
  const name = resumeText.header_section.name;

  return <div className="bg-slate-600 p-1 text-white">{name}</div>;
};

const ResumeAbout = () => {
  const { language } = React.useContext(ContextLanguage);

  const about =
    resumeText.about_section[language as keyof typeof resumeText.about_section];

  return <div className="bg-slate-500 p-1 text-white">{about}</div>;
};

const ResumeExperience = () => {
  const { language } = React.useContext(ContextLanguage);

  return (
    <div className="grid grid-cols-12 bg-slate-200 p-1">
      <h2 className="col-span-full">
        {
          resumeText.experiences_section.text[
            language as keyof typeof resumeText.experiences_section.text
          ]
        }
      </h2>
      {resumeText.experiences_section.companies.map((company) => (
        <ResumeExperienceCompany key={company.key} company={company} />
      ))}
    </div>
  );
};

const ResumeExperienceCompany = (props: {
  key: string;
  company: typeof resumeText.experiences_section.companies[0];
}) => {
  return (
    <div key={props.key} className="col-span-12 font-bold">
      {props.company.name}
      {props.company.positions.map((position) => (
        <ResumeExperienceCompanyPosition
          key={position.key}
          company={props.company}
          position={position}
        />
      ))}
    </div>
  );
};

const ResumeExperienceCompanyPosition = (props: {
  key: string;
  company: typeof resumeText.experiences_section.companies[0];
  position: typeof resumeText.experiences_section.companies[0]["positions"][0];
}) => {
  const { language } = React.useContext(ContextLanguage);

  return (
    <div key={props.key} className="col-span-12 text-sm font-medium">
      {props.position.text[language as keyof typeof props.position.text]},{" "}
      {
        props.position.location[
          language as keyof typeof props.position.location
        ]
      }
      , {props.position.dates[language as keyof typeof props.position.dates]}
      {props.position.bullets.map((bullet) => (
        <ResumeExperienceCompanyPositionBullet
          key={bullet.key}
          company={props.company}
          position={props.position}
          bullet={bullet}
        />
      ))}
    </div>
  );
};

const ResumeExperienceCompanyPositionBullet = (props: {
  key: string;
  company: typeof resumeText.experiences_section.companies[0];
  position: typeof resumeText.experiences_section.companies[0]["positions"][0];
  bullet: typeof resumeText.experiences_section.companies[0]["positions"][0]["bullets"][0];
}) => {
  const { language } = React.useContext(ContextLanguage);
  return (
    <div key={props.key} className="col-span-12 text-xs font-light">
      {props.bullet.text[language as keyof typeof props.bullet.text]}
    </div>
  );
};

const ResumeSkills = () => {
  const { language } = React.useContext(ContextLanguage);
  return (
    <div className="grid grid-cols-2 bg-slate-300 p-1">
      <h2 className="col-span-full">
        {
          resumeText.skills_section.text[
            language as keyof typeof resumeText.skills_section.text
          ]
        }
        :
      </h2>
      {resumeText.skills_section.skills.map((skill, skill_index) => (
        <div className="col-span-1 text-center" key={skill_index}>
          <h3 className="text-lg font-bold">
            {skill.text[language as keyof typeof skill.text]}
          </h3>
          {skill.examples.map((example, example_index) => (
            <div className="text-left" key={example_index}>
              <p className="text-sm">
                {example.text[language as keyof typeof example.text]}
              </p>
              <div>{example.rank}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const ResumeTransitionBottom = () => {
  return (
    <div className="w-screen bg-white bg-cover bg-center bg-no-repeat">
      <svg viewBox="0 0 900 150" width="100%" height="100%" version="1.1">
        <path d={svg.peak_1_1} fill="#e0f0fe">
          <animate
            attributeName="d"
            dur="10000ms"
            repeatCount="indefinite"
            values={svg.peak_1_1 + ";" + svg.peak_1_2 + ";" + svg.peak_1_1}
          ></animate>
        </path>
        <path d={svg.peak_2_1} fill="#cce8fe">
          <animate
            attributeName="d"
            dur="11000ms"
            repeatCount="indefinite"
            values={svg.peak_2_1 + ";" + svg.peak_2_2 + ";" + svg.peak_2_1}
          ></animate>
        </path>
        <path d={svg.peak_3_1} fill="#b5e1fe">
          <animate
            attributeName="d"
            dur="12000ms"
            repeatCount="indefinite"
            values={svg.peak_3_1 + ";" + svg.peak_3_2 + ";" + svg.peak_3_1}
          ></animate>
        </path>
        <path d={svg.peak_4_1} fill="#9bdafd">
          <animate
            attributeName="d"
            dur="13000ms"
            repeatCount="indefinite"
            values={svg.peak_4_1 + ";" + svg.peak_4_2 + ";" + svg.peak_4_1}
          ></animate>
        </path>
        <path d={svg.peak_5_1} fill="#7dd3fc">
          <animate
            attributeName="d"
            dur="6000ms"
            repeatCount="indefinite"
            values={svg.peak_5_1 + ";" + svg.peak_5_2 + ";" + svg.peak_5_1}
          ></animate>
        </path>
      </svg>
    </div>
  );
};
