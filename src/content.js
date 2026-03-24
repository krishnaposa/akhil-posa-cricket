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

/** Gallery — add files under public/gallery/ */
export const gallery = [
  { src: '/gallery/akhil-1.PNG', alt: 'Akhil Posa — on the field' },
  { src: '/gallery/placeholder-1.svg', alt: 'Akhil Posa — youth cricket (add your photo)' },
  { src: '/gallery/placeholder-2.svg', alt: 'Training and nets (add your photo)' },
  { src: '/gallery/placeholder-3.svg', alt: 'Match day — Lighting (add your photo)' },
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
