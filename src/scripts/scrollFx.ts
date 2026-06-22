// Effetti legati allo scroll (scrub) con GSAP ScrollTrigger.
// NB: nessun Lenis qui → ScrollTrigger lavora sullo scroll nativo (robusto).
// Anima SOLO transform (fluido, GPU) e parte da uno stato visibile,
// così il contenuto non resta mai nascosto. Disattivato se reduced-motion.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initScrollFx(): void {
  if (typeof window === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  gsap.registerPlugin(ScrollTrigger);

  const drift = (selector: string, fromY: number, toY: number) => {
    gsap.utils.toArray<HTMLElement>(selector).forEach((el) => {
      gsap.fromTo(
        el,
        { y: fromY },
        {
          y: toY,
          ease: 'none',
          scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 0.5 },
        },
      );
    });
  };

  // Telefoni sovrapposti: slittano in verticale in direzioni opposte.
  drift('[data-fx="drift-up"]', 36, -36);
  drift('[data-fx="drift-down"]', -28, 28);

  // Telefoni singoli nei pannelli: leggera scala (parallax).
  gsap.utils.toArray<HTMLElement>('[data-fx="parallax"]').forEach((el) => {
    gsap.fromTo(
      el,
      { scale: 0.94 },
      {
        scale: 1.03,
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 0.5 },
      },
    );
  });

  // Ricalcola le posizioni quando i font cambiano il layout.
  if (document.fonts?.ready) {
    document.fonts.ready.then(() => ScrollTrigger.refresh());
  }
}
