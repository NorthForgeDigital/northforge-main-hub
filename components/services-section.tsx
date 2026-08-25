import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/services"

export function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Services We Offer
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            Fifteen clear starting points. Review the details first, then request the exact service you need.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group flex flex-col hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  {service.shortDescription}
                </CardDescription>
              </CardContent>
              <CardFooter className="mt-auto flex flex-wrap gap-2">
                <Button asChild variant="outline" size="sm"><Link href={`/services/${service.slug}`}>View Service</Link></Button>
                <Button asChild size="sm"><Link href={`/start-project?service=${service.slug}`}>Request <ArrowRight className="h-3.5 w-3.5" /></Link></Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
