'use client'

import { t } from 'i18next'

import SocialCard from './SocialCard'

export default function WhereToFindMe() {
  return (
    <section className="py-32 max-w-6xl mx-auto px-6">
      <div className="mb-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          {t('where_to_find_me.title')}
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          {t('where_to_find_me.description')}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        <SocialCard href={t('links.linkedin')} image="/linkedin.png" title="LinkedIn" />

        <SocialCard href={t('links.github')} image="/github.png" title="GitHub" />

        <SocialCard href={t('links.threads')} image="/threads.png" title="Threads" />
      </div>
    </section>
  )
}
