'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { t } from 'i18next'

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
  const [activeIndex, setActiveIndex] = useState(0)

  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])
  const lastIndex = useRef(0)

  useLayoutEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: `+=${(PROJECTS.length - 1) * 100}%`,
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

        tl.to(current, {
          rotateX: -90,
          ease: 'none',
        })

        tl.to(
          next,
          {
            rotateX: 0,
            ease: 'none',
            onComplete: () => {
              safeSetIndex(index + 1)
            },
            onReverseComplete: () => {
              safeSetIndex(index)
            },
          },
          '<'
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative" style={{ height: `${PROJECTS.length * 100}vh` }}>
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
                transform: index === 0 ? 'rotateX(0deg)' : 'rotateX(-90deg)',
                transformOrigin: 'center bottom',
              }}
            >
              <ProjectCard
                image={project.image}
                subtitleKey={project.subtitleKey}
                titleKey={project.titleKey}
                url={project.url}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
