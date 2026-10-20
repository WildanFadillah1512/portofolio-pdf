# SPARTA DC Slide 11 Content Realignment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Menyelaraskan isi konten Slide 11 (kiri & kanan) sesuai dengan alur flowchart sebenarnya (Opsi A: 4 Tahap Proyek) dengan standar editorial Slide 09.

**Architecture:** Memperbarui markup semantik pada `slides/slide-11/slide-11.html` untuk memuat 4 tahapan proyek dan 4 inovasi teknis, serta menyempurnakan styling `slides/slide-11/slide-11.css` untuk breathing room 4 item yang identik dengan Slide 09. Kemudian mengompilasi bundel menggunakan `node build.js`.

**Tech Stack:** Vanilla HTML5, Vanilla CSS (CSS Grid, Flexbox, CSS Variables), Node.js compiler (`build.js`).

## Global Constraints
- Preserve exact wording from Option A approved by the user.
- Maintain the fixed 1600x900 viewport scaling with no scrollbars or overflow.
- Keep the editorial warm cream (`#f6f4ee`) and deep black (`#0b0c10`) two-tone split layout with DC Orange (`#e65f2b`) accents.
- Always run `node build.js` to compile slide changes to `index.html` and `styles.css`.

---

### Task 1: Update Slide 11 HTML Markup
**Files:**
- Modify: `slides/slide-11/slide-11.html`

- [ ] **Step 1: Replace timeline in left panel with 4 project stages**
  Update heading to `SOLUSI PER TAHAP PROYEK`.
  Replace 5 module items with the 4 lifecycle stages:
  1. `Perencanaan & RAB/OE`
  2. `Aanwijzing & Tender`
  3. `Kontrak SPK & Pengawasan`
  4. `Serah Terima & BAST`

- [ ] **Step 2: Replace technical innovations in right panel with 4 flowchart features**
  Replace existing 4 bullet items with:
  1. `• Multi-Stage Approval State Machine`
  2. `• Threshold Rule Engine (OE > Rp 1 M)`
  3. `• Klarifikasi Dinamis Aanwijzing`
  4. `• Validasi Kuorum & Kontrol Proyek`

---

### Task 2: Refine Slide 11 CSS Spacing for 4 Stages
**Files:**
- Modify: `slides/slide-11/slide-11.css`

- [ ] **Step 1: Adjust timeline vertical gap and item heights**
  Update `.sp-dc-timeline` to `gap: 22px`.
  Ensure `.sp-dc-time-marker` is `42px x 42px`, with `.sp-dc-timeline::before` connecting line at `left: 20px; top: 21px; bottom: 21px;`.
  Set `.sp-dc-time-title` to `font-size: 17px; font-weight: 850;` and `.sp-dc-time-desc` to `font-size: 14px; line-height: 1.48;`.

---

### Task 3: Build & Verification
**Files:**
- Output: `index.html`, `styles.css`

- [ ] **Step 1: Compile portfolio**
  Run `node build.js` to compile the 12 slides.

- [ ] **Step 2: Verify markup and visual alignment**
  Verify `index.html` contains the updated content and styles.
