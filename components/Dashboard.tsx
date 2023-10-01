"use client";

import { useColorMode } from "@/context/ColorModeContext";
import React from "react";
import { PortableText } from "@portabletext/react";

const Dashboard = ({ text }: { text: any }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div
      className={`w-full p-5 ${
        colorMode === "dark"
          ? "bg-[#131417] text-white"
          : "bg-[#eee] text-slate-900"
      }`}
    >
      <PortableText value={text.content} />
    </div>
  );
};

export default Dashboard;
