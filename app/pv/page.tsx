import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  CheckCircle2,
  Music,
  Mic2,
  Headphones,
  Piano,
  Star,
  Monitor,
  Clock,
  CalendarOff,
  RefreshCw,
  CalendarCheck,
  MessageCircle,
  ChevronDown,
  CreditCard,
  ShieldCheck,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center px-4 py-16 md:py-24 overflow-hidden">
      <Image
        src="/images/kike-edicion-dolor3.jpg"
        alt="Background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a2e]/90 via-[#2d1b4e]/80 to-[#1a0a2e]/90 z-[1]" />
      <div className="absolute inset-0 z-[2] opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-6">
          <p className="text-accent font-semibold text-sm md:text-base tracking-widest uppercase">
            Academia Santander
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
            Aprende a Componer Canciones que Conectan y Emocionan — Aunque Nunca Hayas Escrito una Sola Línea
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed text-pretty">
            El <span className="text-accent font-semibold">Curso Integral de Composición Musical</span> de la Academia
            Santander, creado por <span className="text-white font-semibold">Kike Santander</span>, compositor y
            productor ganador de 4 premios Grammy, te muestra paso a paso el método detrás de canciones que han marcado
            generaciones.
          </p>
          <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            Si sientes que tienes música adentro, pero te cuesta pasar de ideas sueltas a canciones terminadas, estás en
            el lugar correcto. Aquí no vas a recibir &quot;tips sueltos&quot;, sino un mapa completo para componer con
            claridad, emoción y oficio profesional, sin necesidad de tener una formación académica previa.
          </p>

          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">+120</p>
              <p className="text-white/70 text-sm">lecciones en video</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">15</p>
              <p className="text-white/70 text-sm">capítulos</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">5</p>
              <p className="text-white/70 text-sm">grandes bloques</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">24/7</p>
              <p className="text-white/70 text-sm">acceso online</p>
            </div>
          </div>

          <div className="pt-6">
            <a 
              href="https://pay.hotmart.com/W104434660D?checkoutMode=10" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white text-base md:text-lg px-10 py-7 rounded-xl shadow-xl hover:shadow-2xl transition-all font-medium"
            >
              Quiero aprender a componer canciones
            </a>
          </div>

          <p className="text-white/50 text-sm max-w-2xl mx-auto">
            Método probado por décadas de trabajo real con artistas como Gloria Estefan, Alejandro Fernández, Thalía,
            Cristian Castro, Ricardo Montaner, David Bisbal y muchos más.
          </p>
        </div>
      </div>
    </section>
  )
}

function TargetAudienceSection() {
  const audiences = [
    {
      icon: <Music className="w-8 h-8 text-accent" />,
      title: "Músicos autodidactas",
      description:
        "Tocas de oído, sabes hacer acordes o melodías, pero no tienes un método para componer canciones completas.",
    },
    {
      icon: <Mic2 className="w-8 h-8 text-accent" />,
      title: "Cantantes y compositores",
      description:
        "Tienes ideas, frases, melodías o textos sueltos y quieres convertirlos en canciones que realmente funcionen.",
    },
    {
      icon: <Headphones className="w-8 h-8 text-accent" />,
      title: "Productores y beatmakers",
      description:
        "Sabes producir pistas, pero sientes que te falta profundidad en armonía, melodía y estructura para llevar tus producciones a otro nivel.",
    },
    {
      icon: <Piano className="w-8 h-8 text-accent" />,
      title: "Principiantes con oído musical",
      description:
        "No tienes formación, pero reconoces cuando algo suena bien y te mueres de ganas de aprender a componer desde cero.",
    },
  ]

  return (
    <section className="px-4 py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            ¿Este Curso es Para Ti?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            No necesitas ser &quot;músico académico&quot;. Necesitas amar la música y querer aprender en serio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {audiences.map((item, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 border-border/50 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-xl bg-primary/10">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-10 text-base max-w-3xl mx-auto">
          Si te ves en alguna de estas descripciones, este curso está diseñado para que puedas avanzar con claridad, sin
          abrumarte y sin perder la magia de la música.
        </p>
      </div>
    </section>
  )
}

