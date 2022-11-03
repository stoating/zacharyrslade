import type { NextPage } from "next";
import Head from "next/head";
import { Socials } from "../data/socials";
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";

export const Greeter = () => {
  //const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  const HomeSocials = Socials.filter(function (Socials) {
    return Socials.ref !== "/";
  });

  const handleMenuItemMouseOver = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const selectedAnchorNumber = parseInt(
      event.currentTarget.id.split("-").pop() as string
    );
    const myOffsetStepSize = 100 / Socials.length;
    const myOffset = selectedAnchorNumber * myOffsetStepSize;

    const menuBackgroundPattern = document.getElementById(
      "menu-background-pattern"
    );
    menuBackgroundPattern!.style.backgroundPositionX = -1 * myOffset + "%";

    const menuBackgroundImage = document.getElementById(
      "menu-background-image"
    );
    menuBackgroundImage!.style.backgroundPositionX = myOffset + "%";
  };

  return (
    <>
      {/*
      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <div className="flex w-full items-center justify-center pt-6 text-2xl text-blue-500">
          {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
        </div>
        <AuthShowcase />
      </main>
      */}
      <div
        id="menu"
        className="mx-auto flex min-h-screen items-center bg-gray-900 ring ring-red-700"
      >
        <div
          id="menu-items"
          className="peer/menu-item z-10 mx-auto ring ring-black hover:opacity-100"
        >
          {HomeSocials.map((item) => (
            <div
              key={item.id}
              id={"menu-item-div-" + item.id}
              className="group/item inline-block opacity-70 ring ring-red-900 hover:opacity-100"
            >
              <a
                id={"menu-item-" + item.id}
                className="m-1 inline-block p-1 font-sans text-5xl text-white opacity-80 ring ring-green-900 group-hover/item:opacity-100"
                target="_blank"
                href={item.ref}
                onMouseOver={handleMenuItemMouseOver}
              >
                {item.text}
              </a>
            </div>
          ))}
        </div>
        <div
          id="menu-background-pattern"
          className="absolute z-0 h-screen w-screen bg-circle bg-12vmin transition-all duration-700 ease-out peer-hover/menu-item:bg-9vmin peer-hover/menu-item:opacity-100"
        ></div>
        <div
          id="menu-background-image"
          className="absolute z-0 h-screen w-screen bg-image bg-cover transition-all duration-700 ease-out peer-hover/menu-item:opacity-20"
        ></div>
      </div>
    </>
  );
};

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
