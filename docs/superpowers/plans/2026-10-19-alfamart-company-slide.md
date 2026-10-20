# Slide 08 — PT Sumber Alfaria Trijaya Tbk Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Menambahkan slide baru (Slide 08) sebagai *Executive Dossier* PT Sumber Alfaria Trijaya Tbk (Alfamart) - Departemen Property Development divisi BMES (Mei–Nov 2026) dengan layout editorial presisi, serta menggeser slide detail teknis SPARTA Building dan SPARTA DC ke nomor slide berikutnya.

**Architecture:** Menggunakan vanilla HTML, CSS, dan JS yang sudah ada pada deck 1600x900px. Slide 08 disusun dengan arsitektur split grid asimetris (Kolom kiri 42% profil & metrik korporasi, Kolom kanan 58% dua kartu gateway arsitektur sistem SPARTA Building & SPARTA DC, serta bottom impact footer bar). Slide eksisting di-reindeks secara bersih dari slide-8..11 menjadi slide-9..12.

**Tech Stack:** Vanilla HTML5, Vanilla CSS3 (Geist Font, CSS Grid/Flexbox, Custom Properties), Vanilla JavaScript (Navigation & State Deck).

## Global Constraints

- Deck resolusi tetap: 1600x900px centered canvas (`#deck`) dengan auto-scale `--deck-scale`.
- Tema Slide 08: Light editorial theme (`--paper: #f8f6f0`, `--paper-card: #f2eee6`, `--line: #ded9cf`, `--red: #d71920`).
- Tipografi: Geist Variable Sans dengan styling data-step micro-animations.
- Identitas korporasi: PT Sumber Alfaria Trijaya Tbk, Departemen Property Development, Divisi Building Maintenance Energy System (BMES), Periode Mei 2026 – November 2026, Role: Software Engineer Intern.

---

### Task 1: CSS Design System Tokens & Layout Classes untuk Slide 08

**Files:**
- Modify: `styles.css:1250-1350` (atau tambahkan di seksi komponen Alfamart)

**Interfaces:**
- Produces: Class-class styling untuk `.alfamart-dossier-layout`, `.dossier-editorial-grid`, `.dossier-left-profile`, `.dossier-metric-strip`, `.dossier-gateway-stack`, `.dossier-sys-card`, `.dossier-sys-badge`, dan `.dossier-footer-metrics`.

- [ ] **Step 1: Definisikan style layout split grid untuk dossier perusahaan**
Tambahkan deklarasi CSS terstruktur di `styles.css`:
```css
/* ==========================================================================
   ALFAMART EXECUTIVE DOSSIER (SLIDE 08)
   ========================================================================== */
.alfamart-dossier-layout {
  position: absolute;
  inset: 0;
  padding: 32px 56px 36px;
  display: flex;
  flex-direction: column;
  background: var(--paper);
  color: var(--ink);
  overflow: hidden;
}

.dossier-editorial-grid {
  display: grid;
  grid-template-columns: 42% 58%;
  gap: 36px;
  flex: 1;
  min-height: 0;
  margin-top: 18px;
}
```

- [ ] **Step 2: Definisikan style kolom kiri (Profil Peran & 3 Metrik Kunci)**
```css
.dossier-left-profile {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid var(--line);
  padding-right: 36px;
}

.dossier-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--red);
  margin-bottom: 8px;
}

.dossier-company-title {
  font-size: 30px;
  font-weight: 800;
  letter-spacing: -0.025em;
  color: var(--ink);
  line-height: 1.15;
}

.dossier-division-role {
  font-size: 14px;
  font-weight: 600;
  color: var(--ink-secondary);
  margin-top: 6px;
}

.dossier-period-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 10px;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(215, 25, 32, 0.08);
  border: 1px solid rgba(215, 25, 32, 0.2);
  color: var(--red-deep);
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.dossier-desc-lead {
  font-size: 13.5px;
  line-height: 1.6;
  color: var(--ink-secondary);
  margin-top: 14px;
}

.dossier-metric-strip {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 18px;
  padding-top: 16px;
  border-top: 1px dashed var(--line);
}

.dossier-metric-box {
  background: var(--paper-card);
  border: 1px solid var(--line);
  padding: 12px 14px;
  border-radius: 4px;
}

.dossier-metric-val {
  display: block;
  font-size: 20px;
  font-weight: 800;
  color: var(--red);
  line-height: 1;
}

.dossier-metric-lbl {
  display: block;
  font-size: 10.5px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--muted);
  margin-top: 4px;
}
```

