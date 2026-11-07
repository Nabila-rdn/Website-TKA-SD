/* Isi materi, gambar, dan paket soal. Edit di sini kalau mau menambah konten. */
const BUKU={
indo:[
{t:'Pemahaman Tekstual',s:[['A. Mengidentifikasi Kata dan Maknanya',7,9],['B. Mengidentifikasi Objek dalam Teks',10,12],['C. Menyajikan Kembali Informasi',13,14],['D. Informasi Tersurat dan Tersirat',15,28]]},
{t:'Pemahaman Inferensial',s:[['A. Menyimpulkan Gagasan, Amanat, Tokoh, dan Nilai-Nilai',29,31],['B. Menyimpulkan Objek, Karakter, dan Latar dalam Teks',32,33],['C. Ungkapan, Majas, dan Peribahasa',34,38]]},
{t:'Evaluasi dan Apresiasi',s:[['A. Kaitan Peristiwa dalam Teks dengan Kehidupan Sehari-hari',39,40],['B. Kesesuaian Informasi dalam Teks',41,43],['C. Tanggapan terhadap Teks Fiksi',44,47]]},
{t:'Paket Soal di buku (untuk dibaca)',p:1,s:[['Paket Soal 1',48,59],['Paket Soal 2',60,71],['Paket Soal 3',72,83],['Paket Soal 4',84,95],['Paket Soal 5',96,107]]}],
mtk:[
{t:'Bilangan',s:[['A. Bilangan Cacah sampai 1.000.000',108,112],['B. Faktor, Kelipatan, FPB, dan KPK',113,115],['C. Pecahan',116,123]]},
{t:'Geometri dan Pengukuran',s:[['A. Pengukuran',124,129],['B. Bangun Datar',130,134],['C. Bangun Ruang',135,141]]},
{t:'Data',s:[['A. Mengumpulkan, Menyajikan, dan Membaca Data dalam Bentuk Tabel',142,142],['B. Membaca dan Menyajikan Data dalam Bentuk Diagram',143,149]]},
{t:'Paket Soal di buku (untuk dibaca)',p:1,s:[['Paket Soal 1',150,157],['Paket Soal 2',158,165],['Paket Soal 3',166,173],['Paket Soal 4',174,181],['Paket Soal 5',182,191]]}]};
const MT={
'indo0-0':`# Kata umum dan kata khusus
- **Kata umum**: kata yang sering dipakai sehari-hari. Contoh: melihat, bunga, rumah, buah.
- **Kata khusus**: kata yang dipakai di bidang tertentu dan menunjuk hal yang lebih spesifik. Contoh: melirik, mawar, vila, mangga.
Memahami makna kata itu penting supaya pesan dalam teks atau percakapan tidak salah dipahami.
# Makna denotatif dan konotatif
- **Denotatif**: makna sebenarnya sesuai KBBI, tersurat dan lugas. Dipakai di berita, laporan, dan teks ilmiah.
- **Konotatif**: makna yang mengandung perasaan atau kesan (positif atau negatif), biasanya kiasan.
> Udara terasa sangat **panas**. (denotatif: bersuhu tinggi)
> Hatinya terasa **panas** ketika bukunya hilang. (konotatif negatif: marah atau kesal)
> Ia menjadi **bintang kelas**. (konotatif positif: siswa berprestasi)
# Sinonim dan antonim
- **Sinonim**: kata yang maknanya sama. Contoh: langgeng – lestari.
- **Antonim**: kata yang maknanya berlawanan. Contoh: letih – energik.
# Imbuhan
- **me-**: membentuk kata kerja aktif (membaca, mengunyah).
- **pe-**: menyatakan pelaku atau sifat (pembaca, pendiam).
- **pe-an**: menyatakan tempat, kumpulan, atau proses (perumahan, pepohonan, pencucian).
- **-kan / -lah**: dipakai pada kalimat perintah (masukkan, buatlah).
# Contoh soal
? Handuk untuk bayi harus dipilih yang berserat halus. Sinonim kata halus pada kalimat itu adalah ....\\nA. mengilap  B. lembut  C. tajam  D. kasar||B||Menurut KBBI, lembut berarti lunak dan halus.
? Seorang guru sedang ajar siswa di kelas. Kata yang dicetak miring seharusnya ditulis ....\\nA. pelajaran  B. mengajar  C. pengajar  D. belajar||B||Kata dasar ajar + me- menjadi mengajar, yaitu tindakan aktif guru.
? Suasana di restoran itu terasa hangat karena keramahan seluruh pramusajinya. Kata yang bermakna konotatif adalah ....\\nA. restoran  B. hangat  C. keramahan  D. pramusaji||B||Hangat di sini berarti suasana penuh keakraban, bukan suhu.`,
'indo0-1':`# Objek dalam teks
Objek adalah sesuatu yang dibahas atau digambarkan dalam tulisan: orang, hewan, benda, tempat, atau peristiwa.
- Dalam **teks fiksi**, objek digambarkan lewat tokoh, tempat, atau benda dalam cerita.
- Dalam **teks nonfiksi**, gambaran objek ada pada teks deskripsi.
# Teks deskripsi
Teks yang menggambarkan objek (barang, orang, atau kejadian) secara terperinci dan jelas. Objeknya dikenali dari kata-kata yang dipakai penulis.
# Teks laporan
Berisi informasi lengkap tentang sesuatu, diperoleh dari pengamatan, penelitian, atau kegiatan. Jenisnya:
- **Laporan pengamatan**: hasil pengamatan langsung. Struktur: pernyataan umum, isi/hasil pengamatan, kesimpulan.
- **Laporan kegiatan**: kegiatan yang sudah dilakukan (misalnya persami). Struktur: pendahuluan, isi/kegiatan, penutup.
- **Laporan percobaan**: hasil eksperimen. Struktur: judul, tujuan, alat dan bahan, langkah-langkah, hasil.
- **Laporan perjalanan**: pengalaman saat berkunjung ke suatu tempat. Struktur: pendahuluan (tujuan/alasan), isi (yang dilihat dan dialami), penutup (pesan, kesan, saran).
# Contoh soal
? Ibu mengizinkan Ranti memelihara seekor kucing. Kucing itu berambut abu-abu gelap, tubuhnya kecil karena masih muda, ekornya sepanjang tubuhnya. Jenis teks tersebut adalah ....\\nA. narasi  B. persuasi  C. deskripsi  D. eksplanasi||C||Teks menggambarkan kucing Ranti secara terperinci, jadi termasuk deskripsi.`};
MT['indo0-0']=MT['indo0-0'].replace('# Contoh soal',`# Cara cepat membedakan denotatif dan konotatif
- Tanyakan: "Apakah artinya persis seperti di kamus?" Kalau ya, itu denotatif. Kalau berupa kiasan atau menimbulkan kesan, itu konotatif.
- Ganti kata itu dengan arti kamusnya. Kalau kalimat masih masuk akal, itu denotatif. Kalau jadi aneh, itu konotatif.
- Contoh konotatif lain: **kepala batu** (keras kepala), **tangan dingin** (selalu berhasil), **buah hati** (anak), **kambing hitam** (pihak yang disalahkan), **panjang tangan** (suka mencuri).
- Konotatif bisa positif (bintang kelas, buah hati) atau negatif (kepala batu, panas hati, kambing hitam).
> **Tips ingat:** **D**enotatif = **D**ata apa adanya. **K**onotatif = **K**iasan yang punya **K**esan.
# Tips membedakan kata umum dan khusus
- Kata khusus adalah "anggota" dari sebuah kelompok. Bunga → mawar, melati, edelweiss. Buah → mangga, apel. Bulan → Agustus, Mei.
- Tanyakan: "Ini nama kelompok atau nama anggota?" Kelompok = umum, anggota = khusus.
> **Tips ingat:** Kata khusus = kata yang bisa kamu **bayangkan bentuknya** dengan jelas. Kata umum masih terlalu luas.
# Trik mencari kata dasar dan imbuhan
- Buang dulu imbuhannya, baru lihat kata dasarnya. menonton → tonton, mengajar → ajar, tekanlah → tekan, pilihlah → pilih.
- **pe-** biasanya berarti orang yang melakukan sesuatu (pembaca = orang yang membaca).
- **pe-an** biasanya berarti hasil, proses, atau tempat (pencucian = proses mencuci).
- **-lah** membuat perintah terdengar lebih halus (tekanlah, pilihlah).
> **Tips ingat:** me- = **M**elakukan, pe- = **P**elaku, pe-an = **P**roses atau tempat.
# Tips soal sinonim dan antonim
- Masukkan pilihan jawaban ke kalimat. Pilihan yang artinya paling dekat adalah sinonim, yang paling berlawanan adalah antonim.
- Waspada kata pengecoh yang mirip bentuknya tetapi beda arti.
> **Tips ingat:** **SI**nonim = **SI**ama, **AN**tonim = **AN**ti atau lawan.
# Ringkasan cepat
- Kata umum luas, kata khusus spesifik.
- Denotatif = arti kamus, konotatif = kiasan dan kesan.
- Sinonim = sama makna, antonim = lawan makna.
- Imbuhan mengubah jenis dan makna kata dasar.
# Contoh soal`);
MT['indo0-1']=MT['indo0-1'].replace('# Contoh soal',`# Cara cepat mengenali jenis teks
- **Deskripsi**: banyak kata sifat tentang warna, ukuran, bentuk, atau rasa. Tidak ada cerita atau urutan kejadian.
- **Narasi**: ada tokoh dan rangkaian peristiwa.
- **Laporan**: ada hasil, data, atau langkah dari pengamatan, percobaan, atau kegiatan.
# Cara menentukan objek teks
- Kumpulkan ciri-ciri yang disebut (warna, bentuk, rasa, tempat), lalu cocokkan dengan benda yang punya ciri itu.
- Contoh: merah, bulat, menggantung di dahan, asam, segar → objeknya apel.
- Objek biasanya yang paling sering dijelaskan atau disebut ciri-cirinya.
# Cara cepat membedakan jenis laporan
- Kata kunci **amati** → laporan pengamatan (melihat langsung).
- Kata kunci **coba** → laporan percobaan (ada alat, bahan, dan langkah).
- Kata kunci **kegiatan** → laporan kegiatan (acara yang sudah terjadi, misalnya persami atau market day).
- Kata kunci **kunjungan** → laporan perjalanan (ada kesan dan saran).
> **Singkatan struktur:** Pengamatan = **UHK** (pernyataan **U**mum, **H**asil, **K**esimpulan). Percobaan = **JUTAL-H** (**J**udul, **Tu**juan, **A**lat bahan, **L**angkah, **H**asil). Kegiatan dan perjalanan = **PIP** (**P**endahuluan, **I**si, **P**enutup).
> **Tips ingat:** hanya laporan percobaan yang punya "alat dan bahan" dan "langkah". Kalau ada dua hal itu, jawabannya hampir pasti percobaan.
# Ringkasan cepat
- Objek = hal yang dibahas dalam teks.
- Deskripsi = menggambarkan objek secara terperinci.
- Laporan ada 4 jenis: pengamatan, kegiatan, percobaan, perjalanan.
# Contoh soal`);
MT['indo0-2']=`# Apa itu menyajikan kembali informasi?
Informasi dari sebuah teks bisa disampaikan lagi dalam bentuk **bagan** atau **ikhtisar**.
- **Bagan**: alat peraga berbentuk grafik untuk menjelaskan informasi secara singkat dan jelas.
- **Ikhtisar**: teks ringkas yang ditulis dari teks aslinya.
# Langkah membuatnya
- Baca teks dengan teliti dan pahami isinya.
- Cari ide pokok dan informasi penting di setiap paragraf.
- Tulis kembali ide pokok itu secara singkat dalam bentuk bagan atau ikhtisar.
> Contoh: teks tentang pengangguran. Paragraf 1 membahas pengertian dan penyebab pengangguran, paragraf 2 upaya pemerintah, paragraf 3 manfaat pelatihan dari pemerintah. Ikhtisar yang benar memuat pokok ketiga paragraf itu secara berurutan.
# Tips cepat
- Ide pokok biasanya ada di kalimat pertama atau kalimat terakhir paragraf.
- Ikhtisar tidak boleh menambah informasi yang tidak ada di teks.
- Pilihan jawaban yang urutannya terbalik atau memuat hal baru biasanya pengecoh.
> **Tips ingat:** Ikhtisar = **I**nti dari tiap paragraf, **K**ecil dan **R**ingkas. Bagan = **B**entuk **G**ambar dari ide pokok.
# Ringkasan cepat
- Bagan = ide pokok dalam bentuk grafik.
- Ikhtisar = ringkasan teks yang setia pada isi asli.
- Kunci: temukan ide pokok tiap paragraf.
# Contoh soal
? Apa yang sebaiknya dilakukan pertama kali sebelum membuat ikhtisar sebuah teks?\nA. langsung menulis kesimpulan  B. membaca teks dengan teliti dan memahami isinya  C. menambah informasi baru  D. menyalin seluruh paragraf||B||Langkah pertama adalah membaca dan memahami teks, baru mencari ide pokok.`;
MT['indo0-3']=`# Informasi tersurat dan tersirat
- **Tersurat**: informasi yang ditulis langsung di dalam teks. Kamu bisa menemukan kalimatnya.
- **Tersirat**: informasi yang tidak ditulis langsung, tetapi bisa disimpulkan dari kata, kalimat, atau suasana teks.
> Teks tentang film Jumbo menyebut pelajaran tentang persahabatan, rasa syukur, dan berhati-hati. Tersurat: film itu mengajarkan berhati-hati. Tersirat: film itu bersifat mendidik.
> Kalimat: Bermimpilah karena Tuhan akan memeluk mimpi-mimpi itu. Tersirat: Tuhan akan membantu mewujudkan mimpi kita.
# Informasi dalam resensi
Resensi adalah ulasan buku untuk memberi penilaian dan pendapat. Bagian-bagiannya:
- Judul resensi
- Identitas buku (judul, penulis, penerbit, tahun terbit, jumlah halaman)
- Ringkasan isi buku
- Manfaat buku
- Kelebihan dan kekurangan buku
- Pendapat dan saran tentang isi buku
# Cara menjawab soal
- Untuk **tersurat**: cari kalimat di teks yang sama atau mirip dengan pilihan jawaban. Kalau tidak ada, pilihan itu salah.
- Untuk **tersirat**: tanyakan, apa maksud penulis di balik kalimat ini? Pilih yang paling masuk akal dan tidak bertentangan dengan teks.
- Pada soal benar/salah, cocokkan tiap pernyataan satu per satu dengan kalimat di teks.
> **Tips ingat:** **Surat** = ada **tertulis**. **Sirat** = **disimpulkan**, baca di antara baris. Tersirat biasanya muncul sebagai pesan, nilai, atau perasaan tokoh.
> **Urutan resensi:** **J**udul, **I**dentitas, **R**ingkasan, **M**anfaat, **K**elebihan-kekurangan, **P**endapat. Ingat kata: Jika Ingin Resensi, Mulailah Kritis, Padukan pendapat.
# Ringkasan cepat
- Tersurat = tertulis jelas, tersirat = harus disimpulkan.
- Resensi punya 6 bagian, mulai dari judul sampai pendapat dan saran.
# Contoh soal
? Perhatikan kalimat: Bermimpilah karena Tuhan akan memeluk mimpi-mimpi itu. Informasi tersirat dari kalimat tersebut adalah ....\nA. bermimpilah karena Tuhan akan membantu mewujudkannya  B. mimpi tidak akan menjadi kenyataan tanpa kerja keras  C. berdoa sebelum tidur agar mimpimu indah  D. bermimpi hanya terjadi saat tidur||A||Kalimat itu mengajak kita bermimpi karena Tuhan akan membantu mewujudkannya.
? Teks: Berolahraga adalah cara yang baik untuk menjaga kesehatan tubuh. Olahraga perlu dilakukan secara rutin. Informasi tersurat yang tepat adalah ....\nA. olahraga paling mudah adalah lari pagi  B. olahraga diperlukan untuk menjaga kesehatan tubuh  C. olahraga hanya untuk anak-anak  D. olahraga tidak perlu rutin||B||Pilihan B tertulis langsung di kalimat pertama. Pilihan lain tidak ada atau bertentangan dengan teks.`;
MT['indo1-0']=`# Unsur penting dalam teks
- **Gagasan utama (ide pokok)**: gagasan paling penting pada teks atau paragraf.
- **Gagasan pendukung**: gagasan yang memperjelas atau menguatkan gagasan utama.
- **Amanat**: pesan moral yang ingin disampaikan.
- **Tokoh**: pelaku dalam cerita, masing-masing punya karakter berbeda.
- **Nilai-nilai**: pelajaran baik yang bisa dilihat dari tindakan, dialog, atau deskripsi dalam cerita.
# Jenis teks
- **Fiksi** (khayalan): legenda (asal-usul suatu tempat atau kejadian), puisi, pantun, cerpen.
- **Nonfiksi** (berdasarkan fakta): biografi, cerita inspiratif, pidato.
- **Pantun**: baris 1-2 adalah sampiran, baris 3-4 adalah isi dan pesan. Pola rimanya a-b-a-b.
# Cara menyimpulkan
- **Ide pokok**: biasanya ada di kalimat pertama atau terakhir paragraf. Kalimat lain hanya menjelaskan.
- **Amanat**: lihat akhir cerita, apa akibat perbuatan tokoh, lalu tulis sebagai nasihat.
- **Tokoh**: pilih nama yang benar-benar disebut berperan, jangan yang hanya disebut lewat.
> **Tips ingat:** Gagasan **utama** = **U**ntuk semua kalimat. Gagasan **pendukung** = **P**enjelas, biasanya berupa contoh atau akibat.
> **Pantun:** **S**ampiran dulu, **I**si kemudian. Singkatannya SI: baris 1-2 SIapkan, baris 3-4 Isi pesan.
# Ringkasan cepat
- Ide pokok = inti, ide pendukung = penjelas.
- Amanat = pesan moral, nilai = pelajaran dari perilaku tokoh.
- Fiksi = khayalan, nonfiksi = fakta.
# Contoh soal
? Lidah buaya mengatasi gangguan pencernaan, mempercepat penyembuhan luka bakar, dan bisa diolah menjadi makanan. Ide pokok teks tersebut adalah ....\\nA. manfaat lidah buaya  B. pengolahan lidah buaya  C. lidah buaya sebagai obat  D. lidah buaya makanan lezat||A||Semua kalimat menjelaskan berbagai manfaat lidah buaya, jadi itulah ide pokoknya.`;
MT['indo1-1']=`# Objek, karakter, dan latar
- **Objek**: hal atau topik yang dibahas dalam teks.
- **Karakter**: sifat tokoh-tokoh dalam cerita atau informasi yang disampaikan.
- **Latar**: tempat, waktu, dan suasana terjadinya peristiwa.
Jumlah ketiganya bisa berubah dalam satu teks, jadi bacalah dengan cermat.
# Cara menjawab
- **Latar tempat**: cari nama tempat atau kata penunjuk (di, ke, dari). Satu cerita bisa punya lebih dari satu latar.
- **Latar waktu**: cari kata seperti pagi, suatu hari, malam, atau tahun.
- **Latar suasana**: lihat perasaan tokoh dan gambaran keadaan, misalnya sedih, tegang, hangat.
- **Karakter**: lihat perbuatan dan ucapan tokoh. Sifat jarang disebut langsung.
> **Tips ingat:** Latar = **TWS**: **T**empat, **W**aktu, **S**uasana.
> **Karakter:** tindakan menunjukkan sifat. Menolong = baik hati, berbohong = tidak jujur, belajar tiap malam = tekun.
# Ringkasan cepat
- Objek = topik, karakter = sifat tokoh, latar = tempat, waktu, suasana.
- Dalam soal latar, pilih semua tempat yang benar-benar ada di cerita.
# Contoh soal
? Dalam fabel bebek abu-abu, ia bertemu angsa putih, lalu melihat bayangannya di sungai dan ternyata berubah menjadi angsa cantik. Bebek abu-abu berubah menjadi angsa yang cantik setelah ....\\nA. melihat induknya berbeda  B. dijauhi bebek lain  C. meninggalkan peternakan  D. berkaca di atas air||D||Ia menyadari dirinya angsa saat melihat bayangannya sendiri di air sungai.
? Bebek abu-abu pergi dari peternakan karena ....\\nA. ia ternyata seekor angsa  B. ia melihat angsa putih  C. ia tidak punya teman di peternakan  D. ia ingin bermain di sungai||C||Ia dijauhi bebek lain dan merasa sedih, sehingga pergi meninggalkan peternakan.`;
MT['indo1-2']=`# Kiasan
Kiasan adalah makna yang tidak sebenarnya. Kiasan ada pada ungkapan, majas, dan peribahasa.
- **Ungkapan**: gabungan kata yang maknanya berbeda dari arti kata-kata penyusunnya. Contoh: bunga tidur = mimpi, kutu buku = orang yang gemar membaca.
- **Peribahasa**: kelompok kata atau kalimat yang susunannya tetap dan bermakna tertentu. Contoh: bagai air di daun talas = tidak tetap pendirian.
# Jenis majas
- **Metafora**: membandingkan dua hal karena punya sifat sama, tanpa kata pembanding. Contoh: Sekretaris adalah tangan kanan ketua kelas.
- **Simile**: perbandingan memakai kata seperti, bagai, atau laksana. Contoh: Tubuhnya lentur seperti karet.
- **Personifikasi**: benda mati bertingkah seperti manusia. Contoh: Angin membuat pohon melambaikan rantingnya.
- **Hiperbola**: pernyataan yang berlebihan atau tidak masuk akal. Contoh: Suaranya menggelegar membelah langit.
# Cara cepat menentukan majas
- Ada seperti, bagai, laksana? Itu simile.
- Benda mati melakukan hal manusia (melambai, menari, berbisik)? Itu personifikasi.
- Dua hal disamakan langsung tanpa pembanding? Itu metafora.
- Terlalu berlebihan? Itu hiperbola.
> **Tips ingat:** **SIMI**le = **SIMI**lar atau seperti (pakai kata pembanding). **PERSON**ifikasi = ada **PERSON** atau manusia yang dipinjamkan ke benda. **META**fora = **META**morfosis, langsung berubah jadi hal lain.
> Untuk peribahasa, tebak makna dari gambaran umumnya: yang dipikul bersama berarti ditanggung bersama.
# Ringkasan cepat
- Kiasan = makna tidak sebenarnya.
- Majas utama: metafora, simile, personifikasi, hiperbola.
# Contoh soal
? Anisa adalah ... yang menghabiskan waktunya membaca buku di perpustakaan. Ungkapan yang tepat adalah ....\\nA. buah bibir  B. kutu buku  C. anak buah  D. kepala keluarga||B||Kutu buku berarti orang yang senang membaca.
? Peribahasa berat sama dipikul, ringan sama dijinjing bermakna ....\\nA. bersakit-sakit dahulu, bersenang-senang kemudian  B. menghormati aturan  C. beberapa tujuan tercapai sekaligus  D. suka duka ditanggung bersama||D||Artinya suka duka dan baik buruk ditanggung bersama-sama.
? Kalimat Tubuhnya lentur seperti karet termasuk majas ....\\nA. personifikasi  B. hiperbola  C. metafora  D. simile||D||Ada kata pembanding seperti, jadi termasuk simile.`;
MT['indo2-0']=`# Peristiwa dalam teks dan kehidupan sehari-hari
Peristiwa dalam teks, termasuk cerita fiksi, sering mirip dengan pengalaman kita. Sifat tokoh juga bisa mirip dengan orang di sekitar kita.
> Nisa membantu ibunya membuat kue pesanan tetangga. Peristiwa yang sesuai: Aldi membantu ibunya mencuci piring (sama-sama membantu ibu). Ibu Salma menjahit baju pesanan pelanggan (sama-sama mengerjakan pesanan). Peristiwa Tiara dan teman-teman bermain di taman tidak sesuai karena tidak diceritakan di teks.
# Cara mencari peristiwa yang sesuai
- Tulis inti peristiwa dalam teks dengan satu kalimat pendek, misalnya: tokoh menolong temannya.
- Abaikan detail seperti nama, tempat, dan benda. Lihat polanya.
- Pilih pernyataan yang punya pola sama. Buang yang polanya berbeda.
> **Tips ingat:** Ganti nama dan benda, pertahankan **perbuatan**. Kijang menolong Tupai = Arif menolong Rido, walaupun hewannya beda.
> Waspadai pilihan yang memakai kata dari teks (hutan, rumput) tetapi perbuatannya berbeda. Itu pengecoh.
# Ringkasan cepat
- Cocokkan perbuatan, bukan nama atau benda.
- Satu kalimat inti membantu memilih jawaban.
# Contoh soal
? Kijang menolong Tupai yang ditangkap Harimau. Contoh peristiwa sehari-hari yang sesuai adalah ....\\nA. Tiara berkunjung ke perpustakaan  B. Ibu memanen tomat  C. Hewan memakan rumput dengan lahap  D. Arif membantu Rido yang terjatuh berdiri||D||Intinya adalah menolong. Hanya pilihan D yang berisi perbuatan menolong.`;
MT['indo2-1']=`# Teks yang baik
- Ditulis dengan **ejaan** yang benar.
- Memakai **kalimat efektif**: hemat kata, jelas, tidak boros.
- Kalimatnya **padu**, saling berhubungan, dan sesuai ide pokok.
# Ejaan yang sering keluar
- Uang ditulis **Rp5.000,00** (titik untuk ribuan, koma untuk desimal), bukan Rp5000.00.
- Nama tempat memakai huruf kapital di awal: **Pantai** Parangtritis, bukan pantai Parangtritis.
- Kata yang berbeda arti tidak boleh digabung sembarangan.
# Kalimat efektif
- Buang kata yang boros. Contoh: Bahwa pemandangan ... menjadi daya tarik para pengunjung-pengunjung menjadi Pemandangan ... menjadi daya tarik para pengunjung.
- Jangan memakai jamak dua kali. Para pengunjung sudah jamak, jadi tidak perlu pengunjung-pengunjung.
- Kalimat harus punya subjek dan predikat. Awalan seperti Bahwa sering membuat kalimat tidak lengkap.
# Membandingkan dua teks
- Baca keduanya dan catat topik, ide pokok, dan simpulannya.
- Cari persamaan (topik sama) dan perbedaan (bentuk atau sudut pandang).
> Teks 1 prosa tentang erupsi gunung api yang berdampak ke warga desa. Teks 2 puisi tentang gunung yang marah. Perbedaannya adalah bentuknya: prosa dan puisi. Persamaannya adalah sama-sama membahas erupsi gunung api.
# Melengkapi kalimat rumpang
- Baca kalimat sebelum dan sesudah bagian kosong. Isi harus menghubungkan keduanya dan tidak mengulang kalimat lain.
# Kalimat tidak sesuai ide pokok
- Cari kalimat yang membahas hal berbeda dari ide pokok. Biasanya letaknya di tengah atau akhir.
> **Tips ingat:** **EEK**: **E**jaan, **E**fektif, **K**esesuaian. Cek tiga hal itu satu per satu.
> Kalau dua pilihan hampir sama, pilih yang **lebih singkat** tetapi artinya tidak hilang.
# Ringkasan cepat
- Ejaan benar, kalimat hemat, isi sesuai ide pokok.
- Membandingkan teks = cari persamaan dan perbedaan topik, ide pokok, dan bentuk.
# Contoh soal
? Penulisan uang yang tepat adalah ....\\nA. Rp5000.00  B. Rp5.000,00  C. Rp 5000,00  D. Rp5,000.00||B||Penulisan uang yang benar memakai titik untuk ribuan dan koma untuk desimal.
? Kalimat berikut yang efektif adalah ....\\nA. Bahwa pemandangan senja menjadi daya tarik para pengunjung-pengunjung  B. Pemandangan senja menjadi daya tarik para pengunjung  C. Para pengunjung-pengunjung tertarik pemandangan senja  D. Bahwa pemandangan senja daya tarik pengunjung||B||Pilihan B hemat kata, punya subjek dan predikat, dan tidak memakai bentuk jamak ganda.
? Teks tentang kopi: (1) Kopi digemari saat ini. (2) Banyak yang menyukai aroma dan rasa kopi. (3) Kopi bagian dari budaya obrolan. (4) Banyak kedai kopi menawarkan suasana nyaman untuk bekerja. Kalimat yang tidak sesuai ide pokok adalah nomor ....\\nA. (1)  B. (2)  C. (3)  D. (4)||D||Ide pokok membahas minuman kopi. Kalimat (4) membahas kedai kopi.`;
MT['indo2-2']=`# Tanggapan terhadap teks fiksi
Fiksi berasal dari kata fiction yang artinya rekaan. Teks fiksi ceritanya tidak nyata. Setiap orang boleh menanggapinya, dan tanggapan itu bersifat **subjektif**, artinya bisa berbeda-beda.
# Cara memberi tanggapan yang baik
- Sebut dulu bagian cerita yang kamu tanggapi.
- Beri pendapat: setuju atau tidak, suka atau tidak.
- Jelaskan alasannya berdasarkan isi cerita.
- Boleh menambah saran atau pelajaran yang bisa diambil.
> Cerita Anak Kambing yang tidak mau pulang meski dipanggil ibunya lalu ketakutan bertemu serigala. Tanggapan yang tepat: seharusnya anak kambing menuruti ibunya untuk pulang. Pendapat ini punya alasan dari isi cerita.
# Cara memilih tanggapan yang tepat
- Pilih tanggapan yang **sesuai isi cerita** dan memakai alasan yang masuk akal.
- Buang tanggapan yang memakai fakta yang tidak ada di cerita.
- Perhatikan kata seharusnya, sebaiknya, dan menurutku. Itu ciri tanggapan.
> **Tips ingat:** Tanggapan = **P**endapat + **A**lasan + **S**aran, disingkat **PAS**. Kalau salah satunya hilang, tanggapan belum utuh.
# Ringkasan cepat
- Tanggapan fiksi bersifat subjektif tetapi tetap harus berdasar isi cerita.
- Gunakan pola pendapat, alasan, saran.
# Contoh soal
? Anak Kambing tidak mau pulang meski dipanggil ibunya, lalu ketakutan bertemu serigala di malam hari. Tanggapan yang tepat adalah ....\\nA. Anak kambing hebat karena berani sendirian  B. Seharusnya anak kambing menuruti ibunya untuk pulang  C. Serigala tidak jahat  D. Ibu kambing salah mengajak pulang||B||Cerita menunjukkan akibat tidak menuruti ibu, jadi tanggapan B sesuai isi dan punya alasan.`;
MT['mtk0-0']=`# Bilangan cacah
Bilangan cacah adalah bilangan nol dan bilangan asli (0, 1, 2, 3, ...). Dipakai untuk menghitung banyak benda, misalnya jumlah pengunjung 375.126 orang atau harga tas 250.000 rupiah.
# Membaca dan nilai tempat
- 146.750 dibaca seratus empat puluh enam ribu tujuh ratus lima puluh.
- Nilai angka tergantung tempatnya. Pada 356.388: angka 3 pertama bernilai 300.000, angka 5 bernilai 50.000, angka 6 bernilai 6.000, angka 3 kedua bernilai 300, angka 8 pertama bernilai 80, angka 8 terakhir bernilai 8.
# Membandingkan dan mengurutkan
- Bandingkan angka dari nilai tempat **terbesar** (paling kiri). Angka pertama yang berbeda menentukan hasilnya.
- 425.316 lebih besar dari 425.136 karena pada ratusan, 3 lebih besar dari 1.
- Mengurutkan dari terbesar: 539.019; 537.840; 537.275; 536.150; 530.900.
# Operasi hitung
- **Penjumlahan dan pengurangan** dikerjakan bersusun ke bawah sesuai nilai tempat.
- **Perkalian dan pembagian** juga lebih mudah dengan cara bersusun.
- **Operasi campuran**, urutannya: (1) kerjakan yang di dalam kurung, (2) perkalian dan pembagian, (3) penjumlahan dan pengurangan. Jika setara, kerjakan dari kiri.
> Contoh: 425 - 15 x 9 = 425 - 135 = 290 (perkalian dulu).
# Soal cerita
- Baca soal dengan saksama dan tulis model matematikanya.
- Soal uang biasanya: kembalian = uang bayar - total belanja.
> Ibu membeli 2 kantong minyak goreng, bayar Rp50.000,00, kembalian Rp4.000,00. Harga sekantong = (50.000 - 4.000) : 2 = Rp23.000,00.
> **Tips ingat:** Urutan operasi **KKPP** atau **KaKuPaBa**: **K**urung dulu, lalu **K**ali-bagi, terakhir **P**lus-minus. Kali dan bagi mendahului tambah dan kurang.
> Cek hasil dengan operasi kebalikan: hasil pengurangan ditambah pengurangnya harus sama dengan bilangan awal.
# Ringkasan cepat
- Bilangan cacah = 0 dan bilangan asli.
- Bandingkan dari angka paling kiri.
- Urutan operasi: kurung, kali-bagi, tambah-kurang.
# Contoh soal
? Hasil dari 30.217 - 21.725 + 15.803 adalah ....\\nA. 24.259  B. 24.295  C. 24.925  D. 24.952||B||Kerjakan dari kiri: 30.217 - 21.725 = 8.492, lalu 8.492 + 15.803 = 24.295.
? Rafa membeli buku gambar Rp18.000,00 dan dua pulpen Rp7.500,00 per batang. Ia membayar dengan uang Rp50.000,00. Kembaliannya adalah ....\\nA. Rp15.000,00  B. Rp16.000,00  C. Rp17.000,00  D. Rp18.000,00||C||Total = 18.000 + (2 x 7.500) = 33.000. Kembalian = 50.000 - 33.000 = 17.000.
? Jika 131 x p = 3.275, nilai p adalah ....\\nA. 15  B. 20  C. 24  D. 25||D||p = 3.275 : 131 = 25.`;
MT['mtk0-1']=`# Kelipatan dan faktor
- **Kelipatan** bilangan adalah hasil kali bilangan itu dengan bilangan asli. Kelipatan 3: 3, 6, 9, 12, ... Kelipatan 4: 4, 8, 12, 16, ...
- **Kelipatan persekutuan** adalah kelipatan yang sama. Kelipatan 3 dan 4: 12, 24, ...
- **Faktor** adalah bilangan yang dapat membagi habis bilangan itu. Faktor 12: 1, 2, 3, 4, 6, 12. Faktor 16: 1, 2, 4, 8, 16.
- **Faktor persekutuan** adalah faktor yang sama. Faktor persekutuan 12 dan 16: 1, 2, 4.
# FPB (Faktor Persekutuan Terbesar)
FPB adalah bilangan terbesar yang dapat membagi habis semua bilangan itu.
- **Pohon faktor**: uraikan ke faktor prima. Ambil faktor prima yang **sama-sama ada** dengan **pangkat terkecil**, lalu kalikan.
- **Sengkedan (bagi bersama)**: bagi semua bilangan dengan faktor prima yang bisa membagi semuanya. FPB = hasil kali pembaginya.
> FPB 30, 60, 90: 30 = 2 x 3 x 5, 60 = 2 pangkat 2 x 3 x 5, 90 = 2 x 3 pangkat 2 x 5. Ambil yang sama dengan pangkat terkecil: 2 x 3 x 5 = 30.
# KPK (Kelipatan Persekutuan Terkecil)
KPK adalah bilangan terkecil yang habis dibagi semua bilangan itu.
- **Pohon faktor**: ambil **semua** faktor prima yang ada. Kalau ada yang sama, pilih pangkat **terbesar**.
> KPK 30, 42, 54: 30 = 2 x 3 x 5, 42 = 2 x 3 x 7, 54 = 2 x 3 pangkat 3. Ambil semua dengan pangkat terbesar: 2 x 27 x 5 x 7 = 1.890.
# Kapan memakai FPB atau KPK
- **FPB**: membagi sama banyak, membuat kelompok terbanyak, atau memotong sepanjang mungkin.
- **KPK**: kejadian berulang bersamaan lagi, jadwal bertemu lagi, atau menyalakan lampu bersamaan.
> **Tips ingat:** **FPB** = **F**aktor **P**angkat **B**ersama, ambil yang **kecil**. **KPK** = **K**umpulkan semua faktor, pangkat **besar**. Kata kunci soal: dibagi rata = FPB, bersamaan lagi = KPK.
> Cara cek: FPB selalu lebih kecil atau sama dengan bilangan terkecil. KPK selalu lebih besar atau sama dengan bilangan terbesar.
# Ringkasan cepat
- FPB: faktor yang sama, pangkat terkecil.
- KPK: semua faktor, pangkat terbesar.
- Bagi rata = FPB, bersamaan lagi = KPK.
# Contoh soal
? Lampu A menyala setiap 6 detik dan lampu B setiap 8 detik. Keduanya menyala bersamaan lagi setelah ... detik.\\nA. 12  B. 24  C. 36  D. 48||B||Bersamaan lagi berarti KPK. 6 = 2 x 3, 8 = 2 pangkat 3. KPK = 8 x 3 = 24.
? Ibu punya 24 apel dan 36 jeruk. Buah akan dibagi ke dalam kantong dengan isi sama banyak. Kantong terbanyak yang dapat dibuat adalah ....\\nA. 6  B. 8  C. 12  D. 24||C||Terbanyak dan sama banyak berarti FPB. 24 = 2 pangkat 3 x 3, 36 = 2 pangkat 2 x 3 pangkat 2. FPB = 4 x 3 = 12.`;
MT['mtk0-2']=`# Pecahan senilai
Pecahan senilai adalah pecahan dengan pembilang dan penyebut berbeda tetapi nilainya sama. Caranya: kalikan atau bagi pembilang dan penyebut dengan bilangan yang **sama**.
> 2/4 = 4/8 (dikali 2). 2/4 = 1/2 (dibagi 2).
# Mengubah bentuk pecahan
- **Biasa ke campuran**: bagi pembilang dengan penyebut. Hasil bagi jadi bilangan bulat, sisanya jadi pembilang. 14/5 = 2 sisa 4, jadi 2 4/5.
- **Campuran ke biasa**: bilangan bulat dikali penyebut, tambah pembilang, penyebut tetap. 2 3/4 = (2 x 4 + 3)/4 = 11/4.
- **Pecahan ke desimal**: ubah penyebut menjadi 10, 100, dan seterusnya. 2/5 = 4/10 = 0,4.
- **Desimal ke pecahan**: banyak angka di belakang koma menentukan penyebut. 0,75 punya 2 angka, jadi 75/100 = 3/4. 3,5 punya 1 angka, jadi 35/10 = 3 1/2.
- **Pecahan ke persen**: ubah penyebut menjadi 100. 3/4 = 75/100 = 75%.
- **Persen ke pecahan**: tulis di atas 100 lalu sederhanakan. 45% = 45/100 = 0,45.
# Membandingkan dan mengurutkan
- Penyebut sama: bandingkan pembilangnya langsung.
- Penyebut beda: samakan penyebut dengan **KPK**, lalu bandingkan pembilang.
- Beda bentuk (biasa, desimal, persen): ubah semuanya ke satu bentuk, biasanya desimal.
- Contoh mengurutkan 3/5, 90%, 1 1/4, 1,8: ubah ke desimal menjadi 0,6; 0,9; 1,25; 1,8.
# Operasi hitung
- **Tambah dan kurang**: samakan penyebut dengan KPK, lalu hitung pembilangnya. Penyebut tidak ikut dijumlahkan.
- **Kali**: pembilang x pembilang, penyebut x penyebut. Ubah campuran ke biasa dulu.
- **Bagi**: kalikan dengan **kebalikan** pembagi.
- **Campuran**: samakan bentuk dulu, lalu ikuti urutan kurung, kali-bagi, tambah-kurang.
> **Tips ingat:** Pecahan dibagi = **Kali Balik**. Ubah bagi jadi kali, lalu balik pecahan kedua.
> **Trik silang** membandingkan dua pecahan: kalikan silang pembilang dengan penyebut lawannya. Yang hasilnya lebih besar menunjukkan pecahan yang lebih besar.
> **Persen** = per seratus. Angka di belakang koma = jumlah nol di penyebut.
# Ringkasan cepat
- Senilai: kali atau bagi atas dan bawah dengan bilangan sama.
- Penyebut beda: samakan dengan KPK.
- Bagi pecahan = kali kebalikan.
# Contoh soal
? Pecahan yang paling besar di antara 5/6 dan 4/5 adalah ....\\nA. 4/5  B. 5/6  C. keduanya sama  D. tidak dapat ditentukan||B||Samakan penyebut ke 30: 5/6 = 25/30 dan 4/5 = 24/30. Karena 25 lebih besar dari 24, maka 5/6 lebih besar.
? Hasil dari 2/3 : 4/9 adalah ....\\nA. 8/27  B. 3/2  C. 2/3  D. 6/5||B||2/3 : 4/9 = 2/3 x 9/4 = 18/12 = 3/2 atau 1 1/2.
? Bentuk pecahan biasa dari 0,75 adalah ....\\nA. 1/4  B. 2/3  C. 3/4  D. 4/5||C||Ada 2 angka di belakang koma, jadi 0,75 = 75/100 = 3/4.`;
MT['mtk1-0']=`# Satuan panjang
Urutan dari terbesar: km, hm, dam, m, dm, cm, mm. Setiap **turun 1 tangga** dikali 10, setiap **naik 1 tangga** dibagi 10.
> Pita 2 m + 5 dm + 25 cm = 200 cm + 50 cm + 25 cm = 275 cm.
# Satuan berat
Urutan: kg, hg, dag, g, dg, cg, mg. Aturan tangganya sama (turun x10, naik :10).
- 1 kg = 1.000 g, 1 kuintal = 100 kg, 1 ton = 1.000 kg.
> 4 ton + 5 kuintal - 150 kg = 4.000 + 500 - 150 = 4.350 kg.
# Satuan luas
Satuan luas memakai pangkat dua, jadi setiap tangga dikali atau dibagi **100**.
- 1 m persegi = 10.000 cm persegi.
- 1 are = 100 m persegi, 1 hektare (ha) = 10.000 m persegi.
> Kebun 1,5 ha dijual 1.250 m persegi. Sisa = 15.000 - 1.250 = 13.750 m persegi.
# Satuan volume
- 1 liter = 1.000 mililiter = 1.000 cm kubik (cc) = 1 dm kubik.
- 1 mL = 1 cm kubik.
# Satuan waktu
- 1 dasawarsa = 10 tahun, 1 windu = 8 tahun, 1 lustrum = 5 tahun, 1 abad = 100 tahun.
- 1 jam = 60 menit, 1 menit = 60 detik.
# Kecepatan
Kecepatan = jarak : waktu. Dari rumus itu: jarak = kecepatan x waktu, dan waktu = jarak : kecepatan. Satuan umumnya km/jam dan m/detik.
> Ayah naik motor 60 km/jam, jarak 15 km. Waktu = 15 : 60 = 1/4 jam = 15 menit.
# Sudut
Sudut terbentuk dari dua garis yang bertemu di satu titik (titik sudut), dan garisnya disebut kaki sudut.
- **Lancip**: antara 0 dan 90 derajat.
- **Siku-siku**: tepat 90 derajat.
- **Tumpul**: antara 90 dan 180 derajat.
- **Lurus**: 180 derajat.
- Mengukur memakai busur derajat: titik pusat busur di titik sudut, satu kaki sudut berimpit dengan garis alas, lalu baca angka di kaki sudut lainnya.
> **Tips ingat urutan satuan panjang:** **K**ami **H**arus **D**isiplin **M**enabung, **D**an **S**elalu **M**enolong = km, hm, dam, m, dm, cm, mm.
> **Segitiga rumus kecepatan:** tutup yang dicari. Jarak di atas, kecepatan dan waktu di bawah. Tutup jarak, hasilnya kali. Tutup kecepatan atau waktu, hasilnya bagi.
> Ubah satuan ke satuan yang sama sebelum menghitung. Itu kesalahan paling sering di soal TKA.
# Ringkasan cepat
- Panjang dan berat: tiap tangga x10 atau :10. Luas: x100 atau :100.
- Dasawarsa 10, windu 8, lustrum 5.
- Kecepatan = jarak : waktu.
# Contoh soal
? Pedagang punya 2 kuintal beras, 45 kg tepung terigu, dan 25.000 gram gula pasir. Total beratnya adalah ....\\nA. 2.295 kg  B. 2.070 kg  C. 495 kg  D. 270 kg||D||Beras 200 kg, tepung 45 kg, gula 25.000 g = 25 kg. Total = 200 + 45 + 25 = 270 kg.
? Sebuah gedung berusia 2 dasawarsa 4 tahun. Usia itu sama dengan ....\\nA. 3 windu  B. 5 lustrum  C. 20 tahun  D. 28 tahun||A||2 dasawarsa + 4 tahun = 24 tahun. 3 windu = 24 tahun. 5 lustrum = 25 tahun.
? Ayah naik motor dengan kecepatan rata-rata 60 km/jam menempuh jarak 15 km. Waktu yang diperlukan adalah ... menit.\\nA. 10  B. 15  C. 20  D. 25||B||Waktu = 15 km : 60 km/jam = 1/4 jam = 15 menit.`;
MT['mtk1-1']=`# Sifat-sifat bangun datar
- **Persegi**: 4 sisi sama panjang, 4 sudut siku-siku, 2 diagonal sama panjang dan berpotongan tegak lurus.
- **Persegi panjang**: sisi berhadapan sama panjang dan sejajar, 4 sudut siku-siku, 2 diagonal sama panjang dan saling membagi dua.
- **Segitiga sama sisi**: 3 sisi sama panjang, 3 sudut masing-masing 60 derajat.
- **Segitiga sama kaki**: 2 sisi sama panjang, 2 sudut sama besar.
- **Segitiga sembarang**: semua sisi dan sudut berbeda.
- Berdasarkan sudutnya: segitiga **siku-siku** (ada sudut 90), **lancip** (semua sudut kurang dari 90), **tumpul** (ada sudut lebih dari 90).
- **Jajargenjang**: sisi berhadapan sejajar dan sama panjang, sudut berhadapan sama besar, dua sudut berdekatan jumlahnya 180 derajat.
- **Trapesium**: punya sepasang sisi sejajar. Trapesium sama kaki punya diagonal sama panjang. Trapesium siku-siku punya dua sudut siku-siku.
- **Layang-layang**: dua pasang sisi sama panjang, sepasang sudut sama besar, diagonal berpotongan tegak lurus.
- **Belah ketupat**: 4 sisi sama panjang, sudut berhadapan sama besar, diagonal berpotongan tegak lurus dan saling membagi dua.
- **Lingkaran**: punya titik pusat. Jari-jari (r) adalah jarak pusat ke tepi. Diameter (d) = 2 x r.
# Rumus keliling dan luas
- **Persegi**: K = 4 x sisi. L = sisi x sisi.
- **Persegi panjang**: K = 2 x (p + l). L = p x l.
- **Segitiga**: K = jumlah ketiga sisi. L = 1/2 x alas x tinggi.
- **Jajargenjang**: K = 2 x (alas + sisi miring). L = alas x tinggi.
- **Trapesium**: K = jumlah keempat sisi. L = 1/2 x (jumlah sisi sejajar) x tinggi.
- **Layang-layang**: K = 2 x (sisi panjang + sisi pendek). L = 1/2 x diagonal 1 x diagonal 2.
- **Belah ketupat**: K = 4 x sisi. L = 1/2 x diagonal 1 x diagonal 2.
- **Lingkaran**: K = 2 x pi x r. L = pi x r x r. Gunakan pi = 22/7 jika r kelipatan 7, atau 3,14 jika tidak.
# Luas gabungan
Pecah bangun menjadi bangun-bangun sederhana, hitung luas masing-masing, lalu jumlahkan.
> Persegi panjang 30 x 18 digabung segitiga alas 16 tinggi 18: luas = 540 + 144 = 684 cm persegi.
> **Tips ingat:** Segitiga, trapesium, layang-layang, dan belah ketupat semuanya punya **1/2** di rumus luasnya. Persegi, persegi panjang, dan jajargenjang tidak punya.
> Layang-layang dan belah ketupat punya **rumus luas yang sama** (setengah kali dua diagonal), tetapi rumus keliling berbeda.
> Keliling = satuan panjang (cm). Luas = satuan persegi (cm persegi). Jangan tertukar.
# Ringkasan cepat
- Sudut siku-siku semua: persegi dan persegi panjang.
- Rumus luas berisi 1/2: segitiga, trapesium, layang-layang, belah ketupat.
- Luas gabungan = jumlahkan luas bagian-bagiannya.
# Contoh soal
? Bangun datar dengan empat sudut siku-siku dan dua diagonal sama panjang, tetapi sisi berhadapan tidak sama dengan sisi lainnya, adalah ....\\nA. persegi panjang  B. belah ketupat  C. jajargenjang  D. layang-layang||A||Hanya persegi panjang yang punya 4 sudut siku-siku dan diagonal sama panjang. Belah ketupat, jajargenjang, dan layang-layang tidak punya sudut siku-siku.
? Keliling lukisan persegi panjang dengan panjang 82 cm dan lebar 63 cm adalah ....\\nA. 5.166 cm  B. 290 cm  C. 175 cm  D. 128 cm||B||K = 2 x (82 + 63) = 2 x 145 = 290 cm.
? Tanah berbentuk persegi panjang dengan panjang 18 m dan lebar 8 m dijual Rp1.000.000,00 per meter persegi. Harga jual tanah itu adalah ....\\nA. Rp144.000.000,00  B. Rp26.000.000,00  C. Rp104.000.000,00  D. Rp144.000,00||A||Luas = 18 x 8 = 144 m persegi. Harga = 144 x 1.000.000 = Rp144.000.000,00.
? Trapesium dengan sisi sejajar 10 cm dan 16 cm serta tinggi 8 cm memiliki luas ....\\nA. 208 cm persegi  B. 104 cm persegi  C. 128 cm persegi  D. 52 cm persegi||B||L = 1/2 x (10 + 16) x 8 = 1/2 x 26 x 8 = 104 cm persegi.`;
MT['mtk1-2']=`# Sifat-sifat bangun ruang
- **Kubus**: 6 sisi berbentuk persegi yang sama luas, 8 titik sudut, 12 rusuk sama panjang.
- **Balok**: 6 sisi berbentuk persegi panjang (sisi berhadapan sejajar dan sama luas), 8 titik sudut, 12 rusuk (rusuk yang sejajar sama panjang).
- **Prisma tegak segitiga**: 5 sisi (alas dan tutup berbentuk segitiga, 3 sisi tegak), 6 titik sudut, 9 rusuk.
- **Tabung**: alas dan tutup berbentuk lingkaran sama luas, ada selimut, 2 rusuk lengkung, tidak punya titik sudut.
- **Kerucut**: alas berbentuk lingkaran, 1 rusuk lengkung, 1 titik puncak.
- **Limas segi empat**: alas berbentuk segi empat, 4 sisi tegak berbentuk segitiga, 5 titik sudut (satu adalah titik puncak), 8 rusuk.
# Visualisasi spasial
Bangun ruang tampak berbeda jika dilihat dari arah berbeda. Pada tumpukan kubus, bayangkan tampak depan, atas, dan samping kanan.
- Tampak **depan**: lihat kolom dan tinggi tumpukan dari depan.
- Tampak **atas**: lihat denah, setiap tumpukan terlihat sebagai satu persegi.
- Hitung tinggi tiap kolom, lalu gambar ulang dari arah yang diminta.
# Volume kubus dan balok
- **Kubus**: V = r x r x r (r = panjang rusuk).
- **Balok**: V = p x l x t.
- Volume gabungan = jumlah volume bagian-bagiannya.
> Kubus rusuk 14 cm: V = 14 x 14 x 14 = 2.744 cm kubik.
> Kubus rusuk 16 cm (4.096) digabung balok 32 x 16 x 20 (10.240): volume = 14.336 cm kubik.
- Hubungan satuan: 1 liter = 1.000 mL = 1.000 cm kubik = 1 dm kubik.
> **Tips ingat jumlah sisi-titik-rusuk (S-T-R):** kubus dan balok **6-8-12**, prisma segitiga **5-6-9**, limas segi empat **5-5-8**.
> **Kubus** = semua sama (sisi, rusuk). **Balok** = sisi berhadapan yang sama. Kalau soal menyebut sisi berbentuk persegi semua, jawabannya kubus.
> Cek satuan dulu: semua ukuran harus dalam satuan yang sama sebelum dihitung.
# Ringkasan cepat
- Kubus dan balok punya 6 sisi, 8 titik sudut, 12 rusuk.
- Tabung dan kerucut punya rusuk lengkung, tidak punya titik sudut (kerucut punya titik puncak).
- V kubus = r x r x r, V balok = p x l x t.
# Contoh soal
? Bangun ruang dengan 6 sisi (sisi berhadapan sejajar dan sama luas), 8 titik sudut, dan 12 rusuk yang sejajar sama panjang adalah ....\\nA. balok  B. kubus  C. tabung  D. limas segi empat||A||Ciri sisi berhadapan sejajar dan sama luas dengan rusuk sejajar yang sama panjang adalah ciri balok.
? Volume kubus dengan panjang rusuk 14 cm adalah ....\\nA. 2.774 cm kubik  B. 2.744 cm kubik  C. 2.474 cm kubik  D. 2.444 cm kubik||B||V = 14 x 14 x 14 = 2.744 cm kubik.
? Sebuah balok berukuran panjang 12 cm, lebar 8 cm, dan tinggi 5 cm. Volumenya adalah ....\\nA. 96 cm kubik  B. 480 cm kubik  C. 400 cm kubik  D. 960 cm kubik||B||V = 12 x 8 x 5 = 480 cm kubik.`;
MT['mtk2-0']=`# Apa itu data?
Data adalah kumpulan informasi, misalnya jumlah siswa laki-laki dan perempuan, nilai ulangan, atau jenis buah kesukaan. Mencatat jawaban teman-teman di papan tulis adalah cara **mengumpulkan data**.
# Menyajikan data dalam tabel
Data yang sama dikelompokkan dengan **menghitung banyak setiap jenisnya**, lalu ditulis berurutan dalam tabel supaya ringkas dan mudah dibaca.
- Gunakan **turus** (tally) untuk membantu menghitung. Tulis satu garis untuk setiap data, dan kelompokkan per lima.
- Setelah dihitung, tulis hasilnya sebagai angka di tabel.
> Data ekstrakurikuler 25 siswa kelas 6: Futsal 7, Taekwondo 5, Tari 2, Basket 8, Musik 3.
# Membaca informasi dari tabel
Dari tabel kita bisa mencari:
- Data **terbanyak** (nilai tertinggi) dan **tersedikit** (nilai terendah).
- **Selisih** dua data: kurangkan data yang besar dengan yang kecil.
- **Jumlah seluruh data**: tambahkan semua angka di tabel.
> Dari tabel di atas: paling banyak adalah basket. Selisih taekwondo dan musik = 5 - 3 = 2 siswa. Jumlah seluruhnya = 7 + 5 + 2 + 8 + 3 = 25 siswa.
> Nilai ulangan: 60, 70, 80, 90, 100. Tabel dibuat dengan menghitung berapa kali tiap nilai muncul.
> **Tips ingat:** **Cek total**: jumlah angka di tabel harus sama dengan banyak data awal. Kalau tidak sama, ada data yang terlewat atau terhitung dua kali.
> Kata kunci soal: **terbanyak** = angka paling besar, **tersedikit** = angka paling kecil, **selisih** = dikurangi, **seluruhnya** = dijumlah.
> Pada turus, hitung per lima supaya cepat: satu kelompok = 5.
# Ringkasan cepat
- Kelompokkan data sejenis, hitung banyaknya, tulis di tabel.
- Selisih = kurang, seluruh = tambah.
- Selalu cek jumlah akhir dengan banyak data.
# Contoh soal
? Tabel ekstrakurikuler: Futsal 7, Taekwondo 5, Tari 2, Basket 8, Musik 3. Selisih banyak siswa yang mengikuti ekstrakurikuler terbanyak dan tersedikit adalah ....\\nA. 4  B. 5  C. 6  D. 7||C||Terbanyak adalah basket (8) dan tersedikit adalah tari (2). Selisih = 8 - 2 = 6.
? Penjualan roti hari Sabtu: srikaya 58, keju 42, cokelat 47, pisang 24 bungkus. Jumlah seluruh roti yang terjual adalah ... bungkus.\\nA. 161  B. 171  C. 181  D. 191||B||58 + 42 + 47 + 24 = 171 bungkus.`;
MT['mtk2-1']=`# Menyajikan data dalam diagram
Selain tabel, data bisa disajikan dalam **diagram**, misalnya diagram gambar dan diagram batang.
# Diagram gambar
- Data ditunjukkan dengan gambar atau lambang.
- Selalu baca **keterangan**: satu gambar mewakili berapa. Misalnya, satu gambar gelas mewakili 5 gelas.
- Banyak data = jumlah gambar x nilai satu gambar. Setengah gambar mewakili setengah nilainya.
> Keterangan: satu gambar mewakili 2 siswa. Jika ada 6 gambar, banyak siswa = 6 x 2 = 12 siswa.
# Diagram batang
- Data ditunjukkan dengan batang. Sumbu mendatar berisi jenis data, sumbu tegak berisi banyaknya.
- Tinggi batang menunjukkan banyak data. Baca angka di sumbu tegak pada ujung batang.
- Batang tertinggi = data terbanyak, batang terendah = data tersedikit.
> Penjualan minuman hari Minggu: kopi 15, es teh manis 30, jus mangga 25, jus jeruk 20, air mineral 40 gelas.
> Dari diagram: yang paling sedikit terjual adalah kopi. Selisih kopi dan es teh manis = 30 - 15 = 15 gelas. Jumlah semua = 15 + 30 + 25 + 20 + 40 = 130 gelas.
# Membuat diagram dari tabel
- Cocokkan angka di tabel dengan tinggi batang setiap tahun atau jenis.
- Periksa **satu per satu**: jika ada satu batang yang tingginya berbeda dari tabel, pilihan itu salah.
# Membaca informasi bertingkat
- Soal yang menanyakan **lebih dari** sekian: jumlahkan hanya data yang memenuhi syarat.
> Berat badan: 12 siswa, 11 siswa, 5 siswa berberat lebih dari 45 kg. Jumlah = 12 + 11 + 5 = 28 siswa.
> **Tips ingat:** **GAMBAR = KALI**: banyak gambar dikali nilai satu gambar. **BATANG = BACA**: baca tinggi ujung batang di sumbu tegak.
> Perhatikan **skala** sumbu tegak. Kadang loncat 5, 10, atau 20, bukan 1.
> Pada soal benar/salah, hitung ulang tiap pernyataan, jangan menebak dari bentuk diagram.
# Ringkasan cepat
- Diagram gambar: baca keterangan, lalu kalikan.
- Diagram batang: baca ujung batang dan skala sumbu.
- Cocokkan data tabel dengan diagram satu per satu.
# Contoh soal
? Diagram penjualan minuman: kopi 15, es teh manis 30, jus mangga 25, jus jeruk 20, air mineral 40 gelas. Jumlah semua minuman yang terjual adalah ... gelas.\\nA. 120  B. 125  C. 130  D. 135||C||15 + 30 + 25 + 20 + 40 = 130 gelas.
? Diagram gambar perpustakaan dengan keterangan satu gambar = 2 siswa. Hari Rabu ada 8 gambar dan hari Jumat ada 7 gambar. Selisih banyak pengunjung hari Rabu dan Jumat adalah ... siswa.\\nA. 1  B. 2  C. 3  D. 4||B||Rabu = 8 x 2 = 16, Jumat = 7 x 2 = 14. Selisih = 16 - 14 = 2 siswa.
? Banyak siswa dengan berat badan lebih dari 45 kg adalah 12, 11, dan 5 siswa pada tiga kelompok berat. Jumlah siswa tersebut adalah ....\\nA. 27  B. 28  C. 29  D. 30||B||12 + 11 + 5 = 28 siswa.`;
const FIG={
datar:`<svg viewBox='0 0 640 262' style='width:100%;max-width:640px'><rect class='fg' x='45' y='22' width='70' height='70'/><text class='ft' x='80' y='115'>Persegi</text><rect class='fg' x='190' y='32' width='100' height='55'/><text class='ft' x='240' y='115'>Persegi panjang</text><polygon class='fg' points='360,92 440,92 400,28'/><path class='fd' d='M400 28V92'/><text class='fs' x='410' y='66'>t</text><text class='ft' x='400' y='115'>Segitiga</text><polygon class='fg' points='510,92 590,92 610,30 530,30'/><text class='ft' x='560' y='115'>Jajargenjang</text><polygon class='fg' points='35,215 125,215 105,162 55,162'/><text class='ft' x='80' y='250'>Trapesium</text><polygon class='fg' points='240,148 272,185 240,230 208,185'/><path class='fd' d='M240 148V230M208 185H272'/><text class='ft' x='240' y='250'>Layang-layang</text><polygon class='fg' points='400,150 440,190 400,230 360,190'/><path class='fd' d='M400 150V230M360 190H440'/><text class='ft' x='400' y='250'>Belah ketupat</text><circle class='fg' cx='560' cy='190' r='40'/><path class='fd' d='M560 190H600'/><text class='fs' x='580' y='184'>r</text><text class='ft' x='560' y='250'>Lingkaran</text></svg>`,
ruang:`<svg viewBox='0 0 480 285' style='width:100%;max-width:480px'><polygon class='fg' points='40,45 100,45 120,25 60,25'/><polygon class='fg' points='100,45 120,25 120,85 100,105'/><rect class='fg' x='40' y='45' width='60' height='60'/><text class='ft' x='80' y='128'>Kubus</text><text class='fs' x='80' y='142'>6 sisi, 8 titik, 12 rusuk</text><polygon class='fg' points='195,55 285,55 310,35 220,35'/><polygon class='fg' points='285,55 310,35 310,85 285,105'/><rect class='fg' x='195' y='55' width='90' height='50'/><text class='ft' x='245' y='128'>Balok</text><text class='fs' x='245' y='142'>6 sisi, 8 titik, 12 rusuk</text><polygon class='fg' points='435,105 460,85 400,85 375,105'/><polygon class='fg' points='405,60 435,105 460,85 430,40'/><polygon class='fg' points='375,105 435,105 405,60'/><text class='ft' x='417' y='128'>Prisma segitiga</text><text class='fs' x='417' y='142'>5 sisi, 6 titik, 9 rusuk</text><path class='fg' d='M45 165v70a35 10 0 0 0 70 0v-70'/><ellipse class='fg' cx='80' cy='165' rx='35' ry='10'/><text class='ft' x='80' y='263'>Tabung</text><text class='fs' x='80' y='277'>2 rusuk lengkung</text><ellipse class='fd' cx='240' cy='235' rx='35' ry='10'/><path class='fg' d='M205 235a35 10 0 0 0 70 0L240 155Z'/><text class='ft' x='240' y='263'>Kerucut</text><text class='fs' x='240' y='277'>1 titik puncak</text><polygon class='fg' points='350,235 420,235 440,215 370,215'/><path class='fd' d='M370 215L395 155'/><polygon class='fg' points='420,235 440,215 395,155'/><polygon class='fg' points='350,235 420,235 395,155'/><text class='ft' x='395' y='263'>Limas segi empat</text><text class='fs' x='395' y='277'>5 sisi, 5 titik, 8 rusuk</text></svg>`,
tangga:`<svg viewBox='0 0 640 215' style='width:100%;max-width:640px'>${['km','hm','dam','m','dm','cm','mm'].map((u,i)=>`<rect class='fa' x='${8+88*i}' y='${14+18*i}' width='84' height='44' rx='6'/><text class='ft' x='${50+88*i}' y='${41+18*i}'>${u}</text>`).join('')}<text class='ft' x='320' y='170'>Turun 1 tangga (ke kanan): dikali 10</text><text class='ft' x='320' y='192'>Naik 1 tangga (ke kiri): dibagi 10</text><text class='fs' x='320' y='210'>Untuk luas: setiap tangga dikali atau dibagi 100</text></svg>`};
MT['mtk1-0']=MT['mtk1-0'].replace('# Satuan berat','@tangga\n# Satuan berat');
MT['mtk1-1']=MT['mtk1-1'].replace('# Sifat-sifat bangun datar','# Sifat-sifat bangun datar\n@datar');
MT['mtk1-2']=MT['mtk1-2'].replace('# Sifat-sifat bangun ruang','# Sifat-sifat bangun ruang\n@ruang');
const tl=n=>'<s>||||</s> '.repeat(Math.floor(n/5))+'|'.repeat(n%5),tdx="style='border:2px solid var(--bd);padding:6px'";
const EK=[['Futsal',7],['Taekwondo',5],['Tari',2],['Basket',8],['Musik',3]],MN=[['Kopi',15],['Es teh manis',30],['Jus mangga',25],['Jus jeruk',20],['Air mineral',40]];
Object.assign(FIG,{
tabel:`<table style='width:100%;border-collapse:collapse;text-align:center'><tr><th ${tdx}>Ekstrakurikuler</th><th ${tdx}>Turus</th><th ${tdx}>Banyak siswa</th></tr>${EK.map(r=>`<tr><td ${tdx}>${r[0]}</td><td ${tdx}>${tl(r[1])}</td><td ${tdx}>${r[1]}</td></tr>`).join('')}<tr><td ${tdx} colspan='2'><b>Jumlah</b></td><td ${tdx}><b>25</b></td></tr></table><p class='mu' style='margin:6px 0 0'>Satu garis = 1 data. Garis yang dicoret = 5 data.</p>`,
dgambar:`${MN.map(r=>`<div style='display:flex;gap:8px;align-items:center;padding:3px 0'><span style='width:110px'>${r[0]}</span><span>${'🥤'.repeat(r[1]/5)}</span></div>`).join('')}<p class='mu' style='margin:6px 0 0'>Keterangan: 🥤 = 5 gelas</p>`,
dbatang:`<svg viewBox='0 0 400 232' style='width:100%;max-width:420px'>${[0,10,20,30,40].map(v=>`<path class='fd' d='M40 ${180-v*3.5}H390'/><text class='fs' x='30' y='${184-v*3.5}'>${v}</text>`).join('')}${MN.map((r,i)=>`<rect class='fa' x='${55+i*68}' y='${180-r[1]*3.5}' width='46' height='${r[1]*3.5}'/><text class='ft' x='${78+i*68}' y='${174-r[1]*3.5}'>${r[1]}</text><text class='fs' x='${78+i*68}' y='197'>${r[0].split(' ')[0]}</text><text class='fs' x='${78+i*68}' y='209'>${r[0].split(' ')[1]||''}</text>`).join('')}<text class='fs' x='215' y='227'>Jenis minuman (jumlah gelas terjual)</text></svg>`,
sudut:`<svg viewBox='0 0 640 135' style='width:100%;max-width:640px'>${[[45,'Lancip','&lt; 90°'],[90,'Siku-siku','90°'],[135,'Tumpul','90° - 180°'],[180,'Lurus','180°']].map((s,i)=>{const cx=(s[0]==180?80:50)+i*160,cy=88,a=s[0]*Math.PI/180,x=cx+60*Math.cos(a),y=cy-60*Math.sin(a),r=22;return `<path class='fg' style='fill:none' d='M${cx+(s[0]==180?-60:0)} ${cy}H${cx+60}M${cx} ${cy}L${x} ${y}'/>${s[0]==90?`<path class='fd' d='M${cx+14} ${cy}V${cy-14}H${cx}'/>`:`<path class='fd' d='M${cx+r} ${cy}A${r} ${r} 0 0 0 ${cx+r*Math.cos(a)} ${cy-r*Math.sin(a)}'/>`}<text class='ft' x='${cx+20}' y='112'>${s[1]}</text><text class='fs' x='${cx+20}' y='127'>${s[2]}</text>`}).join('')}</svg>`,
pecahan:`<svg viewBox='0 0 400 172' style='width:100%;max-width:420px'>${[[1,2],[2,4],[4,8]].map((f,i)=>{const n=f[1],w=300/n;return Array.from({length:n},(_,j)=>`<rect class='${j<f[0]?'fa':'fg'}' style='${j<f[0]?'':'fill:var(--sf)'}' x='${10+j*w}' y='${12+i*52}' width='${w}' height='34'/>`).join('')+`<text class='ft' x='360' y='${35+i*52}'>${f[0]}/${f[1]}</text>`}).join('')}<text class='fs' x='200' y='168'>1/2 = 2/4 = 4/8 (bagian yang diwarnai sama luas)</text></svg>`,
pohon:`<svg viewBox='0 0 320 150' style='width:100%;max-width:340px'><path class='fd' d='M120 38L92 64M120 38L148 64M150 92L132 108M150 92L168 108'/>${[[120,28,'30'],[90,82,'2'],[150,82,'15'],[130,126,'3'],[170,126,'5']].map(p=>`<circle class='fa' cx='${p[0]}' cy='${p[1]-5}' r='15'/><text class='ft' x='${p[0]}' y='${p[1]}'>${p[2]}</text>`).join('')}<text class='fs' x='255' y='70'>30 = 2 x 3 x 5</text><text class='fs' x='255' y='86'>(faktor prima)</text></svg>`});
MT['mtk2-0']=MT['mtk2-0'].replace('# Membaca informasi dari tabel','@tabel\n# Membaca informasi dari tabel');
MT['mtk2-1']=MT['mtk2-1'].replace('# Diagram batang','@dgambar\n# Diagram batang').replace('# Membuat diagram dari tabel','@dbatang\n# Membuat diagram dari tabel');
MT['mtk1-0']=MT['mtk1-0'].replace('# Sudut','# Sudut\n@sudut');
MT['mtk0-2']=MT['mtk0-2'].replace('# Mengubah bentuk pecahan','@pecahan\n# Mengubah bentuk pecahan');
MT['mtk0-1']=MT['mtk0-1'].replace('# FPB (Faktor Persekutuan Terbesar)','@pohon\n# FPB (Faktor Persekutuan Terbesar)');
const PK={'mtk':[{n:'Paket Soal 1',p:[`1. Hasil dari 27.825 + 13.460 - 9.754 adalah ....
A. 31.531
B. 31.513
C. 31.351
D. 31.315
2. Hasil dari 1.325 x 17 : 5 adalah ....
A. 3.505
B. 3.550
C. 4.505
D. 4.550
3. Seorang pedagang akan mendistribusikan 42 karung beras ke 15 toko langganannya. Setiap toko menerima beras sama banyak. Berat beras setiap karung adalah 25 kg. Banyak beras yang diterima setiap toko adalah ....
A. 65 kg
B. 70 kg
C. 75 kg
D. 80 kg
4. Adit pergi ke warung membawa 2 lembar uang dua puluh ribuan dan 2 lembar uang lima ribuan. Tentukan benar atau salah.
S1. Nilai uang Adit setara dengan selembar uang lima puluh ribuan.
S2. Nilai uang Adit setara dengan tiga lembar uang dua puluh ribuan.
S3. Nilai uang Adit setara dengan lima lembar uang sepuluh ribuan.
[PGK] 5. Jika Adit (soal nomor 4) berbelanja senilai Rp46.000,00, kemungkinan uang kembalian yang diterima adalah ....
A. selembar uang lima ribuan
B. dua lembar uang dua ribuan
C. empat lembar uang seribuan
6. Diketahui urutan bilangan kelipatan 14, 21, 28, 35, n, 49, 56, m, .... Tentukan benar atau salah.
S1. Bilangan-bilangan tersebut merupakan kelipatan 7.
S2. Nilai n yang tepat adalah 42.
S3. Nilai m yang tepat adalah 70.
7. KPK dari 24, 36, dan 42 dalam bentuk faktorisasi prima adalah ....
A. 2 pangkat 3 x 3 pangkat 2
B. 2 pangkat 3 x 7
C. 2 pangkat 2 x 3 pangkat 3 x 7
D. 2 pangkat 3 x 3 pangkat 2 x 7
8. Sebanyak 63 jeruk dan 81 apel akan disajikan dalam beberapa piring. Setiap piring berisi jeruk dan apel masing-masing sama banyak. Jumlah piring paling banyak yang perlu disediakan adalah ....
A. 9
B. 7
C. 6
D. 3
9. Sebuah gambar persegi panjang dibagi menjadi 5 bagian sama dan 3 bagian diarsir. Pecahan yang tidak senilai dengan pecahan sesuai gambar tersebut adalah ....
A. 3/6
B. 3/5
C. 12/20
D. 18/30
10. Bentuk desimal dari 3/8 adalah ....
A. 0,25
B. 0,275
C. 0,35
D. 0,375
11. Rina memiliki pita merah sepanjang 2 1/4 meter dan pita putih sepanjang 2 3/5 meter. Pernyataan yang tepat adalah ....
A. Pita merah lebih panjang dari pita putih.
B. Pita merah lebih pendek dari pita putih.
C. Pita putih lebih pendek dari pita merah.
D. Pita putih sama panjang dengan pita merah.
12. Hasil dari 3 1/4 + 5/8 adalah ....
A. 3 1/16
B. 3 1/4
C. 3 4/8
D. 3 7/8
13. Jika 4 x 7/12 = n, nilai n yang tepat adalah ....
A. 1 1/12
B. 1 1/4
C. 2 1/6
D. 2 1/3
14. Hasil dari 5/6 + 2,4 - 1 3/10 adalah ....
A. 1 4/15
B. 1 9/15
C. 1 14/15
D. 1 19/15
15. Pak Bayu membeli tiga petak tanah masing-masing seluas 1/2 hektare. Dari tanah itu, seluas 1/8 hektare dan 1/4 hektare akan diberikan kepada kedua anaknya. Sisa luas tanah yang dibeli Pak Bayu adalah ....
A. 1 1/8 hektare
B. 1 1/6 hektare
C. 1 1/4 hektare
D. 1 1/2 hektare
[PGK] 16. Ibu mendapat pesanan kue. Ibu berbelanja ke pasar selama 45 menit, membeli 8 kantong gula pasir dan 15 kantong tepung terigu, lalu membuat kue selama 1 1/2 jam. Pernyataan yang tepat adalah ....
A. Ibu berbelanja ke pasar selama 3/4 jam.
B. Selisih waktu ibu berbelanja dan memasak adalah 30 menit.
C. Total waktu ibu berbelanja dan membuat kue adalah 2 1/4 jam.
17. Berat satu kantong gula pasir adalah 5 hg dan satu kantong tepung terigu adalah 1.000 g (soal nomor 16). Tentukan benar atau salah.
S1. Berat seluruh gula pasir yang dibeli ibu adalah 40 kg.
S2. Berat seluruh tepung terigu yang dibeli ibu adalah 15 kg.
S3. Berat seluruh belanjaan ibu adalah 19 kg.
18. Pak Pandu berangkat dari rumah ke Cirebon pukul 07.00 dan tiba pukul 09.30. Jarak yang ditempuh 185 km. Kecepatan rata-rata mobil Pak Pandu adalah ....
A. 64 km/jam
B. 74 km/jam
C. 75 km/jam
D. 84 km/jam
19. Sebuah bangun datar memiliki sepasang sisi sejajar, 2 pasang sudut yang sama besar, dan jumlah 2 sudut berdekatan di antara 2 garis sejajar adalah 180 derajat. Bangun datar tersebut adalah ....
A. jajargenjang
B. layang-layang
C. trapesium siku-siku
D. trapesium sama kaki
[PGK] 20. Sebuah lukisan persegi panjang berukuran panjang 135 cm dan lebar 75 cm. Pernyataan yang tepat adalah ....
A. Keliling lukisan adalah 420 cm.
B. Luas lukisan adalah 10.125 cm persegi.
C. Ukuran panjang lukisan sama dengan 11/5 kali lebarnya.
21. Sebuah trapesium memiliki sisi sejajar 34 cm dan 42 cm serta tinggi 18 cm. Luas trapesium tersebut adalah ....
A. 684 cm persegi
B. 846 cm persegi
C. 864 cm persegi
D. 1.368 cm persegi
22. Sebuah bangun ruang memiliki 5 sisi (alas dan tutup berupa segitiga kongruen), 9 rusuk, dan 6 titik sudut. Bangun ruang tersebut adalah ....
A. balok
B. tabung
C. limas segi empat
D. prisma tegak segitiga
[PGK] 23. Data penjualan sayuran selama seminggu: cabai merah keriting 18 kg, cabai rawit hijau 9 kg, bawang putih 12 kg, bawang merah 20 kg.
Sayuran yang terjual lebih dari 15 kg adalah ....
A. bawang putih
B. bawang merah
C. cabai merah keriting
[PGK] 24. Dua jenis sayuran (data soal nomor 23) yang jumlah penjualannya lebih dari 30 kg adalah ....
A. bawang putih dan cabai merah keriting
B. cabai merah keriting dan bawang merah
C. bawang merah dan bawang putih
25. Berdasarkan data soal nomor 23, tentukan benar atau salah.
S1. Jenis sayuran yang paling banyak terjual adalah bawang merah.
S2. Jenis sayuran yang paling sedikit terjual adalah cabai merah keriting.
S3. Selisih penjualan bawang merah dan bawang putih adalah 8 kg.
26. Data banyak siswa baru SD Merdeka selama 5 tahun: 2021 sebanyak 40, 2022 sebanyak 50, 2023 sebanyak 40, 2024 sebanyak 60, 2025 sebanyak 55 siswa. Tentukan benar atau salah.
S1. Banyak siswa baru pada tahun 2022 adalah 50 orang.
S2. Selisih banyak siswa baru pada tahun 2024 dan 2025 adalah 10 orang.
S3. Jumlah seluruh siswa baru selama 5 tahun adalah 245 orang.
KUNCI JAWABAN
1. A Penjelasan: 27.825 + 13.460 = 41.285, lalu 41.285 - 9.754 = 31.531.
2. C Penjelasan: Kerjakan dari kiri: 1.325 x 17 = 22.525, lalu 22.525 : 5 = 4.505.
3. B Penjelasan: Total beras 42 x 25 = 1.050 kg. Dibagi 15 toko = 70 kg.
4. B,S,B Penjelasan: Uang Adit = 2 x 20.000 + 2 x 5.000 = 50.000. Setara selembar 50.000 (benar). Tiga lembar 20.000 = 60.000 (salah). Lima lembar 10.000 = 50.000 (benar).
5. B,C Penjelasan: Kembalian = 50.000 - 46.000 = 4.000. Dua lembar 2.000 dan empat lembar 1.000 sama dengan 4.000. Selembar 5.000 terlalu besar.
6. B,B,S Penjelasan: Selisih tiap bilangan 7, jadi kelipatan 7 (benar). n = 42 (benar). m = 56 + 7 = 63, bukan 70 (salah).
7. D Penjelasan: 24 = 2 pangkat 3 x 3, 36 = 2 pangkat 2 x 3 pangkat 2, 42 = 2 x 3 x 7. KPK: semua faktor, pangkat terbesar = 2 pangkat 3 x 3 pangkat 2 x 7.
8. A Penjelasan: Piring terbanyak berarti FPB. FPB 63 dan 81 adalah 9.
9. A Penjelasan: Gambar menunjukkan 3/5. Pecahan 3/5, 12/20, dan 18/30 senilai, sedangkan 3/6 = 1/2 tidak senilai.
10. D Penjelasan: 3 : 8 = 0,375.
11. B Penjelasan: 2 1/4 = 2,25 dan 2 3/5 = 2,6. Pita merah lebih pendek.
12. D Penjelasan: 3 1/4 = 3 2/8. Lalu 3 2/8 + 5/8 = 3 7/8.
13. D Penjelasan: 4 x 7/12 = 28/12 = 2 4/12 = 2 1/3.
14. C Penjelasan: 5/6 + 2,4 - 1,3. Dengan pecahan: 5/6 + 2 2/5 - 1 3/10 = 1 14/15.
15. A Penjelasan: Luas total 3 x 1/2 = 1 1/2 ha. Diberikan 1/8 + 1/4 = 3/8. Sisa = 12/8 - 3/8 = 9/8 = 1 1/8 ha.
16. A,C Penjelasan: 45 menit = 3/4 jam (benar). Selisih 90 - 45 = 45 menit, bukan 30 (salah). Total 3/4 + 1 1/2 = 2 1/4 jam (benar).
17. S,B,B Penjelasan: Gula 8 x 5 hg = 40 hg = 4 kg (bukan 40 kg). Tepung 15 x 1 kg = 15 kg. Total 4 + 15 = 19 kg.
18. B Penjelasan: Waktu 07.00 sampai 09.30 = 2,5 jam. Kecepatan = 185 : 2,5 = 74 km/jam.
19. D Penjelasan: Trapesium sama kaki punya sepasang sisi sejajar dan dua pasang sudut yang sama besar.
20. A,B Penjelasan: Keliling = 2 x (135 + 75) = 420 cm. Luas = 135 x 75 = 10.125. 135 : 75 = 9/5, bukan 11/5.
21. A Penjelasan: Luas = 1/2 x (34 + 42) x 18 = 684 cm persegi.
22. D Penjelasan: 5 sisi, 9 rusuk, dan 6 titik sudut adalah ciri prisma tegak segitiga.
23. B,C Penjelasan: Bawang merah 20 kg dan cabai merah keriting 18 kg lebih dari 15 kg. Bawang putih 12 kg dan cabai rawit 9 kg tidak.
24. B,C Penjelasan: Cabai merah keriting + bawang merah = 38 kg. Bawang merah + bawang putih = 32 kg. Bawang putih + cabai merah keriting = 30 kg, tidak lebih dari 30.
25. B,S,B Penjelasan: Bawang merah terbanyak (benar). Yang paling sedikit cabai rawit hijau 9 kg (salah). Selisih 20 - 12 = 8 kg (benar).
26. B,S,B Penjelasan: 2022 ada 50 siswa (benar). Selisih 60 - 55 = 5, bukan 10 (salah). Jumlah 40 + 50 + 40 + 60 + 55 = 245 (benar).`,`1. Hasil dari 3.456 : 24 adalah ....
A. 134
B. 144
C. 154
D. 164
[PGK] 2. Bilangan berikut yang merupakan kelipatan 6 adalah ....
A. 24
B. 30
C. 32
3. Sebuah persegi panjang memiliki panjang 15 cm dan lebar 8 cm. Tentukan benar atau salah.
S1. Keliling persegi panjang tersebut adalah 46 cm.
S2. Luas persegi panjang tersebut adalah 120 cm persegi.
S3. Keliling persegi dengan sisi 15 cm adalah 45 cm.
4. Volume kubus dengan panjang rusuk 9 cm adalah ....
A. 81 cm kubik
B. 243 cm kubik
C. 729 cm kubik
D. 927 cm kubik
KUNCI JAWABAN
1. B Penjelasan: 24 x 144 = 3.456, jadi 3.456 : 24 = 144.
2. A,B Penjelasan: 24 = 6 x 4 dan 30 = 6 x 5. 32 tidak habis dibagi 6.
3. B,B,S Penjelasan: Keliling = 2 x (15 + 8) = 46 cm (benar). Luas = 15 x 8 = 120 (benar). Keliling persegi = 4 x 15 = 60 cm, bukan 45 (salah).
4. C Penjelasan: Volume kubus = 9 x 9 x 9 = 729 cm kubik.`]},{n:'Paket Soal 2',p:[`1. Hasil dari 34.950 + 27.125 - 12.325 adalah ....
A. 39.570
B. 39.750
C. 49.570
D. 49.750
2. Hasil dari 6.604 : 26 x 38 adalah ....
A. 9.652
B. 9.562
C. 9.526
D. 9.256
3. Dinda membeli 8 dus cokelat. Setiap dus berisi 18 kemasan cokelat. Semua cokelat dibagikan sama banyak kepada 24 temannya di kelas. Banyak kemasan cokelat yang diterima setiap teman Dinda adalah ....
A. 2 kemasan
B. 4 kemasan
C. 6 kemasan
D. 8 kemasan
[PGK] 4. Ibu membeli beras di warung dan mendapat uang kembalian Rp35.000,00. Jika total harga beras Rp65.000,00, kemungkinan pecahan uang yang dibawa ibu adalah ....
A. dua lembar uang lima puluh ribuan
B. empat lembar uang dua puluh ribuan
C. selembar uang seratus ribuan
5. Berdasarkan soal nomor 4, tentukan benar atau salah kemungkinan pecahan uang kembalian yang diterima ibu.
S1. Tujuh lembar uang lima ribuan.
S2. Selembar uang dua puluh ribuan dan selembar uang sepuluh ribuan.
S3. Tiga lembar uang sepuluh ribuan dan selembar uang lima ribuan.
[PGK] 6. Bilangan berikut yang merupakan faktor dari 24 adalah ....
A. 3
B. 8
C. 9
7. FPB dari 48, 64, dan 72 adalah ....
A. 4
B. 6
C. 8
D. 12
8. Pak Irwan dan Pak Adit melakukan perawatan mobil di bengkel yang sama. Pak Irwan melakukan perawatan setiap 60 hari sekali dan Pak Adit setiap 90 hari sekali. Jika keduanya bertemu di bengkel hari ini, mereka akan bertemu lagi setelah ....
A. 30 hari
B. 120 hari
C. 160 hari
D. 180 hari
9. Pecahan berikut yang senilai dengan 7/9 adalah ....
A. 14/19
B. 21/27
C. 28/32
D. 35/40
10. Bentuk desimal dari 1 1/5 adalah ....
A. 0,4
B. 1,2
C. 1,4
D. 1,6
[PGK] 11. Pak Doni membeli dua gulung kabel listrik berbeda warna. Kabel hitam sepanjang 3,4 meter dan kabel putih sepanjang 3 1/5 meter. Pernyataan yang tepat adalah ....
A. Kabel hitam milik Pak Doni lebih panjang dari kabel putih.
B. Kabel hitam milik Pak Doni lebih pendek dari kabel putih.
C. Kabel putih milik Pak Doni lebih pendek dari kabel hitam.
12. Hasil dari 4 3/5 - 2/3 adalah ....
A. 3 4/15
B. 3 14/15
C. 4 4/15
D. 4 14/15
13. Jika 12/32 : 6 = p, nilai p yang tepat adalah ....
A. 1/16
B. 1/8
C. 1/6
D. 1/3
14. Hasil dari 2,5 x 1/3 : 1 1/4 adalah ....
A. 2/3
B. 3/4
C. 1/2
D. 5/8
15. Bu Sari membeli 2 1/2 kg telur ayam dan 1 3/4 kg gula pasir di warung. Di perjalanan pulang, sebanyak 1/4 kg telur pecah. Berat belanjaan Bu Sari setelah dikurangi telur yang pecah adalah ....
A. 3 kg
B. 3 1/2 kg
C. 4 kg
D. 4 1/2 kg
16. Seorang pedagang buah membeli 1/2 kuintal apel, 30 kg jeruk, dan 20.000 gram duku untuk dijual. Berat ketiga jenis buah yang dibeli pedagang tersebut adalah ....
A. 1 kuintal
B. 2 kuintal
C. 55 kg
D. 85 kg
17. Sebuah tangki berisi 128.000 mL air. Tangki kemudian diisi air dari keran sebanyak 80 liter. Setelah digunakan untuk berbagai keperluan, air yang tersisa di dalam tangki sebanyak 106 dm kubik. Banyak air yang telah dipakai adalah ....
A. 98 liter
B. 102 liter
C. 120 liter
D. 125 liter
18. Pak Adit pergi ke Kota A dengan mengendarai mobil berkecepatan rata-rata 75 km/jam. Ia berangkat dari rumah pukul 08.00 dan tiba di Kota A pukul 10.12. Jarak yang ditempuh Pak Adit dari rumah ke Kota A adalah ....
A. 155 km
B. 165 km
C. 175 km
D. 185 km
19. Bangun datar memiliki dua pasang sisi sama panjang dan sepasang sudut sama besar. Bangun datar yang sesuai ciri-ciri tersebut adalah ....
A. persegi
B. jajargenjang
C. layang-layang
D. belah ketupat
20. Keliling sebuah jam dinding berbentuk segitiga sama sisi dengan panjang sisi 24 cm adalah ....
A. 48 cm
B. 72 cm
C. 288 cm
D. 576 cm
21. Luas sepetak tanah yang berbentuk jajargenjang dengan alas 36 cm dan tinggi 20 cm adalah ....
A. 56 cm persegi
B. 112 cm persegi
C. 360 cm persegi
D. 720 cm persegi
KUNCI JAWABAN
1. D Penjelasan: 34.950 + 27.125 = 62.075, lalu 62.075 - 12.325 = 49.750.
2. A Penjelasan: Kerjakan dari kiri: 6.604 : 26 = 254, lalu 254 x 38 = 9.652.
3. C Penjelasan: Kemasan = 8 x 18 = 144. Dibagi 24 teman = 6 kemasan.
4. A,C Penjelasan: Uang yang dibawa = 65.000 + 35.000 = 100.000. Dua lembar 50.000 dan selembar 100.000 sama dengan 100.000. Empat lembar 20.000 hanya 80.000.
5. B,S,B Penjelasan: Tujuh lembar 5.000 = 35.000 (benar). 20.000 + 10.000 = 30.000 (salah). 3 x 10.000 + 5.000 = 35.000 (benar).
6. A,B Penjelasan: 24 habis dibagi 3 dan 8. 24 tidak habis dibagi 9.
7. C Penjelasan: 48 = 2 pangkat 4 x 3, 64 = 2 pangkat 6, 72 = 2 pangkat 3 x 3 pangkat 2. FPB = 2 pangkat 3 = 8.
8. D Penjelasan: Bertemu lagi berarti KPK dari 60 dan 90, yaitu 180 hari.
9. B Penjelasan: 7/9 dikali 3 sama dengan 21/27.
10. B Penjelasan: 1/5 = 0,2, jadi 1 1/5 = 1,2.
11. A,C Penjelasan: 3 1/5 = 3,2 sedangkan kabel hitam 3,4. Jadi kabel hitam lebih panjang, dan kabel putih lebih pendek.
12. B Penjelasan: 4 3/5 = 4 9/15 dan 2/3 = 10/15. Karena 9 kurang dari 10, pinjam 1: 3 24/15 - 10/15 = 3 14/15.
13. A Penjelasan: 12/32 : 6 = 12/32 x 1/6 = 12/192 = 1/16.
14. A Penjelasan: 2,5 x 1/3 = 5/6. Lalu 5/6 : 5/4 = 5/6 x 4/5 = 2/3.
15. C Penjelasan: Total belanja = 2 1/2 + 1 3/4 = 4 1/4 kg. Dikurangi telur pecah 1/4 kg = 4 kg.
16. A Penjelasan: 1/2 kuintal = 50 kg dan 20.000 g = 20 kg. Total = 50 + 30 + 20 = 100 kg = 1 kuintal.
17. B Penjelasan: Air awal 128 liter ditambah 80 liter = 208 liter. Tersisa 106 liter, jadi terpakai 208 - 106 = 102 liter.
18. B Penjelasan: Waktu 08.00 sampai 10.12 = 2 jam 12 menit = 2,2 jam. Jarak = 75 x 2,2 = 165 km.
19. C Penjelasan: Layang-layang memiliki dua pasang sisi sama panjang dan sepasang sudut sama besar.
20. B Penjelasan: Segitiga sama sisi punya tiga sisi sama panjang. Keliling = 3 x 24 = 72 cm.
21. D Penjelasan: Luas jajargenjang = alas x tinggi = 36 x 20 = 720 cm persegi.`,`1. Bentuk pecahan dari 0,6 yang paling sederhana adalah ....
A. 1/6
B. 3/5
C. 6/5
D. 3/10
2. Nilai 3/4 dari 48 adalah ....
A. 12
B. 24
C. 36
D. 40
[PGK] 3. Pecahan berikut yang nilainya lebih besar dari 1/2 adalah ....
A. 3/5
B. 2/5
C. 5/8
4. Sebuah segitiga memiliki alas 12 cm dan tinggi 9 cm. Tentukan benar atau salah.
S1. Luas segitiga tersebut adalah 54 cm persegi.
S2. Luas segitiga tersebut adalah 108 cm persegi.
S3. Luas segitiga tersebut setengah dari luas persegi panjang berukuran 12 cm x 9 cm.
5. Sepeda Rani melaju dengan kecepatan 15 km/jam selama 2 jam 30 menit. Jarak yang ditempuh adalah ....
A. 30 km
B. 35 km
C. 37,5 km
D. 45 km
6. Volume balok dengan panjang 15 cm, lebar 10 cm, dan tinggi 8 cm adalah ....
A. 1.020 cm kubik
B. 1.200 cm kubik
C. 1.500 cm kubik
D. 2.000 cm kubik
7. Nilai ulangan matematika delapan siswa: 70, 80, 80, 90, 80, 70, 100, 90. Nilai yang paling banyak muncul adalah ....
A. 70
B. 80
C. 90
D. 100
[PGK] 8. Berat yang sama dengan 2,5 kg adalah ....
A. 2.500 gram
B. 25 hg
C. 250 gram
9. Pak Dani menabung Rp2.500,00 setiap hari selama 3 minggu. Jumlah tabungan Pak Dani adalah ....
A. Rp52.500,00
B. Rp50.000,00
C. Rp57.500,00
D. Rp75.000,00
KUNCI JAWABAN
1. B Penjelasan: 0,6 = 6/10 = 3/5.
2. C Penjelasan: 48 : 4 = 12, lalu 12 x 3 = 36.
3. A,C Penjelasan: 3/5 = 0,6 dan 5/8 = 0,625, keduanya lebih dari 0,5. 2/5 = 0,4 kurang dari 0,5.
4. B,S,B Penjelasan: Luas = 1/2 x 12 x 9 = 54 cm persegi (benar). 108 adalah luas persegi panjang 12 x 9 (salah). Karena itu luas segitiga setengah dari luas persegi panjang (benar).
5. C Penjelasan: 2 jam 30 menit = 2,5 jam. Jarak = 15 x 2,5 = 37,5 km.
6. B Penjelasan: Volume = 15 x 10 x 8 = 1.200 cm kubik.
7. B Penjelasan: Nilai 80 muncul 3 kali, 70 dan 90 masing-masing 2 kali, 100 satu kali.
8. A,B Penjelasan: 2,5 kg = 2.500 gram = 25 hg. 250 gram hanya sepersepuluhnya.
9. A Penjelasan: 3 minggu = 21 hari. Tabungan = 21 x 2.500 = Rp52.500,00.`]}],'indo':[{n:'Paket Soal 1',p:[`1. Bacalah paragraf berikut.
(1) Vina membawa map yang berisi beberapa dokumen. (2) Ia hendak mengurus surat rujukan untuk ibunya berobat. (3) Cuaca di luar sangat menyengat. (4) Payung kecil yang ia gunakan tidak mampu menahan teriknya matahari. (5) Namun, demi kesehatan ibunya, Vina tetap melangkah dengan penuh semangat.
Makna denotatif kata map pada paragraf tersebut adalah ....
A. benda untuk menyimpan dokumen
B. alat yang menunjukkan lokasi suatu tempat
C. tas untuk pergi berbelanja
D. amplop besar yang digunakan dokter
2. Berdasarkan paragraf pada soal nomor 1, makna denotatif yang menunjukkan fenomena panas terdapat pada kalimat ....
A. (1)
B. (2)
C. (4)
D. (5)
3. Kalimat yang menunjukkan karakter Vina pada paragraf soal nomor 1 adalah ....
A. Vina membawa map yang berisi beberapa dokumen.
B. Ia hendak mengurus surat rujukan untuk ibunya berobat.
C. Payung kecil yang ia gunakan tidak mampu menahan teriknya matahari.
D. Demi kesehatan ibunya, Vina tetap melangkah dengan penuh semangat.
4. Bacalah teks berikut.
Diskusi berakhir tanpa keputusan yang tepat. Rudi mengusulkan tanaman hias sebagai objek pengamatan. Rasman menginginkan tanaman padi di sawah. Raihan dan Rama setuju dengan Rudi karena rumah mereka jauh dari sawah. Akhirnya, Rasman meninggalkan diskusi dengan muka merah padam. Ketiga temannya hanya menghela napas. Mereka sepakat membahas objek pengamatan di lain waktu.
Makna konotatif muka merah padam adalah ....
A. bingung
B. bahagia
C. marah
D. sedih
[PGK] 5. Berdasarkan teks soal nomor 4, peserta diskusi yang bersikap bijaksana adalah ....
A. Rama
B. Raihan
C. Rasman
6. Berdasarkan teks soal nomor 4, tentukan benar atau salah tiap pernyataan.
S1. Rasman tidak setuju dengan pendapat Rudi.
S2. Rumah Raihan dan Rama jauh dari sawah.
S3. Objek pengamatan mereka adalah tanaman hias.
7. Beberapa kejadian pada teks soal nomor 4 memuat nilai untuk kehidupan sehari-hari. Tentukan benar atau salah.
S1. Semua peserta diskusi harus bertanggung jawab atas keputusan yang dihasilkan.
S2. Sikap egois membuat diskusi tidak berjalan lancar.
S3. Peserta diskusi boleh bersikap keras kepala saat berdiskusi.
8. Ratna dirawat di rumah sakit selama lima hari. Wajah Ratna bagai bulan kesiangan dan terlihat layu. Makna konotatif pada kalimat tersebut terdapat pada kata ....
A. layu
B. wajah
C. dirawat
D. rumah sakit
9. Makna konotatif ungkapan bulan kesiangan pada soal nomor 8 adalah ....
A. orang yang berwajah pucat
B. orang yang suka bangun siang
C. orang yang bercahaya pada siang hari
D. orang yang terlambat menyadari sesuatu
10. Bacalah paragraf berikut.
Bu Desi memiliki dua anak gadis dengan perilaku yang sangat berbeda. Anak pertama, Intan, bertutur kata dan berperilaku menunjukkan bahwa ia berhati lembut. Adiknya sangat bertolak belakang. Suatu hari Intan berkata kepada adiknya, 'Bagus sekali tingkah lakumu, lihatlah Ibu menangis setiap hari karena tingkahmu.'
Makna konotatif kata hati pada paragraf tersebut adalah ....
A. bagian tubuh yang membersihkan darah dari zat berbahaya
B. perilaku manusia yang sopan dan santun
C. kebiasaan yang menjadi cerminan perilaku sehari-hari
D. sifat atau perasaan batin yang dimiliki manusia
11. Maksud kalimat yang diucapkan Intan kepada adiknya (soal nomor 10) adalah ....
A. kebahagiaan seorang ibu kepada anaknya
B. anak yang pandai membalas jasa orang tuanya
C. kakak yang bangga terhadap perilaku adiknya
D. anak yang tidak tahu membalas jasa orang tuanya
12. Berdasarkan paragraf soal nomor 10, tentukan benar atau salah.
S1. Bu Desi memiliki dua anak perempuan.
S2. Adiknya Intan memiliki hati yang lembut.
S3. Ibunya sering menangis melihat tingkah laku adiknya Intan.
13. Penduduk bagai beras ditampi saat mendengar letusan pertama gunung tersebut. Informasi yang paling tepat berdasarkan kalimat itu adalah ....
A. Penduduk segera berlari ke gunung setelah mendengar letusan.
B. Penduduk berlarian tak tentu arah setelah mendengar letusan.
C. Penduduk berusaha tenang saat mendengar letusan.
D. Penduduk meninggalkan gunung setelah meletus.
14. Nayla dikenal sebagai anak yang rendah hati dan ringan tangan. Informasi yang paling tepat berdasarkan kalimat tersebut adalah ....
A. Nayla memiliki hati yang kecil.
B. Nayla bertubuh pendek.
C. Nayla memiliki tangan yang ringan.
D. Nayla anak yang baik hati dan suka menolong.
15. Bima adalah anak emas bagi kedua orang tuanya. Makna ungkapan anak emas adalah anak yang ....
A. sangat berharga
B. terbuat dari emas
C. memiliki banyak emas
D. memakai perhiasan emas
16. Bacalah paragraf berikut.
Pagi hari, Rina sudah bangun. Ia dan teman-temannya akan berlibur bersama dan sepakat membawa bekal. Rina membawa roti bakar, Veny membawa jeruk, Kiki membawa minuman, dan Reza membawa semangka. Mereka bersepeda ke danau yang tidak jauh dari rumah, menggelar tikar, makan bersama sambil menikmati danau, lalu pulang saat sore.
Tempat tujuan berlibur Rina dan teman-temannya adalah ....
A. laut
B. pantai
C. danau
D. gunung
17. Berdasarkan teks soal nomor 16, tentukan benar atau salah.
S1. Tiga orang teman akan pergi ke taman untuk makan bersama.
S2. Rina dan tiga temannya pulang ke rumah pada sore hari.
S3. Rina dan teman-temannya naik sepeda ke danau.
[PGK] 18. Teman Rina yang membawa buah adalah ....
A. Kiki
B. Reza
C. Veny
[PGK] 19. Bacalah paragraf berikut. Tomat murah dan mudah didapat. Tomat mengandung vitamin A, vitamin C, dan likopen untuk menjaga kesehatan mata dan kulit, serta kalium yang mampu mengendalikan tekanan darah. Paragraf tersebut menjelaskan tentang ....
A. kandungan nutrisi tomat
B. cara mendapatkan tomat
C. manfaat tomat bagi kesehatan
[PGK] 20. Zat likopen pada tomat (soal nomor 19) dapat menjaga kesehatan ....
A. mata
B. kulit
C. pencernaan
KUNCI JAWABAN
1. A Penjelasan: Map di sini berarti benda untuk menyimpan dokumen, itu makna sebenarnya.
2. C Penjelasan: Kalimat (4) menyebut teriknya matahari, yaitu panas dalam arti sebenarnya.
3. D Penjelasan: Tetap melangkah dengan penuh semangat menunjukkan Vina gigih dan bersemangat.
4. C Penjelasan: Muka merah padam adalah ungkapan kiasan untuk marah.
5. A,B Penjelasan: Rama dan Raihan bersedia mendiskusikan objek di lain waktu. Rasman justru meninggalkan diskusi dengan marah.
6. B,B,S Penjelasan: Rasman ingin padi sementara Rudi memilih tanaman hias (benar). Rumah Raihan dan Rama jauh dari sawah (benar). Objek belum disepakati, jadi pernyataan ketiga salah.
7. B,B,S Penjelasan: Tanggung jawab bersama dan sikap egois yang menghambat diskusi sesuai kehidupan nyata. Keras kepala tidak baik dalam diskusi.
8. A Penjelasan: Layu dipakai kiasan untuk wajah yang lesu, bukan tumbuhan yang layu.
9. A Penjelasan: Bulan kesiangan berarti wajah yang pucat.
10. D Penjelasan: Hati yang lembut berarti sifat batin yang halus, bukan organ tubuh.
11. D Penjelasan: Kalimat itu sindiran: adik membuat ibu menangis, jadi ia tidak tahu membalas jasa orang tua.
12. B,S,B Penjelasan: Bu Desi punya dua anak gadis (benar). Yang berhati lembut adalah Intan, bukan adiknya (salah). Ibu menangis karena tingkah adik (benar).
13. B Penjelasan: Beras ditampi bergerak berhamburan, artinya penduduk berlarian tak tentu arah.
14. D Penjelasan: Rendah hati berarti tidak sombong, ringan tangan berarti suka menolong.
15. A Penjelasan: Anak emas adalah anak yang sangat disayangi dan berharga.
16. C Penjelasan: Teks menyebut mereka bersepeda ke danau dan makan di pinggir danau.
17. S,B,B Penjelasan: Tujuannya danau, bukan taman (salah). Mereka pulang saat sore (benar). Mereka bersepeda ke danau (benar).
18. B,C Penjelasan: Reza membawa semangka dan Veny membawa jeruk, keduanya buah. Roti bakar dan minuman bukan buah.
19. A,C Penjelasan: Paragraf membahas kandungan nutrisi dan manfaatnya bagi kesehatan, bukan cara mendapatkannya.
20. A,B Penjelasan: Likopen menjaga kesehatan mata dan kulit, bukan pencernaan.`,`1. Andi dan Andina adalah anak kembar. Meskipun begitu, keduanya bagai minyak dengan air. Ungkapan bagai minyak dengan air bermakna ....
A. tidak dapat hidup rukun
B. sifatnya dingin seperti air
C. memiliki sifat yang berbeda
D. berperangai licin seperti minyak
2. Bacalah paragraf berikut.
Pagi-pagi, aku terbangun. Ibu meminta ditemani pergi ke rumah Nenek. Kami berangkat naik kereta. Di dalam kereta, penyakit jantung Ibu kambuh dan aku panik. Beruntung ada penumpang seorang dokter yang menolong Ibu. Akhirnya kami sampai di rumah Nenek dengan selamat. Aku bertekad rajin belajar. Aku ingin menjadi dokter agar dapat menolong orang lain.
Latar tempat kambuhnya penyakit jantung Ibu adalah ....
A. rumah Ibu
B. dalam kereta
C. kampung Nenek
D. ruang praktik dokter
3. Alasan tokoh Aku ingin menjadi dokter (paragraf soal nomor 2) adalah ....
A. membawa nama harum sekolahnya
B. membanggakan ibu dan neneknya
C. keinginan menolong orang lain
D. menepati janji ibunya
4. Berdasarkan paragraf soal nomor 2, tentukan benar atau salah.
S1. Tokoh Aku bercita-cita ingin menjadi dokter.
S2. Tokoh Aku dan ibunya tidak jadi pergi ke rumah nenek.
S3. Tokoh Ibu mengalami serangan jantung di kereta.
5. Aku mempunyai seekor kucing yang lucu. Meskipun sering usil, aku tetap menyayanginya. Rambutnya halus, tebal, dan bersih, berwarna belang putih dan abu-abu. Matanya bulat dan bening. Ia senang sekali bermain bola. Informasi yang tepat berdasarkan teks tersebut adalah ....
A. rambut kucing sering rontok berjatuhan
B. warna rambut kucing cokelat keemasan
C. kucing tersebut lucu dan suka bermain bola
D. kucing tersebut kecil dan pendiam
6. Bacalah teks berikut.
Penebangan hutan secara liar harus segera dihentikan. Berdasarkan data BPBD, tanah longsor merupakan bencana terbesar kedua setelah angin kencang. Tebing yang pohonnya sudah ditebangi tidak dapat menahan air ketika diguyur hujan sehingga tanah lebih mudah longsor.
Teks tersebut memberikan informasi tentang ....
A. rincian pekerjaan BPBD
B. cara menanam pohon di tebing
C. penyebab terjadinya tanah longsor
D. bencana alam terbesar tahun ini
7. Membaca merupakan kegiatan yang sangat penting bagi pelajar. Dengan membaca, siswa memiliki pengetahuan yang luas, mengetahui perkembangan zaman, dan mengetahui berita yang terjadi di daerah lain. Teks tersebut memberikan informasi tentang ....
A. perkembangan zaman
B. pentingnya membaca
C. pengetahuan baru
D. berita luar negeri
[PGK] 8. Bacalah paragraf berikut.
Sampah dapat menjadi sumber penyakit, tetapi bisa mendatangkan manfaat jika dikelola dengan baik. Sampah harus dipilah menjadi organik dan anorganik. Sampah organik dapat diolah menjadi pupuk organik. Sampah anorganik dapat didaur ulang atau dijadikan karya seni bernilai ekonomi. Untuk itu, marilah kita kelola sampah secara bijak. Pilahlah sampah dari rumahmu!
Kalimat yang menunjukkan bahwa teks tersebut persuasif adalah ....
A. Sampah organik dapat diolah menjadi pupuk organik.
B. Untuk itu, marilah kita kelola sampah secara bijak.
C. Pilahlah sampah dari rumahmu!
9. Alasan sampah harus dipilah terlebih dahulu sebelum dibuang (paragraf soal nomor 8) adalah ....
A. semua jenis sampah sama saja
B. membuat tempat sampah cepat penuh
C. meringankan pekerjaan petugas kebersihan
D. memudahkan proses daur ulang dan pengelolaan
10. Sampah anorganik dapat dimanfaatkan menjadi ....
A. pakan ternak
B. pupuk tanaman
C. kerajinan tangan
D. pembuatan biogas
11. Berdasarkan paragraf soal nomor 8, tentukan benar atau salah.
S1. Sampah dibedakan menjadi tiga jenis.
S2. Sampah organik dapat menjadi bahan pembuatan kompos.
S3. Sebelum dibuang, sampah harus dipilah.
12. Susu memiliki berbagai kandungan baik bagi tubuh. Kalsium dan protein pada susu bermanfaat untuk kesehatan tulang dan gigi. Susu Indosu merupakan susu terbaik untuk menjaga kesehatan tubuh. Ayo, sehatkan tubuh dan keluarga dengan minum Susu Indosu! Teks tersebut memberikan informasi tentang ....
A. perintah membeli susu
B. pemberian nutrisi terbaik
C. kandungan pada minuman
D. ajakan minum susu Indosu
13. Musim hujan identik dengan penyakit demam berdarah dengue (DBD) yang disebabkan gigitan nyamuk Aedes aegypti. Nyamuk itu senang bersarang pada barang bekas atau genangan air jernih. Gerakan Pemberantasan Sarang Nyamuk (PSN) dapat menghambat perkembangbiakan nyamuk. Teks tersebut memberikan informasi tentang ....
A. nyamuk penyebab DBD dan cara menghambat perkembangbiakannya
B. proses perkembangbiakan nyamuk Aedes aegypti
C. nama nyamuk penyebab demam berdarah
D. penyebab penyakit demam berdarah
14. Bacalah paragraf berikut.
Maryam hendak mengungkapkan isi hatinya melalui puisi. Ia memulainya dengan menentukan tema dan judul. Selanjutnya ia memilih diksi yang tepat dan menentukan rima. Setelah itu ia menyusunnya menjadi larik dan bait. Ia juga menggunakan gaya bahasa agar puisinya bermakna sesuai keinginannya.
Langkah pertama untuk membuat puisi adalah ....
A. memilih diksi
B. menyusun rima
C. menentukan tema
D. memilih gaya bahasa
15. Karya yang ingin dibuat Maryam (paragraf soal nomor 14) untuk mengungkapkan isi hatinya adalah ....
A. cerpen
B. pidato
C. novel
D. puisi
16. Berdasarkan paragraf soal nomor 14, tentukan benar atau salah.
S1. Maryam menentukan gaya bahasa pada tahap terakhir.
S2. Cerpen merupakan karya yang hendak dibuat Maryam.
S3. Sebelum menentukan gaya bahasa, Maryam menyusun puisinya dalam bentuk larik dan bait.
17. Sebuah puisi berjudul Di Mana Desaku menceritakan seseorang yang menyusuri jalan beraspal tanpa alas kaki. Ia tidak lagi menemukan pematang sawah hijau, melainkan gedung-gedung bertingkat. Ia rindu desanya yang dahulu hijau dan sejuk, lalu mengajak semua orang untuk menghijaukan lagi desa mereka. Nilai yang terkandung pada puisi tersebut adalah ....
A. semangat untuk menghijaukan desanya
B. kesedihan karena tidak memiliki alas kaki
C. kebingungan mencari sawahnya yang dahulu
D. kebanggaan terhadap gedung-gedung bertingkat
KUNCI JAWABAN
1. C Penjelasan: Bagai minyak dengan air berarti dua hal yang tidak bisa menyatu, yaitu sifat Andi dan Andina berbeda.
2. B Penjelasan: Teks menyebut penyakit jantung Ibu kambuh di dalam kereta.
3. C Penjelasan: Tokoh Aku ingin menjadi dokter agar dapat menolong orang lain.
4. B,S,B Penjelasan: Aku bercita-cita jadi dokter (benar). Mereka sampai di rumah Nenek dengan selamat, jadi tetap pergi (salah). Ibu mengalami serangan jantung di kereta (benar).
5. C Penjelasan: Teks menyebut kucing yang lucu dan senang bermain bola. Warna belang putih dan abu-abu, bukan cokelat.
6. C Penjelasan: Teks menjelaskan penebangan liar membuat tebing tidak menahan air, sehingga menjadi penyebab tanah longsor.
7. B Penjelasan: Seluruh teks membahas manfaat dan pentingnya membaca.
8. B,C Penjelasan: Ciri teks persuasif adalah ajakan atau perintah, yaitu marilah kita kelola dan pilahlah sampah. Kalimat pertama hanya informasi.
9. D Penjelasan: Sampah organik dan anorganik diolah berbeda, jadi memilah memudahkan daur ulang dan pengelolaan.
10. C Penjelasan: Sampah anorganik dapat didaur ulang atau dijadikan kerajinan tangan bernilai ekonomi.
11. S,B,B Penjelasan: Sampah dibedakan menjadi dua jenis, organik dan anorganik (salah). Organik jadi kompos atau pupuk (benar). Sampah dipilah sebelum dibuang (benar).
12. D Penjelasan: Kalimat Ayo, sehatkan tubuh dengan minum Susu Indosu adalah ajakan, jadi teks bersifat mengajak.
13. A Penjelasan: Teks membahas nyamuk penyebab DBD sekaligus gerakan PSN untuk menghambatnya.
14. C Penjelasan: Langkah pertama Maryam adalah menentukan tema dan judul.
15. D Penjelasan: Maryam mengungkapkan isi hatinya melalui puisi.
16. B,S,B Penjelasan: Gaya bahasa disebut paling akhir (benar). Karyanya puisi, bukan cerpen (salah). Larik dan bait disusun sebelum gaya bahasa (benar).
17. A Penjelasan: Puisi mengajak semua orang menghijaukan lagi desa, jadi nilainya semangat menghijaukan desa.`,`1. Sebuah pantun terdiri atas empat baris. Baris pertama dan kedua berbicara tentang berjalan di tanah datar dan memetik sukun. Baris ketiga dan keempat berisi nasihat: jika ingin menjadi pintar, belajarlah dengan tekun. Kata akhir tiap baris berturut-turut adalah datar, sukun, pintar, tekun. Pantun tersebut mengajarkan manusia untuk ....
A. sering berjalan-jalan
B. rajin menanam sukun
C. rajin belajar dengan sungguh-sungguh
D. sering berkunjung ke tanah datar
2. Rima pada pantun soal nomor 1 adalah ....
A. a-a-a-a
B. a-b-a-b
C. a-a-b-b
D. a-b-b-a
[PGK] 3. Pernyataan yang sesuai dengan pantun pada soal nomor 1 adalah ....
A. Rima pantun tersebut adalah a-a-b-b.
B. Pantun tersebut memiliki empat baris.
C. Pantun tersebut terdiri atas satu bait.
4. Bacalah hasil pengamatan berikut.
Komodo termasuk reptilia berkaki empat dan bentuknya menyerupai kadal. Panjang tubuhnya dapat mencapai lebih dari tiga meter. Kepalanya memanjang dan matanya kecil. Mulutnya memanjang dengan gigi tajam. Kulitnya bersisik dan tampak keras, berwarna cokelat kehitaman. Cakarnya tajam dan menukik mirip cakar burung elang. Komodo adalah satu di antara satwa nasional yang dilindungi.
Pernyataan yang sesuai dengan hasil pengamatan tersebut adalah ....
A. Komodo merupakan reptilia yang mirip kadal, bertubuh besar, bersisik, memiliki cakar tajam, dan termasuk hewan yang dilindungi.
B. Komodo merupakan hewan liar seperti buaya yang buas dan memiliki mata yang tajam.
C. Komodo merupakan hewan yang dilindungi karena keindahan dan kilauan kulitnya.
D. Komodo merupakan hewan yang dikenal dengan ketebalan kulitnya.
5. Berdasarkan isinya, paragraf pada soal nomor 4 termasuk jenis paragraf ....
A. naratif
B. deskriptif
C. persuasif
D. argumentatif
[PGK] 6. Sebuah puisi berjudul Sahabat bercerita tentang sahabat yang menemani saat senang dan susah, memahami tanpa celaan, lalu pergi ke negeri seberang untuk menimba ilmu menggapai impian. Penyair mendoakan sahabatnya selalu sukses. Nilai yang terkandung pada puisi tersebut adalah ....
A. sosial
B. agama
C. pendidikan
7. Bacalah teks berikut.
Hari Minggu, anak-anak bermain bola di lapangan. Seorang pengendara sepeda jatuh karena tidak melihat ada lubang di jalan dan kakinya luka, barang belanjaannya berserakan. Danang segera berlari menolong dan merapikan barang-barangnya, sementara Deva dan Danu mencari tempat berteduh di bawah pohon. Mereka menunggu kedua temannya yang sedang menolong pengendara sepeda itu.
Contoh peristiwa dalam kehidupan sehari-hari yang sesuai dengan teks tersebut, tentukan benar atau salah.
S1. Tika membantu Nenek menyeberangi jalan.
S2. Saat hari libur, Ibu memasak makanan kesukaan Dani.
S3. Kaki Dika luka karena ia terjatuh ketika bermain bola.
[PGK] 8. Bacalah paragraf berikut.
Pada sore hari, Pantai Ancol terlihat sangat eksotis. Air laut yang biru dihiasi cahaya matahari yang mulai memerah. Burung camar beterbangan di atas air. Ombak kecil menggapai lembut pasir putih. Matahari tampak malu-malu menuju peraduannya. Di ujung dermaga terlihat nelayan siap melaut, dan perahu-perahu bergerak bagai titik warna-warni menghias laut biru.
Makna konotasi kata eksotis pada paragraf tersebut adalah ....
A. memesona
B. menakutkan
C. menakjubkan
[PGK] 9. Teks pada soal nomor 8 menggambarkan tentang ....
A. keindahan Pantai Ancol pada sore hari
B. pergerakan ombak di lautan
C. aktivitas nelayan di laut
10. Bacalah teks berikut.
Satelit pertama Indonesia yang diluncurkan pada tahun 1976 adalah Satelit Palapa. Satelit ini menghubungkan komunikasi berbagai daerah di Indonesia dari Sabang sampai Merauke. Nama Palapa diambil dari Sumpah Palapa yang diucapkan Gajah Mada, patih Kerajaan Majapahit, sebagai simbol persatuan dan tekad untuk memajukan Indonesia. Hadirnya Satelit Palapa membuat komunikasi lebih lancar, membantu masyarakat menikmati siaran televisi bersama, dan memperlancar akses informasi serta pendidikan di seluruh pelosok negeri.
Bagan yang sesuai untuk menggambarkan informasi pada teks tersebut adalah ....
A. Satelit Pertama Indonesia, lalu Alasan Dipilihnya Nama Palapa, lalu Manfaat Satelit Palapa
B. Manfaat Satelit Palapa, lalu Simbol Persatuan dalam Satelit Palapa, lalu Fungsi Satelit Palapa
C. Satelit Pertama Indonesia, lalu Manfaat Satelit Palapa, lalu Alasan Dipilihnya Satelit Palapa
D. Tahun Peluncuran Satelit Palapa, lalu Sejarah Gajah Mada, lalu Manfaat Satelit Palapa
11. Sebuah ilustrasi buah: kulitnya tebal dan berduri tajam, ada yang berwarna kuning atau hijau, baunya khas dan menyengat. Buahnya putih kekuningan, di dalamnya ada biji, rasanya manis dengan tekstur lembut, dan harumnya sangat kuat. Buah yang dimaksud adalah ....
A. rambutan
B. nangka
C. durian
D. kiwi
KUNCI JAWABAN
1. C Penjelasan: Dua baris terakhir berisi nasihat: jika ingin pintar, belajarlah dengan tekun.
2. B Penjelasan: Kata akhir datar, sukun, pintar, tekun berima ar, un, ar, un, jadi a-b-a-b.
3. B,C Penjelasan: Pantun punya empat baris dan satu bait. Rimanya a-b-a-b, bukan a-a-b-b.
4. A Penjelasan: Pilihan A memuat ciri-ciri yang disebut teks. Pilihan lain tidak sesuai atau tidak ada di teks.
5. B Penjelasan: Paragraf menggambarkan ciri fisik komodo secara terperinci, jadi deskriptif.
6. A,C Penjelasan: Persahabatan yang saling mendukung adalah nilai sosial, dan menimba ilmu adalah nilai pendidikan. Doa tidak berisi ajaran agama tertentu.
7. B,S,B Penjelasan: Menolong orang yang kesusahan sesuai isi teks (benar). Ibu memasak tidak ada hubungannya (salah). Orang terjatuh dan terluka juga terjadi dalam teks (benar).
8. A,C Penjelasan: Eksotis berarti memesona dan menakjubkan, bukan menakutkan.
9. A,C Penjelasan: Teks menggambarkan keindahan pantai sore hari dan nelayan yang siap melaut. Ombak hanya bagian pemandangan, bukan fokus teks.
10. A Penjelasan: Urutan teks: satelit pertama, alasan nama Palapa, lalu manfaatnya.
11. C Penjelasan: Kulit berduri, bau khas yang menyengat, dan daging manis lembut adalah ciri durian.`]},{n:'Paket Soal 2',p:[`1. Bacalah paragraf berikut.
Tumbuhan mampu membuat makanan sendiri melalui proses fotosintesis. Pada proses itu, tumbuhan memerlukan cahaya matahari, air, dan karbon dioksida. Hasilnya berupa oksigen dan glukosa yang bermanfaat bagi manusia dan hewan. Tumbuhan terdiri dari akar, batang, daun, bunga, dan buah dengan fungsi berbeda. Akar berfungsi menyerap air dan unsur hara dari dalam tanah, sedangkan daun menjadi tempat berlangsungnya fotosintesis.
Bagian yang berfungsi menyerap air dan unsur hara dari tanah adalah ....
A. batang
B. bunga
C. buah
D. akar
2. Proses tumbuhan membuat makanan sendiri dengan bantuan cahaya matahari (paragraf soal nomor 1) disebut ....
A. fotosintesis
B. penyerbukan
C. penyerapan air
D. pertumbuhan bunga
3. Berdasarkan paragraf soal nomor 1, karakter tumbuhan yang tampak adalah ....
A. kuat menghasilkan air
B. lemah terhadap perubahan cuaca
C. dapat menghasilkan cahaya sendiri
D. dapat membuat makanannya sendiri
[PGK] 4. Hasil dari fotosintesis tumbuhan (paragraf soal nomor 1) adalah ....
A. karbon dioksida
B. oksigen
C. glukosa
[PGK] 5. Ani tetap ramah dan tidak sombong meskipun sekarang sudah menjadi juara lomba tingkat nasional. Peribahasa yang sesuai dengan sikap Ani adalah ....
A. seperti padi, makin berisi makin merunduk
B. air tenang menghanyutkan
C. bagai air di daun talas
6. Bacalah pantun berikut.
Kapal selam melintas samudra, sambil melihat ikan pari. Rajinlah bekerja selagi muda, agar bahagia kemudian hari.
Pantun tersebut mengajarkan manusia untuk ....
A. menyelam ke samudra
B. sering melihat ikan pari
C. rajin bekerja agar hidup bahagia
D. berjalan-jalan menaiki kapal selam
7. Kata akhir tiap baris pada pantun soal nomor 6 adalah samudra, pari, muda, hari. Rima pantun tersebut adalah ....
A. a-a-a-a
B. a-b-a-b
C. a-a-b-b
D. a-b-b-a
8. Kalimat (1) pada teks berikut: Setiap hari berliana membawa bekal makanan ke sekolah. Perbaikan penulisan kalimat tersebut yang tepat adalah ....
A. Setiap hari Berliana membawa bekal makanan kesekolah.
B. Setiap hari. Berliana membawa bekal makanan ke sekolah.
C. Setiap hari, Berliana membawa bekal makanan ke sekolah.
D. Setiap hari, berliana membawa bekal makanan ke sekolah.
9. Kalimat (2): berliana membawa nasi ayam goreng dan sayur. Perbaikan penulisan kalimat tersebut yang tepat adalah ....
A. Berliana membawa nasi, ayam goreng dan sayur.
B. Berliana membawa nasi, ayam goreng, dan sayur.
C. Berliana membawa Nasi Ayam Goreng, dan sayur.
D. Berliana membawa nasi ayam goreng dan sayur.
10. Bacalah paragraf berikut.
Hewan mamalia terbesar yang hidup di darat adalah gajah. Gajah hidup berkelompok dan dikenal sebagai hewan yang kuat dan cerdas dengan naluri dan daya ingat yang kuat. Ciri khasnya adalah belalai, telinga lebar, dan gading. Belalai berfungsi untuk mengambil makanan dan air. Gajah sering berpindah tempat secara berkelompok untuk mencari makanan dan air.
Makna denotatif kata belalai pada paragraf tersebut adalah ....
A. alat yang membantu penglihatan gajah
B. bagian tubuh gajah yang terletak di belakang
C. alat gajah untuk menyimpan makanan
D. bagian tubuh gajah untuk mengambil makanan dan air
11. Fenomena kehidupan yang terjadi pada gajah berdasarkan paragraf soal nomor 10 adalah ....
A. suka hidup di air
B. hewan yang kecil
C. pemangsa hewan lain
D. suka hidup berkelompok
12. Karakter yang dimiliki gajah berdasarkan paragraf soal nomor 10 adalah ....
A. malas
B. lemah
C. cerdas
D. penakut
KUNCI JAWABAN
1. D Penjelasan: Teks menyebut akar berfungsi menyerap air dan unsur hara dari tanah.
2. A Penjelasan: Membuat makanan sendiri dengan bantuan cahaya matahari adalah fotosintesis.
3. D Penjelasan: Tumbuhan membuat makanannya sendiri melalui fotosintesis.
4. B,C Penjelasan: Hasil fotosintesis adalah oksigen dan glukosa. Karbon dioksida justru bahan yang diperlukan.
5. A Penjelasan: Seperti padi, makin berisi makin merunduk berarti makin pandai makin rendah hati. Air tenang menghanyutkan berarti tampak tenang tetapi berbahaya, dan air di daun talas berarti tidak tetap pendirian.
6. C Penjelasan: Dua baris isi mengajak rajin bekerja selagi muda agar bahagia kemudian hari.
7. B Penjelasan: Samudra dan muda berima a, pari dan hari berima i, jadi a-b-a-b.
8. C Penjelasan: Nama orang diawali huruf kapital, ada koma setelah keterangan waktu, dan ke sekolah ditulis terpisah.
9. B Penjelasan: Rincian ditulis dengan koma, termasuk sebelum kata dan, dan huruf awal kalimat kapital.
10. D Penjelasan: Teks menyebut belalai berfungsi mengambil makanan dan air.
11. D Penjelasan: Teks menyebut gajah hidup berkelompok.
12. C Penjelasan: Teks menyebut gajah dikenal kuat dan cerdas, jadi karakter yang ada pada pilihan adalah cerdas.`,`1. Bacalah laporan hasil pengamatan berikut.
Bunga raflesia memiliki bau yang sangat menyengat seperti bangkai sehingga mengundang lalat untuk hinggap. Bunga ini unik karena tidak memiliki daun, akar, dan batang. Ia tumbuh dengan bergantung pada tumbuhan inangnya. Diameter bunganya dapat mencapai 70-110 cm dengan berat 11 kg. Raflesia memiliki lima daun mahkota yang berjejer mengelilingi bagian tengah.
Berdasarkan teks tersebut, tentukan benar atau salah.
S1. Bunga raflesia adalah bunga yang unik dan memiliki bau menyengat seperti bangkai.
S2. Bunga raflesia merupakan bunga yang indah dengan kelopak yang menyebarkan keharuman.
S3. Bunga raflesia memiliki mahkota yang berjejer mengelilingi bagian tengah.
2. Jumlah daun mahkota pada bunga raflesia (soal nomor 1) adalah ....
A. dua
B. tiga
C. lima
D. empat
[PGK] 3. Bagian yang tidak dimiliki bunga raflesia (soal nomor 1) adalah ....
A. mahkota
B. daun
C. akar
4. Pada tanggal 17 Agustus tahun 1945, Ir. Sukarno dan Drs. Mohammad Hatta memproklamasikan kemerdekaan Indonesia di Jalan Pegangsaan Timur Nomor 56 Jakarta. Proklamasi dibacakan pada pukul 10 pagi. Perbaikan kalimat efektif berdasarkan paragraf tersebut adalah ....
A. Pada 17 Agustus 1945, Ir. Sukarno dan Drs. Mohammad Hatta memproklamasikan kemerdekaan Indonesia di Jalan Pegangsaan Timur 56, Jakarta, pukul 10 pagi.
B. Ir. Sukarno memproklamasikan kemerdekaan negara Republik Indonesia bersama dengan Drs. Mohammad Hatta pada pukul 10 pagi tanggal 17 Agustus tahun 1945.
C. Pada tanggal 17 bulan Agustus tahun 1945, Ir. Sukarno bersama dengan Drs. Mohammad Hatta telah melakukan proklamasi kemerdekaan untuk negara Republik Indonesia di Jakarta.
D. Ir. Sukarno dan Drs. Mohammad Hatta memproklamasikan kemerdekaan Indonesia pada tanggal 17 Agustus tahun 1945 yang bertempat di Jalan Pegangsaan Timur Nomor 56 Jakarta sekitar pukul sepuluh pagi.
5. Bacalah teks cerita berikut.
Pagi hari, Hasan menggantikan ayahnya yang sedang sakit untuk berjualan es. Ia telah lelah berkeliling dari desa ke desa, tetapi belum ada yang membeli. Tiba-tiba, dompet seorang yang jatuh di dekat gerobaknya. Hasan segera mengembalikannya, ternyata orang itu seorang dokter yang kemudian memeriksa kesehatan ayah Hasan.
Latar waktu pada kutipan cerita tersebut adalah ....
A. malam hari
B. siang hari
C. sore hari
D. pagi hari
6. Bacalah paragraf berikut.
Lidah buaya merupakan tanaman multiguna dan cukup mudah ditanam. Pertama, siapkan pot dan media tanam. Kedua, tanamlah bibit lidah buaya ke dalam pot. Ketiga, letakkan tanaman di tempat terpapar sinar matahari secara langsung. Terakhir, siramilah lidah buaya sekali dalam 2-3 minggu.
Berdasarkan teks tersebut, waktu penyiraman tanaman lidah buaya adalah ....
A. seminggu dua kali
B. tiga kali seminggu
C. dua atau tiga kali seminggu
D. satu kali dalam dua atau tiga minggu
7. Sebuah puisi berjudul Ibu mengenang seorang ibu yang kini tidak lagi membangunkan, menyiapkan makan pagi, dan menemani tidur sang anak. Penyairnya merasa kehilangan dan kini hanya bisa memanjatkan doa semoga ibunya bahagia di sisi-Nya. Nilai yang terkandung pada puisi tersebut adalah ....
A. penyesalan karena ibunya tidak menyiapkan makan pagi
B. kesedihan karena tidak mendapatkan kasih sayang
C. kerinduan pada ibu yang diwujudkan dalam doa
D. kemarahan akibat tidak ditemani tidurnya
8. Anak itu memiliki kemauan yang keras, pantang menyerah sebelum berhasil. Makna denotatif kata kemauan pada kalimat tersebut adalah ....
A. keinginan untuk mencapai sesuatu
B. kejujuran hati dalam berbicara
C. kehendak terhadap orang lain
D. keyakinan yang berlebihan
[PGK] 9. Bacalah paragraf berikut.
Setiap anak Indonesia perlu menjadi hebat. Kuncinya adalah membiasakan diri dengan berperilaku positif sejak dini: mulailah belajar mengatur waktu, rancanglah kegiatan yang akan dilakukan tiap hari, dan patuhilah rencana itu. Hargailah pendapat orang lain dan kerja samalah dengan teman tanpa pilih kasih. Anak yang hebat bukan hanya pintar, tetapi juga mampu mengatur diri dan menghargai orang lain.
Pesan yang disampaikan penulis melalui teks tersebut adalah ....
A. Menghargai orang lain.
B. Mampu mengatur diri sendiri.
C. Bekerja sama dengan teman yang disukai.
[PGK] 10. Maksud dari kalimat Jadilah anak Indonesia yang mampu mengatur diri sendiri pada soal nomor 9 adalah ....
A. menjadi anak hebat dan harus pintar
B. mampu merancang kegiatan untuk diri sendiri
C. melaksanakan rancangan kegiatan yang telah dibuat
[PGK] 11. Bacalah teks berikut.
Dampak Bermain Gim. Berdasarkan data tahun 2024, sebesar 39,71% anak menggunakan telepon seluler dan internet. Mereka menggunakan telepon untuk bermain gim hingga lupa waktu. Terlalu sering bermain gim dapat menurunkan prestasi akademik, mengganggu kemampuan interaksi sosial, bahkan memicu perilaku agresif. Oleh karena itu, batasilah penggunaan gawai pada anak-anak. Arahkan anak untuk memanfaatkan waktunya dengan aktivitas yang lebih bermanfaat, seperti bermain bola, berlatih tari, atau berkebun bersama teman.
Informasi yang tepat berdasarkan isi teks tersebut adalah ....
A. Cara membatasi penggunaan gawai.
B. Bahaya bermain gawai terlalu sering.
C. Harga gawai terbaru.
[PGK] 12. Jenis paragraf dalam teks soal nomor 11 adalah ....
A. argumentasi
B. deskripsi
C. persuasi
13. Berdasarkan teks soal nomor 11, tentukan benar atau salah.
S1. Sebesar 39,71% anak menggunakan telepon seluler dan internet.
S2. Terlalu sering bermain gim dapat memperbaiki kesehatan mental.
S3. Terlalu sering bermain gim dapat menurunkan prestasi akademik.
14. Bacalah kalimat berikut. Kabar yang didengar tentang anaknya membuat dunianya gelap seketika. Informasi tersirat yang paling tepat adalah ....
A. Kabar tentang anaknya didengar saat malam hari.
B. Ia menunggu kabar hari gelap untuk mendengar kabar anaknya.
C. Saat mendengar kabar tentang anaknya, hari sudah gelap.
D. Kesedihan yang luar biasa saat mendengar kabar anaknya.
15. Ketekunannya dalam belajar membuat Raka menjadi bintang kelas. Makna konotatif kata bintang kelas adalah ....
A. kelas yang dihiasi bintang
B. bintang warna-warni di kelas
C. anak yang terpandai di kelas
D. pandai membuat hiasan bintang
KUNCI JAWABAN
1. B,S,B Penjelasan: Raflesia unik dan berbau seperti bangkai (benar). Raflesia berbau menyengat, bukan menyebarkan keharuman (salah). Mahkota berjejer mengelilingi bagian tengah (benar).
2. C Penjelasan: Teks menyebut bunga raflesia memiliki lima daun mahkota.
3. B,C Penjelasan: Raflesia tidak memiliki daun, akar, dan batang. Mahkota dimilikinya.
4. A Penjelasan: Kalimat efektif hemat kata dan tetap lengkap. Pilihan B, C, dan D boros kata.
5. D Penjelasan: Cerita dibuka dengan Pagi hari, jadi latar waktunya pagi hari.
6. D Penjelasan: Teks menyebut penyiraman dilakukan sekali dalam 2 sampai 3 minggu.
7. C Penjelasan: Puisi mengungkapkan rindu pada ibu yang diwujudkan dengan doa.
8. A Penjelasan: Kemauan berarti keinginan untuk mencapai sesuatu.
9. A,B Penjelasan: Teks mengajak menghargai orang lain dan mampu mengatur diri. Teks menyebut bekerja sama tanpa pilih kasih, bukan hanya dengan teman yang disukai.
10. B,C Penjelasan: Mengatur diri sendiri berarti merancang kegiatan dan melaksanakannya. Menjadi hebat dan pintar adalah isi lain dari teks.
11. A,B Penjelasan: Teks membahas bahaya terlalu sering bermain gim dan cara membatasi penggunaan gawai. Harga gawai tidak dibahas.
12. A,C Penjelasan: Bagian awal berisi data dan alasan (argumentasi). Bagian akhir berisi ajakan membatasi gawai (persuasi). Teks tidak menggambarkan benda secara rinci.
13. B,S,B Penjelasan: Data 39,71% ada di teks (benar). Teks menyebut gim menurunkan prestasi akademik, bukan memperbaiki kesehatan mental (salah). Pernyataan ketiga sesuai teks (benar).
14. D Penjelasan: Dunianya gelap seketika adalah kiasan untuk kesedihan yang sangat dalam.
15. C Penjelasan: Bintang kelas adalah kiasan untuk anak yang terpandai di kelas.`,`1. Bacalah paragraf berikut.
Acara perpisahan kelas 6 SD di sekolah berlangsung meriah dan penuh kehangatan. Tawa tamu pecah saat mendengar pidato perwakilan siswa. Hal tersebut membuat suasana menjadi makin hangat. Mereka saling mengunggulkan meskipun terkadang seperti minyak dan air saat berdiskusi. Kebersamaan mereka menjadi kenangan indah yang tidak terlupakan.
Makna konotatif dari kata pecah pada paragraf tersebut adalah ....
A. putus
B. patah
C. hancur
D. meriah
2. Makna konotatif dari ungkapan seperti minyak dan air (paragraf soal nomor 1) adalah ....
A. tidak dapat bersatu
B. memiliki minyak yang banyak
C. air dan minyak yang selalu bersatu
D. air yang dapat menyejukkan seluruh ruangan kelas
3. Bacalah laporan percobaan berikut.
Judul: Laporan percobaan menanam bawang. Bahan: bawang merah, media tanam, dan kompos. Alat: kantong plastik hitam dan pisau. Cara 1: bawang merah ditanam langsung tanpa dipotong ujungnya. Cara 2: bawang merah dipotong ujungnya dengan pisau, ditanam, lalu disiram secukupnya. Hasil: hari kedelapan, pada cara 1 belum terlihat tunas, sedangkan pada cara 2 tunas muncul sekitar 3 cm.
Cara menanam bawang merah agar cepat tumbuh adalah ....
A. siram tanaman bawang di bibitnya
B. bawang ditanam di kebun yang luas
C. bibit bawang ditanam langsung di pot
D. bawang ditanam setelah dipotong ujungnya
4. Berdasarkan laporan soal nomor 3, tentukan benar atau salah.
S1. Bibit bawang lebih cepat tumbuh dengan cara yang kedua.
S2. Bahan yang diperlukan dalam percobaan adalah bawang merah, media tanam, dan kompos.
S3. Setelah ditanam, bibit bawang tidak perlu disiram.
5. Sebuah pantun menyebutkan malam hari pergi berlayar dan habis gelap terbitlah terang pada dua baris pertama. Dua baris terakhirnya berbunyi bahwa utang emas bisa dibayar, tetapi utang budi selalu dikenang. Pantun tersebut mengajarkan kepada manusia untuk ....
A. melarang berutang kepada siapa pun
B. pergi berlayar pada malam hari
C. mengingat kebaikan orang lain
D. tetap bekerja di malam hari
6. Bacalah paragraf berikut.
Kelompok Raka mendapat tugas mengerjakan projek pemanfaatan barang bekas. Mereka berbagi tugas untuk mengumpulkan barang yang tidak terpakai di rumah. Ega membawa botol air mineral dan belum membawa barang bekas lain. Fany membawa kertas-kertas bekas. Lala tidak membawa barang bekas sama sekali karena ia lupa kalau kelompoknya akan membuat ecobrick hari ini.
Berdasarkan teks tersebut, tentukan benar atau salah.
S1. Lala dan Ega tidak membawa satu pun barang bekas.
S2. Kelompok Raka akan mengerjakan projek pembuatan ekoenzim.
S3. Fany membawa kertas-kertas bekas.
7. Alasan Lala tidak membawa barang bekas sama sekali (paragraf soal nomor 6) adalah ....
A. Lala tidak ingat kalau kelompoknya akan membuat ecobrick hari ini
B. Lala tidak menemukan barang bekas di rumahnya
C. Ibu Lala biasa mengurus Lala sedang keluar kota
D. Lala sengaja tidak membawa barang bekas
[PGK] 8. Bacalah paragraf berikut.
Air matanya menganak sungai, ia sungguh merasa bahagia. Awalnya, ia merasa seperti punggung merindukan bulan. Ia berpikir ini tidak mungkin dapat menjadi kenyataan.
Peribahasa dan ungkapan yang tepat terdapat pada kalimat ....
A. Air matanya menganak sungai.
B. Seperti punggung merindukan bulan.
C. Ia berpikir ini tidak mungkin dapat menjadi kenyataan.
[PGK] 9. Besok, kami akan mengikuti lomba fhotografi di taman kota. Semua peserta diharuskan membawa camera dan kartu identitas diri. Pak Dedi memberi informasi lengkap mengenai aturan lomba dan fasilitas yang disediakan.
Kata-kata yang tidak baku pada paragraf tersebut ditunjukkan pada kata ....
A. fhotografi
B. camera
C. fasilitas
10. Bacalah paragraf berikut.
Negara Indonesia merupakan negara yang kaya akan budaya. Setiap daerah memiliki bahasa khas daerah: Jawa, Sunda, Batak, Minangkabau, Bugis, dan Madura. Bahasa daerah berkembang seiring zaman, penutur bahasa daerah makin berkurang. Oleh karena itu, ayo, kita lestarikan bahasa daerah. Pelajarilah bahasa daerah sendiri, hargailah bahasa daerah.
Informasi yang disampaikan melalui teks tersebut adalah ....
A. keragaman bahasa daerah
B. bahasa daerah yang masih lestari
C. ajakan untuk melestarikan bahasa daerah
D. ajakan menjadi penutur bahasa daerah lain
11. Kereta merupakan transportasi yang paling digemari saat liburan panjang tahun ini. Kereta menawarkan keamanan dan kenyamanan, memiliki jadwal keberangkatan yang tepat waktu, dan jalur sendiri sehingga perjalanan tidak terganggu transportasi lain. Pemerintah juga memberikan potongan harga bagi pengguna jasa kereta.
Informasi yang disampaikan melalui teks tersebut adalah ....
A. jalur yang dilewati kereta jarak jauh
B. jadwal keberangkatan kereta jarak jauh
C. potongan harga bagi pengguna jasa kereta
D. keunggulan kereta dibandingkan transportasi lain
12. Bacalah cerita berikut.
Tora anak yang baik. Ia sering menolong temannya. Suatu hari Tora menolong temannya yang jatuh dari sepeda dan kemudian ia sakit. Teman-temannya pun segera menjenguk Tora di rumahnya. Tora sangat senang.
Nilai yang terkandung pada cerita tersebut adalah ....
A. anak yang baik disukai banyak teman
B. sakit karena sering menolong teman
C. banyak teman merugikan
D. sakit agar dijenguk teman
13. Reporter melaporkan bahwa arus mudik pada jalur Jakarta-Merak telah mengular sepanjang satu kilometer. Makna konotatif dari kata bercetak tebal mengular adalah ....
A. berjalan cepat karena ada ular
B. bergerak lebih cepat karena dikejar ular
C. ular yang menyebabkan kemacetan total
D. berderet panjang dan berkelok seperti ular
[PGK] 14. Bacalah paragraf berikut.
Rama gembira sekali dapat berkunjung ke rumah saudaranya. Ia bersama keluarga pergi ke Yogyakarta menggunakan kereta Panoramic yang dirancang khusus untuk menikmati pemandangan. Sebagian besar sisi gerbongnya terbuat dari kaca. Dinda, adik Rama, kagum dan berteriak senang saat kereta melewati sawah yang luas. Banyak burung putih beterbangan di sawah seperti bersahabat dengan para petani.
Pengalaman menyenangkan selama perjalanan yang dirasakan Dinda adalah ....
A. kereta yang dilapisi sebagai besar terbuat dari kaca
B. pemandangan rumah-rumah yang luas
C. melihat burung putih beterbangan di sawah seperti bersahabat dengan petani
KUNCI JAWABAN
1. D Penjelasan: Tawa pecah artinya suasana menjadi meriah, bukan benda yang pecah.
2. A Penjelasan: Seperti minyak dan air berarti dua hal yang tidak dapat bersatu atau selalu berbeda pendapat.
3. D Penjelasan: Cara 2, yaitu dipotong ujungnya, menumbuhkan tunas lebih cepat.
4. B,B,S Penjelasan: Cara kedua lebih cepat tumbuh (benar). Bahan sesuai laporan (benar). Tanaman tetap disiram secukupnya (salah).
5. C Penjelasan: Baris isi pantun menyebut utang budi selalu dikenang, artinya ingatlah kebaikan orang lain.
6. S,S,B Penjelasan: Ega sudah membawa botol air mineral, jadi pernyataan pertama salah. Projeknya ecobrick, bukan ekoenzim (salah). Fany membawa kertas bekas (benar).
7. A Penjelasan: Teks menyebut Lala lupa kalau kelompoknya akan membuat ecobrick hari ini.
8. A,B Penjelasan: Air matanya menganak sungai adalah ungkapan, dan seperti punggung merindukan bulan adalah peribahasa. Kalimat ketiga bukan keduanya.
9. A,B Penjelasan: Bentuk bakunya adalah fotografi dan kamera. Fasilitas sudah baku.
10. C Penjelasan: Kalimat ayo kita lestarikan, pelajarilah, dan hargailah bahasa daerah adalah ajakan melestarikan bahasa daerah.
11. D Penjelasan: Teks menjelaskan keamanan, kenyamanan, jadwal tepat waktu, dan jalur sendiri sebagai keunggulan kereta.
12. A Penjelasan: Tora menolong teman lalu dijenguk teman-temannya. Nilainya, anak baik disukai banyak teman.
13. D Penjelasan: Mengular dipakai kiasan untuk antrean panjang yang berkelok seperti ular.
14. A,C Penjelasan: Dinda senang dengan gerbong berkaca dan melihat burung putih di sawah. Pemandangan rumah-rumah tidak disebut sebagai hal yang membuatnya senang.`,`1. Bacalah paragraf berikut.
Rama gembira sekali dapat berkunjung ke rumah saudaranya. Ia bersama keluarga pergi ke Yogyakarta menggunakan kereta Panoramic yang dirancang khusus untuk menikmati pemandangan. Sebagian besar sisi gerbongnya terbuat dari kaca. Dinda, adik Rama, kagum dan berteriak senang saat kereta melewati sawah yang luas.
Berdasarkan teks tersebut, tentukan benar atau salah.
S1. Adik Rama bernama Dina.
S2. Rama dan keluarganya pergi ke Yogyakarta menggunakan kereta Panoramic.
S3. Sebagian besar sisi gerbong kereta Panoramic adalah kaca.
[PGK] 2. Bacalah paragraf berikut.
Sore hari setelah hujan, terlihat di kaki langit lengkungan berwarna-warni yang indah, yaitu pelangi. Pelangi biasanya terjadi setelah turun hujan. Pada waktu hujan, cahaya matahari melintasi tetesan air hujan. Cahaya dibelokkan ke medium lain dengan bantuan cahaya lain sehingga menghasilkan warna yang terpisah. Setiap warna yang muncul merupakan hasil pembelokan cahaya matahari. Pelangi tidak akan muncul di malam hari karena tidak ada cahaya matahari.
Kalimat yang menunjukkan bahwa teks tersebut termasuk teks eksplanasi adalah ....
A. Pelangi biasanya terjadi setelah hujan.
B. Pada waktu hujan, cahaya matahari melintasi tetesan air hujan.
C. Pembiasan cahaya ke medium lain menghasilkan berbagai warna pelangi.
3. Bacalah laporan hasil pengamatan berikut.
Bekantan merupakan jenis primata yang berhidung panjang. Bulunya berwarna hitam kemerahan. Bekantan jantan lebih besar daripada bekantan betina. Berat badan bekantan jantan mencapai 24 kg dan tinggi mencapai 50 cm, sedangkan bekantan betina berukuran 60 cm dengan berat 12 kg. Perut bekantan buncit. Mereka memakan buah, biji-bijian, dan aneka daun. Mereka hidup di atas pohon secara berkelompok dengan jumlah 10-30 ekor. Bekantan pandai berenang dan menyelam. Hewan ini banyak dijumpai di hutan-hutan Kalimantan.
Pernyataan yang tepat dengan hasil pengamatan tersebut adalah ....
A. Bekantan adalah hewan yang hidup di air.
B. Bekantan adalah jenis primata berekor panjang.
C. Bekantan jantan lebih tinggi daripada bekantan betina.
D. Bekantan suka hidup berkelompok dengan jumlah 10-30 ekor.
4. Berdasarkan paragraf soal nomor 3, hasil pengamatan fisik menunjukkan bahwa bekantan ....
A. berhidung panjang dan berbulu hitam kemerahan
B. suka hidup berkelompok
C. pandai berenang di air
D. suka menyelam
5. Berdasarkan paragraf soal nomor 3, hasil pengamatan perilaku menunjukkan bahwa bekantan ....
A. perutnya buncit
B. tingginya 60 cm
C. suka hidup berkelompok
D. beratnya mencapai 24 kg
[PGK] 6. Bacalah paragraf berikut.
Dokter kecil harus sigap dalam pelayanan kesehatan di sekolah. Untuk penanganan luka, yang pertama dilakukan adalah membersihkan tangan menggunakan sabun. Selanjutnya, bersihkan luka dengan air mengalir agar kotoran dan bakteri hilang. Setelah itu, berikan antiseptik atau salep luka. Terakhir, tutuplah luka agar tidak terkena debu.
Langkah pertama dan terakhir dalam merawat luka adalah ....
A. bersihkan luka dengan air mengalir
B. tutuplah luka agar tidak terkena debu
C. bersihkan tangan menggunakan sabun sebelum menyentuh luka
7. Bacalah paragraf berikut.
Kita membutuhkan makanan sehat tiap hari. Makan bukan sekadar untuk kenyang. Tubuh kita membutuhkan nutrisi untuk tumbuh dan berkembang. Nutrisi berfungsi membangun sel dan jaringan.
Paragraf tersebut memberikan informasi tentang ....
A. makanan yang mengenyangkan
B. pentingnya makanan sehat
C. nutrisi dalam makanan
D. cara membangun sel
KUNCI JAWABAN
1. S,B,B Penjelasan: Adik Rama bernama Dinda, bukan Dina (salah). Mereka naik kereta Panoramic (benar). Sebagian besar sisi gerbong terbuat dari kaca (benar).
2. A,B,C Penjelasan: Teks eksplanasi menjelaskan proses terjadinya sesuatu. Ketiga kalimat itu menjelaskan sebab dan proses terjadinya pelangi.
3. D Penjelasan: Teks menyebut bekantan hidup berkelompok 10 sampai 30 ekor. Bekantan hidup di pohon, berhidung panjang, dan jantan tidak lebih tinggi menurut data.
4. A Penjelasan: Ciri fisik adalah bentuk tubuh dan warna bulu: berhidung panjang dan berbulu hitam kemerahan.
5. C Penjelasan: Perilaku adalah kebiasaan hidup. Hidup berkelompok adalah perilaku, sedangkan perut, tinggi, dan berat adalah ciri fisik.
6. B,C Penjelasan: Langkah pertama membersihkan tangan dengan sabun, langkah terakhir menutup luka agar tidak terkena debu.
7. B Penjelasan: Paragraf menjelaskan bahwa makanan sehat penting karena tubuh membutuhkan nutrisi.`]},{n:'Paket Soal 3',p:[`1. Bacalah paragraf berikut.
Atlet Indonesia kembali mengukir prestasi membanggakan di SEA Games. Tim bulu tangkis putra berhasil meraih medali emas setelah mengalahkan tim kuat Thailand. Para atlet menunjukkan semangat juang yang tinggi meskipun sempat tertinggal di babak pertama. Pertandingan disaksikan langsung oleh Menteri Pemuda dan Olahraga serta para pendukung yang memenuhi stadion. Kemenangan ini disambut meriah oleh masyarakat.
Objek utama yang menjadi topik pada teks tersebut adalah ....
A. pendukung tim kuat Thailand
B. semangat juang para pendukung
C. kemenangan tim bulu tangkis Indonesia
D. kedatangan Menteri Pemuda dan Olahraga
2. Fenomena yang terjadi pada teks soal nomor 1 adalah ....
A. ketegangan saat pertandingan berlangsung
B. ketertiban para pendukung saat mengantre masuk ke stadion
C. keindahan stadion yang digunakan untuk bertanding
D. kemeriahan stadion menyambut kemenangan tim Indonesia
3. Karakter yang ditunjukkan atlet Indonesia pada teks soal nomor 1 adalah ....
A. gigih
B. tenang
C. pasrah
D. emosional
[PGK] 4. Semua usaha telah dilakukan, tetapi semua sia-sia. Inilah yang menyebabkan ia akhirnya angkat tangan. Makna ungkapan angkat tangan pada teks tersebut adalah ....
A. memanggil
B. menyerah
C. pasrah
[PGK] 5. Aku ingin membeli buku cerita itu. Ternyata Rena membawakannya untukku, bagai pucuk dicinta ulam tiba. Buah tangan yang kumimpikan. Peribahasa atau ungkapan pada paragraf tersebut terdapat pada kalimat ....
A. Pucuk dicinta ulam tiba.
B. Buah tangan yang kumimpikan.
C. Aku ingin membeli buku cerita itu.
6. Sebuah pantun berbunyi: baris pertama dan kedua tentang jual cincin membeli duku dan duku manis dibelah dua. Baris ketiga dan keempat menyebut rajin-rajinlah membaca buku, karena buku itu jendela jiwa. Pantun tersebut mengajarkan manusia untuk ....
A. rajin membeli cincin
B. sering membeli duku
C. sering membelah duku menjadi dua
D. rajin membaca buku karena buku adalah jendela jiwa
[PGK] 7. Pernyataan yang sesuai dengan pantun pada soal nomor 6 adalah ....
A. Pantun tersebut terdiri atas satu bait.
B. Rima pantun tersebut adalah a-a-a-a.
C. Pantun tersebut memiliki empat baris.
[PGK] 8. Nilai-nilai pada pantun soal nomor 6 terdapat pada baris yang berbunyi ....
A. Rajin-rajinlah membaca buku.
B. Jual cincin membeli duku.
C. Buku itu jendela jiwa.
9. Bacalah cerita berikut.
Sejak kecil, Bima bercita-cita menjadi dokter. Ia selalu rajin belajar dan tidak pernah mengabaikan tugas sekolah. Keluarganya hidup sederhana. Ayahnya seorang penjahit dan ibunya penjual nasi uduk. Dengan tekad dan usaha yang sungguh-sungguh, akhirnya Bima berhasil belajar di Fakultas Kedokteran melalui jalur beasiswa. Sekarang ia sedang menempuh pendidikan kedokteran dengan penuh semangat dan rasa syukur.
Objek utama yang menjadi topik pada cerita tersebut adalah ....
A. ibunya penjual nasi uduk
B. ayahnya seorang penjahit
C. tekad dan usaha Bima untuk mencapai cita-citanya
D. Bima belajar di Fakultas Kedokteran
10. Fenomena yang terjadi pada keluarga Bima berdasarkan cerita soal nomor 9 adalah ....
A. keluarga sederhana yang gigih berusaha
B. penderitaan seorang ibu yang berjuang untuk suaminya
C. pengorbanan seorang anak untuk kebahagiaan orang lain
D. kesibukan seorang ayah menghidupi keluarganya
11. Karakter tokoh Bima berdasarkan cerita soal nomor 9 adalah ....
A. pemalu
B. pemarah
C. pendendam
D. pantang menyerah
12. Sebuah puisi menceritakan angin yang menghampiri dengan sepoi-sepoi dan berbisik di telinga kiri, seakan membawa rasa hampa. Penyair lalu menyadari bahwa ia harus belajar. Pendapat yang sesuai dengan majas pada puisi tersebut adalah ....
A. Majas puisi tersebut sangat menarik karena mengumpamakan benda sebagai manusia.
B. Majas puisi tersebut menggambarkan sesuatu dengan berlebih-lebihan.
C. Majas puisi tersebut unik karena membandingkan dua hal yang berbeda.
D. Majas puisi tersebut mengesankan karena membandingkan dua hal dengan konjungsi.
[PGK] 13. Setelah membaca puisi soal nomor 12, beberapa siswa berpendapat. Kiki: ada perasaan kosong yang muncul, tetapi akhirnya penulis sadar pentingnya belajar. Dina: puisi tersebut marah dan kesal karena angin berbisik kepada dirinya. Ratih: pilihan kata puisi sederhana, tetapi mampu membuat pembaca merasakan kesadaran. Siswa yang memberikan pendapat yang tepat adalah ....
A. Kiki
B. Ratih
C. Dina
14. Bacalah laporan kegiatan berikut.
Siswa kelas 6 SD Cimawar 02 melaksanakan bakti sosial ke Desa Cimelati pada hari Jumat, 11 April 2025. Mereka mengumpulkan bantuan dari warga sekolah berupa 90 kg beras, 10 dus mi instan, 23 botol minyak goreng 1 liter, dan uang tunai Rp4.500.000,00. Bantuan diberikan kepada 23 kepala keluarga yang terdampak banjir dan disaksikan oleh lurah setempat dan guru kelasnya.
Bantuan dalam laporan tersebut diperoleh dari ....
A. hanya guru kelas
B. hanya siswa kelas 6
C. warga sekolah
D. lurah setempat
15. Bagian laporan kegiatan: (A) Laporan penyaluran bantuan bencana banjir, (B) Desa Cimelati, (C) Jumat, 11 April 2025. Ketiganya berturut-turut perlu dilengkapi dengan ....
A. Waktu, Lokasi, Judul
B. Judul, Waktu, Lokasi
C. Judul, Lokasi, Waktu
D. Lokasi, Judul, Waktu
16. Perbaikan penulisan bilangan Rp 4.500.000,00 yang tepat adalah ....
A. Rp 4.500.000
B. Rp4.500000,00
C. Rp4.500.000,00
D. Rp.4.500.000,00
KUNCI JAWABAN
1. C Penjelasan: Seluruh teks membahas kemenangan tim bulu tangkis Indonesia di SEA Games.
2. D Penjelasan: Kemenangan disambut meriah oleh masyarakat, yaitu kemeriahan stadion menyambut kemenangan.
3. A Penjelasan: Semangat juang tinggi meski tertinggal menunjukkan gigih.
4. B,C Penjelasan: Angkat tangan berarti menyerah atau pasrah, bukan memanggil.
5. A,B Penjelasan: Pucuk dicinta ulam tiba adalah peribahasa dan buah tangan adalah ungkapan. Kalimat ketiga biasa saja.
6. D Penjelasan: Dua baris terakhir pantun berisi pesan rajin membaca buku.
7. A,C Penjelasan: Pantun terdiri atas satu bait empat baris. Rimanya a-b-a-b (duku-buku, dua-jiwa), bukan a-a-a-a.
8. A,C Penjelasan: Rajin-rajinlah membaca buku adalah nasihat, dan buku itu jendela jiwa adalah nilai tentang manfaat membaca. Jual cincin hanya sampiran.
9. C Penjelasan: Cerita berfokus pada tekad dan usaha Bima mencapai cita-citanya.
10. A Penjelasan: Keluarga Bima sederhana tetapi gigih berusaha.
11. D Penjelasan: Bima tekun belajar dan tidak menyerah meski hidup sederhana.
12. A Penjelasan: Angin berbisik adalah personifikasi karena benda diberi sifat manusia.
13. A,B Penjelasan: Kiki dan Ratih tepat karena puisi diakhiri kesadaran harus belajar. Dina keliru karena puisi tidak berisi kemarahan.
14. C Penjelasan: Teks menyebut bantuan dikumpulkan dari warga sekolah.
15. C Penjelasan: Urutan bagian laporan: judul, lokasi, lalu waktu.
16. C Penjelasan: Penulisan uang yang benar adalah Rp4.500.000,00 tanpa spasi, dengan titik untuk ribuan dan koma untuk desimal.`]}]};
