---
version: 1
slug: "src-pages-contactos-astro"
primary_target: "src/pages/contactos.astro"
related_targets: []
---

Âmbito: contactos (`/contactos/`). Modo: Operate — o visitante escolhe um canal e usa-o.

## Direction contract

THESIS: a página é um **quadro de contactos**: cinco linhas divididas a fio, cada uma com ícone, etiqueta em maiúsculas e o valor em Archivo, e a corrente vermelha a marcar a linha que a empresa quer que use primeiro — o telefone. À direita, o formulário da §7 num painel com aresta superior vermelha. Recusa o mapa decorativo e o «fale connosco» com três cartões iguais.

OWN-WORLD: telefone com `tabular-nums` a 1,5rem; verde do WhatsApp só no ícone do canal e no botão de envio; campos como poços de painel (`--gs-surface-sunken`, traço forte, 6px); `select` desenhado por inteiro, sem a seta do sistema.

STORY: quem tem pressa liga (primeira linha, maior número da página); quem tem fotografias abre o WhatsApp; quem quer deixar o pedido escrito preenche três campos e envia. A área de actuação fecha a página.

FORM: quadro de linhas + painel de formulário, duas colunas a partir de 64rem.

FINISH: capturas a 390 (iframe) e 1440 nos dois temas; detector limpo; build verde.

## Decisões que não se desfazem sem motivo

- **É a única rota sem CTA final.** O formulário já é o fim do caminho.
- **O painel do formulário declara elevação uma vez** — traço, sem sombra — como manda `DESIGN.md`.
- **O deslize do hover é `translate` do conteúdo**, não `padding` da linha: o fio vermelho tem de ficar colado à aresta e o layout não se refaz.

## Por resolver

- Sem morada nem NIF (§14.1), o NAP fica incompleto e o JSON-LD da empresa continua limitado a `addressCountry: PT`.
- A decisão da §14.2 (só WhatsApp ou submissão real por e-mail/CRM) mantém-se em aberto; hoje é só WhatsApp.
