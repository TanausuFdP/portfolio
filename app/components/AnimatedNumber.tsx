'use client'

import { useEffect, useRef, useState } from 'react'

export default function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const el = ref.current

    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)

          const duration = 1200
          const start = performance.now()

          const animate = (time: number) => {
            const progress = Math.min((time - start) / duration, 1)
            const current = Math.floor(progress * value)

            el.textContent = current.toString()

            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              el.textContent = value.toString()
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.6 }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <span ref={ref} className="text-5xl sm:text-6xl font-bold tracking-tight text-foreground">
      0
    </span>
  )
}
