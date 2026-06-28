export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    category: "Security",
    skills: [
      { name: "SOC Analysis" },
      { name: "DFIR" },
      { name: "Detection Engineering" },
      { name: "SIEM (Splunk)" },
      { name: "Sigma Rules" },
      { name: "MITRE ATT&CK" },
      { name: "Threat Hunting" },
      { name: "Log Analysis" },
    ],
  },
  {
    category: "DevOps",
    skills: [
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "CI/CD" },
      { name: "GitHub Actions" },
      { name: "Terraform" },
      { name: "Ansible" },
      { name: "Linux Administration" },
    ],
  },
  {
    category: "Programming",
    skills: [
      { name: "Python" },
      { name: "Bash" },
      { name: "TypeScript" },
      { name: "Go" },
      { name: "SQL" },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git" },
      { name: "VS Code" },
      { name: "Wireshark" },
      { name: "Burp Suite" },
      { name: "Nmap" },
      { name: "AWS" },
    ],
  },
];
