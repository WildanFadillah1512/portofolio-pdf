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
