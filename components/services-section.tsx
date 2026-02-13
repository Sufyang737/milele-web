"use client"

import { Flame, Droplets, Bell, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Flame,
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
    icon: Bell,
    title: "Sistemas de Detección Electrónica",
    description: "Instalación, mantenimiento y revisión de alarmas y sistemas de detección electrónica según IRAM 3546 y NFPA 72.",
    normas: ["IRAM 3546", "NFPA 72"],
  },
]

export function ServicesSection() {

  return (
    <section id="servicios" className="py-24 px-6 pb-24 relative overflow-hidden bg-zinc-50/50">
      <div className="absolute top-0 left-0 right-0 flex justify-center pointer-events-none z-0">
        <span className="font-bold text-center text-[18vw] sm:text-[16vw] md:text-[14vw] lg:text-[12vw] leading-none tracking-tighter text-zinc-100 whitespace-nowrap">
          SERVICIOS
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-red-600 font-semibold mb-4">Nuestros Servicios</p>
          <h2 className="text-4xl md:text-5xl font-normal mb-6 text-balance font-serif">Protección integral contra incendios</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ofrecemos soluciones completas de seguridad contra incendios, cumpliendo con todas las normativas vigentes y certificaciones requeridas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-white border border-zinc-100 hover:border-red-200 hover:shadow-lg hover:shadow-red-500/5 transition-all duration-300 text-left flex flex-col"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="p-4 rounded-2xl bg-red-50 text-red-600">
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
