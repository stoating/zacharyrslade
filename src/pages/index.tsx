import type { NextPage } from "next";
import { Header } from "../components/header";
import { Greeter } from "../components/greeter";
import { About } from "../components/about";
import { Resume } from "../components/resume";
import { ProfessionalProfiles } from "../components/professional-profiles";
import { Stoating } from "../components/stoating";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";
import { NavigationBar } from "../components/navigation-bar";

const OnePager: NextPage = () => {
  return (
    <>
      <Header />
      <NavigationBar />
      <Greeter />
      <About />
      <Resume />
      <ProfessionalProfiles />
      <Stoating />
      <Contact />
      <Footer />
    </>
  );
};

export default OnePager;