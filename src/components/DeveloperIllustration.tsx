import React from 'react';

export const DeveloperIllustration: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full select-none ${className}`}
    >
      <defs>
        {/* სუფთა ნათელი ფონის გრადიენტი */}
        <linearGradient id="lightBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="50%" stopColor="#eff6ff" />
          <stop offset="100%" stopColor="#e0e7ff" />
        </linearGradient>

        <linearGradient id="coolBlueHoodie" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#3730a3" />
        </linearGradient>

        <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>

        <linearGradient id="accentLineLight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
      </defs>

      {/* ფონი */}
      <rect width="500" height="500" rx="24" fill="url(#lightBg)" />

      {/* ნაზი დეკორატიული წრეები ფონზე */}
      <circle cx="100" cy="110" r="100" fill="#3b82f6" fillOpacity="0.08" filter="blur(40px)" />
      <circle cx="390" cy="120" r="110" fill="#8b5cf6" fillOpacity="0.1" filter="blur(45px)" />

      {/* მცურავი ბეიჯები */}
      <rect x="45" y="80" width="85" height="30" rx="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.05))" />
      <text x="56" y="100" fill="#2563eb" fontSize="12" fontFamily="monospace" fontWeight="bold">React 19 ✨</text>

      <rect x="360" y="80" width="95" height="30" rx="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.05))" />
      <text x="372" y="100" fill="#7c3aed" fontSize="12" fontFamily="monospace" fontWeight="bold">&lt;TypeScript/&gt;</text>

      {/* მაგიდა */}
      <rect x="40" y="410" width="420" height="14" rx="7" fill="#cbd5e1" />
      <rect x="70" y="424" width="360" height="6" fill="#94a3b8" />

      {/* ყავის ჭიქა */}
      <rect x="390" y="370" width="30" height="40" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.05))" />
      <path d="M420 380 C 430 380, 430 398, 420 398" stroke="#cbd5e1" strokeWidth="3" fill="none" />
      <circle cx="405" cy="390" r="6" fill="#4f46e5" />
      {/* ორთქლი */}
      <path d="M398 358 Q 394 348 401 340" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d="M407 362 Q 412 350 405 342" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />

      {/* მონიტორის სადგამი */}
      <rect x="235" y="365" width="30" height="45" rx="3" fill="#64748b" />
      <path d="M195 410 L305 410 L285 404 L215 404 Z" fill="#475569" />

      {/* მონიტორის ჩარჩო */}
      <rect x="100" y="150" width="300" height="215" rx="14" fill="#0f172a" stroke="#334155" strokeWidth="2" filter="drop-shadow(0 10px 15px rgba(0,0,0,0.15))" />
      {/* ეკრანის შიგთავსი */}
      <rect x="110" y="160" width="280" height="195" rx="8" fill="url(#screenGrad)" />

      {/* IDE Header */}
      <rect x="110" y="160" width="280" height="24" rx="8" fill="#1e293b" />
      <circle cx="125" cy="172" r="4" fill="#ef4444" />
      <circle cx="137" cy="172" r="4" fill="#f59e0b" />
      <circle cx="149" cy="172" r="4" fill="#10b981" />
      <text x="165" y="176" fill="#94a3b8" fontSize="10" fontFamily="monospace">⚡ Portfolio.tsx — Studio</text>

      {/* კოდის ხაზები */}
      <g opacity="0.9">
        <rect x="125" y="196" width="60" height="6" rx="3" fill="#38bdf8" />
        <rect x="192" y="196" width="90" height="6" rx="3" fill="#a78bfa" />
        
        <rect x="135" y="210" width="100" height="6" rx="3" fill="#34d399" />
        <rect x="242" y="210" width="65" height="6" rx="3" fill="#f43f5e" />

        <rect x="135" y="224" width="55" height="6" rx="3" fill="#fbbf24" />
        <rect x="198" y="224" width="120" height="6" rx="3" fill="#818cf8" />

        <rect x="145" y="238" width="90" height="6" rx="3" fill="#38bdf8" />
        <rect x="125" y="252" width="45" height="6" rx="3" fill="#c084fc" />
      </g>

      {/* დეველოპერი კაცი */}
      {/* ტანი / ჰუდი */}
      <path
        d="M170 450 C170 340, 205 315, 250 315 C295 315, 330 340, 330 450 Z"
        fill="url(#coolBlueHoodie)"
      />
      {/* ელვა / ჰუდის ხაზი */}
      <path d="M250 335 L250 410" stroke="url(#accentLineLight)" strokeWidth="3" strokeLinecap="round" />
      <path d="M234 340 L230 385" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      <path d="M266 340 L270 385" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" opacity="0.7" />

      {/* კისერი */}
      <rect x="238" y="292" width="24" height="28" rx="4" fill="#f59e0b" />

      {/* თავი */}
      <ellipse cx="250" cy="265" rx="33" ry="38" fill="#fcd34d" />

      {/* თმა */}
      <path
        d="M217 260 C217 225, 235 215, 250 215 C268 215, 283 225, 283 260 C283 245, 275 230, 250 230 C225 230, 219 245, 217 260 Z"
        fill="#334155"
      />

      {/* ყურსასმენები */}
      <path d="M214 246 C214 212, 286 212, 286 246" stroke="#4f46e5" strokeWidth="6" fill="none" strokeLinecap="round" />
      <rect x="210" y="250" width="10" height="26" rx="5" fill="#6366f1" />
      <rect x="280" y="250" width="10" height="26" rx="5" fill="#6366f1" />

      {/* სათვალე */}
      <rect x="228" y="257" width="18" height="12" rx="3" stroke="#4f46e5" strokeWidth="2.5" fill="#e0e7ff" fillOpacity="0.6" />
      <rect x="254" y="257" width="18" height="12" rx="3" stroke="#4f46e5" strokeWidth="2.5" fill="#e0e7ff" fillOpacity="0.6" />
      <line x1="246" y1="262" x2="254" y2="262" stroke="#4f46e5" strokeWidth="2.5" />
      <line x1="220" y1="261" x2="228" y2="261" stroke="#4f46e5" strokeWidth="2" />
      <line x1="272" y1="261" x2="280" y2="261" stroke="#4f46e5" strokeWidth="2" />

      {/* ღიმილი */}
      <path d="M245 284 Q250 289 255 284" stroke="#92400e" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      {/* ხელები კლავიატურაზე */}
      <ellipse cx="205" cy="415" rx="18" ry="12" fill="#fcd34d" transform="rotate(-15 205 415)" />
      <ellipse cx="295" cy="415" rx="18" ry="12" fill="#fcd34d" transform="rotate(15 295 415)" />

      {/* კლავიატურა */}
      <rect x="175" y="412" width="150" height="22" rx="5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.05))" />
      <g fill="#94a3b8">
        <rect x="183" y="416" width="10" height="6" rx="1" fill="#6366f1" />
        <rect x="197" y="416" width="10" height="6" rx="1" fill="#e2e8f0" />
        <rect x="211" y="416" width="10" height="6" rx="1" fill="#e2e8f0" />
        <rect x="225" y="416" width="10" height="6" rx="1" fill="#e2e8f0" />
        <rect x="239" y="416" width="10" height="6" rx="1" fill="#e2e8f0" />
        <rect x="253" y="416" width="10" height="6" rx="1" fill="#e2e8f0" />
        <rect x="267" y="416" width="10" height="6" rx="1" fill="#e2e8f0" />
        <rect x="281" y="416" width="10" height="6" rx="1" fill="#e2e8f0" />
        <rect x="295" y="416" width="10" height="6" rx="1" fill="#6366f1" />
      </g>
    </svg>
  );
};
