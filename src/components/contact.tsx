import { Links } from "../data/links";
import { MdEmail } from "react-icons/md";

export const Contact = () => {
  const ProfessionalLinks = Links.filter(function (Links) {
    return Links.type === "professional" && Links.for.includes("zachary");
  });

  return (
    <section id="contact" className="bg-slate-400">
      <div className="mx-auto max-w-screen-lg py-10">
        {/* Contact Me */}
        <div className="flex flex-col px-2 pb-2">
          <div className="flex text-4xl">
            <i className="pt-1 pr-2">
              <MdEmail />
            </i>
            Reach Out
          </div>
        </div>

        {/* Make Two Columns */}
        <div className="grid grid-cols-1 py-2 md:grid-cols-2">
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
                className="focus:border-1 rounded-md border-0 bg-slate-700 p-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                name="name"
                placeholder="Name"
                required
                type="text"
              />
              {/* Email Field */}
              <input
                autoComplete="email"
                className="rounded-md border-0 bg-slate-700 p-2 text-white placeholder:text-gray-400 focus:border-0 focus:outline-none focus:ring-2 focus:ring-white"
                name="email"
                placeholder="Email"
                required
                type="email"
              />
              {/* Message Field */}
              <textarea
                className="rounded-md border-0 bg-slate-700 p-2 text-white placeholder:text-gray-400 focus:border-0 focus:outline-none focus:ring-2 focus:ring-white"
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
                className="w-max rounded-md border-2 bg-slate-900 p-2 text-white hover:bg-slate-700"
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
            <div key="email" className="flex flex-col py-1">
              <a className="flex text-4xl" href="mailto:zack.slade@gmail.com">
                <i className="pt-1 pr-2">
                  <MdEmail />
                </i>
                Email
              </a>
            </div>
            {/* Professional Links */}
            {ProfessionalLinks.map((item) => (
              <div key={item.id} className="mx-auto py-1">
                <a
                  className="flex text-4xl"
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
    </section>
  );
};
