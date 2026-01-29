/* eslint-disable @next/next/no-img-element */
import { useTranslation } from 'react-i18next'

type ProjectCardProps = {
  titleKey: string
  subtitleKey: string
  image: string
  url?: string
}

export default function ProjectCard({ titleKey, subtitleKey, image, url }: ProjectCardProps) {
  const { t } = useTranslation()

  return (
    <div className="w-[90vw] max-w-[360px] md:max-w-max md:w-[640px] rounded-2xl overflow-hidden bg-background shadow-2xl">
      <div className="relative h-[200px] md:h-[360px] w-full">
        <img alt={t(titleKey)} className="h-full w-full object-cover" src={image} />
      </div>

      <div className="p-4 md:p-8 flex items-center justify-between gap-4 md:gap-6">
        <div>
          <h3 className="text-lg md:text-2xl font-bold uppercase tracking-tight">{t(titleKey)}</h3>
          <p className="mt-1 text-sm md:text-base text-muted-foreground">{t(subtitleKey)}</p>
        </div>

        <button
          className={`shrink-0 rounded-lg bg-black
            px-4 py-2 text-xs
            md:px-6 md:py-3 md:text-sm
            font-semibold text-white uppercase
            ${!url ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-800'}`}
          disabled={!url}
          onClick={() => {
            if (url) {
              window.open(url, '_blank')
            }
          }}
        >
          {t('projects.view_project')}
        </button>
      </div>
    </div>
  )
}
