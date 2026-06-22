// ============================================================================
// HOUSEMATE — Contenuti della landing (copy IT/EN)
// ----------------------------------------------------------------------------
// Tutto il testo + l'assegnazione dei mockup sta qui.
// L'app è un "swipe per la casa condivisa": si scoprono Stanze (Houses) e
// Coinquilini (Mates), si mette like/si scarta, si fa match e si chatta.
// ============================================================================
import type { Lang } from './ui';

export interface Feature {
  icon: string;
  title: string;
  text: string;
}

export interface Shot {
  src: string;
  alt: string;
}

export interface Panel {
  icon: string;
  title: string;
  text: string;
  front: Shot; // mockup principale
  back?: Shot; // mockup secondario che si sovrappone (opzionale)
  tint: string; // panel-peach | panel-cream | panel-rose
}

export interface HomeContent {
  hero: {
    title: string;
    titleAccent: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    comingSoon: string;
  };
  featuresEyebrow: string;
  featuresTitle: string;
  panels: Panel[];
  miniEyebrow: string;
  miniTitle: string;
  miniFeatures: Feature[];
  business: {
    eyebrow: string;
    title: string;
    text: string;
    bullets: string[];
    contactEyebrow: string;
    contactTitle: string;
    contactText: string;
  };
}

const IMG = {
  houses: { src: '/images/discovery houses iPhone.webp', alt: 'Schermata HouseMate: scopri le stanze disponibili' },
  housesInfo: { src: '/images/discovery houses info iPhone.webp', alt: 'Schermata HouseMate: dettaglio di una stanza' },
  mates: { src: '/images/discovery mates iPhone.webp', alt: 'Schermata HouseMate: scopri i coinquilini' },
  matesInfo: { src: '/images/discovery mates infos iPhone.webp', alt: 'Schermata HouseMate: profilo di un coinquilino' },
  chat: { src: '/images/chat iPhone.webp', alt: 'Schermata HouseMate: chat in-app' },
};

