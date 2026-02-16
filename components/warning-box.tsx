import { AlertTriangle } from "lucide-react"

export function WarningBox() {
  return (
    <div className="animate-fade-in-up animate-delay-300 w-full rounded-lg border border-border bg-card px-6 py-6 md:px-8 md:py-7">
      <div className="flex flex-col items-center gap-4 text-center">
        <AlertTriangle className="h-6 w-6 text-primary" aria-hidden="true" />
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary">
          Importante
        </p>
        <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
          {"No enviaremos correos electr\u00f3nicos. El enlace de acceso a la clase del "}
          <span className="font-semibold text-foreground">02/03</span>
          {" ser\u00e1 enviado "}
          <span className="font-semibold text-foreground">{"\u00fanicamente"}</span>
          {" por el Grupo VIP de WhatsApp."}
        </p>
      </div>
    </div>
  )
}
