"use client";

import useColorMode from "@/redux/hooks/useColorMode";

export default function Home() {
  const { colorMode } = useColorMode();

  return (
    <main
      className={`flex flex-col items-center justify-between ${
        colorMode === "dark" ? "bg-[#131417]" : "bg-slate-50"
      } `}
    >
      Home
    </main>
  );
}
