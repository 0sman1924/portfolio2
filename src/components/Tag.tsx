interface TagProps {
  label: string;
  className?: string;
}

export function Tag({ label, className = "" }: TagProps) {
  return (
    <span
      className={`inline-block px-2.5 py-1 text-xs font-medium rounded-md bg-tag-bg text-tag-text ${className}`}
    >
      {label}
    </span>
  );
}
