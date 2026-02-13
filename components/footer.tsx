import Link from "next/link"
import { Twitter, Linkedin, Instagram, Facebook } from "lucide-react"
import Image from "next/image"

const footerLinks = {
  product: [
    { label: "Search", href: "#" },
    { label: "List", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "App", href: "#" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Blog", href: "#" },
  ],
  legal: [
    { label: "Terms", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Cookies", href: "#" },
    { label: "Legal", href: "#" },
  ],
  support: [
    { label: "Help Center", href: "#" },
    { label: "Contact", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Report", href: "#" },
  ],
}

export function Footer() {
  return (
    <div className="relative">
      <div className="absolute -top-[20vw] left-0 right-0 w-full h-[50vw] z-0 overflow-hidden">
        <Image src="/images/footer-bg.png" alt="Tuscan landscape" fill className="object-cover" priority />
      </div>

      <div className="absolute -top-[15vw] left-0 right-0 flex items-end justify-center overflow-visible pointer-events-none z-10">
        <h2 className="font-bold text-center text-[28vw] sm:text-[25vw] md:text-[22vw] lg:text-[20vw] leading-[0.85] tracking-tighter text-white whitespace-nowrap">
          MILELE
        </h2>
      </div>

      <footer id="contact" className="relative z-20 border-t border-border py-16 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center mb-4">
                <Image
                  src="/images/logo.svg"
                  alt="Milele Fire Safety Services"
                  width={200}
                  height={62}
                  className="h-16 w-auto object-contain"
                />
              </Link>
              <p className="text-sm text-muted-foreground mb-6">Peer-to-peer rentals, simplified.</p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="w-9 h-9 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="w-9 h-9 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="w-9 h-9 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="w-9 h-9 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wider">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wider">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wider">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wider">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">© 2026 Milele. All rights reserved.</p>
            <p className="text-xs text-muted-foreground">Milele Inc. - Registered real estate agent</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
