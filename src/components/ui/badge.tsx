"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "filled" | "outlined" | "brand"
}

const variants = {
  filled: "bg-brand text-brand-foreground",
  outlined: "border border-border bg-surface-container-low text-on-surface-variant",
  brand: "bg-brand/10 border border-brand/20 text-brand",
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "outlined", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-label-small font-medium transition-colors",
        variants[variant],
        className,
      )}
      {...props}
    />
  ),
)
Badge.displayName = "Badge"
