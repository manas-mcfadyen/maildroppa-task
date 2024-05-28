import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
  }, []);

  return (
    <div
      className={`${
        load ? "opacity-100" : "opacity-0"
      } transition-all duration-500`}
    >
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/x-icon" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <title>
          Maildroppa - Email Marketing Tool | Grow Your Business &amp; Audience
        </title>
        <meta
          name="description"
          content="Easily create and automate your email marketing campaigns with our reliable automated bulk email software. Free signup - no credit card required."
        />
      </Head>
      <Component {...pageProps} />;
    </div>
  );
}
