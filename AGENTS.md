# Guerra Solut — Guia para agentes

Este ficheiro é o ponto de entrada de qualquer agente que trabalhe neste
repositório. É a **fonte única** de instruções: não criar `CLAUDE.md` nem
`GEMINI.md`.

## O que é este projecto

O site institucional da **Guerra Solut** — instalações elétricas, construção
civil e remodelação em Portugal continental. É a reconstrução de raiz do site
anterior (uma SPA React que servia `<div id="app"></div>` e injectava tudo por
JavaScript), a publicar no mesmo domínio, `https://www.guerrasolut.pt`.

O objectivo do site é **ser encontrado e converter**: SEO técnico impecável,
HTML completo sem JavaScript e um caminho curto até ao contacto (telefone,
WhatsApp, formulário).

- **Especificação de produto (contrato):** `PRODUCTS.md` — dados da empresa,
  catálogo de serviços, copy, FAQ, arquitectura de URLs, metas técnicas,
  questões em aberto e decisões tomadas. **Ler antes de escrever código.**
- **Sistema de design:** `DESIGN.md` — norte criativo e paleta. Está
  parcialmente semeado: a cor está resolvida e implementada em
  `src/styles/tokens.css`; tipografia, layout, formas e componentes ainda não.
- **Instalação, comandos e estrutura:** `README.md`.

## Âmbito actual

A base técnica de SEO está montada (layout base, metadados, JSON-LD,
`manifest.json`, `robots.txt`, `sitemap.xml`) e os tokens de cor existem. **O
design e o conteúdo das páginas ainda não estão implementados.**

Próximo passo: header/rodapé e as secções da home (`PRODUCTS.md` §6).

O site só está feito quando as rotas de `PRODUCTS.md` §11 existirem com o copy
da §6 e as metas técnicas da §11 forem cumpridas:

| Métrica | Alvo |
| --- | --- |
| LCP | < 2,0 s (4G móvel) |
| CLS | < 0,05 |
| INP | < 200 ms |
| JS na home | < 40 KB comprimido |
| Lighthouse (mobile) | ≥ 95 nas quatro categorias |
| HTML sem JS | Todo o conteúdo textual presente e legível |

## Stack

**Astro 7** com `output: 'static'`, TypeScript em modo `strict`, Node ≥ 22.12.
Sem framework de UI e sem Tailwind — CSS próprio sobre os tokens de
`src/styles/tokens.css`.

```text
src/
├── components/   # BaseHead.astro (metadados de <head>)
├── config/       # site.ts (empresa, contactos, distritos) e services.ts (catálogo)
├── layouts/      # BaseLayout.astro
├── lib/          # seo.ts (URLs) e schema.ts (JSON-LD)
├── pages/        # cada ficheiro .astro é uma rota
└── styles/       # tokens.css
```

## Regras do repositório

- **Zero JavaScript por defeito.** Ilhas de interactividade apenas onde são
  indispensáveis: menu mobile, modal de contacto, acordeão da FAQ e toggle de
  tema. Qualquer JS novo além destes precisa de justificação.
- **Dados da empresa vivem em `src/config/`.** Telefone, e-mail, distritos e
  serviços não se escrevem à mão dentro de páginas ou componentes — importam-se
  de `site.ts` e `services.ts`.
- **Nada não verificável entra no site.** Sem testemunhos, sem estatísticas
  inventadas, sem `Review`/`AggregateRating`, sem links de redes sociais por
  confirmar (`PRODUCTS.md` §15).
- **URLs com barra final** (`trailingSlash: 'always'`). Canónicos, sitemap e
  ligações internas seguem esta forma.
- **`FAQPage` e `BreadcrumbList`** só em páginas onde o conteúdo correspondente
  está visível no HTML.
- **Imagens** via `astro:assets` (AVIF/WebP + `srcset`), sempre com `alt`.
- **Português europeu** (pt-PT) no site, na documentação e nas mensagens de
  commit — a norma anterior ao acordo ortográfico, como no resto do repositório
  («projecto», «objectivo», «actual»).
- **Commits sem co-autoria.** As mensagens de commit não levam linhas
  `Co-Authored-By:` nem qualquer outra atribuição a agentes ou ferramentas.
- Perguntas por responder pelo cliente estão em `PRODUCTS.md` §14 — não as
  resolver por invenção; registar a dúvida.

## Desenvolvimento

Arrancar o servidor de desenvolvimento em background:

```
astro dev --background
```

Gerir com `astro dev stop`, `astro dev status` e `astro dev logs`.

Antes de dar trabalho por terminado: `npm run build` tem de passar.

## Documentação do Astro

Documentação completa: https://docs.astro.build

Consultar antes de tocar nas áreas correspondentes:

- [Páginas, rotas dinâmicas e middleware](https://docs.astro.build/en/guides/routing/)
- [Componentes Astro](https://docs.astro.build/en/basics/astro-components/)
- [Conteúdo e content collections](https://docs.astro.build/en/guides/content-collections/)
- [Estilos](https://docs.astro.build/en/guides/styling/)
- [Imagens e `astro:assets`](https://docs.astro.build/en/guides/images/)
