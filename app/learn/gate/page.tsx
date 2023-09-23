"use client";

import Sidebar from "@/components/Sidebar";
import { useColorMode } from "@/context/ColorModeContext";
import React, { use, useState } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { createClient } from "next-sanity";

const Gate = () => {
  // const response = use(getData());
  const { colorMode } = useColorMode();

  const [isSideOpen, setIsSideOpen] = useState(true);
  // const subjects = response.props.subjects;

  const subjects = {
    Mathematics: ["first order logic", "sets", "relations", "functions"],
    "Digital Logic": [
      "boolean algebra",
      "cominational and sequential circuit",
      "computer arithematic",
    ],
    COA: [
      "Machine instructions and addressing modes",
      "Alu",
      "memory heirarchi",
    ],
    DSA: ["programming in c ", "recursion", "arrray"],
  };

  return (
    <div
      className={`flex sticky screenMinusNavHeight ${
        colorMode === "dark" ? "bg-[#131417]" : "bg-slate-50"
      } `}
    >
      <Sidebar subjects={subjects} isSideOpen={isSideOpen} />

      <div
        className={`right flex-col items-center justify-between transition-all duration-500 ease-in-out overflow-y-auto ${
          isSideOpen ? "w-1/5 sm:w-1/2 md:w-2/3 lg:w-10/12" : "w-full"
        }`}
      >
        <div className="flex w-full justify-start p-1">
          <div
            className={`rounded bg-[#222] w-8 cursor-pointer h-8 font-bold text-xl grid place-items-center`}
            onClick={() => {
              setIsSideOpen((prev) => (prev ? false : true));
            }}
          >
            <span
              className={` transition-all duration-500 ease-in-out
            ${isSideOpen ? "rotate-0" : "rotate-180"}
            `}
            >
              <MdOutlineArrowBackIosNew />
            </span>
          </div>

          {/* <span className="sm:text-3xl text-2xl font-medium title-font justify-self-center">
              Gate
            </span> */}
        </div>
      </div>
    </div>
  );
};

export default Gate;


