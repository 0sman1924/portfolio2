import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground-muted">
          &copy; {currentYear} Portfolio. All rights reserved.
        </p>
        <SocialLinks size={18} />
      </div>
    </footer>
  );
}
