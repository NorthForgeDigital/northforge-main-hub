import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"

export const metadata: Metadata = { title: "Send Website Feedback | NorthForge Digital Solutions", description: "Send usability, accessibility or technical website feedback to NorthForge Digital Solutions." }

export default function WebsiteFeedbackPage() {
  return <PageShell><section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24"><p className="font-mono text-sm uppercase tracking-[.2em] text-primary">Website visitors</p><h1 className="mt-3 text-4xl font-bold sm:text-5xl">Send Website Feedback</h1><p className="mt-5 leading-7 text-muted-foreground">Tell us if a page is confusing, a link is broken, something is difficult to read or you have an idea that could make the NorthForge website easier to use.</p><a className="mt-8 inline-flex rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground" href="mailto:hello.northforge@gmail.com?subject=NorthForge%20website%20feedback">Email website feedback</a><p className="mt-4 text-xs leading-5 text-muted-foreground">Please include the page address and a short description. Do not send passwords, payment details, government identification or confidential client information.</p></section></PageShell>
}
