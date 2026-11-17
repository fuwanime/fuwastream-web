export const metadata = {
  title: "Penyiapan awal | FuwaStream Docs",
  description: "Langkah pertama setelah membuka FuwaStream untuk Android.",
}

export default function SetupPage() {
  return (
    <section className="px-4 py-12 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
          Penyiapan awal
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Memulai menggunakan FuwaStream setelah pemasangan.
        </p>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Buka aplikasi</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Buka FuwaStream dari layar beranda. Tampilan awal akan menampilkan
            katalog anime dan manga yang tersedia.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Jelajahi konten</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
            <li>Gunakan tab beranda untuk melihat katalog terbaru.</li>
            <li>Pilih judul anime untuk melihat daftar episode.</li>
            <li>Pilih chapter manga untuk mulai membaca.</li>
            <li>Gunakan tombol simpan untuk menonton atau membaca secara offline.</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Pengaturan</h2>
          <p className="text-muted-foreground leading-relaxed">
            Buka menu pengaturan untuk menyesuaikan tampilan dan preferensi
            pembacaan/pemutaran aplikasi.
          </p>
        </section>

        <section className="mt-12 rounded-xl border border-border bg-secondary p-6">
          <h2 className="text-xl font-semibold mb-3">Masih membutuhkan bantuan?</h2>
          <p className="text-muted-foreground">
            Lihat{' '}
            <a href="/docs/troubleshooting" className="text-brand hover:underline">
              Troubleshooting
            </a>{" "}
            atau{" "}
            <a href="/faq" className="text-brand hover:underline">
              FAQ
            </a>
            .
          </p>
        </section>
      </div>
    </section>
  )
}
