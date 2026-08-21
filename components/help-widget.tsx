"use client"

import { useState } from "react"
import Link from "next/link"
import { CircleHelp, X } from "lucide-react"

export function HelpWidget() {
  const [open, setOpen] = useState(false)
  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open && (
        <div className="mb-3 w-[min(22rem,calc(100vw-2rem))] rounded-2xl border border-border bg-card p-5 shadow-2xl">
          <div className="flex items-start justify-between gap-4">
            <div><p className="font-semibold">How can we help?</p><p className="mt-1 text-sm text-muted-foreground">Choose the simplest next step.</p></div>
            <button onClick={() => setOpen(false)} aria-label="Close help"><X className="h-5 w-5" /></button>
          </div>
          <div className="mt-4 grid gap-2 text-sm">
            <Link className="rounded-lg border border-border p-3 hover:border-primary/60" href="/#services">Compare all services</Link>
            <Link className="rounded-lg border border-border p-3 hover:border-primary/60" href="/start-project?service=custom-project">Help me choose a service</Link>
            <Link className="rounded-lg border border-border p-3 hover:border-primary/60" href="/funnels/fit-7">Check funnel readiness with FIT-7™</Link>
            <Link className="rounded-lg border border-border p-3 hover:border-primary/60" href="/feedback">What do you think?</Link>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">NorthForge reviews every request. The Help panel does not collect sensitive information.</p>
        </div>
      )}
      <button onClick={() => setOpen(!open)} className="ml-auto flex items-center gap-2 rounded-full bg-primary px-4 py-3 font-semibold text-primary-foreground shadow-xl" aria-expanded={open}>
        <CircleHelp className="h-5 w-5" /> Help
      </button>
    </div>
  )
}
