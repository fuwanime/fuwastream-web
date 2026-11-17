import Link from "next/link"

export const metadata = {
  title: "About | FuwaStream",
  description: "Misi, komunitas, dan kontributor proyek FuwaStream.",
}

export default function AboutPage() {
  return (
    <section className="px-4 py-12 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
          Tentang FuwaStream
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Misi, komunitas, dan pengakuan kontributor.
        </p>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Misi</h2>
          <p className="text-muted-foreground leading-relaxed">
            FuwaStream hadir untuk memberikan pengalaman menonton anime dan
            membaca manga di Android yang gratis, sederhana, dan tanpa iklan.
            Aplikasi dikembangkan secara open source dengan komunitas sebagai
            prioritas.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Komunitas resmi</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>
              <Link
                href="https://github.com/fuwanime/fuwastream"
                className="text-brand hover:underline"
              >
                Repositori utama: fuwanime/fuwastream
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/fuwanime/fuwastream-web"
                className="text-brand hover:underline"
              >
                Repositori situs ini: fuwanime/fuwastream-web
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/fuwanime/fuwastream/issues"
                className="text-brand hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Laporkan bug / usulkan fitur
              </Link>
            </li>
          </ul>
        </section>

        <section className="mt-12 rounded-xl border border-border bg-secondary p-6">
          <h2 className="text-xl font-semibold mb-3">Batasan dan kebenaran</h2>
          <p className="text-muted-foreground leading-relaxed">
            FuwaStream adalah aplikasi klien. Aplikasi ini tidak menyimpan,
            tidak menyediakan, dan tidak mendistribusikan konten anime atau
            manga secara sendiri. Semua klaim di situs ini didasarkan pada
            repositori resmi dan tidak berjaminan tentang ketersediaan,
            lisensi, atau legalitas konten pihak ketiga.
          </p>
        </section>
      </div>
    </section>
  )
}
