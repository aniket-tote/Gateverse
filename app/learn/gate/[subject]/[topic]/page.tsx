"use client";

import { useColorMode } from "@/context/ColorModeContext";
import React from "react";

const Topic = ({ params }: { params: { subject: string; topic: string } }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div
      className={`flex flex-col items-center justify-between ${
        colorMode === "dark" ? "bg-[#131417]" : "bg-slate-50"
      } `}
    >
      Topic {params.subject}/{params.topic}
    </div>
  );
};

export default Topic;
