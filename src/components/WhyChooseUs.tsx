import React from 'react';
import { Award, Cpu, FlaskConical, Globe, Trophy, Users, ShieldCheck, Sparkles } from 'lucide-react';
import { LanguageKey, TranslationDict } from '../types';
import { whyChooseUs } from '../data';

interface WhyChooseUsProps {
  currentLanguage: LanguageKey;
  dict: TranslationDict;
}

export default function WhyChooseUs({ currentLanguage, dict }: WhyChooseUsProps) {
  // Helper matching string to specific SVG icon
  const getIcon = (name: string) => {
    const cls = "w-6 h-6 text-orange-500 shrink-0";
    switch (name) {
      case 'Award': return <Award className={cls} />;
      case 'Cpu': return <Cpu className={cls} />;
      case 'FlaskConical': return <FlaskConical className={cls} />;
      case 'Globe': return <Globe className={cls} />;
      case 'Trophy': return <Trophy className={cls} />;
      case 'Users': return <Users className={cls} />;
      default: return <ShieldCheck className={cls} />;
    }
  };

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-950 dark:text-white tracking-tight flex items-center justify-center gap-2">
            <Sparkles className="w-8 h-8 text-orange-500 animate-spin" />
            <span>{dict.whyChoose.title}</span>
          </h2>
          <p className="font-sans text-sm sm:text-md text-slate-600 dark:text-slate-400">
            {dict.whyChoose.subtitle}
          </p>
          <div className="h-1 w-16 bg-orange-500 mx-auto rounded-full" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800/80 hover:bg-slate-100/50 dark:hover:bg-slate-900/40 hover:shadow-xl dark:hover:shadow-slate-950/30 hover:scale-101 active:scale-99 hover:border-orange-500/20 dark:hover:border-orange-500/20 transition duration-300 flex flex-col items-start gap-4 text-left"
            >
              
              {/* Icon Frame */}
              <div className="p-3.5 rounded-2xl bg-orange-500/10 dark:bg-orange-500/5 border border-orange-500/20 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                {getIcon(item.iconName)}
              </div>

              {/* Text content lines */}
              <div className="space-y-2">
                <h3 className="font-sans font-extrabold text-md text-slate-900 dark:text-white">
                  {item.title[currentLanguage]}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  {item.desc[currentLanguage]}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
