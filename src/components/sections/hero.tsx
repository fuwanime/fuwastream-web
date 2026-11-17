import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/site-config"

export function Hero() {
  return (
    <section className="relative px-4 py-12 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="md:flex md:items-center md:gap-12">
          <div className="order-2 md:order-1 md:w-1/2">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center rounded-full border border-brand/30 bg-brand/10 px-2.5 py-0.5 text-xs font-semibold text-brand">
                Android
              </span>
              <span className="text-xs font-medium text-muted-foreground">
                Gratis &amp; tanpa iklan
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              FuwaStream
            </h1>
            <p className="mt-4 text-xl text-muted-foreground italic">
              "Nonton anime dan baca manga di Android, tanpa iklan."
            </p>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              A free, open-source anime and manga client for Android. Stream
              episodes, read chapters, save for offline viewing — no ads, no
              account required.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-10">
              <Button asChild size="lg">
                <Link href="/download">Unduh APK</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lihat di GitHub
                </Link>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 md:w-1/2 mt-10 md:mt-0">
            <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-border bg-secondary shadow-2xl">
              <Image
                src="/images/screenshots/home.webp"
                alt="FuwaStream home screen showing anime catalog"
                fill
                sizes="(max-width: 768px) 100vw, 520px"
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-xs text-muted-foreground text-center">
              Layar beranda aplikasi
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
