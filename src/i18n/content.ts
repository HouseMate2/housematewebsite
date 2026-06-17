// ============================================================================
// HOUSEMATE — Contenuti della landing (copy IT/EN)
// ----------------------------------------------------------------------------
// Tutto il testo della home sta qui. È una BOZZA realistica: rifinisci i
// messaggi con la tua value proposition reale. Gli `icon` sono nomi gestiti
// dal componente Icon.astro. I numeri in `stats` sono placeholder.
// ============================================================================
import type { Lang } from './ui';

export interface Feature {
  icon: string;
  title: string;
  text: string;
}

export interface HomeContent {
  hero: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    rating: string;
  };
  featuresEyebrow: string;
  featuresTitle: string;
  features: Feature[];
  business: {
    eyebrow: string;
    title: string;
    text: string;
    bullets: string[];
    cta: string;
  };
  miniEyebrow: string;
  miniTitle: string;
  miniFeatures: Feature[];
  stats: { value: string; label: string }[];
  testimonialsEyebrow: string;
  testimonialsTitle: string;
  testimonials: { quote: string; name: string; role: string }[];
  finalCta: { title: string; subtitle: string };
}

export const homeContent: Record<Lang, HomeContent> = {
  it: {
    hero: {
      badge: 'La casa condivisa, semplice',
      title: 'Trova la stanza giusta.',
      titleAccent: 'Trova i coinquilini giusti.',
      subtitle:
        'HouseMate mette in contatto chi cerca una stanza e chi la affitta. Annunci verificati, chat sicura e match intelligente — tutto in un’unica app.',
      ctaPrimary: 'Scarica l’app',
      ctaSecondary: 'Affitti camere?',
      rating: '4,8 ★ · oltre 10.000 download',
    },
    featuresEyebrow: 'Come funziona',
    featuresTitle: 'Tutto quello che ti serve per vivere bene insieme',
    features: [
      {
        icon: 'search',
        title: 'Cerca senza stress',
        text: 'Filtra per zona, prezzo e stile di vita. Vedi solo le stanze che fanno davvero per te.',
      },
      {
        icon: 'users',
        title: 'Match con i coinquilini',
        text: 'Abbiniamo abitudini e interessi: scopri se andate d’accordo prima ancora di traslocare.',
      },
      {
        icon: 'message',
        title: 'Chat sicura e diretta',
        text: 'Parla con inquilini e gestori dentro l’app, senza dover condividere il tuo numero.',
      },
      {
        icon: 'shield',
        title: 'Annunci verificati',
        text: 'Ogni inserzionista viene verificato: meno sorprese, più tranquillità per te.',
      },
    ],
    business: {
      eyebrow: 'Per i business',
      title: 'Affitti camere? HouseMate lavora per te.',
      text:
        'Pubblica le tue stanze, raggiungi inquilini in target e gestisci ogni richiesta da un’unica dashboard.',
      bullets: [
        'Annunci sempre in evidenza nelle ricerche',
        'Contatti qualificati, niente perditempo',
        'Richieste e calendario in un posto solo',
        'Statistiche chiare sulle tue inserzioni',
      ],
      cta: 'Contattaci',
    },
    miniEyebrow: 'E non è tutto',
    miniTitle: 'Pensata nei minimi dettagli',
    miniFeatures: [
      { icon: 'map', title: 'Mappa interattiva', text: 'Esplora i quartieri.' },
      { icon: 'heart', title: 'Preferiti', text: 'Salva le stanze top.' },
      { icon: 'bell', title: 'Notifiche smart', text: 'Avvisi sui nuovi annunci.' },
      { icon: 'star', title: 'Recensioni', text: 'Feedback trasparenti.' },
      { icon: 'file', title: 'Contratti digitali', text: 'Tutto in app.' },
      { icon: 'lock', title: 'Privacy', text: 'I tuoi dati al sicuro.' },
      { icon: 'globe', title: 'Multilingua', text: 'Italiano e inglese.' },
      { icon: 'home', title: 'Profilo casa', text: 'Racconta la convivenza.' },
    ],
    stats: [
      { value: '10K+', label: 'download' },
      { value: '2.500', label: 'stanze pubblicate' },
      { value: '30', label: 'città in Italia' },
      { value: '4,8★', label: 'valutazione media' },
    ],
    testimonialsEyebrow: 'Dicono di noi',
    testimonialsTitle: 'Persone che hanno trovato casa con HouseMate',
    testimonials: [
      {
        quote:
          'In una settimana ho trovato una stanza e dei coinquilini con cui vado d’accordo davvero. Zero stress.',
        name: 'Giulia R.',
        role: 'Studentessa, Milano',
      },
      {
        quote:
          'Il match sui coinquilini è geniale: niente più sorprese sul conto della casa o sugli orari.',
        name: 'Marco T.',
        role: 'Lavoratore, Bologna',
      },
      {
        quote:
          'Da quando pubblico le stanze su HouseMate ricevo solo contatti seri. Gestione tutta in un’app.',
        name: 'Anna L.',
        role: 'Property manager, Roma',
      },
    ],
    finalCta: {
      title: 'Pronto a trovare casa?',
      subtitle: 'Scarica HouseMate e trova la tua prossima stanza oggi stesso.',
    },
  },

  en: {
    hero: {
      badge: 'Shared living, made simple',
      title: 'Find the right room.',
      titleAccent: 'Find the right roommates.',
      subtitle:
        'HouseMate connects people looking for a room with those renting one. Verified listings, secure chat and smart matching — all in one app.',
      ctaPrimary: 'Get the app',
      ctaSecondary: 'Renting rooms?',
      rating: '4.8 ★ · 10,000+ downloads',
    },
    featuresEyebrow: 'How it works',
    featuresTitle: 'Everything you need to live well together',
    features: [
      {
        icon: 'search',
        title: 'Search without stress',
        text: 'Filter by area, price and lifestyle. See only the rooms that are right for you.',
      },
      {
        icon: 'users',
        title: 'Match with roommates',
        text: 'We match habits and interests, so you know you’ll get along before you move in.',
      },
      {
        icon: 'message',
        title: 'Secure, direct chat',
        text: 'Talk to tenants and managers inside the app, without sharing your number.',
      },
      {
        icon: 'shield',
        title: 'Verified listings',
        text: 'Every advertiser is verified: fewer surprises, more peace of mind.',
      },
    ],
    business: {
      eyebrow: 'For business',
      title: 'Renting rooms? HouseMate works for you.',
      text:
        'Publish your rooms, reach the right tenants and manage every request from a single dashboard.',
      bullets: [
        'Listings always highlighted in search',
        'Qualified leads, no time-wasters',
        'Requests and calendar in one place',
        'Clear stats on your listings',
      ],
      cta: 'Get in touch',
    },
    miniEyebrow: 'And that’s not all',
    miniTitle: 'Designed down to the last detail',
    miniFeatures: [
      { icon: 'map', title: 'Interactive map', text: 'Explore neighbourhoods.' },
      { icon: 'heart', title: 'Favourites', text: 'Save the best rooms.' },
      { icon: 'bell', title: 'Smart alerts', text: 'New listings, instantly.' },
      { icon: 'star', title: 'Reviews', text: 'Transparent feedback.' },
      { icon: 'file', title: 'Digital contracts', text: 'All in the app.' },
      { icon: 'lock', title: 'Privacy', text: 'Your data, secured.' },
      { icon: 'globe', title: 'Multilingual', text: 'Italian and English.' },
      { icon: 'home', title: 'Home profile', text: 'Show the living vibe.' },
    ],
    stats: [
      { value: '10K+', label: 'downloads' },
      { value: '2,500', label: 'rooms listed' },
      { value: '30', label: 'cities in Italy' },
      { value: '4.8★', label: 'average rating' },
    ],
    testimonialsEyebrow: 'Testimonials',
    testimonialsTitle: 'People who found a home with HouseMate',
    testimonials: [
      {
        quote:
          'In a week I found a room and roommates I genuinely get along with. Zero stress.',
        name: 'Giulia R.',
        role: 'Student, Milan',
      },
      {
        quote:
          'The roommate matching is brilliant: no more surprises about bills or schedules.',
        name: 'Marco T.',
        role: 'Professional, Bologna',
      },
      {
        quote:
          'Since I list rooms on HouseMate I only get serious leads. Everything managed in one app.',
        name: 'Anna L.',
        role: 'Property manager, Rome',
      },
    ],
    finalCta: {
      title: 'Ready to find a home?',
      subtitle: 'Download HouseMate and find your next room today.',
    },
  },
};

