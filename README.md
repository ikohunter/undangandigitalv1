# Undangan Digital — simpel, tanpa foto, batik hijau-emas

## Ubah data
Semua data ada di `js/config.js` (nama, orang tua, tanggal, acara, kisah, rekening, musik, on/off bagian). Warna dan font ada di bagian atas `css/style.css` (`:root`).

## Musik
`music.youtubeId` di config. Kosongkan untuk mematikan musik.

## RSVP & Ucapan (Google Sheets)
1. Buat Google Sheet → Extensions → Apps Script, tempel `google-apps-script/Code.gs`.
2. Deploy → Web app (Execute as: Me; Access: Anyone).
3. Salin URL `/exec` ke `scriptURL` di `config.js`.

## Deploy (GitHub Pages)
Unggah isi folder ini (index.html di root), aktifkan Pages. Link tamu: `https://USERNAME.github.io/REPO/?to=Pak+Ahmad`

## Uji lokal
`python3 -m http.server` lalu buka http://localhost:8000

## Cara paling mudah mengedit
Buka `editor.html` (klik dua kali, atau lewat website: `.../editor.html`), isi formulir, klik **Unduh config.js**, lalu timpa `js/config.js`. Upload ulang jika sudah online.
Hapus `editor.html` dari hosting jika tidak ingin orang lain melihatnya (halaman ini tidak menyimpan apa pun ke server).
