---
version: 1
slug: "src-components-sitefooter-astro"
primary_target: "src/components/SiteFooter.astro"
related_targets: ["src/components/CtaFinal.astro","src/components/PageHeader.astro","src/components/ContactForm.astro","src/styles/base.css"]
---

Âmbito: rodapé global (`SiteFooter.astro`), bloco de CTA final (`CtaFinal.astro`), cabeçalho de página interna (`PageHeader.astro`) e formulário de contacto (`ContactForm.astro`) — as quatro peças partilhadas por todas as rotas construídas nesta passagem. Modo: Persuade (CTA, formulário) e Operate (rodapé, cabeçalho).

## Direction contract

THESIS: as peças partilhadas não inventam mundo — estendem a calha e a chapa. O cabeçalho de página é o **bloco de título de um desenho técnico**: migalhas em Archivo maiúsculo, fio de 1px por baixo, e os primeiros 3rem desse fio a vermelho. O rodapé é o **esquema do quadro**: a lista completa de circuitos, dividida a fio. O CTA final é o **bloco invertido** de `DESIGN.md`, o único sítio onde a página fica preta.

OWN-WORLD: `.gs-btn` (cheia / traço / whatsapp), `.gs-link`, `.gs-label` e `.gs-section` passaram para `base.css` — os botões apareciam em quase todas as secções e não podiam divergir entre elas. `HomeHero.astro` foi migrado para essas classes sem alterar um pixel.

STORY: qualquer página interna abre por «onde estou», fecha por «o que faço agora» e assenta num rodapé que dá acesso às 8 rotas de serviço sem voltar ao topo.

FORM: extensão directa; sem sorteio de direcção.

FINISH: capturas reais a 390 (iframe) e 1440 nos dois temas; detector mecânico limpo; `npm run build` verde.

## Decisões que não se desfazem sem motivo

- **O CTA final não entra em `/contactos/`.** O formulário já é o fim do caminho; um segundo apelo por baixo dele seria ruído.
- **O verde do WhatsApp leva sempre texto preto** e só aparece em controlos que abrem o WhatsApp (`--gs-success`, `--gs-success-hover`).
- **O formulário não submete para servidor.** Compõe a mensagem da §7 e abre o WhatsApp; sem JavaScript, o `action` abre a conversa na mesma, e o `<noscript>` explica o que muda.
- **O erro de campo leva ícone e frase**, nunca só cor: a marca e o erro são o mesmo vermelho por desenho.
- **Astro 7 come o espaço entre texto e elemento quando há quebra de linha.** Em prosa, marcar com `{' '}` — foi o que partiu «desde2025» e «Telefone+351…» na primeira montagem.

## Por resolver

- O modal de contacto da §7 e a barra fixa de acções em telemóvel (§8) continuam por construir; os CTAs apontam para `/contactos/`.
- O toggle de tema (§8) não existe: o tema é o do sistema.
