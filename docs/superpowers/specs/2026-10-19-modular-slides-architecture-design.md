# Design Specification: Modular Slides Architecture (Per-Slide HTML & CSS Decomposition)

## 1. Overview & Objectives

Saat ini, seluruh konten 12 slide portofolio berada dalam satu file `index.html` (~1.300 baris) dan `styles.css` (~1.850 baris). Hal ini menyulitkan pemeliharaan dan pengeditan per slide.

Tujuan dari refaktorisasi ini adalah:
1. Memecah setiap slide menjadi file HTML dan CSS independen di dalam direktori `slides/slide-XX/`.
2. Menyediakan script auto-compiler/sync (`build.js`) berbasis Node.js murni (zero-dependency) yang menggabungkan seluruh modul slide ke `index.html` dan `styles.css` utama secara instan (< 10 ms).
3. Mendukung mode `--watch` agar setiap perubahan pada file slide langsung disinkronkan ke root `index.html`.
4. Menjaga 100% fungsionalitas deck saat dibuka di browser (navigasi tombol next/prev, keyboard shortcuts, counter `XX/12`, progress bar, fullscreen, asset tab switcher, dan lightbox modal).

---

## 2. Struktur Direktori Baru

```
c:/templeate pdf/portofolio/
├── index.html                           <-- Compiled output (dibuka di browser)
├── styles.css                           <-- Compiled CSS output
├── app.js                               <-- Deck controller & lightbox logic
├── build.js                             <-- Node.js compiler & live watcher
├── assets/                              <-- Gambar, logo, & flowchart
└── slides/                              <-- Source code modular per slide
    ├── global/
    │   ├── shell-header.html            <-- <!doctype html>, <head>, opening tags
    │   ├── shell-footer.html            <-- Nav controls, lightbox modal, script tags
    │   └── base.css                     <-- Design tokens, deck scale, base layout
    ├── slide-01/
    │   ├── slide-01.html                <-- Cover Utama Portofolio
    │   └── slide-01.css                 <-- Chapter cover styles
    ├── slide-02/
    │   ├── slide-02.html                <-- Daftar Isi / Agenda
    │   └── slide-02.css                 <-- TOC split grid styles
    ├── slide-03/
    │   ├── slide-03.html                <-- Section Divider: BAB 01 / PROFIL
    │   └── slide-03.css                 <-- Section divider styling
    ├── slide-04/
    │   ├── slide-04.html                <-- Detail Profil Wildan Fadillah
    │   └── slide-04.css                 <-- Hero grid & portrait styles
    ├── slide-05/
    │   ├── slide-05.html                <-- Section Divider: BAB 02 / PENDIDIKAN
    │   └── slide-05.css
    ├── slide-06/
    │   ├── slide-06.html                <-- Detail Pendidikan & Organisasi
    │   └── slide-06.css
    ├── slide-07/
    │   ├── slide-07.html                <-- Section Divider: BAB 03 / PENGALAMAN KERJA
    │   └── slide-07.css
    ├── slide-08/
    │   ├── slide-08.html                <-- PT Sumber Alfaria Trijaya Tbk (Corporate Landmark)
    │   └── slide-08.css                 <-- Corporate brand stage styles
    ├── slide-09/
    │   ├── slide-09.html                <-- Website Pembangunan Toko (SPARTA Building)
    │   └── slide-09.css                 <-- Theory 3-column architecture grid
    ├── slide-10/
    │   ├── slide-10.html                <-- SPARTA Building — Fokus Assets
    │   └── slide-10.css                 <-- Panoramic showcase & switcher styles
    ├── slide-11/
    │   ├── slide-11.html                <-- SPARTA DC Development — Pembahasan
    │   └── slide-11.css                 <-- DC operational pillars & tender threshold
    └── slide-12/
        ├── slide-12.html                <-- SPARTA DC Development — Fokus Assets
        └── slide-12.css                 <-- DC assets panoramic stage
```

---

## 3. Spesifikasi `build.js`

Script `build.js` harus memenuhi kriteria berikut:
1. **Zero External Dependencies**: Menggunakan hanya modul bawaan Node.js (`fs`, `path`).
2. **Penyusunan `index.html`**:
   - Membaca `slides/global/shell-header.html`.
   - Mengurutkan folder `slides/slide-01` s.d. `slides/slide-12` secara numerik.
   - Membaca dan menggabungkan konten masing-masing `slide-XX.html` ke dalam kontainer `<div id="deck">`.
   - Menutup dengan `slides/global/shell-footer.html`.
   - Menulis hasil gabungan ke root `index.html`.
3. **Penyusunan `styles.css`**:
   - Membaca `slides/global/base.css`.
   - Menggabungkan masing-masing `slide-XX.css` secara berurutan.
   - Menulis hasil gabungan ke root `styles.css`.
4. **Mode Watch (`node build.js --watch`)**:
   - Memantau perubahan file di dalam direktori `slides/`.
   - Melakukan re-compile secara instan (< 10 ms) dan mencetak log waktu pembaruan di console.

---

## 4. Integritas Fungsionalitas & Pengujian

- Seluruh ID slide (`slide-1` s.d. `slide-12`) dan class (`is-active` pada slide 1) harus tetap presisi.
- Navigasi `app.js` harus tetap mendeteksi ke-12 slide tanpa perubahan logika.
- Seluruh asset image path tetap mengarah ke `assets/...` tanpa broken link.
