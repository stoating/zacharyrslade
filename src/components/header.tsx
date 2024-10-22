import Head from "next/head";

export const Header = () => {
  return (
    <Head>
      <title>Zachary Slade</title>
      <meta name="description" content="Welcome to my personal page" />

      <meta property="og:title" content="Zachary Slade" />
      <meta property="og:description" content="Welcome to my personal page" />
      <meta property="og:url" content="https://zacharyrslade.com" />
      <meta property="og:image" content="http://zacharyrslade.com/_next/image?url=%2Fimages%2Fzack-look-down-bw-02.webp&w=1200&q=75" />
      <meta property="og:type" content="website" />

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
