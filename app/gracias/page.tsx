import { ConfirmedCheck } from "@/components/confirmed-check"
import { WarningBox } from "@/components/warning-box"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { EventDetails } from "@/components/event-details"

export default function ThankYouPage() {
  return (
    <div className="flex min-h-svh flex-col bg-background">
      <main className="mx-auto flex w-full max-w-xl flex-1 flex-col items-center justify-center px-6 py-16 md:py-24">
        <div className="flex w-full flex-col items-center gap-10">

          {/* Check icon */}
          <ConfirmedCheck />

          {/* Headline - mesma hierarquia da LP */}
          <div className="animate-fade-in-up animate-delay-150 flex flex-col items-center gap-4 text-center">
            <h1 className="text-balance font-serif text-5xl leading-[1.1] font-bold text-foreground md:text-6xl lg:text-7xl">
              {"Registro Confirmado!"}
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              {"— Tu lugar est\u00e1 reservado. Ahora, da el paso m\u00e1s importante."}
            </p>
          </div>

          {/* Warning box */}
          <WarningBox />

          {/* CTA section */}
          <div className="animate-fade-in-up animate-delay-450 flex w-full flex-col items-center gap-4">
            <p className="text-sm tracking-wide text-muted-foreground">
              {"Haz clic en el bot\u00f3n de abajo y \u00fanete al grupo:"}
            </p>
            <WhatsAppButton />
          </div>

          {/* Event details - mesmo estilo da LP */}
          <EventDetails />

        </div>
      </main>

      {/* Footer simples */}
      <footer className="py-8">
        <p className="text-center text-xs tracking-wide text-muted-foreground/40">
          {`\u00A9 ${new Date().getFullYear()} Kike Santander. Todos los derechos reservados.`}
        </p>
      </footer>
    </div>
  )
}
