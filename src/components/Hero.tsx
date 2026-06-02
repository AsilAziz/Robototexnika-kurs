import React from 'react';
import { Bot, Sparkles, Trophy, Users, Award, PlayCircle, ShieldAlert } from 'lucide-react';
import { TranslationDict } from '../types';

interface HeroProps {
  dict: TranslationDict;
  openTrialModal: () => void;
}

export default function Hero({ dict, openTrialModal }: HeroProps) {
  const scrollToRegister = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-white dark:bg-slate-950 border-b-2 border-slate-900 dark:border-slate-100 pt-10 pb-16 sm:pb-24 sm:pt-16 transition-colors duration-300">
      
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -right-40 h-[400px] w-[400px] bg-orange-500/10 dark:bg-orange-500/5 blur-[80px]" />
        <div className="absolute top-1/2 -left-40 h-[400px] w-[400px] bg-blue-500/10 dark:bg-blue-500/5 blur-[80px]" />
        
        {/* Engineering dot grid */}
        <div className="absolute inset-0 opacity-[0.25] dark:opacity-[0.08] pointer-events-none" 
             style={{ 
               backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', 
               backgroundSize: '20px 20px' 
             }} 
         />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero text */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Academy shield badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-none bg-orange-500 text-white border-2 border-slate-900 dark:border-slate-100 text-xs font-black font-mono tracking-wide italic shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ROBOTICS & STEM PREMIER ACADEMY</span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6.5xl tracking-tight text-slate-950 dark:text-white uppercase leading-[0.95] italic">
              {dict.hero.title.replace('Future', '')}
              <span className="block mt-2 text-slate-900 dark:text-white border-y-2 border-slate-900 dark:border-slate-100 py-2.5 my-2 bg-orange-500 text-white not-italic shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                Create the Future
              </span>
            </h1>

            {/* Subheadline */}
            <p className="font-sans text-sm sm:text-md text-slate-700 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-bold border-l-4 border-orange-500 pl-4 italic">
              {dict.hero.subtitle}
            </p>

            {/* CTA's */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <a
                href="#register"
                onClick={scrollToRegister}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-black uppercase tracking-wider text-white bg-orange-500 border-2 border-slate-900 dark:border-slate-100 rounded-none px-8 py-4 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-all duration-150"
              >
                <Bot className="w-4 h-4" />
                {dict.hero.enrollBtn}
              </a>
              
              <button
                onClick={openTrialModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white border-2 border-slate-900 dark:border-slate-100 bg-white dark:bg-slate-900 rounded-none px-8 py-4 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-all duration-150 cursor-pointer"
              >
                <PlayCircle className="w-4 h-4 text-orange-500" />
                {dict.hero.trialBtn}
              </button>
            </div>

            {/* Micro badges */}
            <div className="pt-6 sm:pt-8 grid grid-cols-2 gap-4 max-w-sm mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5 p-3 border-2 border-slate-900 dark:border-slate-100 bg-white dark:bg-slate-900 rounded-none shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                <div className="p-2 rounded-none border border-slate-900 dark:border-slate-100 bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-mono text-[9px] text-slate-500 dark:text-slate-400 uppercase italic">STATUS</span>
                  <span className="font-sans font-black text-xs text-slate-900 dark:text-white uppercase">1000+ Students</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2.5 p-3 border-2 border-slate-900 dark:border-slate-100 bg-white dark:bg-slate-900 rounded-none shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                <div className="p-2 rounded-none border border-slate-900 dark:border-slate-100 bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-mono text-[9px] text-slate-500 dark:text-slate-400 uppercase italic">ACCREDITED</span>
                  <span className="font-sans font-black text-xs text-slate-900 dark:text-white uppercase">STEM Standard</span>
                </div>
              </div>
            </div>

          </div>

          {/* SVG Robot illustration */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-square rounded-none p-6 bg-white dark:bg-slate-950 border-2 border-slate-900 dark:border-slate-100 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] flex items-center justify-center">
              
              {/* Outer halo animations */}
              <div className="absolute inset-4 border border-dashed border-slate-900/10 dark:border-white/10 animate-spin" style={{ animationDuration: '30s' }} />
              <div className="absolute inset-12 border border-spacing-2 border-slate-900/15 dark:border-white/15 animate-spin" style={{ animationDuration: '15s' }} />

              {/* Glowing vector robot SVG */}
              <svg className="w-[82%] h-[82%] relative z-10 select-none animate-float" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0px 8px 0px rgba(15, 23, 42, 0.15))' }}>
                {/* Robot Antennas */}
                <rect x="94" y="24" width="12" height="18" rx="0" fill="#f97316" stroke="#0f172a" strokeWidth="2" />
                <circle cx="100" cy="20" r="6" fill="#3b82f6" className="animate-pulse" />
                
                {/* Robot Head Body */}
                <rect x="55" y="42" width="90" height="74" rx="0" fill="#1e293b" stroke="#e2e8f0" strokeWidth="4" />
                <rect x="55" y="42" width="90" height="74" rx="0" fill="url(#paint0_linear_head)" className="opacity-90" />
                
                {/* Digital Screen Face */}
                <rect x="67" y="56" width="66" height="42" rx="0" fill="#0f172a" stroke="#f97316" strokeWidth="2" />
                
                {/* Eye LEDs */}
                <circle cx="85" cy="74" r="7" fill="#3b82f6" />
                <circle cx="85" cy="74" r="3" fill="#ffffff" />
                
                <circle cx="115" cy="74" r="7" fill="#3b82f6" />
                <circle cx="115" cy="74" r="3" fill="#ffffff" />
                
                {/* Responsive mouth display */}
                <path d="M85 89Q100 97 115 89" stroke="#f97316" strokeWidth="3.5" strokeLinecap="round" />
                
                {/* Ears / Side Connectors */}
                <rect x="43" y="71" width="8" height="16" fill="#475569" stroke="#0f172a" strokeWidth="2"/>
                <rect x="149" y="71" width="8" height="16" fill="#475569" stroke="#0f172a" strokeWidth="2"/>
                
                {/* Neck */}
                <rect x="88" y="112" width="24" height="14" rx="0" fill="#94a3b8" stroke="#0f172a" strokeWidth="2" />
                
                {/* Body Chest Piece */}
                <rect x="45" y="126" width="110" height="66" rx="0" fill="#1e293b" stroke="#e2e8f0" strokeWidth="4" />
                <rect x="55" y="138" width="90" height="42" rx="0" fill="#334155" stroke="#0f172a" strokeWidth="2" />
                
                {/* Power Dial Indicator */}
                <circle cx="75" cy="159" r="10" fill="#0f172a" stroke="#f97316" />
                <line x1="75" y1="159" x2="80" y2="151" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" />
                
                {/* Micro Circuit Lines */}
                <line x1="102" y1="159" x2="118" y2="159" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
                <line x1="102" y1="166" x2="130" y2="166" stroke="#f97316" strokeWidth="3" strokeLinecap="round" />
                <line x1="130" y1="148" x2="130" y2="166" stroke="#f97316" strokeWidth="3" strokeLinecap="round" />
                
                {/* Gradients */}
                <defs>
                  <linearGradient id="paint0_linear_head" x1="55" y1="42" x2="145" y2="116" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#334155" />
                    <stop offset="1" stopColor="#0f172a" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Floating stats elements */}
              <div className="absolute -bottom-4 -right-4 p-3 bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-100 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] rounded-none flex items-center gap-2 transform translate-y-2 group">
                <span className="p-1.5 rounded-none bg-orange-500 text-white flex items-center justify-center border border-slate-900">
                  <Trophy className="w-4 h-4" />
                </span>
                <div>
                  <span className="block font-sans text-[11px] font-black uppercase text-slate-900 dark:text-white leading-tight">WRO 2026 Champion</span>
                  <span className="block font-mono text-[9px] text-slate-500 dark:text-slate-400 uppercase italic">National Gold Medalist</span>
                </div>
              </div>

              <div className="absolute -top-4 -left-4 p-3 bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-100 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] rounded-none flex items-center gap-2 transform -translate-y-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping absolute top-3.5 left-3.5" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <div>
                  <span className="block font-sans text-[11px] font-black uppercase text-slate-900 dark:text-white leading-tight">Admissions Open</span>
                  <span className="block font-mono text-[9px] text-emerald-650 dark:text-emerald-400 font-extrabold uppercase italic">Free Lesson Trial</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
