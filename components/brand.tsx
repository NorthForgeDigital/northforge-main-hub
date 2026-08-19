import Link from "next/link"

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-2" aria-label="NorthForge Digital Solutions home">
      <span className="grid h-9 w-9 place-items-center rounded-lg border border-primary/30 bg-primary/10 font-mono text-sm font-bold text-primary">NF</span>
      <span className="leading-tight">
        <span className="block font-bold tracking-tight text-foreground">North<span className="text-primary">Forge</span></span>
        {!compact && <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">Digital Solutions</span>}
      </span>
    </Link>
  )
}
