"use client";

import "@/i18n";
import { Spacer } from "@heroui/react";

import Welcome from "./components/Welcome";
import Resume from "./components/Resume";
import Topbar from "./components/Topbar";
import Bottombar from "./components/Bottombar";
import Career from "./components/Career";
import End from "./components/End";
import HeroVideoBackground from "./components/HeroVideoBackground";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import WhereToFindMe from "./components/WhereToFindMe";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-poppins)]">
      <Topbar />
      <HeroVideoBackground />
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Welcome />
      </div>
      <div className="min-h-screen gap-16">
        <ProjectsSection />
        <Spacer className="hidden sm:block" y={64} />
        <Spacer className="sm:hidden" y={40} />
        <AboutSection />
        <Spacer className="hidden sm:block" y={64} />
        <Spacer className="sm:hidden" y={40} />
        <Resume />
        <Spacer className="hidden sm:block" y={64} />
        <Spacer className="sm:hidden" y={40} />
        <Career />
        <Spacer className="hidden sm:block" y={64} />
        <Spacer className="sm:hidden" y={40} />
        <WhereToFindMe />
        <Spacer className="hidden sm:block" y={64} />
        <Spacer className="sm:hidden" y={40} />
        <End />
      </div>
      <Bottombar />
    </div>
  );
}
