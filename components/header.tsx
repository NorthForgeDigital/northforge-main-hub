"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Brand } from "@/components/brand"

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/funnels", label: "Funnel Systems" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/#talk-to-us", label: "Talk to Us" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("")
      return
    }

    const sectionIds = ["services", "why-us", "talk-to-us"]
    const updateActiveSection = () => {
      const marker = window.scrollY + window.innerHeight * 0.3
      const active = sectionIds.find((id) => {
        const section = document.getElementById(id)
        if (!section) return false
        return marker >= section.offsetTop && marker < section.offsetTop + section.offsetHeight
      })
      setActiveSection(active ?? "")
    }

    updateActiveSection()
    window.addEventListener("scroll", updateActiveSection, { passive: true })
    window.addEventListener("resize", updateActiveSection)
    return () => {
      window.removeEventListener("scroll", updateActiveSection)
      window.removeEventListener("resize", updateActiveSection)
    }
  }, [pathname])

  const isActive = (href: string) => {
    if (href === "/funnels") return pathname.startsWith("/funnels")
    if (href === "/#services") return pathname.startsWith("/services") || activeSection === "services"
    if (href === "/#why-us") return pathname === "/" && activeSection === "why-us"
    if (href === "/#talk-to-us") return pathname === "/" && activeSection === "talk-to-us"
    return false
  }

  const projectActive = pathname.startsWith("/start-project")

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Brand />

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`relative rounded-full px-3 py-2 text-sm transition-all duration-200 ${isActive(link.href) ? "bg-primary/10 text-primary shadow-[0_0_24px_rgba(20,184,166,.12)]" : "text-muted-foreground hover:bg-primary/5 hover:text-primary"}`}
              >
                {link.label}
                {isActive(link.href) && <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary" />}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button asChild className={projectActive ? "ring-2 ring-primary ring-offset-2 ring-offset-background shadow-[0_0_30px_rgba(20,184,166,.28)]" : ""}>
              <Link href="/start-project" aria-current={projectActive ? "page" : undefined}>Start a Project</Link>
            </Button>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`block rounded-lg px-3 py-2 text-sm transition-colors duration-200 ${isActive(link.href) ? "bg-primary/10 font-semibold text-primary" : "text-muted-foreground hover:bg-primary/5 hover:text-primary"}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className={`mt-4 w-full ${projectActive ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""}`}>
              <Link href="/start-project" aria-current={projectActive ? "page" : undefined} onClick={() => setMobileMenuOpen(false)}>
                Start a Project
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
