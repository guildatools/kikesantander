import { ConfirmedCheck } from "@/components/confirmed-check"
import { WarningBox } from "@/components/warning-box"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { EventDetails } from "@/components/event-details"

export default function ThankYouPage() {
  return (
    <div className="relative flex min-h-svh flex-col bg-background">
      {/* Top gold accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gold to-transparent" aria-hidden="true" />

      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center px-5 py-16 md:px-8 md:py-24">
        <div className="flex w-full flex-col items-center gap-10 md:gap-14">
          {/* Confirmed check animation */}
          <ConfirmedCheck />

          {/* Headline */}
          <div className="animate-fade-in-up animate-delay-200 text-center">
            <p className="mb-4 text-sm font-medium tracking-[0.35em] uppercase text-gold-dim md:text-base">
              Kike Santander
            </p>
            <h1 className="text-balance font-serif text-5xl leading-none font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
              {"Registro Confirmado!"}
            </h1>
            <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-muted-foreground md:text-xl">
              {"Tu lugar est\u00e1 reservado. Ahora, da el paso m\u00e1s importante:"}
            </p>
          </div>

          {/* Warning box */}
          <WarningBox />

          {/* WhatsApp CTA */}
          <div className="animate-fade-in-up animate-delay-600 w-full max-w-lg">
            <p className="mb-4 text-center text-sm tracking-[0.2em] uppercase text-gold-dim">
              {"Haz clic en el bot\u00f3n de abajo y \u00fanete al grupo:"}
            </p>
            <WhatsAppButton />
          </div>

          {/* Event details */}
          <EventDetails />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/20 py-8">
        <p className="text-center text-xs tracking-wider text-muted-foreground/50">
          {`\u00A9 ${new Date().getFullYear()} Kike Santander. Todos los derechos reservados.`}
        </p>
      </footer>
    </div>
  )
}
