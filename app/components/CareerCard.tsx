import { Divider, Spacer } from '@heroui/react'

type CareerCardProps = {
  title: string
  subtitles: string[]
}

export default function CareerCard({ title, subtitles }: CareerCardProps) {
  return (
    <div className="w-[320px] sm:w-[420px] md:w-[580px] rounded-lg bg-[#f3f8fd] px-12 py-16 shadow-[0_.25rem_.5rem_-0.25rem_#0003,0_1rem_1.5rem_-1rem_#0003,0_1.5rem_2.5rem_-1.5rem_#0003,0_2.5rem_5rem_-2.5rem_#0003]">
      <h3 className="text-2xl text-center font-bold tracking-tight">{title}</h3>

      <ul className="mt-3">
        {subtitles.map((text, i) => {
          const [main, secondary] = text.split('·')

          return (
            <li key={i}>
              <p className="text-lg leading-relaxed uppercase font-semibold text-center">{main}</p>
              <p className="opacity-60 leading-relaxed uppercase text-center">{secondary}</p>

              {i < subtitles.length - 1 && (
                <>
                  <Spacer y={4} />
                  <Divider />
                  <Spacer y={4} />
                </>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
