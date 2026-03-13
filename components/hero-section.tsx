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
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </div>



      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-12">
          <div
            className={`transition-all duration-1000 delay-[800ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            <h1
              className="font-serif text-[2.8rem] sm:text-[3.8rem] md:text-[4.8rem] lg:text-[5.6rem] xl:text-[6.6rem] 2xl:text-[7.6rem] font-bold leading-none mb-2 sm:mb-3 w-full px-2 sm:px-4 max-w-6xl mx-auto text-balance"
              style={{
                color: '#bfaa54',
                textShadow: '2px 2px 0px rgba(255,255,255,0.4), 0px 4px 20px rgba(0,0,0,0.5), 0px 0px 30px rgba(255,255,255,0.2)'
              }}
            >
              MILELE
            </h1>
            <p
              className="font-serif text-[1rem] sm:text-[1.2rem] md:text-[1.4rem] lg:text-[1.6rem] xl:text-[1.8rem] font-normal tracking-wide px-2"
              style={{
                color: '#bfaa54',
                textShadow: '1px 1px 0px rgba(255,255,255,0.3), 0px 2px 10px rgba(0,0,0,0.4)'
              }}
            >
              La protección que tu espacio merece
            </p>
          </div>
        </div>

        <div className="flex items-end justify-center px-2 sm:px-0">
          {/* Extintor izquierdo inclinado - oculto en mobile muy chico */}
          <div
            className={`relative w-[100px] sm:w-[140px] md:w-[200px] lg:w-[260px] xl:w-[300px] will-change-transform transition-all duration-[1500ms] ease-out delay-300 hidden sm:block -mr-8 sm:-mr-12 md:-mr-16 lg:-mr-20 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[400px]"
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
            className={`relative w-[200px] sm:w-[260px] md:w-[340px] lg:w-[420px] xl:w-[480px] will-change-transform transition-all duration-[1500ms] ease-out delay-500 z-10 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[400px]"
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
            className={`relative w-[100px] sm:w-[140px] md:w-[200px] lg:w-[260px] xl:w-[300px] will-change-transform transition-all duration-[1500ms] ease-out delay-700 hidden sm:block -ml-8 sm:-ml-12 md:-ml-16 lg:-ml-20 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[400px]"
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
