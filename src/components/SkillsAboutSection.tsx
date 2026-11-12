import React from 'react';
import type { SkillItem, ExperienceItem } from '../types';
import { SkillCard } from './SkillCard';
import { ExperienceCard } from './ExperienceCard';

interface SkillsAboutSectionProps {
  skills: SkillItem[];
  experiences: ExperienceItem[];
}

export const SkillsAboutSection: React.FC<SkillsAboutSectionProps> = ({
  skills,
  experiences,
}) => {
  return (
    <section id="skills" className="py-16 sm:py-24 relative bg-[#0d1117] border-y border-[#30363d]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* მარცხენა მხარე: უნარები */}
          <div>
            <div className="mb-8">
              <span className="text-xs font-code text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded border border-cyan-800/50">
                package.json — dependencies
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-3 mb-2 font-sans">
                ტექნიკური სტეკი
              </h2>
              <p className="text-slate-400 text-sm font-sans">
                ტექნოლოგიები, რომლებზეც აგებულია ჩემი აპლიკაციები.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skills.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          </div>

          {/* მარჯვენა მხარე: ჩემ შესახებ & Git History */}
          <div id="about">
            <div className="mb-8">
              <span className="text-xs font-code text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded border border-emerald-800/50">
                git log --graph --oneline
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-3 mb-2 font-sans">
                ჩემ შესახებ & გამოცდილება
              </h2>
              <p className="text-slate-400 text-sm font-sans">
                ჩემი პროფესიული განვითარების ისტორია.
              </p>
            </div>

            <div className="bg-[#161b22] rounded-xl p-5 border border-[#30363d] mb-6 font-sans">
              <p className="text-slate-300 text-sm leading-relaxed mb-1">
                ჩემი მიზანია შევქმნა პროდუქტები, რომლებიც არა მხოლოდ ლამაზია ვიზუალურად, არამედ კოდის დონეზეც არის სრულყოფილად სტრუქტურირებული, სწრაფი და მარტივად გასაფართოებელი.
              </p>
            </div>

            <div className="mt-4">
              {experiences.map((exp) => (
                <ExperienceCard key={exp.id} item={exp} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
