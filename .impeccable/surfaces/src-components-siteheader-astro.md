---
version: 1
slug: "src-components-siteheader-astro"
primary_target: "src/components/SiteHeader.astro"
related_targets: []
---

Âmbito: cabeçalho global do site (`SiteHeader.astro`), presente em todas as rotas. Modo: Operate — o visitante quer chegar a um serviço ou a uma pessoa.

Público: proprietário, síndico de condomínio ou gestor de obra, maioritariamente em telemóvel, muitas vezes com um problema urgente. Acção: ligar, ou abrir o serviço certo. Restrição: zero JS, alvos ≥ 44px, AA nos dois temas, sem inventar factos.

## Direction contract

THESIS: o cabeçalho é uma calha de quadro elétrico — uma barra branca ou preta, divisórias a fio, e a corrente vermelha a marcar exactamente onde estamos. Recusa a barra flutuante arredondada com pílula colorida que todo o site de serviços usa.

OWN-WORLD: neutros de cromaticidade zero sobre `--gs-bg`; divisórias de 1px; cantos de 4–6px nos controlos, 12px no painel suspenso; Archivo 700/800 em maiúsculas estreitas para etiquetas e wordmark, Inter para o resto; numeral tabular no telefone; ícones traçados a 1,75px numa grelha de 24. Vermelho só em dois sítios: o segmento activo da calha e o preenchimento do botão.

STORY: o visitante reconhece a empresa, vê o telefone sem procurar, percebe em que página está pela linha vermelha, e tem um caminho de um clique para falar.

FIRST VIEWPORT: barra fixa de 72px (60px em mobile). Esquerda: marca + wordmark. Centro: quatro ligações, `Serviços` com painel de 8 serviços em duas colunas. Direita: campo de pesquisa em poço, divisória a fio, telefone com ícone, e o botão vermelho `Falar connosco` no canto. Em mobile: marca, botão de telefone e `<details>` que abre a folha com pesquisa, ligações, serviços, telefone e botão.

FORM: calha DIN — primeira da lista derivada do «Quadro Elétrico» do DESIGN.md; extensão do mundo existente, sem sorteio de direcção.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Por resolver

- `/pesquisa/` ainda não existe: o formulário aponta para lá e a página é o passo seguinte. Só então se acrescenta `SearchAction` ao JSON-LD.
- Toggle de tema (PRODUCTS.md §8) fica de fora desta peça — é uma ilha de JS própria.
