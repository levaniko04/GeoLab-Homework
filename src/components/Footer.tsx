import React from 'react';

const currentYear = new Date().getFullYear();

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto border-t border-[#30363d]/80 bg-[#0d1117]/90 backdrop-blur-xl py-8 font-code relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-500 space-y-2">
        <p className="text-slate-400">
          © {currentYear} ლევან მელქონიანი — All systems operational.
        </p>
        <p className="text-slate-600">
          Environment: React 19 • TypeScript • Vite • Tailwind CSS • Clean Architecture
        </p>
      </div>
    </footer>
  );
};
