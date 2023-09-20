"use client";

import { useColorMode } from "@/context/ColorModeContext";
import React from "react";

const Subject = ({ params }: { params: { subject: string } }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div
      className={`flex flex-col items-center justify-between ${
        colorMode === "dark" ? "bg-[#131417]" : "bg-slate-50"
      } `}
    >
      Subject {params.subject}
    </div>
  );
};

export default Subject;
