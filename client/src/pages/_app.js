import "@/styles/globals.css";
import { Lobster } from "next/font/google";
import 'react-toastify/dist/ReactToastify.css';
// If loading a variable font, you don't need to specify the font weight
const lobster = Lobster({ subsets: ["latin"], weight: "400" });
export default function App({ Component, pageProps }) {
  return <Component classname={lobster.className} {...pageProps} />;
}
