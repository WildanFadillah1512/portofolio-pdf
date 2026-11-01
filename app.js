const slides = [...document.querySelectorAll(".slide")];
const counter = document.querySelector("[data-counter]");
const progress = document.querySelector("[data-progress]");
const prevButton = document.querySelector("[data-prev]");
const nextButton = document.querySelector("[data-next]");
const fullscreenButton = document.querySelector("[data-fullscreen]");
const viewport = document.querySelector("#viewport");
const deck = document.querySelector("#deck");
let current = Math.max(0, Math.min(slides.length - 1, Number(location.hash.slice(1)) - 1 || 0));
let touchStartX = 0;

function fitDeck() {
  if (!deck) return;
  const scale = Math.min(innerWidth / 1600, innerHeight / 900);
  deck.style.setProperty("--deck-scale", scale);
}

function show(index) {
  if (slides.length === 0) return;
  current = Math.max(0, Math.min(slides.length - 1, index));
  
  slides.forEach((slide, i) => {
    const active = i === current;
    slide.classList.toggle("is-active", active);
    slide.toggleAttribute("inert", !active);
    slide.setAttribute("aria-hidden", String(!active));
  });

  if (counter) {
    counter.textContent = `${String(current + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
  }
  if (progress) {
    progress.style.width = `${((current + 1) / slides.length) * 100}%`;
  }
  if (prevButton) {
    prevButton.disabled = current === 0;
  }
  if (nextButton) {
    nextButton.disabled = current === slides.length - 1;
  }

  history.replaceState(null, "", `#${current + 1}`);
}

function move(delta) {
  show(current + delta);
}

async function toggleFullscreen() {
  if (!document.fullscreenEnabled) return;
  try {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else if (viewport) {
      await viewport.requestFullscreen();
    }
  } catch (err) {
    console.warn("Fullscreen toggle error:", err);
  }
}

// Event Listeners
window.addEventListener("resize", fitDeck);

window.addEventListener("hashchange", () => {
  const target = Number(location.hash.slice(1)) - 1;
  if (Number.isInteger(target) && target !== current && target >= 0 && target < slides.length) {
    show(target);
  }
});

window.addEventListener("keydown", (event) => {
  // Ignore shortcuts if an input/textarea is focused or if lightbox is open
  if (["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)) return;

  const lightbox = document.getElementById("lightbox-modal");
  const isLightboxOpen = lightbox && lightbox.classList.contains("is-open");

  if (isLightboxOpen) {
    if (event.key === "Escape") {
      closeLightbox();
    }
    return;
  }

  if (["ArrowRight", "PageDown", " "].includes(event.key)) {
    event.preventDefault();
    move(1);
  }
  if (["ArrowLeft", "PageUp"].includes(event.key)) {
    event.preventDefault();
    move(-1);
  }
  if (event.key === "Home") {
    event.preventDefault();
    show(0);
  }
  if (event.key === "End") {
    event.preventDefault();
    show(slides.length - 1);
  }
  if (event.key.toLowerCase() === "f") {
    event.preventDefault();
    toggleFullscreen();
  }
});

if (prevButton) prevButton.addEventListener("click", () => move(-1));
if (nextButton) nextButton.addEventListener("click", () => move(1));
if (fullscreenButton) fullscreenButton.addEventListener("click", toggleFullscreen);

if (viewport) {
  viewport.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].clientX;
  }, { passive: true });

  viewport.addEventListener("touchend", (event) => {
    const distance = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(distance) > 60) {
      move(distance < 0 ? 1 : -1);
    }
  }, { passive: true });
}

document.addEventListener("fullscreenchange", fitDeck);

/* ==========================================================================
   ALFAMART WIDESCREEN STAGE TAB SWITCHER & LIGHTBOX MODAL LOGIC
   ========================================================================== */

// Lightbox Modal Functions
const lightboxModal = document.getElementById("lightbox-modal");
const lightboxImg = lightboxModal?.querySelector(".lightbox-img");
const lightboxTitle = lightboxModal?.querySelector(".lightbox-title");
const lightboxCaption = lightboxModal?.querySelector(".lightbox-caption-text");
const lightboxCloseBtn = lightboxModal?.querySelector(".lightbox-close");
const lightboxBackdrop = lightboxModal?.querySelector(".lightbox-backdrop");

