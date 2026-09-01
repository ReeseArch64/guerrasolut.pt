# Guerra Solut — Especificação de Produto

Documento de referência para a reconstrução do site **guerrasolut.pt** em Astro,
com foco em **SEO** e **responsividade**.

> Fonte dos dados: extração do site atual (`https://www.guerrasolut.pt/`), do seu
> bundle JavaScript, do `manifest.json` e do JSON-LD embutido no `index.html`.
> Datado de 2026-09-01.

---

## 1. Identidade da empresa

| Campo | Valor |
| --- | --- |
| Nome comercial | Guerra Solut |
| Razão social | Guerra Solut, Unipessoal Lda. |
| Domínio | `https://www.guerrasolut.pt/` |
| Ano de fundação | 2012 |
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

## 3. Prova social e números

### Estatísticas (bloco do herói)

| Valor | Legenda |
| --- | --- |
| `500+` | Clientes satisfeitos |
| `12+` | Anos de experiência |
| `1000+` | Obras concluídas |
| `<2h` | Resposta a pedidos |

Classificação exibida: **4,9** ★ (5 estrelas).
Selos flutuantes na secção "Sobre": `+1000 obras concluídas` e `Desde 2012 a construir em Portugal`.

### Testemunhos

| Nome | Papel | Texto | ★ |
| --- | --- | --- | --- |
| Ana Rodrigues | Proprietária de apartamento, Lisboa | Excelente profissionalismo! Fizeram a remodelação completa da minha casa de banho em apenas 3 dias. Trabalho impecável e preço justo. | 5 |
| Carlos Mendes | Gestor de condomínio, Porto | A Guerra Solut gere toda a manutenção do nosso condomínio há 5 anos. Sempre pontuais, eficientes e com preços transparentes. | 5 |
| Sofia Costa | Proprietária de restaurante, Braga | Instalaram o sistema de climatização e fizeram toda a parte elétrica do meu restaurante. Cumpriram prazos e orçamento. Muito recomendado! | 5 |
| Miguel Ferreira | Proprietário de moradia, Setúbal | Trabalho de pintura exterior excelente. Vieram no dia combinado, limparam tudo no final e o resultado ficou melhor do que esperava. | 5 |
| Mariana Alves | Directora de empresa, Lisboa | Trataram de toda a remodelação do nosso escritório durante o fim-de-semana para não interromper o trabalho. Profissionalismo total. | 5 |
| Rui Santos | Administrador de condomínio, Braga | Resolveram uma fuga de água às 22h sem cobrar urgência extra. Atendimento rápido e preço justo. São os nossos parceiros de manutenção. | 5 |
| Inês Monteiro | Proprietária de loja, Porto | Instalação do portão automático e videoporteiro feitos num dia. Explicaram tudo e deixaram a funcionar na perfeição. | 5 |

> ⚠️ **A validar com o cliente:** estes testemunhos e números não estão
> verificados. Só devem ser marcados com `AggregateRating`/`Review` no
> schema.org se forem reais e verificáveis — caso contrário é uma violação das
> políticas de rich results da Google e pode gerar penalização manual.

---

## 4. Diferenciadores ("Porquê a Guerra Solut")

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

## 5. Processo ("Como trabalhamos")

Um processo simples e transparente, para saber sempre em que ponto está o seu projecto.

| Passo | Título | Descrição |
| --- | --- | --- |
| `01` | Contacto | Descreva o que precisa por telefone ou WhatsApp. Respondemos em menos de 2 horas. |
| `02` | Visita técnica | Deslocamo-nos ao local para avaliar a obra, medir e esclarecer todas as dúvidas. |
| `03` | Orçamento fechado | Recebe uma proposta detalhada, com prazos e valores fixos, sem compromisso. |
| `04` | Execução e entrega | Executamos no prazo acordado, limpamos o espaço e entregamos com garantia por escrito. |

---

## 6. FAQ

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

## 7. Copy das secções

### Herói (`#topo`)

- **Eyebrow:** Especialistas em instalações elétricas
- **H1:** A solução certa para a **sua obra**
- **Subtítulo:** Especialistas em **instalações elétricas** — e, a partir daí, construção civil, remodelação e todas as restantes especialidades na mesma equipa.
- **CTA primário:** `Descrever o meu projecto` → abre modal de contacto
- **CTA secundário:** `Ver serviços` → `#servicos`
- **Faixa destacada:** "Resposta a pedidos em menos de 2 horas" / "Urgências atendidas 24h por dia, 7 dias por semana."
- **Marquee:** lista rolante com os 8 serviços

### Serviços (`#servicos`)

