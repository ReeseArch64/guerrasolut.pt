---
version: 1
slug: "src-pages-pesquisa-astro"
primary_target: "src/pages/pesquisa.astro"
related_targets: []
---

Âmbito: pesquisa (`/pesquisa/`), destino do formulário do cabeçalho. Modo: Operate.

## Direction contract

THESIS: o índice inteiro do site vai no HTML. Sem JavaScript, a página é o **directório completo** de tudo o que existe — 8 serviços, 8 páginas, 6 perguntas — agrupado e navegável. Com JavaScript (uma dúzia de linhas, sem biblioteca e sem pedidos ao servidor), os mesmos itens filtram-se ao escrever. Recusa a página de resultados vazia à espera de um backend que este site não tem.

OWN-WORLD: campo de pesquisa como poço de painel com botão vermelho encaixado; grupos separados por etiqueta em maiúsculas e fio de 1px; resultados como linhas com seta, não cartões.

STORY: o visitante escreve no cabeçalho, chega com `?q=`, vê a contagem («3 resultados para «quadro»») e entra. Se não houver nada, o estado vazio dá-lhe duas saídas reais em vez de um encolher de ombros.

FORM: directório filtrável; extensão do mundo existente.

FINISH: verificado com `?q=banho` (1 resultado), `?q=zzz` (estado vazio) e sem `q` (índice completo), a 390 e 1440; detector limpo; build verde.

## Decisões que não se desfazem sem motivo

- **`noindex, follow`** e fora do `sitemap.xml` (filtro em `astro.config.ts`): uma página de resultados não pertence ao índice da Google.
- **A chave de pesquisa é normalizada sem acentos** no build: «eletricas» encontra «Elétricas».
- **Um grupo sem resultados desaparece com o seu título**; o estado é anunciado por `role="status"`.
- **Sem `SearchAction` no JSON-LD**: a caixa de pesquisa da Google exige um endpoint que devolva resultados no servidor, e este filtra no cliente.
