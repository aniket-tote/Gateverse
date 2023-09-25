"use client";

import { useColorMode } from "@/context/ColorModeContext";
import React from "react";

const Dashboard = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div
      className={`w-full p-5 ${
        colorMode === "dark"
          ? "bg-[#131417] text-white"
          : "bg-[#eee] text-slate-900"
      }`}
    >
      Dashboard
    </div>
  );
};

export default Dashboard;
