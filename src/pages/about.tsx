import type { NextPage } from "next";
import { Header } from "../components/header";
import Spacer from "../components/spacer";
import { Footer } from "../components/footer";
import { NavigationBar } from "../components/navigation-bar";

const About: NextPage = () => {
  return (
    <>
      <Header />
      <div className="-z-10 m-0 flex min-h-screen flex-col">
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
        <Spacer bgColor="bg-slate-400" />
        <Footer />
      </div>
    </>
  );
};

export default About;
