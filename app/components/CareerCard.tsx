type CareerCardProps = {
  title: string
  subtitle: string
}

export default function CareerCard({ title, subtitle }: CareerCardProps) {
  return (
    <div className="w-[320px] sm:w-[420px] rounded-2xl bg-background border border-border p-6 shadow-lg">
      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{subtitle}</p>
    </div>
  )
}
