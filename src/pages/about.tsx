import type { NextPage } from "next";
import { Header } from "../../public/includes/header";
import { Footer } from "../../public/includes/footer";
import { NavigationBar } from "../../public/includes/navigation-bar";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex h-screen flex-col justify-between ring ring-green-500">
        <Header />
        <NavigationBar />
        <main>
          <div className="flex mx-auto">about</div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
