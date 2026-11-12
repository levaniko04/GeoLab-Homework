import React from 'react';

export const InteractiveIDE: React.FC = () => {
  return (
    <div className="w-full rounded-2xl overflow-hidden border border-[#30363d] bg-[#161b22] shadow-2xl shadow-cyan-950/40 text-left font-code">
      {/* ტერმინალის/IDE-ს ზედა ნაწილი (Tab bar) */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0d1117] border-b border-[#30363d]">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56] hover:opacity-80 cursor-pointer"></span>
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:opacity-80 cursor-pointer"></span>
          <span className="w-3 h-3 rounded-full bg-[#27c93f] hover:opacity-80 cursor-pointer"></span>
          <span className="ml-3 text-xs text-slate-400 font-sans hidden sm:inline">bash — dev@melkoniani:~</span>
        </div>
        
        {/* გახსნილი ტაბები */}
        <div className="flex items-center gap-1 text-xs">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-[#161b22] text-[#58a6ff] border-t-2 border-[#58a6ff] rounded-t font-semibold">
            <span>⚛️</span>
            <span>Developer.tsx</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 text-slate-400 hover:text-slate-200">
            <span>🎨</span>
            <span>styles.css</span>
          </div>
        </div>
      </div>

      {/* კოდის რედაქტორი ხაზების ნომრებით */}
      <div className="p-4 sm:p-6 text-xs sm:text-sm leading-relaxed overflow-x-auto text-slate-300">
        <div className="flex gap-4">
          {/* ხაზის ნომრები */}
          <div className="select-none text-slate-600 text-right pr-2 border-r border-[#30363d] font-code hidden sm:block">
            {Array.from({ length: 14 }).map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>

          {/* კოდის სინტაქსი */}
          <div className="font-code space-y-1">
            <p>
              <span className="text-[#ff7b72]">const</span> <span className="text-[#d2a8ff]">developer</span>: <span className="text-[#79c0ff]">Engineer</span> = &#123;
            </p>
            <p className="pl-4">
              <span className="text-[#7ee787]">name</span>: <span className="text-[#a5d6ff]">'ლევან მელქონიანი'</span>,
            </p>
            <p className="pl-4">
              <span className="text-[#7ee787]">role</span>: <span className="text-[#a5d6ff]">'Front-End Engineer'</span>,
            </p>
            <p className="pl-4">
              <span className="text-[#7ee787]">location</span>: <span className="text-[#a5d6ff]">'Tbilisi, Georgia 🇬🇪'</span>,
            </p>
            <p className="pl-4">
              <span className="text-[#7ee787]">status</span>: <span className="text-[#a5d6ff]">'Building the Future 🚀'</span>,
            </p>
            <p className="pl-4">
              <span className="text-[#7ee787]">skills</span>: [
              <span className="text-[#a5d6ff]">'React'</span>, <span className="text-[#a5d6ff]">'TypeScript'</span>, <span className="text-[#a5d6ff]">'Tailwind'</span>
              ],
            </p>
            <p className="pl-4">
              <span className="text-[#7ee787]">passion</span>: <span className="text-[#ffa657]">['Pixel Perfection', 'Fast UX']</span>,
            </p>
            <p className="pl-4">
              <span className="text-[#7ee787]">availableForHire</span>: <span className="text-[#79c0ff]">true</span>,
            </p>
            <p>&#125;;</p>
            
            <p className="pt-2 text-slate-500">// Terminal Execution Preview</p>
            <div className="flex items-center gap-2 text-emerald-400 pt-1">
              <span className="text-cyan-400 font-bold">$</span>
              <span>npm run build</span>
              <span className="text-slate-400">→</span>
              <span className="text-[#7ee787] font-semibold">Ready in 120ms (0 errors)</span>
              <span className="w-2 h-4 bg-cyan-400 animate-pulse ml-1 inline-block"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

