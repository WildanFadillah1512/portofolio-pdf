# SPARTA DC-Development: Slides 11 & 12 Redesign Specification

## Overview
This specification defines the complete editorial and technical transformation for **Slide 11** (Case Study / Pembahasan Rekayasa) and **Slide 12** (Dokumentasi Antarmuka Produksi / Assets Showcase). 

Following the proven asymmetric split design language established on Slide 09 & Slide 10, Slides 11 & 12 represent the **SPARTA DC-Development** ecosystem (73 Distribution Centers, Store-Hubs, and Warehouses across Indonesia) under PT Sumber Alfaria Trijaya Tbk.

- **Slide 11**: Equivalent to Slide 09 (Asymmetric Editorial Split: 5-Module Solution Timeline on left, 2x2 Key Metrics & Technical Innovations on right).
- **Slide 12**: Equivalent to Slide 10 (Asymmetric Editorial Split: 4 Module Feature Cards on left, 2x2 Production Screenshots Grid on right).
- **Color Accent**: SPARTA DC Industrial Orange (`#e65f2b`), harmonizing with the authentic orange UI theme of SPARTA DC's production application while maintaining seamless editorial pairing with the warm cream paper tone (`#f6f4ee`) and deep black technical panel (`#0b0c10`).

---

## 1. Design Tokens & Visual Hierarchy

| Token | Value | Role |
|---|---|---|
| `--dc-orange-primary` | `#e65f2b` | Primary accent for SPARTA DC headlines, metrics, badge borders, and card accents |
| `--dc-orange-deep` | `#c84e1b` | Hover state and deep contrast borders |
| `--dc-orange-soft` | `rgba(230, 95, 43, 0.1)` | Pill backgrounds, icon bubble fills, and subtle focus glows |
| `--dc-cream` | `#f6f4ee` | Warm editorial paper background for the left panels |
| `--dc-cream-card` | `#efebe2` | Module feature cards background on cream |
| `--dc-cream-card-hover` | `#eae4d7` | Hover fill for module cards |
| `--dc-dark` | `#0b0c10` | High-contrast technical black background for the right panels |
| `--dc-dark-surface` | `#14151a` | Dark screenshot card background |
| `--dc-ink-head` | `#111827` | Primary dark headings on cream |
| `--dc-ink-sub` | `#4b5563` / `#64748b` | Secondary descriptions and metadata on cream |
| `--dc-dark-text-head` | `#ffffff` | Primary text and headings on dark background |
| `--dc-dark-text-sub` | `#94a3b8` | Subtext, labels, and innovation descriptions on dark |
| `--dc-dark-grid-line` | `rgba(255, 255, 255, 0.12)` | Hairline cross borders for stats and grid cards |

---

## 2. Slide 11: Detail Kontribusi & Rekayasa SPARTA DC

### Layout Structure
- **Left Panel (50% Width, Warm Cream `#f6f4ee`):**
  - **Topline**:
    - Tag: `■ PENGALAMAN KERJA 01 / DETAIL KONTRIBUSI`
    - Meta: `SPARTA DC-DEVELOPMENT`
  - **Hero**:
    - Main Title: `SPARTA DC-DEVELOPMENT` (`font-size: 58px; font-weight: 900; color: #e65f2b; line-height: 1; letter-spacing: -0.035em;`)
    - Lead: `Website untuk mengelola seluruh tahapan proyek DC Alfamart, mulai dari perencanaan hingga serah terima agar proses kerja lebih rapi, transparan, dan mudah dipantau.`
  - **Section Heading**: `SOLUSI SISTEM (5 MODUL DC)`
  - **5-Stage Connected Vertical Timeline**:
    1. **Profil Teknis DC**: Katalog 73 fasilitas lengkap dengan kapasitas toko, KDB, daya listrik, genset, dan daya dukung lantai.
    2. **Mesin AHSP Baku**: Penomoran kode 7 segmen otomatis dengan perhitungan koefisien SNI dan harga komponen per cabang.
    3. **RAB/OE & Bukti Foto**: BoQ Sipil & ME dengan PPN 11% serta foto lapangan ber-watermark GPS (kamera HTML5).
    4. **Perubahan Fungsi Ruang (PFR)**: Otorisasi 7 tingkat berjenjang dengan penandatangan dinamis berbasis departemen pemohon.
    5. **Tender Kontraktor**: Prakualifikasi 3 golongan nilai proyek, aanwijzing, scoring vendor, hingga penetapan pemenang.
  - **Left Footer**:
    - `PT SUMBER ALFARIA TRIJAYA TBK • DC DEVELOPMENT (BMES)`

