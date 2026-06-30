"use client";

import { useState } from "react";

interface TagFilterProps {
  tags: string[];
  selectedTags: string[];
  onToggle: (tag: string) => void;
  onClear: () => void;
}

export function TagFilter({ tags, selectedTags, onToggle, onClear }: TagFilterProps) {
  const [expanded, setExpanded] = useState(false);

  const visibleTags = expanded ? tags : tags.slice(0, 8);
  const hasMore = tags.length > 8;

  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-sm font-medium text-foreground-secondary">
          Filter by tag:
        </span>
        {selectedTags.length > 0 && (
          <button
            onClick={onClear}
            aria-label="Clear all filters"
            className="text-xs text-accent hover:text-accent-hover transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
          >
            Clear all
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {visibleTags.map((tag) => {
          const isSelected = selectedTags.includes(tag);
          return (
            <button
              key={tag}
              onClick={() => onToggle(tag)}
              aria-pressed={isSelected}
              className={`cursor-pointer px-2.5 py-1 text-xs font-medium rounded-md transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                isSelected
                  ? "bg-accent text-accent-foreground"
                  : "bg-tag-bg text-tag-text hover:bg-accent/10 hover:text-accent"
              }`}
            >
              {tag}
            </button>
          );
        })}
        {hasMore && (
          <button
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            className="text-xs text-foreground-muted hover:text-accent transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1"
          >
            {expanded ? "Show less" : `+${tags.length - 8} more`}
          </button>
        )}
      </div>
    </div>
  );
}
