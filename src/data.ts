import type { Project, SkillItem, ExperienceItem, NavItem } from './types';

export const navItems: NavItem[] = [
  { id: 'home', label: 'მთავარი' },
  { id: 'about', label: 'ჩემ შესახებ' },
  { id: 'skills', label: 'უნარები' },
  { id: 'projects', label: 'პროექტები' },
  { id: 'contact', label: 'კონტაქტი' },
];

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'GeoLab ელექტრონული პორტფოლიო',
    category: 'Web Development',
    description: 'სემანტიკური HTML5-ისა და თანამედროვე React კომპონენტების გამოყენებით აწყობილი რესპონსიული ვებ-გვერდი.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
    badge: 'რჩეული',
    link: '#',
  },
  {
    id: '2',
    title: 'კოსმიური UI & დიზაინ სისტემა',
    category: 'UI/UX Design',
    description: 'მუქი თემის, ნეონის აქცენტებისა და თანამედროვე გლასმორფიზმის სტილის სრულყოფილი კომპონენტების ბიბლიოთეკა.',
    tags: ['CSS Glassmorphism', 'Tailwind', 'Figma'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    badge: 'ახალი',
    link: '#',
  },
  {
    id: '3',
    title: 'ბლოგ პლატფორმა & API ინტეგრაცია',
    category: 'Full-Stack Integration',
    description: 'REST API-თან სინქრონიზებული ინტერაქციული პოსტების მართვის სისტემა მონაცემთა ფილტრაციით.',
    tags: ['React', 'Fetch API', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80',
    link: '#',
  },
  {
    id: '4',
    title: 'Node.js & Cloud RESTful API',
    category: 'Backend Development',
    description: 'მიკროსერვისული არქიტექტურა, მონაცემთა ბაზების ინტეგრაცია და ავთენტიფიკაციის უსაფრთხო სისტემა.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Docker'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80',
    badge: 'Backend',
    link: '#',
  },
];

export const skillsData: SkillItem[] = [
  { id: '1', name: 'React & React Hooks', level: 90, category: 'frontend', icon: '⚛️' },
  { id: '2', name: 'TypeScript & Modern JS', level: 85, category: 'frontend', icon: '⚡' },
  { id: '3', name: 'Tailwind CSS & Modern UI', level: 95, category: 'frontend', icon: '🎨' },
  { id: '4', name: 'HTML5 Semantic & Accessibility', level: 95, category: 'frontend', icon: '🌐' },
  { id: '5', name: 'Git & GitHub Actions', level: 80, category: 'tools', icon: '🐙' },
  { id: '6', name: 'Vite & Build Tools', level: 85, category: 'tools', icon: '🚀' },
];

export const experienceData: ExperienceItem[] = [
  {
    id: '1',
    period: '2024 - დღემდე',
    role: 'Front-End დეველოპერი',
    company: 'GeoLab Homeworks & Personal Projects',
    description: 'React, TypeScript და თანამედროვე ვებ-ტექნოლოგიების გამოყენებით აპლიკაციების არქიტექტურისა და კომპონენტების შექმნა.',
  },
  {
    id: '2',
    period: '2023 - 2024',
    role: 'ვებ დეველოპმენტის სტუდენტი',
    company: 'GeoLab Academy',
    description: 'სემანტიკური HTML5, Responsive CSS3, Tailwind და თანამედროვე JavaScript-ის ღრმა შესწავლა.',
  },
];
