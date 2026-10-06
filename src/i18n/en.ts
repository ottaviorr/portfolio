import type { Dict } from './pt';

export const en: Dict = {
  meta: {
    title: 'Otávio Herdy — Web designer & developer',
    description:
      'I design and build websites for small businesses: clinics, builders and service companies. Design, code and SEO, from Minas Gerais, Brazil.',
    ogImage: '/og-en.png',
  },
  skip: 'Skip to content',
  nav: { work: 'Work', about: 'About', contact: 'Contact', langLabel: 'Language', theme: 'Light theme', home: '— Otávio Herdy, home' },
  cursorView: 'View',

  hero: {
    role: 'Web designer & developer',
    tagline: 'I build websites that give small businesses a design as good as the work they do.',
    available: 'Open for freelance projects',
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
    items: [
      { name: 'Websites & landing pages', text: 'A site that explains what you do in five seconds and loads before people give up.' },
      { name: 'UX/UI', text: 'Interfaces made for the people using them, not for awards. (Awards are welcome, though.)' },
      { name: 'SEO & performance', text: 'Your customers search on Google. I help you show up, and load fast when they click.' },
      { name: 'GoHighLevel automations', text: 'Forms, calendar, WhatsApp and follow-ups talking to each other. No more copy-pasting leads.' },
    ],
  },

  about: {
    title: 'About.',
    text: `I'm Otávio, from Minas Gerais, Brazil, in my 8th semester of Computer Science. <mark>I build websites for businesses that deserve better design</mark>: clinics, home builders, cleaning companies, folks who install floors and wallpaper. The idea is simple: <mark class="pink">a site that looks good, loads fast and is easy to find</mark>, one the owner is proud to send to customers.`,
    photoAlt: 'Otávio in a pink cap and shirt, throwing up the rock horns',
    offTitle: 'Off the clock',
    off: [
      { name: 'Rock & Taylor Swift', text: 'Headphones on from first coffee to last deploy. Friendship bracelets included.' },
      { name: 'Video games', text: 'Story-driven, no rush. Life is Strange still gets me.' },
      { name: 'Minas Gerais', text: 'Pão de queijo is the answer. What was the question?' },
    ],
  },

  toolkit: { title: 'Toolkit.', design: 'Design', code: 'Code' },

  contact: {
    marquee: "Let's talk",
    title: "Let's build yours.",
    text: "Tell me what you need: the business, the deadline, what bugs you about your current site. I read everything and I'll get back to you.",
    email: 'Send an email',
  },

  footer: { line: 'Made in Minas Gerais, with rock in my headphones.' },
};
