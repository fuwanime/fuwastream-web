"use client"

import { useState } from "react"
import Link from "next/link"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { site, navLinks } from "@/lib/site-config"
import { cn } from "@/lib/utils"

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="FuwaStream home"
        >
          <img
            src="/images/brand/icon-512.png"
            alt="FuwaStream"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="font-bold text-xl tracking-tight text-brand">fuwastream</span>
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpen((o) => !o)}
            className="rounded-md p-2 text-muted-foreground hover:text-foreground hover:bg-accent"
            aria-label="Open main menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
          <ThemeToggle />
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col gap-4 p-6 text-center",
          open
            ? "translate-y-0 opacity-100"
            : "translate-y-[-120%] opacity-0 pointer-events-none",
          "transition-all duration-200",
        )}
        role="navigation"
        aria-label="Main menu"
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="text-xl font-medium block hover:text-brand transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 text-sm underline underline-offset-4"
        >
          View on GitHub
        </a>
      </div>
    </nav>
  )
}
