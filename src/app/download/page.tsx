import Link from "next/link"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/site-config"

export const metadata = {
  title: "Download | FuwaStream",
  description:
    "Unduh FuwaStream untuk Android. Rilis resmi APK tersedia melalui GitHub Releases.",
}

export default function DownloadPage() {
  return (
    <section className="px-4 py-12 md:py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
          Unduh FuwaStream
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Rilis resmi untuk Android. FuwaStream adalah aplikasi klien anime dan
          manga gratis tanpa iklan.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href={`${site.github}/releases/latest`}>
              Unduh rilis terbaru (APK)
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg" className="w-full sm:w-auto">
            <Link href={`${site.github}/releases`}>Lihat semua rilis</Link>
          </Button>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Cara pemasangan</h2>
          <ol className="list-decimal list-inside space-y-3 text-muted-foreground leading-relaxed">
            <li>
              Unduh berkas APK terbaru dari{" "}
              <Link href={`${site.github}/releases/latest`}>GitHub Releases</Link>.
            </li>
            <li>
              Buka berkas APK yang diunduh. Jika diminta, izinkan pemasangan
              aplikasi dari sumber tidak dikenal melalui pengaturan Android.
            </li>
            <li>
              Ikuti petunjuk layar hingga pemasangan selesai, lalu buka
              FuwaStream.
            </li>
          </ol>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Persyaratan sistem</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Perangkat Android</li>
            <li>Izinkan pemasangan dari sumber tidak dikenal (untuk APK)</li>
            <li>Koneksi internet untuk streaming dan membaca konten</li>
          </ul>
          <p className="mt-3 text-xs text-muted-foreground">
            Versi Android minimum ditentukan oleh pengembang aplikasi dan
            tercantum dalam rilis GitHub.
          </p>
        </section>

        <section className="mt-16 rounded-xl border border-border bg-secondary p-6">
          <h2 className="text-xl font-semibold mb-3">Bangun dari sumber</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Kode sumber tersedia di{" "}
            <Link href={site.github} className="text-brand hover:underline">
              GitHub
            </Link>{" "}
            untuk komunitas yang ingin mengkompilasi atau mengembangkan
            aplikasi sendiri. Instruksi kompilasi ada dalam berkas README
            repositori.
          </p>
          <p className="text-xs text-muted-foreground">
            Rilis yang disediakan melalui GitHub Releases adalah rilis stabil
            resmi. Cabang rilis lain (beta/nightly) tidak dikelola oleh situs
            ini kecuali diberitakan secara resmi.
          </p>
        </section>
      </div>
    </section>
  )
}
