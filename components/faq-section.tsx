import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Con qué frecuencia se recarga un extintor?",
    answer:
      "La recarga de los extintores debe realizarse una vez al año, como parte del mantenimiento preventivo y para garantizar su correcto funcionamiento en caso de emergencia.",
  },
  {
    question: "¿Qué tipo de extintores puede tener un edificio?",
    answer:
      "En los consorcios, los tipos de extintores más utilizados son los de polvo químico seco tipo ABC (para áreas comunes como bauleras, pisos y pasillos) y los de dióxido de carbono (CO2) para instalaciones eléctricas, ya que no conducen electricidad y son adecuados para incendios en equipos eléctricos.",
  },
  {
    question: "¿Cómo verificar si un extintor tiene la revisión realizada?",
    answer:
      "Mediante el color del marbete IRAM. Este se reemplaza anualmente abriendo el extintor durante el mantenimiento técnico. Cada año corresponde a un color específico, lo que permite identificar visualmente el período de vigencia de la carga.",
  },
  {
    question: "¿Qué color tiene el marbete de cada año?",
    answer:
      "De acuerdo con las normas establecidas por el IRAM, el color del marbete de los extintores se determina según el último dígito del año en que se realiza la recarga o mantenimiento. Los mismos son: 0: MARRÓN CLARO, 1: NEGRO, 2: AMARILLO, 3: CELESTE, 4: VERDE OSCURO, 5: AZUL, 6: LILA, 7: BLANCO, 8: VERDE CLARO, 9: NARANJA. De esta manera, el color del marbete permite identificar rápidamente el año en que se realizó la recarga o mantenimiento del extintor. Ejemplo: Los extintores recargados durante el año 2026 deben contar con marbete de color lila.",
  },
  {
    question: "¿Cómo es el servicio de mantenimiento de instalaciones fijas?",
    answer:
      "Primero se realiza un ensayo para determinar el estado de las instalaciones y la frecuencia necesaria de controles. Seis meses después, se lleva a cabo la prueba hidráulica para verificar la resistencia y el correcto funcionamiento del sistema bajo normativas de la AGC.",
  },
  {
    question: "¿Qué niveles tienen las instalaciones fijas en consorcios?",
    answer:
      "Existen tres niveles comunes: Nivel 1 (Cañería Seca) para uso de bomberos; Nivel 2 (Sistema Húmedo conectado a red o tanque sanitario) para presión constante; y Nivel 3 (Sistema Húmedo Presurizado) con tanque exclusivo y bombas, común en edificios de gran altura.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 pb-40 sm:pb-60 md:pb-80">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-4 sm:mb-6 text-balance font-serif">Preguntas frecuentes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-sm sm:text-base px-2 sm:px-0">
            Resolvemos tus dudas sobre seguridad contra incendios y nuestros servicios.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-2 sm:space-y-3 py-0 my-0">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg sm:rounded-xl px-3 sm:px-4 md:px-6 data-[state=open]:border-foreground/30"
            >
              <AccordionTrigger className="text-left text-sm sm:text-base font-medium text-foreground hover:no-underline py-4 sm:py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 sm:pb-5 leading-relaxed text-xs sm:text-sm">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
