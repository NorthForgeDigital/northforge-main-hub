import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, MessageSquareText, ShieldCheck } from "lucide-react"
import { PageShell } from "@/components/page-shell"

export const metadata: Metadata = {
  title: "What Do You Think? | NorthForge Digital Solutions",
  description: "Choose the appropriate NorthForge feedback route for website observations or completed-project feedback.",
}

export default function FeedbackPage() {
  return <PageShell><section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24"><p className="font-mono text-sm uppercase tracking-[.2em] text-primary">What Do You Think?</p><h1 className="mt-3 text-4xl font-bold sm:text-5xl">Help us improve with the right kind of feedback.</h1><p className="mt-5 max-w-3xl text-muted-foreground">Choose the route that matches your experience. Project feedback is verified and reviewed before any testimonial is considered for publication.</p><div className="mt-12 grid gap-6 md:grid-cols-2"><article className="rounded-2xl border border-border bg-card p-7"><MessageSquareText className="h-8 w-8 text-primary" /><h2 className="mt-5 text-2xl font-bold">Send Website Feedback</h2><p className="mt-3 leading-7 text-muted-foreground">For visitors reporting confusing content, broken links, accessibility concerns or ideas that could make the website easier to use.</p><Link className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:underline" href="/feedback/website">Share website feedback <ArrowRight className="h-4 w-4" /></Link></article><article className="rounded-2xl border border-border bg-card p-7"><ShieldCheck className="h-8 w-8 text-primary" /><h2 className="mt-5 text-2xl font-bold">Share Project Feedback</h2><p className="mt-3 leading-7 text-muted-foreground">For verified NorthForge clients after final delivery. Your delivery email will provide the project or inquiry reference needed for this route.</p><Link className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:underline" href="/feedback/project">Review a completed project <ArrowRight className="h-4 w-4" /></Link></article></div></section></PageShell>
}
