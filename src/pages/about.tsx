import type { NextPage } from "next";
import { Header } from "../components/head";
import { Footer } from "../components/footer";
import { NavigationBar } from "../components/navigation-bar";

import { NavigationItems } from "../data/navigation-items";
import { MdEmail } from "react-icons/md";

const About: NextPage = () => {
  const InternalLinkItems = NavigationItems.filter(function (NavigationItems) {
    return NavigationItems.icon === undefined;
  });

  const ExternalLinkItems = NavigationItems.filter(function (NavigationItems) {
    return NavigationItems.icon !== undefined;
  });

  return (
    <>
      <Header />
      <div className="-z-10 m-0 flex min-h-screen flex-col ring ring-green-500">
        <NavigationBar />
        <main>
          <div className="bg-slate-400">
            <div className="mx-auto flex">about</div>
            <div className="mx-auto flex">about</div>
            <div className="mx-auto flex">about</div>
            <div className="mx-auto flex">about</div>
            <div className="mx-auto flex">about</div>
            <div className="mx-auto flex">about</div>
            <div className="mx-auto flex">about</div>
            <div className="mx-auto flex">about</div>
            <div className="mx-auto flex">about</div>
            <div className="mx-auto flex">about</div>
            <div className="mx-auto flex">about</div>
            <div className="mx-auto flex">about</div>
            <div className="mx-auto flex">about</div>
            <div className="mx-auto flex">about</div>
            <div className="mx-auto flex">about</div>
            <div className="mx-auto flex">about</div>
            <div className="mx-auto flex">about</div>
            <div className="mx-auto flex">about</div>
            <div className="mx-auto flex">about</div>
            <div className="mx-auto flex">about</div>
            <div className="mx-auto flex">about</div>
            <div className="mx-auto flex">about</div>
            <div className="mx-auto flex">about</div>
            <div className="mx-auto flex">about</div>
            <div className="mx-auto flex">about</div>
            <div className="mx-auto flex">about</div>
            <div className="mx-auto flex">about</div>
            <div className="mx-auto flex">about</div>
            <div className="mx-auto flex">about</div>
            <div className="mx-auto flex">about</div>
            <div className="mx-auto flex">about</div>
            <div className="mx-auto flex">about</div>
            <div className="mx-auto flex">about</div>
            <div className="mx-auto flex">about</div>
            <div className="mx-auto flex">about</div>
            <div className="mx-auto flex">about</div>
            <div className="mx-auto flex">about</div>
            <div className="mx-auto flex">about</div>
            <div className="mx-auto flex">about</div>
            <div className="mx-auto flex">about</div>
            <div className="mx-auto flex">about</div>
            <div className="mx-auto flex">about</div>
          </div>
        </main>
        <div id="spacer" className="flex-1 bg-red-500"></div>
        <Footer />
      </div>
    </>
  );
};

export default About;
