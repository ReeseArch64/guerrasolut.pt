---
version: 1
slug: "src-components-homehero-astro"
primary_target: "src/components/HomeHero.astro"
related_targets:
  - "src/pages/index.astro"
  - "src/assets/hero/tecnico-recorte.png"
  - "src/assets/hero/obra-estaleiro-detalhe.png"
---

Âmbito: primeiro ecrã da home (`HomeHero.astro`), montado em `src/pages/index.astro`. Modo: Persuade — o visitante decide se esta empresa lhe resolve a obra, e age.

Público: proprietário, síndico de condomínio ou gestor de obra, maioritariamente em telemóvel, muitas vezes com um problema já em cima. Acção: descrever o projecto, ver serviços, ou ligar. Restrição: zero JS, alvos ≥ 44px, AA nos dois temas, HTML completo sem JavaScript, nada não verificável (`PRODUCTS.md` §15).

## Direction contract

THESIS: o herói é uma **chapa** — a folha branca com o argumento à esquerda, e à direita uma placa preta onde a fotografia está montada como uma peça de equipamento, com bloco de título, grelha técnica e a corrente vermelha na aresta. Recusa o herói de fotografia em `background-image` com texto branco por cima e véu escuro, que é o que todo o site de construção civil faz.

OWN-WORLD: extensão directa do «Quadro Elétrico» do DESIGN.md. Neutros de cromaticidade zero; divisórias de 1px; 4px nos controlos e 12px na chapa; Archivo 800 no `h1` com `--gs-track-display`, Inter no corpo; numeral tabular no telefone; vermelho em três sítios apenas — a corrente, a palavra «sua obra» e o botão primário —, com a faixa de resposta em vermelho lavado para não gastar a Regra do Fio Único.

STORY: o visitante lê o que a empresa faz em duas linhas, vê uma pessoa real de capacete em vez de um banco de imagens genérico, encontra as três provas (visita gratuita, certificação, garantia) sem rolar, e tem três saídas — formulário, serviços, telefone — antes do primeiro scroll.

FIRST VIEWPORT: sobrancelha com fio vermelho, `h1` fluido de 38→64px com «sua obra» em `--gs-accent`, subtítulo, resumo, três provas com visto vermelho, botão cheio + botão de traço, linha de telefone. À direita a chapa 5/6 com bloco de título («Equipa própria · desde …», do `SITE.foundingDate`), figura recortada assente no canto inferior direito e cartão do estaleiro sobreposto em baixo à esquerda. Fecha com a faixa `--gs-wash` de aresta a aresta: resposta em 2 horas, urgências 24h.

FORM: chapa de identificação — derivada da calha DIN do cabeçalho; extensão do mundo existente, sem sorteio de direcção.

FINISH: verificado em 320 / 390 / 768 / 1440 nos dois temas por captura real (iframes, porque o headless do Chrome tem viewport mínimo de 500px); detector mecânico limpo; DESIGN.md actualizado com os tokens da chapa, a escala editorial e o componente.

## Decisões que não se desfazem sem motivo

- **A chapa é escura nos dois temas** (`--gs-plate-*`, ver DESIGN.md). Os recortes são figuras de capacete e camisa brancos; numa chapa clara desaparecem.
- **O plano de detalhe nunca repete a figura.** `obra-estaleiro-detalhe.png` é um recorte só do estaleiro, tirado do canto superior esquerdo de `obra-estaleiro.png`, precisamente porque o enquadramento completo mostra a mesma pessoa que já está na chapa.
- **O `h1` não entra por animação.** É o candidato a LCP; o único movimento é a corrente a chegar.
- **A figura arranca abaixo do bloco de título.** Em coluna estreita, sem esse recuo a legenda cai por cima do capacete.

## Por resolver

- As três imagens são **ilustrações**, não fotografias da empresa. `PRODUCTS.md` §13 mantém «fotografias reais de obras» como a maior lacuna; quando existirem, substituem estes ficheiros sem tocar no componente.
- `src/assets/hero/tecnico-em-obra.png` ficou por usar: é o mesmo enquadramento de `obra-estaleiro.png` em formato quadrado.
- O CTA primário aponta para `/contactos/` porque o **modal de contacto** de `PRODUCTS.md` §6.1 ainda não existe — é uma das ilhas de JS previstas. Quando existir, o botão passa a abri-lo.
- `/contactos/` e `/servicos/` ainda não estão construídas: os dois botões apontam para rotas por criar.
- O **marquee dos 8 serviços** de `PRODUCTS.md` §6.1 não foi construído — fica para quando a secção de serviços da home entrar.
- `SITE.foundingDate` foi alterado de `2012` para `2025` fora deste trabalho. `PRODUCTS.md` §1 continua a dizer 2012 e a copy da §6.1 fala em «mais de uma década». O herói lê o valor do config, seja ele qual for, mas o conflito é real e tem de ser resolvido num dos dois lados.
