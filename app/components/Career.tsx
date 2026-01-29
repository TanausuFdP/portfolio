'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslation } from 'react-i18next'

import CareerCard from './CareerCard'

gsap.registerPlugin(ScrollTrigger)

const CAREER_BLOCKS = [
  { from: 2016, to: 2021, items: [1, 2, 3] },
  { from: 2021, to: 2022, items: [4, 5] },
  { from: 2022, to: 2025, items: [6] },
  { from: 2025, to: 2025, items: [7] },
  { from: 2025, to: 2026, items: [8] },
]

export default function CareerSection() {
  const { t } = useTranslation()

  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])
  const yearRef = useRef<HTMLSpanElement>(null)

  const careers = CAREER_BLOCKS.length
  const totalSegments = careers - 1

  useLayoutEffect(() => {
    if (!sectionRef.current || !yearRef.current) return

    const mm = gsap.matchMedia()

    mm.add('(min-width: 768px)', () => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: `+=${totalSegments * 100}%`,
            scrub: true,
            onUpdate: self => {
              const progress = self.progress
              const segmentProgress = progress * totalSegments
              const index = Math.min(CAREER_BLOCKS.length - 1, Math.floor(segmentProgress))

              const { from, to } = CAREER_BLOCKS[index]
              const localProgress = gsap.utils.clamp(0, 1, segmentProgress - index)

              const year = Math.round(from + (to - from) * localProgress)

              yearRef.current!.textContent = year.toString()
            },
          },
        })

        cardsRef.current.forEach((card, index) => {
          if (!card) return

          tl.fromTo(
            card,
            {
              opacity: 0,
              x: '40vw',
              y: '40vh',
              rotateX: -25,
              rotateY: 25,
              z: -300,
            },
            {
              opacity: 1,
              x: '0vw',
              y: '0vh',
              rotateX: 0,
              rotateY: 0,
              z: 0,
              ease: 'none',
            },
            index
          )

          tl.to(
            card,
            {
              opacity: 0,
              x: '-40vw',
              y: '-40vh',
              rotateX: 25,
              rotateY: -25,
              z: -300,
              ease: 'none',
            },
            index + 0.65
          )
        })
      }, sectionRef)

      return () => ctx.revert()
    })

    return () => mm.revert()
  }, [totalSegments])

  return (
    <>
      <section
        ref={sectionRef}
        className="relative hidden md:block"
        id="experience"
        style={{ height: `${careers * 100}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none">
            <span className="text-sm tracking-[0.3em] font-semibold uppercase text-foreground opacity-[0.1]">
              {t('career.title_first')} {t('career.title_second')}
            </span>
            <span
              ref={yearRef}
              className="text-[12rem] font-bold leading-none text-foreground opacity-[0.06]"
            >
              {CAREER_BLOCKS[0].from}
            </span>
          </div>

          <div
            className="relative h-full w-full flex items-center justify-center"
            style={{
              perspective: '1200px',
              transformStyle: 'preserve-3d',
            }}
          >
            {CAREER_BLOCKS.map((block, i) => (
              <div
                key={i}
                ref={el => {
                  if (el) cardsRef.current[i] = el
                }}
                className="absolute"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <CareerCard
                  subtitles={block.items.map(
                    idx => `${t(`career.list.${idx}_title`)} · ${t(`career.list.${idx}_subtitle`)}`
                  )}
                  title={t(`career.list.${block.items[0]}_years`)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="md:hidden px-4 py-16" id="experience">
        <h3 className="text-2xl font-semibold uppercase text-center">
          {t('career.title_first')} {t('career.title_second')}
        </h3>
        <div className="w-full flex flex-col items-center gap-8 mt-6">
          {CAREER_BLOCKS.map((block, i) => (
            <CareerCard
              key={i}
              subtitles={block.items.map(
                idx => `${t(`career.list.${idx}_title`)} · ${t(`career.list.${idx}_subtitle`)}`
              )}
              title={t(`career.list.${block.items[0]}_years`)}
            />
          ))}
        </div>
      </section>
    </>
  )
}
