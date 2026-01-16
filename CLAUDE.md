# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with Astro 5, TypeScript, and Tailwind CSS v4. Server-rendered and deployed to Vercel.

**Live site:** https://davidgaribay.dev

## Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build production site to ./dist/
npm run preview  # Preview production build locally
```

## Architecture

### Content Collections

Content is managed through Astro collections in `src/content/` with Zod schemas defined in `src/content/config.ts`:

- **experience/** - Work history (company, position, dates, technologies, order)
- **projects/** - Project showcases (title, description, technologies, featured, github/link URLs)
- **recommendations/** - Professional endorsements (name, title, company)
- **posts/** - Blog posts (title, description, publishDate, tags, draft, featured)

All content uses Markdown with frontmatter. Collections are sorted by `order` field (highest first).

### Theming System

Tailwind v4 theme uses CSS custom properties defined in `src/styles/global.css`:
- Color palette: `zen-bg-*` for backgrounds, `text-*` for typography, `zen-coral` for accent
- Dark theme via `[data-theme="dark"]` selector
- Theme preference stored in localStorage with system preference fallback

### Key Files

- `src/data/site.ts` - Centralized site configuration
- `src/layouts/BaseLayout.astro` - Primary layout with SEO, JSON-LD structured data, meta tags
- `src/components/layout/Header.astro` - Navigation with mobile menu
- `src/pages/posts/[...slug].astro` - Dynamic routes for individual posts

### Patterns

- Astro partial hydration - minimal client-side JS
- JSON-LD structured data on all pages (Person schema in layout, Article schema in posts)
- Shiki for code syntax highlighting with light/dark theme support
- IntersectionObserver for scroll animations
