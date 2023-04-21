import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import type { AppProps } from "next/app";
import { Lato } from "next/font/google";
import client from "../apolo-client";

const lato = Lato({
  subsets: ["latin"],
  weight: "400",
});

const theme: any = createTheme({
  type: "light",
  theme: {
    colors: {
      primary: "#19B04E",
    },
  },
});

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <NextUIProvider theme={theme}>
        <main className={lato.className}>
          <Component {...pageProps} />
        </main>
      </NextUIProvider>
    </ApolloProvider>
  );
}

export default App;
