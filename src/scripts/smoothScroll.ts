// Smooth scroll "stile Apple" con Lenis.
// Disattivato automaticamente se l'utente preferisce ridurre le animazioni.
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

export function initSmoothScroll(): Lenis | undefined {
  if (typeof window === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const lenis = new Lenis({
    duration: 1.1,
    smoothWheel: true,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  return lenis;
}
