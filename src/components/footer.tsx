import Image from "next/image";
import { links } from "../data/links";
import { MdEmail } from "react-icons/md";

interface FooterContactLinkProps {
  href: string;
  icon: React.ReactNode;
  text: string;
}

export const Footer = () => {
  return (
    <footer className="w-screen bg-slate-700">
      <div className="mx-auto flex max-w-screen-lg py-10 px-2">
        <div className="grid w-screen grid-cols-1 items-center md:grid-cols-6">
          <FooterLeftImage />
          <FooterMiddleImage />
          <FooterRightImage />
        </div>
      </div>
    </footer>
  );
};

const FooterLeftImage = () => {
  return (
    <div className="relative order-1 col-span-1 hidden h-40 w-40 overflow-hidden rounded-full shadow-2xl shadow-black md:block">
      <Image
        src="/images/zack-look-down-bw-02.webp"
        alt="Imma looking down"
        className="rounded-full opacity-60"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

const FooterMiddleImage = () => {
  return (
    <div className="order-2 col-span-4 sm:col-span-6 md:col-span-4">
      <Image
        src="/images/signature-white-black-fade-01.webp"
        alt="Signature"
        className="w-full max-w-full opacity-70 md:max-w-none"
        layout="responsive"
        width={500}
        height={200}
      />
    </div>
  );
};

const FooterRightImage = () => {
  const professional_links = links.filter(function (links) {
    return links.type === "professional" && links.for.includes("zachary");
  });

  return (
    <div className="relative order-3 col-span-1 mx-auto flex h-40 w-40 items-center justify-center overflow-hidden rounded-full bg-slate-100 opacity-60 shadow-2xl shadow-black transition-all duration-300 hover:bg-slate-100 hover:opacity-80">
      <div className="absolute flex flex-col items-start">
        <FooterContactLink
          href="mailto:zack.slade@gmail.com"
          icon={<MdEmail />}
          text="Email"
        />
        {professional_links.map((item, index) => (
          <FooterContactLink
            key={index}
            href={item.ref}
            icon={item.icon}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};

const FooterContactLink: React.FC<FooterContactLinkProps> = ({
  href,
  icon,
  text,
}) => (
  <div className="transition-all duration-100 ease-in-out hover:text-rose-300">
    <a
      className="flex items-center"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <i className="pt-1 pr-2">{icon}</i>
      {text}
    </a>
  </div>
);
