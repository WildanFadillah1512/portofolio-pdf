# Modular Slides Architecture Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Memecah monolitik `index.html` (~1.300 baris) dan `styles.css` (~1.850 baris) menjadi modul-modul file terpisah per slide (`slides/slide-01/` s.d. `slides/slide-12/`), dilengkapi script compiler otomatis instan `build.js` dengan mode live watch.

**Architecture:** Modul-modul HTML dan CSS murni disimpan di direktori `slides/`. Script `build.js` berbasis modul internal Node.js (`fs`, `path`) menggabungkan modul secara instan menjadi `index.html` dan `styles.css` di root proyek. Hal ini menjaga 100% kompatibilitas dengan pembukaan via `file:///` dan mempertahankan seluruh fitur navigasi slide (`app.js`).

**Tech Stack:** Vanilla HTML5, Vanilla CSS3, Vanilla Node.js (Built-in `fs` & `path`).

## Global Constraints

- Tidak ada external runtime dependencies (zero-dependency npm packages).
- Seluruh 12 ID slide (`slide-1` s.d. `slide-12`) dan class (`slide`, `slide-dark`, `is-active`) harus identik dengan kode yang sedang berjalan saat ini.
- Output hasil kompilasi `index.html` dan `styles.css` harus tetap berada di root agar path `assets/` dan `app.js` tetap valid.

---

### Task 1: Buat Script Compiler `build.js` dengan Live Watcher

**Files:**
- Create: `build.js`

**Interfaces:**
- Produces: CLI script yang dapat dijalankan dengan `node build.js` (kompilasi satu kali) atau `node build.js --watch` (live rebuild saat file slide disimpan).

- [ ] **Step 1: Tulis kode lengkap `build.js`**
```javascript
const fs = require('fs');
const path = require('path');

const ROOT_DIR = __dirname;
const SLIDES_DIR = path.join(ROOT_DIR, 'slides');
const GLOBAL_DIR = path.join(SLIDES_DIR, 'global');
const OUTPUT_HTML = path.join(ROOT_DIR, 'index.html');
const OUTPUT_CSS = path.join(ROOT_DIR, 'styles.css');

function compile() {
  const startTime = Date.now();
  console.log('🔄 Menyusun portofolio dari modul-modul slide...');

  if (!fs.existsSync(SLIDES_DIR)) {
    console.error('❌ Folder slides/ belum ditemukan!');
    return;
  }

  // 1. Compile CSS
  let cssContent = '';
  const baseCssPath = path.join(GLOBAL_DIR, 'base.css');
  if (fs.existsSync(baseCssPath)) {
    cssContent += fs.readFileSync(baseCssPath, 'utf8') + '\n\n';
  }

  // Cari semua folder slide (slide-01, slide-02, ...)
  const slideFolders = fs.readdirSync(SLIDES_DIR)
    .filter(name => name.startsWith('slide-'))
    .sort((a, b) => {
      const numA = parseInt(a.replace('slide-', ''), 10);
      const numB = parseInt(b.replace('slide-', ''), 10);
      return numA - numB;
    });

  let slidesHtml = '';

  slideFolders.forEach(folder => {
    const folderPath = path.join(SLIDES_DIR, folder);
    
    // Gabung HTML slide
    const htmlFile = path.join(folderPath, `${folder}.html`);
    if (fs.existsSync(htmlFile)) {
      slidesHtml += fs.readFileSync(htmlFile, 'utf8') + '\n\n';
    }

    // Gabung CSS slide
    const cssFile = path.join(folderPath, `${folder}.css`);
    if (fs.existsSync(cssFile)) {
      cssContent += `/* --- Styles for ${folder} --- */\n` + fs.readFileSync(cssFile, 'utf8') + '\n\n';
    }
  });

  // 2. Compile HTML
  const headerHtmlPath = path.join(GLOBAL_DIR, 'shell-header.html');
  const footerHtmlPath = path.join(GLOBAL_DIR, 'shell-footer.html');

  if (!fs.existsSync(headerHtmlPath) || !fs.existsSync(footerHtmlPath)) {
    console.error('❌ File shell-header.html atau shell-footer.html tidak ditemukan!');
    return;
  }

  const headerHtml = fs.readFileSync(headerHtmlPath, 'utf8');
  const footerHtml = fs.readFileSync(footerHtmlPath, 'utf8');

  const finalHtml = `${headerHtml}\n${slidesHtml}${footerHtml}`;

  fs.writeFileSync(OUTPUT_HTML, finalHtml, 'utf8');
  fs.writeFileSync(OUTPUT_CSS, cssContent, 'utf8');

  const elapsed = Date.now() - startTime;
  console.log(`✅ Sukses! ${slideFolders.length} slide berhasil dikompilasi ke index.html & styles.css (${elapsed}ms).`);
}

// Mode Watcher
if (process.argv.includes('--watch') || process.argv.includes('-w')) {
  compile();
  console.log('👀 Memantau perubahan pada folder slides/... (Tekan Ctrl+C untuk berhenti)');
  
  let debounceTimeout = null;
  fs.watch(SLIDES_DIR, { recursive: true }, (eventType, filename) => {
    if (!filename) return;
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      console.log(`\n📝 Perubahan terdeteksi pada: ${filename}`);
      compile();
    }, 50);
  });
} else {
  compile();
}

module.exports = { compile };
```

