import React, { useState } from 'react';
import { X, Send, Bot, CheckCircle2, Sparkles, Phone, Calendar } from 'lucide-react';
import { LanguageKey, TranslationDict, Course } from '../types';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  courses: Course[];
  currentLanguage: LanguageKey;
  dict: TranslationDict;
  onNewRegistrationAdded: () => void;
}

export default function TrialModal({
  isOpen,
  onClose,
  courses,
  currentLanguage,
  dict,
  onNewRegistrationAdded
}: TrialModalProps) {
  const [studentName, setStudentName] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('lego-robotics');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorText, setErrorText] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !phone.trim() || !age.trim()) {
      setErrorText(currentLanguage === 'uz' ? 'Iltimos, yulduzcha (*) qo‘yilgan barcha maydonlarni to‘ldiring' : currentLanguage === 'ru' ? 'Пожалуйста, заполните все обязательные поля' : 'Please fill all fields');
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
          parentName: 'Trial Booking Contact',
          phone,
          age,
          course: selectedCourse,
          schedule: 'weekend'
        })
      });

      if (resp.ok) {
        setSuccess(true);
        setStudentName('');
        setPhone('');
        setAge('');
        onNewRegistrationAdded();
      } else {
        const err = await resp.json();
        setErrorText(err.error || 'Server error, please try again.');
      }
    } catch (err) {
      console.error(err);
      setErrorText('Connection error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {success ? (
          <div className="space-y-4 text-center py-6">
            <div className="h-12 w-12 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto text-center font-bold">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            
            <h3 className="font-sans font-extrabold text-lg text-slate-900 dark:text-white leading-tight">
              Trial Seat Reserved!
            </h3>
            
            <p className="font-sans text-xs text-slate-500 leading-normal max-w-sm mx-auto">
              Our academic counselors will make contact within 24 hours to coordinate dates and prepare materials for your child's first lesson orientation.
            </p>

            <button
              onClick={() => {
                setSuccess(false);
                onClose();
              }}
              className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs rounded-xl cursor-pointer"
            >
              Acknowledge Booking
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1 text-[9px] font-extrabold uppercase text-orange-500 tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>DEMO CLASS SCHEDULER</span>
              </div>
              <h3 className="font-sans font-extrabold text-md sm:text-lg text-slate-900 dark:text-white leading-tight">
                {dict.hero.trialBtn}
              </h3>
              <p className="font-sans text-xs text-slate-500 dark:text-slate-440 leading-normal font-normal">
                No credit card required. We provide all hardware kits during the demonstration class session.
              </p>
            </div>

            {errorText && (
              <p className="text-xs text-red-500 font-bold font-sans">
                * {errorText}
              </p>
            )}

            <div className="space-y-4 font-sans text-xs font-bold text-slate-700 dark:text-slate-350">
              
              {/* Name */}
              <div className="space-y-1.5">
                <label>Student Full Name <span className="text-orange-500">*</span></label>
                <input
                  type="text"
                  required
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Anvar Shokirov"
                  className="w-full px-4 py-3 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:bg-white text-slate-800 dark:text-white rounded-xl text-xs sm:text-sm font-semibold outline-none focus:border-orange-500 transition"
                />
              </div>

              {/* Age & Phone in Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label>Student Age <span className="text-orange-500">*</span></label>
                  <input
                    type="number"
                    required
                    min={6}
                    max={18}
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="e.g., 9"
                    className="w-full px-4 py-3 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:bg-white text-slate-800 dark:text-white rounded-xl text-xs sm:text-sm font-semibold outline-none focus:border-orange-500 transition"
                  />
                </div>

                <div className="space-y-1.5">
                  <label>Contact Phone <span className="text-orange-500">*</span></label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+998 (90)..."
                    className="w-full px-4 py-3 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:bg-white text-slate-800 dark:text-white rounded-xl text-xs sm:text-sm font-semibold outline-none focus:border-orange-500 transition"
                  />
                </div>
              </div>

              {/* Course Selector */}
              <div className="space-y-1.5">
                <label>Select Demonstration Syllabus</label>
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:bg-white text-slate-805 dark:text-white rounded-xl text-xs sm:text-sm font-semibold outline-none focus:border-orange-500 transition cursor-pointer"
                >
                  {courses.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.title[currentLanguage]} (Ages {c.ageGroup})
                    </option>
                  ))}
                </select>
              </div>

            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-gradient-to-r from-orange-500 to-orange-600 shadow-md text-white font-sans font-bold text-xs uppercase tracking-wider rounded-2xl cursor-pointer"
            >
              {isSubmitting ? 'Scheduling Demo Lesson...' : 'Confirm Demo Session'}
            </button>

          </form>
        )}

      </div>
    </div>
  );
}
