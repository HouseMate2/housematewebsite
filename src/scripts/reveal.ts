// Reveal a scorrimento robusto: aggiunge la classe `.in-view` agli elementi
// con [data-animate] quando entrano nel viewport. Il CSS fa il resto.
// Fallback sicuro: se non c'è JS o si preferiscono meno animazioni,
// gli elementi restano comunque visibili (vedi global.css).
export function initReveal(): void {
  if (typeof window === 'undefined') return;
  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-animate]'));
  if (!els.length) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('in-view'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18, rootMargin: '0px 0px -12% 0px' },
  );

  els.forEach((el) => io.observe(el));
}
