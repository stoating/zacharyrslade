import { TextGreeter } from "../data/text-greeter";
import { Links } from "../data/links";
import Link from "next/link";

const blob1 =
  "M149.3 -108.8C183.4 -76.3 194.1 -14.8 178.5 35.7C163 86.1 121.2 125.5 74.1 144.6C27 163.7 -25.3 162.5 -70.2 142.2C-115.1 122 -152.6 82.7 -170.6 31.1C-188.6 -20.4 -187.2 -84.3 -155.5 -116.2C-123.8 -148.2 -61.9 -148.3 -2.2 -146.6C57.6 -144.9 115.2 -141.3 149.3 -108.8";
const blob2 =
  "M131.7 -104.6C168.6 -58.8 195 -4.2 188.4 50.4C181.9 105 142.5 159.5 94.7 173.6C47 187.7 -9 161.4 -51.2 131.5C-93.4 101.5 -121.8 67.9 -130.3 29.9C-138.8 -8 -127.4 -50.3 -102.4 -93.3C-77.4 -136.4 -38.7 -180.2 4.4 -183.7C47.4 -187.2 94.9 -150.3 131.7 -104.6";

const wave_1_1 =
  "M0 136L21.5 132.3C43 128.7 86 121.3 128.8 126.7C171.7 132 214.3 150 257.2 149.5C300 149 343 130 385.8 125.3C428.7 120.7 471.3 130.3 514.2 133.7C557 137 600 134 642.8 130.2C685.7 126.3 728.3 121.7 771.2 120C814 118.3 857 119.7 878.5 120.3L900 121L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z";
const wave_1_2 =
  "M0 160L21.5 156.8C43 153.7 86 147.3 128.8 147.5C171.7 147.7 214.3 154.3 257.2 150.2C300 146 343 131 385.8 126.5C428.7 122 471.3 128 514.2 131.7C557 135.3 600 136.7 642.8 136.8C685.7 137 728.3 136 771.2 141C814 146 857 157 878.5 162.5L900 168L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z";
const wave_2_1 =
  "M0 87L21.5 89.5C43 92 86 97 128.8 98.7C171.7 100.3 214.3 98.7 257.2 103.3C300 108 343 119 385.8 117.5C428.7 116 471.3 102 514.2 101.8C557 101.7 600 115.3 642.8 117.8C685.7 120.3 728.3 111.7 771.2 112.2C814 112.7 857 122.3 878.5 127.2L900 132L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z";
const wave_2_2 =
  "M0 96L21.5 96C43 96 86 96 128.8 95.3C171.7 94.7 214.3 93.3 257.2 98.8C300 104.3 343 116.7 385.8 122.5C428.7 128.3 471.3 127.7 514.2 123.8C557 120 600 113 642.8 114.5C685.7 116 728.3 126 771.2 125.8C814 125.7 857 115.3 878.5 110.2L900 105L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z";
const wave_3_1 =
  "M0 94L21.5 91.7C43 89.3 86 84.7 128.8 81.7C171.7 78.7 214.3 77.3 257.2 80.7C300 84 343 92 385.8 90C428.7 88 471.3 76 514.2 76C557 76 600 88 642.8 95C685.7 102 728.3 104 771.2 98C814 92 857 78 878.5 71L900 64L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z";
const wave_3_2 =
  "M0 83L21.5 84.2C43 85.3 86 87.7 128.8 89.8C171.7 92 214.3 94 257.2 89.5C300 85 343 74 385.8 74.3C428.7 74.7 471.3 86.3 514.2 88.5C557 90.7 600 83.3 642.8 79.5C685.7 75.7 728.3 75.3 771.2 75.8C814 76.3 857 77.7 878.5 78.3L900 79L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z";
const wave_4_1 =
  "M0 68L21.5 67.2C43 66.3 86 64.7 128.8 66C171.7 67.3 214.3 71.7 257.2 69.7C300 67.7 343 59.3 385.8 56.5C428.7 53.7 471.3 56.3 514.2 55.8C557 55.3 600 51.7 642.8 50.8C685.7 50 728.3 52 771.2 51.8C814 51.7 857 49.3 878.5 48.2L900 47L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z";
