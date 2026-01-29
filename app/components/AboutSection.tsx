/* eslint-disable @next/next/no-img-element */
'use client'

import { useLayoutEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Image, Button, Spacer } from '@heroui/react'
import { IconMailFilled } from '@tabler/icons-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HeartIcon, RocketLaunchIcon } from '@heroicons/react/24/solid'

gsap.registerPlugin(ScrollTrigger)

export default function AboutSection() {
  const { t } = useTranslation()

  const sectionRef = useRef<HTMLDivElement>(null)
  const introRef = useRef<HTMLDivElement>(null)
  const imagesRef = useRef<HTMLDivElement>(null)
  const profileRef = useRef<HTMLDivElement>(null)
  const chipsRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(introRef.current, {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      })

      gsap.from(imagesRef.current?.children || [], {
        opacity: 0,
        y: 40,
        rotate: -5,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: imagesRef.current,
          start: 'top 75%',
        },
      })

      gsap.from(profileRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: profileRef.current,
          start: 'top 70%',
        },
      })

      gsap.from(chipsRef.current?.children || [], {
        opacity: 0,
        y: 20,
        stagger: 0.08,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: chipsRef.current,
          start: 'top 80%',
        },
      })

      gsap.to('.orbit-1', {
        rotate: 360,
        duration: 18,
        repeat: -1,
        ease: 'none',
      })

      gsap.to('.orbit-2', {
        rotate: -360,
        duration: 24,
        repeat: -1,
        ease: 'none',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative px-6 sm:px-10 md:px-8 pb-24 md:pb-32" id="about">
      <div ref={introRef} className="pt-24 md:pt-32 pb-16 md:pb-24 text-center">
        <h2 className="text-base md:text-lg font-bold uppercase mb-4 md:mb-6">
          {t('about.title')}
        </h2>

        <div className="flex flex-col md:gap-2">
          {[
            t('about.roles.first'),
            t('about.roles.second'),
            t('about.roles.third'),
            t('about.roles.fourth'),
            t('about.roles.fifth'),
          ].map(text => (
            <h3
              key={text}
              className="
                text-[2.2rem] leading-tight
                md:text-[4rem] md:leading-none
                xl:text-[5rem]
                uppercase font-bold
              "
            >
              {text}
            </h3>
          ))}
        </div>
      </div>

      <div
        ref={imagesRef}
        className="
            relative flex items-center justify-center
            bottom-36 md:bottom-20
            h-[360px]
            pointer-events-none
            overflow-visible
          "
      >
        <img
          alt="gran canaria landscape"
          className="
              absolute
              w-[150px] md:w-[280px]
              rounded-2xl shadow-xl
              -rotate-6
              -translate-x-20 sm:-translate-x-24 md:-translate-x-64
              translate-y-4
              z-10
            "
          src="/about/photo1.jpeg"
        />

        <img
          alt="profile"
          className="
              absolute
              w-[180px] md:w-[320px]
              rounded-2xl shadow-2xl
              overflow-hidden
              bg-black
              z-20
            "
          src="/about/photo2.jpeg"
        />

        <img
          alt="gran canaria beach"
          className="
              absolute
              w-[150px] md:w-[280px]
              rounded-2xl shadow-xl
              rotate-6
              translate-x-20 md:translate-x-64
              translate-y-4
              z-10
            "
          src="/about/photo3.jpeg"
        />
      </div>

      <Spacer className="hidden md:block" y={20} />

      <div className="flex flex-col xl:flex-row gap-20 items-center mx-auto max-w-6xl">
        <div ref={profileRef} className="hidden md:block relative min-w-[420px]">
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-30">
            <div className="relative max-w-[260px] animate-float">
              <div className="rounded-3xl bg-background/90 backdrop-blur px-4 py-3  border border-foreground/10">
                <p className="text-sm text-foreground/80 text-center">{t('about.slogan')}</p>
              </div>
              <span className="absolute left-6 -bottom-3 h-3 w-3 rounded-full bg-background/90 border border-foreground/10" />
              <span className="absolute left-10 -bottom-6 h-2 w-2 rounded-full bg-background/90 border border-foreground/10" />
            </div>
          </div>

          <Image
            isBlurred
            isZoomed
            alt={t('about.profile_alt')}
            height={420}
            radius="full"
            src="/profile.png"
            width={420}
          />
          <div className="absolute inset-0 flex items-center justify-center orbit-rocket pointer-events-none z-20">
            <div className="-rotate-45">
              <RocketLaunchIcon
                className="w-16 h-16 drop-shadow-rocket"
                style={{ fill: 'url(#rocket-gradient)' }}
              />
              <svg height="0" width="0">
                <defs>
                  <linearGradient id="rocket-gradient" x1="0%" x2="100%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#8125eb" />
                    <stop offset="100%" stopColor="#2532eb" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div className="absolute bottom-4 right-12 animate-heartbeat z-20">
            <HeartIcon
              className="w-20 h-20 drop-shadow-heart"
              style={{ fill: 'url(#heart-gradient)' }}
            />

            <svg height="0" width="0">
              <defs>
                <linearGradient id="heart-gradient" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#ff5f6d" />
                  <stop offset="100%" stopColor="#ffc371" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="flex flex-col gap-10 text-center xl:text-left">
          <p className="text-lg sm:text-xl leading-relaxed text-foreground/80">
            {t('about.description1')}
          </p>

          <p className="text-lg sm:text-xl leading-relaxed text-foreground/80">
            {t('about.description2')}
          </p>

          <div ref={chipsRef} className="flex flex-wrap justify-center xl:justify-start gap-3">
            {[
              'clean_code',
              'scalable_systems',
              'product_minded',
              'problem_solver',
              'team_oriented',
              'ux_aware',
            ].map(key => (
              <span
                key={key}
                className="
                  px-4 py-2 text-sm uppercase tracking-wide
                  rounded-full border border-foreground/20
                  text-foreground/70
                "
              >
                {t(`about.chips.${key}`)}
              </span>
            ))}
          </div>

          <div className="relative inline-flex">
            <span
              className="
      hidden md:block absolute inset-0
      rounded-xl
      bg-[#38ABEC]
      opacity-20
      blur-sm
      animate-ping
      mx-auto max-w-[70%]
      scale-90
    "
            />

            <Button
              className="
      relative z-10
      py-8
      bg-[#38ABEC]
      text-white
      uppercase
      text-2xl
      font-semibold
      tracking-wider w-full
    "
              size="lg"
              startContent={<IconMailFilled className="w-8 h-8" />}
              onPress={() => (window.location.href = `mailto:${t('general.email')}`)}
            >
              {t('about.contact')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
