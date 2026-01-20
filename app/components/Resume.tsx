'use client'

import { useTranslation } from 'react-i18next'
import { Spacer } from '@heroui/react'

import AnimatedNumber from './AnimatedNumber'

export default function Resume() {
  const { t } = useTranslation()

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[6rem] sm:text-[10rem] font-bold tracking-tight text-foreground opacity-[0.04] text-center leading-none">
          Happy clients,
          <br />
          happy me.
        </span>
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 text-center">
          <div className="flex flex-col">
            <AnimatedNumber value={5} />
            <Spacer y={6} />
            <span className="text-sm uppercase tracking-wide text-muted-foreground">
              {t('resume.years_second')}
            </span>
            <span className="text-sm uppercase font-semibold text-muted-foreground">
              {t('resume.years_third')}
            </span>
          </div>

          <div className="flex flex-col">
            <AnimatedNumber value={17} />
            <Spacer y={6} />
            <span className="text-sm uppercase tracking-wide text-muted-foreground">
              {t('resume.projects_second')}
            </span>
            <span className="text-sm uppercase font-semibold text-muted-foreground">
              {t('resume.projects_third')}
            </span>
          </div>

          <div className="flex flex-col">
            <AnimatedNumber value={49} />
            <Spacer y={6} />
            <span className="text-sm uppercase tracking-wide text-muted-foreground">
              {t('resume.users_second')}
            </span>
            <span className="text-sm uppercase font-semibold text-muted-foreground">
              {t('resume.users_third')}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
