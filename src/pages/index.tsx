import type { NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  const MenuItems = [
    {id: 1, text: "Home"      , ref: "/"},
    {id: 2, text: "Shop"      , ref: "/"},
    {id: 3, text: "About"     , ref: "/"},
    {id: 4, text: "Contact Us", ref: "/"},
  ]

  const handleMenuItemMouseOver = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    let selectedAnchorNumber = parseInt(event.currentTarget.id.split("-").pop() as string);
    let myOffsetStepSize = 100/MenuItems.length;
    let myOffset = selectedAnchorNumber * myOffsetStepSize;

    const menuBackgroundPattern = document.getElementById("menu-background-pattern");
    menuBackgroundPattern!.style.backgroundPositionX = myOffset + "%";

    const menuBackgroundImage = document.getElementById("menu-background-image");
    menuBackgroundImage!.style.backgroundPositionX = myOffset + "%";
  }

  return (
    <>
      <Head>
        <title>Zachary Slade</title>
        <meta name="description" content="Welcome to my personal page" />
        <link rel="apple-touch-icon" sizes="180x180" href="/img/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/img/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/img/icons/favicon-16x16.png" />
        <link rel="manifest" href="/img/icons/site.webmanifest" />
      </Head>
      {/*
      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <div className="flex w-full items-center justify-center pt-6 text-2xl text-blue-500">
          {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
        </div>
        <AuthShowcase />
      </main>
      */}
      <div id="menu" className="mx-auto flex min-h-screen items-center bg-gray-700">
        <div id="menu-items" className="peer/menu-item hover:opacity-100 z-10">
          {MenuItems.map((item) => (
            <div id={"menu-item-div-"+item.id} className="group/item">
              <a id={"menu-item-"+item.id} className="text-white text-5xl font-sans block opacity-80 group-hover/item:opacity-100 p-1 m-1" href={item.ref} onMouseOver={handleMenuItemMouseOver}>{item.text}</a>
            </div>
          ))}
        </div>
        <div id="menu-background-pattern" className="h-screen w-screen bg-12vmin bg-circle absolute z-0 peer-hover/menu-item:bg-10vmin peer-hover/menu-item:opacity-100 transition-all ease-out duration-700"></div>
        <div id="menu-background-image" className="h-screen w-screen bg-cover bg-image absolute z-0 peer-hover/menu-item:opacity-20 transition-all ease-out duration-700"></div>
      </div>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery();
  const { data: sessionData }   = useSession();

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      {sessionData && (
        <p className="text-2xl text-blue-500">
          Logged in as {sessionData?.user?.name}
        </p>
      )}
      {secretMessage && (
        <p className="text-2xl text-blue-500">{secretMessage}</p>
      )}
      <button
        className="rounded-md border border-black bg-violet-50 px-4 py-2 text-xl shadow-lg hover:bg-violet-100"
        onClick={sessionData ? () => signOut() : () => signIn()}>
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};