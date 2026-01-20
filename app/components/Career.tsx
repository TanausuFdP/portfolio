"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";

import CareerCard from "./CareerCard";

gsap.registerPlugin(ScrollTrigger);

const CAREER_YEARS = [
  { from: 2017, to: 2020 },
  { from: 2020, to: 2021 },
  { from: 2021, to: 2022 },
  { from: 2023, to: 2024 },
  { from: 2024, to: 2025 },
  { from: 2025, to: 2026 },
  { from: 2026, to: 2027 },
];

export default function CareerSection() {
  const { t } = useTranslation();

  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const yearRef = useRef<HTMLSpanElement>(null);

  const careers = CAREER_YEARS.length;

  useLayoutEffect(() => {
    if (!sectionRef.current || !yearRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${(careers - 1) * 100}%`,
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;

            const index = Math.min(careers - 1, Math.floor(progress * careers));

            const { from, to } = CAREER_YEARS[index];

            const localProgress = progress * careers - index;
            const year = Math.round(from + (to - from) * localProgress);

            yearRef.current!.textContent = year.toString();
          },
        },
      });

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        tl.fromTo(
          card,
          {
            opacity: 0,
            x: 200,
            y: 200,
            rotateX: -30,
            rotateY: 30,
            z: -200,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            rotateX: 0,
            rotateY: 0,
            z: 0,
            ease: "none",
          },
          index
        );

        tl.to(
          card,
          {
            opacity: 0,
            x: -200,
            y: -200,
            rotateX: 30,
            rotateY: -30,
            z: -200,
            ease: "none",
          },
          index + 0.6
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [careers]);

  return (
    <section
      ref={sectionRef}
      className="relative"
      id={t("topbar.fourth")}
      style={{ height: `${careers * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none">
          <span className="text-sm tracking-[0.3em] font-semibold uppercase text-foreground opacity-[0.1]">
            mi trayectoria
          </span>
          <span
            ref={yearRef}
            className="text-[8rem] sm:text-[12rem] font-bold leading-none text-foreground opacity-[0.06]"
          >
            2017
          </span>
        </div>

        <div
          className="relative h-full w-full flex items-center justify-center"
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
          }}
        >
          {Array.from({ length: careers }).map((_, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              className="absolute"
              style={{ transformStyle: "preserve-3d" }}
            >
              <CareerCard
                subtitle={t(`career.list.${i + 1}_subtitle`)}
                title={t(`career.list.${i + 1}_title`)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
