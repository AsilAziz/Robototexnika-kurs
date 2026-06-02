import React, { useState } from 'react';
import { Project, LanguageKey, TranslationDict } from '../types';
import { Target, Activity, Tag, Sparkles, X, User, Heart } from 'lucide-react';

interface ProjectsGalleryProps {
  projects: Project[];
  currentLanguage: LanguageKey;
  dict: TranslationDict;
}

export default function ProjectsGallery({ projects, currentLanguage, dict }: ProjectsGalleryProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Simulated project "like" increment map for interactive client engagement
  const [likes, setLikes] = useState<Record<string, number>>({
    'robot-arm': 124,
    'smart-home': 98,
    'line-follower': 182,
    'obstacle-avoider': 76,
    'traffic-light': 54,
    'auto-parking': 112
  });

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikes(prev => ({
      ...prev,
      [id]: prev[id] + 1
    }));
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-950 dark:text-white tracking-tight">
            {dict.gallery.title}
          </h2>
          <p className="font-sans text-sm sm:text-md text-slate-600 dark:text-slate-400">
            {dict.gallery.subtitle}
          </p>
          <div className="h-1 w-16 bg-orange-500 mx-auto rounded-full" />
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              
              {/* Card visual representation */}
              <div className="relative aspect-video overflow-hidden bg-slate-150">
                <img
                  src={project.image}
                  alt={project.title[currentLanguage]}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Visual grid overlay for tech vibe */}
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/30 transition-colors pointer-events-none" />

                {/* Like Button Tag */}
                <button
                  onClick={(e) => handleLike(project.id, e)}
                  className="absolute bottom-4 right-4 bg-white/80 dark:bg-slate-900/80 hover:bg-white text-slate-800 dark:text-white backdrop-blur-xs p-2 rounded-xl flex items-center gap-1 text-xs font-extrabold transition cursor-pointer"
                >
                  <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                  <span>{likes[project.id]}</span>
                </button>

                {/* Student Creator Tag floating */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900/80 text-white text-[10px] font-bold uppercase backdrop-blur-xs rounded-xl">
                  <User className="w-3 h-3 text-orange-400" />
                  <span>By {project.creator.name} ({project.creator.age} {currentLanguage === 'uz' ? 'yosh' : currentLanguage === 'ru' ? 'лет' : 'y/o'})</span>
                </div>
              </div>

              {/* Card text details */}
              <div className="p-6 space-y-4">
                <div className="space-y-1.5">
                  <h3 className="font-sans font-extrabold text-md text-slate-800 dark:text-white group-hover:text-orange-500 transition duration-300">
                    {project.title[currentLanguage]}
                  </h3>
                  <p className="font-sans text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal line-clamp-2">
                    {project.description[currentLanguage]}
                  </p>
                </div>

                {/* Tech chips list */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techUsed.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-orange-500/10 dark:bg-orange-500/5 border border-orange-500/20 text-orange-600 dark:text-orange-400 font-mono text-[9px] font-bold uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Link indicator */}
                <div className="pt-2 flex justify-end font-sans text-[11px] font-bold text-orange-500 uppercase group-hover:translate-x-1.5 transition-transform duration-300">
                  {dict.gallery.viewProject} →
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Detailed Project dialog modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
              
              {/* Close target */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title Header */}
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase text-orange-500 tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>STUDENT INVENTION PRESENTATION</span>
                </div>
                <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white">
                  {selectedProject.title[currentLanguage]}
                </h3>
              </div>

              {/* Project Image Panel */}
              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title[currentLanguage]}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Project diagnostic metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80">
                  <span className="block font-sans text-[9px] font-bold text-slate-400 uppercase">Creator</span>
                  <span className="font-sans font-extrabold text-sm text-slate-800 dark:text-slate-200 block py-1">
                    {selectedProject.creator.name}
                  </span>
                  <span className="text-[10px] text-slate-500">{selectedProject.creator.age} y/o Academy Student</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80">
                  <span className="block font-sans text-[9px] font-bold text-slate-400 uppercase">Interactive Loves</span>
                  <span className="font-sans font-extrabold text-sm text-slate-800 dark:text-slate-200 block py-1">
                    {likes[selectedProject.id]} Hearts
                  </span>
                  <span className="text-[10px] text-slate-500">Supported by parents & peers</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80">
                  <span className="block font-sans text-[9px] font-bold text-slate-400 uppercase">Project Board</span>
                  <span className="font-sans font-extrabold text-sm text-slate-800 dark:text-slate-200 block py-1 uppercase font-mono">
                    {selectedProject.id.replace('-', ' ')}
                  </span>
                  <span className="text-[10px] text-slate-500">Autonomous compile log</span>
                </div>
              </div>

              {/* Detailed copy text */}
              <div className="space-y-4">
                <p className="font-sans text-sm text-slate-600 dark:text-slate-300 leading-relaxed leading-relaxed font-normal">
                  {selectedProject.description[currentLanguage]}
                </p>
                
                {/* Tech chips list */}
                <div className="space-y-2">
                  <span className="block text-[10px] font-bold text-slate-400 tracking-widest uppercase">
                    {dict.gallery.techUsed}
                  </span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {selectedProject.techUsed.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-xl bg-orange-500/10 dark:bg-orange-500/5 border border-orange-500/20 text-orange-650 dark:text-orange-400 font-mono text-[9px] font-bold uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="h-[1px] bg-slate-100 dark:bg-slate-700/60 pt-2" />
              <div className="flex justify-between items-center">
                <button
                  onClick={(e) => {
                    handleLike(selectedProject.id, e);
                  }}
                  className="px-4 py-2 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs rounded-xl flex items-center gap-2 transform transition cursor-pointer active:scale-95"
                >
                  <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                  <span>Support Innovation</span>
                </button>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs rounded-xl cursor-pointer"
                >
                  Dismiss Showcase
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
