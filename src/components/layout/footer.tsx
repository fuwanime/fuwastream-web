import { site } from "@/lib/site-config"

export function Footer() {
  return (
    <footer className="border-t border-border mt-auto pt-10 pb-12">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <div className="col-span-2 md:col-span-auto">
          <div className="flex items-center gap-2 mb-4">
            <img
              src="/images/brand/icon-512.png"
              alt="FuwaStream"
              width={24}
              height={24}
              className="rounded-lg"
            />
            <span className="font-bold text-lg tracking-tight text-brand">fuwastream</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Free, ad-free anime and manga client for Android.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Project</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>
              <a href={site.github} className="hover:text-foreground transition-colors">
                GitHub repository
              </a>
            </li>
            <li>
              <a href="/features" className="hover:text-foreground transition-colors">
                Features
              </a>
            </li>
            <li>
              <a href="/download" className="hover:text-foreground transition-colors">
                Download
              </a>
            </li>
            <li>
              <a href="/docs" className="hover:text-foreground transition-colors">
                Documentation
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Help</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>
              <a href="/faq" className="hover:text-foreground transition-colors">
                FAQ
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-foreground transition-colors">
                About &amp; community
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
        <p>
          FuwaStream is a client application. It does not host or distribute
          anime or manga content.
        </p>
        <p>© {new Date().getFullYear()} FuwaStream contributors.</p>
      </div>
    </footer>
  )
}
