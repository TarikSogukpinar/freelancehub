import Head from "next/head";
import HomePage from "../../components/HomePage";
import { useContext } from "react";
import Context from "../../context/context";

export default function Home({ cookies }) {
  console.log(cookies);
  return (
    <>
      <Head>
        <title>Freelancer Hub</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage cookies={{ cookies }} />
    </>
  );
}
export async function getServerSideProps(context) {
  const cookies = context.req.headers.cookie;

  return {
    props: cookies
      ? {
          cookies,
        }
      : { cookies: null },
  };
}
