# Guerra Solut — Especificação de Produto

Documento de referência do site **guerrasolut.pt** — este repositório é o site,
construído em Astro com foco em **SEO** e **responsividade**.

> **Este projecto substitui a versão anterior do site no mesmo domínio**
> (`https://www.guerrasolut.pt/`). A versão anterior — uma SPA React/Vite — foi
> apenas fonte dos dados da empresa, não base de design nem de estrutura: a
> construção é de raiz.
>
> Todo o conteúdo abaixo é a **especificação viva deste site**, não a descrição
> de um site externo. Os dados foram extraídos da versão anterior (bundle
> JavaScript, `manifest.json` e JSON-LD do `index.html`) em 2025-09-01 e, a
> partir daqui, a fonte de verdade é este documento em conjunto com
> `src/config/site.ts`.

---

## 1. Identidade da empresa

| Campo | Valor |
| --- | --- |
| Nome comercial | Guerra Solut |
| Razão social | Guerra Solut, Unipessoal Lda. |
| Domínio | `https://www.guerrasolut.pt/` (este site — ver `SITE.url` em `src/config/site.ts`) |
| Ano de fundação | 2025 |
| Sector | Instalações elétricas + construção civil (`Electrician`, `GeneralContractor`) |
| Especialidade de origem | Instalações elétricas |
| Posicionamento | Empresa portuguesa de serviços técnicos e construção civil, com equipa própria multidisciplinar, ao serviço de particulares, empresas e condomínios |
| Faixa de preço | `€€` |
| Idioma | Português de Portugal (`pt-PT`) |

### Contactos

| Canal | Valor |
| --- | --- |
| Telefone | `+351 964 148 843` (`tel:+351964148843`) |
| WhatsApp | `https://wa.me/351964148843` (canal de conversão principal) |
| Email | `contacto@guerrasolut.pt` |
| Horário | Seg–Dom, 08h–20h |
| Urgências | 24h / 7 dias |
| Morada | Sem morada pública — apenas `addressCountry: PT` |

### Áreas de actuação

Portugal continental. Equipas com base em **Lisboa, Porto e Braga**.
Distritos listados no rodapé:

`Lisboa` · `Porto` · `Braga` · `Setúbal` · `Coimbra` · `Aveiro` · `Faro` · `Leiria` · `Santarém` · `Viseu`

> Para obras fora destas zonas, a deslocação é confirmada no orçamento.

---

## 2. Catálogo de serviços

Oito serviços. A **Instalações Elétricas** é o serviço âncora (`primary`) — é a
especialidade de origem e deve manter destaque visual e prioridade de SEO.
`Instalações Elétricas` e `Construção Civil` são cartões destacados (`featured`,
ocupam o dobro da largura na grelha).

| # | Slug | Serviço | Descrição | Tags | Destaque |
| --- | --- | --- | --- | --- | --- |
| 1 | `electricidade` | **Instalações Elétricas** | A nossa especialidade de origem: instalação, remodelação e manutenção de redes elétricas em habitação, comércio e indústria, com quadros, certificação e assistência a avarias. | Quadros elétricos · Certificação · Avarias · Iluminação | `featured` + `primary` |
| 2 | `construcao` | **Construção Civil** | Obra nova, ampliações, estruturas e acabamentos executados com acompanhamento técnico do início ao fim. | Obra nova · Ampliações · Acabamentos | `featured` |
| 3 | `remodelacao` | **Remodelação** | Cozinhas, casas de banho, escritórios e espaços comerciais renovados com prazos cumpridos. | Cozinhas · Casas de banho · Chave na mão | — |
| 4 | `pintura` | **Pintura** | Pintura interior e exterior, tratamento de fachadas e impermeabilização. | Interior · Fachadas | — |
| 5 | `pladur` | **Pladur & Gesso** | Divisórias, tectos falsos e isolamento acústico e térmico. | Tectos falsos · Isolamento | — |
| 6 | `canalizacao` | **Canalização** | Detecção de fugas, tubagens, desentupimentos e loiças sanitárias. | Fugas · Desentupimentos | — |
| 7 | `climatizacao` | **Climatização** | Ar condicionado, ventilação e sistemas AVAC instalados e mantidos. | AVAC · Manutenção | — |
| 8 | `acessos` | **Controlo de Acessos** | Portões automáticos, videoporteiros e acessos para condomínios. | Portões · Videoporteiro | — |

