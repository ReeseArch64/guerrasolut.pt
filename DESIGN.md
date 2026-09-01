---
name: Guerra Solut
description: Vermelho de sinalética, branco de folha técnica e preto de obra — a paleta de uma empresa de instalações elétricas portuguesa.
colors:
  red-50: "#fff2ef"
  red-100: "#ffe4e0"
  red-200: "#ffbfb4"
  red-300: "#ff8575"
  red-400: "#ff5544"
  red-500: "#ed0000"
  red-600: "#c20000"
  red-700: "#9f0000"
  red-800: "#790000"
  red-900: "#550000"
  red-950: "#340000"
  red-wash-dark: "#220806"
  red-wash-dark-edge: "#40140f"
  ink-0: "#ffffff"
  ink-50: "#fafafa"
  ink-100: "#f5f5f5"
  ink-200: "#e5e5e5"
  ink-300: "#d4d4d4"
  ink-400: "#a3a3a3"
  ink-500: "#8a8a8a"
  ink-600: "#737373"
  ink-700: "#525252"
  ink-800: "#3d3d3d"
  ink-900: "#2a2a2a"
  ink-950: "#1e1e1e"
  ink-975: "#141414"
  ink-1000: "#0a0a0a"
  green-whatsapp: "#25d366"
  amber-600: "#b45309"
  amber-400: "#fbbf24"
---

<!-- SEED PARCIAL: a cor está resolvida e implementada em `src/styles/tokens.css`.
     Tipografia, layout, profundidade, formas e componentes ainda não existem —
     as secções correspondentes estão deliberadamente ausentes. Voltar a correr
     `$impeccable document` quando houver componentes construídos. -->

# Design System: Guerra Solut

## Overview

**Creative North Star: "O Quadro Elétrico"**

Um quadro elétrico aberto é o objecto mais honesto desta empresa: uma chapa
branca, calhas pretas, e um único fio vermelho que indica onde está a corrente.
Nada é decorativo. Tudo está lá porque tem função, e a cor mais forte do
conjunto é a que sinaliza perigo e energia — usada uma vez, no sítio certo.

O sistema tem três cores e recusa uma quarta. O vermelho é o do logótipo:
matiz 0 puro, sem laranja e sem rosa, o vermelho da sinalética de obra e do
botão de emergência. O branco não é um branco quente de papel de livro — é a
folha de um caderno técnico, com cinzentos rigorosamente acromáticos por cima.
O preto não é um azul-escuro disfarçado de preto: é `#0a0a0a`, com degraus
neutros até ao cinzento. A ausência de temperatura nos neutros é o que faz o
vermelho arder; um cinzento avermelhado roubaria-lhe metade do impacto.

O tema escuro não é uma cortesia — é onde a marca está em casa. O lettering do
logótipo é branco, desenhado para fundo escuro, e o vermelho puro atinge o seu
contraste máximo sobre `#0a0a0a`. O tema claro é a leitura diurna, no telemóvel,
ao sol, em cima de um andaime; o tema escuro é a identidade.

**Key Characteristics:**

- Três cores de marca. Não há quarta. O âmbar do site anterior foi eliminado.
- Vermelho de matiz 29,2° em OKLCH — a matiz exacta amostrada do logótipo.
- Neutros de cromaticidade zero. Nenhum cinzento é temperado.
- Dois vermelhos operacionais que o olho lê como um só: um para preenchimentos,
  outro para texto. A distinção existe apenas onde o contraste a obriga.
- Todos os pares texto/fundo do sistema passam WCAG AA nos dois temas.

## Colors

A paleta tem duas escalas primitivas — uma vermelha e uma neutra — e uma camada
semântica por cima. **Componentes nunca tocam nos degraus das escalas.** Usam os
tokens semânticos, que são os únicos que mudam com o tema.

### Primary

- **Vermelho Guerra** (`red-500`, `#ed0000`): o vermelho do logótipo. Amostrado
  do gradiente do ficheiro de marca (`#d40000` → `#ff0000`), matiz 0 exacta,
  sem uma gota de verde ou azul. É a cor de **preenchimento**: botões primários,
  faixas, fundos de destaque, o logótipo. Mantém-se **idêntico nos dois temas** —
  um botão vermelho é o mesmo vermelho de dia e de noite. Texto branco por cima
  dá 4,56:1 (AA ✓).
- **Vermelho de Acção** (`red-600` no tema claro, `#c20000`, 6,38:1 sobre
  branco): o mesmo vermelho, escurecido apenas o suficiente para poder ser
  **texto**. Links, ícones pequenos, números, hover do preenchimento primário.
