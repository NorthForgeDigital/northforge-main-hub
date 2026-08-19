import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"
import { PageShell } from "@/components/page-shell"
import { Button } from "@/components/ui/button"
import { getService, services } from "@/lib/services"

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })) }

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()
  return (
    <PageShell>
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,.12),transparent_38%)]" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Link href="/#services" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"><ArrowLeft className="h-4 w-4" /> All services</Link>
          <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
            <div>
              <div className="mb-5 grid h-14 w-14 place-items-center rounded-xl bg-primary/10"><service.icon className="h-7 w-7 text-primary" /></div>
              <p className="font-mono text-sm uppercase tracking-[.2em] text-primary">NorthForge Digital Solutions</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">{service.title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{service.description}</p>
              <h2 className="mt-10 text-xl font-semibold">Typical outcomes</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {service.outcomes.map((outcome) => <li key={outcome} className="flex gap-3 text-muted-foreground"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />{outcome}</li>)}
              </ul>
            </div>
            <aside className="h-fit rounded-2xl border border-border bg-card p-6">
              <p className="text-sm text-muted-foreground">Indicative starting price</p>
              <p className="mt-1 text-2xl font-bold">{service.startingAt ?? "Request a scope"}</p>
              <p className="mt-5 text-sm text-muted-foreground">Typical timeline</p>
              <p className="mt-1 font-semibold">{service.timeline}</p>
              <p className="mt-5 text-xs leading-5 text-muted-foreground">Final scope, price, schedule, taxes and third-party costs are confirmed in writing before work begins.</p>
              <Button asChild className="mt-6 w-full"><Link href={`/start-project?service=${service.slug}`}>Request this service <ArrowRight /></Link></Button>
            </aside>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