Opção adicional no formulário de contacto: **Outro serviço**.

---

## 3. Diferenciadores ("Porquê a Guerra Solut")

Cinco razões pelas quais condomínios, empresas e famílias voltam a contratar-nos.

1. **Certificados e seguros** — Técnicos com as certificações exigidas por lei e seguro de responsabilidade civil em todas as obras.
2. **Orçamento sem surpresas** — Valor fechado por escrito antes de começar. O que está no orçamento é o que paga no fim.
3. **Resposta rápida** — Resposta em menos de 2 horas e assistência a urgências 7 dias por semana, todo o ano.
4. **Garantia por escrito** — Materiais de primeira e garantia em todos os trabalhos executados pela nossa equipa.
5. **Equipa própria** — Profissionais internos por especialidade, com formação contínua — sem subcontratação anónima.

### Bullets da secção "Sobre"

- Técnicos certificados e com experiência comprovada
- Orçamentos fechados, sem custos inesperados no fim
- Garantia por escrito em todos os trabalhos executados
- Atendimento 7 dias por semana, incluindo urgências

### Bullets do herói

- Visita técnica gratuita
- Eletricistas certificados
- Garantia por escrito

---

## 4. Processo ("Como trabalhamos")

Um processo simples e transparente, para saber sempre em que ponto está o seu projecto.

| Passo | Título | Descrição |
| --- | --- | --- |
| `01` | Contacto | Descreva o que precisa por telefone ou WhatsApp. Respondemos em menos de 2 horas. |
| `02` | Visita técnica | Deslocamo-nos ao local para avaliar a obra, medir e esclarecer todas as dúvidas. |
| `03` | Orçamento fechado | Recebe uma proposta detalhada, com prazos e valores fixos, sem compromisso. |
| `04` | Execução e entrega | Executamos no prazo acordado, limpamos o espaço e entregamos com garantia por escrito. |

---

## 5. FAQ

Fonte directa para o bloco `FAQPage` de dados estruturados.

1. **Como é que recebo um orçamento?**
   Comece por nos descrever o que precisa. Depois de percebermos o trabalho, agendamos uma visita técnica ao local — só aí conseguimos apresentar um valor fiável. A visita e o orçamento são gratuitos e sem compromisso.

2. **Em quanto tempo recebo resposta?**
   Respondemos a todos os pedidos em menos de 2 horas durante o horário de funcionamento. Em situações de urgência, temos linha aberta 24h.

3. **Trabalham em que zonas de Portugal?**
   Cobrimos todo o território continental, com equipas com base em Lisboa, Porto e Braga. Para obras fora destas zonas, a deslocação é confirmada no orçamento.

4. **Os trabalhos têm garantia?**
   Sim. Todos os trabalhos são entregues com garantia por escrito, cujo período varia consoante o tipo de intervenção e os materiais aplicados.

5. **Emitem factura e trabalham com seguro?**
   Sim. Emitimos factura com IVA em todos os serviços e a empresa mantém seguro de responsabilidade civil activo para todas as obras.

6. **Fazem obras para empresas e condomínios?**
   Sim. Uma parte significativa do nosso trabalho são contratos de manutenção com condomínios, escritórios, lojas e restaurantes, com condições ajustadas ao volume.

Cartão de apoio: **"Ficou alguma dúvida?"** — Explique-nos o caso e damos-lhe uma resposta concreta. → botão `Perguntar`.

---

## 6. Copy das páginas

