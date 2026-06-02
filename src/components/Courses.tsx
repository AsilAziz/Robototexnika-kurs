import React, { useState } from 'react';
import { BookOpen, Clock, Users, ArrowRight, CheckCircle2, ChevronRight, Activity } from 'lucide-react';
import { Course, LanguageKey, TranslationDict } from '../types';

interface CoursesProps {
  courses: Course[];
  currentLanguage: LanguageKey;
  dict: TranslationDict;
  onEnrollSelect: (courseId: string) => void;
}

type FilterLevel = 'all' | 'beginner' | 'intermediate' | 'advanced';

export default function Courses({ courses, currentLanguage, dict, onEnrollSelect }: CoursesProps) {
  const [activeFilter, setActiveFilter] = useState<FilterLevel>('all');

  const filteredCourses = activeFilter === 'all' 
    ? courses 
    : courses.filter(c => c.skillLevelKey === activeFilter);

  const filters = [
    { key: 'all' as FilterLevel, label: dict.courses.all },
    { key: 'beginner' as FilterLevel, label: dict.courses.beginner },
    { key: 'intermediate' as FilterLevel, label: dict.courses.intermediate },
    { key: 'advanced' as FilterLevel, label: dict.courses.advanced }
  ];

  return (
    <section id="courses" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-950 dark:text-white uppercase tracking-tight italic">
            {dict.courses.title}
          </h2>
          <p className="font-sans text-sm sm:text-md text-slate-600 dark:text-slate-400 font-bold">
            {dict.courses.subtitle}
          </p>
          <div className="h-1.5 w-16 bg-orange-500 mx-auto rounded-none border border-slate-900 dark:border-slate-100 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]" />
        </div>

        {/* Dynamic Category Filters */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-5 py-2.5 rounded-none text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-150 cursor-pointer border-2 border-slate-900 dark:border-slate-100 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(15,23,42,1)] dark:hover:shadow-[1px_1px_0px_0px_rgba(255,255,255,1)] ${
                activeFilter === filter.key
                  ? 'bg-orange-500 text-white shadow-none translate-x-[2px] translate-y-[2px]'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-205'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => {
            const levelLabel = course.skillLevel[currentLanguage];
            const durationLabel = course.duration[currentLanguage];

            return (
              <div
                key={course.id}
                className="group flex flex-col justify-between rounded-none bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-100 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-250 overflow-hidden"
              >
                
                {/* Course Header & Image */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-150 dark:bg-slate-800 border-b-2 border-slate-900 dark:border-slate-100">
                  <img
                    src={course.image}
                    alt={course.title[currentLanguage]}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Floating target age group */}
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-none border border-slate-900 bg-slate-950 text-white text-[9px] font-black uppercase tracking-wider italic">
                    <Users className="w-3.5 h-3.5 text-orange-400" />
                    <span>{course.ageGroup} {currentLanguage === 'uz' ? 'yosh' : currentLanguage === 'ru' ? 'лет' : 'years'}</span>
                  </div>

                  {/* Level Tag floating */}
                  <div className={`absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-none border border-slate-900 text-[9px] font-black uppercase tracking-wider italic text-white ${
                    course.skillLevelKey === 'beginner' ? 'bg-blue-600' :
                    course.skillLevelKey === 'intermediate' ? 'bg-orange-500' : 'bg-red-600'
                  }`}>
                    <Activity className="w-3.5 h-3.5" />
                    <span>{levelLabel}</span>
                  </div>
                </div>

                {/* Card details body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-display font-black text-lg text-slate-900 dark:text-white group-hover:text-orange-500 transition duration-300 uppercase italic">
                      {course.title[currentLanguage]}
                    </h3>
                    <p className="font-sans text-xs text-slate-650 dark:text-slate-300 leading-relaxed font-semibold">
                      {course.description[currentLanguage]}
                    </p>

                    {/* Metadata lines */}
                    <div className="h-[2px] bg-slate-905 dark:bg-slate-100/30 my-3" />
                    <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 italic">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-orange-500 animate-pulse" />
                        {durationLabel}
                      </span>
                      <span className="font-mono text-[9px] text-orange-500">
                        {course.id.replace('-', ' ')}
                      </span>
                    </div>

                    <div className="h-[2px] bg-slate-905 dark:bg-slate-100/30 my-3" />

                    {/* Outcomes List */}
                    <div className="space-y-2">
                      <span className="block text-[10px] font-black text-slate-500 dark:text-slate-300 uppercase tracking-widest font-mono italic">
                        {dict.courses.outcomes}
                      </span>
                      <ul className="space-y-1.5 pt-1">
                        {course.learningOutcomes[currentLanguage].map((outcome, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-750 dark:text-slate-300 leading-snug font-semibold">
                            <span className="w-3 h-3 border border-slate-900 dark:border-slate-100 bg-emerald-500 shrink-0 mt-0.5 rounded-none" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* Enroll CTA */}
                  <button
                    onClick={() => onEnrollSelect(course.id)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-100 text-slate-900 dark:text-slate-100 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500 dark:hover:text-white font-black text-xs rounded-none uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(15,23,42,1)] transition-all duration-150 group/btn cursor-pointer"
                  >
                    <span>{dict.courses.enroll}</span>
                    <ChevronRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
