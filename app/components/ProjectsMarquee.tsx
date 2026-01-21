'use client'

import { useTranslation } from 'react-i18next'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

import MarqueeLine from './MarqueeLine'

type ProjectsMarqueeProps = {
  currentProject: string
}

export default function ProjectsMarquee({ currentProject }: ProjectsMarqueeProps) {
  const { t } = useTranslation()
  const projectRefTop = useRef<HTMLDivElement>(null)
  const projectRefBottom = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!projectRefTop.current || !projectRefBottom.current) return

    const tl = gsap.timeline()

    tl.to([projectRefTop.current, projectRefBottom.current], {
      opacity: 0,
      y: 0,
      duration: 0.25,
      ease: 'power2.out',
    }).to([projectRefTop.current, projectRefBottom.current], {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: 'power2.out',
    })
  }, [currentProject])

  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center gap-12">
      <div ref={projectRefTop}>
        <MarqueeLine direction="right" duration={120} opacity={0.1} text={currentProject} />
      </div>

      <MarqueeLine
        direction="left"
        duration={90}
        opacity={1}
        text={t('projects.background_title')}
      />

      <div ref={projectRefBottom}>
        <MarqueeLine direction="right" duration={120} opacity={0.1} text={currentProject} />
      </div>
    </div>
  )
}
