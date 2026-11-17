import { Badge } from "@/components/ui/badge"

export function Platforms() {
  return (
    <section className="px-4 py-12 md:py-24 border-y border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Tersedia untuk</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            FuwaStream dirilis untuk Android. Unduh melalui halaman unduhan.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <div className="rounded-xl border border-border bg-card p-8">
            <Badge variant="brand">Android</Badge>
            <h3 className="mt-4 text-xl font-semibold">Android APK</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Unduh berkas APK terbaru dari rilis resmi GitHub dan pasang
              secara manual. Cocok untuk sebagian besar perangkat Android.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-8">
            <Badge variant="default">Source</Badge>
            <h3 className="mt-4 text-xl font-semibold">Bangun dari sumber</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Kode sumber tersedia di GitHub untuk komunitas yang ingin
              mengkompilasi atau mengembangkan aplikasi sendiri.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-8">
            <Badge variant="default">Tidak ada iOS / Web</Badge>
            <h3 className="mt-4 text-xl font-semibold">Tidak ada iOS / Web</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Saat ini FuwaStream fokus pada Android. Situs ini berisi
              dokumentasi dan unduhan untuk platform Android.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
