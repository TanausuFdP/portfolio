'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { t } from 'i18next'
import { Spacer } from '@heroui/react'

gsap.registerPlugin(ScrollTrigger)

export default function End() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoWrapperRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  const [showFooter, setShowFooter] = useState(false)

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

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const threshold = 10
      const isBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - threshold

      setShowFooter(isBottom)
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
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
              <span className="block text-3xl sm:text-[4rem]">{t('end.cta.line1')}</span>
              <Spacer y={6} />
              <span className="block text-3xl sm:text-[4rem]">{t('end.cta.line2')}</span>
              <Spacer y={6} />
              <span className="block text-3xl sm:text-[4rem]">{t('end.cta.line3')}</span>
            </div>
          </div>
        </div>
      </section>

      <footer
        className={`
          fixed bottom-8 left-1/2 -translate-x-1/2 z-50
          flex flex-col items-center gap-4
          transition-all duration-500 ease-out
          ${showFooter ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
        `}
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
