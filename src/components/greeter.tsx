import { Links } from "../data/links";

export const Greeter = () => {
  const HomeLinks = Links.filter(function (Links) {
    return Links.ref !== "/";
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
          {HomeLinks.map((item) => (
            <div
              key={item.id}
              id={"menu-item-div-" + item.id}
              className="group/item inline-block opacity-70 hover:opacity-100"
            >
              <a
                id={"menu-item-" + item.id}
                className="m-1 inline-block p-1 font-sans text-5xl text-white opacity-80 group-hover/item:opacity-100"
                target="_blank"
                rel="noreferrer"
                href={item.ref}
                onMouseOver={handleMenuItemMouseOver}
              >
                {item.text}
              </a>
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
