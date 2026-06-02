import React, { useState } from 'react';
import { Award, ShieldCheck, Download, Sparkles } from 'lucide-react';
import { LanguageKey, TranslationDict } from '../types';

interface CertificatesProps {
  currentLanguage: LanguageKey;
  dict: TranslationDict;
}

export default function Certificates({ currentLanguage, dict }: CertificatesProps) {
  const [studentName, setStudentName] = useState('Anvar Shokirov');

  const defaultNames: Record<LanguageKey, string> = {
    en: 'Authorized STEM Academy Graduate',
    uz: 'Vakolatli STEM Akademiyasi Bitiruvchisi',
    ru: 'Аккредитованный Выпускник Академии'
  };

  return (
    <section id="certificates" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-950 dark:text-white tracking-tight flex items-center justify-center gap-2">
            <Award className="w-8 h-8 text-orange-500" />
            <span>{dict.certificates.title}</span>
          </h2>
          <p className="font-sans text-sm sm:text-md text-slate-600 dark:text-slate-400">
            {dict.certificates.subtitle}
          </p>
          <div className="h-1 w-16 bg-orange-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Certificate Description Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-500/10 dark:bg-orange-500/20 border border-orange-500/30 text-orange-650 dark:text-orange-400 text-xs font-bold font-mono tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>STEM ACCREDITATION MODEL</span>
            </div>

            <p className="font-sans text-sm sm:text-base text-slate-600 dark:text-slate-350 leading-relaxed font-normal">
              {dict.certificates.desc}
            </p>

            {/* Input name directly onto SVG canvas */}
            <div className="space-y-4 pt-4 border-t border-slate-200/60 dark:border-slate-800">
              <label className="block text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Type Your Child's Name to Preview:
              </label>
              
              <input
                type="text"
                max={30}
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Anvar Shokirov"
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-white placeholder-slate-400 font-sans font-semibold text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition"
              />
              <span className="block text-[10px] text-slate-400 font-mono italic">
                *The certificate is automatically formatted and serialized upon final exam defensive.
              </span>
            </div>
          </div>

          {/* Interactive SVG Certificate Canvas */}
          <div className="lg:col-span-8 flex justify-center">
            <div className="w-full max-w-[620px] aspect-[1.414/1] bg-amber-50 rounded-2xl shadow-xl dark:shadow-2xl border-4 border-amber-800/20 p-5 sm:p-8 flex flex-col justify-between text-slate-950 select-none relative overflow-hidden ring-1 ring-amber-500/10">
              
              {/* Gold Security Guilloche mesh borders */}
              <div className="absolute inset-2 border border-amber-800/10 rounded-xl pointer-events-none" />
              <div className="absolute inset-3 border-2 border-amber-800/20 rounded-lg pointer-events-none" />
              
              {/* Corner floral elements */}
              <div className="absolute top-4 left-4 text-amber-800/20 font-serif text-lg">✦</div>
              <div className="absolute top-4 right-4 text-amber-800/20 font-serif text-lg">✦</div>
              <div className="absolute bottom-4 left-4 text-amber-800/20 font-serif text-lg">✦</div>
              <div className="absolute bottom-4 right-4 text-amber-800/20 font-serif text-lg">✦</div>

              {/* Top Row Logo */}
              <div className="flex justify-between items-center relative z-10">
                <span className="font-mono text-[9px] text-amber-900/60 font-bold uppercase tracking-widest">
                  FUTURE ROBOTICS ACADEMY • NO. FRA-2026-X839
                </span>
                
                {/* Visual Seal Stamp badge inside SVG context */}
                <div className="h-8 min-w-8 flex items-center justify-center rounded-full bg-amber-700/10 px-2 border border-amber-700/20 text-[9px] text-amber-900 font-extrabold uppercase">
                  STEM SEAL
                </div>
              </div>

              {/* Main Copy */}
              <div className="text-center space-y-4 my-4 relative z-10">
                <h3 className="font-serif italic text-md sm:text-lg text-amber-900">
                  This Certifies that Junior Engineer
                </h3>

                {/* Styled Student Name focus */}
                <div className="py-2 inline-block border-b-2 border-amber-800/30 px-8 min-w-[240px]">
                  <p className="font-serif italic font-extrabold text-xl sm:text-2xl text-slate-900 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-amber-950">
                    {studentName || 'Academy Graduate'}
                  </p>
                </div>

                <p className="font-serif text-[10px] sm:text-xs text-slate-700 leading-relaxed max-w-[420px] mx-auto">
                  has completed the rigorous modular syllabus of advanced curriculum, demonstrating outstanding masteries in autonomous construction, sensor integration, feedback control, and logical debugging.
                </p>
              </div>

              {/* Signatures & Accreditation Footer */}
              <div className="flex justify-between items-end relative z-10 pt-4 border-t border-amber-800/10 text-slate-800 font-sans">
                
                {/* Mentor Signature */}
                <div className="text-left space-y-1">
                  <span className="block font-serif text-xs italic text-amber-900 leading-none">Prof. Nematov</span>
                  <div className="h-[1px] w-28 bg-amber-800/30" />
                  <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-widest">Academy Dean</span>
                </div>

                {/* Accreditation Badge */}
                <div className="flex flex-col items-center">
                  <ShieldCheck className="w-7 h-7 text-amber-700 leading-none" />
                  <span className="block text-[7px] font-extrabold text-amber-900 uppercase tracking-widest mt-1">
                    {dict.certificates.verifyText.split(' ')[0]} Verified
                  </span>
                </div>

                {/* Academic Inspector */}
                <div className="text-right space-y-1">
                  <span className="block font-serif text-xs italic text-amber-900 leading-none">Director Mamadaliyev</span>
                  <div className="h-[1px] w-28 bg-amber-800/30" />
                  <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-widest">Registrar Desk</span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
