"use client"

import { motion } from "framer-motion"
import { Shield, Award, FileCheck, BadgeCheck } from "lucide-react"
import Image from "next/image"

const certificaciones = [
  {
    icon: Shield,
    titulo: "Registro GCBA",
    descripcion: "Matriculados y habilitados por el Gobierno de la Ciudad de Buenos Aires",
  },
  {
    icon: Award,
    titulo: "Normas IRAM",
    descripcion: "Cumplimiento total de normas IRAM 3517, 3546 y 3594",
  },
  {
    icon: FileCheck,
    titulo: "Estándares NFPA",
    descripcion: "Alineados con NFPA 25 y NFPA 72 internacionalmente reconocidos",
  },
  {
    icon: BadgeCheck,
    titulo: "Yukon Partner",
    descripcion: "Distribuidores oficiales de la fábrica más antigua del rubro",
  },
]

export function CertificacionesSection() {
  return (
    <section id="certificaciones" className="py-24 px-6 relative overflow-hidden bg-white">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-50/50 to-white" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Garantía de calidad
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-normal mb-6 text-balance">
              Habilitaciones y <span className="text-red-600">certificaciones</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Cumplimos con todas las normativas nacionales e internacionales para brindarte 
              el más alto estándar de seguridad.
            </p>
          </motion.div>
        </div>

        {/* Banner de logos institucionales */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-zinc-50 rounded-3xl p-8 md:p-12 border border-zinc-100">
            <p className="text-center text-sm font-medium text-zinc-400 uppercase tracking-wider mb-8">
              Entidades certificantes y normativas aplicadas
            </p>
            
            {/* Imagen de logos */}
            <div className="relative w-full overflow-hidden rounded-2xl bg-white shadow-sm">
              <Image
                src="/images/certificaciones-banner.png"
                alt="Certificaciones y habilitaciones - GCBA, IRAM, NFPA, Yukon"
                width={1800}
                height={160}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Grid de certificaciones individuales */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificaciones.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-red-200 hover:bg-white hover:shadow-lg hover:shadow-red-500/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-4 shadow-lg shadow-red-500/20 group-hover:scale-110 transition-transform duration-300">
                <cert.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-red-600 transition-colors">
                {cert.titulo}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {cert.descripcion}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-red-600 text-white rounded-2xl shadow-xl shadow-red-500/20">
            <BadgeCheck className="w-6 h-6" />
            <span className="font-medium">Todos nuestros servicios incluyen certificación oficial</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
