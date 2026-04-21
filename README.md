# RRA Tax Handbook Platform

A static multilingual Next.js frontend for the **Rwanda Revenue Authority Tax Handbook 2025**.

The project presents handbook content as responsive web pages with reusable UI components, language switching, breadcrumbs, accordions, and static content files.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn/Radix UI components
- Lucide icons
- flag-icons
- Static export via `output: "export"`

## Languages

Supported routes:

```txt
/en
/fr
/rw
```

English is the main source language. French and Kinyarwanda can be translated gradually. Missing translated content falls back to English.

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm run dev
```

Open:

```txt
http://localhost:3000/en
```

The root route redirects automatically:

```txt
/ -> /en
```

## Commands

```bash
pnpm run dev
pnpm run build
pnpm run lint
```

`pnpm run dev` runs a `predev` cleanup script first:

```txt
scripts/clean-next-dev.mjs
```

This helps avoid Windows file-lock issues in `.next/dev`.

## Static Export

Static export is enabled in:

```txt
next.config.ts
```

```ts
output: "export"
```

After:

```bash
pnpm run build
```

Next.js generates static output in:

```txt
out/
```

## Project Structure

```txt
app/
  layout.tsx
  page.tsx
  globals.css
  [lang]/
    layout.tsx
    page.tsx
    general-information/page.tsx
    taxes/page.tsx
    taxes/[slug]/page.tsx
    other-services/page.tsx
    user-guides-and-examples/page.tsx
    search/page.tsx

components/
  layout/
  handbook/
  i18n/
  ui/

lib/
  content/
  i18n/
  types/
  utils.ts

scripts/
  clean-next-dev.mjs
```

## Important Files

### Routing

- `app/page.tsx`: redirects `/` to `/en`
- `app/[lang]/layout.tsx`: validates language and wraps pages in the site shell
- `app/[lang]/page.tsx`: localized homepage cards
- `app/[lang]/general-information/page.tsx`: General Information page
- `app/[lang]/taxes/page.tsx`: tax topics listing
- `app/[lang]/taxes/[slug]/page.tsx`: tax topic detail pages

### Layout

- `components/layout/site-header.tsx`: RRA header, logo, language dropdown, search input
- `components/layout/site-footer.tsx`: footer
- `components/layout/site-shell.tsx`: header + page + footer wrapper
- `components/layout/container.tsx`: shared responsive page container

### Handbook UI

- `components/handbook/handbook-accordion.tsx`: accordion with URL-hash state
- `components/handbook/handbook-breadcrumb.tsx`: breadcrumb wrapper
- `components/handbook/page-hero.tsx`: title and summary area
- `components/handbook/tax-topic-card.tsx`: tax card
- `components/handbook/tax-topic-grid.tsx`: responsive tax card grid

### Content

- `lib/content/home.ts`: homepage card titles, summaries, and links
- `lib/content/general-information.ts`: General Information page content
- `lib/content/taxes/topics.ts`: tax topic content
- `lib/content/taxes/index.ts`: tax topic helper exports
- `lib/content/handbook/index.ts`: localization fallback helpers

### Translation

- `lib/i18n/dictionaries/en.ts`
- `lib/i18n/dictionaries/fr.ts`
- `lib/i18n/dictionaries/rw.ts`
- `lib/i18n/config.ts`
- `lib/types/i18n.ts`

## Editing Content

### Homepage Cards

Edit:

```txt
lib/content/home.ts
```

Each card has localized title and summary fields:

```ts
title: {
  en: "General Information",
  fr: "Informations générales",
  rw: "Amakuru rusange"
}
```

### General Information

Edit:

```txt
lib/content/general-information.ts
```

Each section becomes an accordion item.

### Tax Topics

Edit:

```txt
lib/content/taxes/topics.ts
```

Each tax topic has:

- `slug`
- `category`
- `title`
- `summary`
- `sections`
- optional `relatedSlugs`

## Translation Flow

Localized content uses objects like this:

```ts
title: {
  en: "Definitions",
  fr: "Définitions",
  rw: "Ibisobanuro"
}
```

The fallback logic is in:

```txt
lib/content/handbook/index.ts
```

If `fr` or `rw` is missing, English is used.

## Language Switching

The language dropdown is in:

```txt
components/i18n/language-switcher.tsx
```

It preserves the current page and hash.

Example:

```txt
/en/general-information#definitions
```

Switching to French becomes:

```txt
/fr/general-information#definitions
```

The same accordion section opens after switching language.

## Search

The header search form submits to:

```txt
/{lang}/search?q=keyword
```

Current status:

```txt
Search page exists, but keyword matching is not implemented yet.
```

Search route:

```txt
app/[lang]/search/page.tsx
```

## Styling

Global styling and RRA brand tokens live in:

```txt
app/globals.css
```

Main colors:

```txt
RRA Blue:       #09154C
RRA Orange:     #FFAE1B
RRA Green:      #5AB43F
RRA Black:      #0E0000
RRA White:      #FFFEFE
RRA Light Blue: #5196CF
```

Project convention:

- Subtitles and accordion titles use `#5196CF`
- Bold text uses `#5196CF`

## Study Guide

A deeper explanation for learners is available locally at:

```txt
docs/study-guide.md
```

The `docs/` folder is ignored by git, so it is for local learning notes.

## Notes

- Keep page files small.
- Put reusable UI in `components/`.
- Put content in `lib/content/`.
- Put UI labels in `lib/i18n/dictionaries/`.
- Keep project-specific wrappers separate from generic shadcn components.

