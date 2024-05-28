import Image from "next/image";
import React from "react";
import Tab from "./common/Tabs";
import useDevice from "@/utils/hooks/useDevice";

const Header = () => {
  const { isMobile } = useDevice();

  return (
    <nav className="p-5 mb-10 md:mb-0 md:py-6 md:px-14 md:mx-10 flex justify-between items-center">
      {/* Logo */}
      <a href="/">
        <Image src="/mail.svg" width={240} height={60} alt="Logo"></Image>
      </a>
      <div className="hidden  md:flex  md:gap-10">
        <Tab href="/about">About Us</Tab>
        <Tab href="/contact">Contact Us</Tab>
        <Tab href="/pricing">Pricing</Tab>
        <Tab href="/academy">Academy</Tab>
      </div>
    </nav>
  );
};

export default Header;