function ResultsSection() {
  const results = [
    "Pasar de ideas sueltas a canciones completas con estructura clara (verso, pre-coro, coro, puente).",
    "Componer melodías memorables, de esas que la gente tararea y no se le olvidan.",
    "Entender la armonía de forma práctica, sin miedo a la teoría ni a los nombres complicados.",
    "Escribir letras honestas, claras y profundas, que representen lo que sientes (y no solo frases bonitas).",
    "Usar los elementos de la música (ritmo, armonía, melodía, letra) a favor de la emoción que quieres provocar.",
    "Construir un método personal de composición, en lugar de depender únicamente de \"la inspiración\".",
    "Ganar confianza creativa para mostrar tus canciones, producirlas, grabarlas o presentarlas a otros.",
  ]

  return (
    <section className="relative bg-gradient-to-br from-[#2d1b4e] via-[#3d2565] to-[#1a0a2e] px-4 py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
            ¿Qué Vas a Lograr con el Curso Integral de Composición?
          </h2>
        </div>

        <div className="space-y-5">
          {results.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-white/90 text-lg leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-accent font-semibold text-lg mt-12 max-w-3xl mx-auto">
          Este curso está pensado para que, al terminarlo, puedas decir con tranquilidad: &quot;sí, sé componer una
          canción de principio a fin&quot;.
        </p>
      </div>
    </section>
  )
}

function CurriculumSection() {
  const blocks = [
    {
      number: "01",
      title: "Fundamentos de la canción",
      description: "Entiendes qué hace que una canción funcione: estructura, secciones, flujo emocional.",
    },
    {
      number: "02",
      title: "Melodía y emoción",
      description:
        "Aprendes a crear melodías cantables, memorables y coherentes con la historia que quieres contar.",
    },
    {
      number: "03",
      title: "Armonía aplicada",
      description:
        "Descubres cómo usar acordes, tensiones y movimientos armónicos para sostener y potenciar tu melodía.",
    },
    {
      number: "04",
      title: "Letras que conectan",
      description:
        "Trabajas la palabra: ideas, imágenes, giros, claridad, honestidad emocional y ritmo del texto.",
    },
    {
      number: "05",
      title: "Método y disciplina creativa",
      description:
        "Organizas tu proceso: cómo empezar, cómo no trabarte, cómo terminar canciones y construir un catálogo.",
    },
    {
      number: "06",
      title: "Mercado y carrera musical",
      description:
        "Descubre cómo funciona el mercado y cómo es posible construir una carrera musical como compositor.",
    },
  ]

  const formats = [
    "Lecciones grabadas en alta calidad, que puedes ver a tu ritmo.",
    "Ejercicios prácticos para aplicar cada concepto en tus propias ideas.",
    "Ejemplos reales de canciones latinas analizados paso a paso.",
    "Material de apoyo en PDF y audios de ejemplo.",
    "Acceso online desde cualquier lugar y dispositivo.",
  ]

  return (
    <section className="px-4 py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            ¿Qué Incluye el Curso Integral de Composición Musical?
          </h2>
          <p className="text-muted-foreground text-lg">
            No es una masterclass suelta: es un programa completo, organizado por etapas.
          </p>

          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">+120</p>
              <p className="text-muted-foreground text-sm">lecciones en video</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">15</p>
              <p className="text-muted-foreground text-sm">capítulos</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">5</p>
              <p className="text-muted-foreground text-sm">grandes bloques</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">24/7</p>
              <p className="text-muted-foreground text-sm">acceso online</p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-foreground mb-8">Bloques principales:</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {blocks.map((block) => (
            <Card key={block.number} className="p-6 border-border/50 hover:border-primary/30 transition-colors">
              <p className="text-4xl font-bold text-primary/30 mb-3">{block.number}</p>
              <h4 className="text-lg font-bold text-foreground mb-2">{block.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{block.description}</p>
            </Card>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-foreground mb-8">Formato del curso:</h3>
        <div className="space-y-4">
          {formats.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground text-lg leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AuthoritySection() {
  const credentials = [
    "Ganador de 4 premios Grammy por su trabajo como compositor y productor.",
    "Más de 30 años en la industria musical.",
    "Canciones que han liderado listas de radio y plataformas digitales.",
    "Experiencia con diversos géneros: pop, balada, regional, tropical, urbano, worship.",
    "Médico de formación, con una mirada profunda sobre la mente, el cuerpo y la emoción.",
  ]

  return (
    <section className="relative bg-gradient-to-br from-[#2d1b4e] via-[#3d2565] to-[#1a0a2e] px-4 py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
            ¿Por Qué Aprender a Componer con Kike Santander?
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Porque no es teoría de libro: es la experiencia real de alguien que ha vivido de la composición toda su
            vida.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              Creció escuchando música todo el día. En su casa sonaban bambucos, boleros, mariachis... y ahí entendió
              que una canción puede cambiarlo todo: el ánimo, un recuerdo, incluso la dirección de tu vida. Décadas
              después, después de escribir y producir música para{" "}
              <span className="text-accent font-semibold">
                Gloria Estefan, Alejandro Fernández, Thalía, Cristian Castro, Ricardo Montaner, David Bisbal
              </span>{" "}
              y muchos otros, sigue creyendo lo mismo: una buena canción puede abrir puertas que ningún otro lenguaje
              abre.
            </p>

            <div className="space-y-4">
              {credentials.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-white/80 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <Card className="relative aspect-[3/4] max-w-md mx-auto bg-white border-primary/20 shadow-2xl overflow-hidden p-0">
              <Image
                src="/images/kike-guitar-hero.png"
                alt="Kike Santander con guitarra"
                fill
                className="object-cover object-top"
              />
            </Card>
          </div>
        </div>

        <Card className="bg-white/5 border-accent/20 p-8 md:p-10 max-w-3xl mx-auto">
          <p className="text-white/90 text-xl italic leading-relaxed text-center">
            &quot;En este curso no te enseño a ser &apos;otro Kike Santander&apos;. Te doy mi método para que puedas
            convertirte en el compositor que tú estás llamado a ser.&quot;
          </p>
          <p className="text-accent font-semibold text-center mt-4">— Kike Santander</p>
        </Card>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  const features = [
    {
      icon: <Monitor className="w-8 h-8 text-accent" />,
      title: "Formato 100% online",
      description: "Accedes a la plataforma desde tu computadora, tablet o celular.",
    },
    {
      icon: <Clock className="w-8 h-8 text-accent" />,
      title: "A tu ritmo",
      description:
        "Puedes ver las lecciones cuando quieras, pausar, retroceder y repetir las veces que necesites.",
    },
    {
      icon: <CalendarOff className="w-8 h-8 text-accent" />,
      title: "Sin horarios fijos",
      description: "Ideal si tienes trabajo, familia u otros estudios.",
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-accent" />,
      title: "Actualizaciones incluidas",
      description:
        "Cuando se sumen nuevas lecciones o materiales al curso, las verás directamente en tu cuenta.",
    },
    {
      icon: <CalendarCheck className="w-8 h-8 text-accent" />,
      title: "Acceso durante 1 año",
      description: "Tiempo suficiente para completar el curso a tu propio ritmo.",
    },
  ]

  return (
    <section className="px-4 py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-foreground text-balance">
          ¿Cómo Funciona el Curso en la Práctica?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <Card key={index} className="p-6 border-border/50 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-xl bg-primary/10">{item.icon}</div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-10 text-base max-w-3xl mx-auto">
          El curso está diseñado para que puedas avanzar incluso si hoy sientes que estás &quot;muy verde&quot;. Lo
          importante no es dónde estás hoy, sino que decidas empezar y seas constante.
        </p>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Tenía mil ideas sueltas y nunca lograba terminar una canción. Con el curso, por primera vez sentí que tenía un mapa claro. Hoy ya tengo varios temas completos y por fin me animo a mostrarlos.",
      author: "Cantautor independiente",
    },
    {
      quote:
        "Yo venía del mundo del beat y la producción. Este curso me ayudó a entender la estructura y la emoción de la canción. Ahora mis producciones tienen otra profundidad y sé por qué algo funciona y por qué no.",
      author: "Productor musical",
    },
    {
      quote:
        "Pensé que esto era solo para músicos avanzados. Me sorprendió lo claro y cercano que es el lenguaje. Voy despacio, pero ya escribí mi primera canción completa, y eso para mí es enorme.",
      author: "Principiante",
    },
  ]

  return (
    <section className="relative bg-gradient-to-br from-[#2d1b4e] via-[#3d2565] to-[#1a0a2e] px-4 py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-white text-balance">
          Lo que Dicen Quienes Ya Empezaron a Aplicar Este Método
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <Card key={index} className="bg-white/5 border-white/10 p-6 md:p-8">
              <p className="text-white/90 italic leading-relaxed mb-6">&quot;{item.quote}&quot;</p>
              <p className="text-accent font-semibold text-sm">— Alumno, {item.author}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingSection() {
  const benefits = [
    "Primer gran programa de la Academia Santander.",
    "Acceso online para estudiar a tu ritmo.",
    "Enfoque específico para compositores de habla hispana.",
    "Método práctico, emocional y profundo.",
    "+120 lecciones organizadas paso a paso.",
  ]

  return (
    <section className="px-4 py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Este es el Momento de Tomarte en Serio Tu Relación con la Música
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Puedes seguir viendo tutoriales sueltos, probando fórmulas al azar y dejando canciones a medias... o puedes
            darte el regalo de aprender un método completo, ordenado y probado, creado a partir de décadas de trabajo
            real en la industria musical.
          </p>
        </div>

        <div className="space-y-3 mb-12 max-w-xl mx-auto">
          {benefits.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-foreground leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        <Card className="bg-gradient-to-br from-[#2d1b4e] to-[#3d2565] border-primary/30 p-8 md:p-12 text-center max-w-lg mx-auto shadow-2xl">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">Inscripciones Abiertas</p>
          <p className="text-5xl md:text-6xl font-bold text-white mb-2">$497</p>
          <p className="text-white/70 mb-2">al contado</p>
          <p className="text-white/50 text-sm mb-8">o hasta 4 cuotas de $124.25</p>

          <p className="text-white/80 text-sm mb-4">Presiona el botón de abajo e inscríbete ahora:</p>
          <a 
            href="https://pay.hotmart.com/W104434660D?checkoutMode=10" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white text-lg px-10 py-7 rounded-xl shadow-xl hover:shadow-2xl transition-all w-full font-medium"
          >
            Quiero inscribirme al Curso Integral de Composición
          </a>

          <div className="flex items-center justify-center gap-6 mt-6 text-white/50 text-sm">
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              <span>Tarjeta de crédito/débito</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Pago 100% seguro</span>
            </div>
          </div>
        </Card>

        <Card className="bg-primary/5 border-accent/20 p-8 md:p-10 max-w-3xl mx-auto mt-12">
          <p className="text-foreground text-xl italic leading-relaxed text-center">
            &quot;La música transformó mi vida. Si tú sientes que también es parte de tu historia, estaré encantado de
            acompañarte en este camino.&quot;
          </p>
          <p className="text-primary font-semibold text-center mt-4">— Kike Santander</p>
        </Card>
      </div>
    </section>
  )
}

function FAQSection() {
  const faqs = [
    {
      question: "¿Necesito saber teoría musical para tomar el curso?",
      answer:
        "No. Te ayuda si ya tienes algo de base, pero no es obligatorio. La teoría que usamos la explico en lenguaje sencillo y siempre aplicada a ejemplos reales, nunca como \"matemática seca\".",
    },
    {
      question: "¿Qué nivel debo tener para aprovechar el curso?",
      answer:
        "Está pensado para principiantes con oído musical y para músicos/compositores intermedios que quieren ordenar y profundizar su método. Si ya compones, te servirá para estructurar y mejorar lo que haces; si estás empezando, te ayudará a empezar bien.",
    },
    {
      question: "¿Cuánto tiempo tendré acceso al contenido?",
      answer: "Tendrás acceso durante 1 año.",
    },
    {
      question: "¿Puedo avanzar a mi propio ritmo?",
      answer:
        "Sí. No hay horarios fijos. Tú eliges cuándo estudiar y cuánto avanzar cada día o cada semana.",
    },
    {
      question: "¿Necesito un estudio profesional para aprovechar el curso?",
      answer:
        "No. Puedes seguir las clases con auriculares, tu instrumento (si lo usas) y un espacio tranquilo para tomar notas y trabajar tus ideas.",
    },
    {
      question: "¿Puedo aplicar lo que aprenda a cualquier género?",
      answer:
        "Sí. Los principios que verás (melodía, armonía, ritmo, letra, estructura) funcionan en balada, pop, urbano, regional, tropical, worship y más.",
    },
    {
      question: "¿Hay algún tipo de garantía?",
      answer:
        "Tienes 7 días para probar el curso y, si no sientes que te aporta valor, puedes solicitar la devolución según las condiciones de la plataforma.",
    },
  ]

  return (
    <section className="relative bg-gradient-to-br from-[#2d1b4e] via-[#3d2565] to-[#1a0a2e] px-4 py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto max-w-3xl relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-white text-balance">
          Preguntas Frecuentes Sobre el Curso
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group">
              <summary className="flex items-center justify-between cursor-pointer bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors list-none">
                <span className="text-white font-semibold text-left pr-4">{faq.question}</span>
                <ChevronDown className="w-5 h-5 text-accent flex-shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-5 pb-5 pt-3">
                <p className="text-white/70 leading-relaxed">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="px-4 py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-2xl text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
          ¿Aún Tienes Alguna Duda?
        </h2>
        <p className="text-muted-foreground text-lg">
          Si necesitas ayuda, haz clic en el botón de abajo y conversa con uno de nuestros asesores a través de
          WhatsApp:
        </p>
        <a 
          href="https://devzapp.com.br/api-engennier/campanha/api/redirect/6980adb0a03e8f0001e2eec3" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-6 rounded-xl transition-all font-medium"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Habla con Nosotros en WhatsApp
        </a>
      </div>
    </section>
  )
}

export default function PaginaDeVentas() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TargetAudienceSection />
      <ResultsSection />
      <CurriculumSection />
      <AuthoritySection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />

      <footer className="bg-[#1a0a2e] py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-white/50 text-sm">
            © 2025 Kike Santander Academy — Todos los derechos reservados
          </p>
        </div>
      </footer>
    </div>
  )
}
