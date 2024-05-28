import Image from "next/image";
import { Inter } from "next/font/google";
import { Layout } from "@/components/Layout";
import { PropsWithChildren, useEffect, useState } from "react";
import { TableEntryContainer } from "@/components/Table/TableContainer";

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  return (
    <Layout>
      <main
        className={`  flex min-h-screen  w-full md:w-1/2 mx-auto p-10 md:py-24 gap-20 ${inter.className}`}
      >
        <div className="flex flex-col text-left">
          <h1 className="text-3xl md:text-5xl font-bold  mb-5">
            Contact Maildroppa{" "}
          </h1>
          <p>
            Have questions, suggestions or comments? We'd love to hear from you!
            Fill out the form and we'll get back to you as quick as we possibly
            can.
          </p>
          <a
            href="mailto:manazharma@gmail.com"
            className="my-10 p-3 px-8 text-lg w-fit rounded-md bg-gradient-to-r from-teal-200 to-teal-500 text-white font-medium"
          >
            Mail
          </a>
        </div>
        <Image
          width={1000}
          height={1000}
          src="contact-us.svg"
          alt="contact"
          className="hidden md:block"
        ></Image>
      </main>
    </Layout>
  );
}
