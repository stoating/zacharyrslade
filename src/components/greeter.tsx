import { Links } from "../data/links";
import Link from "next/link";
import { fromTo } from "kute.js";

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
    );
    const myOffsetStepSize = 100 / Links.length;
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
        className="mx-auto flex min-h-screen items-center bg-gray-900"
      >
        <div
          id="menu-items"
          className="peer/menu-item z-10 mx-auto hover:opacity-100"
        >
          <div className="grid max-w-xs grid-cols-1 flex-col p-10 text-center">
            <img
              src="/images/zack-look-right-color-02.webp"
              className="1 col-span-1 rounded-full opacity-100 shadow-2xl shadow-black"
            ></img>
            <svg
              id="visual"
              viewBox="0 0 900 600"
              width="900"
              height="600"
              version="1.1"
              className="absolute max-w-2xl opacity-30 transform -translate-x-1/3 -translate-y-1/3 pl-4 pt-6 -z-10"
            >
              <g transform="translate(435.4588841190614 291.41087169617697)">
                <path
                  id="blob-1"
                  d="M137.4 -128.9C186.4 -88.4 240.2 -44.2 244.1 3.9C248.1 52.1 202.2 104.2 153.2 144.7C104.2 185.2 52.1 214.1 -9.3 223.4C-70.7 232.7 -141.4 222.4 -178.9 181.9C-216.4 141.4 -220.7 70.7 -210.5 10.3C-200.2 -50.2 -175.4 -100.4 -137.9 -140.9C-100.4 -181.4 -50.2 -212.2 -3 -209.2C44.2 -206.2 88.4 -169.4 137.4 -128.9"
                  fill="#000000"
                ></path>
              </g>
              <g transform="translate(453.30330544796027 325.668903869308)">
                <path
                  id="blob-2"
                  d="M165.9 -174.3C204.6 -127.3 218.3 -63.6 215.2 -3.1C212.2 57.5 192.4 115 153.7 146.3C115 177.5 57.5 182.5 -6.6 189.1C-70.7 195.7 -141.4 203.9 -180.8 172.7C-220.1 141.4 -228 70.7 -218.7 9.3C-209.4 -52.1 -182.8 -104.2 -143.5 -151.2C-104.2 -198.2 -52.1 -240.1 5.8 -245.9C63.6 -251.6 127.3 -221.3 165.9 -174.3"
                  fill="#000000"
                ></path>
              </g>
            </svg>
          </div>
          {GreeterLinks.map((item) => (
            <div
              key={item.id}
              id={"menu-item-div-" + item.id}
              className="group/item inline-block opacity-70 hover:opacity-100"
            >
              <Link href={item.ref}>
                <a
                  id={"menu-item-" + item.id}
                  className="m-1 inline-block p-1 font-sans text-5xl text-black opacity-100 group-hover/item:text-white group-hover/item:opacity-100"
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
