import React, { useState } from 'react';
import type { NavItem, PageId } from '../types';
import { useTheme } from '../ThemeContext';

interface HeaderProps {
  navItems: NavItem[];
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ navItems, currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-2xl bg-white/80 dark:bg-[#0d1117]/90 border-b border-slate-200/80 dark:border-[#30363d] transition-all duration-300 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* ლოგო */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left group cursor-pointer font-code flex items-center gap-2 focus:outline-none"
        >
          <span className="text-cyan-600 dark:text-cyan-400 font-bold text-lg">&lt;/&gt;</span>
          <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
            ლევან მელქონიანი
          </span>
        </button>

        {/* დესკტოპ ნავიგაცია */}
        <nav className="hidden md:flex items-center gap-1.5 bg-slate-100/90 dark:bg-[#161b22]/90 p-1.5 rounded-xl border border-slate-200 dark:border-[#30363d]">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-[#21262d]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Dark / Light Mode Toggle Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Dark/Light Mode"
            className="p-2 rounded-xl bg-slate-100 dark:bg-[#161b22] border border-slate-200 dark:border-[#30363d] text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all hover:scale-105 active:scale-95 shadow-sm"
          >
            {theme === 'dark' ? (
              // მზის აიკონი (Light Mode-ზე გადასართავად)
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              // მთვარის აიკონი (Dark Mode-ზე გადასართავად)
              <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* მობილურის მენიუს ღილაკი */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-[#161b22] border border-slate-200 dark:border-[#30363d]"
            aria-label="მენიუს გადართვა"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* მობილურის ნავიგაცია */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-slate-200 dark:border-[#30363d] bg-white dark:bg-[#0d1117] px-4 py-3 space-y-1">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 font-bold'
                    : 'text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-[#161b22]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      )}
    </header>
  );
};
