import type { NextPage } from "next";
import { Header } from "../../public/includes/header";
import { NavigationBar } from "../../public/includes/navigation-bar";

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