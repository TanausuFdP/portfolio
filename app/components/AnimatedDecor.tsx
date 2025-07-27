"use client";

import { useEffect, useState } from "react";

export default function AnimatedDecor() {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxOffset = 400;
      const offset = Math.min(scrollY, maxOffset);

      setScrollOffset(offset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="hidden sm:block">
      <div className="fixed w-screen h-screen">
        <div
          className="relative w-full h-full"
          style={{
            transform: `translateX(${scrollOffset}px)`,
          }}
        >
          <div className="absolute right-48 bottom-8 z-10 bg-primary animate-floatFirst w-12 h-12" />
          <div className="absolute right-5 bottom-80 z-10 bg-primary animate-floatThird w-8 h-8" />
          <div className="absolute right-8 bottom-24 z-10 bg-primary animate-floatFifth w-24 h-24" />
        </div>
      </div>
      <div className="fixed w-screen h-screen">
        <div
          className="relative w-full h-full"
          style={{
            transform: `translateX(-${scrollOffset}px)`,
          }}
        >
          <div className="absolute left-12 bottom-16 z-10 bg-primary animate-floatSecond w-32 h-32" />
          <div className="absolute left-64 bottom-12 z-10 bg-primary animate-floatFourth w-16 h-16" />
          <div className="absolute left-16 bottom-80 z-10 bg-primary animate-floatSixth w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
