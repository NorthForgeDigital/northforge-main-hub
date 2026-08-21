import { Suspense } from "react"
import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { InquiryForm } from "@/components/inquiry-form"

export const metadata: Metadata = {
  title: "Start a Project | NorthForge Digital Solutions",
  description: "Review project requirements and contact NorthForge Digital Solutions about a structured digital-service engagement.",
}

export default function StartProjectPage() {
  return <PageShell><section className="py-16 sm:py-24"><div className="mx-auto max-w-3xl px-4 sm:px-6"><p className="font-mono text-sm uppercase tracking-[.2em] text-primary">Project-readiness preview</p><h1 className="mt-3 text-4xl font-bold sm:text-5xl">Prepare a project request</h1><p className="mt-5 text-muted-foreground">Use the fields below to check whether your request contains the information needed for an initial review. This preview does not transmit or store entries.</p><p className="mt-3 mb-10 text-muted-foreground">Ready to speak with us? Email <a className="text-primary underline" href="mailto:hello.northforge@gmail.com?subject=NorthForge%20project%20inquiry">hello.northforge@gmail.com</a> with your required service, desired outcome and timeline.</p><Suspense fallback={<p>Loading project form…</p>}><InquiryForm /></Suspense><section className="mt-10 rounded-2xl border border-border bg-card p-6 sm:p-8"><h2 className="text-2xl font-bold">How project communication works</h2><div className="mt-5 grid gap-5 text-sm leading-6 text-muted-foreground"><p><strong className="text-foreground">Email is the official record.</strong> Scope decisions, approvals, material changes and milestones are confirmed in writing.</p><p><strong className="text-foreground">The first 48 hours protect focused work.</strong> After kickoff, this period may be used for setup, research, planning and initial production. NorthForge will contact you if information or a decision is required.</p><p><strong className="text-foreground">WhatsApp is optional.</strong> For active projects expected to run longer than 48 hours, a WhatsApp contact may be opened after kickoff for necessary operational updates. Important decisions are still confirmed by email.</p><p><strong className="text-foreground">Calls are purposeful.</strong> Calls are scheduled only when clarification or discovery cannot be handled efficiently in writing.</p></div></section></div></section></PageShell>
}
