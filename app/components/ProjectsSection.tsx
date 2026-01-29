'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslation } from 'react-i18next'
import { Spacer } from '@heroui/react'

import ProjectCard from './ProjectCard'
import ProjectsMarquee from './ProjectsMarquee'

gsap.registerPlugin(ScrollTrigger)

const PROJECTS = [
  {
    titleKey: 'projects.items.project1.title',
    subtitleKey: 'projects.items.project1.subtitle',
    image: '/projects/project1.png',
    url: 'https://github.com/TanausuFdP/daisy',
  },
  {
    titleKey: 'projects.items.project2.title',
    subtitleKey: 'projects.items.project2.subtitle',
    image: '/projects/project2.png',
    url: 'https://github.com/TanausuFdP/piicate',
  },
  {
    titleKey: 'projects.items.project3.title',
    subtitleKey: 'projects.items.project3.subtitle',
    image: '/projects/project3.jpg',
  },
  {
    titleKey: 'projects.items.project4.title',
    subtitleKey: 'projects.items.project4.subtitle',
    image: '/projects/project4.png',
  },
  {
    titleKey: 'projects.items.project5.title',
    subtitleKey: 'projects.items.project5.subtitle',
    image: '/projects/project5.png',
  },
  {
    titleKey: 'projects.items.project6.title',
    subtitleKey: 'projects.items.project6.subtitle',
    image: '/projects/project6.png',
    url: 'https://www.fitroomlp.es',
  },
]

export default function ProjectsSection() {
  const { t } = useTranslation()

  const [activeIndex, setActiveIndex] = useState(0)

  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])
  const lastIndex = useRef(0)

  useLayoutEffect(() => {
    if (!sectionRef.current) return

    const mm = gsap.matchMedia()

    mm.add('(min-width: 768px)', () => {
      const HOLD = 0.3
      const FLIP = 0.7
      const FINAL_HOLD = 1

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: `+=${PROJECTS.length * 200}%`,
            scrub: true,
          },
        })

        const safeSetIndex = (index: number) => {
          if (lastIndex.current !== index) {
            lastIndex.current = index
            setActiveIndex(index)
          }
        }

        PROJECTS.forEach((_, index) => {
          const current = cardsRef.current[index]
          const next = cardsRef.current[index + 1]

          if (!current || !next) return

          tl.to({}, { duration: HOLD })

          tl.to(current, {
            rotateX: -180,
            duration: FLIP,
            ease: 'none',
          })

          tl.to(
            next,
            {
              rotateX: 0,
              duration: FLIP,
              ease: 'none',
              onComplete: () => safeSetIndex(index + 1),
              onReverseComplete: () => safeSetIndex(index),
            },
            '<'
          )
        })

        tl.to({}, { duration: FINAL_HOLD })
      }, sectionRef)

      return () => ctx.revert()
    })

    return () => mm.revert()
  }, [])

  return (
    <>
      <section
        ref={sectionRef}
        className="relative hidden md:block"
        id="projects"
        style={{ height: `${PROJECTS.length * 200}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <ProjectsMarquee currentProject={t(PROJECTS[activeIndex].titleKey)} />

          <div
            className="relative h-full w-full"
            style={{
              perspective: '1200px',
              transformStyle: 'preserve-3d',
            }}
          >
            {PROJECTS.map((project, index) => (
              <div
                key={project.titleKey}
                ref={el => {
                  if (el) cardsRef.current[index] = el
                }}
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  transform: index === 0 ? 'rotateX(0deg)' : 'rotateX(180deg)',
                  transformOrigin: 'center center',
                  backfaceVisibility: 'hidden',
                }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="md:hidden px-4 py-16" id="projects">
        <h3 className="uppercase text-center font-semibold text-2xl">
          {t('projects.background_title')}
        </h3>
        <Spacer y={4} />
        <div className="w-full flex flex-col items-center gap-8">
          {PROJECTS.map(project => (
            <ProjectCard key={project.titleKey} {...project} />
          ))}
        </div>
      </section>
    </>
  )
}
