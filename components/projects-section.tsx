import { Card } from "@/components/ui/card"
import { Clock } from "lucide-react"

const upcomingProjects = [
  {
    title: "YouTube Channel System",
    status: "Coming Soon",
  },
  {
    title: "AI Content Workflow",
    status: "Coming Soon",
  },
  {
    title: "Brand Launch Kit",
    status: "Coming Soon",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Portfolio Coming Soon
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            We are currently building our first client case studies and internal project samples.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingProjects.map((project) => (
            <Card
              key={project.title}
              className="overflow-hidden border-dashed border-border/50"
            >
              <div className="aspect-video bg-muted/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-muted-foreground/50" />
                </div>
              </div>
              <div className="p-6">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                  {project.status}
                </span>
                <h3 className="text-lg font-semibold text-foreground mt-2">
                  {project.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
