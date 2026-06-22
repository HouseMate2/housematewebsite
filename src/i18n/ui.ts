// ============================================================================
// HouseMate - Site copy dictionary (i18n)
// ============================================================================

export const languages = {
  it: 'Italiano',
  en: 'English',
} as const;

export const defaultLang = 'it';

export type Lang = keyof typeof languages;

export const routes = {
  it: {
    home: '/',
    features: '/#funzionalita',
    how: '/#come-funziona',
    business: '/#business',
    download: '/#download',
    contact: '/#contatti',
    terms: '/termini',
    privacy: '/privacy',
    cookie: '/cookie',
    community: '/linee-guida-community',
  },
  en: {
    home: '/en/',
    features: '/en/#features',
    how: '/en/#how-it-works',
    business: '/en/#business',
    download: '/en/#download',
    contact: '/en/#contatti',
    terms: '/en/terms',
    privacy: '/en/privacy',
    cookie: '/en/cookie',
    community: '/en/community-guidelines',
  },
} as const;

export const ui = {
  it: {
    'site.description':
      "HouseMate e' l'app che semplifica la ricerca di stanze e coinquilini. Scopri come funziona e scarica l'app.",

    'nav.features': 'Funzionalita',
    'nav.how': 'Come funziona',
    'nav.business': 'Per i business',
    'nav.contact': 'Contatti',
    'nav.download': "Scarica l'app",
    'nav.menu': 'Menu',

    'hero.badge': 'La tua casa condivisa, semplice',
    'hero.title': 'Trova la stanza giusta. Trova i coinquilini giusti.',
    'hero.subtitle':
      "HouseMate mette in contatto chi cerca una stanza e chi la affitta, con un'esperienza pensata per smartphone.",
    'hero.ctaPrimary': "Scarica l'app",
    'hero.ctaSecondary': 'Sei un business?',

    'features.title': "Tutto quello che ti serve, in un'unica app",
    'features.subtitle': 'Scopri stanze, coinquilini, match e chat in modo semplice.',

    'how.title': 'Come funziona',
    'how.subtitle': 'Completa il profilo, scopri match e organizza tutto in chat.',

    'business.title': 'Affitti camere? HouseMate lavora per te.',
    'business.subtitle':
      'Pubblica stanze, ricevi richieste qualificate e gestisci i contatti in un unico posto.',
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
      'Bozza pre-lancio: documento predisposto sulla base delle funzionalita attuali di HouseMate.',
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
      'HouseMate connects people looking for a room with those renting one, in a mobile-first experience.',
    'hero.ctaPrimary': 'Get the app',
    'hero.ctaSecondary': 'Are you a business?',

    'features.title': 'Everything you need, in one app',
    'features.subtitle': 'Discover rooms, roommates, matches and chats in one simple flow.',

    'how.title': 'How it works',
    'how.subtitle': 'Complete your profile, discover matches and organize everything in chat.',

    'business.title': 'Renting out rooms? HouseMate works for you.',
    'business.subtitle':
      'Publish rooms, receive qualified requests and manage contacts in one place.',
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
      'Are you a business and want to list your rooms on HouseMate? Write to us and we will get back to you soon.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.company': 'Company',
    'contact.message': 'Message',
    'contact.submit': 'Send request',

    'legal.draftNotice':
      'Pre-launch draft: this document is based on the current HouseMate product scope. Before commercial launch, add the controller details and have the text reviewed by a qualified professional.',
  },
} as const;
