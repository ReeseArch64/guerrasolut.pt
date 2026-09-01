# guerrasolut.pt

Site institucional da **Guerra Solut** — instalações elétricas e obras em
Portugal continental.

Reconstrução do site actual em Astro, com foco em **SEO** e **responsividade**.

---

## Estado

🚧 **Arranque.** O projecto tem, neste momento, o scaffold do Astro e a
especificação de produto. Ainda não há implementação.

Próximo passo: montar o layout base, os tokens de design e a home.

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
├── src/
│   └── pages/          # Cada ficheiro .astro é uma rota
├── AGENTS.md           # Instruções para agentes de IA
├── PRODUCTS.md         # Especificação de produto
└── skills-lock.json    # Lock das skills instaladas
```

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