> **Este site é multipágina, não uma landing page com âncoras.** Cada rota da
> §11 é uma página real, com `<h1>` próprio, `title`/`description` próprios,
> canónico próprio e entrada no sitemap. As âncoras (`#servicos`, `#faq`, …)
> deixam de existir como arquitectura: usam-se apenas para saltar dentro da
> página onde já se está (por exemplo, o link «saltar para o conteúdo»).
>
> A home deixa de conter «tudo». Passa a ser uma página de entrada que
> apresenta cada tema em resumo e encaminha para a página respectiva.

### 6.1 Home (`/`)

#### Herói

- **Eyebrow:** Especialistas em instalações elétricas
- **H1:** A solução certa para a **sua obra**
- **Subtítulo:** Especialistas em **instalações elétricas** — e, a partir daí, construção civil, remodelação e todas as restantes especialidades na mesma equipa.
- **CTA primário:** `Descrever o meu projecto` → abre modal de contacto
- **CTA secundário:** `Ver serviços` → `/servicos/`
- **Faixa destacada:** "Resposta a pedidos em menos de 2 horas" / "Urgências atendidas 24h por dia, 7 dias por semana."
- **Marquee:** lista rolante com os 8 serviços, cada item ligado à sua página

#### Serviços (resumo)

- **Eyebrow:** Os nossos serviços
- **H2:** Tudo o que a sua obra precisa, **numa só equipa**
- **Descrição:** A eletricidade é o nosso ramo principal — e à volta dela coordenamos internamente todas as restantes especialidades, para não ter de andar atrás de vários prestadores.
- Etiqueta no cartão âncora: `Especialidade principal`
- Cada cartão liga a `/servicos/{slug}/`; no fim da grelha, `Ver todos os serviços` → `/servicos/`

#### Processo (resumo)

- **Eyebrow:** Como trabalhamos
- **H2:** Do primeiro contacto à **entrega da obra**
- **Descrição:** Um processo simples e transparente, para saber sempre em que ponto está o seu projecto.
- Os quatro passos da §4 ficam completos na home (é conteúdo curto e converte); não têm página própria.

#### Porquê nós

- **Eyebrow:** Porquê a Guerra Solut
- **H2:** O compromisso que nos **distingue**
- **Descrição:** Cinco razões pelas quais condomínios, empresas e famílias voltam a contratar-nos.
- **Cartão CTA:** "Ainda tem dúvidas sobre a sua obra?"

#### Sobre (resumo)

- **Eyebrow:** Sobre a Guerra Solut
- **H2:** Mais de uma década **ao seu serviço**
- **P1:** A **Guerra Solut** nasceu das instalações elétricas e é hoje uma empresa portuguesa de serviços técnicos e construção civil, ao serviço de particulares, empresas e condomínios em todo o território continental desde 2025.
- **P2:** Com equipa própria e multidisciplinar, entregamos obras completas — do projecto ao acabamento — com o mesmo rigor numa pequena reparação ou numa remodelação integral.
- **Link:** `Conhecer a empresa` → `/sobre/`

#### FAQ (resumo)

- **Eyebrow:** Perguntas frequentes
- **H2:** As dúvidas que nos **colocam mais vezes**
- **Descrição:** Se a sua pergunta não estiver aqui, fale connosco — respondemos no próprio dia.
- Mostra **as 3 primeiras** perguntas da §5, com `Ver todas as perguntas` → `/faq/`.
- **`FAQPage` só na página `/faq/`**, onde as seis perguntas estão visíveis no HTML.

#### CTA final

- **H2:** Pronto para começar a sua obra?
- **P:** Conte-nos o que precisa de fazer. Respondemos em menos de 2 horas e agendamos a visita técnica — gratuita e sem compromisso.
- **CTAs:** `Descrever o meu projecto` · `WhatsApp` · `+351 964 148 843`

### 6.2 Índice de serviços (`/servicos/`)

- **H1:** Serviços de eletricidade, construção e remodelação
- **Intro:** Uma equipa própria para toda a obra — da instalação elétrica ao acabamento final. Escolha o serviço para perceber o que fazemos e pedir orçamento.
- Grelha com os 8 serviços da §2 (descrição + tags), cada um a ligar para a sua página.
- Termina com o bloco CTA final.

