"use client";

import { useColorMode } from "@/context/ColorModeContext";
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
          <div>
            <button
              onMouseEnter={handleLearnHover}
              onClick={() => {
                setShowLearnDropdownMobile(!showLearnDropdownMobile);
              }}
              className="hover:text-[#4E8E8E] cursor-pointer font-semibold flex justify-between w-full md:w-max px-4 py-2 md:p-0"
            >
              <span>Learn</span>
              <span
                className={`hidden md:inline text-2xl transition-transform duration-500 ease-in-out  ${
                  showLearnDropdown ? "rotate-0" : "rotate-180"
                }`}
              >
                <MdOutlineArrowDropUp />
              </span>
              <span
                className={`md:hidden text-2xl transition-transform duration-500 ease-in-out  ${
                  showLearnDropdownMobile ? "rotate-0" : "rotate-180"
                }`}
              >
                <MdOutlineArrowDropUp />
              </span>
            </button>
            {showLearnDropdown && (
              <div
                onMouseEnter={handleLearnHover}
                onMouseLeave={handleLearnLeave}
                className={`hidden md:inline absolute -left-3 mt-4 border rounded shadow-lg w-48 z-10 ${
                  colorMode === "dark"
                    ? "bg-[#222] md:border-[#444]"
                    : "bg-white"
                }`}
              >
                <div
                  className="cursor-pointer hover:font-semibold p-2"
                  onClick={() => {
                    setNavOpen(!navOpen);
                    router.push("/gate");
                  }}
                >
                  <span>Gate</span>
                </div>
                <div
                  className="cursor-pointer hover:font-semibold p-2"
                  onClick={() => {
                    setNavOpen(!navOpen);
                  }}
                >
                  <span>Course 2</span>
                </div>
                <div className="w-full h-0.5  bg-[#438383]"></div>
              </div>
            )}
            {/* for mobile */}
            <div
              className={`bg-[#333] md:hidden transition-all text-sm overflow-y-hidden duration-500 ease-in-out ${
                showLearnDropdownMobile ? "h-max" : " h-0"
              }`}
            >
              <div
                className="py-2 px-4 hover:font-semibold cursor-pointer"
                onClick={() => {
                  setNavOpen(!navOpen);
                  router.push("/gate");
                  setShowLearnDropdownMobile(!showLearnDropdownMobile);
                }}
              >
                Gate
              </div>
              <div
                className="py-2 px-4 hover:font-semibold cursor-pointer"
                onClick={() => {
                  setNavOpen(!navOpen);
                  setShowLearnDropdownMobile(!showLearnDropdownMobile);
                }}
              >
                Course 2
              </div>
              <li className="w-full h-0.5  bg-[#438383]"></li>
            </div>
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
