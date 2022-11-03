import { Socials } from "../data/socials";

export const NavigationBar = () => {
  const NavigationBarItems = Socials.filter(function (Socials) {
    return Socials.type !== "social";
  });

  return (
    <div className="fixed top-0 z-20 flex w-full bg-slate-500 ring ring-black">
      {NavigationBarItems.map((item) => (
        <div
          key={item.id}
          className="mx-auto block bg-red-500 ring ring-red-600"
        >
          <a href={item.ref}>{item.text}</a>
        </div>
      ))}
    </div>
  );
};
