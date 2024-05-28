import { Layout } from "@/components/Layout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <Layout>
      <main
        className={`  flex min-h-screen flex-col items-center w-full md:w-1/2 mx-auto p-10 md:py-24 ${inter.className}`}
      >
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold  mb-5">
            Finally, an email tool built for startups. Simply drive growth.
          </h1>
          <p>
            Maildroppa is an email sender that's grounded in principles of
            simplicity. With all the features you need, and none of the
            distractions you don't, you can get back to the real task at hand…
            writing engaging emails that connect with your audience and bring in
            sales.
          </p>
        </div>
      </main>
    </Layout>
  );
}