// Pannelli grandi (storytelling approfondito, telefono che emerge dalla card)
export interface Panel {
  icon: string;
  title: string;
  text: string;
  tint: string; // panel-peach | panel-cream | panel-rose
}

export const panels: Record<Lang, Panel[]> = {
  it: [
    {
      icon: 'users',
      title: 'Coinquilini su misura, non a caso',
      text: 'Rispondi a poche domande su orari, abitudini e interessi: HouseMate calcola la compatibilità e ti mostra le persone con cui andresti davvero d’accordo.',
      tint: 'panel-peach',
    },
    {
      icon: 'shield',
      title: 'Sicurezza e fiducia, prima di tutto',
      text: 'Profili e annunci verificati, chat protetta dentro l’app e recensioni reali: affitti e trovi casa senza pensieri.',
      tint: 'panel-cream',
    },
  ],
  en: [
    {
      icon: 'users',
      title: 'Roommates tailored to you, not random',
      text: 'Answer a few questions about your schedule, habits and interests: HouseMate computes compatibility and shows you the people you’d actually get along with.',
      tint: 'panel-peach',
    },
    {
      icon: 'shield',
      title: 'Safety and trust, first',
      text: 'Verified profiles and listings, protected in-app chat and real reviews: rent and find a home with peace of mind.',
      tint: 'panel-cream',
    },
  ],
};
