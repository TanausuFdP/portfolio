'use client'

type SocialCardProps = {
  title: string
  image: string
  href: string
}

export default function SocialCard({ title, image, href }: SocialCardProps) {
  return (
    <a
      className="group relative overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <img
        alt={title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        src={image}
      />

      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

      <div className="absolute inset-0 flex items-end p-6">
        <span className="text-lg font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {title}
        </span>
      </div>
    </a>
  )
}
