# guerrasolut.pt

Site institucional da **Guerra Solut** — instalações elétricas e obras em
Portugal continental.

Reconstrução do site actual em Astro, com foco em **SEO** e **responsividade**.

---

## Estado

🚧 **Arranque.** Está montada a base técnica de SEO — layout base, metadados,
dados estruturados, `manifest.json`, `robots.txt` e `sitemap.xml`. O design e o
conteúdo das páginas ainda não estão implementados.

Próximo passo: tokens de design, header/rodapé e as secções da home.

---

## Documentação

| Ficheiro | Conteúdo |
| --- | --- |
| [`PRODUCTS.md`](./PRODUCTS.md) | **Especificação de produto.** Dados da empresa, catálogo de serviços, copy, FAQ, arquitectura de URLs, metas técnicas e decisões tomadas. Ler antes de escrever código. |
| [`AGENTS.md`](./AGENTS.md) | Instruções para agentes de IA. Fonte única — não criar `CLAUDE.md` nem `GEMINI.md`. |

---

## Stack

- **[Astro 7](https://docs.astro.build)** — output estático (`output: 'static'`).
  HTML completo servido ao crawler, zero JavaScript por defeito.
- **TypeScript** em modo `strict`.
- Ilhas de interactividade apenas onde forem indispensáveis: menu mobile,
  modal de contacto, acordeão da FAQ e toggle de tema.

A escolha do Astro responde directamente ao problema principal do site actual:
é uma SPA React que serve `<div id="app"></div>` e injecta todo o conteúdo por
JavaScript. Ver o diagnóstico completo em [`PRODUCTS.md`](./PRODUCTS.md).

---

## Requisitos

- **Node.js ≥ 22.12.0**

---

## Instalação

```sh
npm install
```

## Comandos

| Comando | Acção |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento em `localhost:4321` |
| `npm run build` | Build de produção para `./dist/` |
| `npm run preview` | Pré-visualização do build local |
| `npm run astro -- --help` | Ajuda da CLI do Astro |

> Para agentes de IA: arrancar o servidor em background com
> `astro dev --background` e geri-lo com `astro dev stop`, `astro dev status`
> e `astro dev logs`. Ver [`AGENTS.md`](./AGENTS.md).

---

## Estrutura

```text
.
├── .agents/skills/     # Skills de agentes (impeccable)
├── public/             # Assets estáticos servidos tal como estão
│   ├── icons/          # Favicons, ícones PWA e tiles Windows
│   ├── manifest.json   # PWA
│   ├── robots.txt      # Indexação + localização do sitemap
│   └── og-image.png    # Imagem de partilha 1200×630
├── src/
│   ├── components/     # BaseHead.astro (metadados de <head>)
│   ├── config/         # site.ts (empresa) e services.ts (catálogo)
│   ├── layouts/        # BaseLayout.astro
│   ├── lib/            # seo.ts (URLs) e schema.ts (JSON-LD)
│   └── pages/          # Cada ficheiro .astro é uma rota
├── astro.config.ts     # site, trailingSlash e integração do sitemap
├── AGENTS.md           # Instruções para agentes de IA
├── PRODUCTS.md         # Especificação de produto
└── skills-lock.json    # Lock das skills instaladas
```

---

## SEO

Toda a configuração parte de dois ficheiros de dados:
[`src/config/site.ts`](./src/config/site.ts) (identidade, contactos, distritos)
e [`src/config/services.ts`](./src/config/services.ts) (catálogo).

| Peça | Onde |
| --- | --- |
| Título, descrição, canónico, robots, Open Graph, Twitter, ícones | `src/components/BaseHead.astro` |
| JSON-LD (`Electrician` + `GeneralContractor`, `WebSite`, `Service`, `BreadcrumbList`, `FAQPage`) | `src/lib/schema.ts` |
| `sitemap-index.xml` (gerado no build) | `@astrojs/sitemap` em `astro.config.ts` |
| `robots.txt`, `manifest.json`, `browserconfig.xml` | `public/` |

Uma página nova só precisa de usar o `BaseLayout` e passar o que a distingue:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import { serviceSchema } from '../lib/schema';
---

<BaseLayout
  title="Instalações Elétricas"
  description="…"
  schemas={[serviceSchema(servico)]}
>
  …
</BaseLayout>
```

> ⚠️ `FAQPage` e `BreadcrumbList` só devem ser emitidos em páginas onde o
> conteúdo correspondente está visível no HTML.

---

## Metas técnicas

| Métrica | Alvo |
| --- | --- |
| LCP | < 2,0 s (4G móvel) |
| CLS | < 0,05 |
| INP | < 200 ms |
| JS enviado na home | < 40 KB comprimido |
| Lighthouse (mobile) | ≥ 95 nas quatro categorias |
| HTML sem JS | Todo o conteúdo textual presente e legível |

Detalhe e restantes requisitos (dados estruturados, acessibilidade,
breakpoints) em [`PRODUCTS.md`](./PRODUCTS.md).

---

## Convenções

- **Português de Portugal** em todo o conteúdo do site e nas mensagens de commit.
- `.editorconfig`: 2 espaços, LF, UTF-8, newline final.
- `AGENTS.md` é a fonte única de instruções para agentes. As pastas e ficheiros
  gerados por ferramentas de IA (`.claude/`, `.gemini/`, `CLAUDE.md`, …) estão
  no `.gitignore`.

---

## Créditos

Desenvolvido por **[ReeseArch64](https://www.reesearch64.tech)**.
