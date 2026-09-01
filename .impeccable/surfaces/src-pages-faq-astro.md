---
version: 1
slug: "src-pages-faq-astro"
primary_target: "src/pages/faq.astro"
related_targets: []
---

Âmbito: perguntas frequentes (`/faq/`). Modo: Read — o visitante procura uma resposta concreta.

## Direction contract

THESIS: acordeão nativo. Seis `<details>` com o mesmo `name`, o que abre uma de cada vez sem uma linha de JavaScript e mantém as respostas no HTML — condição para emitir `FAQPage`. A pergunta aberta é marcada pela corrente vermelha à esquerda, a mesma marcação de estado do cabeçalho.

OWN-WORLD: número em `tabular-nums`, pergunta em Archivo 700, chevron do conjunto de ícones a rodar 180°, triângulo do sistema removido. Cartão de apoio em `--gs-wash` com aresta vermelha, colado (`sticky`) à direita a partir de 64rem.

STORY: o visitante lê a primeira resposta já aberta, percorre os títulos das outras, e — se a dúvida não estiver lá — tem o cartão «Ficou alguma dúvida?» sempre à vista.

FORM: acordeão em coluna + cartão de apoio colado.

FINISH: capturas a 390 (iframe) e 1440 nos dois temas; detector limpo; build verde.

## Decisões que não se desfazem sem motivo

- **`FAQPage` só aqui**, onde as seis respostas estão visíveis (`PRODUCTS.md` §6.1 e regras do repositório).
- **A primeira pergunta abre por defeito**: mostra a forma da resposta sem obrigar a um clique.
- As perguntas vivem em `src/config/faq.ts` — a home e a pesquisa lêem a mesma fonte.
