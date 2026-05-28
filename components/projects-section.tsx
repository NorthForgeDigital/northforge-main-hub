import { Card } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Brand Launch",
    category: "Branding & Automation",
    description: "Complete brand identity and automated marketing workflows for a DTC startup.",
  },
  {
    title: "YouTube Channel System",
    category: "Content Systems",
    description: "Built a sustainable content production system growing to 100K+ subscribers.",
  },
  {
    title: "AI Content Pipeline",
    category: "Workflow Automation",
    description: "Automated content repurposing pipeline reducing production time by 70%.",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            A selection of our recent work showcasing the impact of AI-enhanced digital
            solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <ArrowUpRight className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold text-foreground mt-2 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
