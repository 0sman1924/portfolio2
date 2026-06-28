"use client";

import { useState, useMemo } from "react";
import { TagFilter } from "@/components/TagFilter";
import { ArticleCard } from "@/components/ArticleCard";
import type { ContentItem } from "@/lib/content";

interface ArticlesListProps {
  articles: ContentItem[];
  allTags: string[];
}

export function ArticlesList({ articles, allTags }: ArticlesListProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredArticles = useMemo(() => {
    if (selectedTags.length === 0) return articles;
    return articles.filter((article) =>
      selectedTags.some((tag) => article.frontmatter.tags.includes(tag))
    );
  }, [articles, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <>
      {allTags.length > 0 && (
        <TagFilter
          tags={allTags}
          selectedTags={selectedTags}
          onToggle={toggleTag}
          onClear={() => setSelectedTags([])}
        />
      )}

      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredArticles.map((article) => (
            <ArticleCard
              key={article.slug}
              slug={article.slug}
              frontmatter={article.frontmatter}
            />
          ))}
        </div>
      ) : (
        <p className="text-foreground-muted text-sm py-8 text-center">
          No articles match the selected filters.
        </p>
      )}
    </>
  );
}
