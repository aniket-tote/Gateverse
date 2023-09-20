"use client";

import { ColorModeProvider } from "@/context/ColorModeContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ColorModeProvider>{children}</ColorModeProvider>;
}
