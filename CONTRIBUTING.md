# Contribuindo — Portfólio CAO

## Convenção de commits (Conventional Commits)

Formato: `<tipo>: <descrição> [Story X.Y]`

Tipos: `feat`, `fix`, `docs`, `chore`, `refactor`, `test`, `perf`, `ci`, `style`, `build`.

Exemplos:
- `feat: scaffold Next.js 16 + TS + Tailwind [Story 1.1]`
- `test: adiciona smoke test da rota canário [Story 1.1]`
- `chore: configura lint, prettier e vitest [Story 1.1]`

Commits atômicos e focados. Referencie o ID da story.

## Scripts

```bash
npm run dev          # dev server (Turbopack)
npm run lint         # ESLint
npm run typecheck    # tsc --noEmit
npm run test         # Vitest (unit)
npm run test:e2e     # Playwright (E2E)
npm run format       # Prettier --write
npm run build        # build de produção
```

## Operações de Git/Deploy

- `@dev` faz commits **locais** (add/commit). **`git push`, PR e deploy Vercel são exclusivos do `@devops`.**
