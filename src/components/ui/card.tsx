"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type CardProps = React.HTMLAttributes<HTMLDivElement>

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl border border-border bg-card text-card-foreground",
      "elevation-0 hover:elevation-2 transition-all duration-200",
      className,
    )}
    {...props}
  />
))
Card.displayName = "Card"

type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>
export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  ),
)
CardHeader.displayName = "CardHeader"

type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement>
export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        "text-title-large font-medium leading-tight tracking-tight",
        className,
      )}
      {...props}
    />
  ),
)
CardTitle.displayName = "CardTitle"

type CardContentProps = React.HTMLAttributes<HTMLDivElement>
export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0 text-body-medium", className)} {...props} />
  ),
)
CardContent.displayName = "CardContent"

type CardFooterProps = React.HTMLAttributes<HTMLDivElement>
export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center p-6 pt-0 text-label-large", className)}
      {...props}
    />
  ),
)
CardFooter.displayName = "CardFooter"
