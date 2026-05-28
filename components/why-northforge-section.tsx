import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Zap, Target, Cpu } from "lucide-react"

const reasons = [
  {
    icon: Zap,
    title: "Fast Execution",
    description:
      "We move quickly without sacrificing quality. Our streamlined processes ensure rapid delivery so you can stay ahead of the competition.",
  },
  {
    icon: Target,
    title: "Strategy-Driven",
    description:
      "Every project begins with a clear strategy aligned to your business goals. We focus on outcomes, not just outputs.",
  },
  {
    icon: Cpu,
    title: "AI-Assisted Systems",
    description:
      "We leverage the latest AI tools and technologies to amplify human creativity and deliver exceptional results at scale.",
  },
]

export function WhyNorthforgeSection() {
  return (
    <section id="why-northforge" className="py-24 sm:py-32 relative bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Why NorthForge?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            We combine speed, strategy, and AI to deliver digital solutions that make
            an impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <Card
              key={reason.title}
              className="text-center group hover:border-primary/50 transition-all duration-300 bg-card/50"
            >
              <CardHeader className="pb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
