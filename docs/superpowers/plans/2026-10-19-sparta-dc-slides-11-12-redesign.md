# SPARTA DC-Development (Slides 11 & 12) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform Slide 11 and Slide 12 into modern asymmetric editorial split layouts for **SPARTA DC-Development** matching the visual pairing pattern of Slide 09 & Slide 10 with SPARTA DC Industrial Orange (`#e65f2b`) accents.

**Architecture:** 
- **Slide 11**: 50/50 Asymmetric Editorial Split with Warm Cream (`#f6f4ee`) 5-stage vertical timeline on the left and Deep Black (`#0b0c10`) 2x2 key metrics & engineering innovations on the right.
- **Slide 12**: 34/66 Asymmetric Editorial Split with Warm Cream (`#f6f4ee`) 4 module feature cards with orange left border (`border-left: 4px solid #e65f2b`) on the left and Deep Black (`#0b0c10`) 2x2 production screenshot grid on the right.
- Build system: Compiled via `node build.js` into root `index.html` and `styles.css`.

**Tech Stack:** Vanilla HTML5, Vanilla CSS, Node.js compilation script.

## Global Constraints
- Preserve 1600x900 fixed deck coordinate system without disrupting `--deck-scale`.
- Retain all user-provided copy, statistics (`73`, `22`, `39`, `27`), and module titles verbatim.
- Wire exact existing image assets in `assets/`: `Halaman Login.png`, `Profile DC.png`, `Penyimpanan Dokumen DC.png`, `Master Kontraktor dan konsultan.png`.
- Ensure clean transitions and visual harmony from Slide 08 &rarr; 09 &rarr; 10 &rarr; 11 &rarr; 12.

---

### Task 1: Implement Slide 11 (SPARTA DC Case Study & Technical Architecture)

**Files:**
- Modify: `slides/slide-11/slide-11.html`
- Modify: `slides/slide-11/slide-11.css`

**Interfaces:**
- Consumes: Global CSS tokens from `slides/global/base.css` (`--paper`, `--ink`, `--muted`, `--deck-scale`).
- Produces: `<section class="slide" id="slide-11">` with `.sparta-dc-split-layout`, timeline components, and 2x2 stats grid.

- [ ] **Step 1: Write Slide 11 HTML structure**
  Implement the 50/50 split layout in `slides/slide-11/slide-11.html`:
  - Left panel: Topline (`■ PENGALAMAN KERJA 01 / DETAIL KONTRIBUSI`), Title `SPARTA
  - Right panel: Topline (`■ METRIK UTAMA & DAMPAK`), 2x2 stats grid (`73`, `22`, `39`, `27`), 2-column innovations (Approval State Machine, Watermark GPS, Dokumen Resmi Otomatis, Keamanan & Isolasi Data), Tech bar, and right footer.

- [ ] **Step 2: Write Slide 11 CSS styling**
  Implement dedicated scoped styling in `slides/slide-11/slide-11.css`:
  - Grid layout `display: grid; grid-template-columns: 50% 50%; height: 100%;`
  - Cream panel styling with `#f6f4ee` background, orange accent highlights (`#e65f2b`), custom timeline node bubbles (`#fef3ee`, `border: 1.5px solid #e65f2b`), and vertical connector line.
  - Deep black panel styling with `#0b0c10` background, 2x2 stats cross-dividers, orange stat numerals (`#e65f2b`), innovation bullet items, tech banner, and bottom footer.

- [ ] **Step 3: Run node build.js to compile and verify syntax**
  Run: `node build.js`
  Expected: Successful compilation of 12 slides.

- [ ] **Step 4: Verify Slide 11 compiled markup**
  Run check script to verify `id="slide-11"`, title `SPARTA DC-DEVELOPMENT`, and all 5 timeline items exist in `index.html`.

---

### Task 2: Implement Slide 12 (SPARTA DC Production Interface & Assets Showcase)

**Files:**
- Modify: `slides/slide-12/slide-12.html`
- Modify: `slides/slide-12/slide-12.css`

**Interfaces:**
- Consumes: Assets in `assets/`: `Halaman Login.png`, `Profile DC.png`, `Penyimpanan Dokumen DC.png`, `Master Kontraktor dan konsultan.png`.
- Produces: `<section class="slide" id="slide-12">` with `.s12-split-layout`, 4 module cards with orange accent bars, and 2x2 screenshot grid.

- [ ] **Step 1: Write Slide 12 HTML structure**
  Implement the 34/66 split layout in `slides/slide-12/slide-12.html`:
  - Left panel: Topline (`■ VISUALISASI SISTEM` | `UI/UX`), Eyebrow, Title `SPARTA DC-DEVELOPMENT`, orange rule, lead, and 4 module cards:
    1. `01 PUSAT PENYIMPANAN DOKUMEN` (Login & kredensial cabang)
    2. `02 PROFILE & SPESIFIKASI DC` (Katalog 73 fasilitas DC)
    3. `03 PENYIMPANAN DOKUMEN DC` (Dashboard monitoring arsip)
    4. `04 MASTER KONTRAKTOR & KONSULTAN` (Modul pengadaan tender)
    Left footer: `PT SUMBER ALFARIA TRIJAYA TBK` | `DC DEVELOPMENT`.
  - Right panel: Topline (`■ DOKUMENTASI ANTARMUKA PRODUKSI` | `4 CONTOH UI/UX`), 2x2 screenshot grid cards with header strips, badges, and clean images:
    - Card 1: `assets/Halaman Login.png`
    - Card 2: `assets/Profile DC.png`
    - Card 3: `assets/Penyimpanan Dokumen DC.png`
    - Card 4: `assets/Master Kontraktor dan konsultan.png`
    Right footer: `SPARTA DC DEVELOPMENT • PRODUCTION RELEASE`.

- [ ] **Step 2: Write Slide 12 CSS styling**
  Implement dedicated scoped styling in `slides/slide-12/slide-12.css`:
  - Split grid `display: grid; grid-template-columns: 34% 66%; height: 100%;`
  - Left panel cards with `border-left: 4px solid #e65f2b`, `border-radius: 6px`, hover animations, and micro-spacing.
  - Right panel 2x2 grid with deep black background, window header strips, subtle rounded image containers, and responsive scaling.

- [ ] **Step 3: Run node build.js to compile and verify syntax**
  Run: `node build.js`
  Expected: Successful compilation of 12 slides.

- [ ] **Step 4: Verify Slide 12 compiled markup and asset references**
  Run check script to verify all 4 image filenames match existing files on disk.

---

### Task 3: Deck-Wide Integration & Verification

**Files:**
- Test/Verification: `index.html`, `styles.css`

- [ ] **Step 1: Full deck build check**
  Run: `node build.js`
  Expected: Zero errors, compilation time < 50ms.

- [ ] **Step 2: Automated verification script**
  Run automated script checking:
  - Slide 11: contains `SPARTA DC-DEVELOPMENT`, 5 timeline stages, 4 key stats (`73`, `22`, `39`, `27`), and tech stack.
  - Slide 12: contains 4 cards with orange left border `#e65f2b`, and 4 valid image tags pointing to existing files.
  - Navigation links: check hash anchors `#11` and `#12` are accessible.

- [ ] **Step 3: Browser inspection and user walkthrough**
  Provide exact URLs (`index.html#11` and `index.html#12`) for the user to review the live results in browser.
