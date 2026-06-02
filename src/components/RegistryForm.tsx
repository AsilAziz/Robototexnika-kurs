import React, { useState, useEffect } from 'react';
import { Course, LanguageKey, TranslationDict, FAQItem } from '../types';
import { Phone, Mail, Instagram, Send, Sparkles, MapPin, CheckCircle2, History, Trash2, Calendar } from 'lucide-react';

interface RegistryFormProps {
  courses: Course[];
  currentLanguage: LanguageKey;
  dict: TranslationDict;
  selectedCourseId: string;
  setSelectedCourseId: (id: string) => void;
  onNewRegistrationAdded: () => void;
}

export default function RegistryForm({
  courses,
  currentLanguage,
  dict,
  selectedCourseId,
  setSelectedCourseId,
  onNewRegistrationAdded
}: RegistryFormProps) {
  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [schedule, setSchedule] = useState('afternoon');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorText, setErrorText] = useState('');

  // Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !phone.trim() || !age.trim()) {
      setErrorText(currentLanguage === 'uz' ? 'Iltimos, yulduzcha (*) qo‘yilgan barcha maydonlarni to‘ldiring' : currentLanguage === 'ru' ? 'Пожалуйста, заполните все обязательные поля' : 'Please fill all required fields');
      return;
    }

    setIsSubmitting(true);
    setErrorText('');

    try {
      const resp = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          studentName,
          parentName,
          phone,
          age,
          course: selectedCourseId || courses[0]?.id || 'lego-robotics',
          schedule
        })
      });

      if (resp.ok) {
        setSuccess(true);
        setStudentName('');
        setParentName('');
        setPhone('');
        setAge('');
        onNewRegistrationAdded(); // Notify parent to fetch counter
      } else {
        const errData = await resp.json();
        setErrorText(errData.error || 'Server error, please try again.');
      }
    } catch (err) {
      console.error(err);
      setErrorText('Connection error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="register" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column Left: Contact Details & Google Maps mockup (5 columns) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-xs text-orange-500 tracking-wider font-extrabold uppercase">
                ACADEMY COORDINATES
              </span>
              <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
                {currentLanguage === 'uz' ? 'Biz Bilan Bog‘laning' : currentLanguage === 'ru' ? 'Свяжитесь с нами' : 'Get In Touch'}
              </h2>
              <p className="font-sans text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                Have an inquiry about academy curriculums, group schedules, or pricing deals? Our specialists are available 7 days a week to support your family.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-4 font-sans text-sm font-semibold text-slate-700 dark:text-slate-300">
              
              <div className="flex gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50">
                <span className="p-3 bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </span>
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase font-mono mb-0.5">Dial Core Desk</span>
                  <a href="tel:+998712003040" className="hover:text-orange-500 block leading-tight">+998 (71) 200-30-40</a>
                  <span className="text-[10px] text-slate-400 block mt-1">Available Daily (09:00 - 20:00)</span>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50">
                <span className="p-3 bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </span>
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase font-mono mb-0.5">Online Telegram Support</span>
                  <a href="https://t.me/FutureRoboAcademy" target="_blank" rel="noreferrer" className="hover:text-orange-500 block leading-tight">@FutureRoboAcademy</a>
                  <span className="text-[10px] text-slate-400 block mt-1">Chat live with administrators</span>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50">
                <span className="p-3 bg-gradient-to-r from-pink-500/10 to-purple-500/10 text-pink-650 dark:text-pink-400 rounded-xl flex items-center justify-center shrink-0">
                  <Instagram className="w-5 h-5" />
                </span>
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase font-mono mb-0.5">Explore Feed</span>
                  <a href="https://instagram.com/FutureRobotics" target="_blank" rel="noreferrer" className="hover:text-orange-500 block leading-tight">@FutureRobotics</a>
                  <span className="text-[10px] text-slate-400 block mt-1">Daily classroom activity updates</span>
                </div>
              </div>

            </div>

            {/* Simulated Geographic Location Vector Map Container (High Quality layout decoration) */}
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 p-4 bg-white dark:bg-slate-800 space-y-3 shadow-md">
              <div className="flex items-center justify-between text-xs font-bold font-sans">
                <span className="flex items-center gap-1.5 text-slate-800 dark:text-slate-100">
                  <MapPin className="w-4 h-4 text-orange-500" />
                  <span>Map Location</span>
                </span>
                <a
                  href="https://maps.google.com/?q=Tashkent+Buyuk+Turon+12"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="text-orange-500 text-[11px] uppercase hover:underline"
                >
                  Open Google Maps →
                </a>
              </div>

              {/* Styled clean blueprint grid schematic representing city coordinates */}
              <div className="relative h-32 rounded-2xl bg-slate-100 dark:bg-slate-900 overflow-hidden border border-slate-250 dark:border-slate-850 flex items-center justify-center">
                
                {/* Visual streets layout decoration */}
                <svg className="absolute inset-0 w-full h-full text-slate-300 dark:text-slate-850" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <line x1="10" y1="0" x2="10" y2="100" stroke="currentColor" strokeWidth="1" />
                  <line x1="45" y1="0" x2="45" y2="100" stroke="currentColor" strokeWidth="2.5" />
                  <line x1="80" y1="0" x2="80" y2="100" stroke="currentColor" strokeWidth="1" />
                  
                  <line x1="0" y1="30" x2="100" y2="30" stroke="currentColor" strokeWidth="2.5" />
                  <line x1="0" y1="75" x2="100" y2="75" stroke="currentColor" strokeWidth="1" />
                </svg>

                {/* Concentric signal ping coordinate decoration */}
                <div className="absolute top-1/2 left-[45%] -translate-x-1/2 -translate-y-1/2">
                  <span className="absolute inline-flex h-10 w-10 rounded-full bg-orange-500/30 animate-ping duration-1000" />
                  <div className="h-4 w-4 bg-orange-500 rounded-full border-2 border-white flex items-center justify-center shadow">
                    <div className="h-1.5 w-1.5 bg-white rounded-full animate-pulse" />
                  </div>
                </div>

                <div className="absolute bottom-2 left-3 bg-slate-900/90 text-[10px] text-white px-2.5 py-1 rounded-lg font-mono">
                  FRA Head Lab • Buyuk Turon St 12
                </div>
              </div>
            </div>

          </div>

          {/* Column Right: Online Registration Form (7 columns) */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-800 p-8 sm:p-10 rounded-3xl border border-slate-200/60 dark:border-slate-700/65 shadow-md space-y-6">
            
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase text-orange-500 tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ONLINE ADMISSION PORTAL</span>
              </span>
              <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white leading-snug">
                {dict.registerForm.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-500 dark:text-slate-405 leading-relaxed font-normal">
                {dict.registerForm.subtitle}
              </p>
            </div>

            {success ? (
              /* Success Badge */
              <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-500/30 text-slate-800 dark:text-slate-200 space-y-4 animate-in zoom-in-95 duration-200">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>{dict.registerForm.successTitle}</span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed font-medium">
                  {dict.registerForm.successText}
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="px-4 py-2 bg-emerald-600 text-white font-bold text-xs rounded-xl hover:bg-emerald-700 transition"
                >
                  Register Another Student
                </button>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {errorText && (
                  <p className="text-xs text-red-500 font-bold font-sans">
                    * {errorText}
                  </p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 font-sans text-xs font-bold text-slate-700 dark:text-slate-350">
                  
                  {/* Student Name */}
                  <div className="space-y-1.5">
                    <label>{dict.registerForm.studentName} <span className="text-orange-500">*</span></label>
                    <input
                      type="text"
                      required
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      placeholder="e.g., Anvar Shokirov"
                      className="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-xl text-slate-800 dark:text-white font-semibold text-xs focus:ring-1 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                    />
                  </div>

                  {/* Parent Name */}
                  <div className="space-y-1.5">
                    <label>{dict.registerForm.parentName}</label>
                    <input
                      type="text"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      placeholder="e.g., Alisher Shokirov"
                      className="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-xl text-slate-800 dark:text-white font-semibold text-xs focus:ring-1 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label>{dict.registerForm.phone} <span className="text-orange-500">*</span></label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+998 (90) 123-45-67"
                      className="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-xl text-slate-800 dark:text-white font-semibold text-xs focus:ring-1 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                    />
                  </div>

                  {/* Student Age */}
                  <div className="space-y-1.5">
                    <label>{dict.registerForm.age} <span className="text-orange-500">*</span></label>
                    <input
                      type="number"
                      required
                      min={6}
                      max={18}
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      placeholder="e.g., 10"
                      className="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-xl text-slate-800 dark:text-white font-semibold text-xs focus:ring-1 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                    />
                  </div>

                </div>

                {/* Course Selection dropdown */}
                <div className="space-y-1.5 font-sans text-xs font-bold text-slate-700 dark:text-slate-350">
                  <label>{dict.registerForm.course} <span className="text-orange-500">*</span></label>
                  <select
                    value={selectedCourseId}
                    onChange={(e) => setSelectedCourseId(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-xl text-slate-800 dark:text-white font-semibold text-xs outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition cursor-pointer"
                  >
                    {courses.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.title[currentLanguage]} (Ages {course.ageGroup})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Schedule options */}
                <div className="space-y-1.5 font-sans text-xs font-bold text-slate-700 dark:text-slate-350">
                  <label>{dict.registerForm.schedule}</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    
                    <button
                      type="button"
                      onClick={() => setSchedule('morning')}
                      className={`p-3 border rounded-xl text-left transition text-xs font-semibold cursor-pointer ${
                        schedule === 'morning'
                          ? 'border-orange-500 bg-orange-50/40 dark:bg-orange-500/5 text-orange-600 dark:text-orange-400'
                          : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span className="block font-bold">{dict.registerForm.prefScheduleOptions.morning.split(' ')[0]}</span>
                      <span className="text-[10px] text-slate-400 font-mono mt-1 block">09:00 - 11:00</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSchedule('afternoon')}
                      className={`p-3 border rounded-xl text-left transition text-xs font-semibold cursor-pointer ${
                        schedule === 'afternoon'
                          ? 'border-orange-500 bg-orange-50/40 dark:bg-orange-500/5 text-orange-600 dark:text-orange-400'
                          : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span className="block font-bold">{dict.registerForm.prefScheduleOptions.afternoon.split(' ')[0]}</span>
                      <span className="text-[10px] text-slate-400 font-mono mt-1 block font-normal">14:30 - 16:30</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSchedule('weekend')}
                      className={`p-3 border rounded-xl text-left transition text-xs font-semibold cursor-pointer ${
                        schedule === 'weekend'
                          ? 'border-orange-500 bg-orange-50/40 dark:bg-orange-500/5 text-orange-600 dark:text-orange-400'
                          : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span className="block font-bold">Weekends</span>
                      <span className="text-[10px] text-slate-400 font-mono mt-1 block">Sat / Sun Labs</span>
                    </button>

                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 disabled:from-slate-400 disabled:to-slate-500 hover:shadow-xl hover:shadow-orange-500/25 inline-flex items-center justify-center gap-2 text-white font-sans font-bold text-xs uppercase tracking-wide rounded-2xl md:text-sm transform transition duration-300 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Processing Seat Reservation...' : dict.registerForm.submit}</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
