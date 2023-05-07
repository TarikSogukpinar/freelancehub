import "@/styles/globals.css";
import Context from "../../context/context";

export default function App({ Component, pageProps }) {
  return (
    <Context>
      <Component {...pageProps} />
    </Context>
  );
}

export async function getServerSideProps(context) {
  const cookies = context.req.headers.cookie;

  return {
    props: {
      cookies,
    },
  };
}
