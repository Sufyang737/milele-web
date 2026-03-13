import Link from "next/link"
import { Twitter, Linkedin, Instagram, Facebook, Mail, Phone, MessageCircle } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border py-12 sm:py-16 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-10 sm:mb-12">
          <div className="mb-4 sm:mb-0">
            <Link href="/" className="flex items-center mb-4 sm:mb-6">
              <Image
                src="/logo-milele-new.png"
                alt="Milele Fire Safety Services"
                width={200}
                height={200}
                className="h-12 sm:h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm">
              Protección contra incendios certificada. Seguridad y confianza para tu edificio o empresa.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-[color:var(--cta)] group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-medium opacity-70">Email</p>
                  <a href="mailto:ventas@milelesa.com" className="text-sm sm:text-base font-medium">ventas@milelesa.com</a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-[color:var(--cta)] group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-medium opacity-70">Teléfono</p>
                  <a href="tel:21504200" className="text-sm sm:text-base font-medium">2150-4200</a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-[color:var(--cta)] group-hover:text-white transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-medium opacity-70">WhatsApp</p>
                  <a
                    href="https://wa.me/5491139093951?text=hola%20vengo%20desde%20la%20web%20y%20quiero%20saber%20mas%20acerca%20de%20los%20servicios%20de%20milele!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-medium"
                  >
                    11 3909-3951
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-left">© 2026 Milele. Todos los derechos reservados.</p>
          <p className="text-xs text-muted-foreground text-center sm:text-left">Milele S.A. - Seguridad contra incendios</p>
        </div>
      </div>
    </footer>
  )
}
