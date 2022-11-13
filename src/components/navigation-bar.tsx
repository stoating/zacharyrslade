export const NavigationBar = () => {
  return (
    <div className="fixed top-0 z-20 flex w-full bg-slate-900 bg-opacity-50 text-opacity-100">
      <div className="mx-auto flex">
        <a className="p-2 px-4" href="/#about">
          About
        </a>
        <a className="p-2 px-4" href="/#resume">
          Resume
        </a>
        <a className="p-2 px-4" href="/#profiles">
          Profiles
        </a>
        <a className="p-2 px-4" href="/#stoating">
          Stoating
        </a>
        <a className="p-2 px-4" href="/#contact">
          Contact
        </a>
      </div>
    </div>
  );
};