- [ ] **Step 3: Definisikan style kolom kanan (2 Kartu Gateway Sistem)**
```css
.dossier-gateway-stack {
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
}

.dossier-sys-card {
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: 6px;
  padding: 20px 22px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  transition: transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease;
  position: relative;
}

.dossier-sys-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
  border-color: var(--line-strong);
}

.dossier-sys-card.is-dc {
  border-left: 4px solid #e65f2b;
}

.dossier-sys-card.is-building {
  border-left: 4px solid var(--red);
}

.dossier-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.dossier-sys-kicker {
  font-size: 10.5px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.dossier-sys-kicker.kicker-building {
  color: var(--red);
}

.dossier-sys-kicker.kicker-dc {
  color: #c84e1b;
}

.dossier-tech-pills {
  display: flex;
  gap: 6px;
}

.dossier-tech-pill {
  font-size: 10px;
  font-weight: 600;
  padding: 2px 7px;
  border-radius: 3px;
  background: var(--paper-card);
  color: var(--ink-secondary);
  border: 1px solid var(--line);
}

.dossier-sys-title {
  font-size: 17px;
  font-weight: 800;
  letter-spacing: -0.01em;
  color: var(--ink);
  margin-bottom: 8px;
}

.dossier-sys-points {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.dossier-sys-points li {
  font-size: 12.5px;
  color: var(--ink-secondary);
  display: flex;
  align-items: flex-start;
  gap: 8px;
  line-height: 1.45;
}

.dossier-sys-points li::before {
  content: "•";
  font-size: 14px;
  font-weight: bold;
}

.dossier-sys-card.is-building .dossier-sys-points li::before {
  color: var(--red);
}

.dossier-sys-card.is-dc .dossier-sys-points li::before {
  color: #e65f2b;
}

.dossier-card-footer {
  margin-top: 12px;
  padding-top: 10px;
  border-top: 1px solid var(--line);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  font-weight: 700;
  color: var(--muted);
}
```

- [ ] **Step 4: Definisikan style bottom impact bar**
```css
.dossier-strategic-impact-bar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 18px;
  padding: 14px 20px;
  background: var(--paper-card);
  border: 1px solid var(--line);
  border-radius: 4px;
}

.dossier-impact-col {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.dossier-impact-num {
  font-size: 12px;
  font-weight: 800;
  color: var(--red);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.dossier-impact-desc {
  font-size: 11.5px;
  color: var(--ink-secondary);
  line-height: 1.35;
}
```

- [ ] **Step 5: Verifikasi sintaks CSS**
Pastikan tidak ada kurung kurawal yang belum tertutup dan class tidak berkonflik dengan slide lainnya.

---

### Task 2: Sisipkan Slide 08 Baru di `index.html` dan Re-indeks Slide 8–11 Menjadi 9–12

**Files:**
- Modify: `index.html:520-1030`
- Modify: `index.html:110-125` (Slide 02 Daftar Isi)

**Interfaces:**
- Produces:
  - `<section class="slide" id="slide-8">` (Slide 08 Baru: Alfamart Executive Dossier)
  - `<section class="slide" id="slide-9">` (Ex Slide 08: SPARTA Building Pembahasan)
  - `<section class="slide" id="slide-10">` (Ex Slide 09: SPARTA Building Assets)
  - `<section class="slide" id="slide-11">` (Ex Slide 10: SPARTA DC Pembahasan)
  - `<section class="slide" id="slide-12">` (Ex Slide 11: SPARTA DC Assets)

