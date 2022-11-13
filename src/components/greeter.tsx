import { Links } from "../data/links";
import Link from "next/link";

const blob1 =
  "M149.3 -108.8C183.4 -76.3 194.1 -14.8 178.5 35.7C163 86.1 121.2 125.5 74.1 144.6C27 163.7 -25.3 162.5 -70.2 142.2C-115.1 122 -152.6 82.7 -170.6 31.1C-188.6 -20.4 -187.2 -84.3 -155.5 -116.2C-123.8 -148.2 -61.9 -148.3 -2.2 -146.6C57.6 -144.9 115.2 -141.3 149.3 -108.8";
const blob2 =
  "M131.7 -104.6C168.6 -58.8 195 -4.2 188.4 50.4C181.9 105 142.5 159.5 94.7 173.6C47 187.7 -9 161.4 -51.2 131.5C-93.4 101.5 -121.8 67.9 -130.3 29.9C-138.8 -8 -127.4 -50.3 -102.4 -93.3C-77.4 -136.4 -38.7 -180.2 4.4 -183.7C47.4 -187.2 94.9 -150.3 131.7 -104.6";

export const Greeter = () => {
  const GreeterLinks = Links.filter(function (Links) {
    return (
      Links.text === "LinkedIn" ||
      Links.text === "Xing" ||
      Links.text === "GitHub" ||
      Links.text === "Resume - EN" ||
      Links.text === "Resume - DE"
    );
  });

  const handleMenuItemMouseOver = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const selectedAnchorNumber = parseInt(
      event.currentTarget.id.split("-").pop() as string
    ) as number;
    const myOffsetStepSize = 100 / GreeterLinks.length;
    const myOffset = selectedAnchorNumber * myOffsetStepSize;

    const menuBackgroundPattern = document.getElementById(
      "menu-background-pattern"
    );
    menuBackgroundPattern!.style.backgroundPositionX = -1 * myOffset + "%";

    const menuBackgroundImage = document.getElementById(
      "menu-background-image"
    );
    menuBackgroundImage!.style.backgroundPositionX = myOffset + "%";
  };

  return (
    <>
      <div
        id="menu"
        className="mx-auto flex min-h-screen items-center bg-slate-900"
      >
        <div
          id="menu-items"
          className="peer/menu-item z-10 mx-auto hover:opacity-100"
        >
          <div className="grid max-w-xs grid-cols-1 flex-col p-10 text-center">
            <img
              src="/images/zack-look-right-color-02.webp"
              className="col-span-1 rounded-full opacity-100 shadow-2xl shadow-black"
            ></img>
            <div className="invisible col-span-1 m-0 box-border p-0 md:visible">
              <svg
                id="visual"
                viewBox="0 0 380 380"
                width="380"
                height="380"
                version="1.1"
                className="absolute left-1/2 top-1/2 -z-10 -translate-x-52 -translate-y-56 opacity-30"
              >
                <g transform="translate(188.34498259648836 184.48114065125225)">
                  <path id="blob1" d={blob1} fill="#000000">
                    <animate
                      attributeName="d"
                      dur="12000ms"
                      repeatCount="indefinite"
                      values={blob1 + ";" + blob2 + ";" + blob1}
                    ></animate>
                  </path>
                </g>
              </svg>
            </div>
          </div>
          {GreeterLinks.map((item, index) => (
            <div
              key={item.id}
              id={"menu-item-div-" + index}
              className="group/item inline-block opacity-70 hover:opacity-100"
            >
              <Link href={item.ref}>
                <a
                  id={"menu-item-" + index}
                  className="m-1 inline-block p-1 font-sans text-5xl text-black opacity-100 transition-all duration-300 ease-linear group-hover/item:text-white group-hover/item:opacity-100"
                  target="_blank"
                  rel="noreferrer"
                  onMouseOver={handleMenuItemMouseOver}
                >
                  {item.icon}
                </a>
              </Link>
            </div>
          ))}
        </div>
        <div className="absolute z-50 w-screen -translate-y-72 text-center text-4xl md:text-6xl font-bold transition-all duration-700 ease-out peer-hover/menu-item:text-white">
          Zachary Slade
        </div>
        <div className="absolute z-50 w-screen -translate-y-56 text-center md:text-xl font-bold transition-all duration-700 ease-out peer-hover/menu-item:text-white">
          Lifelong learner. Chronically curious.
        </div>
        <div
          id="menu-background-pattern"
          className="absolute z-0 h-screen w-screen bg-image-circle bg-12vmin transition-all duration-700 ease-out peer-hover/menu-item:bg-9vmin peer-hover/menu-item:opacity-100"
        ></div>
        <div
          id="menu-background-image"
          className="absolute z-0 h-screen w-screen bg-image-sunset bg-cover transition-all duration-700 ease-out peer-hover/menu-item:opacity-20"
        ></div>
      </div>
    </>
  );
};
