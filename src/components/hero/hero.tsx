import React from "react";
import Image from "next/image";
import Link from "next/link";

import { ContextLanguage } from "../../context/language";
import { hero } from "../../data/hero";
import { Language } from "../../data/_types";
import { links } from "../../data/links";

import * as svg from "./svgs";

export const Hero = () => {
  return (
    <section id="hero" className="w-screen">
      <div className="mx-auto flex min-h-screen items-center bg-slate-900">
        <HeroSection />
        <HeroBackgroundFade />
      </div>
      <HeroTransitionBottom />
    </section>
  );
};

const HeroSection = () => {
  const { language } = React.useContext(ContextLanguage);

  const handleSelectedLink = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const selected = parseInt(
      event.currentTarget.id.split("-").pop() as string
    ) as number;
    const step = 100 / hero_links.length;
    const offset = selected * step;

    const bg_pattern = document.getElementById("hero-bg-pattern");
    const bg_image = document.getElementById("hero-bg-image");

    if (bg_pattern && bg_image) {
      bg_pattern.style.backgroundPositionX = -1 * offset + "%";
      bg_image.style.backgroundPositionX = 0.25 * offset + "%";
    }
  };

  const text = hero.text[language as Language];
  const hero_links = links.filter((link) =>
    ["LinkedIn", "Xing", "GitHub", "Resume - EN", "Resume - DE"].includes(
      link.text
    )
  );

  return (
    <>
      <div className="peer z-10 mx-auto hover:opacity-100">
        <HeroProfileImage />
        {hero_links.map((item, index) => (
          <div
            key={index}
            id={"menu-item-div-" + index}
            className="group inline-block opacity-70 hover:opacity-100"
          >
            <Link href={item.ref}>
              <a
                id={"menu-item-" + index}
                className="m-1 inline-block p-1 text-5xl text-black opacity-100 transition-all duration-300 ease-linear group-hover:text-white group-hover:opacity-100"
                target="_blank"
                rel="noreferrer"
                onMouseOver={handleSelectedLink}
              >
                {item.icon}
              </a>
            </Link>
          </div>
        ))}
      </div>
      <div className="absolute z-10 w-screen -translate-y-60 text-center text-4xl font-bold transition-all duration-700 ease-out peer-hover:text-white md:-translate-y-72 md:text-6xl">
        Zachary Slade
      </div>
      <div className="absolute z-10 w-screen -translate-y-52 text-center font-bold transition-all duration-700 ease-out peer-hover:text-white md:-translate-y-56 md:text-xl">
        {text}
      </div>
      <div
        id="hero-bg-pattern"
        className="absolute h-screen w-screen bg-image-circle bg-12vmin transition-all duration-700 ease-out peer-hover:bg-9vmin peer-hover:opacity-100"
      ></div>
      <div
        id="hero-bg-image"
        className="absolute h-screen w-screen bg-image-sunset bg-cover transition-all duration-700 ease-out peer-hover:opacity-20"
      ></div>
    </>
  );
};

const HeroProfileImage = () => {
  const profile_image = (
    <Image
      src="/images/zack-look-right-color-02.webp"
      alt="Imma look right"
      className="rounded-full opacity-100"
      layout="fill"
      objectFit="cover"
    />
  );
  const blob = (
    <svg
      viewBox="0 0 380 380"
      width="380"
      height="380"
      version="1.1"
      className="absolute left-1/2 top-1/2 -z-10 -translate-x-52 -translate-y-56 opacity-30"
    >
      <g transform="translate(188.34498259648836 184.48114065125225)">
        <path d={svg.blob1} fill="#000000">
          <animate
            attributeName="d"
            dur="12000ms"
            repeatCount="indefinite"
            values={svg.blob1 + ";" + svg.blob2 + ";" + svg.blob1}
          ></animate>
        </path>
      </g>
    </svg>
  );

  return (
    <div className="grid max-w-xs grid-cols-1 flex-col p-10 text-center">
      <div className="relative col-span-1 h-60 w-60 rounded-full shadow-xl shadow-black">
        {profile_image}
      </div>
      <div className="col-span-1 m-0 box-border p-0 md:visible">{blob}</div>
    </div>
  );
};

const HeroBackgroundFade = () => {
  return (
    <div className="absolute h-screen w-screen">
      <div className="h-2/3"></div>
      <div className="h-1/3 bg-gradient-to-t from-slate-700"></div>
    </div>
  );
};

const HeroTransitionBottom = () => {
  return (
    <div className="w-screen bg-slate-900 bg-cover bg-center bg-no-repeat">
      <svg viewBox="0 0 900 200" width="100%" height="100%" version="1.1">
        <path d={svg.wave_1_1} fill="#102030">
          <animate
            attributeName="d"
            dur="10000ms"
            repeatCount="indefinite"
            values={svg.wave_1_1 + ";" + svg.wave_1_2 + ";" + svg.wave_1_1}
          ></animate>
        </path>
        <path d={svg.wave_2_1} fill="#182839">
          <animate
            attributeName="d"
            dur="9000ms"
            repeatCount="indefinite"
            values={svg.wave_2_1 + ";" + svg.wave_2_2 + ";" + svg.wave_2_1}
          ></animate>
        </path>
        <path d={svg.wave_3_1} fill="#213042">
          <animate
            attributeName="d"
            dur="8000ms"
            repeatCount="indefinite"
            values={svg.wave_3_1 + ";" + svg.wave_3_2 + ";" + svg.wave_3_1}
          ></animate>
        </path>
        <path d={svg.wave_4_1} fill="#2a384b">
          <animate
            attributeName="d"
            dur="7000ms"
            repeatCount="indefinite"
            values={svg.wave_4_1 + ";" + svg.wave_4_2 + ";" + svg.wave_4_1}
          ></animate>
        </path>
        <path d={svg.wave_5_1} fill="#334155">
          <animate
            attributeName="d"
            dur="6000ms"
            repeatCount="indefinite"
            values={svg.wave_5_1 + ";" + svg.wave_5_2 + ";" + svg.wave_5_1}
          ></animate>
        </path>
      </svg>
    </div>
  );
};