- **Vermelho de Acção, escuro** (`red-400` no tema escuro, `#ff5544`, 6,26:1
  sobre `#0a0a0a`): o equivalente no tema escuro, clareado em vez de escurecido.

### Neutral

- **Branco Técnico** (`ink-0`, `#ffffff`): fundo do tema claro. Branco puro, não
  quebrado. A folha, não o papel.
- **Preto de Obra** (`ink-1000`, `#0a0a0a`): fundo do tema escuro e cor do texto
  no tema claro. Também o fundo do bloco invertido — a secção preta que corta
  uma página clara ao meio.
- **Degraus de suporte** (`ink-50` a `ink-975`): superfícies, bordas e texto
  secundário. Cromaticidade zero em todos, sem excepção.

### Named Rules

**A Regra dos Dois Vermelhos.** Há dois vermelhos operacionais e uma linha que
os separa: `--gs-brand` **preenche**, `--gs-accent` **escreve**. Vermelho como
cor de texto, ícone abaixo de 24px ou traço fino usa sempre `--gs-accent`.
Vermelho como fundo de botão, faixa, badge ou bloco usa sempre `--gs-brand`.
Trocar os dois não parte o design — parte a acessibilidade, silenciosamente.

**A Regra do Fio Único.** O vermelho ocupa no máximo 10% da área de qualquer
ecrã. Um ecrã com dois blocos vermelhos grandes já não tem cor de destaque:
tem fundo vermelho. Se um segundo elemento pede vermelho, um dos dois está a
pedir a coisa errada.

**A Regra do Cinzento Frio.** Nenhum neutro é temperado com vermelho. Quem
quiser aquecer uma superfície usa `--gs-wash` (vermelho lavado), não um
cinzento avermelhado. Um cinzento com 2% de cromaticidade não se lê como
elegante — lê-se como um vermelho mal calibrado, e rouba impacto ao verdadeiro.

**A Regra do Vermelho Único.** O vermelho de marca e o vermelho de erro são o
mesmo vermelho. Isto é uma consequência assumida de uma paleta de três cores:
um estado de erro **nunca** se distingue por matiz. Distingue-se por
`--gs-danger-wash` como fundo, por um ícone e pela frase. Um erro sem ícone e
sem texto explícito é indistinguível de uma promoção.

**A Regra do Verde Emprestado.** `--gs-success` (`#25d366`) é o verde do
WhatsApp, imposto pela plataforma e **não é cor de marca**. Aparece apenas em
controlos que abrem o WhatsApp, nunca em ilustração, ícone genérico ou estado de
sucesso de formulário. Leva **sempre texto preto** — branco sobre este verde dá
1,98:1 e é ilegível. É a única cor do sistema fora do eixo vermelho/neutro.

**A Regra do Âmbar Proibido.** O âmbar do site anterior (`#f5b301`) foi
eliminado da marca. `amber-600` / `amber-400` existem só para alertas de
sistema — um aviso de formulário, uma nota de indisponibilidade. Âmbar em
conteúdo editorial, faixas de obra ou ilustração é um regresso à paleta antiga.
As faixas de obra são vermelho sobre preto.

### Mapa semântico

`Claro` e `Escuro` referem degraus das escalas acima; os valores exactos estão
na frontmatter e em `src/styles/tokens.css`.

| Token | Papel | Claro | Escuro |
| --- | --- | --- | --- |
| `--gs-bg` | Fundo da página | `ink-0` | `ink-1000` |
| `--gs-bg-subtle` | Faixa de secção alternada | `ink-50` | `ink-975` |
| `--gs-surface` | Cartão sobre o fundo | `ink-0` | `ink-975` |
| `--gs-surface-raised` | Modal, dropdown, hover de cartão | `ink-0` | `ink-950` |
| `--gs-surface-sunken` | Campo de formulário, poço | `ink-100` | `ink-1000` |
| `--gs-border` | Traço por defeito | `ink-200` | `ink-900` |
| `--gs-border-strong` | Divisória estrutural, contorno de input | `ink-300` | `ink-800` |
| `--gs-text` | Texto corrente | `ink-1000` | `ink-50` |
| `--gs-text-muted` | Descrições, legendas | `ink-700` | `ink-400` |
| `--gs-text-subtle` | Metadados, placeholders | `ink-600` | `ink-500` |
| `--gs-brand` | Preenchimento de marca | `red-500` | `red-500` |
| `--gs-brand-hover` | Hover do preenchimento | `red-600` | `red-400` |
| `--gs-brand-active` | Estado premido | `red-700` | `red-500` |
| `--gs-on-brand` | Texto sobre preenchimento de marca | `ink-0` | `ink-0` |
| `--gs-accent` | Vermelho como texto, link, ícone pequeno | `red-600` | `red-400` |
| `--gs-accent-hover` | Hover do link | `red-700` | `red-300` |
| `--gs-wash` | Fundo de etiqueta / cartão âncora | `red-50` | `red-wash-dark` |
| `--gs-wash-edge` | Traço do lavado | `red-100` | `red-wash-dark-edge` |
| `--gs-wash-text` | Texto sobre o lavado | `red-600` | `red-400` |
| `--gs-inverse-bg` | Bloco invertido | `ink-1000` | `ink-50` |
| `--gs-inverse-text` | Texto do bloco invertido | `ink-50` | `ink-1000` |
| `--gs-inverse-accent` | Vermelho dentro do bloco invertido | `red-400` | `red-600` |
| `--gs-focus` | Anel de foco | `red-500` | `red-400` |
| `--gs-success` | WhatsApp (não é marca) | `green-whatsapp` | `green-whatsapp` |
| `--gs-on-success` | Texto sobre o verde — sempre preto | `ink-1000` | `ink-1000` |
| `--gs-warning` | Alerta de sistema | `amber-600` | `amber-400` |
| `--gs-danger` | Erro (é o mesmo vermelho) | `red-600` | `red-400` |
| `--gs-selection-bg` | Selecção de texto | `red-500` | `red-500` |
| `--gs-caret` | Cursor de escrita | `red-600` | `red-400` |

