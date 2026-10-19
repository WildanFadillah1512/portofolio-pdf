# Design Specification: Slide 08 — PT Sumber Alfaria Trijaya Tbk Executive Dossier

## 1. Overview & Context

Dalam portofolio digital berbasis web (HTML/CSS/JS) milik Wildan Fadillah, Bab 03 (Slide 07) merupakan pemisah seksi untuk **Pengalaman Kerja**. Saat ini, slide setelah Bab 03 langsung meloncat ke pembahasan teknis *SPARTA Building Toko*. 

Dokumen ini menetapkan spesifikasi desain untuk menyisipkan slide baru yaitu **Slide 08: PT Sumber Alfaria Trijaya Tbk**, yang berfungsi sebagai *Executive Dossier* korporat. Slide ini memperkenalkan posisi, departemen, divisi, periode, serta gerbang overview ke dua sistem besar yang direkayasa (SPARTA Building Toko dan SPARTA DC Development).

---

## 2. Struktur Konten & Informasi Slide 08

### 2.1 Masthead Header (`.dossier-masthead`)
- **Logo Perusahaan**: `assets/alfamart-logo.png`
- **Identitas Perusahaan**: `PT SUMBER ALFARIA TRIJAYA TBK`
- **Sub-identitas / Departemen & Divisi**: `DEPARTEMEN PROPERTY DEVELOPMENT • DIVISI BUILDING MAINTENANCE ENERGY SYSTEM (BMES)`
- **Role & Periode**: `Software Engineer Intern • Mei 2026 – November 2026 (7 Bulan)`
- **Index Tag**: `03 / PENGALAMAN KERJA • ALFAMART DOSSIER`

### 2.2 Kolom Kiri: Profil Eksekutif & Ringkasan Peran (~42% Lebar)
- **Kicker / Eyebrow**: `PENGALAMAN KERJA PROFESIONAL • REKAYASA PENGEMBANGAN SISTEM`
- **Judul Utama**: `PT Sumber Alfaria Trijaya Tbk`
- **Subtitle Peran**: `Software Engineer Intern — Property Development & BMES`
- **Aksen Garis**: `.red-rule`
- **Deskripsi Ringkasan**:
  > Berperan aktif dalam rekayasa perangkat lunak skala enterprise untuk digitalisasi alur pembangunan dan renovasi gerai ritel serta fasilitas logistik Distribution Center (DC) Alfamart di seluruh Indonesia. Bertanggung jawab atas integrasi backend API, arsitektur database relasional, otomasi alur persetujuan bertingkat, serta penegakan kepatuhan audit operasional.
- **Kartu Metrik Kunci (3 Key Highlights)**:
  1. **43+ Cabang Nasional**: Skala operasional sistem menjangkau seluruh jaringan cabang ritel Alfamart di Indonesia.
  2. **2 Ekosistem Sistem**: Arsitektur mandiri untuk SPARTA Building Toko dan SPARTA DC Development.
  3. **End-to-End Governance**: Dari inisiasi FPD, otomatisasi RAB, validasi SPK Anti-Backdate, hingga opname dan serah terima (BAST).

### 2.3 Kolom Kanan: Gateway Ekosistem Dua Sistem Utama (~58% Lebar)
Dua kartu berukuran proporsional yang memetakan platform perangkat lunak yang dibangun:

1. **Card A: SPARTA Building Toko**
   - **Tag**: `01 / RETAIL STORE LIFECYCLE ENGINE`
   - **Judul**: `Otomasi Pembangunan Toko & Rekayasa Supervisi Lapangan`
   - **Badge Stack**: `Express.js API`, `MySQL / PostgreSQL`, `Gantt Dynamic Engine`
   - **Fitur Utama**:
     - Otomasi Form Permintaan Desain (FPD) & formulasi RAB otomatis tersinkronisasi katalog material cabang.
     - Penjadwalan 30–45 hari dengan proteksi blokir SPK Backdate demi kepatuhan audit.
     - Alur Opname Mandiri oleh kontraktor & gerbang validasi Mandatory Gate Grand Opening (GO) sebelum BAST.
   - **Navigasi / Petunjuk**: Menautkan pembaca ke pembahasan teknis mendalam di Slide 09 & Slide 10.

