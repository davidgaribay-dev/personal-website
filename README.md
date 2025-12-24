# Portfolio Website

A modern, fast portfolio website built with Astro and Tailwind CSS. Features server-side rendering, content collections for dynamic content management, and a clean, responsive design.

**Live:** [davidgaribay.dev](https://davidgaribay.dev)

## Tech Stack

- **[Astro](https://astro.build)** v5 - Static site generator with SSR support
- **[Tailwind CSS](https://tailwindcss.com)** v4 - Utility-first CSS framework
- **[Vercel](https://vercel.com)** - Deployment platform
- **TypeScript** - Type-safe development

## Features

- Server-side rendering (SSR) for dynamic content
- Markdown-based content collections
- Custom Tailwind CSS design system
- Fully responsive layout
- Optimized performance with Astro's partial hydration
- SEO-friendly meta tags

## Project Structure

```text
dmg-portfolio/
├── public/              # Static assets (images, favicon, etc.)
├── src/
│   ├── components/      # Reusable UI components
│   ├── content/         # Content collections (markdown)
│   │   ├── experience/  # Work experience entries
│   │   ├── notes/       # Blog posts/notes
│   │   ├── projects/    # Project showcases
│   │   └── recommendations/  # Professional recommendations
│   ├── data/            # Site configuration (site.ts)
│   ├── layouts/         # Page layout components
│   └── pages/           # Route pages (index, about, etc.)
├── astro.config.mjs     # Astro configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## Development

### Prerequisites

- Node.js 18+
- npm or pnpm

### Setup

```bash
# Clone the repository
git clone https://github.com/davidgaribay-dev/dmg-portfolio.git
cd dmg-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` to view the site.

### Available Commands

| Command           | Description                                   |
| :---------------- | :-------------------------------------------- |
| `npm install`     | Install dependencies                          |
| `npm run dev`     | Start dev server at `localhost:4321`          |
| `npm run build`   | Build production site to `./dist/`            |
| `npm run preview` | Preview production build locally              |

## Content Management

Content is managed through Astro's content collections using Markdown files with frontmatter:

**Experience** (`src/content/experience/`)
```markdown
---
company: "Company Name"
position: "Job Title"
startDate: "2020-01"
endDate: "2022-12"
---
Job description...
```

**Projects** (`src/content/projects/`)
```markdown
---
title: "Project Name"
description: "Brief description"
technologies: ["Tech1", "Tech2"]
github: "https://github.com/..."
featured: true
---
Detailed description...
```

## Deployment

The site is deployed on Vercel with automatic deployments from the main branch. Configuration is handled via `astro.config.mjs` with the Vercel adapter.

## Customization

To use this as a template for your own portfolio:

1. Update `src/data/site.ts` with your information
2. Replace content in `src/content/` directories
3. Update colors in Tailwind config if desired
4. Replace images in `public/`

## License

MIT License - feel free to fork and customize for your own use!

## Contact

- LinkedIn: [david--garibay](https://www.linkedin.com/in/david--garibay/)
- GitHub: [davidgaribay-dev](https://github.com/davidgaribay-dev)
