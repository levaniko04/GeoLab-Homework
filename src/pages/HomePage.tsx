import React from 'react';
import { Hero } from '../components/Hero';
import { ProjectCard } from '../components/ProjectCard';
import { SkillCard } from '../components/SkillCard';
import { projectsData, skillsData } from '../data';
import type { PageId } from '../types';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 py-6">
      {/* Hero სექცია */}
      <Hero onNavigate={onNavigate} />

      {/* პროექტების მოკლე მიმოხილვა */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200 dark:border-[#30363d]/80">
          <div>
            <span className="text-xs font-code text-cyan-600 dark:text-cyan-400 font-semibold">// featured</span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">რჩეული პროექტები</h2>
          </div>
          <button
            onClick={() => onNavigate('projects')}
            className="text-xs sm:text-sm font-code text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-semibold flex items-center gap-1.5"
          >
            ყველას ნახვა →
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectsData.slice(0, 4).map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      {/* უნარების მოკლე მიმოხილვა */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200 dark:border-[#30363d]/80">
          <div>
            <span className="text-xs font-code text-emerald-600 dark:text-emerald-400 font-semibold">// tech stack</span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">ძირითადი უნარები</h2>
          </div>
          <button
            onClick={() => onNavigate('skills')}
            className="text-xs sm:text-sm font-code text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-semibold flex items-center gap-1.5"
          >
            დეტალურად →
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillsData.slice(0, 6).map((s) => (
            <SkillCard key={s.id} skill={s} />
          ))}
        </div>
      </section>
    </div>
  );
};
