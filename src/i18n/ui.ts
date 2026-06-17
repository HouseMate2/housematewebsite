// ============================================================================
// HouseMate — Dizionario testi (i18n)
// ----------------------------------------------------------------------------
// Tutti i testi del sito passano da qui, così aggiungere/curare una lingua
// significa solo aggiornare questo file. `it` è la lingua di riferimento.
// ============================================================================

export const languages = {
  it: 'Italiano',
  en: 'English',
} as const;

export const defaultLang = 'it';

export type Lang = keyof typeof languages;

// Rotte localizzate: gli slug possono differire tra lingue (più SEO-friendly).
// Se aggiungi una pagina, aggiungila qui e crea i file in src/pages/.
export const routes = {
  it: {
    home: '/',
    features: '/#funzionalita',
    how: '/#come-funziona',
    business: '/#business',
    download: '/#download',
    contact: '/contatti',
    terms: '/termini',
    privacy: '/privacy',
    cookie: '/cookie',
  },
  en: {
    home: '/en/',
    features: '/en/#features',
    how: '/en/#how-it-works',
    business: '/en/#business',
    download: '/en/#download',
    contact: '/en/contact',
    terms: '/en/terms',
    privacy: '/en/privacy',
    cookie: '/en/cookie',
  },
} as const;

export const ui = {
  it: {
    'site.description':
      'HouseMate è l’app che semplifica la ricerca di stanze e coinquilini. Scopri come funziona e scarica l’app.',

    'nav.features': 'Funzionalità',
    'nav.how': 'Come funziona',
    'nav.business': 'Per i business',
    'nav.contact': 'Contatti',
    'nav.download': 'Scarica l’app',
    'nav.menu': 'Menu',

    'hero.badge': 'La tua casa condivisa, semplice',
    'hero.title': 'Trova la stanza giusta. Trova i coinquilini giusti.',
    'hero.subtitle':
      'HouseMate mette in contatto chi cerca una stanza e chi la affitta, con un’esperienza pensata per smartphone. [PLACEHOLDER: rifinisci con la tua value proposition reale.]',
    'hero.ctaPrimary': 'Scarica l’app',
    'hero.ctaSecondary': 'Sei un business?',

    'features.title': 'Tutto quello che ti serve, in un’unica app',
    'features.subtitle':
      '[PLACEHOLDER] Inserisci qui le 3–6 funzionalità chiave dell’app.',

    'how.title': 'Come funziona',
    'how.subtitle': '[PLACEHOLDER] Spiega il percorso utente in pochi passaggi.',

    'business.title': 'Affitti camere? HouseMate lavora per te.',
    'business.subtitle':
      '[PLACEHOLDER] Spiega il valore per i business: visibilità, gestione annunci, contatti qualificati.',
    'business.cta': 'Contattaci',

    'download.title': 'Pronto a iniziare?',
    'download.subtitle': 'Scarica HouseMate e trova la tua prossima casa.',

    'footer.tagline': 'La casa condivisa, resa semplice.',
    'footer.product': 'Prodotto',
    'footer.company': 'Azienda',
    'footer.legal': 'Note legali',
    'footer.rights': 'Tutti i diritti riservati.',

    'contact.title': 'Contatta HouseMate',
    'contact.subtitle':
      'Sei un business e vuoi pubblicare le tue camere su HouseMate? Scrivici e ti rispondiamo a breve.',
    'contact.name': 'Nome',
    'contact.email': 'Email',
    'contact.company': 'Azienda / Struttura',
    'contact.message': 'Messaggio',
    'contact.submit': 'Invia richiesta',

    'legal.draftNotice':
      '⚠️ Questo è un testo segnaposto. Sostituiscilo con il documento legale definitivo, possibilmente revisionato da un professionista.',
  },
  en: {
    'site.description':
      'HouseMate is the app that makes finding rooms and roommates easy. See how it works and download the app.',

    'nav.features': 'Features',
    'nav.how': 'How it works',
    'nav.business': 'For business',
    'nav.contact': 'Contact',
    'nav.download': 'Get the app',
    'nav.menu': 'Menu',

    'hero.badge': 'Shared living, made simple',
    'hero.title': 'Find the right room. Find the right roommates.',
    'hero.subtitle':
      'HouseMate connects people looking for a room with those renting one, in a mobile-first experience. [PLACEHOLDER: refine with your real value proposition.]',
    'hero.ctaPrimary': 'Get the app',
    'hero.ctaSecondary': 'Are you a business?',

    'features.title': 'Everything you need, in one app',
    'features.subtitle':
      '[PLACEHOLDER] Add your 3–6 key app features here.',

    'how.title': 'How it works',
    'how.subtitle': '[PLACEHOLDER] Explain the user journey in a few steps.',

    'business.title': 'Renting out rooms? HouseMate works for you.',
    'business.subtitle':
      '[PLACEHOLDER] Explain the value for businesses: visibility, listing management, qualified leads.',
    'business.cta': 'Get in touch',

    'download.title': 'Ready to start?',
    'download.subtitle': 'Download HouseMate and find your next home.',

    'footer.tagline': 'Shared living, made simple.',
    'footer.product': 'Product',
    'footer.company': 'Company',
    'footer.legal': 'Legal',
    'footer.rights': 'All rights reserved.',

    'contact.title': 'Contact HouseMate',
    'contact.subtitle':
      'Are you a business and want to list your rooms on HouseMate? Write to us and we’ll get back to you soon.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.company': 'Company',
    'contact.message': 'Message',
    'contact.submit': 'Send request',

    'legal.draftNotice':
      '⚠️ This is placeholder text. Replace it with the final legal document, ideally reviewed by a professional.',
  },
} as const;