- **Right Panel (50% Width, Deep Black `#0b0c10`):**
  - **Topline**:
    - `■ METRIK UTAMA & DAMPAK`
  - **Angka Kunci (2x2 Grid with Hairline Cross Dividers & Orange Numbers):**
    - Stat 1: `73` &bull; `Fasilitas DC (Induk, Warehouse, Depo & Bulky)`
    - Stat 2: `22` &bull; `Tabel PostgreSQL (Foreign Key CASCADE)`
    - Stat 3: `39` &bull; `Endpoint REST API (Next.js App Router)`
    - Stat 4: `27` &bull; `Role Jabatan (RBAC Multi-Level per Cabang)`
  - **Fitur & Inovasi Teknis (2 Kolom):**
    - Kolom 1:
      - `• Approval State Machine`: Otorisasi 4 & 7 tingkat, proteksi privasi berkas REVISI, dan validasi wajib mutasi field.
      - `• Watermark GPS Tersemat`: Geolocation OpenStreetMap & stempel koordinat/waktu langsung pada canvas kamera.
    - Kolom 2:
      - `• Dokumen Resmi Otomatis`: Generator PDF Puppeteer + Nunjucks 9 kolom tanda tangan, diunggah asinkron ke Google Drive.
      - `• Keamanan & Isolasi Data`: RBAC 27 role dengan pembatasan wilayah cabang dan log audit aktivitas komprehensif.
  - **Teknologi Bar**:
    - Label: `TEKNOLOGI`
    - List: `Next.js 16 • React 19 • TypeScript • Tailwind CSS v4 • Prisma 5.22 • PostgreSQL 16 • Puppeteer • Google Drive API v3`
    - Crest: PostgreSQL technical SVG emblem.
  - **Right Footer**:
    - `WEBSITE PEMBANGUNAN & RENOVASI TOKO/DC`

---

## 3. Slide 12: Dokumentasi Antarmuka Produksi SPARTA DC

### Layout Structure
- **Left Panel (34% Width, Warm Cream `#f6f4ee`):**
  - **Topline**:
    - Tag: `■ VISUALISASI SISTEM`
    - Meta: `UI/UX`
  - **Hero**:
    - Eyebrow: `CONTOH BEBERAPA TAMPILAN YANG ADA PADA`
    - Main Title: `SPARTA DC-DEVELOPMENT` (`font-size: 46px; font-weight: 900; color: #111827; letter-spacing: -0.035em;`)
    - Accent Rule: Orange `#e65f2b`, width `44px`, height `3.5px`, border-radius `2px`.
    - Lead: `Gambaran beberapa menu utama untuk memantau jalannya sistem yang ada pada SPARTA DC-Development.`
  - **4 Module Feature Cards (`border-left: 4px solid #e65f2b; border-radius: 6px; background: #efebe2;`):**
    1. **01 Halaman Login Dc-Development (LOGIN)**: Gerbang masuk sistem berbasis kredensial cabang dan autentikasi multi-role.
    2. **02 PROFILE & SPESIFIKASI DC**: Daftar lengkap seluruh gudang (DC) beserta informasi kode cabang, jenis gudang, dan ukuran luas bangunannya.
    3. **03 PENYIMPANAN DOKUMEN DC**: Dashboard rekapitulasi progres berkas, agregat tipe lokasi (DC Induk, Warehouse, Depo, Bulky), dan status arsip.
    4. **04 MASTER KONTRAKTOR & KONSULTAN**: Daftar rekanan kontraktor dan konsultan lengkap dengan kategori perusahaan, kontak yang bisa dihubungi, serta dokumen izin resminya.
  - **Left Footer**:
    - `PT SUMBER ALFARIA TRIJAYA TBK` | `DC DEVELOPMENT`

- **Right Panel (66% Width, Deep Black `#0b0c10`):**
  - **Topline**:
    - Tag: `■ DOKUMENTASI ANTARMUKA PRODUKSI`
    - Meta: `4 CONTOH UI/UX`
  - **2x2 Screenshot Cards Grid (`gap: 16px`):**
    - **Card 1 (Kiri Atas)**:
      - Header: `01 Halaman Login Dc-Development` | Tag: `AUTHENTICATION`
      - Asset: `assets/Halaman Login.png`
    - **Card 2 (Kanan Atas)**:
      - Header: `02 PROFILE & SPESIFIKASI DC` | Tag: `73 FASILITAS`
      - Asset: `assets/Profile DC.png`
    - **Card 3 (Kiri Bawah)**:
      - Header: `03 PENYIMPANAN DOKUMEN DC` | Tag: `MONITORING ARSIP`
      - Asset: `assets/Penyimpanan Dokumen DC.png`
    - **Card 4 (Kanan Bawah)**:
      - Header: `04 MASTER KONTRAKTOR & KONSULTAN` | Tag: `MODUL PENGADAAN`
      - Asset: `assets/Master Kontraktor dan konsultan.png`
  - **Right Footer**:
    - `SPARTA DC DEVELOPMENT • PRODUCTION RELEASE`

---

## 4. Compilation & Verification Targets
1. `slides/slide-11/slide-11.html` & `slides/slide-11/slide-11.css`
2. `slides/slide-12/slide-12.html` & `slides/slide-12/slide-12.css`
3. Executing `node build.js` to compile the entire 12-slide deck into `index.html` and `styles.css`.
4. Verification of text preservation, responsive alignment at 1600x900 viewport, and visual harmony across slides 08-12.
