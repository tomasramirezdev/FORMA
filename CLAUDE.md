# FORMA — Claude Code Guidelines

## Project Overview

FORMA is a Next.js furniture store catalog (e-commerce display) with Google Sheets as the data source. Products are fetched from a public Google Sheets CSV export and displayed in a filterable grid with WhatsApp-based inquiry flow.

## Tech Stack

- **Framework:** Next.js 14.2.5 (App Router)
- **Language:** TypeScript 5 — strict mode enabled
- **UI:** React 18, no CSS framework — custom CSS Modules only
- **Data source:** Google Sheets CSV export via PapaParse
- **Fonts:** Outfit (display), DM Sans (body) via Google Fonts

## Directory Structure

```
src/
├── app/                  # Next.js App Router pages + API
│   ├── api/products/     # GET /api/products — fetches from Google Sheets
│   ├── nosotros/         # About page
│   ├── layout.tsx        # Root layout (fonts, metadata, UIProvider)
│   └── page.tsx          # Home page — server component, force-dynamic
├── components/           # All UI components (client-side)
├── context/
│   └── UIContext.tsx     # Modal open/close state
├── lib/
│   ├── google-sheets.ts  # Fetch + parse CSV from Google Sheets
│   ├── products.ts       # Static fallback data + WhatsApp utilities
│   └── tokens.ts         # Design system tokens (TypeScript)
└── types/
    └── product.ts        # Product interface
```

## Key Conventions

### Styling
- Use CSS Modules exclusively — no inline styles, no Tailwind, no global utility classes
- Design tokens are defined in `src/lib/tokens.ts` and should be the source of truth for colors, spacing, and border-radius
- Primary accent color: `#B8956A` (gold)
- Color palette: white/ivory/beige + stone/charcoal grays

### Components
- All components are client components (`'use client'`) — the only server components are pages in `app/`
- Each component lives in its own folder: `components/ComponentName/index.tsx` + `ComponentName.module.css`
- Modal state is managed globally via `UIContext` — do not create local modal state in components

### Data / Products

The `Product` type (defined in `src/types/product.ts`):
```typescript
interface Product {
  id: string
  name: string
  category: 'sillones' | 'mesas' | 'sillas' | 'otros'
  price: number
  description: string
  shortDescription: string
  imageUrl: string
  imageAlt: string
  whatsappMessage: string
  inStock: boolean
  featured?: boolean
}
```

- Products are fetched server-side in `app/page.tsx` from Google Sheets CSV
- Static fallback data lives in `src/lib/products.ts`
- The `/api/products` route mirrors the same fetch logic
- `force-dynamic` is set on the home page to ensure fresh data on every request

### Environment Variables

```
GOOGLE_SHEET_CSV_URL=           # Public CSV export URL from Google Sheets
NEXT_PUBLIC_WHATSAPP_NUMBER=    # Default WhatsApp number (format: 549XXXXXXXXXX)
```

Do not commit `.env.local`. Reference `.env.local.example` for required keys.

### Images
- Product images are hosted on Google Drive
- `next.config.js` allows remote patterns for `drive.google.com` and `lh3.googleusercontent.com`

## Development

```bash
npm run dev     # Start dev server (http://localhost:3000)
npm run build   # Production build
npm run lint    # ESLint check
```

## Localization

The site is in Spanish (es_AR). Keep all user-facing strings in Spanish. Do not introduce English copy in UI components.

## What to Avoid

- Do not add Tailwind or any CSS utility framework
- Do not create new global CSS classes — use CSS Modules
- Do not move product data logic out of `lib/google-sheets.ts` and `lib/products.ts`
- Do not add client-side data fetching for products — keep it server-side in page components
- Do not add unnecessary dependencies; the project intentionally has minimal dependencies
