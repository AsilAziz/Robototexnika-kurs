import React, { useState } from 'react';
import { Sparkles, Sun, Moon, Languages, Menu, X, Bot, ShieldCheck } from 'lucide-react';
import { LanguageKey, TranslationDict } from '../types';

interface NavbarProps {
  currentLanguage: LanguageKey;
  setLanguage: (lang: LanguageKey) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  dict: TranslationDict;
  openAdminModal: () => void;
  registeredCount: number;
}

export default function Navbar({
  currentLanguage,
  setLanguage,
  darkMode,
  setDarkMode,
  dict,
  openAdminModal,
  registeredCount
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const langNames: Record<LanguageKey, string> = {
    en: 'English',
    uz: "O'zbek",
    ru: 'Русский'
  };

  const navItems = [
    { label: dict.nav.about, href: '#about' },
    { label: dict.nav.courses, href: '#courses' },
    { label: dict.nav.learningPath, href: '#path' },
    { label: dict.nav.gallery, href: '#gallery' },
    { label: dict.nav.whyUs, href: '#why-us' },
    { label: dict.nav.events, href: '#events' },
    { label: dict.nav.faq, href: '#faq' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="sticky top-0 z-40 w-full bg-white dark:bg-slate-950 border-b-2 border-slate-900 dark:border-slate-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="p-1.5 rounded-none bg-orange-500 text-white border-2 border-slate-900 dark:border-slate-100 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] group-hover:translate-x-[1px] group-hover:translate-y-[1px] group-hover:shadow-[1px_1px_0px_0px_rgba(15,23,42,1)] transition-all duration-300">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white flex items-center gap-1">
                Future <span className="text-orange-500 italic">Robotics</span>
              </span>
              <span className="block font-mono text-[9px] text-slate-500 dark:text-slate-400 tracking-widest uppercase italic">
                Academy • STEM ECOSYSTEM
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="font-sans font-bold text-xs uppercase tracking-wider text-slate-700 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors px-3 py-1.5 border border-transparent hover:border-slate-900 dark:hover:border-slate-100 rounded-none italic"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Middle Divider */}
            <span className="h-6 w-[2px] bg-slate-900 dark:bg-slate-100"></span>

            {/* Controls */}
            <div className="flex items-center gap-4">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  onBlur={() => setTimeout(() => setLangDropdownOpen(false), 205)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-none border-2 border-slate-900 dark:border-slate-100 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-xs font-bold uppercase tracking-wider cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
                >
                  <Languages className="w-3.5 h-3.5" />
                  <span>{langNames[currentLanguage]}</span>
                </button>
                {langDropdownOpen && (
                  <div className="absolute right-0 mt-1.5 w-32 rounded-none bg-white dark:bg-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] border-2 border-slate-900 dark:border-slate-100 overflow-hidden z-50">
                    {(Object.keys(langNames) as LanguageKey[]).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setLanguage(lang);
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-xs font-bold uppercase tracking-wider transition ${
                          currentLanguage === lang
                            ? 'bg-orange-500 text-white'
                            : 'text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                      >
                        {langNames[lang]}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Theme Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-1.5 rounded-none border-2 border-slate-900 dark:border-slate-100 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 hover:bg-orange-500 dark:hover:bg-orange-500 hover:text-white transition cursor-pointer shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
                title="Toggle Mode"
              >
                {darkMode ? <Sun className="w-4 h-4 text-orange-400 hover:text-white" /> : <Moon className="w-4 h-4 text-slate-900 hover:text-white" />}
              </button>

              {/* registrations badge for simulation verification / admin */}
              <button
                onClick={openAdminModal}
                className="relative p-1.5 border-2 border-dashed border-orange-500 bg-white dark:bg-slate-900 text-orange-600 dark:text-orange-400 hover:bg-orange-500 hover:text-white transition text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 rounded-none"
                title="View Submitted Registrations & Configure Telegram Bot"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Admin</span>
                {registeredCount > 0 && (
                  <span className="absolute -top-2.5 -right-2.5 h-5 min-w-5 px-1 bg-red-600 text-white text-[10px] font-bold flex items-center justify-center border border-slate-900 dark:border-slate-50">
                    {registeredCount}
                  </span>
                )}
              </button>

              {/* CTA Enroll */}
              <a
                href="#register"
                onClick={(e) => handleScroll(e, '#register')}
                className="inline-flex items-center justify-center text-xs font-black uppercase tracking-wider text-white bg-orange-500 hover:bg-orange-600 border-2 border-slate-900 dark:border-slate-100 rounded-none px-4 py-2 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(15,23,42,1)] dark:hover:shadow-[1px_1px_0px_0px_rgba(255,255,255,1)] transition-all duration-150"
              >
                {dict.nav.register}
              </a>
            </div>
          </div>

          {/* Mobile controllers & burger */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Quick lang selector cycle */}
            <button
              onClick={() => {
                const nextLang: Record<LanguageKey, LanguageKey> = { en: 'uz', uz: 'ru', ru: 'en' };
                setLanguage(nextLang[currentLanguage]);
              }}
              className="p-2 border-2 border-slate-900 dark:border-slate-100 bg-white dark:bg-slate-900 text-slate-905 dark:text-slate-100 text-xs font-bold rounded-none uppercase tracking-wider"
              title="Change Language"
            >
              {currentLanguage.toUpperCase()}
            </button>

            {/* Quick theme toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 border-2 border-slate-900 dark:border-slate-100 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded-none"
            >
              {darkMode ? <Sun className="w-4 h-4 text-orange-400" /> : <Moon className="w-4 h-4 text-slate-900" />}
            </button>

            {/* Admin badge */}
            <button
              onClick={openAdminModal}
              className="relative p-2 border-2 border-slate-900 dark:border-slate-100 bg-orange-100 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 text-xs rounded-none"
              title="Admin Panel"
            >
              <ShieldCheck className="w-4 h-4" />
              {registeredCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 h-4 w-4 bg-red-600 text-white text-[8px] font-bold flex items-center justify-center border border-slate-900 dark:border-slate-100">
                  {registeredCount}
                </span>
              )}
            </button>

            {/* Toggle menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border-2 border-slate-900 dark:border-slate-100 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b-2 border-slate-900 dark:border-slate-100 bg-white dark:bg-slate-950 duration-200">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="block px-3 py-2 border border-transparent hover:border-slate-900 dark:hover:border-slate-100 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 rounded-none italic"
              >
                {item.label}
              </a>
            ))}
            
            <div className="h-[2px] bg-slate-900 dark:bg-slate-100 my-2"></div>
            
            <a
              href="#register"
              onClick={(e) => handleScroll(e, '#register')}
              className="block w-full text-center font-black uppercase tracking-wider text-white bg-orange-500 border-2 border-slate-900 dark:border-slate-100 py-2.5 rounded-none"
            >
              {dict.nav.register}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