- **Eyebrow:** Os nossos serviços
- **H2:** Tudo o que a sua obra precisa, **numa só equipa**
- **Descrição:** A eletricidade é o nosso ramo principal — e à volta dela coordenamos internamente todas as restantes especialidades, para não ter de andar atrás de vários prestadores.
- Etiqueta no cartão âncora: `Especialidade principal`

### Processo (`#processo`)

- **Eyebrow:** Como trabalhamos
- **H2:** Do primeiro contacto à **entrega da obra**
- **Descrição:** Um processo simples e transparente, para saber sempre em que ponto está o seu projecto.

### Porquê nós (`#porque-nos`)

- **Eyebrow:** Porquê a Guerra Solut
- **H2:** O compromisso que nos **distingue**
- **Descrição:** Cinco razões pelas quais condomínios, empresas e famílias voltam a contratar-nos.
- **Cartão CTA:** "Ainda tem dúvidas sobre a sua obra?"

### Sobre (`#sobre`)

- **Eyebrow:** Sobre a Guerra Solut
- **H2:** Mais de uma década **ao seu serviço**
- **P1:** A **Guerra Solut** nasceu das instalações elétricas e é hoje uma empresa portuguesa de serviços técnicos e construção civil, ao serviço de particulares, empresas e condomínios em todo o território continental desde 2012.
- **P2:** Com equipa própria e multidisciplinar, entregamos obras completas — do projecto ao acabamento — com o mesmo rigor numa pequena reparação ou numa remodelação integral.

### Testemunhos (`#testemunhos`)

Carrossel horizontal de cartões (largura `min(88vw, 22rem)`).

### FAQ (`#faq`)

- **Eyebrow:** Perguntas frequentes
- **H2:** As dúvidas que nos **colocam mais vezes**
- **Descrição:** Se a sua pergunta não estiver aqui, fale connosco — respondemos no próprio dia.

### CTA final

- **H2:** Pronto para começar a sua obra?
- **P:** Conte-nos o que precisa de fazer. Respondemos em menos de 2 horas e agendamos a visita técnica — gratuita e sem compromisso.
- **CTAs:** `Descrever o meu projecto` · `WhatsApp` · `+351 964 148 843`

### Rodapé