function openLightbox(imgSrc, titleText, captionText) {
  if (!lightboxModal || !lightboxImg) return;
  lightboxImg.src = imgSrc;
  lightboxImg.alt = titleText || "Pratinjau Sistem";
  if (lightboxTitle) lightboxTitle.textContent = titleText || "Pratinjau Resolusi Penuh";
  if (lightboxCaption) lightboxCaption.textContent = captionText || "PT Sumber Alfaria Trijaya Tbk (Alfamart)";
  lightboxModal.classList.add("is-open");
  lightboxModal.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  if (!lightboxModal) return;
  lightboxModal.classList.remove("is-open");
  lightboxModal.setAttribute("aria-hidden", "true");
}

if (lightboxCloseBtn) lightboxCloseBtn.addEventListener("click", closeLightbox);
if (lightboxBackdrop) lightboxBackdrop.addEventListener("click", closeLightbox);

// Alfamart Segmented Asset Tab Switchers (Slide 10 for Building, Slide 12 for DC)
document.querySelectorAll(".asset-selector-pills").forEach((pillsGroup) => {
  const buttons = pillsGroup.querySelectorAll(".asset-pill-btn");
  const slide = pillsGroup.closest(".slide");
  if (!slide) return;

  const viewport = slide.querySelector(".stage-viewport");
  const stageImgs = viewport ? viewport.querySelectorAll(".stage-img") : [];
  const titleEl = slide.querySelector(".canvas-spec-label");
  const badgeEl = slide.querySelector(".canvas-badge-live");
  const refEl = slide.querySelector(".canvas-doc-id");
  const ann1El = slide.querySelector('[id$="-ann-1"]');
  const ann2El = slide.querySelector('[id$="-ann-2"]');
  const ann3El = slide.querySelector('[id$="-ann-3"]');

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");

      const targetId = btn.dataset.assetTarget;
      stageImgs.forEach((img) => {
        if (img.dataset.assetId === targetId) {
          img.classList.add("is-active");
          if (titleEl) titleEl.innerHTML = img.dataset.title || "";
          if (badgeEl) badgeEl.textContent = img.dataset.badge || "PRODUKSI";
          if (refEl) refEl.textContent = img.dataset.ref || "";
          if (ann1El) ann1El.innerHTML = img.dataset.annotation1 || "";
          if (ann2El) ann2El.innerHTML = img.dataset.annotation2 || "";
          if (ann3El) ann3El.innerHTML = img.dataset.annotation3 || "";
        } else {
          img.classList.remove("is-active");
        }
      });
    });
  });
});

// Helper to get active stage image
function getActiveStageImage(triggerEl) {
  const container = triggerEl.closest(".assets-showcase-frame") ||
                    triggerEl.closest(".slide");
  if (!container) return null;
  return container.querySelector(".stage-img.is-active") || container.querySelector(".stage-img");
}

// Stage Zoom Button Trigger
document.querySelectorAll(".stage-zoom-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const activeImg = getActiveStageImage(btn);
    if (activeImg) {
      const slide = btn.closest(".slide");
      const titleText = activeImg.dataset.title || slide?.querySelector(".canvas-spec-label")?.textContent.trim() || activeImg.alt;
      const captionText = activeImg.dataset.ref ? `${activeImg.dataset.ref} • PT Sumber Alfaria Trijaya Tbk` : "PT Sumber Alfaria Trijaya Tbk (Alfamart)";
      openLightbox(activeImg.src, titleText, captionText);
    }
  });
});

// Click on Stage Viewport to Zoom
document.querySelectorAll(".stage-viewport").forEach((viewportEl) => {
  viewportEl.addEventListener("click", () => {
    const activeImg = viewportEl.querySelector(".stage-img.is-active") || viewportEl.querySelector(".stage-img");
    if (activeImg) {
      const slide = viewportEl.closest(".slide");
      const titleText = activeImg.dataset.title || slide?.querySelector(".canvas-spec-label")?.textContent.trim() || activeImg.alt;
      const captionText = activeImg.dataset.ref ? `${activeImg.dataset.ref} • PT Sumber Alfaria Trijaya Tbk` : "PT Sumber Alfaria Trijaya Tbk (Alfamart)";
      openLightbox(activeImg.src, titleText, captionText);
    }
  });
});

// Zoom generik untuk screenshot proyek. Caption diambil dari data-caption (default: AstroLearn, proyek 01)
document.querySelectorAll("[data-zoom]").forEach((el) => {
  el.addEventListener("click", () => {
    const img = el.querySelector("img");
    if (img) openLightbox(img.src, el.dataset.title, el.dataset.caption || "AstroLearn \u00b7 https://education-tatasurya.netlify.app/");
  });
});

// Initial initialization
fitDeck();
show(current);



