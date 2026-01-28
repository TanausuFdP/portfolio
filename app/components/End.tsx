'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Spacer } from '@heroui/react'
import { useTranslation } from 'react-i18next'

gsap.registerPlugin(ScrollTrigger)

export default function End() {
  const { t } = useTranslation()

  const sectionRef = useRef<HTMLDivElement>(null)
  const videoWrapperRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !videoWrapperRef.current || !textRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        videoWrapperRef.current,
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
            trigger: sectionRef.current,
            start: 'top top',
            end: '70% bottom',
            scrub: true,
          },
        }
      )

      gsap.fromTo(
        textRef.current?.children!,
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
            trigger: sectionRef.current,
            start: 'top+=15% top',
            end: 'top+=35% top',
            scrub: true,
          },
        }
      )
    }, sectionRef)

    gsap.fromTo(
      footerRef.current,
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'bottom-=20% bottom',
          end: 'bottom bottom',
          scrub: true,
        },
      }
    )

    return () => ctx.revert()
  }, [])

  return (
    <>
      <section ref={sectionRef} className="relative" style={{ height: '220vh' }}>
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
              <span
                className="block text-3xl sm:text-[4rem]"
                style={{ textShadow: '0 5px 16px rgb(0,0,0)' }}
              >
                {t('end.cta.line1')}
              </span>
              <Spacer y={6} />
              <span
                className="block text-3xl sm:text-[4rem]"
                style={{ textShadow: '0 5px 16px rgb(0,0,0)' }}
              >
                {t('end.cta.line2')}
              </span>
              <Spacer y={6} />
              <span
                className="block text-3xl sm:text-[4rem]"
                style={{ textShadow: '0 5px 16px rgb(0,0,0)' }}
              >
                {t('end.cta.line3')}
              </span>
            </div>
          </div>
        </div>
      </section>

      <footer
        ref={footerRef}
        className="
    fixed bottom-8 left-1/2 -translate-x-1/2 z-50
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
    </>
  )
}
