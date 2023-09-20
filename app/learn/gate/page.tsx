"use client";

import { useColorMode } from "@/context/ColorModeContext";
import Link from "next/link";
import React from "react";

const Gate = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div
      className={`flex flex-col items-center p-6 justify-between ${
        colorMode === "dark" ? "bg-[#131417]" : "bg-slate-50"
      } `}
    >
      <div className="flex flex-col text-center w-full">
        <span className="sm:text-3xl text-2xl font-medium title-font">
          Gate
        </span>
      </div>

      <div className={`flex w-full justify-start`}>
        <Link
          href={"/learn/gate/mathematics"}
          className={`p-4 lg:w-1/4 md:w-1/2 w-full bg-[#222222] rounded-lg flex-col hover:border-b-4 hover:border-[#4E8E8E]`}
        >
          <span className="font-semibold">Mathematics</span>
        </Link>
      </div>
    </div>
  );
};

export default Gate;
