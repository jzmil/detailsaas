# Recur — Base44 Dev Environment

## Stack
- **Next.js 16.3.4** (Turbopack dev server) + React 19 + Tailwind CSS v4
- **Supabase** for auth (`@supabase/ssr` + `@supabase/supabase-js`)
- TypeScript, ESLint

## Running the app
```bash
docker compose -f docker-compose.base44.yml up -d
```
- Web entry point: **http://localhost:3000**
- Dev server binds 0.0.0.0:3000 with live reload (polling enabled for bind mounts)
- `npm install` runs automatically on container start

## Environment / Secrets
Two env vars are required for Supabase auth:
- `NEXT_PUBLIC_SUPABASE_URL` — Supabase project URL
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` — Supabase anon/publishable key

Placeholders live in `.env.base44-defaults` (committed) so the app boots without
real credentials. Real values are delivered via `/run/base44/app.env` (platform-managed)
and override the placeholders. Without real Supabase credentials, marketing pages
(/, /pricing, /faq) render fine but auth-protected routes under /(app)/* will redirect
to /login and sign-in will fail.

## App structure
- `app/` — Next.js App Router
  - `app/page.tsx` — marketing landing page (no auth)
  - `app/pricing/`, `app/faq/` — marketing pages (no auth)
  - `app/login/` — Supabase password sign-in (client component)
  - `app/(app)/*` — auth-protected dashboard, calendar, customers, messages, sales, assistant, settings
    - `app/(app)/layout.tsx` calls `supabase.auth.getUser()` and redirects to /login if not authenticated
- `utils/supabase/client.ts` — browser Supabase client
- `utils/supabase/server.ts` — server-side Supabase client (cookie-based)
- `components/LogoutButton.tsx` — Supabase sign-out button

## Notes
- Next.js 16 in this repo may have breaking changes vs. standard Next.js — check `node_modules/next/dist/docs/` if touching Next APIs.
- `allowedDevOrigins` in `next.config.ts` is set dynamically from `BASE44_PUBLIC_HOST_SUFFIX` to allow the preview origin's dev asset/HMR requests.
- Most app pages use hardcoded mock data (no database reads beyond auth).
