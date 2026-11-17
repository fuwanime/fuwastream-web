import { Hero } from "@/components/sections/hero"
import { FeatureGrid } from "@/components/sections/features"
import { ScreenshotGallery } from "@/components/sections/screenshots"
import { Platforms } from "@/components/sections/platforms"
import { CtaSection } from "@/components/sections/cta"

export const metadata = {
  title: "FuwaStream — Anime & Manga Client for Android",
  description:
    "FuwaStream is a free, ad-free anime and manga client for Android. Stream episodes, read chapters, save for offline viewing.",
  openGraph: {
    title: "FuwaStream — Anime & Manga Client for Android",
    description:
      "Free, ad-free anime and manga client for Android. Stream episodes, read chapters, save for offline.",
    type: "website",
    images: [{ url: "/images/brand/banner.webp", width: 1760, height: 900 }],
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <ScreenshotGallery />
      <Platforms />
      <CtaSection />
    </>
  )
}
