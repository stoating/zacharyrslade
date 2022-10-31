import Head from "next/head"

export const Header = () => {
  return (
  <Head>
    <title>Zachary Slade</title>
    <meta name="description" content="Welcome to my personal page" />
    <link rel="apple-touch-icon" sizes="180x180" href="/images/header/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/images/header/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/images/header/favicon-16x16.png" />
    <link rel="manifest" href="/images/header/site.webmanifest" />
  </Head>
  );
}