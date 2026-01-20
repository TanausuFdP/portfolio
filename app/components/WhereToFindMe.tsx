'use client'

import SocialCard from './SocialCard'

export default function WhereToFindMe() {
  return (
    <section className="py-32 max-w-6xl mx-auto px-6">
      <div className="mb-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Dónde encontrarme</h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Estos son los espacios donde comparto mi trabajo, ideas y proyectos.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        <SocialCard
          href="https://www.threads.net/@tuusuario"
          image="/threads.png"
          title="Threads"
        />

        <SocialCard
          href="https://www.linkedin.com/in/tuusuario"
          image="/linkedin.png"
          title="LinkedIn"
        />

        <SocialCard href="https://github.com/tuusuario" image="/github.png" title="GitHub" />
      </div>
    </section>
  )
}
