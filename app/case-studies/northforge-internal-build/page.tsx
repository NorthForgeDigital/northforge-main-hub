import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { PageShell } from "@/components/page-shell"

export const metadata: Metadata = {
  title: "NorthForge Internal Website & Lead-System Build | Case Study",
  description: "An owned internal case study covering NorthForge's service architecture, website, qualification routes, funnel planning and deployment workflow.",
  alternates: { canonical: "/case-studies/northforge-internal-build" },
}

const delivered = [
  "Responsive Next.js website and reusable page structure",
  "Fourteen-service catalog with dedicated service routes",
  "Service-specific project-readiness and inquiry routing",
  "FORGE™ funnel and FIT-7™ assessment entry points",
  "Privacy, terms and intellectual-property foundations",
  "GitHub branch workflow with Vercel Preview and Production environments",
  "CRM-ready lead fields, source tags and inquiry-ID design",
  "On-page metadata, canonical URLs, sitemap, robots rules and structured data",
]

export default function NorthForgeInternalBuildPage() {
  return <PageShell><article className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
    <p className="font-mono text-sm uppercase tracking-[.2em] text-primary">Owned/Internal Project · Not client work</p>
    <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">NorthForge Website & Lead-System Build</h1>
    <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">NorthForge is its own first systems project: a structured digital-service website and lead-qualification foundation designed, organized and implemented under Clarke Orduña&apos;s direction.</p>

    <div className="mt-12 grid gap-6 md:grid-cols-3">
      <section className="nf-interactive-card rounded-2xl border border-border bg-card p-6"><h2 className="text-lg font-semibold">Challenge</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">Turn a broad service business into a clear, navigable offer without inventing client results or publishing an unsecured intake system.</p></section>
      <section className="nf-interactive-card rounded-2xl border border-border bg-card p-6"><h2 className="text-lg font-semibold">Approach</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">Build the information architecture, service routes, qualification journey, legal foundations and deployment workflow as one coordinated system.</p></section>
      <section className="nf-interactive-card rounded-2xl border border-border bg-card p-6"><h2 className="text-lg font-semibold">Current status</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">Internal build completed for controlled launch. Secure CRM submission and measured outreach performance remain the next implementation stages.</p></section>
    </div>

    <section className="mt-14"><h2 className="text-2xl font-bold">What the build demonstrates</h2><ul className="mt-6 grid gap-4 md:grid-cols-2">{delivered.map((item) => <li key={item} className="flex gap-3 text-muted-foreground"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />{item}</li>)}</ul></section>

    <section className="nf-interactive-card mt-14 rounded-2xl border border-primary/30 bg-primary/5 p-6 sm:p-8"><h2 className="text-2xl font-bold">Evidence policy</h2><p className="mt-4 leading-7 text-muted-foreground">This page documents an owned internal project. It does not claim client revenue, conversion increases, search rankings or lead volume. Results will be added only after outreach and live-system performance are measured.</p></section>

    <div className="mt-12 flex flex-wrap gap-4"><Link className="nf-button group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground" href="mailto:hello.northforge@gmail.com?subject=NorthForge%20project%20inquiry">Discuss a project <ArrowRight className="h-4 w-4" /></Link><Link className="nf-button group inline-flex items-center rounded-xl border border-border px-6 py-3 font-semibold" href="/#services">Explore services</Link></div>
  </article></PageShell>
}
