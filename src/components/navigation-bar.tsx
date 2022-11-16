import Link from "next/link";

export const NavigationBar = () => {
  return (
    <div className="fixed top-0 z-50 flex w-full bg-slate-900 bg-opacity-70 text-lg font-semibold text-opacity-100 text-white">
      <div className="mx-auto flex">
        <Link href="/#menu">
          <a className="invisible hover:text-sky-300 w-6 hover:transition-colors hover:duration-300 sm:w-auto md:visible md:p-2 md:px-4">
            Home
          </a>
        </Link>
        <Link href="/#about">
          <a className="p-1 hover:text-sky-300 hover:transition-colors hover:duration-300 md:p-2 md:px-4">
            About
          </a>
        </Link>
        <Link href="/#resume">
          <a className="p-1 hover:text-sky-300 hover:transition-colors hover:duration-300 md:p-2 md:px-4">
            Resume
          </a>
        </Link>
        <Link href="/#profiles">
          <a className="p-1 hover:text-sky-300 hover:transition-colors hover:duration-300 md:p-2 md:px-4">
            Profiles
          </a>
        </Link>
        <Link href="/#stoating">
          <a className="p-1 hover:text-sky-300 hover:transition-colors hover:duration-300 md:p-2 md:px-4">
            Stoating
          </a>
        </Link>
        <Link href="/#contact">
          <a className="invisible w-0 p-2 px-4 hover:text-sky-300 hover:transition-colors hover:duration-300 sm:w-auto md:visible">
            Contact
          </a>
        </Link>
      </div>
    </div>
  );
};
