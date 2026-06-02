import React, { useState } from 'react';
import { Wrench, Cpu, Zap, Bot, Code, Lightbulb, ChevronRight, Compass } from 'lucide-react';
import { LanguageKey, TranslationDict } from '../types';
import { learningPathSteps } from '../data';

interface LearningPathProps {
  currentLanguage: LanguageKey;
  dict: TranslationDict;
}

export default function LearningPath({ currentLanguage, dict }: LearningPathProps) {
  const [selectedStep, setSelectedStep] = useState(1);

  // Helper matching string to specific SVG icon
  const getIcon = (name: string, active: boolean) => {
    const cls = `w-6 h-6 transition-transform group-hover:scale-110 ${active ? 'text-white' : 'text-orange-500'}`;
    switch (name) {
      case 'Wrench': return <Wrench className={cls} />;
      case 'Cpu': return <Cpu className={cls} />;
      case 'Zap': return <Zap className={cls} />;
      case 'Bot': return <Bot className={cls} />;
      case 'Code': return <Code className={cls} />;
      case 'Lightbulb': return <Lightbulb className={cls} />;
      default: return <Compass className={cls} />;
    }
  };

  const activeStepData = learningPathSteps.find(s => s.step === selectedStep) || learningPathSteps[0];

  return (
    <section id="path" className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-950 dark:text-white tracking-tight">
            {dict.path.title}
          </h2>
          <p className="font-sans text-sm sm:text-md text-slate-600 dark:text-slate-400">
            {dict.path.subtitle}
          </p>
          <div className="h-1 w-16 bg-orange-500 mx-auto rounded-full" />
        </div>

        {/* Dynamic Progression Stepper Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Timeline side (left 5 columns on desktop) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="font-mono text-xs text-orange-500 tracking-wider font-bold mb-4 uppercase">
              SELECT STUDY STEP TO EXPLORE
            </div>
            
            <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 py-2 space-y-4">
              {learningPathSteps.map((step) => {
                const isActive = step.step === selectedStep;
                return (
                  <button
                    key={step.step}
                    onClick={() => setSelectedStep(step.step)}
                    className="group relative flex items-center gap-4 w-full text-left pl-6 py-2 transition focus:outline-none cursor-pointer"
                  >
                    {/* Ring dot absolute left */}
                    <div className={`absolute -left-[9px] h-4 w-4 rounded-full border-2 transition ${
                      isActive 
                        ? 'bg-orange-500 border-orange-500 shadow-sm shadow-orange-500/20' 
                        : 'bg-white dark:bg-slate-950 border-slate-350 dark:border-slate-700'
                    }`} />

                    {/* Step Icon Button Frame */}
                    <div className={`p-2.5 rounded-xl border transition duration-300 flex items-center justify-center shrink-0 ${
                      isActive
                        ? 'bg-orange-500 border-orange-500 text-white shadow-md'
                        : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 group-hover:border-orange-350'
                    }`}>
                      {getIcon(step.iconName, isActive)}
                    </div>

                    <div>
                      <span className="block font-mono text-[9px] font-bold text-slate-400 group-hover:text-orange-500">
                        {dict.path.step} 0{step.step}
                      </span>
                      <span className={`font-sans font-extrabold text-sm sm:text-md transition ${
                        isActive ? 'text-orange-500' : 'text-slate-800 dark:text-slate-200'
                      }`}>
                        {step.title[currentLanguage]}
                      </span>
                    </div>

                  </button>
                );
              })}
            </div>
          </div>

          {/* Detailed step panel (right 7 columns on desktop) */}
          <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-200/60 dark:border-slate-800/80 shadow-md relative overflow-hidden transition-colors duration-300">
            {/* Ambient vector logo shape backdrop */}
            <div className="absolute top-0 right-0 p-8 text-orange-500/10 dark:text-orange-500/5 pointer-events-none select-none">
              <Bot className="w-48 h-48" />
            </div>

            <div className="relative z-10 space-y-6">
              
              {/* Highlight Tag */}
              <div className="flex items-center justify-between">
                <span className="inline-block px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 font-mono text-xs font-bold uppercase">
                  {dict.path.step} 0{activeStepData.step} / 06
                </span>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Target Age: <strong className="text-slate-700 dark:text-slate-200">{activeStepData.age} {currentLanguage === 'uz' ? 'yosh' : currentLanguage === 'ru' ? 'лет' : 'years'}</strong>
                </span>
              </div>

              {/* Title focus */}
              <h3 className="font-sans font-extrabold text-2xl text-slate-900 dark:text-white leading-tight">
                {activeStepData.title[currentLanguage]}
              </h3>

              {/* Step Summary description */}
              <p className="font-sans text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {activeStepData.desc[currentLanguage]}
              </p>

              {/* Learning guide details or milestones indicator */}
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60">
                <span className="block font-mono text-[9px] text-slate-400 uppercase tracking-widest mb-3">
                  PROGRESSION ROADMAP OUTCOME
                </span>
                
                <div className="flex gap-4 items-center">
                  <div className="p-2 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-xl">
                    {getIcon(activeStepData.iconName, false)}
                  </div>
                  <div className="text-xs">
                    <span className="block font-bold text-slate-700 dark:text-slate-200 leading-tight">
                      {activeStepData.step === 6 ? 'Competency Certificate' : `Next Rank: Step 0${activeStepData.step + 1}`}
                    </span>
                    <span className="block text-slate-400 mt-0.5">
                      {activeStepData.step === 6 
                        ? 'Student passes global evaluation and moves to individual incubator projects.' 
                        : 'Lays mathematical and code groundwork for higher tier modular interfaces.'}
                    </span>
                  </div>
                </div>

              </div>

              {/* Quick scroll register linkage */}
              <a
                href="#register"
                className="inline-flex items-center gap-1 text-xs font-bold text-orange-500 hover:text-orange-600"
              >
                <span>Schedule a counseling session</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
