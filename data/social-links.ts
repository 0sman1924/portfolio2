export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/yourusername",
    icon: "github",
    label: "GitHub",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: "linkedin",
    label: "LinkedIn",
  },
  {
    platform: "X",
    url: "https://x.com/yourusername",
    icon: "x",
    label: "X (Twitter)",
  },
  {
    platform: "Email",
    url: "mailto:your@email.com",
    icon: "email",
    label: "Email",
  },
];
