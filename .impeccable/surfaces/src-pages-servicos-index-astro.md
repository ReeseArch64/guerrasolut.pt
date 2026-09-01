---
version: 1
slug: "src-pages-servicos-index-astro"
primary_target: "src/pages/servicos/index.astro"
related_targets: []
---

Âmbito: índice de serviços (`/servicos/`). Modo: Persuade — o visitante escolhe a especialidade que lhe resolve a obra e entra na página dela.

## Direction contract

THESIS: a grelha é o **esquema de um quadro elétrico**: oito circuitos numerados (01–08), cada um com o seu fio na aresta superior, o nome em Archivo, as chapas de identificação (tags) e uma saída. Recusa o cartão com ícone genérico por cima do título, que é o que todo o site de multisserviços faz — os ícones não distinguiriam «pintura» de «pladur» e só acrescentariam ruído.

OWN-WORLD: `--gs-wash` marca o cartão âncora (`primary`), com a etiqueta «Especialidade principal» em traço vermelho; os dois `featured` ocupam duas colunas a partir de 72rem. O fio de 2px abre em `scaleX` no hover e está permanentemente aberto no cartão âncora — a mesma marcação de estado do cabeçalho.

STORY: o visitante lê o título, percebe em três segundos que a eletricidade é a origem da casa, encontra o seu serviço na grelha, e — se não souber qual é — desce para os quatro passos do processo antes do CTA final.

FIRST VIEWPORT: bloco de título, `h1` fluido, intro de duas linhas, e o cartão âncora já visível em ecrã de secretária.

FORM: grelha de circuitos; extensão do mundo existente.

FINISH: capturas a 390 (iframe) e 1440 nos dois temas; detector limpo; build verde.

## Decisões que não se desfazem sem motivo

- **O cartão inteiro é alvo** por `::after` sobre o link, mas o link continua a ser o único elemento focável e anunciado.
- **Os números 01–08 são índice, não decoração**: dão à lista a ordem que `PRODUCTS.md` §2 fixa (a eletricidade é a primeira).
- **O processo repete-se aqui** e não tem página própria (§6.1): é conteúdo curto e converte.

## Por resolver

- As oito rotas `/servicos/{slug}/` ainda não existem: a grelha, o cabeçalho e o rodapé já apontam para elas.
