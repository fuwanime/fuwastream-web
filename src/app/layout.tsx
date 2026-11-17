import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Nav } from "@/components/layout/nav"
import { Footer } from "@/components/layout/footer"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#0a0a0a" }],
}

export const metadata: Metadata = {
  title: {
    template: "%s | FuwaStream",
    default: "FuwaStream — Anime & Manga Client for Android",
  },
  description:
    "FuwaStream is a free, ad-free anime and manga client for Android. Stream episodes, read chapters, save for offline viewing, and track what you watch.",
  metadataBase: new URL("https://fuwastream.vercel.app"),
  alternates: { canonical: "/" },
  openGraph: {
    siteName: "FuwaStream",
    title: "FuwaStream — Anime & Manga Client for Android",
    description:
      "Free, ad-free anime and manga client for Android. Stream episodes, read chapters, save for offline.",
    type: "website",
    images: [{ url: "/images/brand/banner.webp", width: 1760, height: 900 }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@fuwanime",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
