'use client'

import { useLayoutEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import { Button, Spacer } from '@heroui/react'
import { IconDownload, IconChevronDown } from '@tabler/icons-react'
import gsap from 'gsap'

export default function Welcome() {
  const { t, i18n: i18nextInstance } = useTranslation()

  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const logosRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const scrollHintRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.fromTo(
        titleRef.current?.querySelectorAll('.char')!,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.02,
          ease: 'power3.out',
          duration: 0.5,
        }
      )
        .fromTo(
          logosRef.current?.children!,
          { y: 20, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.05,
            ease: 'power3.out',
            duration: 0.5,
          },
          '-=0.3'
        )
        .fromTo(
          buttonRef.current,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: 'power3.out',
            duration: 0.5,
          },
          '-=0.2'
        )

      gsap.to(scrollHintRef.current, {
        y: 10,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        duration: 1.2,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const splitText = (text: string) =>
    text.split('').map((char, i) => (
      <span key={i} className="char inline-block">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[calc(100vh-6rem)] max-w-full mx-auto flex flex-col items-center justify-center text-center"
      id={t('topbar.first')}
    >
      <div ref={titleRef} className="font-bold uppercase leading-[1.15]">
        <span className="block text-[1.25rem] sm:text-[2rem] tracking-tight">
          {splitText(t('welcome.first'))}
        </span>

        <Spacer y={8} />

        <span className="block text-[2.5rem] sm:text-[5rem] tracking-[-0.1rem]">
          {splitText(t('welcome.second'))}
        </span>
        <span className="block text-[2.5rem] sm:text-[5rem] tracking-[-0.1rem]">
          {splitText(t('welcome.third'))}
        </span>
      </div>

      <div
        ref={logosRef}
        className="mt-12 flex flex-wrap items-center justify-center gap-6 opacity-90 max-w-[40rem]"
      >
        {[
          ['React', '/welcome/react.png', 90],
          ['TypeScript', '/welcome/typescript.png', 90],
          ['Next.js', '/welcome/nextjs.png', 75],
          ['Node.js', '/welcome/nodejs.png', 80],
          ['TailwindCSS', '/welcome/tailwind.png', 80],
          ['Jira', '/welcome/jira.png', 80],
          ['Confluence', '/welcome/confluence.png', 120],
          ['Git', '/welcome/git.png', 70],
          ['GitHub', '/welcome/github.png', 70],
        ].map(([alt, src, width]) => (
          <Image key={alt} alt={String(alt)} height={40} src={String(src)} width={Number(width)} />
        ))}
      </div>

      <div ref={buttonRef} className="mt-10">
        <Button
          className="bg-foreground"
          color="primary"
          radius="sm"
          size="lg"
          startContent={<IconDownload size={20} />}
          onPress={() =>
            window.open(`/cv/CV-${i18nextInstance.language.split('-')[0]}_v5.pdf`, '_blank')
          }
        >
          {t('welcome.download_button')}
        </Button>
      </div>
      <Spacer y={16} />

      <div
        ref={scrollHintRef}
        className="absolute bottom-4 flex flex-col items-center text-xs uppercase tracking-widest text-muted-foreground"
      >
        <span className="mb-1">{t('welcome.continue_hint')}</span>
        <IconChevronDown size={20} />
      </div>
    </section>
  )
}
