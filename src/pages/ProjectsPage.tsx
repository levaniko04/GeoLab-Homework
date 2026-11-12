import React, { useState } from 'react';
import { projectsData } from '../data';
import { ProjectCard } from '../components/ProjectCard';

export const ProjectsPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const categories = [
    { key: 'all', label: 'ყველა პროექტი' },
    { key: 'Web Development', label: 'Web Development' },
    { key: 'UI/UX Design', label: 'UI/UX Design' },
    { key: 'Full-Stack Integration', label: 'Full-Stack' },
    { key: 'Backend Development', label: 'Backend' },
  ];

  const filteredProjects = selectedFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedFilter);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-code text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/60 px-3 py-1 rounded border border-cyan-200 dark:border-cyan-800/50">
          projects-archive
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white mt-4 mb-3 tracking-tight">
          ყველა პროექტი
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
          დაათვალიერეთ ჩემი რეალური ნამუშევრები, დაწერილი სუფთა და მოდულარული არქიტექტურით.
        </p>
      </div>

      {/* კატეგორიების ფილტრი */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => {
          const isActive = selectedFilter === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => setSelectedFilter(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-code font-semibold transition-all border ${
                isActive
                  ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-lg shadow-cyan-500/25 scale-105'
                  : 'bg-white dark:bg-[#161b22]/80 hover:bg-slate-50 dark:hover:bg-[#21262d] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border-slate-200 dark:border-[#30363d]'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* ქარდების გრიდი */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
