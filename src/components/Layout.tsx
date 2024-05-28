import Head from "next/head";
import { PropsWithChildren } from "react";
import Header from "./Header";

export interface Props {}

export function Layout({ children }: PropsWithChildren<Props>) {
  return (
    <>
      <Head>
        <title>Maildroppa</title>
      </Head>
      <div className="flex flex-col min-h-screen ">
        <Header></Header>

        <main className="flex-1 p-5">{children}</main>

        {/* <Footer></Footer> */}
      </div>
    </>
  );
}
