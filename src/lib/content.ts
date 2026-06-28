import fs from "fs";
import path from "path";
import matter from "gray-matter";

/* ============================================
   Types
   ============================================ */

export interface ContentFrontmatter {
  title: string;
  description: string;
  date: string;
  tags: string[];
  thumbnail?: string;
  published: boolean;
  readingTime?: string;
  github?: string;
  stack?: string[];
  pdf?: string;
}

export interface ContentItem {
  slug: string;
  frontmatter: ContentFrontmatter;
  content: string;
}

/* ============================================
   Content directories
   ============================================ */

const CONTENT_DIR = path.join(/* turbopackIgnore: true */ process.cwd(), "content");

type ContentType = "projects" | "reports" | "articles";

/* ============================================
   Helpers
   ============================================ */

/**
 * Get all content items of a given type, sorted by date (newest first).
 * Only returns published items by default.
 */
export function getAllContent(
  type: ContentType,
  includeUnpublished = false
): ContentItem[] {
  const dir = path.join(CONTENT_DIR, type);

  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

  const items: ContentItem[] = files.map((filename) => {
    const filePath = path.join(dir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      slug: filename.replace(/\.mdx?$/, ""),
      frontmatter: {
        title: data.title ?? "Untitled",
        description: data.description ?? "",
        date: data.date ?? "",
        tags: data.tags ?? [],
        thumbnail: data.thumbnail,
        published: data.published ?? true,
        readingTime: data.readingTime,
        github: data.github,
        stack: data.stack,
        pdf: data.pdf,
      },
      content,
    };
  });

  const filtered = includeUnpublished
    ? items
    : items.filter((item) => item.frontmatter.published);

  return filtered.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );
}

/**
 * Get a single content item by slug.
 * Returns undefined if not found.
 */
export function getContentBySlug(
  type: ContentType,
  slug: string
): ContentItem | undefined {
  const dir = path.join(CONTENT_DIR, type);

  const mdPath = path.join(dir, `${slug}.md`);
  const mdxPath = path.join(dir, `${slug}.mdx`);

  let filePath: string | undefined;

  if (fs.existsSync(mdxPath)) {
    filePath = mdxPath;
  } else if (fs.existsSync(mdPath)) {
    filePath = mdPath;
  }

  if (!filePath) {
    return undefined;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    frontmatter: {
      title: data.title ?? "Untitled",
      description: data.description ?? "",
      date: data.date ?? "",
      tags: data.tags ?? [],
      thumbnail: data.thumbnail,
      published: data.published ?? true,
      readingTime: data.readingTime,
      github: data.github,
      stack: data.stack,
      pdf: data.pdf,
    },
    content,
  };
}

/**
 * Get all slugs for a content type.
 * Used with generateStaticParams for static export.
 */
export function getAllSlugs(type: ContentType): string[] {
  const dir = path.join(CONTENT_DIR, type);

  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}
