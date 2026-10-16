/* ===== KONFIGURASI — ubah data di sini saja ===== */
const CONFIG = {
  groom: { full: "Anton", nick: "Anton", father: "Bapak Suparman", mother: "Ibu Sutarmi", instagram: "" },
  bride: { full: "Aini", nick: "Aini", father: "Bapak Yanto", mother: "Ibu Yanti", instagram: "" },
  instagram: "ikoproject_official", // kosongkan jika tidak perlu

  weddingDate: "2026-10-16T08:00:00+07:00",
  events: [
    { title: "Akad Nikah", start: "2026-10-16T08:00:00+07:00", end: "2026-10-16T11:00:00+07:00", timeLabel: "08.00 WIB s.d. selesai",
      place: "Lokasi acara", address: "Lihat detail lokasi pada Google Maps", maps: "https://maps.app.goo.gl/Rwobc2HALupUY6zi9" }
  ],

  // Musik YouTube: boleh tempel link penuh (https://youtu.be/...) atau kode videonya. Kosongkan = tanpa musik.
  music: { youtubeId: "8_E_IKKnjeY", startAt: 0, volume: 0.4, loop: true, src: "" },

  story: [
    { year: "Awal Cerita", title: "Pertemuan Pertama", text: "Dua insan yang dipertemukan Allah dengan cara yang sederhana, tanpa direncanakan." },
    { year: "Mengenal", title: "Semakin Dekat", text: "Dari obrolan kecil tumbuh rasa nyaman, saling percaya, dan keyakinan untuk melangkah bersama." },
    { year: "Lamaran", title: "Langkah Serius", text: "Dengan niat baik dan restu kedua keluarga, kami memantapkan hati menuju pernikahan." },
    { year: "16 Okt 2026", title: "Hari Bahagia", text: "Insya Allah, hari di mana dua hati diikat dalam janji suci pernikahan." }
  ],

  gift: { enabled: true,
    accounts: [ { bank: "DANA", number: "085367251426", name: "Hendra Agus Loriko" } ],
    address: "" },

  // Isi setelah deploy Google Apps Script (lihat README)
  scriptURL: "",
  share: { baseUrl: "" },

  sections: { ayat: true, countdown: true, event: true, story: true, rsvp: true, wishes: true, gift: true }
};
