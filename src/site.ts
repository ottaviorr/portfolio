import { siFigma, siClaudecode, siHostinger, siAstro, siReact, siTypescript, siSupabase, siVercel } from 'simple-icons';

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

// Toolkit: ícones do simple-icons. Total de 8 → a grade fecha em 4×2.
type Tool = { name: string; icon: { path: string } };
export const toolkit: { design: Tool[]; ai: Tool[]; code: Tool[] } = {
  design: [
    { name: 'Figma', icon: siFigma },
  ],
  ai: [{ name: 'Claude Code', icon: siClaudecode }],
  code: [
    { name: 'Astro', icon: siAstro },
    { name: 'React', icon: siReact },
    { name: 'TypeScript', icon: siTypescript },
    { name: 'Supabase', icon: siSupabase },
    { name: 'Vercel', icon: siVercel },
    { name: 'Hostinger', icon: siHostinger },
  ],
};

