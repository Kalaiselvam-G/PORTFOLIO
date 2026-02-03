const img = document.getElementById("bgFrame");
const TOTAL_FRAMES = 240;
let current = 1;
let ticking = false;

function frameSrc(i) {
  return `images/ezgif-frame-${String(i).padStart(3, "0")}.jpg`;
}

function updateFrame() {
  const scrollTop = window.scrollY;
  const maxScroll =
    document.documentElement.scrollHeight - window.innerHeight;

  const progress = Math.min(scrollTop / maxScroll, 1);
  const frameIndex = Math.floor(progress * (TOTAL_FRAMES - 1)) + 1;

  if (frameIndex !== current) {
    current = frameIndex;
    img.src = frameSrc(current);
  }

  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(updateFrame);
    ticking = true;
  }
});

/* Preload frames for smoothness */
for (let i = 1; i <= TOTAL_FRAMES; i++) {
  const preload = new Image();
  preload.src = frameSrc(i);
}
