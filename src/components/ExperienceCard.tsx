import React from 'react';
import type { ExperienceItem } from '../types';

interface ExperienceCardProps {
  item: ExperienceItem;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ item }) => {
  return (
    <div className="relative pl-6 pb-7 border-l-2 border-slate-200 dark:border-[#30363d] last:border-transparent last:pb-0 group">
      {/* წერტილი ხაზზე (Git Commit Node) */}
      <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-white dark:bg-[#0d1117] border-2 border-cyan-500 dark:border-cyan-400 group-hover:bg-cyan-400 transition-colors"></div>
      
      <span className="text-[11px] font-code font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800/50 px-2 py-0.5 rounded">
        commit: {item.period}
      </span>
      <h4 className="text-base font-bold text-slate-900 dark:text-white mt-1.5 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors font-sans">
        {item.role}
      </h4>
      <p className="text-xs font-code text-slate-500 dark:text-slate-400 mb-1.5">{item.company}</p>
      <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">{item.description}</p>
    </div>
  );
};
