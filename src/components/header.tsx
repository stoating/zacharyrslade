import { ContextLanguage } from "../context/language";
import Head from "next/head";

export const Header = () => {
  return (
    <Head>
      <title>Zachary Slade</title>
      <meta name="description" content="Welcome to my personal page" />

      <meta content="im the og title" property="og:title" />
      <meta content="im the og description" property="og:description" />
      <meta content="https://zacharyrslade.com" property="og:url" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
};
