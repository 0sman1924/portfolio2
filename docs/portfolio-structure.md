# Portfolio Structure Report

This document outlines the architecture, file structure, and main components of the portfolio project. The project is built using Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and is fully configured for static export (`output: "export"`) to ensure compatibility with GitHub Pages.

## 1. Directory Overview

- **`/src`**: Contains all source code (React components, routing, libraries).
- **`/content`**: Stores Markdown (`.md`) files that populate the Projects, Reports, and Articles sections.
- **`/data`**: Contains TypeScript files (`.ts`) that define static data structures like skills, timelines, and SEO configuration.
- **`/public`**: Houses static assets such as favicons, the web app manifest, and the downloadable resume.
- **`/docs`**: Project documentation (PRD, Technical Specifications, Progress, and this structure report).

---

## 2. Source Code (`/src`)

### `/src/app` (Next.js App Router)
Handles all the routing and page layouts.
- **`layout.tsx`**: The root layout. Wraps the app in the `ThemeProvider`, renders the `Navbar` and `Footer`, and defines global SEO metadata (Open Graph, Twitter).
- **`page.tsx`**: The Home page. Assembles the `Hero`, Featured Content sections (Reports, Projects, Articles), and the `SkillsSnapshot`.
- **`globals.css`**: Defines CSS custom properties (light/dark mode variables) and imports Tailwind v4.
- **`/about/page.tsx`**: The About page. Data-driven page rendering professional summary, experience, education, certifications, and languages.
- **`/projects`, `/reports`, `/articles`**: Listing pages with tag filtering logic.
- **`[slug]/page.tsx`**: Dynamic routes for viewing individual markdown files, parsed using `MarkdownRenderer`.
- **`robots.ts` & `sitemap.ts`**: Dynamically generates `robots.txt` and `sitemap.xml` at build time.

### `/src/components` (UI Components)
Reusable React components forming the building blocks of the portfolio.
- **Layout & Navigation**:
  - `Navbar.tsx`: Sticky top navigation with mobile toggle.
  - `Footer.tsx`: Simple footer with copyright and social links.
  - `ThemeToggle.tsx`: Button to switch between light and dark themes.
  - `ThemeProvider.tsx`: React Context to manage theme state and prevent Flash of Unstyled Content (FOUC).
- **Content Display**:
  - `MarkdownRenderer.tsx`: Core component that parses and renders Markdown strings into fully styled HTML using `react-markdown`.
  - `Card Components` (`ProjectCard.tsx`, `ReportCard.tsx`, `ArticleCard.tsx`): Consistent UI blocks to display content summaries.
- **Interactive Elements**:
  - `TagFilter.tsx`: A multi-select tag filtration component used on listing pages.
  - `SkillsSnapshot.tsx`: Displays a visual array of technology icons using a flex layout.
  - `SkillIcon.tsx`: Fetches SVG logos from the Simple Icons CDN or falls back to Lucide icons.
  - `SocialLinks.tsx`: Inline SVGs for social media links.
  - `Hero.tsx`: The landing section containing a multilingual typing animation.

### `/src/lib` (Utilities)
- **`content.ts`**: The content management engine. It reads the local file system using `fs`, parses Markdown files with `gray-matter`, extracts frontmatter data, calculates reading times, and serves it to the Next.js pages at build time.

---

## 3. Data & Content Layers

### `/content` (Markdown Files)
Divided into three subdirectories:
- `/projects`
- `/reports`
- `/articles`
Each file contains YAML frontmatter (title, description, date, tags) followed by the markdown body.

### `/data` (Static Data Configuration)
- **`site-config.ts`**: Centralized SEO definitions (site name, URL, meta descriptions).
- **`profile.ts`**: About page textual content (summary, languages, achievements).
- **`timeline.ts`**: Work experience and education history.
- **`certifications.ts`**: List of earned certifications with verification links.
- **`skills.ts`**: Grouped technology skills (Languages, Tools, Infrastructure) mapped to their respective Simple Icon slugs.
- **`social-links.ts`**: GitHub, LinkedIn, Twitter/X, and Email configurations.

---

## 4. Key Architectural Decisions

1. **Content-First Approach**: The UI does not contain hardcoded portfolio text. All content flows dynamically from `/data` and `/content`, ensuring the developer only needs to write Markdown or TypeScript objects to update their portfolio.
2. **Static Site Generation (SSG)**: Everything is built into pure HTML/CSS/JS via `output: "export"`. There is no Node.js backend running in production.
3. **Accessibility (a11y)**: All interactive elements feature ARIA attributes and high-contrast `focus-visible` rings for keyboard navigation.
4. **Performance**: Heavy client-side components (like `SkillsSnapshot`) are dynamically imported to minimize initial JavaScript payloads, and images/icons use `loading="lazy"`.
