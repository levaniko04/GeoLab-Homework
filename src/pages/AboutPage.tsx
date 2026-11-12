import React from 'react';
import { experienceData } from '../data';
import { ExperienceCard } from '../components/ExperienceCard';
import type { PageId } from '../types';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* სათაური */}
      <div className="mb-12 text-center sm:text-left">
        <span className="text-xs font-code text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/60 px-3 py-1 rounded border border-cyan-200 dark:border-cyan-800/50">
          about-me.md
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white mt-4 mb-3 tracking-tight">
          ჩემ შესახებ
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl">
          გაიგეთ მეტი ჩემი განვითარების გზის, მიდგომებისა და მიზნების შესახებ.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* მარცხენა ბლოკი: დეტალური ბიოგრაფია */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white dark:bg-[#161b22]/90 border border-slate-200 dark:border-[#30363d] rounded-2xl p-6 sm:p-8 backdrop-blur-xl space-y-4 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>👋</span> ვინ ვარ მე?
            </h2>
            <p>
              მე ვარ <span className="text-cyan-600 dark:text-cyan-400 font-semibold">ლევან მელქონიანი</span>, Front-End ვებ-დეველოპერი. ჩემი მიზანია შევქმნა თანამედროვე, სუფთა და მაღალი წარმადობის ინტერფეისები.
            </p>
            <p>
              დეველოპმენტში განსაკუთრებულ ყურადღებას ვუთმობ კოდის სისუფთავეს, მოდულარულობას, ხელმისაწვდომობასა (Accessibility) და მომხმარებლის უწყვეტ გამოცდილებას.
            </p>
            <div className="pt-4 border-t border-slate-200 dark:border-[#30363d] grid grid-cols-2 gap-4 text-xs sm:text-sm font-code">
              <div>
                <p className="text-slate-500">ლოკაცია:</p>
                <p className="text-slate-900 dark:text-slate-200 font-bold">თბილისი, საქართველო</p>
              </div>
              <div>
                <p className="text-slate-500">სტატუსი:</p>
                <p className="text-emerald-600 dark:text-emerald-400 font-bold">ხელმისაწვდომი</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => onNavigate('projects')}
              className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-code font-bold text-sm transition-all shadow-lg shadow-cyan-500/20"
            >
              ნამუშევრების ნახვა
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-xl bg-white dark:bg-[#161b22] hover:bg-slate-50 dark:hover:bg-[#21262d] text-slate-900 dark:text-white font-code font-semibold text-sm border border-slate-200 dark:border-[#30363d] transition-all shadow-sm"
            >
              დამიკავშირდით
            </button>
          </div>
        </div>

        {/* მარჯვენა ბლოკი: გამოცდილების თაიმლაინი */}
        <div className="lg:col-span-5 bg-white dark:bg-[#161b22]/70 border border-slate-200 dark:border-[#30363d] rounded-2xl p-6 backdrop-blur-xl shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 font-code flex items-center gap-2">
            <span className="text-cyan-600 dark:text-cyan-400">git log</span> — გამოცდილება
          </h3>
          <div>
            {experienceData.map((exp) => (
              <ExperienceCard key={exp.id} item={exp} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
