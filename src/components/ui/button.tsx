"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "filled-tonal" | "outlined" | "text"
  size?: "small" | "medium" | "large"
  asChild?: boolean
}

const variants = {
  filled:
    "bg-brand text-brand-foreground hover:bg-brand/90 active:bg-brand/80",
  "filled-tonal":
    "bg-secondary text-secondary-foreground hover:bg-secondary/90 active:bg-secondary/80",
  outlined:
    "border border-input bg-transparent hover:bg-surface-container-high active:bg-surface-container-highest",
  text:
    "bg-transparent hover:bg-surface-container-high active:bg-surface-container-highest text-brand",
}

const sizes = {
  small: "h-8 px-3 text-xs",
  medium: "h-10 px-4 py-2 text-sm",
  large: "h-12 px-6 text-sm font-medium",
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "filled-tonal", size = "medium", asChild = false, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : "button"
    return (
      <Comp
        ref={ref as any}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-medium transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50",
          "elevation-0 hover:elevation-1 active:elevation-0",
          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"
