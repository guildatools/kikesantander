import { ConfirmedCheck } from "@/components/confirmed-check"
import { WarningBox } from "@/components/warning-box"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { EventDetails } from "@/components/event-details"
import { GoldDivider } from "@/components/gold-divider"

export default function ThankYouPage() {
  return (
    <div className="relative flex min-h-svh flex-col overflow-hidden bg-background">
      {/* Subtle radial vignette */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Top decorative line */}
      <div className="relative z-10 mx-auto h-px w-full max-w-md bg-gradient-to-r from-transparent via-gold/30 to-transparent" aria-hidden="true" />

      <main className="relative z-10 mx-auto flex w-full max-w-xl flex-1 flex-col items-center justify-center px-5 py-12 md:px-8 md:py-16">
        <div className="flex w-full flex-col items-center gap-8 md:gap-10">
          {/* Confirmed check animation */}
          <ConfirmedCheck />

          {/* Headline */}
          <div className="animate-fade-in-up animate-delay-200 text-center">
            <p className="mb-3 text-xs font-medium tracking-[0.3em] uppercase text-gold-dim md:text-sm">
              Kike Santander
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {"Registro"}
              <br />
              <span className="bg-gradient-to-r from-gold-light via-gold to-gold-dim bg-clip-text text-transparent animate-shimmer">
                {"Confirmado!"}
              </span>
            </h1>
          </div>

          <GoldDivider />

          {/* Warning box */}
          <WarningBox />

          {/* WhatsApp CTA */}
          <div className="animate-fade-in-up animate-delay-600 w-full">
            <WhatsAppButton />
          </div>

          {/* Reassurance text */}
          <p className="animate-fade-in-up animate-delay-800 text-center text-sm leading-relaxed text-muted-foreground md:text-base">
            Haz clic en el bot&oacute;n de arriba para unirte al grupo y no perderte nada.
          </p>

          <GoldDivider />

          {/* Event details */}
          <EventDetails />
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/30 py-6">
        <p className="text-center text-xs tracking-wider text-muted-foreground/60">
          {`\u00A9 ${new Date().getFullYear()} Kike Santander. Todos los derechos reservados.`}
        </p>
      </footer>

      {/* Bottom decorative line */}
      <div className="relative z-10 mx-auto h-px w-full max-w-md bg-gradient-to-r from-transparent via-gold/30 to-transparent" aria-hidden="true" />
    </div>
  )
}
