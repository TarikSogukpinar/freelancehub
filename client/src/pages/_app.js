import "@/styles/globals.css";
import Context from "../../context/context";
// If loading a variable font, you don't need to specify the font weight

export default function App({ Component, pageProps }) {
  return (
    <Context.Provider value={pageProps.cookies}>
      <Component {...pageProps} />
    </Context.Provider>
  );
}

export async function getServerSideProps(context) {
  const cookieData = context.req.headers.cookie;

  // const cookieData = getCookieData(context.req.cookies);

  return {
    props: {
      cookieData,
    },
  };
}
