import { NavigationItems } from "../data/navigation-items";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
  const InternalLinkItems = NavigationItems.filter(function (NavigationItems) {
    return NavigationItems.icon === undefined;
  });

  const ExternalLinkItems = NavigationItems.filter(function (NavigationItems) {
    return NavigationItems.icon !== undefined;
  });

  return (
    <footer className="z-20 flex bg-slate-600 ring ring-black">
      <div className="mx-auto ring ring-red-500">left</div>
      <div className="mx-auto ring ring-green-500">
        {InternalLinkItems.map((item) => (
          <div key={item.id} className="mx-auto ring">
            <a href={item.ref}>{item.text}</a>
          </div>
        ))}
      </div>
      <div className="mx-auto ring ring-blue-500">
        <div className="flex ring">Get in touch:</div>
      </div>
      <div className="mx-auto ring">
        <div className="flex ring">
          <i className="ring">
            <MdEmail />
          </i>
        </div>
        {ExternalLinkItems.map((item) => (
          <div key={item.id} className="mx-auto ring">
            <a href={item.ref}>{item.icon}</a>
          </div>
        ))}
      </div>
    </footer>
  );
};
