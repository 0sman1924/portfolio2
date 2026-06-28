interface PageHeaderProps {
  title: string;
  description: string;
  count?: number;
  countLabel?: string;
}

export function PageHeader({
  title,
  description,
  count,
  countLabel = "items",
}: PageHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-foreground mb-2">{title}</h1>
      <p className="text-foreground-secondary">
        {description}
        {count !== undefined && (
          <span className="text-foreground-muted ml-1">
            — {count} {countLabel}
          </span>
        )}
      </p>
    </div>
  );
}
