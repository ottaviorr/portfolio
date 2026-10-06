import type { Dict } from './pt';

export const en: Dict = {
  meta: {
    title: 'Otávio Herdy — Web designer & developer',
    description:
      'I design and build websites that make small businesses look their best: design, code and SEO, backed by research and care for every detail.',
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
    intro: 'From first sketch to live site, with the same care at every step.',
    includes: 'Includes',
    items: [
      { name: 'Websites & landing pages', text: 'A site that explains what you do in five seconds and loads before people give up.', tags: ['Responsive design', 'Copy', 'Launch'] },
      { name: 'UX/UI', text: 'Interfaces made for the people using them, not for awards. (Awards are welcome, though.)', tags: ['Research', 'Wireframes', 'Figma prototype'] },
      { name: 'SEO & performance', text: 'Your customers search on Google. I help you show up, and load fast when they click.', tags: ['Technical SEO', 'Core Web Vitals', 'Analytics'] },
      { name: 'GoHighLevel automations', text: 'Forms, calendar, WhatsApp and follow-ups talking to each other. No more copy-pasting leads.', tags: ['Forms', 'Calendar', 'Follow-up'] },
    ],
  },

  about: {
    title: 'About.',
    statement: 'Every business deserves a website that lives up to its work.',
    text: `I'm Otávio, from Minas Gerais, Brazil. Before I design anything, I do the research: who the customers are, what competitors do, what makes someone trust a brand. Then I sweat the details so <mark>the site makes the business look its best</mark>, <mark class="pink">loads fast and is easy to find</mark>.`,
    photoAlt: 'Otávio in a pink cap and shirt, throwing up the rock horns',
    badge: 'Computer Science · 8th semester · ',
    caption: 'ottaviorr, at some show',
    offTitle: 'Off the clock',
    off: [
      { name: 'Rock & Taylor Swift', text: 'Headphones on from first commit to last deploy. Friendship bracelets included.' },
      { name: 'Video games', text: 'Story-driven, no rush. Life is Strange still gets me.' },
      { name: 'Pink, always', text: 'The cap, the shirt and, yes, this website.' },
    ],
  },

  toolkit: { title: 'Toolkit.', intro: 'What I use to get ideas off the page.', design: 'Design', code: 'Code' },

  contact: {
    marquee: "Let's talk",
    title: "Let's build yours.",
    text: "Tell me what you need: the business, the deadline, what bugs you about your current site. I read everything and I'll get back to you.",
    email: 'Send an email',
  },

  footer: { line: 'Made in Minas Gerais, with rock in my headphones.' },
};
