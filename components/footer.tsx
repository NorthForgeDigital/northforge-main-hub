import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg font-bold text-foreground">
              North<span className="text-primary">Forge</span>
            </span>
          </Link>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} NorthForge Digital Solutions. All rights reserved.
          </p>

          <nav className="flex items-center gap-6">
            <Link
              href="#services"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="#projects"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
