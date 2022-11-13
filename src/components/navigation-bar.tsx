import Link from "next/link";

export const NavigationBar = () => {
  return (
    <div className="fixed top-0 z-20 flex w-full bg-slate-900 bg-opacity-50 text-opacity-100">
      <div className="mx-auto flex">
        <Link href="/#about">
          <a className="p-2 px-4">About</a>
        </Link>
        <Link href="/#resume">
          <a className="p-2 px-4">Resume</a>
        </Link>
        <Link href="/#profiles">
          <a className="p-2 px-4">Profiles</a>
        </Link>
        <Link href="/#stoating">
          <a className="p-2 px-4">Stoating</a>
        </Link>
        <Link href="/#contact">
          <a className="p-2 px-4">Contact</a>
        </Link>
      </div>
    </div>
  );
};
