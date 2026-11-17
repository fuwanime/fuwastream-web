# Contributing to fuwastream-web

Terima kasih karena ingin berkontribusi pada situs resmi FuwaStream.

## Cara berkontribusi

1. Buat [issue](https://github.com/fuwanime/fuwastream-web/issues) untuk membahas perubahan yang diinginkan (fitur baru, perbaikan bug, atau dokumentasi).
2. Fork repositori dan buat branch dari `main`.
3. Lakukan perubahan, pastikan situs dapat dibangun tanpa kesalahan:
   ```bash
   pnpm install
   pnpm build
   pnpm lint
   ```
4. Ajukan pull request ke branch `main` dengan deskripsi yang jelas.

## Gaya kode

- Gunakan TypeScript untuk semua halaman dan komponen.
- Gunakan komponen UI yang ada di `src/components/ui` daripada menduplikat markup.
- Jaga kopi singkat, percaya diri, dan jangan promosional. Hindari klaim yang tidak dapat divalidasi dari repositori utama [fuwanime/fuwastream](https://github.com/fuwanime/fuwastream).
- Gunakan conventional commits untuk commit.

## Penting

Situs ini adalah dokumentasi dan unduhan resmi. Jangan menambahkan klaim tentang lisensi, ketersediaan, atau legalitas konten anime/manga pihak ketiga kecuali dikonfirmasi oleh pengembang aplikasi resmi.
