import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../includes/header";
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  //const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  const MenuItems = [
    {id: 1, text: "About", target: "", ref: "/about"},
    {id: 2, text: "Resume", target: "", ref: "/resume"},
    {id: 3, text: "LinkedIn", target: "_blank", ref: "https://www.linkedin.com/in/zacharyslade1"},
    {id: 4, text: "Xing", target: "_blank", ref: "https://www.xing.com/profile/Zachary_Slade"},
    {id: 5, text: "GitHub", target: "_blank", ref: "https://github.com/stoating"},
    {id: 6, text: "Stoating", target: "", ref: "/stoating"},
    {id: 7, text: "Contact", target: "", ref: "/contact"},
  ]

  const handleMenuItemMouseOver = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const selectedAnchorNumber = parseInt(event.currentTarget.id.split("-").pop() as string);
    const myOffsetStepSize = 100/MenuItems.length;
    const myOffset = selectedAnchorNumber * myOffsetStepSize;

    const menuBackgroundPattern = document.getElementById("menu-background-pattern");
    menuBackgroundPattern!.style.backgroundPositionX = -1*myOffset + "%";

    const menuBackgroundImage = document.getElementById("menu-background-image");
    menuBackgroundImage!.style.backgroundPositionX = myOffset + "%";
  }

  return (
    <>
      <Header />
      {/*
      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <div className="flex w-full items-center justify-center pt-6 text-2xl text-blue-500">
          {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
        </div>
        <AuthShowcase />
      </main>
      */}
      <div id="menu" className="mx-auto flex min-h-screen items-center bg-gray-700 ring ring-red-700">
        <div id="menu-items" className="mx-auto peer/menu-item hover:opacity-100 z-10 ring ring-black">
          {MenuItems.map(item => (
            <div key={item.id} id={"menu-item-div-"+item.id} className="inline-block group/item opacity-70 hover:opacity-100 ring ring-red-900">
              <a id={"menu-item-"+item.id} className="text-white text-5xl font-sans inline-block opacity-80 group-hover/item:opacity-100 p-1 m-1 ring ring-green-900" target={item.target} href={item.ref} onMouseOver={handleMenuItemMouseOver}>{item.text}</a>
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

// const AuthShowcase: React.FC = () => {
//   const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery();
//   const { data: sessionData }   = useSession();

//   return (
//     <div className="flex flex-col items-center justify-center gap-2">
//       {sessionData && (
//         <p className="text-2xl text-blue-500">
//           Logged in as {sessionData?.user?.name}
//         </p>
//       )}
//       {secretMessage && (
//         <p className="text-2xl text-blue-500">{secretMessage}</p>
//       )}
//       <button
//         className="rounded-md border border-black bg-violet-50 px-4 py-2 text-xl shadow-lg hover:bg-violet-100"
//         onClick={sessionData ? () => signOut() : () => signIn()}>
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// };