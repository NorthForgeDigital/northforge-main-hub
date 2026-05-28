import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 sm:py-32 relative bg-muted/30">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Ready to build your next digital project?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 text-balance">
            {"Let's"} work together to create something exceptional. Get in touch and
            start your transformation today.
          </p>
          <Button asChild size="lg" className="group">
            <a href="mailto:hello.northforge@gmail.com?subject=Project Inquiry - NorthForge">
              {"Let's"} Talk
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
