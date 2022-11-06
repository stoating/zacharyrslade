import { Links } from "../data/links";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
  const ProfessionalLinks = Links.filter(function (Links) {
    return Links.type === "professional" && Links.for.includes("zachary");
  });

  return (
    <footer className="bg-slate-700">
      <div className="mx-auto flex max-w-screen-lg py-10 px-2">
        <div className="grid w-screen grid-cols-1 flex-col items-center md:grid-cols-3">
          <img
            src="/images/zack-look-down-bw-02.webp"
            className="order-1 rounded-full  opacity-60 shadow-2xl shadow-black"
          ></img>
          <div className="order-2">
            <div className="flex">Get in touch:</div>
          </div>
          <div className="order-3">
            <div key="email" className="flex flex-col">
              <a className="flex" href="mailto:zack.slade@gmail.com">
                <i className="pt-1 pr-2">
                  <MdEmail />
                </i>
                Email
              </a>
            </div>
            {ProfessionalLinks.map((item) => (
              <div key={item.id} className="mx-auto">
                <a
                  className="flex"
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
    </footer>
  );
};
