export type PageId = 'home' | 'about' | 'skills' | 'projects' | 'contact';

export interface NavItem {
  id: PageId;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  badge?: string;
  link?: string;
}

export interface SkillItem {
  id: string;
  name: string;
  level: number;
  category: 'frontend' | 'tools' | 'languages';
  icon: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string;
}
