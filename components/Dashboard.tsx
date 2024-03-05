"use client";

import React from "react";
import { PortableText } from "@portabletext/react";
import useColorMode from "@/redux/hooks/useColorMode";

const Dashboard = ({ text }: { text: any }) => {
  const { colorMode } = useColorMode();

  return (
    <div
      className={`overflow-y-auto scrollbar scrollbar-w-1 scrollbar-thumb-rounded-md scrollbar-thumb-[#4e8e8e] w-full p-5 ${
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
