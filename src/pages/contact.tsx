import type { NextPage } from "next";
import { Header } from "../components/header";
import Spacer from "../components/spacer";
import { Footer } from "../components/footer";
import { NavigationBar } from "../components/navigation-bar";

const Contact: NextPage = () => {
  return (
    <>
      <Header />
      <div className="-z-10 m-0 flex min-h-screen flex-col">
        <NavigationBar />
        <main className="relative bg-slate-400">
          <div>contact</div>
        </main>
        <Spacer bgColor="bg-slate-400" />
        <Footer />
      </div>
    </>
  );
};

export default Contact;
