import { Suspense } from "react"
import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { InquiryForm } from "@/components/inquiry-form"

export const metadata: Metadata = {
  title: "Start a Project | NorthForge Digital Solutions",
  description: "Review project requirements and contact NorthForge Digital Solutions about a structured digital-service engagement.",
}

export default function StartProjectPage() {
  return <PageShell><section className="py-16 sm:py-24"><div className="mx-auto max-w-3xl px-4 sm:px-6"><p className="font-mono text-sm uppercase tracking-[.2em] text-primary">Project-readiness preview</p><h1 className="mt-3 text-4xl font-bold sm:text-5xl">Prepare a project request</h1><p className="mt-5 text-muted-foreground">Use the fields below to check whether your request contains the information needed for an initial review. This preview does not transmit or store entries.</p><p className="mt-3 mb-10 text-muted-foreground">Ready to speak with us? Email <a className="text-primary underline" href="mailto:hello.northforge@gmail.com?subject=NorthForge%20project%20inquiry">hello.northforge@gmail.com</a> with your required service, desired outcome and timeline.</p><Suspense fallback={<p>Loading project form…</p>}><InquiryForm /></Suspense></div></section></PageShell>
}
