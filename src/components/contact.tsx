import { ContextLanguage } from "../context/language";
import { Links } from "../data/links";
import { MdEmail } from "react-icons/md";

const wave1 =
"M0 9L75 12.2C150 15.3 300 21.7 450 21.8C600 22 750 16 825 13L900 10L900 31L825 31C750 31 600 31 450 31C300 31 150 31 75 31L0 31Z"

export const Contact = () => {
  const ProfessionalLinks = Links.filter(function (Links) {
    return Links.type === "professional" && Links.for.includes("zachary");
  });

  return (
    <section id="contact" className=" bg-rose-200">
      <div className="mx-auto max-w-screen-lg py-10">
        {/* Contact Me */}
        <div className="flex flex-col px-2 pb-2 md:pl-1">
          <div className="flex text-4xl md:pl-60">
            <i className="pt-1 pr-2">
              <MdEmail />
            </i>
            Reach Out
          </div>
        </div>

        {/* Make Two Columns */}
        <div className="grid grid-cols-1 py-2 md:grid-cols-2 md:pl-60">
          {/* Contact Form */}
          {/* Left Side */}
          <div className="order-2 px-2 md:order-1">
            <form
              className="grid grid-cols-1 gap-2"
              method="POST"
              action="https://formsubmit.co/zack.slade@gmail.com"
            >
              {/* Name Field */}
              <input
                className="rounded-md border-0 bg-slate-700 p-2 text-white placeholder:text-gray-400 focus:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
                name="name"
                placeholder="Name"
                required
                type="text"
              />
              {/* Email Field */}
              <input
                autoComplete="email"
                className="rounded-md border-0 bg-slate-700 p-2 text-white placeholder:text-gray-400 focus:border-0 focus:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
                name="email"
                placeholder="Email"
                required
                type="email"
              />
              {/* Message Field */}
              <textarea
                className="rounded-md border-0 bg-slate-700 p-2 text-white placeholder:text-gray-400 focus:border-0 focus:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
                maxLength={250}
                name="message"
                placeholder="Message"
                required
                rows={6}
              />
              <input
                type="hidden"
                name="_next"
                value="https://www.zacharyrslade.com"
              ></input>
              {/* Submit Button */}
              <button
                aria-label="Submit contact form"
                className="w-max rounded-md border-2 bg-slate-900 p-2 text-white duration-300 ease-in-out hover:bg-sky-500"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* Contact Info */}
          {/* Right Side */}
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
            {ProfessionalLinks.map((item, index) => (
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
        </div>
      </div>
      <div className="w-screen bg-rose-200 bg-cover bg-center bg-no-repeat">
        <svg
          viewBox="0 0 900 30"
          width="100%"
          height="100%"
          version="1.1"
        >
          <path d={wave1} fill="#334155">
            <animate
              attributeName="d"
              dur="50000ms"
              repeatCount="indefinite"
              values={wave1}
            ></animate>
          </path>
        </svg>
      </div>
    </section>
  );
};
