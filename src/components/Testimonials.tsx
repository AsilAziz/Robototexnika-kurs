import React, { useState } from 'react';
import { Star, MessageSquare, Heart, Quote } from 'lucide-react';
import { Testimonial, LanguageKey, TranslationDict } from '../types';

interface TestimonialsProps {
  testimonials: Testimonial[];
  currentLanguage: LanguageKey;
  dict: TranslationDict;
}

export default function Testimonials({ testimonials, currentLanguage, dict }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-950 dark:text-white tracking-tight">
            {dict.testimonials.title}
          </h2>
          <p className="font-sans text-sm sm:text-md text-slate-600 dark:text-slate-400">
            {dict.testimonials.subtitle}
          </p>
          <div className="h-1 w-16 bg-orange-500 mx-auto rounded-full" />
        </div>

        {/* Carousel or Grid Layout - Elegant Responsive Flex structure */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/65 dark:border-slate-700/65 shadow-md flex flex-col justify-between space-y-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              
              {/* Background elegant quotes element */}
              <div className="absolute top-4 right-4 text-orange-500/10 pointer-events-none">
                <Quote className="w-16 h-16 transform rotate-180" />
              </div>

              {/* Glowing Stars indicator */}
              <div className="flex gap-1">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-orange-500 fill-orange-500" />
                ))}
              </div>

              {/* Testimonial body text */}
              <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-350 leading-relaxed font-normal relative z-10 italic">
                "{test.text[currentLanguage]}"
              </p>

              {/* Creator identifier profile section */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-700">
                <img
                  src={test.avatar}
                  alt={test.name}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover border border-orange-500/20"
                />
                <div>
                  <h4 className="font-sans font-extrabold text-sm text-slate-900 dark:text-white leading-tight">
                    {test.name}
                  </h4>
                  <span className="block font-sans text-[10px] sm:text-[11px] font-semibold text-orange-650 dark:text-orange-400 mt-0.5">
                    {test.role[currentLanguage]}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
