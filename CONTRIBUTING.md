# Contribuir para a Guerra Solut

Este ficheiro é a **fonte única** das regras de contribuição: ramos, convenção
de commits e validação. Quando alguma destas regras mudar, edita-se aqui e em
mais lado nenhum — o `AGENTS.md` e o `README.md` apenas apontam para cá.

Antes de escrever código, ler o `AGENTS.md` (contexto do projecto e regras
técnicas) e o `PRODUCTS.md` (especificação de produto).

## Ramos

Só existem **dois ramos**, ambos permanentes:

| Ramo | Papel |
| --- | --- |
| `main` | Produção. É o que está publicado em `https://www.guerrasolut.pt`. |
| `develop` | Integração. É onde o trabalho do dia-a-dia é commitado. |

**Não há ramos por funcionalidade, correcção ou tarefa** — nada de
`feat/…`, `fix/…`, `chore/…`. O trabalho é commitado directamente em
`develop`, em commits pequenos e coerentes, e chega a `main` por *merge* de
`develop` quando estiver pronto a publicar.

```
develop ──●──●──●──●─────────► (trabalho corrente)
                    ╲
main ────────────────●───────► (publicação)
```

Regras práticas:

- Nunca commitar directamente em `main` — excepto uma correcção urgente em
  produção, que tem de ser imediatamente trazida de volta a `develop`.
- Não reescrever o histórico de `main` nem de `develop` depois de publicado
  (`push --force` está fora de questão).
- `main` tem de estar sempre num estado publicável: `npm run build` passa.

## Convenção de commits

As mensagens seguem os **Conventional Commits** e são validadas pelo
commitlint (`commitlint.config.cjs`, sobre `@commitlint/config-conventional`).

```text
<tipo>(<âmbito opcional>): <assunto>

<corpo opcional>
```

- **Tipos permitidos:** `feat`, `fix`, `docs`, `style`, `refactor`, `perf`,
  `test`, `build`, `ci`, `chore`, `revert`. Obrigatório e em minúsculas.
- **Âmbito** opcional, em minúsculas: `feat(home):`, `chore(deploy):`.
- **Assunto** obrigatório, sem ponto final.
- **Cabeçalho** com um máximo de 100 caracteres.
- **Corpo** separado do cabeçalho por uma linha em branco; usar para explicar
  o *porquê*, não o *como*.
- **Português europeu** (pt-PT), no imperativo, na norma anterior ao acordo
  ortográfico — «projecto», «objectivo», «actual» —, como no resto do
  repositório.
- **Sem co-autoria.** As mensagens não levam linhas `Co-Authored-By:` nem
  qualquer outra atribuição a agentes ou ferramentas.

Exemplos:

```text
feat(servicos): construir as oito páginas de serviço
fix(header): corrigir o foco do menu em teclado
docs: registar as decisões de âmbito no PRODUCTS.md
```

## Validação

Validar o histórico completo localmente, tal como faz a integração contínua:

```
npx commitlint --from=$(git rev-list --max-parents=0 HEAD) --to=HEAD --verbose
```

O workflow `.github/workflows/commitlint.yml` corre este mesmo comando em cada
`push` e `pull_request`: **todo** o histórico tem de passar, não apenas os
commits novos.

Antes de dar trabalho por terminado, `npm run build` tem de passar.
