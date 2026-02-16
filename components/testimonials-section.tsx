"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

const testimonials = [
  {
    name: "Marie Dupont",
    role: "Owner in Nice",
    content: "I rented out my apartment in less than a week. The interface is so intuitive!",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    name: "Thomas Martin",
    role: "Tenant in Paris",
    content: "Finally a transparent platform. I found my studio without paying agency fees.",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    name: "Sophie Bernard",
    role: "Owner in Lyon",
    content: "The tenant verification system gives me peace of mind. I recommend it 100%!",
    avatar: "/placeholder.svg?height=48&width=48",
  },
]

const testimonials2 = [
  {
    name: "Lucas Petit",
    role: "Tenant in Bordeaux",
    content: "Best rental experience I've ever had. The process was seamless from start to finish.",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    name: "Emma Laurent",
    role: "Owner in Marseille",
    content: "My property was listed and rented within days. Incredible platform!",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    name: "Antoine Rousseau",
    role: "Tenant in Toulouse",
    content: "No hidden fees, no surprises. Exactly what I was looking for in a rental app.",
    avatar: "/placeholder.svg?height=48&width=48",
  },
]

const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials]
const duplicatedTestimonials2 = [...testimonials2, ...testimonials2, ...testimonials2]

export function TestimonialsSection() {
  const [isPaused, setIsPaused] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const scrollRef2 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (scrollRef2.current) {
        scrollRef2.current.scrollLeft = scrollRef2.current.scrollWidth / 3
      }
      setIsInitialized(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isPaused || !isInitialized || !scrollRef.current) return

    const scrollContainer = scrollRef.current
    let animationFrameId: number
    let isActive = true

    const scroll = () => {
      if (!isActive || !scrollContainer) return

      scrollContainer.scrollLeft += 1
      const maxScroll = scrollContainer.scrollWidth / 3

      if (scrollContainer.scrollLeft >= maxScroll) {
        scrollContainer.scrollLeft = 0
      }

      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      isActive = false
      cancelAnimationFrame(animationFrameId)
    }
  }, [isPaused, isInitialized])

  useEffect(() => {
    if (isPaused || !isInitialized || !scrollRef2.current) return

    const scrollContainer = scrollRef2.current
    let animationFrameId: number
    let isActive = true

    const scroll = () => {
      if (!isActive || !scrollContainer) return

      scrollContainer.scrollLeft -= 1

      if (scrollContainer.scrollLeft <= 0) {
        scrollContainer.scrollLeft = scrollContainer.scrollWidth / 3
      }

      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      isActive = false
      cancelAnimationFrame(animationFrameId)
    }
  }, [isPaused, isInitialized])

  return (
    <section id="testimonials" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight font-serif">Lo que dicen de nosotros</h2>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {/* First row - scrolls left to right */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
              style={{ scrollBehavior: "auto", gap: "16px" }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[300px] sm:w-[360px] md:w-[400px] bg-card border border-border rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border-none"
                >
                  <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                    />
                    <p className="text-foreground leading-relaxed flex-1 text-sm sm:text-base md:text-lg">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                  </div>
                  <div className="mt-auto">
                    <p className="text-foreground text-sm font-bold">{testimonial.name}</p>
                    <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second row - scrolls right to left */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div
              ref={scrollRef2}
              className="flex gap-6 overflow-x-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
              style={{ scrollBehavior: "auto" }}
            >
              {duplicatedTestimonials2.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[300px] sm:w-[360px] md:w-[400px] bg-card border border-border rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border-none"
                >
                  <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                    />
                    <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed flex-1">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                  </div>
                  <div className="mt-auto">
                    <p className="text-foreground text-sm font-bold">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