### Contraste verificado

Rácios WCAG 2.1 medidos, não estimados. Todos os pares abaixo são AA para texto
normal (≥ 4,5:1).

| Par | Claro | Escuro |
| --- | --- | --- |
| Texto corrente sobre o fundo | 19,80:1 | 18,97:1 |
| Texto atenuado sobre o fundo | 7,81:1 | 7,85:1 |
| Texto ténue sobre a superfície | 4,74:1 | 5,34:1 |
| Vermelho de acção sobre o fundo | 6,38:1 | 6,26:1 |
| Texto sobre preenchimento de marca | 4,56:1 | 4,56:1 |
| Vermelho de acção sobre o lavado | 5,83:1 | 6,00:1 |
| Preto sobre o verde WhatsApp | 9,98:1 | 9,98:1 |
| Anel de foco sobre o fundo | 4,56:1 | 6,26:1 |

O único par que se aproxima do limite é **texto branco sobre `red-500`**
(4,56:1). Passa AA, mas não tem folga: nunca reduzir esse texto abaixo de 16px
regular ou 14px semibold, e nunca aplicar-lhe opacidade.

## Do's and Don'ts

### Do:

- **Do** usar `--gs-brand` para preencher e `--gs-accent` para escrever. É a
  única distinção entre os dois vermelhos e a razão por que o sistema passa AA.
- **Do** manter `red-500` igual nos dois temas em qualquer preenchimento. A
  constância do vermelho é o que torna a marca reconhecível entre temas.
- **Do** consumir sempre tokens semânticos (`--gs-*` sem número). Um degrau de
  escala escrito directamente num componente não muda com o tema e vai partir
  num dos dois.
- **Do** pôr texto **preto** em cima do verde do WhatsApp, sem excepção.
- **Do** desenhar as superfícies que o browser desenharia sozinho: selecção,
  cursor, barra de deslocamento e anel de foco já estão nos tokens e aplicadas
  em `tokens.css`.
- **Do** dar ao anel de foco 2px de espessura e 2px de afastamento. Sobre um
  botão vermelho é o afastamento — não a cor — que o torna visível.

### Don't:

- **Don't** introduzir uma quarta cor de marca. O âmbar já foi removido uma vez;
  laranja, azul e verde-de-sucesso são a mesma tentação com outro nome.
- **Don't** temperar os neutros. Cinzento com matiz vermelha anula o contraste
  crómico de que a paleta vive.
- **Don't** usar `red-500` como cor de texto sobre branco em tamanho corrente
  (4,56:1 sem folga, e falha assim que houver antialiasing subpíxel adverso).
  Esse é o trabalho do `--gs-accent`.
- **Don't** distinguir erro de marca por matiz. São o mesmo vermelho por
  desenho: o erro identifica-se por lavado, ícone e frase.
- **Don't** usar o verde do WhatsApp como cor genérica de sucesso. Fora de um
  controlo que abre o WhatsApp, o verde não pertence a este sistema.
- **Don't** encher mais de 10% de um ecrã com vermelho. Passado esse ponto
  deixa de ser sinal e passa a ser fundo, e a página perde a hierarquia.
- **Don't** aplicar opacidade a texto sobre vermelho ou sobre preto para o
  atenuar. Existem `--gs-text-muted` e `--gs-inverse-text-muted` justamente
  para isso, com contraste já verificado.
