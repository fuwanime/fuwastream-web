import Link from "next/link"

export const metadata = {
  title: "Installation | FuwaStream Docs",
  description: "Cara mengunduh dan memasang APK FuwaStream di Android.",
}

export default function InstallationPage() {
  return (
    <section className="px-4 py-12 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
          Pemasangan
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Panduan memasang FuwaStream di perangkat Android.
        </p>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">1. Unduh APK</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Unduh berkas APK terbaru dari rilis resmi di GitHub. Hindari berkas
            APK dari sumber pihak ketiga yang tidak resmi.
          </p>
          <div className="mb-6 flex gap-3">
            <Link
              href="https://github.com/fuwanime/fuwastream/releases/latest"
              className="inline-flex items-center gap-2 rounded-md border border-input bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              Unduh APK terbaru
            </Link>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">2. Izinkompas pemasangan</h2>
          <ol className="list-decimal list-inside space-y-3 text-muted-foreground leading-relaxed">
            <li>
              Buka berkas APK yang telah diunduh (biasanya di folder{" "}
              <code className="font-mono text-xs">Download</code>).
            </li>
            <li>
              Android akan meminta izin untuk memasang aplikasi dari sumber
              tidak dikenal. Aktifkan izin untuk penyedia berkas yang Anda
              gunakan (mis. browser atau manajer berkas).
            </li>
            <li>Ikuti petunjuk layar hingga pemasangan selesai.</li>
          </ol>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">3. Buka aplikasi</h2>
          <p className="text-muted-foreground leading-relaxed">
            Buka FuwaStream dari layar beranda perangkat. Tidak perlu
            mendaftar atau membuat akun — aplikasi siap digunakan segera.
          </p>
        </section>

        <section className="mt-12 rounded-xl border border-border bg-secondary p-6">
          <h2 className="text-xl font-semibold mb-3">Penting</h2>
          <p className="text-muted-foreground leading-relaxed">
            FuwaStream adalah aplikasi klien dan{" "}
            <strong>tidak menyimpan, menyediakan, atau mendistribusikan</strong>
            konten anime atau manga secara sendiri. Aplikasi ini adalah
            antarmuka untuk mengakses konten yang tersedia melalui sumber
            terkait.
          </p>
        </section>
      </div>
    </section>
  )
}
