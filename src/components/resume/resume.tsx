import React from "react";
import Image from "next/image";
import Link from "next/link";

import { ContextLanguage } from "../../context/language";
import { Language } from "../../data/_types";
import { resume } from "../../data/resume/_resume";
import { links } from "../../data/links";

import * as svg from "./svgs";

export const Resume = () => {
  return (
    <section id="resume">
      {/* resume container */}
      <div className="container mx-auto max-w-6xl bg-white">
        {/* resume grid */}
        <div className="my-10 grid grid-cols-4 rounded-xl shadow-lg shadow-slate-700">
          {/* left column */}
          <div className="col-span-1 row-span-full grid rounded-l-xl bg-slate-700 text-white">
            <ResumeProfileImage />
            <ResumeContacts />
            <ResumeLinks />
            <ResumeEducation />
            <ResumeLanguages />
            <ResumeInterests />
          </div>
          {/* right column */}
          <div className="col-span-3 row-span-full grid rounded-r-xl">
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
    <div className="rounded-tl-xl p-4 ring">
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

  const contact = resume.contact;
  const title = contact.title[language as Language];
  const address = contact.address;
  const phone_text = contact.phone.text[language as Language];
  const phone_number = contact.phone.number;
  const email = contact.email;

  return (
    <div className="p-1 ring">
      {address} {phone_text} {phone_number} {email}
    </div>
  );
};

const ResumeLinks = () => {
  const resume_links = links.filter(function (links) {
    return links.type === "professional" && links.for.includes("zachary");
  });

  return (
    <div className="p-1 ring">
      {resume_links.map((item, index) => (
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

  const languages_data = resume.languages;
  const title = languages_data.title[language as Language];
  const languages = languages_data.languages;

  return (
    <div className="p-1 ring">
      <h3>{title}</h3>
      {languages.map((cur_lang, index) => (
        <div key={index}>
          <div>{cur_lang.name[language as Language]}</div>
          <div>{cur_lang.proficiency[language as Language]}</div>
        </div>
      ))}
    </div>
  );
};

const ResumeEducation = () => {
  const { language } = React.useContext(ContextLanguage);

  const education = resume.education;
  const name = education.name;
  const location = education.location;
  const gpa = education.gpa;
  const gre = education.gre;
  const major = education.major;
  const graduation_date = education.graduation_date[language as Language];
  const minors = education.minors
    .map((minor) => minor[language as Language])
    .join(", ");

  return (
    <div className="p-1 ring">
      {name} {location} {gpa} {gre} {major} {graduation_date} {minors}
    </div>
  );
};

const ResumeInterests = () => {
  const { language } = React.useContext(ContextLanguage);

  const title = resume.interests.title[language as Language];
  const items = resume.interests.items[language as Language];

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
  const name = resume.about.name;

  return (
    <div className="rounded-tr-xl bg-slate-600 p-4 text-4xl font-bold text-white">
      {name}
    </div>
  );
};

const ResumeAbout = () => {
  const { language } = React.useContext(ContextLanguage);

  const description = resume.about.description[language as Language];

  return (
    <div className="bg-slate-500 p-4 text-lg italic text-white">
      {description}
    </div>
  );
};

const ResumeExperience = () => {
  const { language } = React.useContext(ContextLanguage);

  const experiences_data = resume.experiences;
  const title = experiences_data.title[language as Language];
  const experiences = experiences_data.experiences;

  return (
    <div className="grid grid-cols-12 bg-slate-200 p-2">
      {experiences.map((experience, index) => (
        <div key={index} className="col-span-12 p-2 font-bold">
          <div className="text-xl">{experience.company}</div>
          {experience.positions.map((position, index) => (
            <div key={index} className="text-md col-span-12 font-medium">
              {position.title[language as Language]},{" "}
              {position.location[language as Language]},{" "}
              {position.dates[language as Language]}
              {position.highlights.map((highlight, index) => (
                <div key={index} className="col-span-12 text-sm font-light">
                  {highlight[language as Language]}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const ResumeSkills = () => {
  const { language } = React.useContext(ContextLanguage);

  const skills_data = resume.skills;
  const title = skills_data.title[language as Language];
  const skills = skills_data.skills;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 rounded-br-xl bg-slate-300 p-1">
      {skills.map((skill, index) => (
        <div key={index} className="col-span-1 p-4 text-left">
          <h3 className=" pl-8 sm:pl-16 text-lg font-bold">
            {skill.name[language as Language]}
          </h3>
          {skill.examples.map((example, index) => (
            <div key={index} className="text-left">
              <p className="text-md pl-1 font-semibold">
                {example.name[language as Language]}
              </p>
              <div className="h-4 rounded-full">
                <div
                  className="h-3 rounded-full bg-slate-500"
                  style={{ width: `${(example.rank / 5) * 100}%` }}
                ></div>
              </div>
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
