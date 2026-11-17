import { site } from "@/lib/site-config"

interface FeatureItem {
  icon: React.ReactNode
  title: string
  body: string
}

const FEATURES: FeatureItem[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 2 6 22 2 15 15 8 18 21 12 22 18 10 17 14 22 14 14 9 12 4 17 4 17 17 17 10 2 10"/><polyline points="2 15 18 15"/></svg>
    ),
    title: "Nonton anime",
    body: "Streaming episode anime dengan pemutaran yang ringan dan antarmuka yang difokuskan pada kenyamanan penonton.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 3H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 3z"/></svg>
    ),
    title: "Baca manga",
    body: "Koleksi chapter manga dalam aplikasi yang sama, dengan pembaca yang nyaman untuk diskontinuitas kapan saja.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
    ),
    title: "Simpan untuk offline",
    body: "Simpan episode dan chapter untuk ditikuni kapan saja tanpa koneksi internet.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><path d="M4.93 4.93l1.41 1.41m12.72 12.72L19.07 19.07M8.49 15.51l-1.41 1.41m12.72-12.72L11.11 4.34M14.57 8.49l1.41-1.41"/></svg>
    ),
    title: "Tanpa iklan",
    body: "Tidak ada iklan yang mengganggu sederhana, cepat, dan difokuskan pada konten.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
    ),
    title: "Untuk Android",
    body: "Dibangun untuk Android — ringan, responsif, dan siap berjalan di perangkat Anda.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 1-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 17V9"/><path d="M17 17H9"/></svg>
    ),
    title: "Open source",
    body: "Kode tersedia secara publik di GitHub. Kontribusi dari komunitas sangat terbuka.",
  },
]

export function FeatureGrid() {
  return (
    <section className="px-4 py-12 md:py-24 border-y border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Fitur utama</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Yang tersedia dalam aplikasi resmi FuwaStream.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="rounded-xl border border-border bg-card p-6 hover:border-brand/50 transition-colors">
              <div className="rounded-lg bg-brand/10 p-3 text-brand mb-4 inline-block">{feature.icon}</div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-xs text-muted-foreground text-center">
          Deskripsi fitur berdasarkan aplikasi resmi
          <a href={site.github} className="hover:text-foreground transition-colors underline underline-offset-4">
            fuwanime/fuwastream
          </a>
          .
        </p>
      </div>
    </section>
  )
}
