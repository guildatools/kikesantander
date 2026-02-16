import { AlertTriangle } from "lucide-react"

export function WarningBox() {
  return (
    <div className="animate-fade-in-up animate-delay-400 relative overflow-hidden rounded-lg border border-gold/30 bg-card px-5 py-6 md:px-8 md:py-7">
      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 h-4 w-4 border-t border-l border-gold/50" />
      <div className="absolute top-0 right-0 h-4 w-4 border-t border-r border-gold/50" />
      <div className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-gold/50" />
      <div className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-gold/50" />

      <div className="flex items-start gap-4">
        <div className="mt-0.5 flex-shrink-0">
          <AlertTriangle className="h-6 w-6 text-gold" aria-hidden="true" />
        </div>
        <div className="flex-1 space-y-3">
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-gold md:text-base">
            Importante
          </p>
          <p className="text-base leading-relaxed text-foreground md:text-lg">
            No enviaremos correos electr&oacute;nicos. El enlace de acceso a la clase del{" "}
            <span className="font-bold text-gold">02/03</span> ser&aacute; enviado{" "}
            <span className="font-bold uppercase text-gold">&uacute;nicamente</span> por el
            Grupo VIP de WhatsApp.
          </p>
        </div>
      </div>
    </div>
  )
}
