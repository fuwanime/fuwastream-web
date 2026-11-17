import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/site-config"

export function Hero() {
  return (
    <section className="relative px-4 py-12 md:py-24 overflow-hidden bg-surface">
      <div className="mx-auto max-w-7xl">
        <div className="md:flex md:items-center md:gap-12">
          <div className="order-2 md:order-1 md:w-1/2">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center rounded-full border border-brand/30 bg-brand/10 px-2.5 py-0.5 text-label-small font-medium text-brand">
                Android
              </span>
              <span className="text-label-small font-medium text-muted-foreground">
                Gratis &amp; tanpa iklan
              </span>
            </div>
            <h1 className="text-display-large font-medium leading-tight tracking-tight mb-3">
              FuwaStream
            </h1>
            <p className="mt-2 text-title-large italic text-on-surface-variant">
              "Nonton anime dan baca manga di Android, tanpa iklan."
            </p>
            <p className="mt-4 text-body-large text-muted-foreground max-w-md">
              A free, open-source anime and manga client for Android. Stream
              episodes, read chapters, save for offline viewing — no ads, no
              account required.
            </p>
            <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297l-6 6.093 1.428 1.428L12 10.15l5.572 4.17 1.428-1.428L12 6.408z"/><path fill-rule="evenodd" d="M12 7.776c-3.792 0-7 2.625-7 5.845s3.208 5.845 7 5.845 7-2.625 7-5.845-3.207-5.845-7-5.845zM7.003 12.83c-.582 0-1.055-.473-1.055-1.055s.473-1.055 1.055-1.055 1.055.473 1.055 1.055-.473 1.055-1.055 1.055zm4.495-4.803c-.582 0-1.055.473-1.055 1.055s.473 1.055 1.055 1.055 1.055-.473 1.055-1.055-.473-1.055-1.055-1.055zm4.035 4.803c-.582 0-1.055.473-1.055 1.055s.473 1.055 1.055 1.055 1.055-.473 1.055-1.055-.473-1.055-1.055-1.055z"/></svg>
                22★ GitHub
              </span>
              <span className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 0 0-8 8c0 4.411 3.582 8 8 8s8-3.589 8-8a8 8 0 0 0-8-8zm0 13c-3.859 0-7-3.141-7-7s3.141-7 7-7 7 3.141 7 7-3.141 7-7 7zm0-9c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"/></svg>
                7 fork
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Button asChild size="large">
                <Link href="/download">Unduh APK</Link>
              </Button>
              <Button variant="outlined" asChild size="large">
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
          <div className="order-1 md:order-2 md:w-1/2 mt-8 md:mt-0">
            <div className="relative aspect-[9/16] overflow-hidden rounded-3xl border border-border bg-surface-container-high shadow-lg">
              <Image
                src="/images/screenshots/home.webp"
                alt="FuwaStream home screen showing anime catalog"
                fill
                sizes="(max-width: 768px) 100vw, 520px"
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-label-small text-muted-foreground text-center">
              Layar beranda aplikasi
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
