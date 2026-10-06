import { siFigma, siHostinger, siAstro, siReact, siTypescript, siSupabase, siVercel } from 'simple-icons';

// Dados que não mudam entre idiomas.
export const site = {
  name: 'Otávio Herdy',
  handle: 'ottaviorr',
  email: 'otavioherdy.dev@gmail.com',
  links: {
    github: 'https://github.com/ottaviorr',
    linkedin: 'https://www.linkedin.com/in/otavioherdy/',
  },
};

// Toolkit: `icon` vem do simple-icons; sem ícone oficial, usa `mono` (monograma).
type Tool = { name: string; icon?: { path: string }; mono?: string };
export const toolkit: { design: Tool[]; code: Tool[] } = {
  design: [
    { name: 'Figma', icon: siFigma },
  ],
  code: [
    { name: 'Astro', icon: siAstro },
    { name: 'React', icon: siReact },
    { name: 'TypeScript', icon: siTypescript },
    { name: 'Supabase', icon: siSupabase },
    { name: 'Vercel', icon: siVercel },
    { name: 'Hostinger', icon: siHostinger },
    { name: 'GoHighLevel', mono: 'GHL' },
  ],
};

/** Placeholder ainda não preenchido em site.ts? */
export const isTodo = (v: string) => v.startsWith('[');
