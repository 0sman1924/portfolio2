import type { Metadata } from "next";
import { getAllContent } from "@/lib/content";
import { PageHeader } from "@/components/PageHeader";
import { ArticlesList } from "@/components/ArticlesList";
import { siteConfig } from "../../../data/site-config";

const pageDescription = "Educational tutorials, technical notes, and guides on security and DevOps topics.";

export const metadata: Metadata = {
  title: "Articles",
  description: pageDescription,
  openGraph: {
    title: "Articles",
    description: pageDescription,
    url: `${siteConfig.url}/articles`,
  },
  twitter: {
    card: "summary",
    title: "Articles",
    description: pageDescription,
  },
};

export default function ArticlesPage() {
  const articles = getAllContent("articles");

  const allTags = Array.from(
    new Set(articles.flatMap((a) => a.frontmatter.tags))
  ).sort();

  return (
    <main className="max-w-5xl mx-auto px-4 py-16 w-full">
      <PageHeader
        title="Articles"
        description="Educational tutorials, technical notes, and guides."
        count={articles.length}
        countLabel={articles.length === 1 ? "article" : "articles"}
      />

      <ArticlesList articles={articles} allTags={allTags} />
    </main>
  );
}
