export interface ProfileData {
  summary: string;
  achievements: Achievement[];
  languages: Language[];
}

export interface Achievement {
  title: string;
  description?: string;
}

export interface Language {
  name: string;
  level: string;
}

export const profile: ProfileData = {
  summary:
    "Security Analyst and DevOps Engineer with hands-on experience in SOC operations, incident response, detection engineering, and infrastructure automation. Passionate about building secure, scalable systems and sharing knowledge through technical writing.",

  achievements: [
    // Add your achievements here. Example:
    // {
    //   title: "Built a SIEM detection pipeline processing 10M+ events/day",
    //   description: "Using Splunk, Sigma rules, and custom automation.",
    // },
  ],

  languages: [
    // Add your languages here. Example:
    // { name: "English", level: "Native" },
    // { name: "Arabic", level: "Native" },
  ],
};
