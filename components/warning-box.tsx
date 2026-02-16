import { AlertTriangle } from "lucide-react"

export function WarningBox() {
  return (
    <div className="animate-fade-in-up animate-delay-400 w-full rounded-xl border border-gold/20 bg-[rgba(196,164,100,0.04)] px-6 py-6 md:px-8 md:py-8">
      <div className="flex flex-col items-center gap-4 text-center md:flex-row md:items-start md:gap-5 md:text-left">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-gold/30 bg-[rgba(196,164,100,0.08)]">
          <AlertTriangle className="h-5 w-5 text-gold" aria-hidden="true" />
        </div>
        <div className="space-y-2">
          <p className="text-sm font-bold tracking-[0.25em] uppercase text-gold md:text-base">
            Importante
          </p>
          <p className="text-base leading-relaxed text-foreground md:text-lg">
            No enviaremos correos electr&oacute;nicos. El enlace de acceso a la clase del{" "}
            <span className="font-bold text-gold">02/03</span> ser&aacute; enviado{" "}
            <span className="font-bold text-gold">&uacute;nicamente</span> por el
            Grupo VIP de WhatsApp.
          </p>
        </div>
      </div>
    </div>
  )
}
