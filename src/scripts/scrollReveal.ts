// Reveal degli elementi allo scorrimento con GSAP + ScrollTrigger.
// Aggiungi l'attributo `data-animate` a qualsiasi elemento per animarlo.
// Esempi: data-animate (default), data-animate="fade", data-animate="left".
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initScrollReveal(): void {
  if (typeof window === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  gsap.registerPlugin(ScrollTrigger);

  const elements = gsap.utils.toArray<HTMLElement>('[data-animate]');

  elements.forEach((el) => {
    const variant = el.dataset.animate || 'up';
    const from: gsap.TweenVars = { opacity: 0, duration: 0.9, ease: 'power3.out' };

    if (variant === 'up' || variant === '') from.y = 48;
    if (variant === 'left') from.x = -48;
    if (variant === 'right') from.x = 48;

    gsap.from(el, {
      ...from,
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  });
}
