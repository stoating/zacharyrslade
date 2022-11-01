import type { NextPage } from "next";
import { Header } from "../components/header";
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
      <main>
        <div>honk</div>
        <div>honk</div>
        <div>honk</div>
        <div>honk</div>
      </main>
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
