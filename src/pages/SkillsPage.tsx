import React, { useState } from 'react';
import { skillsData } from '../data';
import { SkillCard } from '../components/SkillCard';

export const SkillsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'tools'>('all');

  const filteredSkills = activeTab === 'all'
    ? skillsData
    : skillsData.filter((s) => s.category === activeTab);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-code text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/60 px-3 py-1 rounded border border-cyan-200 dark:border-cyan-800/50">
          skills-inventory.json
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white mt-4 mb-3 tracking-tight">
          ტექნიკური უნარები
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
          ტექნოლოგიები და ხელსაწყოები, რომლებსაც ვფლობ და ვიყენებ თანამედროვე ვებ-დეველოპმენტში.
        </p>
      </div>

      {/* ტაბები */}
      <div className="flex justify-center gap-2 mb-10">
        {[
          { key: 'all', label: 'ყველა უნარი' },
          { key: 'frontend', label: 'Front-End' },
          { key: 'tools', label: 'ინსტრუმენტები & Build' },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as any)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-code font-semibold transition-all border ${
              activeTab === tab.key
                ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-lg shadow-cyan-500/25 scale-105'
                : 'bg-white dark:bg-[#161b22] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border-slate-200 dark:border-[#30363d]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* უნარების ბარათები */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};
