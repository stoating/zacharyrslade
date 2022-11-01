import type { NextPage } from "next";
import { Header } from "../components/head";
import { Footer } from "../components/footer";
import { NavigationBar } from "../components/navigation-bar";

const Stoating: NextPage = () => {
  return (
    <>
      <div className="flex h-screen flex-col justify-between -z-10 opacity-100 ring ring-green-500">
        <Header />
        <NavigationBar />
        <main className=" bg-slate-400 relative">
          <div>about</div>
          <div>about</div>
          <div>about</div>
          <div>about</div>
          <div>about</div>
          <div>about</div>
          <div>about</div>
          <div>about</div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Stoating;
