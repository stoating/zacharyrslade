import { resumeText } from "../data/resume";
import Image from "next/image";

const peak_1_1 =
  "M0 34L82 44L164 46L245 31L327 33L409 29L491 32L573 25L655 48L736 47L818 21L900 39L900 151L818 151L736 151L655 151L573 151L491 151L409 151L327 151L245 151L164 151L82 151L0 151Z";
const peak_1_2 =
  "M0 34L82 29L164 20L245 44L327 27L409 46L491 26L573 47L655 44L736 24L818 40L900 29L900 151L818 151L736 151L655 151L573 151L491 151L409 151L327 151L245 151L164 151L82 151L0 151Z";
const peak_2_1 =
  "M0 46L82 48L164 47L245 62L327 51L409 69L491 57L573 60L655 46L736 55L818 51L900 55L900 151L818 151L736 151L655 151L573 151L491 151L409 151L327 151L245 151L164 151L82 151L0 151Z";
const peak_2_2 =
  "M0 62L82 57L164 60L245 55L327 53L409 54L491 53L573 69L655 66L736 64L818 69L900 66L900 151L818 151L736 151L655 151L573 151L491 151L409 151L327 151L245 151L164 151L82 151L0 151Z";
const peak_3_1 =
  "M0 74L82 75L164 83L245 75L327 74L409 79L491 81L573 89L655 67L736 89L818 87L900 72L900 151L818 151L736 151L655 151L573 151L491 151L409 151L327 151L245 151L164 151L82 151L0 151Z";
const peak_3_2 =
  "M0 77L82 79L164 74L245 83L327 68L409 77L491 74L573 85L655 72L736 91L818 86L900 84L900 151L818 151L736 151L655 151L573 151L491 151L409 151L327 151L245 151L164 151L82 151L0 151Z";
const peak_4_1 =
  "M0 104L82 111L164 92L245 95L327 92L409 107L491 98L573 94L655 110L736 105L818 98L900 96L900 151L818 151L736 151L655 151L573 151L491 151L409 151L327 151L245 151L164 151L82 151L0 151Z";
const peak_4_2 =
  "M0 106L82 95L164 95L245 110L327 111L409 105L491 94L573 99L655 106L736 110L818 93L900 94L900 151L818 151L736 151L655 151L573 151L491 151L409 151L327 151L245 151L164 151L82 151L0 151Z";
const peak_5_1 =
  "M0 134L82 119L164 120L245 119L327 128L409 133L491 122L573 124L655 131L736 134L818 114L900 119L900 151L818 151L736 151L655 151L573 151L491 151L409 151L327 151L245 151L164 151L82 151L0 151Z";
const peak_5_2 =
  "M0 129L82 130L164 115L245 128L327 130L409 129L491 130L573 116L655 117L736 128L818 128L900 134L900 151L818 151L736 151L655 151L573 151L491 151L409 151L327 151L245 151L164 151L82 151L0 151Z";

export const Resume = () => {
  return (
    <section id="resume">
      {/* resume container */}
      <div className="container mx-auto max-w-6xl bg-white">
        {/* resume grid */}
        <div className="grid grid-cols-12 ring">
          {/* left column */}
          <div className="col-span-3 row-span-full grid bg-slate-700 p-1 text-white ring">
            {/* left image */}
            <div className="p-4 ring">
              <Image
                src="/images/zack-resume-profile.webp"
                className="rounded-full ring"
                alt="Berlin"
                width={300}
                height={300}
              />
            </div>
            {/* left contact */}
            <div className="p-1 ring">contact</div>
            {/* left links */}
            <div className="p-1 ring">links</div>
            {/* left languages */}
            <div className="p-1 ring">languages</div>
            {/* left skills */}
            <div className="p-1 ring">interests</div>
          </div>
          {/* right column */}
          <div className="col-span-10 row-span-full grid p-1 ring">
            {/* right header */}
            <div className="bg-slate-600 p-1 text-white ring">header</div>
            {/* right about */}
            <div className="bg-slate-500 p-1 text-white ring">about</div>
            {/* right experience */}
            <div className="grid grid-cols-12 bg-slate-100 p-1 ring">
              <h2
                id={"resume-" + resumeText.experiences_section.key}
                className="col-span-full"
              >
                {resumeText.experiences_section.en}
              </h2>
              {resumeText.experiences_section.companies.map(
                (company, company_index) => (
                  <div key={company.key} className="col-span-12 ring font-bold"> {company.name}
                    {company.positions.map((position, position_index) => (
                      <div key={position.key} className="col-span-12 ring text-sm font-medium"> {position.en}
                        {position.bullets.map((bullet, bullet_index) => (
                          <div key={bullet.key} className="col-span-12 ring text-xs font-light">
                            {bullet.en}
                            {/* company */
                            /* locations */}
                            {/* position */
                            /* date */}
                            {/* description */}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )
              )}
            </div>
            {/* right education */}
            <div className="bg-slate-200 p-1 ring">education</div>
            {/* right interests */}
            <div className="grid grid-cols-2 bg-slate-300 p-1 ring">
              <h2
                id={"resume-" + resumeText.skills_section.key}
                className="col-span-full"
              >
                {resumeText.skills_section.en}:
              </h2>
              {resumeText.skills_section.skills.map((skill, skill_index) => (
                <div className="col-span-1 text-center ring" key={skill_index}>
                  <h3
                    id={"resume-skill-" + skill.key}
                    className="text-lg font-bold"
                  >
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
          </div>
        </div>
      </div>
      <div className="w-screen bg-white bg-cover bg-center bg-no-repeat">
        <svg
          id="visual"
          viewBox="0 0 900 150"
          width="100%"
          height="100%"
          version="1.1"
        >
          <path d={peak_1_1} fill="#e0f0fe">
            <animate
              attributeName="d"
              dur="10000ms"
              repeatCount="indefinite"
              values={peak_1_1 + ";" + peak_1_2 + ";" + peak_1_1}
            ></animate>
          </path>
          <path d={peak_2_1} fill="#cce8fe">
            <animate
              attributeName="d"
              dur="11000ms"
              repeatCount="indefinite"
              values={peak_2_1 + ";" + peak_2_2 + ";" + peak_2_1}
            ></animate>
          </path>
          <path d={peak_3_1} fill="#b5e1fe">
            <animate
              attributeName="d"
              dur="12000ms"
              repeatCount="indefinite"
              values={peak_3_1 + ";" + peak_3_2 + ";" + peak_3_1}
            ></animate>
          </path>
          <path d={peak_4_1} fill="#9bdafd">
            <animate
              attributeName="d"
              dur="13000ms"
              repeatCount="indefinite"
              values={peak_4_1 + ";" + peak_4_2 + ";" + peak_4_1}
            ></animate>
          </path>
          <path d={peak_5_1} fill="#7dd3fc">
            <animate
              attributeName="d"
              dur="6000ms"
              repeatCount="indefinite"
              values={peak_5_1 + ";" + peak_5_2 + ";" + peak_5_1}
            ></animate>
          </path>
        </svg>
      </div>
    </section>
  );
};
