/*
 * Backup snapshot of the cinematic portrait reveal and desktop tilt.
 * This file is intentionally not loaded by home.html.
 */
const portrait = document.querySelector('.hero-portrait');
const portraitImage = portrait?.querySelector('.hero-image');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const supportsTilt = window.matchMedia('(min-width: 769px) and (hover: hover) and (pointer: fine)');
let tiltFrame = null;
let pointerPosition = null;

const revealPortrait = () => {
  requestAnimationFrame(() => portrait?.classList.add('is-revealing'));
};

if (portrait && portraitImage) {
  if (portraitImage.complete && portraitImage.naturalWidth > 0) {
    revealPortrait();
  } else {
    portraitImage.addEventListener('load', revealPortrait, { once: true });
  }

  const resetTilt = () => {
    portrait.style.removeProperty('--portrait-tilt-x');
    portrait.style.removeProperty('--portrait-tilt-y');
  };

  const applyTilt = () => {
    tiltFrame = null;
    if (!pointerPosition) return;

    const bounds = portrait.getBoundingClientRect();
    const horizontal = (pointerPosition.x - bounds.left) / bounds.width - 0.5;
    const vertical = (pointerPosition.y - bounds.top) / bounds.height - 0.5;
    portrait.style.setProperty('--portrait-tilt-x', `${-vertical * 5}deg`);
    portrait.style.setProperty('--portrait-tilt-y', `${horizontal * 6}deg`);
  };

  const handlePointerMove = (event) => {
    pointerPosition = { x: event.clientX, y: event.clientY };
    if (tiltFrame === null) {
      tiltFrame = requestAnimationFrame(applyTilt);
    }
  };

  const disableTilt = () => {
    portrait.removeEventListener('pointermove', handlePointerMove);
    portrait.removeEventListener('pointerleave', resetTilt);
    if (tiltFrame !== null) {
      cancelAnimationFrame(tiltFrame);
      tiltFrame = null;
    }
    pointerPosition = null;
    resetTilt();
  };

  const updateTilt = () => {
    disableTilt();
    if (!reducedMotion.matches && supportsTilt.matches) {
      portrait.addEventListener('pointermove', handlePointerMove);
      portrait.addEventListener('pointerleave', resetTilt);
    }
  };

  reducedMotion.addEventListener('change', updateTilt);
  supportsTilt.addEventListener('change', updateTilt);
  updateTilt();
}
