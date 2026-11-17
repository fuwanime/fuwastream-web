import Image from "next/image"

interface Shot {
  src: string
  alt: string
  label: string
}

const SHOTS: Shot[] = [
  { src: "/images/screenshots/explore.webp", alt: "Explore catalog", label: "Explore" },
  { src: "/images/screenshots/detail.webp", alt: "Anime detail page", label: "Detail" },
  { src: "/images/screenshots/player.webp", alt: "Video player", label: "Player" },
  { src: "/images/screenshots/collection.webp", alt: "Saved collection", label: "Koleksi" },
  { src: "/images/screenshots/schedule.webp", alt: "Release schedule", label: "Jadwal" },
  { src: "/images/screenshots/settings.webp", alt: "Settings", label: "Pengaturan" },
  { src: "/images/screenshots/offline.webp", alt: "Offline mode", label: "Offline" },
]

export function ScreenshotGallery() {
  return (
    <section className="px-4 py-12 md:py-24 bg-surface">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-headline-large font-medium tracking-tight">Tampilan aplikasi</h2>
          <p className="mt-4 text-body-large text-muted-foreground">
            Layar aktual dari FuwaStream untuk Android.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {SHOTS.map((shot) => (
            <div key={shot.src} className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-border bg-surface-container-low shadow-sm">
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
