import type { NextPage } from "next";
import { Header } from "../components/header";
import Spacer from "../components/spacer";
import { Footer } from "../components/footer";
import { NavigationBar } from "../components/navigation-bar";

const Resume: NextPage = () => {
  return (
    <>
      <Header />
      <div className="-z-10 m-0 flex min-h-screen flex-col">
        <NavigationBar />
        <main>
          <div>resume</div>
        </main>
        <Spacer bgColor="bg-white" />
        <Footer />
      </div>
    </>
  );
};

export default Resume;
