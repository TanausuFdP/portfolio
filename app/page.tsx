"use client";

import "@/i18n";
import Welcome from "./components/welcome";
import Entry from "./components/entry";
import Now from "./components/now";
import Services from "./components/services";
import Resume from "./components/resume";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Welcome />
      <Entry />
      <Now />
      <Services />
      <Resume />
    </div>
  );
}
