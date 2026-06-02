import React from 'react';
import { Bot } from 'lucide-react';
import { LanguageKey, TranslationDict } from '../types';

interface FooterProps {
  currentLanguage: LanguageKey;
  dict: TranslationDict;
}

export default function Footer({ currentLanguage, dict }: FooterProps) {
  const scrollSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const menuLinks = [
    { label: dict.nav.about, href: '#about' },
    { label: dict.nav.courses, href: '#courses' },
    { label: dict.nav.learningPath, href: '#path' },
    { label: dict.nav.gallery, href: '#gallery' },
    { label: dict.nav.whyUs, href: '#why-us' },
    { label: dict.nav.events, href: '#events' },
    { label: dict.nav.faq, href: '#faq' },
  ];

  const footerTexts = {
    en: {
      desc: "We empower physical intelligence, logic formulation, and textual C++ masteries inside standard schools and customized training labs.",
      quickSections: "QUICK SECTIONS",
      officeHQ: "OFFICE HQ",
      headLabOffice: "Head Lab Office",
      address: "12 Buyuk Turon Street, Tashkent, Uzbekistan. Near Inno Technopark.",
      allRights: `© ${new Date().getFullYear()} Future Robotics Academy. All Rights Reserved. Accredited STEM Laboratory Network.`
    },
    uz: {
      desc: "Biz maktablar va maxsus laboratoriyalarda jismoniy intellekt, mantiqiy fikrlash va amaliy C++ dasturlash ko'nikmalarini rivojlantiramiz.",
      quickSections: "TEZKOR BO'LIMLAR",
      officeHQ: "BOSH IDORA",
      headLabOffice: "Bosh Lab Ofisi",
      address: "Toshkent sh., Buyuk Turon ko'chasi 12-uy. Inno Texnopark yonida.",
      allRights: `© ${new Date().getFullYear()} Future Robotics Academy. Barcha huquqlar himoyalangan. Akkreditatsiyalangan STEM laboratoriya tarmogʻi.`
    },
    ru: {
      desc: "Мы развиваем физический интеллект, логическое мышление и практические навыки программирования на C++ в школах и специализированных лабораториях.",
      quickSections: "БЫСТРЫЙ ДОСТУП",
      officeHQ: "ГЛАВНЫЙ ОФИС",
      headLabOffice: "Главный лабораторный офис",
      address: "г. Ташкент, ул. Буюк Турон, 12. Рядом с Инно Технопарком.",
      allRights: `© ${new Date().getFullYear()} Future Robotics Academy. Все права защищены. Аккредитованная сеть STEM-лабораторий.`
    }
  };

  const fDict = footerTexts[currentLanguage] || footerTexts.en;

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-12 sm:py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12 sm:mb-16">
          
          {/* Logo Brand (Column 5/12) */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-2 group">
              <div className="p-1.5 rounded-lg bg-orange-500 text-white shadow-md shadow-orange-500/10">
                <Bot className="w-5 h-5" />
              </div>
              <span className="font-sans font-extrabold text-lg sm:text-xl tracking-tight text-white">
                Future <span className="text-orange-500">Robotics</span>
              </span>
            </a>
            
            <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed font-normal max-w-sm">
              {fDict.desc}
            </p>
          </div>

          {/* Quick links list (Column 4/12) */}
          <div className="md:col-span-4 space-y-4 text-xs font-semibold">
            <span className="block font-mono text-[9px] text-orange-500 font-extrabold tracking-widest uppercase">
              {fDict.quickSections}
            </span>
            <div className="grid grid-cols-2 gap-2.5">
              {menuLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollSection(e, link.href)}
                  className="hover:text-white transition duration-200 block text-left"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contacts shortcut (Column 3/12) */}
          <div className="md:col-span-3 space-y-4 text-xs font-semibold">
            <span className="block font-mono text-[9px] text-orange-500 font-extrabold tracking-widest uppercase">
              {fDict.officeHQ}
            </span>
            
            <div className="space-y-2 text-slate-400 leading-normal font-normal">
              <span className="block font-medium">{fDict.headLabOffice}</span>
              <span className="block">{fDict.address}</span>
              <a href="mailto:info@futurerobotics.uz" className="hover:text-white block mt-1">info@futurerobotics.uz</a>
            </div>
          </div>

        </div>

        {/* Divider and Trademark Footer */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-[11px] gap-4 font-normal">
          <p className="font-sans text-slate-500">
            {fDict.allRights}
          </p>

          <div className="flex gap-4">
            <a href="https://t.me/FutureRoboAcademy" target="_blank" rel="noreferrer" className="hover:text-white transition text-slate-500">Telegram</a>
            <a href="https://instagram.com/FutureRobotics" target="_blank" rel="noreferrer" className="hover:text-white transition text-slate-500">Instagram</a>
            <a href="mailto:info@futurerobotics.uz" className="hover:text-white transition text-slate-500 font-medium">Support Desk</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
