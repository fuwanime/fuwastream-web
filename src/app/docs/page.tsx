import Link from "next/link"

export const metadata = {
  title: "Docs | FuwaStream",
  description: "Panduan pemasangan, penyiapan awal, dan dokumentasi FuwaStream untuk Android.",
}

export default function DocsPage() {
  return (
    <section className="px-4 py-12 md:py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
          Dokumentasi
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Panduan pemasangan, penyiapan awal, dan troubleshooting untuk
          FuwaStream Android.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <a
            href="/docs/installation"
            className="rounded-xl border border-border bg-card p-6 hover:border-brand/50 transition-colors flex flex-col gap-3"
          >
            <span className="text-sm font-semibold">Pemasangan</span>
            <p className="text-sm text-muted-foreground">
              Cara mengunduh dan memasang APK FuwaStream di Android.
            </p>
          </a>
          <a
            href="/docs/setup"
            className="rounded-xl border border-border bg-card p-6 hover:border-brand/50 transition-colors flex flex-col gap-3"
          >
            <span className="text-sm font-semibold">Penyiapan awal</span>
            <p className="text-sm text-muted-foreground">
              Langkah pertama setelah membuka aplikasi.
            </p>
          </a>
          <a
            href="/docs/troubleshooting"
            className="rounded-xl border border-border bg-card p-6 hover:border-brand/50 transition-colors flex flex-col gap-3"
          >
            <span className="text-sm font-semibold">Troubleshooting</span>
            <p className="text-sm text-muted-foreground">
              Masalah umum dan solusinya.
            </p>
          </a>
        </div>

        <section className="mt-16 rounded-xl border border-border bg-secondary p-6">
          <h2 className="text-xl font-semibold mb-3">Berkontribusi</h2>
          <p className="text-muted-foreground leading-relaxed">
            FuwaStream dikembangkan secara terbuka. Laporkan bug, usulkan
            fitur, atau kirimkan pull request melalui repositori resmi.
          </p>
          <p className="mt-3">
            <Link
              href="https://github.com/fuwanime/fuwastream"
              className="text-brand hover:underline font-medium"
            >
              Buka repositori fuwanime/fuwastream
            </Link>
          </p>
        </section>
      </div>
    </section>
  )
}
