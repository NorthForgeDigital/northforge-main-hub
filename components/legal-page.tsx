import { PageShell } from "@/components/page-shell"

export function LegalPage({ eyebrow, title, updated = "19 August 2026", children }: { eyebrow: string; title: string; updated?: string; children: React.ReactNode }) {
  return <PageShell><article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24"><p className="font-mono text-sm uppercase tracking-[.2em] text-primary">{eyebrow}</p><h1 className="mt-3 text-4xl font-bold sm:text-5xl">{title}</h1><p className="mt-3 text-sm text-muted-foreground">Foundation draft · Last updated {updated}</p><div className="prose-northforge mt-10 space-y-8 text-muted-foreground">{children}</div><div className="mt-12 rounded-xl border border-amber-500/30 bg-amber-500/5 p-5 text-sm text-muted-foreground">This page is a launch-readiness foundation and should be reviewed by qualified Philippine counsel before NorthForge begins collecting live client or contractor data at scale.</div></article></PageShell>
}
