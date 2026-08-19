import Link from "next/link"
import { PageShell } from "@/components/page-shell"
import { Button } from "@/components/ui/button"

const dimensions = ["Market fit", "Offer value", "Lead activity", "Funnel gap", "Operational maturity", "Sales ownership", "Implementation readiness"]

export default function Fit7Page() {
  return <PageShell><section className="py-20 sm:py-28"><div className="mx-auto max-w-5xl px-4 sm:px-6"><p className="font-mono text-sm uppercase tracking-[.2em] text-primary">FIT-7™ Assessment</p><h1 className="mt-4 text-4xl font-bold sm:text-6xl">Find the constraint before building the funnel.</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">FIT-7™ is NorthForge’s preliminary framework for examining seven conditions that influence whether a lead and booking system is ready to be built, repaired or nurtured first.</p><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{dimensions.map((item, index) => <div key={item} className="rounded-xl border border-border bg-card p-5"><span className="font-mono text-sm text-primary">0{index + 1}</span><h2 className="mt-3 font-semibold">{item}</h2></div>)}</div><div className="mt-12 rounded-2xl border border-border bg-muted/30 p-7"><h2 className="text-xl font-semibold">Assessment launch status</h2><p className="mt-3 text-muted-foreground">The public scoring form will activate only after its privacy contact, secure data destination and retention procedure are connected and tested. No personal assessment data is being collected on this page yet.</p><Button asChild className="mt-6"><Link href="/start-project?service=lead-booking-funnel-systems">Request a manual funnel review</Link></Button></div></div></section></PageShell>
}
