"use client";

import useColorMode from "@/redux/hooks/useColorMode";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BiSun, BiMoon } from "react-icons/bi";
import { MdOutlineArrowDropUp } from "react-icons/md";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();

  const [navOpen, setNavOpen] = useState(false);
  const [showLearnDropdown, setShowLearnDropdown] = useState(false);
  const [showLearnDropdownMobile, setShowLearnDropdownMobile] = useState(false);

  const handleLearnHover = () => {
    setShowLearnDropdown(true);
  };

  const handleLearnLeave = () => {
    setShowLearnDropdown(false);
  };

  return (
    <div
      className={`w-full h-14 flex justify-between shadow items-center px-4 sticky top-0 z-10 ${
        colorMode === "dark"
          ? "bg-[#222222] text-white"
          : "bg-white text-slate-900"
      }`}
    >
      <div className="logo flex items-center space-x-3">
        <div
          className={`hamburger w-5 flex cursor-pointer items-center flex-col space-y-1 md:hidden mr-2`}
          onClick={() => setNavOpen(!navOpen)}
        >
          <div
            className={`ham h-1 w-4 rounded duration-500 transition-transform origin-left ease-in-out ${
              navOpen ? "rotate-45" : "rotate-0"
            } ${colorMode === "dark" ? "bg-white" : "bg-slate-900"}`}
          ></div>
          <div
            className={`bur w-[1.39rem] h-1 rounded duration-500 transition-transform ease-in-out ${
              navOpen ? " -rotate-45" : "rotate-0"
            } ${colorMode === "dark" ? "bg-white" : "bg-slate-900"}`}
          ></div>
          <div
            className={`ger h-1 w-4 rounded duration-500 transition-transform origin-right ease-in-out ${
              navOpen ? "rotate-45" : "rotate-0"
            } ${colorMode === "dark" ? "bg-white" : "bg-slate-900"}`}
          ></div>
        </div>
        <Link href="/">
          <span className="text-2xl">Gateverse</span>
        </Link>
      </div>
      <div className="right flex space-x-6">
        <div
          className={`navoptions flex md:space-x-11 flex-col md:items-center md:flex-row absolute md:relative md:translate-x-0 left-0 md:top-0 top-14 w-full md:w-max duration-500 transition-transform ease-in-out ${
            navOpen ? "translate-x-0" : "-translate-x-full"
          } ${colorMode === "dark" ? "bg-[#222222]" : "bg-white"}`}
        >
          <div
            className="hover:text-[#4E8E8E] cursor-pointer font-semibold px-4 py-2 md:p-0"
            onMouseEnter={handleLearnLeave}
            onClick={() => {
              setNavOpen(!navOpen);
              router.push("/gate");
            }}
          >
            <span className="">Learn</span>
          </div>
          <div
            className="hover:text-[#4E8E8E] cursor-pointer font-semibold px-4 py-2 md:p-0"
            onMouseEnter={handleLearnLeave}
            onClick={() => {
              setNavOpen(!navOpen);
              router.push("/practice");
            }}
          >
            <span className="">Practice</span>
          </div>
          <div
            className="hover:text-[#4E8E8E] cursor-pointer font-semibold px-4 py-2 md:p-0"
            onMouseEnter={handleLearnLeave}
            onClick={() => {
              setNavOpen(!navOpen);
              router.push("/contact");
            }}
          >
            <span className="">Contact Us</span>
          </div>
        </div>
        <div
          className={`w-9 h-9 cursor-pointer font-semibold rounded-full flex justify-center items-center text-2xl ${
            colorMode === "dark" ? "hover:bg-[#444444]" : "hover:bg-[#eeeeee]"
          }`}
          onClick={toggleColorMode}
        >
          {colorMode === "dark" ? <BiSun /> : <BiMoon />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
