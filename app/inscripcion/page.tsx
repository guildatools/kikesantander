import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

export default function InscripcionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#1a0a2e]">
        {/* Background image — visible only on desktop */}
        <div className="hidden lg:block absolute inset-0">
          <Image src="/images/kike-edicion-dolor3.jpg" alt="Background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a2e]/80 via-[#2d1b4e]/70 to-[#1a0a2e]/80" />
        </div>

        {/* Mobile: purple solid background */}
        <div className="absolute inset-0 lg:hidden bg-gradient-to-b from-[#2d1b4e] to-[#1a0a2e]" />

        {/* === MOBILE LAYOUT === */}
        <div className="relative z-10 lg:hidden">
          {/* Top strip: image left + headline right */}
          <div className="flex items-stretch">
            {/* Kike photo — left half */}
            <div className="relative w-1/2 min-h-[280px]">
              <Image
                src="/images/whatsapp-20image-202025-07-18-20at-2020.png"
                alt="Kike Santander"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            {/* Headline — right half */}
            <div className="w-1/2 flex items-center px-4 py-6">
              <h1 className="text-2xl font-bold leading-tight text-white text-balance">
                Aprende a componer y vivir de la música
              </h1>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/20 mx-4" />

          {/* Bottom content */}
          <div className="px-5 py-8 space-y-5 text-white">
            <h2 className="text-base text-white/90 leading-relaxed">
              — incluso si nunca has escrito una sola línea.
            </h2>
            <p className="text-base text-white/80 leading-relaxed">
              Vas a descubrir el método de composición del{" "}
              <span className="text-accent font-semibold">ganador de 4 Grammys, Kike Santander</span>, y el camino
              real para vivir como compositor.
            </p>
            <p className="text-sm text-white/90">Haz clic en el botón de abajo y regístrate gratis:</p>
            <a
              href="https://chat.whatsapp.com/LqP2BGm7NbRCJM08PVO4TM"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white text-base px-8 py-5 rounded-xl shadow-xl transition-all font-medium w-full"
            >
              QUIERO APRENDER
            </a>
            <p className="text-white/70 text-sm">
              09 de Marzo a las 19h | <span className="text-accent">En vivo</span> | Online y gratuito
            </p>
          </div>
        </div>

        {/* === DESKTOP LAYOUT === */}
        <div className="hidden lg:flex container mx-auto max-w-7xl relative z-10 min-h-screen items-end px-8 pb-0 pt-24">
          <div className="grid lg:grid-cols-2 gap-8 items-end w-full">
            {/* Left: PNG Image */}
            <div className="relative h-[750px] xl:h-[850px]">
              <Image
                src="/images/whatsapp-20image-202025-07-18-20at-2020.png"
                alt="Kike Santander"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>

            {/* Right: Content */}
            <div className="text-white space-y-8 pb-16">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-balance">
                  Aprende a componer y vivir de la música
                </h1>
                <h2 className="text-xl lg:text-2xl text-white/90 leading-relaxed text-pretty">
                  — incluso si nunca has escrito una sola línea.
                </h2>
              </div>

              <p className="text-lg lg:text-xl text-white/80 leading-relaxed">
                Vas a descubrir el método de composición del{" "}
                <span className="text-accent font-semibold">ganador de 4 Grammys, Kike Santander</span>, y el camino
                real para vivir como compositor.
              </p>

              <div className="space-y-4 pt-4">
                <p className="text-base text-white/90">Haz clic en el botón de abajo y regístrate gratis:</p>
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all"
                >
                  <a href="https://chat.whatsapp.com/LqP2BGm7NbRCJM08PVO4TM" target="_blank" rel="noopener noreferrer">
                    QUIERO APRENDER
                  </a>
                </Button>
              </div>

              <div className="pt-4">
                <p className="text-white/70 text-base">
                  09 de Marzo a las 19h | <span className="text-accent">En vivo</span> | Online y gratuito
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-foreground">
            MIRA LO QUE VAS A APRENDER:
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Benefit 1 */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Cómo puedes componer canciones</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Vas a entender por dónde empezar, incluso sin experiencia, y cómo transformar emociones e ideas en
                    letras auténticas que conectan.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Cómo funciona el mercado musical para compositores
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Te mostraremos cómo un compositor gana dinero hoy, qué puertas se pueden abrir y cómo posicionarte
                    en esta industria.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Cómo aprender el método exclusivo de Kike</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Por primera vez, Kike revelará su sistema para crear canciones exitosas que han marcado
                    generaciones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="relative px-4 py-16 md:py-24 overflow-hidden" style={{backgroundColor: '#1a0a2e'}}>
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-white">
            KIKE SANTANDER
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Bio */}
            <div className="space-y-6 text-white/90 text-lg leading-relaxed">
              <p>
                Kike Santander es compositor, productor musical, arreglista y empresario, reconocido por su trabajo con
                grandes artistas de la música latina como{" "}
                <span className="text-accent font-semibold">
                  Gloria Estefan, Thalía, David Bisbal y Alejandro Fernández
                </span>
                . Es considerado uno de los compositores más influyentes de la actualidad.
              </p>

              <p>
                A lo largo de más de <span className="text-accent font-semibold">40 años de trayectoria</span> en la
                industria, Kike ha ganado <span className="text-accent font-semibold text-2xl">4 premios Grammy</span>{" "}
                gracias a sus composiciones.
              </p>

              <p className="font-semibold text-xl text-white">
                Su método para componer nunca antes había sido revelado…
              </p>

              <p className="text-accent text-xl font-bold">
                Pero eso está a punto de cambiar. Muy pronto, este evento único se hará realidad.
              </p>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="relative aspect-square max-w-md mx-auto border border-primary/20 shadow-2xl overflow-hidden rounded-xl">
                <Image
                  src="/images/kike-guitar-hero.png"
                  alt="Kike Santander con guitarra"
                  fill
                  className="object-cover object-[center_30%]"
                />
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 md:mt-16 text-center space-y-6">
            <p className="text-white/90 text-lg">Haz clic en el botón de abajo y regístrate gratis:</p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all"
            >
              <a href="https://chat.whatsapp.com/LqP2BGm7NbRCJM08PVO4TM" target="_blank" rel="noopener noreferrer">
                QUIERO PARTICIPAR
              </a>
            </Button>
            <div className="pt-4">
              <p className="text-white/70 text-base">
                09 de Marzo a las 19h | <span className="text-accent">En vivo</span> | Online y gratuito
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a0a2e] py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-white/50 text-sm">© 2025 Kike Santander Academy — Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  )
}
