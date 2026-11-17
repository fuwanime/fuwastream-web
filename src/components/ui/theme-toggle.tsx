"use client"

import { useCallback, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)

  const toggle = useCallback(() => {
    const html = document.documentElement
    const isDark = html.classList.contains("dark")
    html.classList.toggle("dark", !isDark)
    localStorage.setItem("fuwa-theme", isDark ? "light" : "dark")
  }, [])

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem("fuwa-theme") as
      | "light"
      | "dark"
      | null
    const html = document.documentElement
    if (stored === "light" || stored === "dark") {
      html.classList.toggle("dark", stored === "dark")
    } else {
      html.classList.toggle(
        "dark",
        !window.matchMedia("(prefers-color-scheme: dark)").matches,
      )
    }
  }, [])

  if (!mounted) return null

  const isDark = document.documentElement.classList.contains("dark")

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Ganti ke mode terang" : "Ganti ke mode gelap"}
      className={cn(
        "inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors",
        "size-8",
      )}
    >
      <span className="sr-only">{isDark ? "Dark mode" : "Light mode"}</span>
      {isDark ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
      )}
    </button>
  )
}
