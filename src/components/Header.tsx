import Image from "next/image";
import React, { useState } from "react";
import Tab from "./common/Tabs";
import useDevice from "@/utils/hooks/useDevice";

const Header = () => {
  const [showModal, setShowmodal] = useState(false);

  return (
    <>
      <nav className="p-5 mb-10 md:mb-0 md:py-6 md:px-14 md:mx-10 flex justify-between items-center">
        {/* Logo */}
        <a href="/">
          <Image src="/mail.svg" width={240} height={60} alt="Logo"></Image>
        </a>
        <Image
          onClick={() => setShowmodal(!showModal)}
          src="/hamburger.svg"
          width={30}
          height={30}
          alt="Logo"
        ></Image>

        <div className="hidden  md:flex  md:gap-10">
          <Tab href="/about">About Us</Tab>
          <Tab href="/contact">Contact Us</Tab>
          <Tab href="https://maildroppa.com/pricing">Pricing</Tab>
          <Tab href="https://maildroppa.com/academy">Academy</Tab>
        </div>
      </nav>
      {showModal && (
        <div
          onClick={() => setShowmodal(!showModal)}
          className="bg-white flex flex-col w-full text-black  p-5 text-md right-[-4.5rem] border-[1px] border-gray-400 rounded-md"
        >
          <Tab href="/about">About Us</Tab>
          <Tab href="/contact">Contact Us</Tab>
          <Tab href="https://maildroppa.com/pricing">Pricing</Tab>
          <Tab href="https://maildroppa.com/academy">Academy</Tab>
        </div>
      )}
    </>
  );
};

export default Header;