- [ ] **Step 2: Uji coba eksekusi `build.js`**
Jalankan: `node build.js`
Verifikasi: Mengeluarkan pesan status dengan benar.

---

### Task 2: Ekstrak `slides/global/` (Shell Header, Shell Footer, dan Base CSS)

**Files:**
- Create: `slides/global/shell-header.html`
- Create: `slides/global/shell-footer.html`
- Create: `slides/global/base.css`

- [ ] **Step 1: Buat `slides/global/shell-header.html`**
Memuat deklarasi `<!doctype html>`, tag `<head>`, viewport, dan pembuka `<div id="deck">`.

- [ ] **Step 2: Buat `slides/global/shell-footer.html`**
Memuat penutup `</div>` deck, komponen lightbox modal, pill navigation bar (`<nav class="nav">`), progress bar, dan `<script src="app.js"></script>`.

- [ ] **Step 3: Buat `slides/global/base.css`**
Memuat font `@font-face Geist`, CSS variables `:root`, reset `*`, styling `#viewport`, `#deck`, `.slide`, `[data-step]`, navigasi, progress bar, hint, dan lightbox modal.

---

### Task 3: Ekstrak Modul Slide 01 s.d. Slide 06

**Files:**
- Create: `slides/slide-01/slide-01.html` & `slides/slide-01/slide-01.css`
- Create: `slides/slide-02/slide-02.html` & `slides/slide-02/slide-02.css`
- Create: `slides/slide-03/slide-03.html` & `slides/slide-03/slide-03.css`
- Create: `slides/slide-04/slide-04.html` & `slides/slide-04/slide-04.css`
- Create: `slides/slide-05/slide-05.html` & `slides/slide-05/slide-05.css`
- Create: `slides/slide-06/slide-06.html` & `slides/slide-06/slide-06.css`

- [ ] **Step 1: Ekstrak Slide 01 (Grand Deck Title / Cover)**
- [ ] **Step 2: Ekstrak Slide 02 (Daftar Isi / Agenda)**
- [ ] **Step 3: Ekstrak Slide 03 (Divider Profil)**
- [ ] **Step 4: Ekstrak Slide 04 (Detail Profil Wildan Fadillah)**
- [ ] **Step 5: Ekstrak Slide 05 (Divider Pendidikan)**
- [ ] **Step 6: Ekstrak Slide 06 (Detail Pendidikan & Organisasi)**

---

### Task 4: Ekstrak Modul Slide 07 s.d. Slide 12

**Files:**
- Create: `slides/slide-07/slide-07.html` & `slides/slide-07/slide-07.css`
- Create: `slides/slide-08/slide-08.html` & `slides/slide-08/slide-08.css`
- Create: `slides/slide-09/slide-09.html` & `slides/slide-09/slide-09.css`
- Create: `slides/slide-10/slide-10.html` & `slides/slide-10/slide-10.css`
- Create: `slides/slide-11/slide-11.html` & `slides/slide-11/slide-11.css`
- Create: `slides/slide-12/slide-12.html` & `slides/slide-12/slide-12.css`

- [ ] **Step 1: Ekstrak Slide 07 (Divider Pengalaman Kerja)**
- [ ] **Step 2: Ekstrak Slide 08 (PT Sumber Alfaria Trijaya Tbk — Corporate Landmark)**
- [ ] **Step 3: Ekstrak Slide 09 (Website Pembangunan Toko — SPARTA Building)**
- [ ] **Step 4: Ekstrak Slide 10 (SPARTA Building — Assets Showcase)**
- [ ] **Step 5: Ekstrak Slide 11 (SPARTA DC Development — Pembahasan)**
- [ ] **Step 6: Ekstrak Slide 12 (SPARTA DC Development — Assets Showcase)**

---

### Task 5: Kompilasi & Verifikasi Integritas Deck

**Files:**
- Output: `index.html`
- Output: `styles.css`
- Verify: `scratch/verify_slides.js`

- [ ] **Step 1: Jalankan kompilasi pertama**
Run: `node build.js`
Expected: Seluruh 12 slide terkompilasi dalam < 15ms.

- [ ] **Step 2: Jalankan skrip verifikasi Node.js**
Run: `node "C:\Users\tezow\.gemini\antigravity-ide\brain\085a6ee3-3d34-459e-b23f-cb89d7fbd6d6\scratch\verify_slides.js"`
Expected: Seluruh 12 ID slide (`slide-1` s.d. `slide-12`) lengkap dan tidak ada selisih.

- [ ] **Step 3: Verifikasi fungsionalitas di browser**
Buka `index.html` dan pastikan tombol next, prev, keyboard panah, hash `#1` s.d. `#12`, tab switcher, dan modal lightbox bekerja sempurna.
