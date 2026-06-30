export interface Skill {
  name: string;
  /** Simple Icons slug (e.g., "docker", "python") or lucide icon name prefixed with "lucide:" (e.g., "lucide:shield") */
  icon: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    category: "Security",
    skills: [
      { name: "SOC Analysis", icon: "lucide:shield-check" },
      { name: "DFIR", icon: "lucide:search" },
      { name: "Detection Engineering", icon: "lucide:scan-eye" },
      { name: "SIEM (Splunk)", icon: "splunk" },
      { name: "Sigma Rules", icon: "sigma" },
      { name: "MITRE ATT&CK", icon: "lucide:crosshair" },
      { name: "Threat Hunting", icon: "lucide:radar" },
      { name: "Log Analysis", icon: "lucide:file-text" },
    ],
  },
  {
    category: "DevOps",
    skills: [
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "CI/CD", icon: "lucide:git-branch" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "Terraform", icon: "terraform" },
      { name: "Ansible", icon: "ansible" },
      { name: "Linux", icon: "linux" },
    ],
  },
  {
    category: "Programming",
    skills: [
      { name: "Python", icon: "python" },
      { name: "Bash", icon: "gnubash" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Go", icon: "go" },
      { name: "SQL", icon: "lucide:database" },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", icon: "git" },
      { name: "VS Code", icon: "visualstudiocode" },
      { name: "Wireshark", icon: "wireshark" },
      { name: "Burp Suite", icon: "lucide:bug" },
      { name: "Nmap", icon: "lucide:network" },
      { name: "AWS", icon: "amazonwebservices" },
    ],
  },
];
