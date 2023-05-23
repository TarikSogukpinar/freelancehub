import "@/styles/globals.css";
import Context from "../../context/context";
import { Provider } from "react-redux";
import { store, wrapper } from "@/store/store";

export default function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Context>
        <Component {...props.pageProps} />
      </Context>
    </Provider>
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
