import React from 'react';
import { Target, Eye, BookOpen, Star, Sparkles, ChevronRight } from 'lucide-react';
import { TranslationDict } from '../types';

interface AboutProps {
  dict: TranslationDict;
}

export default function About({ dict }: AboutProps) {
  // Stat rows mapped corresponding to dict
  const statItems = [
    { value: dict.stats.students, label: dict.stats.studentsDesc, color: 'text-orange-500' },
    { value: dict.stats.projects, label: dict.stats.projectsDesc, color: 'text-blue-500' },
    { value: dict.stats.competitions, label: dict.stats.competitionsDesc, color: 'text-yellow-500' },
    { value: dict.stats.satisfaction, label: dict.stats.satisfactionDesc, color: 'text-emerald-500' },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-950 dark:text-white uppercase tracking-tight italic">
            {dict.about.title}
          </h2>
          <p className="font-sans text-sm sm:text-md text-slate-600 dark:text-slate-400 font-bold">
            {dict.about.subtitle}
          </p>
          <div className="h-1.5 w-16 bg-orange-500 mx-auto rounded-none border border-slate-900 dark:border-slate-100 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]" />
        </div>

        {/* Core content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Mission, Vision, and description */}
          <div className="space-y-8">
            <div className="prose dark:prose-invert">
              <h3 className="font-display font-bold text-xl uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2 italic">
                <Sparkles className="w-5 h-5 text-orange-500" />
                {dict.about.whyTitle}
              </h3>
              <p className="font-sans text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base mt-2 border-l-4 border-slate-900 dark:border-slate-100 pl-4">
                {dict.about.whyText}
              </p>
            </div>

            {/* Mission & Vision Bento Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Mission */}
              <div className="p-6 rounded-none bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-100 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] dark:hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] transition-all duration-300">
                <div className="p-3 w-12 h-12 rounded-none border-2 border-slate-900 dark:border-slate-100 bg-orange-100 dark:bg-orange-950 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-4 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
                  <Target className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-md uppercase tracking-wider text-slate-900 dark:text-white mb-2 italic">
                  {dict.about.missionTitle}
                </h4>
                <p className="font-sans text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                  {dict.about.missionText}
                </p>
              </div>

              {/* Vision */}
              <div className="p-6 rounded-none bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-100 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] dark:hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] transition-all duration-300">
                <div className="p-3 w-12 h-12 rounded-none border-2 border-slate-900 dark:border-slate-100 bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
                  <Eye className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-md uppercase tracking-wider text-slate-900 dark:text-white mb-2 italic">
                  {dict.about.visionTitle}
                </h4>
                <p className="font-sans text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                  {dict.about.visionText}
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Visual Infographics or High Quality stats card */}
          <div className="relative rounded-none overflow-hidden bg-slate-900 dark:bg-slate-950 text-white p-8 sm:p-10 border-2 border-slate-100 dark:border-white shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] flex flex-col justify-between aspect-auto">
            
            {/* Ambient background vector glow */}
            <div className="absolute top-0 right-0 h-48 w-48 bg-gradient-to-br from-orange-500/20 to-blue-500/20 rounded-none blur-3xl pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              <span className="font-mono text-xs text-orange-500 tracking-widest font-black uppercase block italic border-b border-orange-500 pb-2">
                ROBOTICS ECOSYSTEM STATUS
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight leading-snug italic">
                Building Tomorrow’s Innovators Today.
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed italic border-l-2 border-orange-500 pl-3">
                We combine scientific methodologies with advanced toolchains to cultivate genuine robotic mastery.
                Our ecosystem provides real development hardware, custom compiler boards, and highly tailored support maps.
              </p>
            </div>

            {/* Live Count Stat Grid */}
            <div className="relative z-10 grid grid-cols-2 gap-x-6 gap-y-8 pt-8 sm:pt-12 border-t-2 border-slate-100/30 mt-8">
              {statItems.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <span className={`block font-display font-black text-3xl tracking-tight uppercase italic ${stat.color}`}>
                    {stat.value}
                  </span>
                  <span className="block font-mono text-[10px] font-black uppercase tracking-wider text-slate-300">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
