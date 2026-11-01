import os
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright
import fitz  # PyMuPDF

def main():
    root_dir = Path(__file__).resolve().parent.parent
    index_html = root_dir / "index.html"
    export_dir = root_dir / "exports"
    png_dir = export_dir / "png"

    export_dir.mkdir(parents=True, exist_ok=True)
    png_dir.mkdir(parents=True, exist_ok=True)

    if not index_html.exists():
        print(f"Error: {index_html} tidak ditemukan!")
        sys.exit(1)

    url = index_html.as_uri()
    print("=" * 60)
    print("  OTOMATISASI EKSPOR PORTOFOLIO KE PDF & PNG ULTRA-SHARP")
    print("=" * 60)
    print(f"Index HTML : {url}")
    print(f"Output PNG : {png_dir}")
    print(f"Output PDF : {export_dir / 'portofolio-wildan-fadillah.pdf'}")
    print("-" * 60)

    with sync_playwright() as p:
        print("Launching headless Chromium (Scale 2x: 3200x1800)...")
        browser = p.chromium.launch(headless=True)
        # 1600x900 viewport with device_scale_factor=2 produces 3200x1800 high-DPI screenshots
        page = browser.new_page(viewport={"width": 1600, "height": 900}, device_scale_factor=2)
        page.goto(url)
        page.wait_for_load_state("networkidle")
        page.evaluate("document.fonts.ready")

        # Injeksi CSS untuk menghilangkan UI navigasi dan memastikan data-step instan
        page.add_style_tag(content="""
            .nav, .hint, .progress-track, #lightbox-modal {
                display: none !important;
            }
            * {
                animation: none !important;
                transition: none !important;
            }
            [data-step] {
                opacity: 1 !important;
                transform: none !important;
            }
        """)

        total_slides = page.evaluate("slides.length")
        print(f"Terdeteksi {total_slides} slide dalam dokumen portofolio.\n")

        deck_el = page.query_selector("#deck")
        if not deck_el:
            print("Error: Elemen #deck tidak ditemukan!")
            browser.close()
            sys.exit(1)

        png_files = []
        for i in range(total_slides):
            slide_num = i + 1
            png_filename = f"slide-{slide_num:02d}.png"
            png_path = png_dir / png_filename

            # Pindah ke slide target
            page.evaluate(f"show({i})")
            page.wait_for_timeout(250)

            # Ambil screenshot elemen #deck dengan kualitas penuh
            deck_el.screenshot(path=str(png_path))
            file_size_kb = png_path.stat().st_size / 1024
            png_files.append(png_path)
            print(f"  [{slide_num:02d}/{total_slides:02d}] {png_filename} ({file_size_kb:.1f} KB) - OK")

        browser.close()
        print("\nSemua file PNG berhasil disimpan!")

    # Menggabungkan seluruh PNG ke PDF beresolusi tinggi menggunakan PyMuPDF
    print("\nMenyusun PDF presentasi 16:9 dari seluruh PNG...")
    pdf_path = export_dir / "portofolio-wildan-fadillah.pdf"
    doc = fitz.open()

    for idx, png_file in enumerate(png_files):
        # 1600 x 900 points (standard 16:9 presentation page)
        page = doc.new_page(width=1600, height=900)
        page.insert_image(fitz.Rect(0, 0, 1600, 900), filename=str(png_file))

    doc.save(str(pdf_path), deflate=True, garbage=4)
    doc.close()

    pdf_size_mb = pdf_path.stat().st_size / (1024 * 1024)
    print(f"PDF berhasil dibuat: {pdf_path.name} ({pdf_size_mb:.2f} MB)")
    print("=" * 60)
    print("  EKSPOR SELESAI DENGAN SUKSES!")
    print("=" * 60)

if __name__ == "__main__":
    main()
