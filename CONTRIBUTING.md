# Contributing to Guerra Solut

This file is the **single source of truth** for the contribution rules:
branches, commit convention, development and validation. When any of these
rules change, edit them here and nowhere else — `AGENTS.md` and `README.md`
only point back to this file.

Before writing code, read `AGENTS.md` (project context and technical rules)
and `PRODUCTS.md` (product specification).

## Branches

There are only **two branches**, both permanent:

| Branch | Role |
| --- | --- |
| `main` | Production. This is what is published at `https://www.guerrasolut.pt`. |
| `develop` | Integration. This is where day-to-day work is committed. |

**There are no feature, fix or task branches** — no `feat/…`, `fix/…`,
`chore/…`. Work is committed directly to `develop`, in small and coherent
commits, and reaches `main` by *merging* `develop` when it is ready to ship.

```
develop ──●──●──●──●─────────► (current work)
                    ╲
main ────────────────●───────► (release)
```

Practical rules:

- **Every modification is covered by commits.** No work is left uncommitted in
  the working tree: files created, changed or removed go into small, coherent
  commits, on the same day they are made. A task is only finished when
  `git status` is clean.
- Never commit directly to `main` — except for an urgent production fix, which
  must be brought back to `develop` immediately.
- Do not rewrite the history of `main` or `develop` once published
  (`push --force` is out of the question).
- `main` must always be in a shippable state: `npm run build` passes.

## Commit convention

Messages follow **Conventional Commits** and are validated by commitlint
(`commitlint.config.cjs`, on top of `@commitlint/config-conventional`).

```text
<type>(<optional scope>): <subject>

<optional body>
```

- **Allowed types:** `feat`, `fix`, `docs`, `style`, `refactor`, `perf`,
  `test`, `build`, `ci`, `chore`, `revert`. Required and lowercase.
- **Scope** optional, lowercase: `feat(home):`, `chore(deploy):`.
- **Subject** required, with no trailing period.
- **Header** limited to 100 characters.
- **Body** separated from the header by a blank line; use it to explain the
  *why*, not the *how*.
- **European Portuguese** (pt-PT), in the imperative, in the spelling that
  predates the orthographic agreement — «projecto», «objectivo», «actual» —,
  as in the rest of the repository.
- **No co-authorship.** Messages carry no `Co-Authored-By:` lines and no other
  attribution to agents or tools.

Examples:

```text
feat(servicos): construir as oito páginas de serviço
fix(header): corrigir o foco do menu em teclado
docs: registar as decisões de âmbito no PRODUCTS.md
```

## Development

Start the development server in the background:

```
astro dev --background
```

Manage it with `astro dev stop`, `astro dev status` and `astro dev logs`.

## Validation

Validate the full history locally, exactly as continuous integration does:

```
npx commitlint --from=$(git rev-list --max-parents=0 HEAD) --to=HEAD --verbose
```

The `.github/workflows/commitlint.yml` workflow runs this same command on every
`push` and `pull_request`: **all** of the history must pass, not just the new
commits.

Before calling work done, `npm run build` must pass.
