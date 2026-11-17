export const metadata = {
  title: "Troubleshooting | FuwaStream Docs",
  description: "Masalah umum dan solusinya untuk FuwaStream Android.",
}

export default function TroubleshootingPage() {
  return (
    <section className="px-4 py-12 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
          Troubleshooting
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Masalah yang sering dialami pengguna dan cara mengatasinya.
        </p>

        <section className="mt-12 space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Tidak bisa memasang APK
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Pastikan Anda telah mengizinkan pemasangan aplikasi dari sumber
              tidak dikenal di pengaturan Android, dan berkas APK tidak
              rusak. Unduh ulang dari rilis resmi jika perlu.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              Aplikasi tertutup tiba-tiba (crash)
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Pastikan perangkat memenuhi persyaratan sistem dan sistem
              operasi Android Anda diperbarui. Jika masalah berlanjut, laporkan
              melalui GitHub Issues dengan detail perangkat dan versi
              aplikasi.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              Konten tidak dimuat
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Periksa koneksi internet Anda. FuwaStream memerlukan koneksi
              untuk streaming dan membaca konten, kecuali konten yang telah
              disimpan untuk offline.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              Versi aplikasi lama
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Periksa apakah terdapat rilis baru di GitHub Releases dan
              pasang ulang dengan APK terbaru.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-xl border border-border bg-secondary p-6">
          <h2 className="text-xl font-semibold mb-3">Laporkan bug</h2>
          <p className="text-muted-foreground leading-relaxed">
            Jika solusi di atas tidak membantu, buat issue di repositori resmi
            dengan deskripsi yang jelas, model perangkat, versi Android, dan
            versi aplikasi yang Anda gunakan.
          </p>
          <p className="mt-3">
            <a
              href="https://github.com/fuwanime/fuwastream/issues"
              className="text-brand hover:underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buat issue baru di GitHub
            </a>
          </p>
        </section>
      </div>
    </section>
  )
}
