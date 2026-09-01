---
version: 1
slug: "src-pages-sobre-astro"
primary_target: "src/pages/sobre.astro"
related_targets: []
---

Âmbito: página da empresa (`/sobre/`). Modo: Read com intenção de Persuade — o visitante quer saber a quem está a entregar a obra.

## Direction contract

THESIS: prova sem números inventados. `PRODUCTS.md` §15 proíbe testemunhos, estatísticas e classificações; o que resta é o que se pode afirmar — equipa própria, certificações, seguro, orçamento fechado, garantia por escrito — e é isso que estrutura a página. Os cinco diferenciadores são **linhas de uma lista**, não cinco cartões iguais: lêem-se em sequência e a divisória a fio é a gramática da casa.

OWN-WORLD: a chapa escura reaparece com a ilustração de estaleiro, bloco de título e corrente na aresta; a nota de cobertura usa `--gs-wash`; a lista de especialidades é um índice de linhas com seta, onde só o nome desliza no hover.

STORY: quem é a empresa → o que é que isso muda na obra (cinco compromissos) → quem executa cada frente → o que fica por escrito → falar connosco.

FORM: lista técnica numerada, três colunas a partir de 48rem (número · título · texto).

FINISH: capturas a 390 (iframe) e 1440 nos dois temas; detector limpo; build verde.

## Decisões que não se desfazem sem motivo

- **Nenhum número não verificável.** Nem obras feitas, nem clientes, nem anos de garantia.
- **Os distritos ficam no rodapé**, não repetidos aqui: a §6.4 pede âmbito geográfico, e uma frase com as três bases dá-o sem duplicar a lista que já está em todas as páginas.

## Por resolver

- **Conflito de datas por resolver com o cliente:** o `h1` contratado (§6.4) diz «mais de uma década» e `SITE.foundingDate` diz 2025. A página resolve-o pela única leitura que não inventa nada — a empresa está constituída desde 2025 e os técnicos trazem mais de uma década de experiência — mas a §14 tem de confirmar qual é a verdade.
- Sem fotografias reais da empresa (§13): a chapa mostra uma ilustração, e as certificações são afirmadas em texto, não exibidas.
