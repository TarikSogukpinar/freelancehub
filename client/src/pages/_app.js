import "@/styles/globals.css";
import { Lobster } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const lobster = Lobster({ subsets: ["latin"], weight: "400" });
export default function App({ Component, pageProps }) {
  return <Component classname={lobster.className} {...pageProps} />;
}
