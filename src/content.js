/**
 * Edit this file to update copy, timeline, media URLs, and sponsors.
 * Drop images into public/gallery/ and reference as /gallery/your-file.jpg
 */

export const site = {
  name: 'Akhil Posa',
  tagline: 'From backyard dreams to the professional crease',
  team: 'Lighting',
  role: 'Professional cricketer',
  ageNote: '22 — living the journey he started as a kid',
  heroSubtext:
    'A visual story of grit, growth, and the love of the game — from first bat to Lighting colours.',
  social: {
    instagram: '', // e.g. 'https://instagram.com/yourhandle'
    youtube: '',
    x: '',
  },
  contactEmail: '', // optional
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

/** Placeholder gallery — replace src with real paths under public/gallery/ */
export const gallery = [
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
