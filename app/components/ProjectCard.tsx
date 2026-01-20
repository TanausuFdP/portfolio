import { useTranslation } from 'react-i18next'

type ProjectCardProps = {
  title: string
  subtitle: string
}

export default function ProjectCard({ title, subtitle }: ProjectCardProps) {
  const { t } = useTranslation()

  return (
    <div className="w-[520px] rounded-2xl bg-white shadow-2xl p-8">
      <h3 className="text-3xl font-bold">{title}</h3>
      <p className="mt-2 text-gray-500">{subtitle}</p>

      <button className="mt-6 rounded-full bg-black px-6 py-3 text-white">
        {t('projects.view_project')}
      </button>
    </div>
  )
}
