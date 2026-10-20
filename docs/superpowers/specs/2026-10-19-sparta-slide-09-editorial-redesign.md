# SPARTA Slide 09 Editorial Split Design Specification

## Overview
Slide 09 presents the technical contribution and case study of the **SPARTA Building & Store Renovation Platform** (PT Sumber Alfaria Trijaya Tbk). It follows an asymmetric editorial split layout matching the reference mockup `media_1792405595471.jpg`:
- **Left Panel (50% width, Warm Cream `#f6f4ee`)**: Editorial case study, project headline, and a vertical connected timeline of the 4 project stages (`SOLUSI PER TAHAP PROYEK`).
- **Right Panel (50% width, Deep Black `#0b0c10`)**: Technical metrics & architectural highlights, including a 2x2 grid of key numbers (`ANGKA KUNCI`), a 2-column list of engineering innovations (`FITUR & INOVASI TEKNIS`), and a technology badge (`TEKNOLOGI`).

---

## 1. Visual Design Tokens & Palette

| Token | Value | Purpose |
|---|---|---|
| `--sp-cream` | `#f6f4ee` | Warm editorial paper background for the left panel |
| `--sp-cream-border` | `rgba(0, 0, 0, 0.1)` | Divider line between left & right panels and subtle borders |
| `--sp-dark` | `#0b0c10` | High-contrast technical black background for the right panel |
| `--sp-red-primary` | `#e11d24` | Brand red for SPARTA headline, stat numbers, and timeline highlights |
| `--sp-red-soft` | `#fee2e2` | Light red fill for timeline icon badges |
| `--sp-red-badge-border` | `#ef4444` | Solid crisp border for timeline badges |
| `--sp-ink-head` | `#111827` | Primary dark text on cream |
| `--sp-ink-body` | `#374151` / `#4b5563` | Secondary text and descriptions on cream |
| `--sp-dark-text-head` | `#ffffff` | Primary text and headings on dark background |
| `--sp-dark-text-sub` | `#94a3b8` | Subtext, labels, and innovation descriptions on dark |
| `--sp-dark-grid-line` | `rgba(255, 255, 255, 0.12)` | Hairline cross borders for stats grid |

---

## 2. Typographic Scale & Exact Dimensions

### A. Left Panel (Warm Cream Editorial)
1. **Topline Navigation**:
   - `■ PENGALAMAN KERJA 01 / DETAIL KONTRIBUSI` and `03 / SPARTA BUILDING`
   - Size: `12.5px`, Weight: `800`, Letter-spacing: `0.12em`.
   - Bottom border: `1.5px solid #111827`.
2. **Display Title (`SPARTA BUILDING`)**:
   - Size: `66px`, Weight: `900`, Letter-spacing: `-0.035em`, Line-height: `1`, `white-space: nowrap`.
   - Color: `--sp-red-primary` (`#e11d24`).
3. **Subtitle (`Sistem Pengawasan & Administrasi Renovasi Toko`)**:
   - Size: `32px`, Weight: `850`, Letter-spacing: `-0.025em`, Line-height: `1.15`.
   - Color: `#111827`.
4. **Lead Paragraph**:
   - Size: `16px`, Line-height: `1.52`, Color: `#374151`, Max-width: `580px`.
   - Wraps naturally into 3 lines:
     - Line 1: `Platform end-to-end mandiri yang mendigitalkan seluruh siklus`
     - Line 2: `proyek toko Alfamart dari perencanaan hingga serah terima,`
     - Line 3: `mengeliminasi proses manual & risiko deviasi anggaran.`
5. **Section Heading (`SOLUSI PER TAHAP PROYEK`)**:
   - Size: `14px`, Weight: `900`, Letter-spacing: `0.12em`, Color: `#111827`.
6. **Connected Timeline Items (4 Stages)**:
   - Round Marker: `42px x 42px` diameter, `#fee2e2` bg, `1.5px solid #ef4444`, icon `20px x 20px`.
   - Connector line: `2px solid #cbd5e1`, `left: 20px`.
   - Stage Titles: `17.5px`, Weight: `850`, Color: `#111827`.
   - Stage Descriptions: `14.5px`, Line-height: `1.45`, Color: `#4b5563`.
   - Gap between items: `18px`.
7. **Left Footer**:
   - Size: `12px`, Weight: `800`, Color: `#4b5563`, Letter-spacing: `0.12em`.

---

### B. Right Panel (Deep Black Technical)
1. **Topline Navigation**:
   - `■ METRIK UTAMA & DAMPAK`
   - Size: `12.5px`, Weight: `800`, Letter-spacing: `0.12em`, Color: `#ffffff`.
   - Bottom border: `1px solid rgba(255, 255, 255, 0.15)`.
2. **Section Heading (`ANGKA KUNCI`)**:
   - Size: `14px`, Weight: `900`, Letter-spacing: `0.12em`, Color: `#ffffff`.
3. **2x2 Stats Grid**:
   - Numbers (`40+`, `2.000+`, `230.000+`, `600+ Users`):
     - Size: `64px`, Weight: `900`, Letter-spacing: `-0.04em`, Color: `#e11d24`.
   - Labels below numbers:
     - Size: `15px`, Weight: `500`, Color: `#94a3b8`, Margin-top: `6px`.
     - Stat 1: `Cabang`
     - Stat 2: `Proyek Toko`
     - Stat 3: `Dokumen Terarsip (Google Drive)`
     - Stat 4: `Pengguna Aktif (Cabang & Kontraktor)`
   - Hairline Cross Divider: `1px solid rgba(255, 255, 255, 0.12)`.
4. **Section Heading (`FITUR & INOVASI TEKNIS`)**:
   - Size: `14px`, Weight: `900`, Letter-spacing: `0.12em`, Color: `#ffffff`.
5. **Innovations Items**:
   - Titles (`• Concurrency Lock`, etc.): `16px`, Weight: `800`, Color: `#ffffff`.
   - Descriptions: `14px`, Line-height: `1.45`, Color: `#94a3b8`.
6. **Technology Container (`TEKNOLOGI`)**:
   - Label: `11.5px`, Weight: `850`, Letter-spacing: `0.16em`, Color: `#94a3b8`.
   - List: `14.5px`, Weight: `600`, Color: `#ffffff`.
   - Official PostgreSQL elephant SVG icon: `28px x 28px`.
7. **Right Footer**:
   - Size: `12px`, Weight: `800`, Color: `#94a3b8`, Letter-spacing: `0.12em`.