const wave_4_2 =
  "M0 58L21.5 60C43 62 86 66 128.8 69.2C171.7 72.3 214.3 74.7 257.2 70.3C300 66 343 55 385.8 55.2C428.7 55.3 471.3 66.7 514.2 66.5C557 66.3 600 54.7 642.8 53.5C685.7 52.3 728.3 61.7 771.2 61.2C814 60.7 857 50.3 878.5 45.2L900 40L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z";
const wave_5_1 =
  "M0 31L21.5 30.8C43 30.7 86 30.3 128.8 29.5C171.7 28.7 214.3 27.3 257.2 25.7C300 24 343 22 385.8 24.5C428.7 27 471.3 34 514.2 35.2C557 36.3 600 31.7 642.8 29.8C685.7 28 728.3 29 771.2 29.3C814 29.7 857 29.3 878.5 29.2L900 29L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z";
const wave_5_2 =
  "M0 33L21.5 34C43 35 86 37 128.8 38C171.7 39 214.3 39 257.2 39.7C300 40.3 343 41.7 385.8 38.7C428.7 35.7 471.3 28.3 514.2 26.8C557 25.3 600 29.7 642.8 33.5C685.7 37.3 728.3 40.7 771.2 38C814 35.3 857 26.7 878.5 22.3L900 18L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z";

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
        <div className="absolute z-10 w-screen -translate-y-60 text-center text-4xl font-bold transition-all duration-700 ease-out peer-hover/menu-item:text-white md:-translate-y-72 md:text-6xl">
          Zachary Slade
        </div>
          <div
            id='greeter-snippet'
            className="absolute z-10 w-screen -translate-y-52 text-center font-bold transition-all duration-700 ease-out peer-hover/menu-item:text-white md:-translate-y-56 md:text-xl"
          >
            {TextGreeter.snippet.en}
          </div>
        <div
          id="menu-background-pattern"
          className="absolute h-screen w-screen bg-image-circle bg-12vmin transition-all duration-700 ease-out peer-hover/menu-item:bg-9vmin peer-hover/menu-item:opacity-100"
        ></div>
        <div
          id="menu-background-image"
          className="absolute h-screen w-screen bg-image-sunset bg-cover transition-all duration-700 ease-out peer-hover/menu-item:opacity-20"
        ></div>
        <div className="absolute h-screen w-screen">
          <div className="h-2/3"></div>
          <div className="h-1/3 bg-gradient-to-t from-slate-700"></div>
        </div>
      </div>
      <div className="w-screen bg-slate-900 bg-cover bg-center bg-no-repeat">
        <svg
          id="visual"
          viewBox="0 0 900 200"
          width="100%"
          height="100%"
          version="1.1"
        >
          <path d={wave_1_1} fill="#102030">
            <animate
              attributeName="d"
              dur="10000ms"
              repeatCount="indefinite"
              values={wave_1_1 + ";" + wave_1_2 + ";" + wave_1_1}
            ></animate>
          </path>
          <path d={wave_2_1} fill="#182839">
            <animate
              attributeName="d"
              dur="9000ms"
              repeatCount="indefinite"
              values={wave_2_1 + ";" + wave_2_2 + ";" + wave_2_1}
            ></animate>
          </path>
          <path d={wave_3_1} fill="#213042">
            <animate
              attributeName="d"
              dur="8000ms"
              repeatCount="indefinite"
              values={wave_3_1 + ";" + wave_3_2 + ";" + wave_3_1}
            ></animate>
          </path>
          <path d={wave_4_1} fill="#2a384b">
            <animate
              attributeName="d"
              dur="7000ms"
              repeatCount="indefinite"
              values={wave_4_1 + ";" + wave_4_2 + ";" + wave_4_1}
            ></animate>
          </path>
          <path d={wave_5_1} fill="#334155">
            <animate
              attributeName="d"
              dur="6000ms"
              repeatCount="indefinite"
              values={wave_5_1 + ";" + wave_5_2 + ";" + wave_5_1}
            ></animate>
          </path>
        </svg>
      </div>
    </>
  );
};
