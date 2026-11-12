import React from 'react';
import { Button } from './Button';
import { InteractiveIDE } from './InteractiveIDE';
import type { PageId } from '../types';

interface HeroProps {
  onNavigate?: (page: PageId) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="relative pt-6 sm:pt-12 pb-10 sm:pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ტექსტური ნაწილი */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161b22] border border-[#30363d] text-cyan-400 text-xs font-code shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>npm start — frontend portfolio</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
              ვწერ კოდს,{' '}
              <span className="block bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                რომელიც მუშაობს.
              </span>
            </h1>

            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
              გამარჯობა! მე ვარ ლევანი. სპეციალიზებული ვარ React, TypeScript და სუფთა მოდულარული არქიტექტურით მაღალი სისწრაფის ინტერფეისების აგებაში.
            </p>

            {/* ღილაკები */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <Button
                variant="primary"
                size="md"
                onClick={() => onNavigate && onNavigate('projects')}
              >
                &lt;პროექტები /&gt;
              </Button>
              <Button
                variant="secondary"
                size="md"
                onClick={() => onNavigate && onNavigate('contact')}
              >
                კონტაქტი
              </Button>
            </div>

            {/* ტერმინალის სწრაფი ინფო */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-xs font-code text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400">●</span> 100% TypeScript
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-cyan-400">●</span> React 19 Hooks
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-purple-400">●</span> Vite Powered
              </span>
            </div>
          </div>

          {/* მარჯვენა მხარე: ინტერაქტიული IDE კოდის რედაქტორი */}
          <div className="lg:col-span-6 w-full">
            <InteractiveIDE />
          </div>

        </div>
      </div>
    </section>
  );
};
