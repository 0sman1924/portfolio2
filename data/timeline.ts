export interface TimelineEntry {
  title: string;
  organization: string;
  period: string;
  description?: string;
  type: "education" | "experience";
}

export const timeline: TimelineEntry[] = [
  // Add your education and experience entries here. Example:
  // {
  //   title: "Bachelor of Computer Science",
  //   organization: "University Name",
  //   period: "2020 - 2024",
  //   description: "Focus on cybersecurity and systems.",
  //   type: "education",
  // },
];
