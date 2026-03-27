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
  contactEmail: 'akhilposa@gmail.com', // optional — used for coaching enquiries and footer
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



/**
 * Gallery — jpg/jpeg/png.
 * groupFocus: hover zoom toward a point (focusX/focusY as %, zoom as scale). No effect until pointer is over the photo.
 * wide: spans two columns on larger screens.
 */
export const teams = [
  {
    src: publicUrl('gallery/with_team3.jpg'),
    alt: 'My team',
    groupFocus: true,
    focusX: '58%',
    focusY: '10%',
    zoom: 2.5,
  },
  {
    src: publicUrl('gallery/with_team2.JPG'),
    alt: 'My team',
    groupFocus: true,
    focusX: '85%',
    focusY: '10%',
    zoom: 2.5,
  },
  {
    src: publicUrl('gallery/akhil-7.JPG'),
    alt: 'Atlanta Avatars — team and coaches',
    groupFocus: true,
    focusX: '25%',
    focusY: '30%',
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
    src: publicUrl('gallery/akhil-6.jpg'),
    alt: 'team photo',
    groupFocus: true,
    focusX: '50%',
    focusY: '15%',
    zoom: 2.0,
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
    src: publicUrl('gallery/akhil-12.jpeg'),
    alt: 'Akhil with a teammate',
    groupFocus: true,
    focusX: '55%',
    focusY: '44%',
    zoom: 2.0,
  },
  {
    src: publicUrl('gallery/with_team.jpg'),
    alt: 'team',
    groupFocus: true,
    focusX: '10%',
    focusY: '10%',
    zoom: 2.5,
    wide: true,
  },
]
export const gigs = [
  {
    src: publicUrl('gallery/baby.JPG'),
    alt: 'baby',
    groupFocus: false,
    focusX: '58%',
    focusY: '10%',
    zoom: 2.5,
    title: 'Being Cute',
  },
  {
    src: publicUrl('gallery/activity.JPG'),
    alt: 'Hiking?',
    groupFocus: false,
    focusX: '58%',
    focusY: '10%',
    zoom: 2.5,
    title: 'Hiking?',
  },
  {
    src: publicUrl('gallery/with_blitz_pup.jpg'),
    alt: 'blitz puppy',
    groupFocus: false,
    focusX: '58%',
    focusY: '10%',
    zoom: 2.5,
    title: 'Blitz puppy',
  },
  {
    src: publicUrl('gallery/with_blitz_big.jpg'),
    alt: 'blitz more recent',
    groupFocus: false,
    focusX: '58%',
    focusY: '10%',
    zoom: 2.5,
    title: 'Blitz recent',
  },
  {
    src: publicUrl('gallery/gocart.JPG'),
    alt: 'Gokart',
    groupFocus: false,
    focusX: '58%',
    focusY: '10%',
    zoom: 2.5,
    title: 'GoKarting',
  },
  {
    src: publicUrl('gallery/karate.JPG'),
    alt: 'karate',
    groupFocus: false,
    focusX: '58%',
    focusY: '10%',
    zoom: 2.5,
    title: 'Karate',
  },
    {
    src: publicUrl('gallery/ninja.JPG'),
    alt: 'Ninja',
    groupFocus: false,
    focusX: '58%',
    focusY: '10%',
    zoom: 2.5,
    title: 'Ninja-Halloween',
  },
  {
    src: publicUrl('gallery/debating.JPG'),
    alt: 'Debating team',
    groupFocus: false,
    focusX: '58%',
    focusY: '10%',
    zoom: 2.5,
    title: 'Did some debating',
  },
  {
    src: publicUrl('gallery/travel-1.JPG'),
    alt: 'Travel',
    groupFocus: false,
    focusX: '58%',
    focusY: '10%',
    zoom: 2.5,
    title: 'Did some traveling',
  },
  {
    src: publicUrl('gallery/studies.JPG'),
    alt: 'Studies',
    groupFocus: false,
    focusX: '58%',
    focusY: '10%',
    zoom: 2.5,
    title: 'I guess was okay at some point!',
  },
]

export const with_players = [
  {
    src: publicUrl('gallery/with_player18.PNG'),
  },
  {
    src: publicUrl('gallery/with_player17.jpg'),
  },
  {
    src: publicUrl('gallery/with_player13.PNG'),
  },
  {
    src: publicUrl('gallery/with_player11.jpeg'),
  },
    {
    src: publicUrl('gallery/with_player10.jpeg'),
  },
  {
    src: publicUrl('gallery/with_player9.jpeg'),
  },
    {
    src: publicUrl('gallery/with_player8.jpeg'),
  },
  {
    src: publicUrl('gallery/with_player7.jpeg'),
  },
  {
    src: publicUrl('gallery/with_player6.jpeg'),
  },
  {
    src: publicUrl('gallery/with_player5.jpeg'),
  },
  {
    src: publicUrl('gallery/with_player4.jpg'),
  },
  {
    src: publicUrl('gallery/with_player-4.jpeg'),
  },
  {
    src: publicUrl('gallery/with_player3.png'),
  },
  {
    src: publicUrl('gallery/with_player2.png'),
  },
  {
    src: publicUrl('gallery/with_player1.png'),
  },
  {
    src: publicUrl('gallery/with_player16.PNG'),
  },
  {
    src: publicUrl('gallery/with_player15.PNG'),
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
