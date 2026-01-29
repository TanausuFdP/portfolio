'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslation } from 'react-i18next'

gsap.registerPlugin(ScrollTrigger)

export default function End() {
  const { t } = useTranslation()

  const sectionRef = useRef<HTMLDivElement>(null)
  const videoWrapperRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!sectionRef.current || !videoWrapperRef.current || !textRef.current || !footerRef.current)
      return

    const mm = gsap.matchMedia()

    mm.add('(min-width: 768px)', () => {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          videoWrapperRef.current!,
          {
            width: '100vw',
            height: '100vh',
            borderRadius: '0rem',
          },
          {
            width: '720px',
            height: '300px',
            borderRadius: '9999px',
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current!,
              start: 'top top',
              end: '70% bottom',
              scrub: true,
            },
          }
        )

        gsap.fromTo(
          textRef.current!.children,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current!,
              start: 'top+=15% top',
              end: 'top+=35% top',
              scrub: true,
            },
          }
        )

        gsap.fromTo(
          footerRef.current!,
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current!,
              start: 'bottom-=20% bottom',
              end: 'bottom bottom',
              scrub: true,
            },
          }
        )
      }, sectionRef)

      return () => ctx.revert()
    })

    return () => mm.revert()
  }, [])

  return (
    <>
      <section ref={sectionRef} className="relative hidden md:block" style={{ height: '220vh' }}>
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

            <div
              ref={textRef}
              className="relative z-10 px-6 text-center text-white uppercase font-bold tracking-wide"
            >
              <span className="block text-[4rem]" style={{ textShadow: '0 5px 16px rgb(0,0,0)' }}>
                {t('end.cta.line1')}
              </span>
              <span className="block text-[4rem]" style={{ textShadow: '0 5px 16px rgb(0,0,0)' }}>
                {t('end.cta.line2')}
              </span>
              <span className="block text-[4rem]" style={{ textShadow: '0 5px 16px rgb(0,0,0)' }}>
                {t('end.cta.line3')}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="md:hidden px-4 pb-[12rem] flex flex-col items-center gap-12">
        <div className="relative w-full aspect-video overflow-hidden rounded-3xl bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover z-0"
            src="/end.mp4"
          />

          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white uppercase font-bold tracking-wide">
            <span className="block text-3xl" style={{ textShadow: '0 5px 16px rgb(0,0,0)' }}>
              {t('end.cta.line1')}
            </span>
            <span className="block text-3xl" style={{ textShadow: '0 5px 16px rgb(0,0,0)' }}>
              {t('end.cta.line2')}
            </span>
            <span className="block text-3xl" style={{ textShadow: '0 5px 16px rgb(0,0,0)' }}>
              {t('end.cta.line3')}
            </span>
          </div>
        </div>
      </section>

      <footer
        ref={footerRef}
        className="
          md:hidden mx-auto pb-12 z-50
          flex flex-col items-center gap-4
          pointer-events-auto
        "
      >
        <div className="flex gap-6 uppercase font-bold text-lg">
          <a
            className="hover:text-foreground transition-colors"
            href={t('links.linkedin')}
            rel="noopener noreferrer"
            target="_blank"
          >
            {t('end.links.linkedin')}
          </a>
          <a
            className="hover:text-foreground transition-colors"
            href={t('links.github')}
            rel="noopener noreferrer"
            target="_blank"
          >
            {t('end.links.github')}
          </a>
          <a
            className="hover:text-foreground transition-colors"
            href={t('links.threads')}
            rel="noopener noreferrer"
            target="_blank"
          >
            {t('end.links.threads')}
          </a>
        </div>

        <span className="opacity-60 font-semibold text-sm">
          © {new Date().getFullYear()} Tana. {t('end.footer.thanks')}
        </span>
      </footer>
      <footer
        ref={footerRef}
        className="
    hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-50
    md:flex flex-col items-center gap-4
    pointer-events-auto
  "
      >
        <div className="flex gap-6 uppercase font-bold text-lg">
          <a
            className="hover:text-foreground transition-colors"
            href={t('links.linkedin')}
            rel="noopener noreferrer"
            target="_blank"
          >
            {t('end.links.linkedin')}
          </a>
          <a
            className="hover:text-foreground transition-colors"
            href={t('links.github')}
            rel="noopener noreferrer"
            target="_blank"
          >
            {t('end.links.github')}
          </a>
          <a
            className="hover:text-foreground transition-colors"
            href={t('links.threads')}
            rel="noopener noreferrer"
            target="_blank"
          >
            {t('end.links.threads')}
          </a>
        </div>

        <span className="opacity-60 font-semibold text-sm">
          © {new Date().getFullYear()} Tana. {t('end.footer.thanks')}
        </span>
      </footer>
    </>
  )
}
