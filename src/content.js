/**
 * Edit this file to update copy, timeline, media URLs, and sponsors.
 * Drop images into public/gallery/ and pass paths to publicUrl(), e.g. publicUrl('gallery/photo.jpg').
 * Required for GitHub Pages project sites (VITE_BASE=/repo-name/).
 */
export function publicUrl(path) {
  const base = import.meta.env.BASE_URL
  const normalized = path.replace(/^\/+/, '')
  return `${base}${normalized}`
}

export const site = {
  name: 'Akhil Posa',
  tagline: '',
  team: 'Lighting',
  role: 'Professional cricketer',
  ageNote: '',
  heroSubtext: '',
  social: {
    instagram: '', // e.g. 'https://instagram.com/yourhandle'
    youtube: '',
    x: '',
  },
  contactEmail: '', // optional — used for coaching enquiries and footer
  /** Hero image strip (left → right). Nav uses `team` so the name isn’t repeated in the header. */
  heroImages: [
    { src: publicUrl('gallery/akhil-1.PNG'), alt: 'Akhil — Atlanta Lightning, Minor League Cricket' },
    { src: publicUrl('gallery/akhil-4.jpg'), alt: 'Akhil — on the field' },
    { src: publicUrl('gallery/akhil-9.jpg'), alt: 'Akhil — delivery stride' },
    { src: publicUrl('gallery/akhil-2.jpg'), alt: 'Akhil — batting pose' },
  ],
}

/** Dedicated coaching marketing block — CTA uses site.contactEmail when set */
export const coaching = {
  headline: 'Coaching',
  intro: 'Technical work, match habits, and the mental side of performing under pressure — for individuals and small groups.',
  highlights: [
    'Batting and game awareness',
    'Bowling workloads and skills',
    'Fielding standards',
  ],
  note: 'Tell us your level and goals — sessions are tailored from there.',
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
 * Gallery — jpg/jpeg/png.
 * groupFocus: scroll-zoom toward Akhil. Each group/duo shot needs its own focusX, focusY (CSS % for
 * transform-origin — left/top of image = 0%, bottom/right = 100%) and zoom; tune per photo.
 * wide: spans two columns on larger screens.
 */
export const gallery = [
  {
    src: publicUrl('gallery/akhil-5.jpg'),
    alt: 'Akhil Posa — Minor League Cricket, Atlanta Lightning',
  },
  {
    src: publicUrl('gallery/akhil-6.jpg'),
    alt: 'Starlings — team photo',
    groupFocus: true,
    focusX: '58%',
    focusY: '10%',
    zoom: 2.5,
  },
  {
    src: publicUrl('gallery/akhil-3.jpg'),
    alt: 'Atlanta Cricket Academy Avatars — team photo',
    groupFocus: true,
    focusX: '100%',
    focusY: '60%',
    zoom: 2.0,
  },
  {
    src: publicUrl('gallery/akhil-8.jpg'),
    alt: 'Atlanta Cricket Academy Avatars — team photo',
    groupFocus: true,
    focusX: '47%',
    focusY: '84%',
    zoom: 1.39,
  },
  {
    src: publicUrl('gallery/akhil-7.JPG'),
    alt: 'Atlanta Avatars — team and coaches',
    groupFocus: true,
    focusX: '10%',
    focusY: '30%',
    zoom: 2.5,
  },
  {
    src: publicUrl('gallery/akhil-10.JPG'),
    alt: 'Team photo — match day',
    groupFocus: true,
    focusX: '95%',
    focusY: '60%',
    zoom: 2.5,
  },
  {
    src: publicUrl('gallery/akhil-11.JPG'),
    alt: 'Akhil with a teammate — cricket whites',
    groupFocus: true,
    focusX: '76%',
    focusY: '44%',
    zoom: 1.0,
  },
  {
    src: publicUrl('gallery/akhil-12.jpeg'),
    alt: 'Trophy celebration — team photo, Minor League Cricket',
    groupFocus: true,
    focusX: '45%',
    focusY: '55%',
    zoom: 2.5,
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
    logo: publicUrl('sponsors/placeholder.svg'),
    blurb: 'Thank you to everyone who backs the journey — add real sponsor copy and logos in public/sponsors/.',
  },
  {
    name: 'Equipment / local partner',
    tier: 'Supporting partner',
    url: '',
    logo: publicUrl('sponsors/placeholder.svg'),
    blurb: 'Swap these blocks for real brands and links.',
  },
]
