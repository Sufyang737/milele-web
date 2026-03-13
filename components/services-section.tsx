"use client"

import { Flame, Droplets, Bell, ArrowRight, LucideProps } from "lucide-react"
import { Button } from "@/components/ui/button"

const ExtinguisherIcon = (props: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5" />
    <path d="M9 18h8" />
    <path d="M18 3h-3" />
    <path d="M11 3a6 6 0 0 0-6 6v11" />
    <path d="M5 13h4" />
    <path d="M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z" />
  </svg>
)

const SmokeAlarmIcon = (props: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M11 21c0-2.5 2-2.5 2-5" />
    <path d="M16 21c0-2.5 2-2.5 2-5" />
    <path d="m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8" />
    <path d="M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z" />
    <path d="M6 21c0-2.5 2-2.5 2-5" />
  </svg>
)

const services = [
  {
    icon: ExtinguisherIcon,
    title: "Mantenimiento de Extintores",
    description: "Dotación, control, recarga y mantenimiento bajo Norma IRAM 3517, con registro oficial del GCBA. Trabajamos junto a Yukon S.A., fábrica líder y de mayor trayectoria en el rubro.",
    normas: ["IRAM 3517"],
  },
  {
    icon: Droplets,
    title: "Sistemas de Agua contra Incendio",
    description: "Mantenimiento de redes de hidrantes y rociadores automáticos, cumpliendo IRAM 3546, 3594 y NFPA 25. Servicio de mangueras realizado junto a Suyai Extintores.",
    normas: ["IRAM 3546", "IRAM 3594", "NFPA 25"],
  },
  {
    icon: SmokeAlarmIcon,
    title: "Sistemas de Detección Electrónica",
    description: "Instalación, mantenimiento y revisión de alarmas y sistemas de detección electrónica según IRAM 3546 y NFPA 72.",
    normas: ["IRAM 3546", "NFPA 72"],
  },
]

export function ServicesSection() {

  return (
    <section id="servicios" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden bg-zinc-50/50">
      <div className="absolute top-0 left-0 right-0 flex justify-center pointer-events-none z-0">
        <span className="font-bold text-center text-[18vw] sm:text-[16vw] md:text-[14vw] lg:text-[12vw] leading-none tracking-tighter text-zinc-100 whitespace-nowrap">
          SERVICIOS
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] text-red-600 font-semibold mb-3 sm:mb-4">Nuestros Servicios</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-4 sm:mb-6 text-balance font-serif">Protección integral contra incendios</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-sm sm:text-base px-2 sm:px-0">
            Ofrecemos soluciones completas de seguridad contra incendios, cumpliendo con todas las normativas vigentes y certificaciones requeridas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white border border-zinc-100 hover:border-red-200 hover:shadow-lg hover:shadow-red-500/5 transition-all duration-300 text-left flex flex-col"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="p-4 rounded-2xl bg-[#f5ecda] text-[color:var(--cta-strong)]">
                  <service.icon className="h-8 w-8" strokeWidth={1.5} />
                </div>
                <div className="flex gap-1">
                  {service.normas.map((norma, i) => (
                    <span key={i} className="text-[10px] px-2 py-1 bg-zinc-100 text-zinc-600 rounded-full font-medium">
                      {norma}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm mb-6 flex-grow">{service.description}</p>
              <Button variant="outline" className="w-full group/btn border-red-200 hover:bg-red-50 hover:text-red-700 hover:border-red-300">
                Consultar este servicio
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
