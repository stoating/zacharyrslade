import type { NextPage } from "next";
import { Header } from "../components/header";
import { Hero } from "../components/hero/hero";
import { About } from "../components/about/about";
import { Resume } from "../components/resume/resume";
import { ProfessionalProfiles } from "../components/professional-profiles";
import { Stoating } from "../components/stoating";
import { Contact } from "../components/contact/contact";
import { Footer } from "../components/footer";
import { NavigationBar } from "../components/navigation-bar";
import { ContextLanguageProvider } from "../context/language";
import React from "react";


const App: NextPage = () => {
  return (
    <>
      <ContextLanguageProvider>
        <Header />
        <NavigationBar />
        <Hero />
        <About />
        <Resume />
        <ProfessionalProfiles />
        <Stoating />
        <Contact />
        <Footer />
      </ContextLanguageProvider>
    </>
  );
};

export default App;
