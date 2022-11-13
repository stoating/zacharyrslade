import Link from "next/link";

export const NavigationBar = () => {
  return (
    <div className="fixed top-0 z-20 flex w-full bg-slate-900 bg-opacity-40 text-lg font-semibold text-opacity-100">
      <div className="mx-auto flex">
        <Link href="/#menu">
          <a className="p-2 px-4 hover:text-white hover:transition-colors hover:duration-300 invisible md:visible">
            Home
          </a>
        </Link>
        <Link href="/#about">
          <a className="p-2 px-4 hover:text-white hover:transition-colors hover:duration-300">
            About
          </a>
        </Link>
        <Link href="/#resume">
          <a className="p-2 px-4 hover:text-white hover:transition-colors hover:duration-300">
            Resume
          </a>
        </Link>
        <Link href="/#profiles">
          <a className="p-2 px-4 hover:text-white hover:transition-colors hover:duration-300">
            Profiles
          </a>
        </Link>
        <Link href="/#stoating">
          <a className="p-2 px-4 hover:text-white hover:transition-colors hover:duration-300">
            Stoating
          </a>
        </Link>
        <Link href="/#contact">
          <a className="p-2 px-4 hover:text-white hover:transition-colors hover:duration-300 invisible md:visible">
            Contact
          </a>
        </Link>
      </div>
    </div>
  );
};
