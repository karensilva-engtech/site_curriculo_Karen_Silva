export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: 'BI & Analytics' | 'Python Automation' | 'Machine Learning & AI';
  impactMetrics: { label: string; value: string }[];
  technologies: string[];
  demoType: 'powerbi' | 'python' | 'ml';
  codeSnippet?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  colorClass: string;
  items: {
    name: string;
    level: string; // e.g. "Avançado", "Intermediário"
    description: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  title: string;
  organization: string;
  type: string;
  description: string;
  highlights: string[];
  badgeColor: 'primary' | 'secondary' | 'outline';
}

export interface ContactMessage {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}
