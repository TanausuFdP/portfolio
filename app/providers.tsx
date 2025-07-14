"use client";

import { HeroUIProvider } from "@heroui/react";
import "../i18n";

export function Providers({ children }: { children: React.ReactNode }) {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}

export default Providers;
