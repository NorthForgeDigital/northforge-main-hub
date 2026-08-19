import { Suspense } from "react"
import { PageShell } from "@/components/page-shell"
import { InquiryForm } from "@/components/inquiry-form"

export default function StartProjectPage() {
  return <PageShell><section className="py-16 sm:py-24"><div className="mx-auto max-w-3xl px-4 sm:px-6"><p className="font-mono text-sm uppercase tracking-[.2em] text-primary">Qualified project intake</p><h1 className="mt-3 text-4xl font-bold sm:text-5xl">Start a project with NorthForge</h1><p className="mt-5 mb-10 text-muted-foreground">To protect response quality, project requests require a valid monitored email and enough information for an initial fit review.</p><Suspense fallback={<p>Loading project form…</p>}><InquiryForm /></Suspense></div></section></PageShell>
}
