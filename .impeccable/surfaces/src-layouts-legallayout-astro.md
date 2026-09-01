---
version: 1
slug: "src-layouts-legallayout-astro"
primary_target: "src/layouts/LegalLayout.astro"
related_targets: ["src/pages/termos.astro","src/pages/politica-de-privacidade.astro"]
---

Âmbito: páginas legais (`/politica-de-privacidade/` e `/termos/`) e o esqueleto que partilham (`LegalLayout.astro`). Modo: Read.

## Direction contract

THESIS: quem chega aqui vem ler, não vem comprar — texto simples, coluna de 70ch, índice colado à direita e zero CTA agressivo. E, sobretudo: **a lacuna assinala-se, não se disfarça.** Onde a lei exige um dado que o cliente ainda não forneceu (sede, NIF, alojamento, entidade RAL), a página mostra um bloco «Por confirmar» em `--gs-wash` com ícone e frase, em vez de omitir em silêncio ou inventar.

OWN-WORLD: índice numerado com `decimal-leading-zero` e aresta vermelha no topo; títulos com `scroll-margin` da altura da calha; blocos pendentes com traço vermelho de 2px na aresta interior.

STORY: data de actualização no bloco de título → índice → texto → contacto para dúvidas e assinatura com a data.

FINISH: capturas a 390 (iframe) e 1440 nos dois temas; detector limpo; build verde.

## Decisões que não se desfazem sem motivo

- **O texto descreve o que o site faz de facto**: estático, sem backend, sem cookies, sem analítica. Se isso mudar, o texto muda antes.
- **A data é formatada em `UTC`** — sem isso, o build a oeste de Greenwich publicava o dia anterior.
- **Nenhuma condição contratual inventada**: prazos, faseamento de pagamento e período de garantia remetem para o orçamento escrito, que é onde vivem.

## Por resolver

- §14.1 (sede e NIF), §14.6 (analítica) e §14.7 (alojamento) continuam em aberto e estão assinalados no texto.
- O texto não foi revisto por jurista.
