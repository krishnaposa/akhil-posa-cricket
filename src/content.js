/**
 * Edit this file to update copy, timeline, media URLs, and sponsors.
 * Drop images into public/gallery/ and reference as /gallery/your-file.jpg
 */

export const site = {
  name: 'Akhil Posa',
  tagline: 'Professional cricket — and a coaching lane built on the same standards',
  team: 'Lighting',
  role: 'Professional cricketer',
  ageNote: '22 — living the journey he started as a kid',
  heroSubtext:
    'This site backs two goals: stay visible for the next step in elite cricket — bigger leagues and the right assignments — and grow a coaching offer that passes on what he’s learned in the nets and on the field.',
  social: {
    instagram: '', // e.g. 'https://instagram.com/yourhandle'
    youtube: '',
    x: '',
  },
  contactEmail: '', // optional — used for coaching enquiries and footer
  /** Shown in the hero and listed in Photos — path under public/ */
  heroImage: '/gallery/akhil-1.PNG',
  heroImageAlt: 'Akhil Posa — professional cricketer',
}

/** Two strategic priorities — league / career track and coaching business */
export const objectives = [
  {
    id: 'elite',
    eyebrow: 'Career & visibility',
    title: 'Project Akhil — next assignments, bigger league',
    body:
      'Positioning for the right opportunities: domestic and franchise cricket, trials, and roles that match his game. The focus is clear performance, a professional profile sponsors and selectors can trust, and a path toward top-tier cricket.',
  },
  {
    id: 'coaching',
    eyebrow: 'Coaching & growth',
    title: 'Market the coaching side',
    body:
      'Structured coaching for players who want technical clarity, match habits, and confidence — juniors through to serious club cricketers. Sessions are built from the same discipline that drives his own career.',
  },
]

/** Dedicated coaching marketing block — CTA uses site.contactEmail when set */
export const coaching = {
  headline: 'Coaching with Akhil',
  intro:
    'Train with someone who lives the professional schedule: technical work, tactical awareness, and the mental side of performing under pressure. Ideal for individuals and small groups who want accountable, cricket-first coaching.',
  highlights: [
    'Batting and game-awareness — plans that translate to match day',
    'Bowling workloads and skills — aligned to age and ambition',
    'Fielding intensity and standards — the details that win close games',
  ],
  note: 'Sessions can be tailored after a short conversation about level, goals, and availability.',
  ctaLabel: 'Ask about coaching',
}

export const journey = [
  {
    year: 'Early years',
    title: 'First love for the game',
    body: 'Picking up a bat as a kid, learning the basics, and falling in love with cricket — club nets, school matches, and endless practice.',
  },
  {
    year: 'Teenage years',
    title: 'Sharpening the craft',
    body: 'Competitive youth cricket, longer sessions in the nets, and learning to read match situations — the bridge between talent and discipline.',
  },
  {
    year: 'Today',
    title: 'Professional with Lighting',
    body: 'Representing the Lighting team as a 22-year-old professional — carrying the same joy from childhood into every innings and every spell.',
  },
]

/**
 * Gallery — jpg/jpeg/png. groupFocus: scroll-triggered zoom toward Akhil (focusX/focusY = % for transform-origin).
 * wide: spans two columns on larger screens.
 */
export const gallery = [
  {
    src: '/gallery/akhil-4.jpg',
    alt: 'Akhil Posa — bowling action, Param Veers',
  },
  {
    src: '/gallery/akhil-9.jpg',
    alt: 'Akhil Posa — delivery stride',
  },
  {
    src: '/gallery/akhil-5.jpg',
    alt: 'Akhil Posa — Minor League Cricket, Atlanta Lightning',
  },
  {
    src: '/gallery/akhil-1.PNG',
    alt: 'Akhil Posa — Atlanta Lightning, Minor League Cricket',
  },
  {
    src: '/gallery/akhil-2.jpg',
    alt: 'Akhil Posa — Starlings, full kit on the field',
  },
  {
    src: '/gallery/akhil-6.jpg',
    alt: 'Starlings — team photo',
    groupFocus: true,
    focusX: '56%',
    focusY: '30%',
    zoom: 1.4,
  },
  {
    src: '/gallery/akhil-3.jpg',
    alt: 'Atlanta Cricket Academy Avatars — team photo',
    groupFocus: true,
    focusX: '50%',
    focusY: '91%',
    zoom: 1.42,
  },
  {
    src: '/gallery/akhil-8.jpg',
    alt: 'Atlanta Cricket Academy Avatars — team photo',
    groupFocus: true,
    focusX: '50%',
    focusY: '88%',
    zoom: 1.4,
  },
  {
    src: '/gallery/akhil-7.JPG',
    alt: 'Atlanta Avatars — team and coaches',
    groupFocus: true,
    focusX: '32%',
    focusY: '86%',
    zoom: 1.38,
  },
  {
    src: '/gallery/akhil-10.JPG',
    alt: 'Team photo — match day',
    groupFocus: true,
    focusX: '14%',
    focusY: '76%',
    zoom: 1.45,
  },
  {
    src: '/gallery/akhil-11.JPG',
    alt: 'Akhil with a teammate — cricket whites',
    groupFocus: true,
    focusX: '74%',
    focusY: '46%',
    zoom: 1.35,
  },
  {
    src: '/gallery/akhil-12.jpeg',
    alt: 'Trophy celebration — team photo, Minor League Cricket',
    groupFocus: true,
    focusX: '48%',
    focusY: '72%',
    zoom: 1.36,
    wide: true,
  },
]

/**
 * YouTube embeds: video ID from watch?v=ID or youtube.com/shorts/ID
 * format: 'short' uses a vertical 9:16 frame (best for Shorts).
 */
export const videos = [
  {
    title: 'YouTube Short',
    caption: 'Moment from the journey — on the field in vertical format.',
    youtubeId: '_0-_8hayAdQ',
    format: 'short',
  },
  {
    title: 'YouTube Short',
    caption: 'Another highlight clip — rename these titles in content.js anytime.',
    youtubeId: 'hujmRlAb5Zo',
    format: 'short',
  },
]

export const sponsors = [
  {
    name: 'Your sponsor',
    tier: 'Title partner',
    url: '',
    logo: '/sponsors/placeholder.svg',
    blurb: 'Thank you to everyone who backs the journey — add real sponsor copy and logos in public/sponsors/.',
  },
  {
    name: 'Equipment / local partner',
    tier: 'Supporting partner',
    url: '',
    logo: '/sponsors/placeholder.svg',
    blurb: 'Swap these blocks for real brands and links.',
  },
]
