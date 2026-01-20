"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ProjectCard from "./ProjectCard";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  { title: "Parable", subtitle: "Branding, design, development" },
  { title: "Loka", subtitle: "Design, development" },
  { title: "DeepFlow", subtitle: "Design, development" },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${(PROJECTS.length - 1) * 100}%`,
          scrub: true,
        },
      });

      PROJECTS.forEach((_, index) => {
        const current = cardsRef.current[index];
        const next = cardsRef.current[index + 1];

        if (!current || !next) return;

        tl.to(current, { rotateX: -90, ease: "none" }, "+=1").to(
          next,
          { rotateX: 0, ease: "none" },
          "<",
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-neutral-100"
      style={{ height: `${PROJECTS.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          className="relative h-full w-full"
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
          }}
        >
          {PROJECTS.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="absolute inset-0 flex items-center justify-center"
              style={{
                transform: index === 0 ? "rotateX(0deg)" : "rotateX(-90deg)",
                transformOrigin: "center bottom",
              }}
            >
              <ProjectCard subtitle={project.subtitle} title={project.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
