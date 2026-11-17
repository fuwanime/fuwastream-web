import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="px-4 py-16 md:py-24 bg-surface">
      <div className="mx-auto max-w-3xl text-center rounded-3xl border border-brand/20 bg-brand p-10 md:p-16 text-brand-foreground">
        <h2 className="text-headline-large font-medium mb-4">Siap mulai nonton?</h2>
        <p className="text-body-large mb-8 opacity-90">
          Unduh FuwaStream untuk Android dan nikmati anime serta manga tanpa
          iklan.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="large">
            <Link href="/download">Unduh APK</Link>
          </Button>
          <Button variant="outlined" asChild size="large">
            <Link href="/docs">Baca dokumentasi</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
