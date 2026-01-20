"use client";

import "@/i18n";
import { Spacer } from "@heroui/react";

import Welcome from "./components/Welcome";
import Entry from "./components/Entry";
import Now from "./components/Now";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Topbar from "./components/Topbar";
import Bottombar from "./components/Bottombar";
import Career from "./components/Career";
import Paragraph from "./components/Paragraph";
import End from "./components/End";
import HeroVideoBackground from "./components/HeroVideoBackground";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-poppins)]">
      <Topbar />
      <HeroVideoBackground />
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Welcome />
      </div>
      <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <Entry />
        <Spacer className="hidden sm:block" y={64} />
        <Spacer className="sm:hidden" y={40} />
        <Paragraph />
        <Spacer className="hidden sm:block" y={64} />
        <Spacer className="sm:hidden" y={40} />
        <Now />
        <Spacer y={48} />
        <Services />
        <Spacer y={48} />
        <Resume />
        <Spacer y={48} />
        <Career />
        <Spacer y={64} />
        <End />
      </div>
      <Bottombar />
    </div>
  );
}
