import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import LearningPath from './components/LearningPath';
import ProjectsGallery from './components/ProjectsGallery';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CalendarAndEvents from './components/CalendarAndEvents';
import Certificates from './components/Certificates';
import FAQ from './components/FAQ';
import RegistryForm from './components/RegistryForm';
import Chatbot from './components/Chatbot';
import AdminRegistrationsModal from './components/AdminRegistrationsModal';
import TrialModal from './components/TrialModal';
import Footer from './components/Footer';

import { translations, courses, projects, testimonials, faqs } from './data';
import { LanguageKey } from './types';

export default function App() {
  const [learningLanguage, setLearningLanguage] = useState<LanguageKey>(() => {
    const saved = localStorage.getItem('learningLanguage');
    return (saved === 'en' || saved === 'uz' || saved === 'ru') ? saved : 'en';
  });
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      return saved === 'true';
    }
    return false;
  });
  const [selectedCourseId, setSelectedCourseId] = useState('lego-robotics');
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [registrations, setRegistrations] = useState([]);

  // Sync Tailwind Dark Class on document root element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  // Sync Language in localStorage
  useEffect(() => {
    localStorage.setItem('learningLanguage', learningLanguage);
  }, [learningLanguage]);

  // Fetch submitted applications from backend API on mount or state checks
  const fetchRegistrations = async () => {
    try {
      const resp = await fetch('/api/registrations');
      if (resp.ok) {
        const data = await resp.json();
        setRegistrations(data);
      }
    } catch (err) {
      console.warn("Could not reach registry API. Working offline mapping.");
    }
  };

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const handleEnrollSelect = (courseId: string) => {
    setSelectedCourseId(courseId);
    // Smooth scroll down to registration block immediately
    const element = document.querySelector('#register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const activeDict = translations[learningLanguage];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      
      {/* Navbar Header section */}
      <Navbar
        currentLanguage={learningLanguage}
        setLanguage={setLearningLanguage}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        dict={activeDict}
        openAdminModal={() => setAdminModalOpen(true)}
        registeredCount={registrations.length}
      />

      {/* Main Pages content sheets */}
      <main className="relative">
        <Hero
          dict={activeDict}
          openTrialModal={() => setTrialModalOpen(true)}
        />
        
        <About
          dict={activeDict}
        />
        
        <Courses
          courses={courses}
          currentLanguage={learningLanguage}
          dict={activeDict}
          onEnrollSelect={handleEnrollSelect}
        />
        
        <LearningPath
          currentLanguage={learningLanguage}
          dict={activeDict}
        />
        
        <ProjectsGallery
          projects={projects}
          currentLanguage={learningLanguage}
          dict={activeDict}
        />
        
        <WhyChooseUs
          currentLanguage={learningLanguage}
          dict={activeDict}
        />
        
        <Testimonials
          testimonials={testimonials}
          currentLanguage={learningLanguage}
          dict={activeDict}
        />
        
        <CalendarAndEvents
          currentLanguage={learningLanguage}
          dict={activeDict}
        />
        
        <Certificates
          currentLanguage={learningLanguage}
          dict={activeDict}
        />
        
        <FAQ
          faqs={faqs}
          currentLanguage={learningLanguage}
          dict={activeDict}
        />
        
        <RegistryForm
          courses={courses}
          currentLanguage={learningLanguage}
          dict={activeDict}
          selectedCourseId={selectedCourseId}
          setSelectedCourseId={setSelectedCourseId}
          onNewRegistrationAdded={fetchRegistrations}
        />
      </main>

      {/* Floating Messenger Robot Bubble */}
      <Chatbot
        currentLanguage={learningLanguage}
        dict={activeDict}
      />

      {/* Admin verification portal drawer */}
      <AdminRegistrationsModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
        courses={courses}
        registrations={registrations}
        fetchRegistrations={fetchRegistrations}
      />

      {/* Quick Orientation Demo Lesson trigger */}
      <TrialModal
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
        courses={courses}
        currentLanguage={learningLanguage}
        dict={activeDict}
        onNewRegistrationAdded={fetchRegistrations}
      />

      {/* Footer copyright rows */}
      <Footer
        currentLanguage={learningLanguage}
        dict={activeDict}
      />

    </div>
  );
}
