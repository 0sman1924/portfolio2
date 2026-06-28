"use client";

import { useState } from "react";
import { Tag } from "./Tag";

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
            className="text-xs text-accent hover:text-accent-hover transition-colors cursor-pointer"
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
              className={`cursor-pointer px-2.5 py-1 text-xs font-medium rounded-md transition-colors duration-150 ${
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
            className="text-xs text-foreground-muted hover:text-accent transition-colors cursor-pointer"
          >
            {expanded ? "Show less" : `+${tags.length - 8} more`}
          </button>
        )}
      </div>
    </div>
  );
}
