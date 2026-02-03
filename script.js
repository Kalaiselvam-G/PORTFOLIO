const frame = document.getElementById("frame");

const totalFrames = 240;

function getFramePath(index) {
  return `images/ezgif-frame-${String(index).padStart(3, "0")}.jpg`;
}

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const maxScroll =
    document.documentElement.scrollHeight - window.innerHeight;

  const scrollFraction = scrollTop / maxScroll;

  const frameIndex = Math.min(
    totalFrames,
    Math.floor(scrollFraction * totalFrames) + 1
  );

  frame.src = getFramePath(frameIndex);
});
