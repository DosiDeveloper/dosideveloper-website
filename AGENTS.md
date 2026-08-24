<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# dosi_hub

Portfolio site for Douglas Barreto (software engineer). Next.js 16.2.1 App Router + React 19 + TypeScript + Tailwind CSS v4.

## Package manager

- **pnpm** — do not use npm or yarn.

## Commands

| Command | What |
|---|---|
| `pnpm dev` | Dev server (http://localhost:3000) |
| `pnpm build` | Production build |
| `pnpm start` | Start production server |
| `pnpm lint` | ESLint (flat config in `eslint.config.mjs`) |

No typecheck script. No test framework detected.

## Path alias

`@/*` maps to `./src/*` (see `tsconfig.json`).

## Key dependencies

| Library | Usage |
|---|---|
| `next` 16.2.1 | App Router (file-system routing in `src/app/`) |
| `react` / `react-dom` 19 | Server & client components |
| `motion` 12 | Animations (`motion/react-client` for client components; also used in server components without `"use client"`) |
| `@supabase/supabase-js` | Data from Supabase table `blog-projects` |
| `@formspree/react` | Contact form |
| `tailwindcss` 4 | CSS-based config (`@import 'tailwindcss'` + `@theme inline` in `globals.css`) |
| `@tailwindcss/postcss` | PostCSS plugin |

## Architecture

```
src/
  app/            # App Router pages (layout.tsx, page.tsx, blog/page.tsx)
  components/
    layouts/      # Navbar, Footer
    home/         # Hero, Projects, SkillStack, etc.
    ui/           # NavbarActiveLink
  utils/          # supabase.ts, database.types.ts
```

- Root layout renders `<Navbar />` + `<main>` + `<Footer />` around children.
- Home page orders: Hero → Projects → SkillStack → ContactMe.
- Blog is a stub page (`/blog`).
- `next.config.mjs`: `cacheComponents: true`, `allowedDevOrigins: ["192.168.31.200"]`.
- `.env.local` requires: `NEXT_PUBLIC_FORMSPREE_KEY`, `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY`.

## Conventions

- Components prefer `motion/react-client` for scroll/viewport animations. Some server components use it without `"use client"` — follow the existing pattern per component.
- `"use cache"` + `cacheLife()` for data fetching in async server components (Projects page).
- Tailwind v4: CSS-based theme via `@theme inline` block in `globals.css`. No `tailwind.config.*` file.
- `eslint.config.mjs`: extends `eslint-config-next/core-web-vitals`, disables `react-hooks/set-state-in-effect`.
