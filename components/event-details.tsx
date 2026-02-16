import { Calendar, Radio, Globe } from "lucide-react"

export function EventDetails() {
  return (
    <div className="animate-fade-in-up animate-delay-800 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-muted-foreground md:gap-x-8">
      <div className="flex items-center gap-2">
        <Calendar className="h-4 w-4 text-gold-dim" aria-hidden="true" />
        <span className="text-sm tracking-wide md:text-base">02/03 a las 20h</span>
      </div>
      <span className="hidden text-gold-dim/40 md:inline" aria-hidden="true">|</span>
      <div className="flex items-center gap-2">
        <Radio className="h-4 w-4 text-gold-dim" aria-hidden="true" />
        <span className="text-sm tracking-wide md:text-base">En vivo</span>
      </div>
      <span className="hidden text-gold-dim/40 md:inline" aria-hidden="true">|</span>
      <div className="flex items-center gap-2">
        <Globe className="h-4 w-4 text-gold-dim" aria-hidden="true" />
        <span className="text-sm tracking-wide md:text-base">Online</span>
      </div>
    </div>
  )
}
