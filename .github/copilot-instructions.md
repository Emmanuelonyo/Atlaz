# Atlaz Copilot Instructions

## Project Overview
Atlaz is a Next.js 16 landing page and dashboard for a business incorporation/compliance platform serving Nigeria and US markets. Built with React 19, TypeScript, and Tailwind CSS v4.

## Architecture

### Route Structure
- **`app/page.tsx`** — Public landing page (marketing)
- **`app/dashboard/`** — Authenticated dashboard with sidebar layout
- **`app/login/`, `app/register/`** — Auth pages (standalone layouts)

### Component Organization
```
components/
  landing/   # Marketing page sections (Hero, Features, Pricing, etc.)
  layout/    # Dashboard shell (Sidebar, Header)
  ui/        # Reusable primitives (Button, Input, Logo)
```

## Styling Conventions

### Tailwind CSS v4 with Custom Theme
Theme tokens defined in [globals.css](app/globals.css) using `@theme` directive:
- **Brand colors**: `primary` (#13a4ec), `accent-teal` (#2dd4bf)
- **Backgrounds**: `background-light`, `background-dark`, `card-light`, `card-dark`
- **Font**: `font-display` (Inter via next/font)

### Gradient Pattern
Primary CTAs use this gradient consistently:
```tsx
className="bg-gradient-to-r from-primary to-accent-teal"
```

### Dark Mode
Uses class-based dark mode. Always include dark variants:
```tsx
className="text-gray-900 dark:text-white bg-white dark:bg-gray-800"
```

### Icons
Google Material Symbols Outlined via font link. Use span elements:
```tsx
<span className="material-symbols-outlined">arrow_forward</span>
```

## Component Patterns

### Button Variants
Use [Button.tsx](components/ui/Button.tsx) with variants: `primary`, `outline`, `ghost`

### Navigation Links
Dashboard uses `usePathname()` for active state styling. See [Sidebar.tsx](components/layout/Sidebar.tsx) `linkClass` pattern.

### Layout Wrappers
- Landing pages: max-w-7xl container with px-4 md:px-6
- Dashboard: Full-width with Sidebar + Header chrome

## Development

```bash
npm run dev   # Start dev server at localhost:3000
npm run build # Production build
npm run lint  # ESLint check
```

## File Naming
- React components: PascalCase (`Hero.tsx`)
- Route files: lowercase (`page.tsx`, `layout.tsx`)
- Use `@/` alias for imports from project root
