import React from "react";

import { ContextLanguage } from "../../context/language";
import { contact } from "../../data/contact";
import { Language } from "../../data/_types";
import { links } from "../../data/links";
import { MdEmail } from "react-icons/md";

import * as svg from "./svgs";

export const Contact = () => {
  return (
    <section id="contact" className="w-screen bg-rose-200">
      <div className="mx-auto max-w-screen-lg py-10 pt-12">
        {/* Contact Me */}
        <ContactTitle />
        {/* Two Columns */}
        <div className="grid grid-cols-1 py-2 md:grid-cols-2 md:pl-60">
          {/* Left Side */}
          <ContactForm />
          {/* Right Side */}
          <ContactProfessionalLinks />
        </div>
      </div>
      <ContactTransitionBottom />
    </section>
  );
};

const ContactTitle = () => {
  const { language } = React.useContext(ContextLanguage);

  const title = contact.title[language as Language];

  return (
    <div className="flex flex-col px-2 pb-2 md:pl-1">
      <div className="flex text-4xl md:pl-60">
        <i className="pt-1 pr-2">
          <MdEmail />
        </i>
        {title}
      </div>
    </div>
  );
};

const ContactForm = () => {
  const { language } = React.useContext(ContextLanguage);

  const name = contact.name[language as Language];
  const email = contact.email[language as Language];
  const message = contact.message[language as Language];
  const submit = contact.submit[language as Language];

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Email sent successfully");
    } else {
      alert("Error sending email");
    }
  };

  return (
    <div className="order-2 px-2 md:order-1">
      <form
        className="grid grid-cols-1 gap-2"
        method="POST"
        onSubmit={handleSubmit}
      >
        {/* Name Field */}
        <input
          className="rounded-md border-0 bg-slate-700 p-2 text-white placeholder:text-gray-400 focus:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
          name="name"
          placeholder={name}
          required
          type="text"
        />
        {/* Email Field */}
        <input
          autoComplete="email"
          className="rounded-md border-0 bg-slate-700 p-2 text-white placeholder:text-gray-400 focus:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
          name="email"
          placeholder={email}
          required
          type="email"
        />
        {/* Message Field */}
        <textarea
          className="rounded-md border-0 bg-slate-700 p-2 text-white placeholder:text-gray-400 focus:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
          maxLength={250}
          name="message"
          placeholder={message}
          required
          rows={6}
        />
        {/* Submit */}
        <button
          aria-label="Submit contact form"
          className="w-max rounded-md border-2 bg-slate-900 p-2 text-white duration-300 ease-in-out hover:bg-sky-500"
          type="submit"
        >
          {submit}
        </button>
      </form>
    </div>
  );
};

const ContactProfessionalLinks = () => {
  const professional_links = links.filter(function (links) {
    return links.type === "professional" && links.for.includes("zachary");
  });

  return (
    <div className="order-1 px-2 pb-8 md:order-2">
      {/* Email */}
      <div
        key="email"
        className="flex flex-col py-1 transition-all duration-300 ease-in-out hover:text-sky-500"
      >
        <a className="flex text-3xl" href="mailto:zack.slade@gmail.com">
          <i className="pt-1 pr-2">
            <MdEmail />
          </i>
          Email
        </a>
      </div>
      {/* Professional Links */}
      {professional_links.map((item, index) => (
        <div
          key={index}
          className="mx-auto py-1 transition-all duration-300 ease-in-out hover:text-sky-500"
        >
          <a
            className="flex text-3xl"
            href={item.ref}
            target="_blank"
            rel="noreferrer"
          >
            <i className="pt-1 pr-2">{item.icon}</i>
            {item.text}
          </a>
        </div>
      ))}
    </div>
  );
};

const ContactTransitionBottom = () => {
  return (
    <div className="w-screen bg-rose-200 bg-cover bg-center bg-no-repeat">
      <svg viewBox="0 0 900 30" width="100%" height="100%" version="1.1">
        <path d={svg.wave1} fill="#334155">
          <animate
            attributeName="d"
            dur="50000ms"
            repeatCount="indefinite"
            values={svg.wave1}
          ></animate>
        </path>
      </svg>
    </div>
  );
};
