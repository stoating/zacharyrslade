import type { NextPage } from "next";
import { Header } from "../components/header";
import { Hero } from "../components/hero/hero";
import { About } from "../components/about/about";
import { Resume } from "../components/resume/resume";
import { Profiles } from "../components/profiles";
import { Stoating } from "../components/stoating";
import { Contact } from "../components/contact/contact";
import { Footer } from "../components/footer";
import { NavigationBar } from "../components/navbar";
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
        <Profiles />
        <Stoating />
        <Contact />
        <Footer />
      </ContextLanguageProvider>
    </>
  );
};

export default App;
