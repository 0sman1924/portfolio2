"use client";

import { useState, useMemo } from "react";
import { TagFilter } from "@/components/TagFilter";
import { ReportCard } from "@/components/ReportCard";
import type { ContentItem } from "@/lib/content";

interface ReportsListProps {
  reports: ContentItem[];
  allTags: string[];
}

export function ReportsList({ reports, allTags }: ReportsListProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredReports = useMemo(() => {
    if (selectedTags.length === 0) return reports;
    return reports.filter((report) =>
      selectedTags.some((tag) => report.frontmatter.tags.includes(tag))
    );
  }, [reports, selectedTags]);

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

      {filteredReports.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReports.map((report) => (
            <ReportCard
              key={report.slug}
              slug={report.slug}
              frontmatter={report.frontmatter}
            />
          ))}
        </div>
      ) : (
        <p className="text-foreground-muted text-sm py-8 text-center">
          No reports match the selected filters.
        </p>
      )}
    </>
  );
}