### 6.3 Página de serviço (`/servicos/{slug}/`)

Estrutura comum às oito páginas — o conteúdo específico de cada uma escreve-se
a partir da §2 e das palavras-chave da §12:

1. **H1:** nome do serviço + intenção (ex.: `Instalações elétricas certificadas`)
2. Parágrafo de abertura (descrição da §2, desenvolvida)
3. **O que fazemos** — lista de trabalhos concretos (a partir das tags)
4. **Como trabalhamos** — os quatro passos da §4, resumidos
5. **Onde trabalhamos** — Portugal continental, com os distritos da §1
6. **Perguntas frequentes** — 2 a 3 perguntas específicas do serviço (só com
   `FAQPage` se estiverem visíveis)
7. **CTA final** — modal · WhatsApp · telefone
8. `Service` + `BreadcrumbList` em JSON-LD; ligações cruzadas para 2–3 serviços relacionados

### 6.4 Sobre (`/sobre/`)

- **H1:** Mais de uma década ao serviço da sua obra
- Desenvolve os dois parágrafos de 6.1 com: história desde 2025, equipa própria
  por especialidade, certificações e seguro, âmbito geográfico.
- Inclui os diferenciadores da §3 e os bullets da §3.
- Fotografias reais quando existirem (§13).

### 6.5 Contactos (`/contactos/`)

- **H1:** Falar com a Guerra Solut
- NAP completo disponível (telefone, e-mail, horário, área de actuação), cada
  canal como link accionável (`tel:`, `mailto:`, `wa.me`).
- Formulário da §7 **em página**, não só em modal.
- Bloco "Onde trabalhamos" com os 10 distritos.

### 6.6 FAQ (`/faq/`)

- **H1:** Perguntas frequentes
- As seis perguntas da §5, completas e visíveis no HTML, em acordeão (com o
  conteúdo presente sem JS).
- Cartão de apoio "Ficou alguma dúvida?" → `Perguntar`.
- `FAQPage` + `BreadcrumbList`.

### 6.7 Páginas legais

- `/politica-de-privacidade/` e `/termos/` — texto simples, sem CTA agressivo,
  com data de última actualização.

### 6.8 Rodapé (em todas as páginas)

