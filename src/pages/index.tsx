import Image from "next/image";
import { Inter } from "next/font/google";
import { Layout } from "@/components/Layout";
import { PropsWithChildren } from "react";
import { TableEntryContainer } from "@/components/Table/TableContainer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <main
        className={`flex min-h-screen w-full md:mx-auto min-w-fit md:w-2/3 bg-white flex-col  p-10 md:py-24 ${inter.className}`}
      >
        <div>
          <h1 className="text-3xl font-medium w-full mb-2.5">Signup Forms</h1>
          <p>
            Here&apos;s the list of all your forms, Use the report and lifetime
            key figures to improve their effectiveness over time
          </p>
        </div>
        <TableEntryContainer></TableEntryContainer>
      </main>
    </Layout>
  );
}
