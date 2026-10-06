# ottaviorr — portfólio

Astro (estático) + GSAP + Lenis, publicado na Vercel. Português em `/`, inglês em `/en/`.

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # gera dist/
npm run dither    # recria as capas em dither dos projetos
```

## Onde fica cada coisa

| O quê | Arquivo |
|---|---|
| Textos do site (PT) | `src/i18n/pt.ts` |
| Textos do site (EN) | `src/i18n/en.ts` |
| E-mail, links, ferramentas do toolkit | `src/site.ts` |
| Cores, fontes, espaçamento, motion | `src/styles/tokens.css` |
| Projetos | `src/content/projects/*.md` |
| Domínio (canonical, sitemap, OG) | `astro.config.mjs` (`site`) e `public/robots.txt` |

## Trocar um texto

Abra `src/i18n/pt.ts`, ache o campo e edite. Depois edite **o mesmo campo** em `src/i18n/en.ts`.
O TypeScript reclama se um idioma tiver um campo que o outro não tem.

No texto do "Sobre", `<mark>…</mark>` vira marca-texto azul e `<mark class="pink">…</mark>`, rosa.

Títulos com ponto final (`'Projetos.'`) ganham o ponto colorido automaticamente.

## Adicionar um projeto

1. Crie a pasta `src/assets/projects/<slug>/` com três prints:
   - `desktop-1.png` (1440×900, topo da página; vira a capa)
   - `desktop-2.png` (1440×900, uma seção mais abaixo)
   - `mobile-1.png` (390×844)
2. Rode `npm run dither`. Ele gera o `cover.png` em pixels azuis e rosa.
3. Copie `src/content/projects/rio-clinique.md` para `src/content/projects/<slug>.md` e preencha.
   - `order` define a posição na lista.
   - `featured: false` tira o projeto da home, mas mantém a página.
   - `draft: true` deixa o projeto visível só no `npm run dev` (some do build).
   - Tudo entre `[COLCHETES]` é placeholder. Troque pelo dado real e não deixe número inventado.

A página `/work/<slug>/` (e `/en/work/<slug>/`) é criada sozinha.

## Imagem de compartilhamento (OG)

`public/og-pt.png` e `public/og-en.png` (1200×630). Para trocar, substitua os arquivos.

## Deploy

Na Vercel: importe o repositório, que é detectado como Astro, sem configuração extra.
Depois de definir o domínio, atualize `site` em `astro.config.mjs` e a linha `Sitemap:` de `public/robots.txt`.

## Efeitos (e onde desligar)

- Letras que mudam de cor: `src/components/ColorTitle.astro`. Use `<ColorTitle text="…" />` só em títulos-chave.
- Cursor: `src/components/Cursor.astro`. `data-cursor="view|link|button|text"` força um estado.
- Grade de pixels em volta do cursor no hero: `src/components/Hero.astro`.
- Trajetória (SplitText + ScrollTrigger): `src/components/Trajectory.astro`.
- Preloader: `src/components/Preloader.astro`. Para remover, apague a tag `<Preloader />` do `src/layouts/Base.astro`.

Todos respeitam `prefers-reduced-motion`, e o cursor e a grade de pixels só aparecem em desktop com mouse.
