import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SkillsCapital - SAP CO Expertise</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logo.jpeg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
