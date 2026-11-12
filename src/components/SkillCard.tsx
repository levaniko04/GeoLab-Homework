import React from 'react';
import type { SkillItem } from '../types';

interface SkillCardProps {
  skill: SkillItem;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="bg-white/95 dark:bg-[#111726]/80 backdrop-blur-xl rounded-xl p-4 border border-slate-200 dark:border-[#30363d]/80 hover:border-cyan-500/60 dark:hover:border-cyan-400/60 hover:shadow-lg dark:hover:shadow-cyan-950/40 transition-all duration-300 group hover:-translate-y-1">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl group-hover:scale-125 transition-transform duration-300 filter drop-shadow-sm">
            {skill.icon}
          </span>
          <span className="font-code text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
            {skill.name}
          </span>
        </div>
        <span className="text-xs font-code font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/25">
          {skill.level}%
        </span>
      </div>

      {/* პროგრესის ზოლი ნათებით */}
      <div className="w-full bg-slate-100 dark:bg-[#070b14] rounded-full h-2 overflow-hidden border border-slate-200/80 dark:border-[#30363d]/80 p-[1px]">
        <div
          className="bg-gradient-to-r from-cyan-500 via-sky-400 to-emerald-400 h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(6,182,212,0.5)]"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
};
