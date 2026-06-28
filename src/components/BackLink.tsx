import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BackLinkProps {
  href: string;
  label: string;
}

export function BackLink({ href, label }: BackLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 text-sm text-foreground-secondary hover:text-accent transition-colors mb-8"
    >
      <ArrowLeft size={14} />
      {label}
    </Link>
  );
}
