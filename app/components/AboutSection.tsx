"use client";

import { Image } from "@heroui/react";

export default function AboutSection() {
  return (
    <>
      <div className="p-8 pb-20 sm:p-20 flex flex-col justify-center">
        <h2 className="text-lg font-bold text-center uppercase mb-4">
          About Me
        </h2>

        <div className="flex flex-col gap-2">
          <h3 className="text-center text-[5rem] uppercase font-bold leading-none">
            Full-Stack Developer.
          </h3>
          <h3 className="text-center text-[5rem] uppercase font-bold leading-none">
            Project Manager.
          </h3>
          <h3 className="text-center text-[5rem] uppercase font-bold leading-none">
            Software Engineer.
          </h3>
          <h3 className="text-center text-[5rem] uppercase font-bold leading-none">
            Videogames, films &
          </h3>
          <h3
            className="text-center text-[5rem] uppercase font-bold leading-none
                       bg-gradient-to-b from-foreground to-transparent
                       bg-clip-text text-transparent"
          >
            music lover.
          </h3>
        </div>
      </div>
      <div className="flex gap-16 items-center mx-auto max-w-5xl">
        <Image
          isBlurred
          isZoomed
          alt="Profile Picture"
          height="480"
          radius="full"
          src="/profile.png"
          width="480"
        />
        <div className="max-w-3xl mx-auto flex flex-col gap-8">
          <p className="text-xl sm:text-2xl leading-relaxed text-foreground/80">
            My name is{" "}
            <span className="font-semibold text-foreground">
              Tanausú Fernández
            </span>
            . Born in the{" "}
            <span className="font-semibold text-foreground">
              Canary Islands
            </span>
            , raised near the coast — between ocean winds, beaches and long
            sunsets.
            <br />
            <br />I build software with a strong focus on clarity,
            maintainability and people.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Clean code",
              "Scalable systems",
              "Product-minded",
              "Problem solver",
              "Team-oriented",
              "Performance-focused",
              "UX-aware",
              "Long-term thinking",
            ].map((label) => (
              <span
                key={label}
                className="px-4 py-2 text-sm uppercase tracking-wide
                   rounded-full border border-foreground/20
                   text-foreground/70"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
