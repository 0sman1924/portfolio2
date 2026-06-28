export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  badgeUrl?: string;
}

export const certifications: Certification[] = [
  // Add your certifications here. Example:
  // {
  //   name: "CompTIA Security+",
  //   issuer: "CompTIA",
  //   date: "2024",
  //   credentialUrl: "https://...",
  // },
];
