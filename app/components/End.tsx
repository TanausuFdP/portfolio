"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function End() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);

  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    if (!sectionRef.current || !videoWrapperRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        videoWrapperRef.current,
        {
          width: "100vw",
          height: "100vh",
          borderRadius: "0rem",
        },
        {
          width: "720px",
          height: "300px",
          borderRadius: "9999px",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "70% bottom",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const threshold = 10;
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - threshold;

      setShowFooter(isBottom);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative"
        style={{ height: "220vh" }}
      >
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div
            ref={videoWrapperRef}
            className="relative overflow-hidden flex items-center justify-center bg-black"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
              src="/end.mp4"
            />

            <div className="relative z-10 px-6 text-center">
              <span className="text-white text-3xl sm:text-[4rem] font-bold tracking-wide uppercase leading-tight">
                Let’s build something meaningful
              </span>
            </div>
          </div>
        </div>
      </section>

      <footer
        className={`
          fixed bottom-0 left-0 right-0 z-50
          flex flex-col items-center gap-4
          pb-12 pt-4
          bg-background/80 backdrop-blur
          transition-all duration-500 ease-out
          ${
            showFooter
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }
        `}
      >
        <div className="flex gap-6 uppercase font-bold text-lg">
          <a
            className="hover:text-foreground transition-colors"
            href="https://www.linkedin.com/in/tuusuario"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            className="hover:text-foreground transition-colors"
            href="https://github.com/tuusuario"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            className="hover:text-foreground transition-colors"
            href="https://www.threads.net/@tuusuario"
            rel="noopener noreferrer"
            target="_blank"
          >
            Threads
          </a>
        </div>

        <span className="opacity-65 font-semibold">
          © {new Date().getFullYear()} Tana. Thanks for visiting!
        </span>
      </footer>
    </>
  );
}
