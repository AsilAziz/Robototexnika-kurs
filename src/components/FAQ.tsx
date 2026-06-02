import React, { useState } from 'react';
import { FAQItem, LanguageKey, TranslationDict } from '../types';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQProps {
  faqs: FAQItem[];
  currentLanguage: LanguageKey;
  dict: TranslationDict;
}

export default function FAQ({ faqs, currentLanguage, dict }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-950 dark:text-white tracking-tight flex items-center justify-center gap-2">
            <HelpCircle className="w-8 h-8 text-orange-500" />
            <span>{dict.faq.title}</span>
          </h2>
          <p className="font-sans text-sm sm:text-md text-slate-600 dark:text-slate-400">
            {dict.faq.subtitle}
          </p>
          <div className="h-1 w-16 bg-orange-500 mx-auto rounded-full" />
        </div>

        {/* Collapsible Accordion Group */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100/50 dark:hover:bg-slate-900/80 transition-colors duration-300 overflow-hidden"
              >
                {/* Accordion header button toggler */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left font-sans font-extrabold text-sm sm:text-md text-slate-900 dark:text-white focus:outline-none cursor-pointer"
                >
                  <span className="leading-snug">{faq.question[currentLanguage]}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-orange-500 shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500 shrink-0 ml-4" />
                  )}
                </button>

                {/* Collapsible Content */}
                {isOpen && (
                  <div className="p-5 pt-0 border-t border-slate-200/55 dark:border-slate-800 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-normal animate-in fade-in slide-in-from-top-1 duration-200">
                    {faq.answer[currentLanguage]}
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
