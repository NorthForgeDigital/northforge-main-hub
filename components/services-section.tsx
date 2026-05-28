import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { 
  Video, 
  Palette, 
  Youtube, 
  Headphones, 
  Share2, 
  Workflow 
} from "lucide-react"

const services = [
  {
    icon: Video,
    title: "AI Video Creation",
    description:
      "Transform your ideas into compelling video content using cutting-edge AI tools and creative direction.",
  },
  {
    icon: Palette,
    title: "Branding & Research Support",
    description:
      "Data-driven branding strategies backed by comprehensive market research and competitor analysis.",
  },
  {
    icon: Youtube,
    title: "YouTube Content Systems",
    description:
      "End-to-end YouTube content systems from ideation to optimization, designed for sustainable growth.",
  },
  {
    icon: Headphones,
    title: "Admin & Virtual Support",
    description:
      "Streamlined administrative and virtual assistance to help you focus on what matters most.",
  },
  {
    icon: Share2,
    title: "Social Media Content",
    description:
      "Strategic social media content creation that engages audiences and builds brand presence.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Custom automation solutions that eliminate repetitive tasks and boost operational efficiency.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Services We Offer
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            Comprehensive digital solutions tailored to accelerate your business growth
            with AI-powered efficiency.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
