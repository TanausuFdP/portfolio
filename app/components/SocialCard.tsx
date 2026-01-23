/* eslint-disable @next/next/no-img-element */
'use client'

import Image from 'next/image'

type SocialCardProps = {
  title: string
  image: string
  href: string
}

export default function SocialCard({ title, image, href }: SocialCardProps) {
  return (
    <a className="group relative block" href={href} rel="noopener noreferrer" target="_blank">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
        <img
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={image}
        />

        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
      </div>

      <div className="pointer-events-none absolute -bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center">
        <div className="flex h-14 w-14 rounded-2xl items-center justify-center bg-background border border-border">
          <Image
            alt={title}
            className="rounded-2xl"
            height={56}
            src={`/logos/${title.toLowerCase()}.png`}
            width={56}
          />
        </div>

        <span className="mt-2 text-sm font-medium opacity-80 tracking-wide">{title}</span>
      </div>
    </a>
  )
}
