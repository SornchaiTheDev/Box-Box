import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { trpc } from "@/server/utils";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default trpc.withTRPC(App);