- [ ] **Step 1: Tulis markup HTML untuk Slide 08 Baru di bawah Slide 07**
```html
      <!-- Slide 08: PT Sumber Alfaria Trijaya Tbk — Executive Dossier -->
      <section class="slide" id="slide-8" aria-labelledby="alfamart-dossier-title">
        <div class="alfamart-dossier-layout">
          <!-- Top Masthead Bar -->
          <header class="dossier-masthead" data-step>
            <div class="dossier-brand">
              <div class="dossier-logo-wrap">
                <img src="assets/alfamart-logo.png" alt="Logo Alfamart" class="dossier-logo-img" />
              </div>
              <div class="dossier-identity">
                <div class="dossier-tagline">
                  <span class="dossier-dot" aria-hidden="true"></span>
                  <span>PT SUMBER ALFARIA TRIJAYA TBK &bull; PROPERTY DEVELOPMENT &bull; BMES</span>
                </div>
                <div class="dossier-role-row">
                  <span class="dossier-role">Software Engineer Intern</span>
                  <span class="dossier-sep">&bull;</span>
                  <span class="dossier-period">Mei 2026 &ndash; November 2026 (7 Bulan)</span>
                </div>
              </div>
            </div>

            <div class="dossier-meta-group">
              <span class="dossier-pill">Corporate Systems</span>
              <span class="dossier-pill">National Scale</span>
              <span class="dossier-index">03 / ALFAMART &bull; 01 (EXECUTIVE DOSSIER)</span>
            </div>
          </header>

          <!-- Main Editorial Split Grid -->
          <div class="dossier-editorial-grid">
            <!-- Left Column: Role & Division Profile -->
            <div class="dossier-left-profile" data-step style="--d: 80ms">
              <div>
                <span class="dossier-eyebrow">
                  <span class="chapter-dot" aria-hidden="true"></span>
                  PENGALAMAN KERJA PROFESIONAL
                </span>
                <h2 id="alfamart-dossier-title" class="dossier-company-title">
                  PT Sumber Alfaria Trijaya Tbk
                </h2>
                <div class="dossier-division-role">
                  Departemen Property Development &bull; Divisi BMES
                </div>
                <div class="dossier-period-pill">
                  <span>📅 Mei 2026 &ndash; November 2026 &middot; 7 Bulan Penugasan</span>
                </div>
                <div class="red-rule" style="margin: 14px 0 12px;"></div>
                <p class="dossier-desc-lead">
                  Rekayasa perangkat lunak skala enterprise untuk digitalisasi dan otomasi alur pembangunan gerai ritel serta infrastruktur Distribution Center (DC) Alfamart di seluruh Indonesia. Berkontribusi aktif dalam perancangan arsitektur backend, integrasi database relasional, otomasi kalkulasi biaya otomatis (RAB), dan penegakan kepatuhan audit operasional.
                </p>
              </div>

              <!-- 3 Strategic Metric Boxes -->
              <div class="dossier-metric-strip">
                <div class="dossier-metric-box">
                  <span class="dossier-metric-val">43+</span>
                  <span class="dossier-metric-lbl">Cabang Nasional</span>
                </div>
                <div class="dossier-metric-box">
                  <span class="dossier-metric-val">2</span>
                  <span class="dossier-metric-lbl">Platform Sistem</span>
                </div>
                <div class="dossier-metric-box">
                  <span class="dossier-metric-val">End-to-End</span>
                  <span class="dossier-metric-lbl">Fullstack Lifecycle</span>
                </div>
              </div>
            </div>

            <!-- Right Column: Dual Ecosystem Gateways -->
            <div class="dossier-gateway-stack" data-step style="--d: 140ms">
              <!-- System Card 1: SPARTA Building -->
              <div class="dossier-sys-card is-building">
                <div class="dossier-card-top">
                  <span class="dossier-sys-kicker kicker-building">01 / RETAIL STORE LIFECYCLE ENGINE</span>
                  <div class="dossier-tech-pills">
                    <span class="dossier-tech-pill">Express.js API</span>
                    <span class="dossier-tech-pill">MySQL/PostgreSQL</span>
                    <span class="dossier-tech-pill">Gantt Engine</span>
                  </div>
                </div>
                <h3 class="dossier-sys-title">SPARTA Building Toko &mdash; Otomasi Konstruksi Gerai Ritel</h3>
                <ul class="dossier-sys-points">
                  <li>Digitalisasi formulir FPD & kalkulasi otomatis RAB berbasis katalog material regional 43+ cabang.</li>
                  <li>Penjadwalan 30–45 hari kalender berbasis Gantt dinamis dengan proteksi blokir SPK Backdate.</li>
                  <li>Alur opname mandiri kontraktor dan validasi gerbang mutlak Grand Opening (GO) sebelum BAST.</li>
                </ul>
                <div class="dossier-card-footer">
                  <span>CAKUPAN: PROYEK TOKO NASIONAL</span>
                  <span style="color: var(--red);">Dibahas lengkap di Slide 09 &amp; 10 &rarr;</span>
                </div>
              </div>

              <!-- System Card 2: SPARTA DC Development -->
              <div class="dossier-sys-card is-dc">
                <div class="dossier-card-top">
                  <span class="dossier-sys-kicker kicker-dc">02 / LOGISTICS &amp; WAREHOUSE INFRASTRUCTURE</span>
                  <div class="dossier-tech-pills">
                    <span class="dossier-tech-pill">Next.js App Router</span>
                    <span class="dossier-tech-pill">Prisma ORM (22 Models)</span>
                    <span class="dossier-tech-pill">Drive API</span>
                  </div>
                </div>
                <h3 class="dossier-sys-title">SPARTA DC Development &mdash; Pengadaan Tender Gudang &gt; 1M</h3>
                <ul class="dossier-sys-points">
                  <li>Digitalisasi Perubahan Fungsi Ruang (PFR) gudang logistik dan perhitungan Owner Estimate (OE/ES).</li>
                  <li>Tata kelola lelang tender skala besar miliaran rupiah dengan evaluasi penawaran rekanan terpilih.</li>
                  <li>Hierarki otorisasi berjenjang 7-tingkat dan integrasi arsip dokumen bersarang Google Drive API.</li>
                </ul>
                <div class="dossier-card-footer">
                  <span>CAKUPAN: GUDANG DISTRIBUTION CENTER</span>
                  <span style="color: #c84e1b;">Dibahas lengkap di Slide 11 &amp; 12 &rarr;</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom Strategic Impact Bar -->
          <footer class="dossier-strategic-impact-bar" data-step style="--d: 200ms">
            <div class="dossier-impact-col">
              <span class="dossier-impact-num">43+ Cabang</span>
              <span class="dossier-impact-desc">Infrastruktur tersinkronisasi untuk pengawasan proyek ritel se-Indonesia.</span>
            </div>
            <div class="dossier-impact-col">
              <span class="dossier-impact-num">100% Kepatuhan</span>
              <span class="dossier-impact-desc">Pencegahan tanggal mundur (Anti-Backdate) & validasi arsip fisik Gate GO.</span>
            </div>
            <div class="dossier-impact-col">
              <span class="dossier-impact-num">Transparansi Audit</span>
              <span class="dossier-impact-desc">Audit trail opname kontraktor dan eliminasi rekap spreadsheet manual.</span>
            </div>
            <div class="dossier-impact-col">
              <span class="dossier-impact-num">Modern Stack</span>
              <span class="dossier-impact-desc">Migrasi terisolasi ke Next.js App Router, Prisma ORM, dan PostgreSQL.</span>
            </div>
          </footer>
        </div>
      </section>
```

