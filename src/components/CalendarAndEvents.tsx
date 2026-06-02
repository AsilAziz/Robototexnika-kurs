import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Trophy, BookOpen, User, ArrowRight, FileText, Timer } from 'lucide-react';
import { EventAnnouncement, BlogArticle, CompetitionMilestone, LanguageKey, TranslationDict } from '../types';
import { events as sEvents, blogArticles as sBlog, competitionCalendar as sCal } from '../data';

interface CalendarProps {
  currentLanguage: LanguageKey;
  dict: TranslationDict;
}

type TabType = 'events' | 'calendar' | 'blog';

export default function CalendarAndEvents({ currentLanguage, dict }: CalendarProps) {
  const [activeTab, setActiveTab] = useState<TabType>('events');
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);

  const tabs = [
    { key: 'events' as TabType, label: dict.events.upcoming },
    { key: 'calendar' as TabType, label: dict.events.competitionsCalendar },
    { key: 'blog' as TabType, label: dict.blog.title }
  ];

  return (
    <section id="events" className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-950 dark:text-white tracking-tight">
            {dict.events.title}
          </h2>
          <p className="font-sans text-sm sm:text-md text-slate-600 dark:text-slate-400">
            {dict.events.subtitle}
          </p>
          <div className="h-1 w-16 bg-orange-500 mx-auto rounded-full" />
        </div>

        {/* Tab Indicators Selector */}
        <div className="flex justify-center border-b border-slate-200 dark:border-slate-800 mb-12">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => {
                  setActiveTab(tab.key);
                  setSelectedArticle(null);
                }}
                className={`py-4 px-2 font-sans font-bold text-xs sm:text-sm border-b-2 transition-all duration-300 relative cursor-pointer ${
                  activeTab === tab.key
                    ? 'border-orange-500 text-orange-600 dark:text-orange-400'
                    : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Tab Body Render */}
        <div className="min-h-[300px]">
          
          {/* TAB 1: Upcoming Events */}
          {activeTab === 'events' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {sEvents.map((event) => (
                <div
                  key={event.id}
                  className="group flex flex-col md:flex-row gap-6 p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-full md:w-2/5 aspect-4/3 rounded-2xl overflow-hidden bg-slate-100 shrink-0">
                    <img
                      src={event.image}
                      alt={event.title[currentLanguage]}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-sans font-extrabold text-md sm:text-lg text-slate-900 dark:text-white leading-tight">
                        {event.title[currentLanguage]}
                      </h3>
                      <p className="font-sans text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal line-clamp-3">
                        {event.description[currentLanguage]}
                      </p>
                    </div>

                    {/* Metadata lines */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-200/40 dark:border-slate-800 font-sans text-xs font-semibold text-slate-600 dark:text-slate-300">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                        <span>{event.date} ({event.time})</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-505">
                        <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <span>{event.location[currentLanguage]}</span>
                      </div>
                    </div>

                    <a
                      href="#register"
                      className="inline-flex items-center justify-center text-xs font-bold text-orange-500 group-hover:translate-x-1.5 transition-transform duration-350 self-start"
                    >
                      <span>{dict.events.registerEvent}</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: Robotics Competition Calendar */}
          {activeTab === 'calendar' && (
            <div className="max-w-4xl mx-auto space-y-6">
              {sCal.map((mil, idx) => (
                <div
                  key={mil.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 hover:shadow-md transition-shadow duration-300 gap-4"
                >
                  <div className="flex gap-4 items-start sm:items-center">
                    <div className={`p-3 rounded-2xl flex items-center justify-center text-white ${
                      mil.status === 'completed' ? 'bg-emerald-500' : 'bg-orange-500'
                    }`}>
                      <Trophy className="w-5 h-5" />
                    </div>

                    <div className="space-y-1">
                      <h4 className="font-sans font-extrabold text-sm sm:text-md text-slate-900 dark:text-white leading-snug">
                        {mil.title[currentLanguage]}
                      </h4>
                      
                      <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500 dark:text-slate-400 font-sans">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          {mil.date}
                        </span>
                        <span className="h-3 w-[1px] bg-slate-300 dark:bg-slate-755" />
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {mil.location[currentLanguage]}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Status Indicator Tag */}
                  <span className={`px-3 py-1.5 rounded-full text-[10px] font-extrabold font-mono tracking-wide uppercase ${
                    mil.status === 'completed'
                      ? 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                      : 'bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 animate-pulse'
                  }`}>
                    {mil.statusLabel[currentLanguage]}
                  </span>

                </div>
              ))}
            </div>
          )}

          {/* TAB 3: STEM Blog Section */}
          {activeTab === 'blog' && (
            <div className="max-w-4xl mx-auto space-y-12">
              {!selectedArticle ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {sBlog.map((art) => (
                    <div
                      key={art.id}
                      onClick={() => setSelectedArticle(art)}
                      className="group cursor-pointer rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 overflow-hidden shadow-sm hover:shadow-xl duration-300 flex flex-col justify-between"
                    >
                      <div className="aspect-video w-full overflow-hidden bg-slate-100">
                        <img
                          src={art.image}
                          alt={art.title[currentLanguage]}
                          referrerPolicy="no-referrer"
                          className="h-full w-full object-cover group-hover:scale-102 transition duration-500"
                        />
                      </div>

                      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                        <div className="space-y-2">
                          <span className="inline-flex items-center gap-1 font-mono text-[9px] text-orange-500 font-bold uppercase tracking-wider">
                            <Clock className="w-3 h-3" />
                            {art.readTime[currentLanguage]} • {art.date}
                          </span>
                          <h3 className="font-sans font-bold text-sm sm:text-md text-slate-900 dark:text-white group-hover:text-orange-500 transition duration-300">
                            {art.title[currentLanguage]}
                          </h3>
                          <p className="font-sans text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal line-clamp-3">
                            {art.excerpt[currentLanguage]}
                          </p>
                        </div>

                        <span className="inline-flex items-center gap-1 text-xs font-bold text-orange-500 mt-2 self-start">
                          {dict.blog.readMore} →
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Focused Single Blog Article */
                <div className="p-6 sm:p-10 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 shadow-md space-y-6 relative animate-in fade-in duration-200">
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="absolute top-6 right-6 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 cursor-pointer"
                  >
                    ← Back to Blog list
                  </button>

                  <div className="space-y-2">
                    <span className="block font-mono text-[9px] text-orange-500 font-extrabold uppercase">
                      STEM ARTICLE • BY {selectedArticle.author.toUpperCase()}
                    </span>
                    <h3 className="font-sans font-extrabold text-lg sm:text-xl md:text-2xl text-slate-900 dark:text-white">
                      {selectedArticle.title[currentLanguage]}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                      <span>{selectedArticle.date}</span>
                      <span>•</span>
                      <span>{selectedArticle.readTime[currentLanguage]}</span>
                    </div>
                  </div>

                  <div className="aspect-video w-full rounded-2xl overflow-hidden max-h-[300px]">
                    <img
                      src={selectedArticle.image}
                      alt={selectedArticle.title[currentLanguage]}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <p className="font-sans text-sm text-slate-600 dark:text-slate-300 leading-relaxed leading-relaxed font-normal whitespace-pre-line border-t border-slate-200 dark:border-slate-800 pt-6">
                    {selectedArticle.content[currentLanguage]}
                  </p>

                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
