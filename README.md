# fuwastream-web

Official website for **FuwaStream** — a free, ad-free anime and manga client for Android.

## Pages

- [Home](/)
- [Features](/features)
- [Download](/download)
- [Docs](/docs)
- [FAQ](/faq)
- [About](/about)

## Repository

The main application lives in [fuwanime/fuwastream](https://github.com/fuwanime/fuwastream).

## Stack

- [Next.js](https://nextjs.org/) 15 (App Router, static export)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4

## Development

```bash
pnpm install
pnpm dev        # local dev server (Turbopack), http://localhost:3000
pnpm build      # static export to out/
pnpm start      # serve the exported site locally
pnpm lint       # ESLint
```

## Deployment

Configured as a Next.js static export (`output: "export"`). Works on Vercel, Netlify, Cloudflare Pages, and GitHub Pages. See `next.config.ts` for export settings.

## License

See the main [fuwanime/fuwastream](https://github.com/fuwanime/fuwastream) repository (GPL-3.0).
