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
    <footer id="contact" className="border-t border-border py-12 sm:py-16 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 mb-10 sm:mb-12">
          <div className="col-span-2 sm:col-span-3 md:col-span-1 mb-4 sm:mb-0">
            <Link href="/" className="flex items-center mb-3 sm:mb-4">
              <Image
                src="/images/logo.svg"
                alt="Milele Fire Safety Services"
                width={200}
                height={62}
                className="h-12 sm:h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">Protección contra incendios certificada.</p>
            <div className="flex gap-3 sm:gap-4">
              <Link
                href="#"
                className="w-8 h-8 sm:w-9 sm:h-9 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              >
                <Twitter className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 sm:w-9 sm:h-9 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 sm:w-9 sm:h-9 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 sm:w-9 sm:h-9 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              >
                <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-medium text-foreground mb-3 sm:mb-4 uppercase tracking-wider">Servicios</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.product.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-medium text-foreground mb-3 sm:mb-4 uppercase tracking-wider">Empresa</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-medium text-foreground mb-3 sm:mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.legal.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-medium text-foreground mb-3 sm:mb-4 uppercase tracking-wider">Soporte</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.support.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
          <p className="text-[10px] sm:text-xs text-muted-foreground text-center sm:text-left">© 2026 Milele. Todos los derechos reservados.</p>
          <p className="text-[10px] sm:text-xs text-muted-foreground text-center sm:text-left">Milele S.A. - Seguridad contra incendios</p>
        </div>
      </div>
    </footer>
  )
}