export const homeContent: Record<Lang, HomeContent> = {
  it: {
    hero: {
      title: 'Trova la stanza giusta.',
      titleAccent: 'Trova i coinquilini giusti.',
      subtitle:
        'Scopri stanze e coinquilini con uno swipe. Metti like, fai match e chatti in app: HouseMate rende la ricerca della casa condivisa semplice, veloce e umana.',
      ctaPrimary: 'Scopri come funziona',
      ctaSecondary: 'Affitti una stanza?',
      comingSoon: 'In arrivo su iOS e Android',
    },
    featuresEyebrow: 'Come funziona',
    featuresTitle: 'Casa e coinquilini, con uno swipe',
    panels: [
      {
        icon: 'home',
        title: 'Sfoglia le stanze come piace a te',
        text: 'Scorri le stanze disponibili e apri ogni annuncio per vedere foto, metratura, prezzo, stanze libere, residenti e servizi. Tutto su mappa, con la distanza da te.',
        front: IMG.houses,
        back: IMG.housesInfo,
        tint: 'panel-peach',
      },
      {
        icon: 'users',
        title: 'Le persone giuste, non a caso',
        text: 'Profili veri con stile di vita, lavoro, lingue, budget e periodo di ricerca. Metti like a chi è compatibile con te e scopri se il feeling è reciproco.',
        front: IMG.mates,
        back: IMG.matesInfo,
        tint: 'panel-cream',
      },
      {
        icon: 'message',
        title: 'Fai match, poi si chatta',
        text: 'Quando l’interesse è reciproco scatta il match: chatti in app con coinquilini e proprietari, fai domande sull’annuncio e organizzi tutto, anche in chat di gruppo con la futura casa.',
        front: IMG.chat,
        tint: 'panel-rose',
      },
    ],
    miniEyebrow: 'Tutto in un’app',
    miniTitle: 'Pensata per la vita condivisa',
    miniFeatures: [
      { icon: 'map', title: 'Ricerca per zona', text: 'Annunci su mappa con distanza reale.' },
      { icon: 'shield', title: 'Profili curati', text: 'Foto e dettagli per scelte consapevoli.' },
      { icon: 'users', title: 'Match per affinità', text: 'Abbinamenti per stile di vita e budget.' },
      { icon: 'message', title: 'Chat e gruppi', text: 'Scrivi 1:1 o con tutta la casa.' },
      { icon: 'home', title: 'Crea il tuo annuncio', text: 'Pubblica la stanza con foto e mappa.' },
      { icon: 'globe', title: 'Multilingua', text: 'L’app parla la tua lingua.' },
    ],
    business: {
      eyebrow: 'Per i business',
      title: 'Affitti stanze? Gestisci tutto da HouseMate.',
      text: 'Pubblica le tue stanze con foto e posizione sulla mappa, ricevi richieste da inquilini in target e gestiscile con i filtri — senza più annunci dispersi e messaggi ovunque.',
      bullets: [
        'Crea annunci con foto e mappa in pochi minuti',
        'Ricevi richieste qualificate e filtrabili',
        'Chatti con i candidati e la futura casa',
        'Una sola dashboard per gestire tutto',
      ],
      contactEyebrow: 'Contatti',
      contactTitle: 'Parliamone',
      contactText:
        'Sei un proprietario, un’agenzia o gestisci più stanze? Raccontaci cosa ti serve: ti rispondiamo a breve.',
    },
  },

  en: {
    hero: {
      title: 'Find the right room.',
      titleAccent: 'Find the right roommates.',
      subtitle:
        'Discover rooms and roommates with a swipe. Like, match and chat in-app: HouseMate makes finding shared living simple, fast and human.',
      ctaPrimary: 'See how it works',
      ctaSecondary: 'Renting a room?',
      comingSoon: 'Coming soon on iOS and Android',
    },
    featuresEyebrow: 'How it works',
    featuresTitle: 'Home and roommates, with a swipe',
    panels: [
      {
        icon: 'home',
        title: 'Browse rooms your way',
        text: 'Swipe through available rooms and open each listing for photos, size, price, free rooms, residents and amenities. All on a map, with the distance from you.',
        front: IMG.houses,
        back: IMG.housesInfo,
        tint: 'panel-peach',
      },
      {
        icon: 'users',
        title: 'The right people, not by chance',
        text: 'Real profiles with lifestyle, job, languages, budget and search window. Like the people who fit you and find out if the feeling is mutual.',
        front: IMG.mates,
        back: IMG.matesInfo,
        tint: 'panel-cream',
      },
      {
        icon: 'message',
        title: 'Match, then chat',
        text: 'When the interest is mutual you get a match: chat in-app with roommates and owners, ask about a listing and sort everything out — even in a group chat with your future home.',
        front: IMG.chat,
        tint: 'panel-rose',
      },
    ],
    miniEyebrow: 'All in one app',
    miniTitle: 'Built for shared living',
    miniFeatures: [
      { icon: 'map', title: 'Search by area', text: 'Listings on a map with real distance.' },
      { icon: 'shield', title: 'Rich profiles', text: 'Photos and details for confident choices.' },
      { icon: 'users', title: 'Affinity matching', text: 'Matches by lifestyle and budget.' },
      { icon: 'message', title: 'Chat & groups', text: 'Message 1:1 or the whole house.' },
      { icon: 'home', title: 'Create your listing', text: 'Post a room with photos and map.' },
      { icon: 'globe', title: 'Multilingual', text: 'The app speaks your language.' },
    ],
    business: {
      eyebrow: 'For business',
      title: 'Renting rooms? Manage it all in HouseMate.',
      text: 'Publish your rooms with photos and a map location, get requests from the right tenants and handle them with filters — no more scattered ads and messages everywhere.',
      bullets: [
        'Create listings with photos and map in minutes',
        'Get qualified, filterable requests',
        'Chat with candidates and your future house',
        'One dashboard to manage everything',
      ],
      contactEyebrow: 'Contact',
      contactTitle: 'Let’s talk',
      contactText:
        'Are you an owner, an agency or managing several rooms? Tell us what you need and we’ll get back to you soon.',
    },
  },
};
