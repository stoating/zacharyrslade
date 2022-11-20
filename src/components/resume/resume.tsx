import { resumeText } from "../../data/resume";
import * as transition from "./transition";
import Image from "next/image";

export const Resume = () => {
  return (
    <section id="resume">
      {/* resume container */}
      <div className="container mx-auto max-w-6xl bg-white">
        {/* resume grid */}
        <div className="grid grid-cols-4 ring">
          {/* left column */}
          <div className="col-span-1 row-span-full grid bg-slate-700 p-1 text-white ring">
            <ResumeProfileImage />
            <ResumeContacts />
            <ResumeLinks />
            <ResumeLanguages />
            <ResumeEducation />
            <ResumeInterests />
          </div>
          {/* right column */}
          <div className="col-span-3 row-span-full grid p-1 ring">
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
        className="rounded-full ring"
        alt="Berlin"
        width={300}
        height={300}
      />
    </div>
  );
};
const ResumeContacts = () => {
  return <div className="p-1 ring">contact</div>;
};
const ResumeLinks = () => {
  return <div className="p-1 ring">links</div>;
};
const ResumeLanguages = () => {
  return <div className="p-1 ring">languages</div>;
};
const ResumeEducation = () => {
  return <div className="p-1 ring">education</div>;
};
const ResumeInterests = () => {
  return <div className="p-1 ring">interests</div>;
};
const ResumeHeader = () => {
  return <div className="bg-slate-600 p-1 text-white ring">header</div>;
};
const ResumeAbout = () => {
  return <div className="bg-slate-500 p-1 text-white ring">about</div>;
};
const ResumeExperience = () => {
  return (
    <div className="grid grid-cols-12 bg-slate-200 p-1 ring">
      <h2
        id={"resume-" + resumeText.experiences_section.key}
        className="col-span-full"
      >
        {resumeText.experiences_section.en}
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
    <div
          id={
            "resume-" + resumeText.experiences_section.key + "-" + props.company.key
          }
          key={props.key}
          className="col-span-12 font-bold ring"
        >
          {props.company.name}
          {props.company.positions.map((position) => (
            <ResumeExperienceCompanyPosition company={props.company} position={position} />
          ))}
        </div>
  )
};
const ResumeExperienceCompanyPosition = (props: {
  company: typeof resumeText.experiences_section.companies[0];
  position: typeof resumeText.experiences_section.companies[0]["positions"][0];
}) => {
  return (
    <div
      id={
        "resume-" +
        resumeText.experiences_section.key +
        "-" +
        props.company.key +
        "-" +
        props.position.key
      }
      key={props.position.key}
      className="col-span-12 text-sm font-medium ring"
    >
      {props.position.en}, {props.position.location.en}, {props.position.dates.en}
      {props.position.bullets.map((bullet) => (
        <ResumeExperienceCompanyPositionBullet
          company={props.company}
          position={props.position}
          bullet={bullet}
        />
      ))}
    </div>
  );
};
const ResumeExperienceCompanyPositionBullet = (props: {
  company:  typeof resumeText.experiences_section.companies[0];
  position: typeof resumeText.experiences_section.companies[0]["positions"][0];
  bullet:   typeof resumeText.experiences_section.companies[0]["positions"][0]["bullets"][0];}) => {
  return (
    <div
      id={
        "resume-" +
        resumeText.experiences_section.key +
        "-" +
        props.company.key +
        "-" +
        props.position.key +
        "-" +
        props.bullet.key
      }
      key={props.bullet.key}
      className="col-span-12 text-xs font-light ring"
    >
      {props.bullet.en}
    </div>
  );
};
const ResumeSkills = () => {
  return (
    <div className="grid grid-cols-2 bg-slate-300 p-1 ring">
      <h2
        id={"resume-" + resumeText.skills_section.key}
        className="col-span-full"
      >
        {resumeText.skills_section.en}:
      </h2>
      {resumeText.skills_section.skills.map((skill, skill_index) => (
        <div className="col-span-1 text-center ring" key={skill_index}>
          <h3 id={"resume-skill-" + skill.key} className="text-lg font-bold">
            {skill.en}
          </h3>
          {skill.examples.map((example, example_index) => (
            <div className="text-left" key={example_index}>
              <p
                id={"resume-skill-" + skill.key + "-" + example.key}
                className="text-sm"
              >
                {example.en}
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
      <svg
        id="visual"
        viewBox="0 0 900 150"
        width="100%"
        height="100%"
        version="1.1"
      >
        <path d={transition.peak_1_1} fill="#e0f0fe">
          <animate
            attributeName="d"
            dur="10000ms"
            repeatCount="indefinite"
            values={
              transition.peak_1_1 +
              ";" +
              transition.peak_1_2 +
              ";" +
              transition.peak_1_1
            }
          ></animate>
        </path>
        <path d={transition.peak_2_1} fill="#cce8fe">
          <animate
            attributeName="d"
            dur="11000ms"
            repeatCount="indefinite"
            values={
              transition.peak_2_1 +
              ";" +
              transition.peak_2_2 +
              ";" +
              transition.peak_2_1
            }
          ></animate>
        </path>
        <path d={transition.peak_3_1} fill="#b5e1fe">
          <animate
            attributeName="d"
            dur="12000ms"
            repeatCount="indefinite"
            values={
              transition.peak_3_1 +
              ";" +
              transition.peak_3_2 +
              ";" +
              transition.peak_3_1
            }
          ></animate>
        </path>
        <path d={transition.peak_4_1} fill="#9bdafd">
          <animate
            attributeName="d"
            dur="13000ms"
            repeatCount="indefinite"
            values={
              transition.peak_4_1 +
              ";" +
              transition.peak_4_2 +
              ";" +
              transition.peak_4_1
            }
          ></animate>
        </path>
        <path d={transition.peak_5_1} fill="#7dd3fc">
          <animate
            attributeName="d"
            dur="6000ms"
            repeatCount="indefinite"
            values={
              transition.peak_5_1 +
              ";" +
              transition.peak_5_2 +
              ";" +
              transition.peak_5_1
            }
          ></animate>
        </path>
      </svg>
    </div>
  );
};
