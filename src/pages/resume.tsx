import type { NextPage } from "next";
import { Header } from "./includes/header";
import { NavigationBar } from "./includes/navigation-bar";

const Home: NextPage = () => {

  return (
    <>
      <Header />
      <NavigationBar />
      <main>
        <div>resume</div>
      </main>
    </>
  );
};

export default Home;