- **Descrição:** Especialistas em instalações elétricas, construção civil e remodelação. Rigor, prazos cumpridos e garantia por escrito desde 2012.
- **Colunas:** Serviços (8 links) · Empresa (nav) · Contactos (telefone, email, horário, "Portugal continental")
- **Bloco:** "Onde trabalhamos" com os 10 distritos
- **Copyright:** © 2025 [ReeseArch64](https://www.reesearch64.tech) · Todos os direitos reservados.

---

## 8. Formulário de contacto

Modal ("drawer" em mobile, diálogo em desktop) que **não submete para servidor** —
compõe uma mensagem e abre o WhatsApp.

- **Título:** Fale-nos do seu projecto
- **Subtítulo:** Descreva a necessidade. Respondemos em menos de 2 horas.

| Campo | Tipo | Obrigatório | Placeholder |
| --- | --- | --- | --- |
| `nome` | text (`autocomplete="name"`) | ✅ | `Ex.: João Silva` |
| `servico` | select (8 serviços + "Outro serviço") | ✅ | `Escolha o serviço` |
| `detalhes` | textarea (3 linhas) | ✅ | `Ex.: Remodelação de casa de banho num T2 em Lisboa, cerca de 6 m².` |

- **Botão:** `Enviar por WhatsApp`
- **Nota legal:** Abrimos o WhatsApp com a mensagem já preenchida. Depois de perceber o trabalho, agendamos a visita técnica — o orçamento é apresentado nessa fase, sem qualquer custo.

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
> Ver §12.

---

## 9. Navegação e CTAs persistentes

**Navegação principal** (`aria-label="Navegação principal"`):

| Label | Âncora |
| --- | --- |
| Serviços | `#servicos` |
| Como Trabalhamos | `#processo` |
| Sobre Nós | `#sobre` |
| Testemunhos | `#testemunhos` |
| Perguntas | `#faq` |

- Header fixo com `backdrop-blur`, transparente no topo e com borda/sombra após scroll.
- Menu mobile em "sheet" lateral (`Abrir menu`).
- Toggle de tema claro/escuro.

**CTAs flutuantes:**

- **Desktop (`≥ sm`):** botão WhatsApp circular (canto inferior direito) + botão "Voltar ao topo" que aparece após 600px de scroll.
- **Mobile (`< sm`):** barra fixa inferior com 3 botões — `Ligar` · `WhatsApp` · `Contactar`.

---

## 10. Design system

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
> **Na reconstrução: self-host** (subset latin + latin-ext, `woff2`,
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

## 11. Estado actual — diagnóstico

O que motiva a reconstrução.

### ❌ SEO

| Problema | Impacto |
| --- | --- |
| **SPA React/Vite sem SSR** — o HTML servido tem apenas `<div id="app"></div>`; todo o conteúdo é injectado por JS | Crítico. O conteúdo depende de renderização JS para ser indexado; crawlers secundários (Bing, redes sociais, LLMs) não veem nada |
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

### ✅ O que está bom e deve ser preservado

- Metadados base (`title`, `description`, `canonical`, OG, Twitter) bem escritos.
- Conjunto completo de favicons + `manifest.json` PWA.
- JSON-LD com `Electrician` + `GeneralContractor` e `makesOffer`.
- Estratégia de conversão via WhatsApp bem executada (fricção mínima).
- Design system coerente, com tema claro/escuro.
- Copy em pt-PT correcto e específico do sector.

---

## 12. Objectivos da reconstrução

### Stack

- **Astro 7** com output estático (`output: 'static'`) — HTML completo servido ao crawler, zero JS por defeito.
- Ilhas de interactividade apenas onde é preciso: menu mobile, modal de contacto, acordeão FAQ, carrossel de testemunhos, toggle de tema.
- `astro:assets` para optimização de imagens (AVIF/WebP + `srcset`).
- `@astrojs/sitemap` para `sitemap.xml` automático.
- Content Collections para os serviços e (futuro) blog.

### Arquitectura de URLs

| Rota | Objectivo |
| --- | --- |
| `/` | Landing principal — todas as secções |
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
- `AggregateRating` / `Review` — **apenas se os testemunhos forem verificáveis**

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

## 13. Palavras-chave alvo

**Primárias (serviço âncora):**
`eletricista`, `instalações elétricas`, `quadros elétricos`, `certificação elétrica`, `avarias elétricas`

**Secundárias:**
`remodelação de casa de banho`, `remodelação de cozinha`, `construção civil`, `pintura de fachadas`, `pladur`, `tectos falsos`, `desentupimentos`, `detecção de fugas`, `ar condicionado`, `AVAC`, `portões automáticos`, `videoporteiro`

**Modificadores locais:**
`Lisboa`, `Porto`, `Braga`, `Setúbal`, `Coimbra`, `Aveiro`, `Faro`, `Leiria`, `Santarém`, `Viseu`

**Modificadores de intenção:**
`orçamento`, `preço`, `urgência 24h`, `certificado`, `empresa`, `condomínio`, `perto de mim`

---

## 14. Assets

### Existentes

| Ficheiro | Uso |
| --- | --- |
| `/logo-full.png` | OG image, marca completa |
| `/logo-simple.png` | Header, rodapé, watermark |
| `/favicon.svg`, `/favicon.ico`, `/favicon-{16,32,96}x96.png` | Favicons |
| `/apple-touch-icon.png`, `/apple-icon-{152,180}x180.png` | iOS |
| `/android-icon-{36,48,72,96,144,192}x{...}.png` | Android |
| `/web-app-manifest-{192,512}x{...}.png` | PWA maskable |
| `/ms-icon-144x144.png` | Windows tile |
| `/manifest.json` | PWA |

### Em falta — a pedir ao cliente

- [ ] **Fotografias reais de obras** — o site actual não tem uma única foto. É a maior lacuna, tanto para conversão como para `ImageObject` no schema.
- [ ] Fotos da equipa e de viaturas com marca
- [ ] Cópias de certificações e apólice de seguro (para a página "Sobre")
- [ ] NIF e morada de sede (obrigatório para `LocalBusiness` e para cumprimento legal em PT)
- [ ] Links de redes sociais (`sameAs`) — Facebook, Instagram, LinkedIn
- [ ] URL do Google Business Profile
- [ ] Confirmação dos números (500+ clientes, 1000+ obras, 4,9★)
- [ ] Autorização/verificação dos testemunhos
- [ ] Imagem OG dedicada (1200×630) diferente do logótipo

---

## 15. Questões em aberto

1. **Morada e NIF** — sem morada pública não há SEO local a sério nem ficha de empresa completa. É deliberado ou uma omissão?
2. **Testemunhos** — são reais? Podem ser marcados como `Review`?
3. **Formulário** — manter só WhatsApp ou acrescentar submissão real (email/CRM) para capturar leads fora do horário?
4. **Blog/conteúdo** — há disponibilidade para produzir conteúdo editorial? É a alavanca principal de cauda longa.
5. **Multilíngue** — só pt-PT ou também EN (expatriados no Algarve/Lisboa)?
6. **Analytics** — que ferramenta? (Recomendação: solução sem cookies para evitar banner RGPD.)
7. **Hosting** — onde vai ficar alojado? (Estático: Vercel / Netlify / Cloudflare Pages.)
8. **Rodapé** — o copyright é da ReeseArch64 e não da Guerra Solut. Manter?