2. **Card B: SPARTA DC Development**
   - **Tag**: `02 / DISTRIBUTION CENTER LOGISTICS`
   - **Judul**: `Infrastruktur Gudang DC, Pengadaan Tender > 1M & Migrasi Next.js`
   - **Badge Stack**: `Next.js App Router`, `Prisma ORM (22 Models)`, `Drive API`
   - **Fitur Utama**:
     - Digitalisasi formulasi Perubahan Fungsi Ruang (PFR) & kalkulasi estimasi Owner Estimate (OE/ES).
     - Tata kelola lelang tender bernilai miliaran rupiah dengan seleksi rekanan & Aanwijzing lapangan.
     - Otorisasi hierarki 7-tingkat (BM → GM → Specialist → Director) & integrasi rak arsip Google Drive bersarang.
   - **Navigasi / Petunjuk**: Menautkan pembaca ke pembahasan teknis mendalam di Slide 11 & Slide 12.

### 2.4 Footer Bar: Strategic Governance & Operational Impact
Menampilkan baris metrik dampak strategis:
- **Jangkauan**: `43+ Kantor Cabang Nasional`
- **Integritas**: `100% Kepatuhan Audit SPK & Gate GO`
- **Efisiensi**: `Digitalisasi Penuh RAB & Otorisasi Tender`
- **Arsitektur**: `Transisi Modern ke Next.js & Multi-Service`

---

## 3. Penyesuaian Penomoran Slide & Navigasi

Dengan disisipkannya Slide 08 baru, urutan slide dalam `#deck` berubah sebagai berikut:

| Nomor Slide | ID Elemen | Judul / Konten | Perubahan |
|---|---|---|---|
| Slide 01 | `#slide-1` | Cover Utama Portofolio | Tetap |
| Slide 02 | `#slide-2` | Daftar Isi / Agenda | Diperbarui anchor link |
| Slide 03 | `#slide-3` | Divider Bab 01: Profil | Tetap |
| Slide 04 | `#slide-4` | Detail Profil Wildan Fadillah | Tetap |
| Slide 05 | `#slide-5` | Divider Bab 02: Pendidikan | Tetap |
| Slide 06 | `#slide-6` | Detail Pendidikan & Organisasi | Tetap |
| Slide 07 | `#slide-7` | Divider Bab 03: Pengalaman Kerja | Tetap |
| **Slide 08** | **`#slide-8`** | **PT Sumber Alfaria Trijaya Tbk (Executive Dossier)** | **BARU** |
| Slide 09 | `#slide-9` | SPARTA Building — Fokus Pembahasan | Sebelumnya Slide 08 |
| Slide 10 | `#slide-10` | SPARTA Building — Fokus Assets | Sebelumnya Slide 09 |
| Slide 11 | `#slide-11` | SPARTA DC Development — Fokus Pembahasan | Sebelumnya Slide 10 |
| Slide 12 | `#slide-12` | SPARTA DC Development — Fokus Assets | Sebelumnya Slide 11 |

### Penyesuaian `app.js` & CSS:
- Selector switcher aset untuk Building (Slide 10) dan DC (Slide 12) di `app.js` bersifat dinamis (`.asset-selector-pills` per slide), sehingga otomatis mendukung pergeseran ID slide tanpa konflik.
- Tag indeks di header slide (`dossier-index`) disesuaikan agar rapi dan berurutan.

---

## 4. Desain Sistem & Token CSS

- **Latar Belakang**: `--paper: #f8f6f0`
- **Kartu & Elemen Kontainer**: `--paper-card: #f2eee6` dengan border `--line: #ded9cf`
- **Aksen Warna Utama**: `--red: #d71920` (merah khas Alfamart)
- **Tipografi**: Geist Sans dengan skala editorial proporsional
- **Animasi**: Micro-animation bertahap dengan `[data-step]` dan CSS transitions berdurasi 400ms.
