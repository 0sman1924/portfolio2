"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="p-2 rounded-lg hover:bg-card-hover transition-colors duration-200 cursor-pointer"
    >
      {theme === "dark" ? (
        <Sun size={20} className="text-foreground-secondary" />
      ) : (
        <Moon size={20} className="text-foreground-secondary" />
      )}
    </button>
  );
}