- [ ] **Step 2: Re-indeks slide 8–11 eksisting menjadi 9–12**
- Ganti `<section class="slide" id="slide-8"` menjadi `id="slide-9"` dan header index menjadi `03 / ALFAMART • 02 (BUILDING PEMBAHASAN)`.
- Ganti `<section class="slide" id="slide-9"` menjadi `id="slide-10"` dan header index menjadi `03 / ALFAMART • 03 (BUILDING ASSETS)`.
- Ganti `<section class="slide" id="slide-10"` menjadi `id="slide-11"` dan header index menjadi `03 / ALFAMART • 04 (DC PEMBAHASAN)`.
- Ganti `<section class="slide" id="slide-11"` menjadi `id="slide-12"` dan header index menjadi `03 / ALFAMART • 05 (DC ASSETS)`.

- [ ] **Step 3: Update Daftar Isi (Slide 02)**
Di `index.html` Slide 02, pastikan link `Pengalaman Kerja` mengarah ke `#7` atau `#8` dengan deskripsi terbarukan:
`Alfamart (Dossier Korporat, SPARTA Building & DC Development)`.

---

### Task 3: Verifikasi Fungsionalitas Navigasi, JS Switcher & Lightbox

**Files:**
- Test / Verify: `app.js`
- Test / Verify: `index.html`

- [ ] **Step 1: Periksa selector dan event listener di `app.js`**
Pastikan `.asset-selector-pills`, `.stage-viewport`, dan zoom lightbox di Slide 10 dan 12 tetap berfungsi tanpa hardcoded slide ID. (Karena `app.js` menggunakan selector dinamis `slide.querySelector(...)` dan traversal DOM relative, maka tidak ada kode JS yang pecah).

- [ ] **Step 2: Verifikasi total slide dan navigasi keyboard / tombol**
Total slide bertambah menjadi 12 slide (`01 / 12` hingga `12 / 12`).
Pastikan tombol `data-prev`, `data-next`, shortcut keyboard (`ArrowLeft`, `ArrowRight`, `Home`, `End`), dan URL hash (`#8`, `#9`, `#10`, `#11`, `#12`) bekerja presisi.

- [ ] **Step 3: Buka di browser / periksa rendering visual**
Lakukan verifikasi rendering visual menggunakan browser subagent atau pengecekan DOM untuk memastikan layout 1600x900 pas tanpa overflow tersembunyi.
