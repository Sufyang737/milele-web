"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Menu, X, ArrowUpRight, ArrowRight } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    // Verificar posición inicial
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)

    if (element) {
      const headerOffset = 72
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      setIsOpen(false)
    }
  }

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "px-3 pt-2" : "px-3"}`}>
      <div
        className={`max-w-7xl mx-auto transition-all duration-300 ${isScrolled
          ? "bg-white/70 backdrop-blur-xl border border-zinc-200 rounded-2xl px-5 py-2"
          : "bg-transparent px-5 py-3"
          }`}
      >
        <div className="flex items-center justify-between">
          <a href="#" onClick={handleLogoClick} className="flex items-center cursor-pointer">
            <Image
              src={isScrolled ? "/logo-milele-scrolled.png" : "/logo-milele-new.png"}
              alt="Milele"
              width={isScrolled ? 80 : 400}
              height={isScrolled ? 80 : 500}
              className={`${isScrolled ? "h-12" : "h-20 md:h-24"} w-auto object-contain transition-all duration-300`}
              priority
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#servicios"
              onClick={(e) => handleSmoothScroll(e, "servicios")}
              className="text-sm font-medium tracking-tight text-black hover:text-[color:var(--cta)] transition-colors cursor-pointer"
            >
              Servicios
            </a>
            <a
              href="#certificaciones"
              onClick={(e) => handleSmoothScroll(e, "certificaciones")}
              className="text-sm font-medium tracking-tight text-black hover:text-[color:var(--cta)] transition-colors cursor-pointer"
            >
              Certificaciones
            </a>
            <a
              href="#por-que-elegirnos"
              onClick={(e) => handleSmoothScroll(e, "por-que-elegirnos")}
              className="text-sm font-medium tracking-tight text-black hover:text-[color:var(--cta)] transition-colors cursor-pointer"
            >
              ¿Por qué elegirnos?
            </a>
            <a
              href="#testimonials"
              onClick={(e) => handleSmoothScroll(e, "testimonials")}
              className="text-sm font-medium tracking-tight text-black hover:text-[color:var(--cta)] transition-colors cursor-pointer"
            >
              Clientes
            </a>
            <a
              href="#faq"
              onClick={(e) => handleSmoothScroll(e, "faq")}
              className="text-sm font-medium tracking-tight text-black hover:text-[color:var(--cta)] transition-colors cursor-pointer"
            >
              FAQ
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-1">
            <button className="relative flex items-center gap-0 border border-[color:var(--cta)] rounded-full pl-5 pr-1 py-1 transition-all duration-300 group overflow-hidden">
              <span className="absolute inset-0 rounded-full scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-300 bg-[color:var(--cta)]" />
              <span className="text-sm pr-3 relative z-10 transition-colors duration-300 text-[color:var(--cta-strong)] group-hover:text-[color:var(--cta-foreground)]">
                Contactar
              </span>
              <span className="w-8 h-8 rounded-full flex items-center justify-center relative z-10">
                <ArrowRight className="w-4 h-4 text-[color:var(--cta-strong)] group-hover:opacity-0 absolute transition-opacity duration-300" />
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 text-[color:var(--cta-foreground)]" />
              </span>
            </button>
          </div>

          <button
            className={`md:hidden transition-colors duration-300 ${isScrolled ? "text-black" : "text-foreground"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav
            className={`md:hidden mt-6 pb-6 flex flex-col gap-4 border-t pt-6 ${isScrolled ? "border-zinc-200" : "border-border"
              }`}
          >
            <a
              href="#servicios"
              onClick={(e) => handleSmoothScroll(e, "servicios")}
              className="transition-colors cursor-pointer text-black hover:text-[color:var(--cta)]"
            >
              Servicios
            </a>
            <a
              href="#certificaciones"
              onClick={(e) => handleSmoothScroll(e, "certificaciones")}
              className="transition-colors cursor-pointer text-black hover:text-[color:var(--cta)]"
            >
              Certificaciones
            </a>
            <a
              href="#por-que-elegirnos"
              onClick={(e) => handleSmoothScroll(e, "por-que-elegirnos")}
              className="transition-colors cursor-pointer text-black hover:text-[color:var(--cta)]"
            >
              ¿Por qué elegirnos?
            </a>
            <a
              href="#testimonials"
              onClick={(e) => handleSmoothScroll(e, "testimonials")}
              className="transition-colors cursor-pointer text-black hover:text-[color:var(--cta)]"
            >
              Clientes
            </a>
            <a
              href="#faq"
              onClick={(e) => handleSmoothScroll(e, "faq")}
              className="transition-colors cursor-pointer text-black hover:text-[color:var(--cta)]"
            >
              FAQ
            </a>
            <div className={`flex flex-col gap-3 mt-4 pt-4 border-t ${isScrolled ? "border-zinc-200" : "border-border"}`}>
              <button className="relative flex items-center gap-0 border border-[color:var(--cta)] rounded-full pl-5 pr-1 py-1 w-fit transition-all duration-300 group overflow-hidden">
                <span className="absolute inset-0 rounded-full scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-300 bg-[color:var(--cta)]" />
                <span className="text-sm pr-3 relative z-10 transition-colors duration-300 text-[color:var(--cta-strong)] group-hover:text-[color:var(--cta-foreground)]">
                  Contactar
                </span>
                <span className="w-8 h-8 rounded-full flex items-center justify-center relative z-10">
                  <ArrowRight className="w-4 h-4 text-[color:var(--cta-strong)] group-hover:opacity-0 absolute transition-opacity duration-300" />
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 text-[color:var(--cta-foreground)]" />
                </span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
