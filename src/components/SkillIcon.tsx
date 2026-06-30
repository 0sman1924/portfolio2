"use client";

import { useTheme } from "./ThemeProvider";
import * as LucideIcons from "lucide-react";

interface SkillIconProps {
  icon: string;
  size?: number;
  className?: string;
}

/**
 * Renders a skill icon. Supports two formats:
 * - Simple Icons slug (e.g., "docker") → fetches SVG from Simple Icons CDN
 * - "lucide:name" (e.g., "lucide:shield-check") → renders a Lucide React icon
 */
export function SkillIcon({ icon, size = 16, className = "" }: SkillIconProps) {
  const { theme } = useTheme();

  if (icon.startsWith("lucide:")) {
    const iconName = icon.replace("lucide:", "");
    // Convert kebab-case to PascalCase for Lucide import
    const pascalName = iconName
      .split("-")
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join("");

    const IconMap = LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string }>>;
    const Icon = IconMap[pascalName];

    if (Icon) {
      return (
        <Icon
          size={size}
          className={`text-foreground-muted shrink-0 ${className}`}
        />
      );
    }

    // Fallback: render nothing if icon not found
    return <span style={{ width: size, height: size }} className="shrink-0" />;
  }

  // Simple Icons CDN
  // Use the appropriate color for the theme
  const color = theme === "dark" ? "a1a1aa" : "52525b";
  const src = `https://cdn.simpleicons.org/${icon}/${color}`;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      width={size}
      height={size}
      loading="lazy"
      className={`shrink-0 ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
