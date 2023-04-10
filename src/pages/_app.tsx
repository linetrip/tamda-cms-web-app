import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import client from "../apolo-client";

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </ApolloProvider>
  );
}

export default App;
