# Belajar TKA

Web latihan TKA tanpa framework: HTML + CSS + JavaScript biasa. Semua data (set soal yang kamu upload, jawaban) tersimpan di browser masing-masing lewat IndexedDB, tidak ada server dan tidak ada yang dikirim ke mana pun.

## Struktur
- `index.html` : kerangka halaman + aturan keamanan (CSP)
- `style.css` : seluruh tampilan
- `app.js` : logika (navigasi, kuis, timer, baca PDF jadi soal)
- `data.js` : materi, gambar, dan paket soal bawaan
- `sw.js`, `manifest.webmanifest`, `icon-*.png` : supaya bisa dipasang di HP dan dibuka offline (PWA)
- `vendor/` : pdf.js dan font yang di-host sendiri (tidak ada yang dimuat dari CDN luar)

## Publish ke GitHub Pages (gratis, alamat `username.github.io/nama-repo`)
1. Buat repo baru di GitHub, upload semua isi folder ini (index.html harus ada di paling luar).
2. Settings > Pages > Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
3. Tunggu 1-2 menit, buka `https://username.github.io/nama-repo/`.

## Checklist keamanan
- Aktifkan 2FA di akun GitHub.
- Jangan pernah commit password, API key, atau token. Web ini memang tidak butuh satu pun.
- Kalau nanti pakai library dari luar, simpan filenya di `vendor/` (seperti pdf.js) atau pakai atribut `integrity` (SRI) dengan versi yang dikunci.
- Isi dari pengguna selalu lewat fungsi `esc()` sebelum masuk `innerHTML`.
- GitHub Pages tidak bisa mengatur header HTTP, jadi CSP dipasang lewat tag `<meta>` di index.html. Perlindungan anti-clickjacking (`frame-ancestors`) baru bisa kalau pindah ke Cloudflare Pages atau Netlify.
- Cek lagi sebelum publik: kalau soal/materi disalin dari buku berhak cipta, sebaiknya jangan dipublikasikan utuh.

## Catatan fitur
- **Cadangan data**: menu Ekspor/Impor menyimpan set soal hasil upload dan riwayat nilai ke file .json.
- **PWA**: saat online selalu ambil versi terbaru, saat offline pakai salinan tersimpan. Kalau menambah file baru, daftarkan namanya di `sw.js` (daftar `F`). Untuk memaksa semua perangkat memperbarui, ganti `tka-v1` jadi `tka-v2`.
- Tes lokal pakai server (Live Server atau `python -m http.server`), bukan klik dua kali file.
