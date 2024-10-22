import React from "react";

import { ContextLanguage } from "../../context/language";
import { Language } from "../../data/_types";
import { about } from "../../data/about";

import * as svg from "./svgs";

export const About = () => {
  return (
    <section id="about" className="pt-12 bg-slate-900">
      <div className="text-slate-100">
        <div className="container mx-auto grid max-w-screen-lg grid-cols-6">
          <AboutIcon />
          <AboutText />
        </div>
      </div>
      <AboutTransitionBottom />
    </section>
  );
};

const AboutIcon = () => {
  const arrow_svg = (
    <svg
      version="1.0"
      width="260.000000pt"
      height="260.000000pt"
      viewBox="-5 -10 865.000000 970.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,961.000000) scale(0.100000,-0.100000)"
        fill="#373c4d"
        stroke="none"
      >
        <path d={svg.arrow_1} />
        <path d={svg.arrow_2} />
        <path d={svg.arrow_3} />
      </g>
    </svg>
  );
  const gear_svg = (
    <svg
      version="1.0"
      width="160pt"
      height="160pt"
      viewBox="0 0 340.000000 340.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,340.000000) scale(0.100000,-0.100000)"
        fill="#8e909a"
        stroke="none"
      >
        <path d={svg.gear} />
      </g>
    </svg>
  );
  const code_svg = (
    <svg
      version="1.0"
      width="200.000000pt"
      height="240.000000pt"
      viewBox="-488 -80 1100.000000 350.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,280.000000) scale(0.100000,-0.100000)"
        fill="#bebfc4"
        stroke="none"
      >
        <path d={svg.code_1} />
        <path d={svg.code_2} />
        <path d={svg.code_3} />
      </g>
    </svg>
  );

  return (
    <div className="invisible col-span-6 -my-64 lg:visible lg:col-span-2 lg:row-span-6 lg:m-0">
      <div className="absolute lg:animate-slowSpin">{arrow_svg}</div>
      <div className="absolute lg:animate-slowSpinReverse lg:p-16">
        {gear_svg}
      </div>
      <div className="absolute animate-pulse">{code_svg}</div>
    </div>
  );
};

const AboutText = () => {
  const { language } = React.useContext(ContextLanguage);

  const title = about.title[language as Language];
  const description = about.description[language as Language];
  const items = about.items;

  return (
    <div className="col-span-6 px-2 lg:col-span-4">
      <h2 className="pb-8 text-3xl font-bold text-slate-400 first-letter:uppercase">
        {title}:
      </h2>
      <p className="pb-8">{description}</p>
      <div className="col-span-6 lg:col-span-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {items.map((item, index) => (
            <div key={index} className="flex">
              <i className="pt-1 pr-2">{item.icon}</i>
              <p className="pr-2 font-bold text-slate-400 first-letter:uppercase">
                {item.title[language as Language]}:
              </p>
              <p>{item.value[language as Language]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutTransitionBottom = () => {
  return (
    <div className="w-screen bg-white bg-cover bg-center bg-no-repeat">
      <svg viewBox="0 0 900 200" width="100%" height="100%" version="1.1">
        <path d={svg.wave_1_1} fill="#ffffff">
          <animate
            attributeName="d"
            dur="10000ms"
            repeatCount="indefinite"
            values={svg.wave_1_1 + ";" + svg.wave_1_2 + ";" + svg.wave_1_1}
          ></animate>
        </path>
        <path d={svg.wave_2_1} fill="#bebfc4">
          <animate
            attributeName="d"
            dur="9000ms"
            repeatCount="indefinite"
            values={svg.wave_2_1 + ";" + svg.wave_2_2 + ";" + svg.wave_2_1}
          ></animate>
        </path>
        <path d={svg.wave_3_1} fill="#8e909a">
          <animate
            attributeName="d"
            dur="8000ms"
            repeatCount="indefinite"
            values={svg.wave_3_1 + ";" + svg.wave_3_2 + ";" + svg.wave_3_1}
          ></animate>
        </path>
        <path d={svg.wave_4_1} fill="#616472">
          <animate
            attributeName="d"
            dur="7000ms"
            repeatCount="indefinite"
            values={svg.wave_4_1 + ";" + svg.wave_4_2 + ";" + svg.wave_4_1}
          ></animate>
        </path>
        <path d={svg.wave_5_1} fill="#373c4d">
          <animate
            attributeName="d"
            dur="6000ms"
            repeatCount="indefinite"
            values={svg.wave_5_1 + ";" + svg.wave_5_2 + ";" + svg.wave_5_1}
          ></animate>
        </path>
        <path d={svg.wave_6_1} fill="#0f172a">
          <animate
            attributeName="d"
            dur="6000ms"
            repeatCount="indefinite"
            values={svg.wave_6_1 + ";" + svg.wave_6_2 + ";" + svg.wave_6_1}
          ></animate>
        </path>
      </svg>
    </div>
  );
};
