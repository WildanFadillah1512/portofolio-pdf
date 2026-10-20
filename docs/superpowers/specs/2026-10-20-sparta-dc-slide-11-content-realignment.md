# SPARTA DC Slide 11 Content Realignment Design Specification

**Date:** 2026-10-20  
**Feature:** Penyelarasan Konten Slide 11 Berdasarkan Flowchart DC Sebenarnya (Opsi A: 4 Tahap Proyek)  
**Author:** Pair Programming Session with User  

---

## 1. Context & Background
User mengunggah 3 dokumen flowchart SOP resmi PT Sumber Alfaria Trijaya Tbk (DC Development):
1. **Flowchart Pengajuan Proposal Kontraktor/Konsultan**: Gating tender nilai pagu proyek di atas Rp 1 Miliar, input data peserta kualifikasi/prakualifikasi dari database, resume, dan schedule, dengan persetujuan 3 tingkat (DC Dev. Manager $\rightarrow$ B&M GM $\rightarrow$ PropDev Director).
2. **Flowchart Klarifikasi Aanwijzing**: Building Coordinator menginput/mengedit item pekerjaan yang belum masuk OE/RAB serta perubahan volume setelah aanwijzing, dengan persetujuan B&M Manager & DC Dev. Specialist sebelum kontraktor memberi penawaran.
3. **Master Flowchart (Halaman 28)**: Alur menyeluruh dari awal hingga selesai:
   - Estimasi Perbaikan ES $\rightarrow$ Building Coord input RAB/OE & Foto Lingkungan $\rightarrow$ Approval 3 lapis (B&M Mgr, DC Dev. Spec, DC Dev. Mgr).
   - Form Pengajuan Perubahan/Penambahan Fungsi Ruang (PFR) $\rightarrow$ Approval Proxy.
   - Ambang batas OE > Rp 1 M $\rightarrow$ Proposal Tender Peserta.
   - Aanwijzing & Klarifikasi Hasil (Undangan & Berita Acara).
   - Tender (Penawaran by OE, Gantt Chart, Minimal 3 Kontraktor) $\rightarrow$ Pengumuman Hasil Tender.
   - Proses SPK / PJU $\rightarrow$ Pengawasan dan Opname Parsial $\rightarrow$ Serah Terima $\rightarrow$ Kerja Tambah Kurang $\rightarrow$ Selesai.

User memilih **Opsi A**: menyelaraskan format dan gaya bahasa Slide 11 dengan Slide 09 (SPARTA Building), menggunakan judul **`SOLUSI PER TAHAP PROYEK`** dengan 4 tahapan kronologis dari awal dibangun hingga selesai, serta memperbarui 4 poin **`FITUR & INOVASI TEKNIS`** sesuai rekayasa logika flowchart.

---

## 2. Content Changes for Slide 11

### Panel Kiri (Warm Cream Editorial: 4 Tahapan Proyek)
- **Judul Seksi:** `SOLUSI PER TAHAP PROYEK` (menggantikan `SOLUSI SISTEM (5 MODUL DC)`)
- **Tahap 1: Perencanaan & RAB/OE**
  - Title: `Perencanaan & RAB/OE`
  - Desc: `Penyusunan estimasi perbaikan, RAB/OE, dan survei foto lingkungan dengan persetujuan berjenjang hingga DC Dev. Manager.`
  - Icon: SVG Building / Calculation / Document blueprint
- **Tahap 2: Aanwijzing & Tender**
  - Title: `Aanwijzing & Tender`
  - Desc: `Klarifikasi teknis volume OE di lapangan serta seleksi penawaran kontraktor (termasuk verifikasi proposal Direksi untuk proyek > Rp 1 M).`
  - Icon: SVG Clipboard check / Gavel / Auction
- **Tahap 3: Kontrak SPK & Pengawasan**
  - Title: `Kontrak SPK & Pengawasan`
  - Desc: `Penerbitan surat perintah kerja (SPK) resmi berbasis jadwal Gantt Chart dan pemantauan progres serta opname parsial berkala.`
  - Icon: SVG File-text / Hardhat / Timeline inspect
- **Tahap 4: Serah Terima & BAST**
  - Title: `Serah Terima & BAST`
  - Desc: `Perhitungan hasil akhir pekerjaan, rekonsiliasi kerja tambah kurang, hingga proses serah terima fasilitas DC secara terstandarisasi.`
  - Icon: SVG Award / Key / Check-circle

### Panel Kanan (Deep Black Technical: 4 Inovasi Flowchart)
- **Judul Seksi:** `FITUR & INOVASI TEKNIS`
- **Poin 1:**
  - Title: `• Multi-Stage Approval State Machine`
  - Desc: `Otorisasi bertingkat (B&M Manager s.d PropDev Director) dengan alur revisi otomatis kembali ke pembuat jika berkas ditolak.`
- **Poin 2:**
  - Title: `• Threshold Rule Engine (OE > Rp 1 M)`
  - Desc: `Percabangan otomatis sistem untuk proyek bernilai di atas Rp 1 Miliar dengan verifikasi proposal kualifikasi ke level Direksi.`
- **Poin 3:**
  - Title: `• Klarifikasi Dinamis Aanwijzing`
  - Desc: `Penyesuaian volume dan penambahan item pekerjaan baru pada OE/RAB yang disahkan sebelum pembukaan penawaran rekanan.`
- **Poin 4:**
  - Title: `• Validasi Kuorum & Kontrol Proyek`
  - Desc: `Validasi sistem minimal 3 kontraktor peserta lelang, integrasi jadwal Gantt Chart, SPK, hingga opname dan kerja tambah kurang.`

---

## 3. Styling & Layout Alignment (`slides/slide-11/slide-11.css`)
- Dengan 4 item, ritme vertikal panel kiri memiliki breathing room luas yang identik dengan Slide 09:
  - `.sp-dc-timeline`: `gap: 22px;`
  - `.sp-dc-time-marker`: `42px x 42px`, `border: 2px solid #e65f2b`, `background: #fff5ee`
  - Line centering: `width: 2px; left: 20px; top: 21px; bottom: 21px;`
  - `.sp-dc-time-title`: `font-size: 17px; font-weight: 850; color: #111827;`
  - `.sp-dc-time-desc`: `font-size: 14px; line-height: 1.48; color: #4b5563;`
  - `.sp-dc-left-panel` padding: `42px 52px 28px 52px`

---

## 4. Verification Plan
1. Edit `slides/slide-11/slide-11.html` dan `slides/slide-11/slide-11.css`.
2. Jalankan `node build.js` untuk mengompilasi ke `index.html` dan `styles.css`.
3. Verifikasi ketiadaan overflow, keselarasan vertikal, dan konsistensi tipografi dengan Slide 09.
