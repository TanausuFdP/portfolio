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
      <div
        className="
          relative overflow-hidden rounded-2xl border border-border bg-background shadow-sm
          md:transition-all md:duration-300
          md:group-hover:-translate-y-2 md:group-hover:shadow-xl
        "
      >
        <img
          alt={title}
          className="
            h-full w-full object-cover
            md:transition-transform md:duration-500
            md:group-hover:scale-105
          "
          src={image}
        />

        <div
          className="
            absolute inset-0 bg-black/0
            md:transition-colors md:duration-300
            md:group-hover:bg-black/20
          "
        />
      </div>

      <div className="pointer-events-none absolute -bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-background border border-border">
          <Image
            alt={title}
            className="rounded-2xl"
            height={56}
            src={`/logos/${title.toLowerCase()}.png`}
            width={56}
          />
        </div>

        <span className="mt-2 text-sm font-medium tracking-wide opacity-80">{title}</span>
      </div>
    </a>
  )
}
