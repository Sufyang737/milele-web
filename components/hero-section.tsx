"use client"
import { useEffect, useState } from "react"
import { AnimatedText } from "./animated-text"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    let rafId: number
    let currentProgress = 0

    const handleScroll = () => {
      const scrollY = window.scrollY
      const maxScroll = 400
      const targetProgress = Math.min(scrollY / maxScroll, 1)

      const smoothUpdate = () => {
        currentProgress += (targetProgress - currentProgress) * 0.1

        if (Math.abs(targetProgress - currentProgress) > 0.001) {
          setScrollProgress(currentProgress)
          rafId = requestAnimationFrame(smoothUpdate)
        } else {
          setScrollProgress(targetProgress)
        }
      }

      cancelAnimationFrame(rafId)
      smoothUpdate()
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  const easeOutQuad = (t: number) => t * (2 - t)
  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

  const scale = 1 - easeOutQuad(scrollProgress) * 0.15
  const borderRadius = easeOutCubic(scrollProgress) * 48
  const heightVh = 100 - easeOutQuad(scrollProgress) * 37.5

  return (
    <section className="pt-32 pb-12 px-6 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 top-0">
        <div
          className="w-full will-change-transform overflow-hidden"
          style={{
            transform: `scale(${scale})`,
            borderRadius: `${borderRadius}px`,
            height: `${heightVh}vh`,
          }}
        >
          <video autoPlay loop muted playsInline className="w-full h-full object-cover" src="/edificios.mp4" />
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 w-full overflow-hidden pointer-events-none z-20 flex items-end justify-center"
        style={{
          transform: `translateY(${scrollProgress * 150}px)`,
          opacity: 1 - scrollProgress * 0.8,
          height: "100%",
        }}
      >
        <span
          className="block text-white font-bold text-[28vw] sm:text-[25vw] md:text-[22vw] lg:text-[20vw] tracking-tighter select-none text-center leading-none"
          style={{ marginBottom: "0" }}
        >
          MILELE
        </span>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-12">
          <div
            className={`transition-all duration-1000 delay-[800ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            <h1 className="font-serif text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] 2xl:text-[7.5rem] font-normal leading-tight mb-4 sm:mb-6 w-full px-2 sm:px-4 max-w-6xl mx-auto text-balance">
              <AnimatedText text="La Protección que tu Espacio Merece" delay={0.3} />
            </h1>
          </div>
        </div>

        <div className="flex items-end justify-center px-2 sm:px-0">
          {/* Extintor izquierdo inclinado - oculto en mobile muy chico */}
          <div
            className={`relative w-[100px] sm:w-[140px] md:w-[200px] lg:w-[260px] xl:w-[300px] will-change-transform transition-all duration-[1500ms] ease-out delay-300 hidden sm:block -mr-8 sm:-mr-12 md:-mr-16 lg:-mr-20 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[400px]"
            }`}
          >
            <img 
              src="/images/extintor.png" 
              alt="Extintor Yukon - Proteccion contra incendios" 
              className="w-full h-auto relative z-10 drop-shadow-2xl"
              style={{ transform: "rotate(-15deg)" }}
            />
          </div>

          {/* Extintor central */}
          <div
            className={`relative w-[200px] sm:w-[260px] md:w-[340px] lg:w-[420px] xl:w-[480px] will-change-transform transition-all duration-[1500ms] ease-out delay-500 z-10 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[400px]"
            }`}
          >
            <img 
              src="/images/extintor.png" 
              alt="Extintor Yukon - Proteccion contra incendios" 
              className="w-full h-auto relative z-10 drop-shadow-2xl"
            />
          </div>

          {/* Extintor derecho inclinado - oculto en mobile muy chico */}
          <div
            className={`relative w-[100px] sm:w-[140px] md:w-[200px] lg:w-[260px] xl:w-[300px] will-change-transform transition-all duration-[1500ms] ease-out delay-700 hidden sm:block -ml-8 sm:-ml-12 md:-ml-16 lg:-ml-20 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[400px]"
            }`}
          >
            <img 
              src="/images/extintor.png" 
              alt="Extintor Yukon - Proteccion contra incendios" 
              className="w-full h-auto relative z-10 drop-shadow-2xl"
              style={{ transform: "rotate(15deg)" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
