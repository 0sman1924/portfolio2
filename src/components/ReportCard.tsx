import Link from "next/link";
import { Tag } from "./Tag";
import { Calendar, Clock } from "lucide-react";
import type { ContentFrontmatter } from "@/lib/content";

interface ReportCardProps {
  slug: string;
  frontmatter: ContentFrontmatter;
}

export function ReportCard({ slug, frontmatter }: ReportCardProps) {
  const formattedDate = frontmatter.date
    ? new Date(frontmatter.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";

  return (
    <Link
      href={`/reports/${slug}`}
      className="group block rounded-xl border border-card-border bg-card p-5 hover:border-accent/30 transition-colors duration-200"
    >
      <div className="flex items-center gap-3 text-xs text-foreground-muted mb-3">
        {formattedDate && (
          <span className="inline-flex items-center gap-1">
            <Calendar size={12} />
            {formattedDate}
          </span>
        )}
        {frontmatter.readingTime && (
          <span className="inline-flex items-center gap-1">
            <Clock size={12} />
            {frontmatter.readingTime}
          </span>
        )}
      </div>

      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
        {frontmatter.title}
      </h3>
      <p className="text-sm text-foreground-secondary mb-4 line-clamp-2">
        {frontmatter.description}
      </p>

      {frontmatter.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {frontmatter.tags.slice(0, 4).map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
          {frontmatter.tags.length > 4 && (
            <span className="text-xs text-foreground-muted self-center">
              +{frontmatter.tags.length - 4}
            </span>
          )}
        </div>
      )}
    </Link>
  );
}
