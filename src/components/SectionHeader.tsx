import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  href: string;
  linkLabel?: string;
}

export function SectionHeader({
  title,
  href,
  linkLabel = "View All",
}: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      <Link
        href={href}
        className="inline-flex items-center gap-1 text-sm text-accent hover:text-accent-hover transition-colors"
      >
        {linkLabel}
        <ArrowRight size={14} />
      </Link>
    </div>
  );
}
