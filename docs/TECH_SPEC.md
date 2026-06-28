# TECH_SPEC.md

# Architecture
Static Next.js application exported for GitHub Pages.

## Folder Structure

```text
portfolio/
├── docs/
├── content/
│   ├── reports/
│   ├── projects/
│   └── articles/
├── data/
│   ├── skills.ts
│   ├── certifications.ts
│   ├── social-links.ts
│   └── timeline.ts
├── public/
│   ├── images/
│   └── resume/
├── src/
│   ├── app/
│   ├── components/
│   ├── lib/
│   └── styles/
└── .github/workflows/
```

## Routes
- /
- /projects
- /projects/[slug]
- /reports
- /reports/[slug]
- /articles
- /articles/[slug]
- /about

## Components
- Navbar
- Footer
- Hero
- ThemeToggle
- SocialLinks
- Card
- ProjectCard
- ReportCard
- ArticleCard
- Tag
- MarkdownRenderer

## Content-first Architecture
UI must never hardcode content.

Projects, reports and articles are stored as Markdown/MDX.

Adding content should only require:
1. Create MDX file
2. Add thumbnail
3. Commit & Push

No React code changes.

## Markdown Frontmatter

```yaml
title:
description:
date:
tags:
thumbnail:
published:
readingTime:
github:
```

## Theme
- CSS variables
- Light
- Dark
- Persist user preference

## Design Rules
- Minimal
- Professional
- No unnecessary animations
- Rounded cards
- Consistent spacing

## GitHub Pages
next.config.ts

```ts
output: "export"
```

Deploy using GitHub Actions.

## Coding Standards
- TypeScript strict
- Reusable components
- ESLint
- Consistent naming
- No duplicated code

## Performance
- Static pages
- Optimized images
- Lazy loading where appropriate

## Scalability
Future additions:
- Malware Analysis
- Threat Intelligence
- Search
- RSS
- Analytics

Architecture must remain content-driven and GitHub Pages compatible.
