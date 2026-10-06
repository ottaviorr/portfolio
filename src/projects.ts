import { getCollection } from 'astro:content';

// draft: true aparece no `npm run dev` e some no build de produção.
export const getProjects = async () =>
  (await getCollection('projects', (p) => import.meta.env.DEV || !p.data.draft)).sort(
    (a, b) => a.data.order - b.data.order,
  );
