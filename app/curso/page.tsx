import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Music,
  Headphones,
  BookOpen,
  Users,
  Award,
  Clock,
  Play,
  CheckCircle2,
  Star,
  MessageCircle,
  Sparkles,
} from "lucide-react"
import Image from "next/image"

export default function CursoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white">
        <div className="absolute inset-0 bg-[url('/images/kike-edicion-dolor3.jpg')] opacity-10 bg-cover bg-center" />
        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <Badge className="bg-pink-500 text-white border-0 text-base px-4 py-1">
                <Sparkles className="w-4 h-4 mr-2" />
                Curso Completo en Video
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Curso Integral de Composición Musical
              </h1>
              <p className="text-xl md:text-2xl text-purple-100">
                Aprende a componer canciones profesionales desde cero con Kike Santander
              </p>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span>Más de 40 horas de contenido en video</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span>Acceso de por vida a todas las lecciones</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span>Certificado de finalización incluido</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://pay.hotmart.com/W104434660D?checkoutMode=10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-pink-500 hover:bg-pink-600 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-2xl hover:shadow-pink-500/50 transition-all transform hover:scale-105"
                >
                  Inscríbete Ahora
                </a>
                <a
                  href="#modulos"
                  className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-purple-900 font-bold text-lg px-8 py-4 rounded-xl transition-all"
                >
                  Ver Contenido
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/5] max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                <Image
                  src="/images/kike-guitar-hero.png"
                  alt="Kike Santander"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Como Funciona */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              ¿Cómo Funciona el Curso?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Un sistema probado paso a paso para convertirte en compositor profesional
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Play className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">1. Aprende</h3>
                <p className="text-muted-foreground">
                  Accede a más de 40 horas de video lecciones estructuradas desde lo básico hasta avanzado
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Music className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">2. Practica</h3>
                <p className="text-muted-foreground">
                  Aplica lo aprendido con ejercicios prácticos y compone tus propias canciones
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">3. Certifícate</h3>
                <p className="text-muted-foreground">
                  Obtén tu certificado oficial y lanza tu carrera como compositor profesional
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Módulos del Curso */}
      <section id="modulos" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Contenido del Curso
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              12 módulos completos diseñados para llevarte desde principiante hasta compositor profesional
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border bg-background rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <span>Fundamentos de la Composición Musical</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 text-muted-foreground">
                  <ul className="space-y-2 ml-14">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Teoría musical básica
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Estructura de canciones
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Melodía y armonía
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border bg-background rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <span>Creación de Melodías Memorables</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 text-muted-foreground">
                  <ul className="space-y-2 ml-14">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Técnicas de composición melódica
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Hooks y estribillos efectivos
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Desarrollo motívico
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border bg-background rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <span>Armonía y Progresiones de Acordes</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 text-muted-foreground">
                  <ul className="space-y-2 ml-14">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Progresiones armónicas populares
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Acordes extendidos y alterados
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Rearmonización
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border bg-background rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <span>Escritura de Letras Profesionales</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 text-muted-foreground">
                  <ul className="space-y-2 ml-14">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Storytelling en canciones
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Técnicas de rima y métrica
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Escritura lírica emotiva
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border bg-background rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      5
                    </div>
                    <span>Arreglos y Producción</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 text-muted-foreground">
                  <ul className="space-y-2 ml-14">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Instrumentación efectiva
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Técnicas de arreglo profesional
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Pre-producción de canciones
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border bg-background rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      6
                    </div>
                    <span>Géneros Musicales Populares</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 text-muted-foreground">
                  <ul className="space-y-2 ml-14">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Pop, Rock y Baladas
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Música latina y urbana
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Características de cada género
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              ¿Qué Obtienes con el Curso?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Todo lo que necesitas para convertirte en un compositor profesional
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:shadow-xl transition-all">
              <CardContent className="pt-8 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">+40 Horas de Video</h3>
                <p className="text-muted-foreground">
                  Contenido completo en video de alta calidad con explicaciones detalladas
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:shadow-xl transition-all">
              <CardContent className="pt-8 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Material Descargable</h3>
                <p className="text-muted-foreground">
                  PDFs, ejercicios prácticos y recursos adicionales para tu aprendizaje
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:shadow-xl transition-all">
              <CardContent className="pt-8 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Certificado Oficial</h3>
                <p className="text-muted-foreground">
                  Recibe tu certificado de finalización avalado por Kike Santander Academy
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:shadow-xl transition-all">
              <CardContent className="pt-8 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Comunidad Exclusiva</h3>
                <p className="text-muted-foreground">
                  Acceso a nuestra comunidad privada de compositores para networking
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:shadow-xl transition-all">
              <CardContent className="pt-8 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Headphones className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Soporte Directo</h3>
                <p className="text-muted-foreground">
                  Recibe ayuda personalizada de nuestro equipo de instructores
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:shadow-xl transition-all">
              <CardContent className="pt-8 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Acceso de Por Vida</h3>
                <p className="text-muted-foreground">
                  Una vez inscrito, el contenido es tuyo para siempre, sin mensualidades
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Lo Que Dicen Nuestros Estudiantes
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Miles de compositores ya han transformado su carrera con este curso
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2">
              <CardContent className="pt-8 space-y-4">
                <div className="flex gap-1 text-yellow-500">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-muted-foreground italic">
                  &quot;Este curso cambió mi vida. Pasé de no saber nada de composición a escribir mis propias canciones profesionales en 3 meses.&quot;
                </p>
                <div className="flex items-center gap-3 pt-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary">
                    M
                  </div>
                  <div>
                    <p className="font-semibold">María González</p>
                    <p className="text-sm text-muted-foreground">Cantautora</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="pt-8 space-y-4">
                <div className="flex gap-1 text-yellow-500">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-muted-foreground italic">
                  &quot;Kike explica todo de manera clara y práctica. Los ejercicios son excelentes y realmente funcionan. 100% recomendado.&quot;
                </p>
                <div className="flex items-center gap-3 pt-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary">
                    C
                  </div>
                  <div>
                    <p className="font-semibold">Carlos Rodríguez</p>
                    <p className="text-sm text-muted-foreground">Productor Musical</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="pt-8 space-y-4">
                <div className="flex gap-1 text-yellow-500">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-muted-foreground italic">
                  &quot;La mejor inversión que he hecho en mi carrera musical. El contenido es oro puro y vale mucho más de lo que cuesta.&quot;
                </p>
                <div className="flex items-center gap-3 pt-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary">
                    L
                  </div>
                  <div>
                    <p className="font-semibold">Laura Martínez</p>
                    <p className="text-sm text-muted-foreground">Compositora</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Inversión en Tu Carrera Musical
              </h2>
              <p className="text-xl text-muted-foreground">
                Un solo pago para acceso de por vida
              </p>
            </div>
            <Card className="border-4 border-primary relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-pink-500 text-white px-6 py-2 font-bold text-sm">
                OFERTA ESPECIAL
              </div>
              <CardContent className="pt-12 pb-8">
                <div className="text-center space-y-6">
                  <div>
                    <p className="text-muted-foreground line-through text-2xl">$497 USD</p>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-6xl font-bold text-primary">$297</span>
                      <span className="text-2xl text-muted-foreground">USD</span>
                    </div>
                    <p className="text-pink-500 font-semibold mt-2 text-lg">¡Ahorra $200 HOY!</p>
                  </div>
                  <div className="space-y-3 max-w-md mx-auto text-left">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                      <span>Acceso completo e inmediato a todos los módulos</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                      <span>Más de 40 horas de video lecciones</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                      <span>Certificado oficial de finalización</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                      <span>Material descargable y ejercicios prácticos</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                      <span>Acceso de por vida sin pagos adicionales</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                      <span>Garantía de devolución de 30 días</span>
                    </div>
                  </div>
                  <div className="pt-6">
                    <a
                      href="https://pay.hotmart.com/W104434660D?checkoutMode=10"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold text-xl px-12 py-5 rounded-xl shadow-2xl hover:shadow-pink-500/50 transition-all transform hover:scale-105 w-full sm:w-auto"
                    >
                      Inscríbete Ahora - $297 USD
                    </a>
                    <p className="text-sm text-muted-foreground mt-4">
                      Pago seguro procesado por Hotmart
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Respuestas a las preguntas más comunes sobre el curso
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="faq-1" className="border bg-background rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  ¿Necesito experiencia previa en música?
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 text-muted-foreground">
                  No, el curso está diseñado para comenzar desde cero. Cubrimos todos los fundamentos necesarios y avanzamos gradualmente hasta técnicas profesionales.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2" className="border bg-background rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  ¿Por cuánto tiempo tengo acceso al curso?
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 text-muted-foreground">
                  El acceso es de por vida. Una vez que te inscribes, puedes ver el contenido cuando quieras, sin límite de tiempo.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3" className="border bg-background rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  ¿Hay alguna garantía de devolución?
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 text-muted-foreground">
                  Sí, ofrecemos una garantía de devolución de 30 días. Si no estás satisfecho con el curso, te devolvemos tu dinero sin preguntas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-4" className="border bg-background rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  ¿Necesito algún software especial?
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 text-muted-foreground">
                  No necesitas software costoso para empezar. Te enseñamos con herramientas accesibles y gratuitas, aunque también cubrimos DAWs profesionales.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-5" className="border bg-background rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  ¿Recibiré un certificado al finalizar?
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 text-muted-foreground">
                  Sí, al completar el curso recibirás un certificado oficial de Kike Santander Academy que podrás compartir en tus redes y CV profesional.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-6" className="border bg-background rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  ¿El precio incluye actualizaciones futuras?
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 text-muted-foreground">
                  Sí, todas las actualizaciones y contenido adicional que agreguemos al curso están incluidas sin costo adicional para los estudiantes inscritos.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/kike-edicion-dolor3.jpg')] opacity-10 bg-cover bg-center" />
        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              ¿Listo Para Convertirte en Compositor Profesional?
            </h2>
            <p className="text-xl md:text-2xl text-purple-100">
              Únete a miles de estudiantes que ya están componiendo canciones profesionales
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <a
                href="https://pay.hotmart.com/W104434660D?checkoutMode=10"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-pink-500 hover:bg-pink-600 text-white font-bold text-xl px-12 py-5 rounded-xl shadow-2xl hover:shadow-pink-500/50 transition-all transform hover:scale-105"
              >
                Inscríbete Ahora
              </a>
              <a
                href="https://devzapp.com.br/api-engennier/campanha/api/redirect/6980adb0a03e8f0001e2eec3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-purple-900 font-bold text-xl px-12 py-5 rounded-xl transition-all"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                Habla con Soporte
              </a>
            </div>
            <p className="text-sm text-purple-200">
              Garantía de devolución de 30 días • Acceso inmediato • Pago seguro
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
