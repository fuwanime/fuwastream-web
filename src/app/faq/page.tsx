export const metadata = {
  title: "FAQ | FuwaStream",
  description: "Pertanyaan umum tentang FuwaStream: platform, konten, privasi, dan pembaruan.",
}

const FAQ = [
  {
    q: "Apa itu FuwaStream?",
    a:
      "FuwaStream adalah aplikasi klien anime dan manga gratis untuk Android. Pengguna dapat menonton episode anime, membaca chapter manga, dan menyimpan konten untuk ditikuni offline, tanpa iklan dan tanpa akun.",
  },
  {
    q: "Di platform apa FuwaStream tersedia?",
    a:
      "Saat ini FuwaStream fokus pada Android. Unduhan resmi tersedia sebagai berkas APK melalui GitHub Releases. Tidak ada versi iOS atau web resmi saat ini.",
  },
  {
    q: "Apakah FuwaStream menyimpan atau menyediakan anime dan manga?",
    a:
      "Tidak. FuwaStream adalah aplikasi klien dan tidak menyimpan, tidak menyediakan, dan tidak mendistribusikan konten anime atau manga secara sendiri.",
  },
  {
    q: "Apakah perlu membuat akun?",
    a:
      "Tidak. FuwaStream dapat digunakan segera setelah pemasangan tanpa pendaftaran atau login.",
  },
  {
    q: "Apakah FuwaStream gratis dan tanpa iklan?",
    a:
      "Ya. Aplikasi ini gratis digunakan dan tidak menampilkan iklan dalam aplikasi.",
  },
  {
    q: "Di mana saya bisa melaporkan bug atau usulkan fitur?",
    a:
      "Masukkan laporan bug atau usulan fitur melalui GitHub Issues di repositori resmi fuwanime/fuwastream.",
  },
  {
    q: "Bagaimana cara memperbarui FuwaStream?",
    a:
      "Unduh APK terbaru dari GitHub Releases dan pasang ulang — instalasi atas versi yang ada akan memperbarui aplikasi.",
  },
  {
    q: "Bisakah saya berkontribusi ke FuwaStream?",
    a:
      "Ya. FuwaStream adalah proyek open source. Buka pull request atau diskusi di repositori GitHub resmi.",
  },
]

export default function FAQPage() {
  return (
    <section className="px-4 py-12 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
          Pertanyaan umum
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Semua yang perlu Anda ketahui tentang FuwaStream.
        </p>

        <div className="mt-10 space-y-4">
          {FAQ.map(({ q, a }, i) => (
            <div key={i} className="border-b border-border pb-6 last:border-0">
              <h3 className="text-lg font-semibold mb-2">{q}</h3>
              <p className="text-muted-foreground leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
