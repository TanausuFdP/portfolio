'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

import { MARQUEE_REPEATS } from '@/types/constants'

export default function MarqueeLine({
  text,
  direction,
  opacity,
  duration,
}: {
  text: string
  direction: 'left' | 'right'
  opacity: number
  duration: number
}) {
  const trackRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!trackRef.current) return

    const track = trackRef.current
    const contentWidth = track.scrollWidth / 2

    const ctx = gsap.context(() => {
      gsap.fromTo(
        track,
        { x: 0 },
        {
          x: -contentWidth,
          duration,
          ease: 'none',
          repeat: -1,
        }
      )
    })

    return () => ctx.revert()
  }, [duration, text])

  return (
    <div
      className="w-full overflow-hidden whitespace-nowrap"
      style={{
        opacity,
        transform: direction === 'right' ? 'scaleX(-1)' : undefined,
      }}
    >
      <div
        ref={trackRef}
        className="flex whitespace-nowrap"
        style={{
          transform: direction === 'right' ? 'scaleX(-1)' : undefined,
        }}
      >
        {Array.from({ length: MARQUEE_REPEATS * 2 }).map((_, i) => (
          <span
            key={i}
            className="mx-16 text-[5rem] sm:text-[8rem] font-bold uppercase text-foreground rotate-y-180"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}
