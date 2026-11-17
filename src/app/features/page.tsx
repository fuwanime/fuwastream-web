import Link from "next/link"

export const metadata = {
  title: "Features | FuwaStream",
  description:
    "FuwaStream features: anime streaming, manga reading, offline saved episodes, ad-free, and open source for Android.",
}

export default function FeaturesPage() {
  return (
    <section className="px-4 py-12 md:py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
          Fitur FuwaStream
        </h1>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold mb-6">Streaming anime</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Putar episode anime langsung dari aplikasi dengan antarmuka yang
              difokuskan pada kenyamanan penonton. Pilihan judul ditampilkan
              dalam katalog yang dapat ditelusuri.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Membaca manga</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Koleksi chapter manga tersedia dalam aplikasi yang sama. Pembaca
              manga dirancang untuk nyaman diakses kapan saja Anda ingin
              melanjutkan cerita.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">
              Simpan tonton dan baca nanti (offline)
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Simpan episode dan chapter agar tersedia tanpa koneksi internet,
              sehingga hiburan tetap tersedia kapan saja dan di mana saja.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Tanpa iklan</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              FuwaStream tidak menampilkan iklan dalam aplikasi — pengalaman
              sederhana, cepat, dan difokuskan pada konten.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Tanpa akun</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Tidak perlu mendaftar atau login untuk menggunakan aplikasi.
              Unduh, pasang, dan mulai langsung.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Open source</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Kode sumber FuwaStream tersedia secara publik di GitHub. Aplikasi dikembangkan
              secara terbuka dan kontribusi dari komunitas dipersilakan.
            </p>
          </section>

          <section className="rounded-xl border border-border bg-secondary p-6">
            <h2 className="text-xl font-semibold mb-3">Tentang platform</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              FuwaStream adalah aplikasi klien untuk Android. Aplikasi ini{" "}
              <strong>tidak menyimpan, tidak menyediakan, dan tidak mendistribusikan</strong>
              konten anime atau manga sendiri — ia adalah antarmuka klien yang
              menghubungkan pengguna dengan sumber yang tersedia.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            Detail teknis dan daftar lengkap fitur tersedia di{" "}
            <Link href="https://github.com/fuwanime/fuwastream" className="text-brand hover:underline font-medium">
              repositori resmi fuwanime/fuwastream
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
