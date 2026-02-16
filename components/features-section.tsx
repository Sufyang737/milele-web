"use client"

import { Shield, Award, Clock, Users, CheckCircle2, ArrowRight } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

const reasons = [
  {
    icon: Shield,
    title: "Cumplimiento normativo garantizado",
    description: "Trabajamos bajo normas IRAM, NFPA y GCBA, asegurando que cada servicio cumpla con los requisitos legales vigentes.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Award,
    title: "Respaldo técnico líder",
    description: "Contamos con el respaldo de Yukon Argentina, la fábrica más antigua y con mayor trayectoria del rubro.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Clock,
    title: "Agilidad y respuesta rápida",
    description: "Entendemos la urgencia operativa de edificios y consorcios. Respondemos rápido y con soluciones concretas.",
    color: "from-red-600 to-rose-600",
  },
  {
    icon: Users,
    title: "Personal técnico especializado",
    description: "Nuestro equipo está altamente capacitado y brinda atención directa, transparente y profesional.",
    color: "from-rose-500 to-red-500",
  },
]

const stats = [
  { value: "20+", label: "Años de experiencia" },
  { value: "100%", label: "Cumplimiento normativo" },
  { value: "24/7", label: "Atención de emergencias" },
]

export function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50])
  const imageRotate = useTransform(scrollYProgress, [0, 1], [-5, 5])

  return (
    <section 
      ref={sectionRef}
      id="por-que-elegirnos"
      className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-white to-zinc-50/50"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-red-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl" />
      
      {/* Badge flotante */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="absolute top-32 right-20 hidden xl:block"
      >
        <div className="bg-white shadow-xl shadow-red-500/10 rounded-2xl p-4 border border-zinc-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-semibold text-sm">Certificados</p>
              <p className="text-xs text-zinc-500">IRAM & NFPA</p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-red-50 text-red-600 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              ¿Por qué elegirnos?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal mb-4 sm:mb-6 text-balance px-2 sm:px-0">
              La seguridad no admite
              <span className="block text-red-600">improvisaciones</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-3 sm:px-0">
              En MILELE S.A. combinamos experiencia técnica, cumplimiento normativo 
              y atención personalizada para garantizar instalaciones seguras y en regla.
            </p>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-16 mb-12 sm:mb-16 lg:mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center px-4 sm:px-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-zinc-500 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-20 items-center">
          {/* Left: Reasons list */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
                className="group flex gap-3 sm:gap-5 p-3 sm:p-5 rounded-xl sm:rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300 cursor-default"
              >
                <div className={`flex-shrink-0 w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center shadow-lg shadow-red-500/20 group-hover:scale-110 transition-transform duration-300`}>
                  <reason.icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-foreground group-hover:text-red-600 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="pt-4 sm:pt-6"
            >
              <a 
                href="#contacto" 
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-all hover:gap-3 hover:shadow-lg hover:shadow-red-500/25 text-sm sm:text-base"
              >
                Solicitá tu presupuesto
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right: Visual element with extintor */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            <motion.div 
              style={{ y: imageY, rotate: imageRotate }}
              className="relative z-10"
            >
              {/* Main image container */}
              <div className="relative">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl scale-110" />
                
                {/* Image */}
                <Image
                  src="/images/extintor.png"
                  alt="Extintor Yukon - Equipos certificados"
                  width={500}
                  height={600}
                  className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl"
                  priority
                />

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-2 sm:-left-4 top-1/4 bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-xl shadow-zinc-200/50 border border-zinc-100 hidden sm:block"
                >
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-md sm:rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-semibold text-zinc-700">Registro<br/>GCBA</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -right-2 sm:-right-4 bottom-1/3 bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-xl shadow-zinc-200/50 border border-zinc-100 hidden sm:block"
                >
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-100 rounded-md sm:rounded-lg flex items-center justify-center">
                      <Award className="w-3 h-3 sm:w-4 sm:h-4 text-red-600" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-semibold text-zinc-700">Yukon<br/>Partner</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 border-2 border-red-100 rounded-full" />
            <div className="absolute -top-10 -right-10 w-24 h-24 border-2 border-orange-100 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