- **Descrição:** Especialistas em instalações elétricas, construção civil e remodelação. Rigor, prazos cumpridos e garantia por escrito desde 2025.
- **Colunas:** Serviços (8 links para `/servicos/{slug}/`) · Empresa (`/sobre/`, `/faq/`, `/contactos/`, legais) · Contactos (telefone, email, horário, "Portugal continental")
- **Bloco:** "Onde trabalhamos" com os 10 distritos
- **Copyright:** © {ano} [ReeseArch64](https://www.reesearch64.tech) · Todos os direitos reservados.
  **Decisão:** o crédito de desenvolvimento é da ReeseArch64 e mantém-se. Ano dinâmico.

---

## 7. Formulário de contacto

Disponível em dois sítios com o mesmo conteúdo: **modal** ("drawer" em mobile,
diálogo em desktop), aberto pelos CTAs de qualquer página, e **em página** em
`/contactos/`. **Não submete para servidor** — compõe uma mensagem e abre o
WhatsApp.

- **Título:** Fale-nos do seu projecto
- **Subtítulo:** Descreva a necessidade. Respondemos em menos de 2 horas.

| Campo | Tipo | Obrigatório | Placeholder |
| --- | --- | --- | --- |
| `nome` | text (`autocomplete="name"`) | ✅ | `Ex.: João Silva` |
| `servico` | select (8 serviços + "Outro serviço") | ✅ | `Escolha o serviço` |
| `detalhes` | textarea (3 linhas) | ✅ | `Ex.: Remodelação de casa de banho num T2 em Lisboa, cerca de 6 m².` |

- **Botão:** `Enviar por WhatsApp`
- **Nota legal:** Abrimos o WhatsApp com a mensagem já preenchida. Depois de perceber o trabalho, agendamos a visita técnica — o orçamento é apresentado nessa fase, sem qualquer custo.

> Numa página de serviço, o campo `servico` chega pré-seleccionado com o serviço
> dessa página.

**Template da mensagem WhatsApp:**

```
Olá Guerra Solut! O meu nome é {nome}.

Serviço pretendido: {servico|Outro serviço}

{detalhes}

Gostaria de agendar uma visita técnica para avaliarem o trabalho.
```

**Mensagem por defeito** (botão flutuante / links directos):
`Olá Guerra Solut! Gostaria de falar sobre um trabalho que preciso de fazer. Pode ajudar-me?`

> 💡 **Decisão pendente:** manter o WhatsApp como único canal (zero backend, mas
> zero lead capturada em CRM) ou acrescentar submissão real por email/API.
> Ver §11.

---

## 8. Navegação e CTAs persistentes

**Navegação principal** (`aria-label="Navegação principal"`) — ligações entre
páginas, não âncoras:

| Label | Rota |
| --- | --- |
| Serviços | `/servicos/` |
| Sobre Nós | `/sobre/` |
| Perguntas | `/faq/` |
| Contactos | `/contactos/` |

- O item activo é marcado com `aria-current="page"`.
- Em desktop, `Serviços` pode abrir um submenu com os 8 serviços — o link do
  próprio item continua a ir para `/servicos/` (funciona sem JS).
- **CTA do header:** `Pedir orçamento` → abre o modal de contacto.
- Header fixo com `backdrop-blur`, transparente no topo e com borda/sombra após scroll.
- Menu mobile em "sheet" lateral (`Abrir menu`), com a lista de serviços incluída.
- Toggle de tema claro/escuro.
- **Migalhas (`BreadcrumbList`)** visíveis em todas as páginas internas:
  `Início › Serviços › Instalações Elétricas`.

**CTAs flutuantes:**

- **Desktop (`≥ sm`):** botão WhatsApp circular (canto inferior direito) + botão "Voltar ao topo" que aparece após 600px de scroll.
- **Mobile (`< sm`):** barra fixa inferior com 3 botões — `Ligar` · `WhatsApp` · `Contactar`.

---

## 9. Design system

> **Referência, não obrigação.** Os valores abaixo vêm da versão anterior,
> registados para preservar a identidade cromática da marca (vermelho + âmbar
> de sinalética de obra). Este design é livre de divergir; o que deve
> sobreviver é a marca, não a implementação. Os tokens efectivamente em uso
> estão em `src/styles/tokens.css` e em `DESIGN.md`.

### Cores (OKLCH, tema claro / tema escuro)

| Token | Claro | Escuro |
| --- | --- | --- |
| `--primary` / `--brand` | `oklch(57.7% .245 27.325)` (≈ `#dc2626`) | `oklch(63.7% .237 25.331)` |
| `--primary-foreground` | `oklch(98.5% 0 0)` | idem |
| `--highlight` (âmbar) | `oklch(82.8% .169 79.6)` | `oklch(85.2% .176 82)` |
| `--success` (WhatsApp) | `oklch(68% .16 152)` | idem |
| `--background` | `oklch(100% 0 0)` | `oklch(14.5% 0 0)` |
| `--surface` | `oklch(98.5% 0 0)` | `oklch(18.5% 0 0)` |
| `--foreground` | `oklch(14.5% 0 0)` | `oklch(98.5% 0 0)` |
| `--muted-foreground` | `oklch(55.6% 0 0)` | `oklch(70.8% 0 0)` |
| `--border` | `oklch(92.2% 0 0)` | `oklch(100% 0 0 / .1)` |

`theme-color`: `#ffffff` (claro) / `#0a0a0a` (escuro). Tile MS: `#dc2626`.

### Tipografia

- **Display:** `Archivo` — pesos 600, 700, 800, 900
- **Corpo:** `Inter` — pesos 400, 500, 600, 700
- Fallback: `ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`

> ⚠️ Actualmente carregadas do Google Fonts com `@import` bloqueante.
> **Neste site: self-host** (subset latin + latin-ext, `woff2`,
> `font-display: swap`, `preload` do peso principal). Elimina 2 ligações
> externas e melhora LCP/CLS.

### Motivos visuais

- `blueprint-grid` — grelha técnica de fundo, opacidade 10–60%
- `hazard-stripes` — faixas diagonais de obra (vermelho/âmbar) em topos de secção
- `text-brand-gradient` — gradiente na palavra-chave do H1
- `mask-fade-x` + `animate-marquee` (com `pause-on-hover`) no carrossel de serviços
- `reveal` — animação de entrada por `IntersectionObserver` com `--reveal-delay` escalonado

> ♿ Todas as animações (`reveal`, `marquee`, `animate-ping`) têm de respeitar
> `@media (prefers-reduced-motion: reduce)`.

---

## 10. Ponto de partida — diagnóstico da versão anterior

O que motivou a reconstrução. Tudo nesta secção descreve a **versão anterior do
site**, já substituída por este projecto — serve de registo dos problemas que
não podem voltar a aparecer, e não do estado actual do domínio.

### ❌ SEO

| Problema | Impacto |
| --- | --- |
| **SPA React/Vite sem SSR** — o HTML servido tinha apenas `<div id="app"></div>`; todo o conteúdo era injectado por JS | Crítico. O conteúdo depende de renderização JS para ser indexado; crawlers secundários (Bing, redes sociais, LLMs) não veem nada |
| **Página única** — tudo em `/` com âncoras | Impossível ranquear para "eletricista Lisboa", "remodelação Porto", etc. Não há URLs para intenções específicas |
| **Sem `sitemap.xml`** (404) | Descoberta de URLs deficiente |
| **Sem `robots.txt`** verificado | A confirmar |
| **JSON-LD incompleto** | Falta `FAQPage`, `Service`, `BreadcrumbList`, `WebSite`; `areaServed` genérico (só "Portugal") |
| **Sem H2/H3 no HTML inicial** | Estrutura semântica invisível sem JS |
| **Sem conteúdo editorial** | Zero blog/guias — nenhuma superfície para cauda longa |
| **`og:image` = logótipo** | Baixo CTR nas partilhas |
| **Sem morada / NAP** | Sem `LocalBusiness` verificável nem sinal de Google Business Profile |

### ⚠️ Performance

- Bundle JS de **~544 KB** não comprimido (358 KB entrada + 186 KB página) para uma landing page essencialmente estática.
- Google Fonts externo bloqueante (`fonts.googleapis.com` + `fonts.gstatic.com`).
- Imagens PNG sem `srcset` / formatos modernos.

### ✅ O que se manteve

Não como código reutilizado — o site é construído de raiz — mas como decisões
já validadas que não valia a pena repensar do zero.

- Metadados base (`title`, `description`, `canonical`, OG, Twitter) bem escritos.
- Conjunto completo de favicons + `manifest.json` PWA.
- JSON-LD com `Electrician` + `GeneralContractor` e `makesOffer`.
- Estratégia de conversão via WhatsApp bem executada (fricção mínima).
- Design system coerente, com tema claro/escuro.
- Copy em pt-PT correcto e específico do sector.

---

## 11. Objectivos deste site

### Stack

- **Astro 7** com output estático (`output: 'static'`) — HTML completo servido ao crawler, zero JS por defeito.
- Ilhas de interactividade apenas onde é preciso: menu mobile, modal de contacto, acordeão FAQ, toggle de tema.
- `astro:assets` para optimização de imagens (AVIF/WebP + `srcset`).
- `@astrojs/sitemap` para `sitemap.xml` automático.
- Content Collections para os serviços e (futuro) blog.

### Arquitectura de URLs

| Rota | Objectivo |
| --- | --- |
| `/` | Home — resumo de cada tema, com encaminhamento para a página respectiva |
| `/servicos/` | Índice de serviços |
| `/servicos/instalacoes-eletricas/` | Página dedicada — serviço âncora |
| `/servicos/construcao-civil/` | Página dedicada |
| `/servicos/remodelacao/` | Página dedicada |
| `/servicos/pintura/` | Página dedicada |
| `/servicos/pladur-gesso/` | Página dedicada |
| `/servicos/canalizacao/` | Página dedicada |
| `/servicos/climatizacao/` | Página dedicada |
| `/servicos/controlo-de-acessos/` | Página dedicada |
| `/sobre/` | Empresa, equipa, certificações |
| `/contactos/` | NAP completo, formulário, horário |
| `/faq/` | FAQ com `FAQPage` |
| `/politica-de-privacidade/` | RGPD (obrigatório) |
| `/termos/` | Termos e condições |

**Fase 2 (SEO local):** páginas por área — `/servicos/{servico}/{cidade}/`
(ex.: `/servicos/instalacoes-eletricas/lisboa/`). Só gerar com conteúdo
genuinamente diferenciado; páginas de cidade em massa e quase idênticas são
tratadas como *doorway pages* pela Google.

### Metas técnicas

| Métrica | Alvo |
| --- | --- |
| LCP | < 2,0 s (4G móvel) |
| CLS | < 0,05 |
| INP | < 200 ms |
| JS enviado na home | < 40 KB comprimido |
| Lighthouse (mobile) | ≥ 95 em Performance, Acessibilidade, Best Practices, SEO |
| HTML sem JS | Todo o conteúdo textual presente e legível |

### Dados estruturados a implementar

- `LocalBusiness` / `Electrician` / `GeneralContractor` — completo, com `geo`, `areaServed` por distrito, `openingHoursSpecification`, `sameAs`
- `Service` — um por página de serviço, com `provider` e `areaServed`
- `FAQPage` — nas páginas com FAQ
- `BreadcrumbList` — em todas as páginas internas
- `WebSite` + `SearchAction` — se houver pesquisa
- ~~`AggregateRating` / `Review`~~ — **fora de âmbito**: não haverá testemunhos no site

### Responsividade

- **Mobile-first.** O tráfego deste sector é maioritariamente móvel e o CTA principal é telefone/WhatsApp.
- Breakpoints Tailwind: `sm 640` · `md 768` · `lg 1024` · `xl 1280` · `2xl 1536`.
- Testar em 320px (mínimo), 375px, 390px, 768px, 1024px, 1440px, 1920px.
- Barra de acção fixa em mobile (`Ligar` / `WhatsApp` / `Contactar`) com `padding-bottom` seguro (`env(safe-area-inset-bottom)`).
- Alvos de toque ≥ 44×44 px.
- Tabelas e carrosséis com scroll horizontal próprio — o `body` nunca faz scroll horizontal.
- Tipografia fluida (`clamp()`) em títulos.

### Acessibilidade

- Contraste AA mínimo em ambos os temas (validar o vermelho `--primary` sobre fundo escuro).
- `prefers-reduced-motion` respeitado em todas as animações.
- Navegação completa por teclado; `focus-visible` sempre visível.
- Landmarks (`header`, `nav`, `main`, `footer`) e hierarquia de headings correcta.
- Link "saltar para o conteúdo".
- `alt` descritivo em todas as imagens com conteúdo.

---

## 12. Palavras-chave alvo

**Primárias (serviço âncora):**
`eletricista`, `instalações elétricas`, `quadros elétricos`, `certificação elétrica`, `avarias elétricas`

**Secundárias:**
`remodelação de casa de banho`, `remodelação de cozinha`, `construção civil`, `pintura de fachadas`, `pladur`, `tectos falsos`, `desentupimentos`, `detecção de fugas`, `ar condicionado`, `AVAC`, `portões automáticos`, `videoporteiro`

**Modificadores locais:**
`Lisboa`, `Porto`, `Braga`, `Setúbal`, `Coimbra`, `Aveiro`, `Faro`, `Leiria`, `Santarém`, `Viseu`

**Modificadores de intenção:**
`orçamento`, `preço`, `urgência 24h`, `certificado`, `empresa`, `condomínio`, `perto de mim`

---

## 13. Assets

### Existentes

Os ícones estão todos em `/icons/`; só o `favicon.ico` fica na raiz, porque é
pedido pelos clientes nesse caminho fixo.

| Ficheiro | Uso |
| --- | --- |
| `/logo-full.png` | Marca completa (logótipo em JSON-LD) |
| `/logo-simple.png` | Header, rodapé, watermark |
| `/og-image.png` | Imagem de partilha 1200×630 (provisória, gerada a partir do logótipo) |
| `/favicon.ico` | Favicon legado, 16/32/48 px |
| `/icons/favicon.svg`, `/icons/favicon-{16,32,96}x{...}.png` | Favicons |
| `/icons/apple-touch-icon.png`, `/icons/apple-icon-*.png` | iOS |
| `/icons/android-icon-*.png` | Android |
| `/icons/web-app-manifest-{192,512}x{...}.png` | PWA maskable |
| `/icons/ms-icon-*.png` | Tiles Windows (`/browserconfig.xml`) |
| `/manifest.json` | PWA |
| `/robots.txt` | Indexação + localização do sitemap |

### Em falta — a pedir ao cliente

- [ ] **Fotografias reais de obras** — não existe uma única foto da empresa. É a maior lacuna, tanto para conversão como para `ImageObject` no schema.
- [ ] Fotos da equipa e de viaturas com marca
- [ ] Cópias de certificações e apólice de seguro (para a página "Sobre")
- [ ] NIF e morada de sede (obrigatório para `LocalBusiness` e para cumprimento legal em PT)
- [ ] Links de redes sociais (`sameAs`) — Facebook, Instagram, LinkedIn
- [ ] URL do Google Business Profile
- [ ] Imagem OG dedicada (1200×630) com fotografia real — a que está em uso é o
      logótipo sobre fundo escuro, suficiente para arrancar mas fraca em CTR

---

## 14. Questões em aberto

1. **Morada e NIF** — sem morada pública não há SEO local a sério nem ficha de empresa completa. É deliberado ou uma omissão?
2. **Formulário** — manter só WhatsApp ou acrescentar submissão real (email/CRM) para capturar leads fora do horário?
3. **Google Business Profile** — existe? Se tiver avaliações reais, é a via correcta para mostrar classificação (e para `AggregateRating`), já que não haverá testemunhos no site.
4. **Blog/conteúdo** — há disponibilidade para produzir conteúdo editorial? É a alavanca principal de cauda longa.
5. **Multilíngue** — só pt-PT ou também EN (expatriados no Algarve/Lisboa)?
6. **Analytics** — que ferramenta? (Recomendação: solução sem cookies para evitar banner RGPD.)
7. **Hosting** — onde vai ficar alojado? (Estático: Vercel / Netlify / Cloudflare Pages.)

---

## 15. Decisões tomadas

| # | Decisão | Data |
| --- | --- | --- |
| 1 | A versão anterior do site é **fonte de dados da empresa apenas** — não é base de design nem de estrutura. Construção de raiz, a publicar no mesmo domínio, substituindo-a. | 2025-09-01 |
| 2 | **Sem secção de testemunhos** e **sem bloco de estatísticas** (500+ clientes, 1000+ obras, 4,9★). Nenhum número não verificável entra no site. Prova social por certificações, garantia por escrito e fotografias reais de obras. Sem `Review`/`AggregateRating`. | 2025-09-01 |
| 3 | **Copyright do rodapé mantém-se ReeseArch64** (autoria do desenvolvimento), com ano dinâmico. | 2025-09-01 |
| 4 | **URLs com barra final** (`trailingSlash: 'always'`, `build.format: 'directory'`). Canónicos, sitemap e ligações internas seguem esta forma. | 2025-09-01 |
| 5 | **`sameAs` fica vazio** até o cliente confirmar os perfis oficiais — não se inventam links de redes sociais. | 2025-09-01 |
| 6 | **Site multipágina, não landing page com âncoras.** Cada tema tem rota própria (§11) com `<h1>`, metadados, canónico e entrada no sitemap próprios. A home resume e encaminha; a navegação principal aponta para páginas, não para `#`. | 2025-09-01 |
