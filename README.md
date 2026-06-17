# HouseMate — Sito web

Sito vetrina (landing + contatti) della startup **HouseMate**, l'app che semplifica
la ricerca di stanze e coinquilini. Il sito racconta l'app e attrae sia utenti finali
sia business (chi affitta camere).

## Stack

- **[Astro](https://astro.build)** — generatore di siti statici, velocissimo e SEO-friendly
- **[Tailwind CSS v4](https://tailwindcss.com)** — styling con design system centralizzato
- **[GSAP + ScrollTrigger](https://gsap.com)** — animazioni a scorrimento
- **[Lenis](https://lenis.darkroom.engineering)** — smooth scroll "stile Apple"
- **i18n** — italiano (default) + inglese, via routing nativo di Astro

## Comandi

| Comando           | Azione                                          |
| ----------------- | ----------------------------------------------- |
| `npm install`     | Installa le dipendenze                          |
| `npm run dev`     | Avvia il server di sviluppo su `localhost:4321` |
| `npm run build`   | Compila il sito di produzione in `./dist/`      |
| `npm run preview` | Anteprima locale del build di produzione        |

## Struttura

```
src/
├─ components/        # Componenti riutilizzabili (Navbar, Footer, ContactForm…)
│  └─ sections/       # Sezioni della landing (Hero, PlaceholderSection…)
├─ i18n/              # ui.ts (testi IT/EN + rotte) e utils.ts (helper)
├─ layouts/           # BaseLayout (SEO/head), LegalLayout
├─ pages/             # Routing da file. IT alla root, EN sotto /en/
│  └─ en/
├─ scripts/           # smoothScroll, scrollReveal, main (entry client)
└─ styles/            # global.css (design tokens Tailwind v4)
public/               # Asset statici (favicon, og-image, robots.txt, screenshot)
```

## Internazionalizzazione

Tutti i testi stanno in `src/i18n/ui.ts`. Per aggiungere/modificare un testo,
aggiorna le chiavi sotto `it` ed `en`. Le rotte localizzate sono in `routes`.

## Da personalizzare (cerca i `TODO` / `PLACEHOLDER` nel codice)

- [ ] `astro.config.mjs` → `site`: dominio definitivo Aruba
- [ ] `src/styles/global.css`: palette colori ufficiale del brand
- [ ] `src/i18n/ui.ts`: copy reale (value proposition, funzionalità, business)
- [ ] `src/components/sections/Hero.astro`: screenshot reali dell'app
- [ ] `src/components/HomeContent.astro`: link reali App Store / Google Play
- [ ] `src/components/ContactForm.astro`: backend del form (Web3Forms / Resend)
- [ ] `src/components/Footer.astro`: ragione sociale, P.IVA, sede legale
- [ ] Pagine legali (`termini`, `privacy`, `cookie` + EN): testi definitivi
- [ ] `public/`: `favicon.svg`, `og-image.png` (1200×630)

## Deploy

Pensato per **Vercel** (o Netlify) collegato a Git: ogni push aggiorna il sito.
Il dominio Aruba si collega cambiando i record DNS verso l'host.
