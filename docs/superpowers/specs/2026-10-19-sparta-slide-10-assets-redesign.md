# SPARTA Slide 10 Assets Showcase Design Specification

## Overview
Slide 10 presents the production UI documentation of **SPARTA Building** with an Asymmetric Editorial Split layout matching the provided reference mockup:
- **Left Panel (34% width, Warm Cream `#f6f4ee`)**: Module overview, title, description, and 4 stacked cards summarizing each subsystem.
- **Right Panel (66% width, Deep Black `#0b0c10`)**: 2x2 grid of production screenshot showcases with custom dark card frames and metadata badges.

---

## 1. Visual Tokens & Dimensions

| Token | Value | Purpose |
|---|---|---|
| `--s10-cream` | `#f6f4ee` | Warm editorial paper background for the left panel |
| `--s10-card-cream` | `#ede9df` | Card background for the 4 left feature summaries |
| `--s10-dark` | `#0b0c10` | High-contrast technical black background for the right panel |
| `--s10-card-dark` | `#121318` | Dark container background for screenshot cards |
| `--s10-red` | `#e11d24` | Primary brand red for numbers, kickers, and accents |
| `--s10-ink` | `#111827` | Bold headlines on cream panel |
| `--s10-muted-dark` | `#94a3b8` | Meta tags and secondary text on black panel |

---

## 2. Layout Structure & Components

### A. Left Panel (Warm Cream Editorial ~34%)
1. **Topline**:
   - Left: `■ VISUALISASI SISTEM` (11.5px, bold, tracking 0.12em).
   - Right: `10 / ANTARMUKA` (11.5px, bold, tracking 0.12em).
   - Border bottom: `1.5px solid #111827`.
2. **Hero Header**:
   - Kicker: `CONTOH BEBERAPA TAMPILAN YANG ADA PADA` (Red `#e11d24`, uppercase, 13px, weight 850).
   - Main Title: `SPARTA BUILDING` (46px, weight 900, `#111827`, tracking -0.035em).
   - Subtitle: `` (24px, weight 850, `#111827`).
   - Accent Bar: 36px x 3.5px red horizontal rule.
   - Lead Paragraph: `Gambaran beberapa menu utama untuk memantau jalannya sistem yang ada pada SPARTA BUILDING.` (14.5px, color `#4b5563`, line-height 1.5).
3. **4 Feature Summary Cards**:
   - **Card 01**: `01 MONITORING TRACKING PROJEK` &mdash; *Memantau tahapan seluruh proyek toko secara menyeluruh, mulai dari perencanaan hingga serah terima.*
   - **Card 02**: `02 Performance Internal SAT` &mdash; *Melihat kinerja tim internal dalam ketepatan jadwal pengawasan dan kecepatan persetujuan dokumen.*
   - **Card 03**: `03 Performance Kontraktor` &mdash; *Menilai hasil kerja kontraktor dari ketepatan waktu, kualitas bangunan, hingga catatan Surat Peringatan (SP).*
   - **Card 04**: `04 Gantt Chart CPM` &mdash; *Tampilan jadwal visual untuk memudahkan pemantauan urutan kerja dan target waktu penyelesaian.*
4. **Left Footer**:
   - Left: `PT SUMBER ALFARIA TRIJAYA TBK` (11.5px bold).
   - Right: `BMES` (Red bold `#e11d24`).

---

### B. Right Panel (Deep Black Technical ~66%)
1. **Topline**:
   - Left: `■ DOKUMENTASI ANTARMUKA PRODUKSI` (11.5px bold white).
   - Right: `4 MODUL UTAMA` (11.5px bold `#94a3b8`).
   - Border bottom: `1px solid rgba(255, 255, 255, 0.15)`.
2. **2x2 Screenshot Cards Grid**:
   - **Card 1 (Top-Left)**:
     - Header: `01 MONITORING TRACKING PROJEK` (white bold) &bull; Tag: `2.057 TOKO`
     - Asset: `assets/MONITORING TRACKING PROJEK.png`
   - **Card 2 (Top-Right)**:
     - Header: `02 PERFORMANCE INTERNAL SAT` (white bold) &bull; Tag: `COST & SLA`
     - Asset: `assets/Performance internal SAT.png`
   - **Card 3 (Bottom-Left)**:
     - Header: `03 PERFORMANCE KONTRAKTOR` (white bold) &bull; Tag: `SKOR 88.9`
     - Asset: `assets/Performance Kontraktor.png`
   - **Card 4 (Bottom-Right)**:
     - Header: `04 GANTT CHART PENGAWASAN` (white bold) &bull; Tag: `TIMELINE CPM`
     - Asset: `assets/Gantt chart pengawasan.png`
   - Screenshot presentation: High-resolution cover with subtle border and crisp 16:9 aspect ratio.
3. **Right Footer**:
   - Left: `SPARTA BUILDING SYSTEM • PRODUCTION RELEASE` (11.5px `#94a3b8`).
