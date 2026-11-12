import React from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="group relative bg-white/95 dark:bg-[#111726]/80 backdrop-blur-2xl rounded-2xl overflow-hidden border border-slate-200/90 dark:border-[#30363d]/80 hover:border-cyan-500/80 dark:hover:border-cyan-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/15 dark:hover:shadow-cyan-950/60 flex flex-col h-full hover:-translate-y-2">
      {/* ბარათის ზედა მინი-ჰედერი (VS Code Tab Header) */}
      <div className="px-4 py-2.5 bg-slate-50/90 dark:bg-[#0b0f19]/90 border-b border-slate-200/90 dark:border-[#30363d]/80 flex items-center justify-between font-code text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 group-hover:scale-125 group-hover:shadow-[0_0_10px_#06b6d4] transition-all duration-300"></span>
          <span className="text-slate-800 dark:text-slate-200 font-semibold truncate max-w-[170px]">{project.title}</span>
        </div>
        {project.badge && (
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 font-code">
            {project.badge}
          </span>
        )}
      </div>

      {/* სურათის ბლოკი */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-900">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-95 group-hover:opacity-100"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <span className="absolute bottom-3 left-4 text-xs font-code font-semibold text-white bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20 shadow-md">
          {project.category}
        </span>
      </div>

      {/* აღწერა და თეგები */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors mb-2 font-sans">
          {project.title}
        </h3>
        
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 flex-grow font-sans">
          {project.description}
        </p>

        {/* თეგები */}
        <div className="flex flex-wrap gap-1.5 mb-5 font-code">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-[#0b0f19] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-[#30363d]/80 group-hover:border-cyan-500/40 transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* მოქმედების ბმული */}
        <a
          href={project.link || '#'}
          className="inline-flex items-center text-xs sm:text-sm font-code font-bold text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors gap-2 pt-3 border-t border-slate-200/80 dark:border-[#30363d]/60"
        >
          <span>პროექტის ნახვა</span>
          <svg className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </article>
  );
};
