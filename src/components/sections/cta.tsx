import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center rounded-2xl border border-border bg-brand p-10 md:p-16 text-brand-foreground">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Siap mulai nonton?</h2>
        <p className="text-lg mb-8 opacity-90">
          Unduh FuwaStream untuk Android dan nikmati anime serta manga tanpa
          iklan.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg">
            <Link href="/download">Unduh APK</Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href="/docs">Baca dokumentasi</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
