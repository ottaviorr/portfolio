import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const l10n = z.object({ pt: z.string(), en: z.string() });

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: l10n, // tipo de negócio + local
      url: z.string(),
      year: z.string(),
      role: l10n,
      services: z.object({ pt: z.array(z.string()), en: z.array(z.string()) }),
      stack: z.array(z.string()),
      cover: image(), // gerada por `npm run dither`
      gallery: z.array(z.object({ src: image(), alt: l10n, device: z.enum(['desktop', 'mobile']) })),
      summary: l10n,
      challenge: l10n,
      work: l10n,
      results: l10n,
      featured: z.boolean().default(true),
      order: z.number().default(99),
      draft: z.boolean().default(false), // draft: aparece no `npm run dev`, some no build
    }),
});

export const collections = { projects };

