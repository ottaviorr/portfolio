import type { Dict } from './pt';

export const en: Dict = {
  meta: {
    title: 'Otávio Herdy — Web designer & developer',
    description:
      'I design and build websites that make small businesses look their best: design, code and SEO, backed by research and care for every detail.',
    ogImage: '/og-en.png',
  },
  skip: 'Skip to content',
  newTab: 'opens in a new tab',
  nav: { work: 'Work', about: 'About', contact: 'Contact', langLabel: 'Language', theme: 'Light theme', home: '— Otávio Herdy, home' },
  cursorView: 'View',

  hero: {
    role: 'Web designer & developer',
    tagline: 'I build websites that give small businesses a design as good as the work they do.',
    location: 'Minas Gerais, Brazil',
    cta: "Let's talk",
  },

  path: {
    label: 'The path',
    steps: [
      { when: 'First,', what: 'computer science.', note: '8th semester and counting.' },
      { when: 'Then,', what: 'customer support & onboarding.', note: 'I learned exactly where people get stuck on a screen.' },
      { when: 'Today,', what: 'design + code.', note: 'Both put together: websites that work for the people using them.' },
    ],
  },

  work: {
    title: 'Work.',
    viewLabel: 'View',
    list: 'List',
    grid: 'Grid',
    cols: { project: 'Project', role: 'Role', year: 'Year' },
  },

  project: {
    back: 'All projects',
    client: 'Client',
    role: 'Role',
    year: 'Year',
    visit: 'Visit the live site',
    challenge: 'The challenge',
    work: 'What I did',
    services: 'Services',
    stack: 'Stack',
    results: 'Results',
    next: 'Next project',
    coverAlt: 'Project cover rendered in blue and pink pixels',
  },

  services: {
    title: 'What I do.',
    intro: 'From first sketch to live site, with the same care at every step.',
    includes: 'Includes',
    items: [
      { name: 'Websites & landing pages', text: 'A site that explains what you do in five seconds and loads before people give up.', tags: ['Responsive design', 'Copy', 'Launch'] },
      { name: 'UX/UI', text: 'Interfaces made for the people using them, not for awards. (Awards are welcome, though.)', tags: ['Research', 'Wireframes', 'Figma prototype'] },
      { name: 'SEO & performance', text: 'Your customers search on Google. I help you show up, and load fast when they click.', tags: ['Technical SEO', 'Core Web Vitals', 'Analytics'] },
      { name: 'Automations & integrations', text: 'Forms, calendar, WhatsApp and follow-ups talking to each other. No more copy-pasting leads.', tags: ['Forms', 'Calendar', 'Follow-up'] },
    ],
  },

  about: {
    title: 'About.',
    statement: 'Every business deserves a website that lives up to its work.',
    text: `I'm Otávio, from Minas Gerais, Brazil. <mark>I bring visual design and high performance together</mark> to build websites that are fast and engaging. Away from code, my energy goes into geek culture, lost in video game stories, or <mark class="pink">traveling to sing at the rail of a show</mark>.`,
    photoAlt: 'Otávio in a pink cap and shirt throwing a peace sign in front of the Rock in Rio stage',
    badge: 'Computer Science · 8th semester · ',
    caption: 'ottaviorr, at Rock in Rio',
    offTitle: 'A bit about me',
    doom: {
      play: 'Play DOOM',
      title: 'DOOM (shareware, 1993)',
      close: 'Close',
      loading: 'Loading hell…',
      keys: [['WASD', 'move'], ['Click', 'fire'], ['Right-click', 'open doors'], ['Shift', 'run'], ['1–7', 'weapons'], ['M', 'menu'], ['Esc', 'exit']],
      mouseFree: 'Click the screen to aim with the mouse',
      mouseLocked: 'Mouse captured · Esc exits',
      booting: 'Loading',
      running: 'Running',
      badge: 'ESC · TO EXIT · ',
      start: 'Start',
      fire: 'Fire',
      use: 'Use',
    },
    music: {
      open: 'Open the music player',
      title: 'My playlist',
      close: 'Close',
      menu: 'List',
      play: 'Play',
      pause: 'Pause',
      prev: 'Previous',
      next: 'Next',
      volume: 'Volume',
      preview: '30s preview · listen to the full song',
      error: 'Could not reach Deezer',
    },
    off: [
      { name: 'Code & Design', text: 'Bringing programming logic and visual craft together to build digital experiences that are as functional as they are engaging.' },
      { name: 'Geek & Gaming', text: 'Into interactive stories and exploring new worlds, with a place of honor always saved in my heart (and my setup) for Life is Strange.' },
      { name: 'Big-show energy', text: 'Collecting live memories across Brazil, from the intensity of Rock in Rio to singing every word at the rail of a Taylor Swift show.' },
    ],
  },

  toolkit: { title: 'Toolkit.', intro: 'What I use to get ideas off the page.', design: 'Design', ai: 'AI', code: 'Code' },

  contact: {
    marquee: "Let's talk",
    title: "Let's build yours.",
    text: "Tell me what you need: the business, the deadline, what bugs you about your current site. I read everything and I'll get back to you.",
    email: 'Send an email',
  },

  footer: { line: 'Made in Minas Gerais, with rock in my headphones.' },
};
