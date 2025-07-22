"use client";

import "@/i18n";
import Welcome from "./components/Welcome";
import Entry from "./components/Entry";
import Now from "./components/Now";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Topbar from "./components/Topbar";
import Bottombar from "./components/Bottombar";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Topbar />
      <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <Welcome />
        <Entry />
        <Now />
        <Services />
        <Resume />
      </div>
      <Bottombar />
    </div>
  );
}
