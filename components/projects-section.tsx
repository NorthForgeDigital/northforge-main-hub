import { Card } from "@/components/ui/card"
import { Play, Sparkles, Palette } from "lucide-react"

const upcomingProjects = [
  {
    title: "YouTube Channel System",
    description: "End-to-end content production and channel growth strategy.",
    icon: Play,
  },
  {
    title: "AI Content Workflow",
    description: "Automated content pipelines powered by AI tools.",
    icon: Sparkles,
  },
  {
    title: "Brand Launch Kit",
    description: "Complete branding package for new ventures.",
    icon: Palette,
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Portfolio Coming Soon
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            We are currently building our first client case studies and internal project samples.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {upcomingProjects.map((project) => (
            <Card
              key={project.title}
              className="p-5 border-dashed border-border/50 bg-card/50"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <project.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="inline-block text-[10px] font-semibold text-primary uppercase tracking-wider mb-1">
                    Coming Soon
                  </span>
                  <h3 className="text-base font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {project.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
