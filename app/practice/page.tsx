"use client";

import { useColorMode } from "@/context/ColorModeContext";
import React from "react";

const Practice = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div
      className={`flex flex-col p-6 items-center justify-between ${
        colorMode === "dark" ? "bg-[#131417]" : "bg-slate-50"
      } `}
    >
      <div className="flex flex-col text-center w-full">
        <span className="sm:text-3xl text-2xl font-medium title-font">
          Practice
        </span>
      </div>
    </div>
  );
};

export default Practice;
