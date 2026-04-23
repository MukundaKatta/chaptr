# Chaptr

Your paid community, done right. Messaging, events, gated content — no Discord chaos.

**Status:** v0 skeleton — landing page + community builder preview. Full product not yet wired.

**Landing:** https://chaptr.vercel.app

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind v4 |
| Fonts | Inter via `next/font/google` |
| Hosting | Vercel (zero config) |
| Waitlist | https://waitlist-api-sigma.vercel.app |

## Run locally

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Deploy

Push to `main` — Vercel picks it up automatically. No environment variables required.

## Routes

| Route | Description |
|---|---|
| `/` | Landing page (original copy + design preserved) |
| `/try` | v0 community builder — name, tagline, price → mocked community home page |
| `/api/waitlist` | `POST { email }` → forwards to waitlist-api-sigma |

## What's next

- Real-time threaded chat
- Stripe-powered paid memberships
- Live events and workshops
- Auth + per-community member management
