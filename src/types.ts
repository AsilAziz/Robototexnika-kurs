export type LanguageKey = 'en' | 'uz' | 'ru';

export interface TranslationDict {
  nav: {
    about: string;
    courses: string;
    learningPath: string;
    gallery: string;
    whyUs: string;
    faq: string;
    blog: string;
    contact: string;
    register: string;
    events: string;
  };
  hero: {
    title: string;
    subtitle: string;
    enrollBtn: string;
    trialBtn: string;
    activeStudents: string;
    experiencedInstructors: string;
  };
  about: {
    title: string;
    subtitle: string;
    missionTitle: string;
    missionText: string;
    visionTitle: string;
    visionText: string;
    whyTitle: string;
    whyText: string;
  };
  courses: {
    title: string;
    subtitle: string;
    all: string;
    ageGroup: string;
    duration: string;
    level: string;
    outcomes: string;
    enroll: string;
    age7to9: string;
    age8to11: string;
    age10to14: string;
    age10to13: string;
    age12to16: string;
    beginner: string;
    intermediate: string;
    advanced: string;
  };
  path: {
    title: string;
    subtitle: string;
    step: string;
  };
  gallery: {
    title: string;
    subtitle: string;
    viewProject: string;
    techUsed: string;
  };
  whyChoose: {
    title: string;
    subtitle: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
    parent: string;
    student: string;
  };
  stats: {
    students: string;
    projects: string;
    competitions: string;
    satisfaction: string;
    studentsDesc: string;
    projectsDesc: string;
    competitionsDesc: string;
    satisfactionDesc: string;
  };
  events: {
    title: string;
    subtitle: string;
    registerEvent: string;
    upcoming: string;
    competitionsCalendar: string;
  };
  blog: {
    title: string;
    subtitle: string;
    readMore: string;
  };
  certificates: {
    title: string;
    subtitle: string;
    desc: string;
    verifyText: string;
  };
  faq: {
    title: string;
    subtitle: string;
  };
  chat: {
    title: string;
    placeholder: string;
    send: string;
    welcome: string;
    suggestPrompt1: string;
    suggestPrompt2: string;
    suggestPrompt3: string;
  };
  registerForm: {
    title: string;
    subtitle: string;
    studentName: string;
    parentName: string;
    phone: string;
    age: string;
    course: string;
    schedule: string;
    submit: string;
    successTitle: string;
    successText: string;
    prefScheduleOptions: {
      morning: string;
      afternoon: string;
      weekend: string;
    };
  };
}

export interface Course {
  id: string;
  title: Record<LanguageKey, string>;
  image: string;
  description: Record<LanguageKey, string>;
  ageGroup: string;
  duration: Record<LanguageKey, string>;
  skillLevel: Record<LanguageKey, string>;
  skillLevelKey: 'beginner' | 'intermediate' | 'advanced';
  learningOutcomes: Record<LanguageKey, string[]>;
}

export interface Project {
  id: string;
  title: Record<LanguageKey, string>;
  description: Record<LanguageKey, string>;
  image: string;
  techUsed: string[];
  videoUrl?: string;
  creator: {
    name: string;
    age: number;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: Record<LanguageKey, string>;
  avatar: string;
  text: Record<LanguageKey, string>;
  rating: number;
}

export interface EventAnnouncement {
  id: string;
  title: Record<LanguageKey, string>;
  date: string;
  time: string;
  location: Record<LanguageKey, string>;
  description: Record<LanguageKey, string>;
  image: string;
}

export interface BlogArticle {
  id: string;
  title: Record<LanguageKey, string>;
  excerpt: Record<LanguageKey, string>;
  content: Record<LanguageKey, string>;
  date: string;
  author: string;
  readTime: Record<LanguageKey, string>;
  image: string;
}

export interface CompetitionMilestone {
  id: string;
  title: Record<LanguageKey, string>;
  date: string;
  location: Record<LanguageKey, string>;
  status: 'upcoming' | 'ongoing' | 'completed';
  statusLabel: Record<LanguageKey, string>;
}

export interface FAQItem {
  id: string;
  question: Record<LanguageKey, string>;
  answer: Record<LanguageKey, string>;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}
