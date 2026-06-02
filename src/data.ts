import {
  TranslationDict,
  Course,
  Project,
  Testimonial,
  EventAnnouncement,
  BlogArticle,
  CompetitionMilestone,
  FAQItem,
  LanguageKey
} from './types';

export const translations: Record<LanguageKey, TranslationDict> = {
  en: {
    nav: {
      about: 'About',
      courses: 'Courses',
      learningPath: 'Learning Path',
      gallery: 'Projects',
      whyUs: 'Why Us',
      faq: 'FAQ',
      blog: 'STEM Blog',
      contact: 'Contacts',
      register: 'Register Now',
      events: 'Events'
    },
    hero: {
      title: 'Build, Code, Create the Future',
      subtitle: 'Learn Robotics, Programming, Electronics, and Artificial Intelligence through hands-on practical projects.',
      enrollBtn: 'Enroll Now',
      trialBtn: 'Free Trial Lesson',
      activeStudents: 'Active Students',
      experiencedInstructors: 'Certified Mentors'
    },
    about: {
      title: 'About Our Academy',
      subtitle: 'Nurturing the next generation of engineers, coders, and innovators.',
      missionTitle: 'Our Mission',
      missionText: 'To inspire and empower children to became active creators of technology, rather than passive consumers, through a stimulating STEM curriculum.',
      visionTitle: 'Our Vision',
      visionText: 'To be the leading robotics academy in central Asia, bridging the gap between young minds and modern technological advancement.',
      whyTitle: 'Why Robotics Matters',
      whyText: 'Robotics combines physics, electronics, software engineering, and mathematical thinking. By learning robotics, students develop critical thinking, spatial reasoning, and collaborative problem-solving skills necessary for the 21st-century workforce.'
    },
    courses: {
      title: 'Our STEM Courses',
      subtitle: 'Tailored technology courses designed for different age groups and skill levels.',
      all: 'All Courses',
      ageGroup: 'Age Group',
      duration: 'Duration',
      level: 'Skill Level',
      outcomes: 'Learning Outcomes',
      enroll: 'Enroll in Course',
      age7to9: '7-9 years old',
      age8to11: '8-11 years old',
      age10to14: '10-14 years old',
      age10to13: '10-13 years old',
      age12to16: '12-16 years old',
      beginner: 'Beginner',
      intermediate: 'Intermediate',
      advanced: 'Advanced'
    },
    path: {
      title: 'STEM Learning Journey',
      subtitle: 'A structured, progressive path designed to take students from absolute basics to advanced autonomous engineering.',
      step: 'Step'
    },
    gallery: {
      title: 'Student Masterpieces',
      subtitle: 'Real projects built, wired, and programmed entirely by our talented academy students.',
      viewProject: 'Explore Details',
      techUsed: 'Technologies'
    },
    whyChoose: {
      title: 'Why Robotics Academy?',
      subtitle: 'We provide an optimal environment that guarantees both technical competence and cognitive growth.'
    },
    testimonials: {
      title: 'Trusted by Parents & Students',
      subtitle: 'Read genuine reviews from families who have experienced our transformative education.',
      parent: 'Parent',
      student: 'Student'
    },
    stats: {
      students: '1,000+',
      projects: '100+',
      competitions: '20+',
      satisfaction: '95%',
      studentsDesc: 'Enrolled Innovators',
      projectsDesc: 'Robots & Apps Constructed',
      competitionsDesc: 'Awards Won',
      satisfactionDesc: 'Parent Satisfaction'
    },
    events: {
      title: 'Events & Challenges',
      subtitle: 'Upcoming robotics exhibitions, regional competitions, and active STEM hackathons.',
      registerEvent: 'Join Event',
      upcoming: 'Upcoming Events',
      competitionsCalendar: 'Competitions Calendar'
    },
    blog: {
      title: 'STEM & Robotics Blog',
      subtitle: 'Expert insights, educational articles, and latest trends in kids technology education.',
      readMore: 'Read Article'
    },
    certificates: {
      title: 'Official Certification',
      subtitle: 'Earn verified certificates recognized by leading STEM organizations upon course completion.',
      desc: 'Each graduate receives a beautiful, personalized, and serialized certification showing their masteries in mechanical build, software programming, and system testing.',
      verifyText: 'Accredited STEM Education Certificate'
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Clear answers to direct inquiries from parents, kids, and schools.'
    },
    chat: {
      title: 'Academy Smart Assistant',
      placeholder: 'Ask about courses, fees, schedule, or locations...',
      send: 'Send',
      welcome: 'Hello! I am RoboBuddy, your AI Assistant for Future Robotics Academy. How can I help you today? You can ask me what course fits a 10-year-old, when our competitive calendar runs, or how to register!',
      suggestPrompt1: 'Which course is best for a 9-year-old?',
      suggestPrompt2: 'How long are the courses and when is the schedule?',
      suggestPrompt3: 'What do students build in LEGO Robotics?'
    },
    registerForm: {
      title: 'Apply for Admission',
      subtitle: 'Book a free trial lesson or reserve a seat in our upcoming standard module. We will contact you within 24 hours.',
      studentName: 'Student Full Name',
      parentName: 'Parent Full Name',
      phone: 'Phone Number (e.g., +998...)',
      age: "Student's Age (years)",
      course: 'Select Course',
      schedule: 'Preferred Schedule',
      submit: 'Submit Enrollment Application',
      successTitle: 'Registration Successful!',
      successText: 'Thank you for enrolling! Our administrators will call you shortly to confirm your seat and invite you to the first free orientation lesson.',
      prefScheduleOptions: {
        morning: 'Morning (09:00 - 11:00)',
        afternoon: 'Afternoon (14:30 - 16:30)',
        weekend: 'Weekends (Saturday / Sunday)'
      }
    }
  },
  uz: {
    nav: {
      about: 'Akademiya haqida',
      courses: 'Kurslar',
      learningPath: "O'quv yo'li",
      gallery: 'Loyihalar',
      whyUs: 'Nega biz?',
      faq: 'FAQ',
      blog: 'STEM Blog',
      contact: 'Kontaktlar',
      register: "Ro'yxatdan o'tish",
      events: 'Tadbirlar'
    },
    hero: {
      title: 'Kelajakni Quramiz, Kodlaymiz va Yaratamiz',
      subtitle: "Amaliy loyihalar orqali robototexnika, dasturlash, elektronika va sun'iy intellektni o'rganing.",
      enrollBtn: "Ro'yxatdan o'tish",
      trialBtn: 'Bepul sinov darsi',
      activeStudents: "Faol o'quvchilar",
      experiencedInstructors: 'Sertifikatlangan mentorlar'
    },
    about: {
      title: 'Akademiyamiz Haqida',
      subtitle: 'Muhandislar, dasturchilar va innovatorlarning yangi avlodini tarbiyalash.',
      missionTitle: 'Bizning Maqsadimiz',
      missionText: "Bolalarni faqatgina texnologiya iste'molchisi emas, balki qiziqarli STEM dasturi orqali uning faol yaratuvchisiga aylantirish.",
      visionTitle: 'Bizning Visionimiz',
      visionText: "Markaziy Osiyodagi yetakchi robototexnika akademiyasi bo'lish va yosh zehnlarni zamonaviy ilm-fan yutuqlari bilan mustahkam bog'lash.",
      whyTitle: 'Nega Robototexnika Muhim?',
      whyText: "Robototexnika fizika, elektronika, dasturlash va matematik fikrlashni birlashtiradi. Buni o'rganish orqali talabalar XXI asr mehnat bozori uchun zarur bo'lgan tanqidiy fikrlash, fazoviy tushuncha va birgalikda muammolarni hal qilish ko'nikmalarini shakllantiradilar."
    },
    courses: {
      title: 'Bizning STEM Kurslarimiz',
      subtitle: "Har xil yosh va bilim darajalariga moslashtirilgan zamonaviy texnologik darslar.",
      all: 'Barcha kurslar',
      ageGroup: 'Yosh guruhi',
      duration: 'Davomiyligi',
      level: 'Daraja',
      outcomes: 'Natijalar',
      enroll: "Kursga yozilish",
      age7to9: '7-9 yosh',
      age8to11: '8-11 yosh',
      age10to14: '10-14 yosh',
      age10to13: '10-13 yosh',
      age12to16: '12-16 yosh',
      beginner: 'Boshlang\'ich',
      intermediate: 'O\'rta',
      advanced: 'Mukammal'
    },
    path: {
      title: "STEM O'quv Yo'nalishi",
      subtitle: "O'quvchilarni mutlaq boshlang'ich tushunchalardan murakkab avtonom muhandislikkacha olib boruvchi bosqichma-bosqich o'quv rejasi.",
      step: 'Bosqich'
    },
    gallery: {
      title: "O'quvchilar Ishlari",
      subtitle: "Akademiyamiz talabalari tomonidan mustaqil ravishda yasalgan, montaj qilingan va dasturlangan real loyihalar.",
      viewProject: "Batafsil ko'rish",
      techUsed: 'Texnologiyalar'
    },
    whyChoose: {
      title: 'Nega Aynan Future Robotics?',
      subtitle: 'Biz o\'quvchining ham texnik salohiyati, ham kreativ fikrlash qobiliyatini kafolatlaydigan qulay muhit yaratamiz.'
    },
    testimonials: {
      title: 'Ota-onalar va O‘quvchilar Fikrlari',
      subtitle: 'Bizda ta’lim olib, katta o‘zgarishlarni his qilgan oilalarning samimiy esdaliklari bilan tanishing.',
      parent: 'Ota-ona',
      student: "O'quvchi"
    },
    stats: {
      students: '1,000+',
      projects: '100+',
      competitions: '20+',
      satisfaction: '95%',
      studentsDesc: "Faol muhandislar",
      projectsDesc: 'Yaratilgan robotlar',
      competitionsDesc: 'Yutuqlar va kuboklar',
      satisfactionDesc: 'Mamnun ota-onalar'
    },
    events: {
      title: 'Tadbirlar va Musobaqalar',
      subtitle: "Yaqinda bo'lib o'tadigan ko'rgazmalar, hududiy chempionatlar va qizqarli STEM xakatonlari.",
      registerEvent: 'Ishtirok etish',
      upcoming: 'Yaqindagi tadbirlar',
      competitionsCalendar: "Musobaqalar taqvimi"
    },
    blog: {
      title: 'STEM & Robototexnika Blogi',
      subtitle: "Bolalar ta'limidagi so'nggi tendensiyalar, foydali maslahatlar va ekspert tahlillari.",
      readMore: "Maqolani o'qish"
    },
    certificates: {
      title: 'Rasmiy Sertifikat',
      subtitle: "Kurs yakunida yetakchi STEM tashkilotlari tomonidan tan olinadigan tasdiqlangan sertifikatlarga ega bo'ling.",
      desc: "Har bir bitiruvchimiz mexanik konstruksiya, dasturiy boshqaruv va tizim sinovlaridan o'tganligini ko'rsatuvchi maxsus identifikatsiya raqamiga ega sertifikat bilan taqdirlanadi.",
      verifyText: "STEM Akkreditatsiyalangan Ta'lim Sertifikati"
    },
    faq: {
      title: 'Ko‘p Beriladigan Savollar',
      subtitle: 'Ota-onalar va maktablarni qiziqtirgan asosiy savollarga mufassal javoblar.'
    },
    chat: {
      title: 'Akademiya AI Yordamchisi',
      placeholder: 'Kurslar, narxlar, dars vaqtlari haqida so‘rang...',
      send: 'Yuborish',
      welcome: "Salom! Men RoboBuddy - Future Robotics Akademiyasining sun'iy intellekt maslahatchisiman. Sizga qanday yordam bera olaman? Masalan, 10 yoshli bola uchun qaysi kurs to'g'ri kelishini, yoki dars jadvallarini so'rashingiz mumkin!",
      suggestPrompt1: '9 yoshli bola uchun qaysi kurs ma’qul?',
      suggestPrompt2: 'Darslar qancha muddat davom etadi?',
      suggestPrompt3: 'LEGO robototexnika kursida nimalar o‘rgatiladi?'
    },
    registerForm: {
      title: "Hujjat topshirish",
      subtitle: "Bepul darsga joy band qiling yoki yangi kursimizda ishtirok etish uchun ariza yuboring. 24 soat ichida bog'lanamiz.",
      studentName: "O'quvchining ism-sharifi",
      parentName: "Ota-onaning ism-sharifi",
      phone: 'Telefon raqam (masalan, +998...)',
      age: "O'quvchining yoshi",
      course: 'Kursni tanlang',
      schedule: 'Qulay dars vaqti',
      submit: 'Eslatish va yuborish',
      successTitle: "Muvaffaqiyatli ro'yxatdan o'tdingiz!",
      successText: "Ariza yuborilganingiz uchun tashakkur! Tez fursatda administratorlarimiz siz bilan bog'lanishadi va bepul sinov darsi vaqtini tasdiqlashadi.",
      prefScheduleOptions: {
        morning: 'Ertalabki smena (09:00 - 11:00)',
        afternoon: 'Tushdan keyingi smena (14:30 - 16:30)',
        weekend: 'Shanba / Yakshanba kunlari'
      }
    }
  },
  ru: {
    nav: {
      about: 'Об Академии',
      courses: 'Курсы',
      learningPath: 'Путь обучения',
      gallery: 'Проекты',
      whyUs: 'Почему мы',
      faq: 'FAQ',
      blog: 'STEM Блог',
      contact: 'Контакты',
      register: 'Записаться',
      events: 'События'
    },
    hero: {
      title: 'Стройте, программируйте, создавайте будущее',
      subtitle: 'Изучайте робототехнику, программирование, электронику и искусственный интеллект на практических инновационных проектах.',
      enrollBtn: 'Записаться сейчас',
      trialBtn: 'Бесплатный пробный урок',
      activeStudents: 'Активных студентов',
      experiencedInstructors: 'Сертифицированных менторов'
    },
    about: {
      title: 'Об Академии',
      subtitle: 'Воспитываем новое поколение инженеров, программистов и технологических лидеров.',
      missionTitle: 'Наша миссия',
      missionText: 'Вдохновлять детей становиться активными создателями технологий, а не пассивными потребителями, используя передовую учебную программу STEM.',
      visionTitle: 'Наше видение',
      visionText: 'Стать ведущей академией робототехники в Центральной Азии, объединяющей молодые таланты и современные инновации.',
      whyTitle: 'Почему робототехника важна?',
      whyText: 'Робототехника объединяет физику, электронику, программирование и логическое мышление. Изучая её, дети развивают критическое мышление, пространственное воображение и навыки командного решения сложнейших задач.'
    },
    courses: {
      title: 'Наши STEM Курсы',
      subtitle: 'Технологические программы, адаптированные для различных возрастных групп и уровней подготовки.',
      all: 'Все курсы',
      ageGroup: 'Возрастная группа',
      duration: 'Длительность',
      level: 'Уровень',
      outcomes: ' Результаты обучения',
      enroll: 'Записаться на курс',
      age7to9: '7-9 лет',
      age8to11: '8-11 лет',
      age10to14: '10-14 лет',
      age10to13: '10-13 лет',
      age12to16: '12-16 лет',
      beginner: 'Начинающий',
      intermediate: 'Средний',
      advanced: 'Продвинутый'
    },
    path: {
      title: 'Путь Развития в STEM',
      subtitle: 'Пошаговый структурированный маршрут от сборки первых базовых конструкторов до программирования автономного ИИ.',
      step: 'Шаг'
    },
    gallery: {
      title: 'Шедевры Наших Студентов',
      subtitle: 'Реальные роботы и смарт-системы, спроектированные, собранные и запрограммированные нашими учениками.',
      viewProject: 'Подробнее',
      techUsed: 'Технологии'
    },
    whyChoose: {
      title: 'Почему выбирают нас?',
      subtitle: 'Мы предоставляем передовую лабораторную базу и гарантируем гармоничное развитие жестких и гибких навыков.'
    },
    testimonials: {
      title: 'Отзывы родителей и учеников',
      subtitle: 'Искренние истории успеха и благодарности от семей, которые выбрали наше обучение.',
      parent: 'Родитель',
      student: 'Ученик'
    },
    stats: {
      students: '1,000+',
      projects: '100+',
      competitions: '20+',
      satisfaction: '95%',
      studentsDesc: 'Юных инженеров',
      projectsDesc: 'Созданных роботов',
      competitionsDesc: 'Кубков и наград',
      satisfactionDesc: 'Довольных родителей'
    },
    events: {
      title: 'События и вызовы',
      subtitle: 'Ближайшие выставки робототехники, региональные конкурсы и увлекательные STEM хакатоны.',
      registerEvent: 'Участвовать',
      upcoming: 'Предстоящие события',
      competitionsCalendar: 'Календарь соревнований'
    },
    blog: {
      title: 'Наш STEM-Блог',
      subtitle: 'Полезные статьи, экспертные советы и тренды в сфере детского IT-образования.',
      readMore: 'Читать статью'
    },
    certificates: {
      title: 'Официальный Сертификат',
      subtitle: 'Получите аккредитованные STEM-сертификаты после завершения курсов.',
      desc: 'Каждый выпускник получает уникальный именной сертификат с серийным номером, подтверждающий навыки проектирования, электроники и кодинга.',
      verifyText: 'Аккредитованный STEM-Сертификат'
    },
    faq: {
      title: 'Часто задаваемые вопросы',
      subtitle: 'Отвечаем на популярные вопросы родителей и будущих студентов.'
    },
    chat: {
      title: 'Интеллектуальный Помощник',
      placeholder: 'Спросите про цены, расписание, курсы...',
      send: 'Отправить',
      welcome: 'Привет! Я RoboBuddy, ИИ-консультант Академии Робототехники. Чем могу помочь? Спросите меня, какой курс подойдет ребенку 8 лет, когда проводятся соревнования или как записаться на открытый урок!',
      suggestPrompt1: 'Какой курс подойдет для 9 лет?',
      suggestPrompt2: 'Какая длительность курсов и график?',
      suggestPrompt3: 'Что создают на курсе LEGO робототехники?'
    },
    registerForm: {
      title: 'Онлайн-Запись на Обучение',
      subtitle: 'Забронируйте место в новой группе или запишитесь на бесплатное пробное занятие. Свяжемся за 24 часа.',
      studentName: 'Имя и фамилия ученика',
      parentName: 'Имя и фамилия родителя',
      phone: 'Номер телефона (например, +998...)',
      age: 'Возраст ученика',
      course: 'Выберите программу',
      schedule: 'Удобное время занятий',
      submit: 'Отправить заявку',
      successTitle: 'Заявка принята!',
      successText: 'Спасибо за запись! Наши кураторы свяжутся с вами в ближайшее время для подтверждения графика и приглашения на пробную встречу.',
      prefScheduleOptions: {
        morning: 'Утренняя смена (09:00 - 11:00)',
        afternoon: 'Дневная смена (14:30 - 16:30)',
        weekend: 'Выходные дни (Суббота / Воскресенье)'
      }
    }
  }
};

export const courses: Course[] = [
  {
    id: 'lego-robotics',
    title: {
      en: 'LEGO Robotics Engineering',
      uz: 'LEGO Robototexnika muhandisligi',
      ru: 'Инженерия LEGO-Робототехники'
    },
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600',
    description: {
      en: 'Introduce young minds to mechanical engineering, gears, levers, and basic physics using LEGO Education sets.',
      uz: 'LEGO Education to‘plamlari yordamida yosh muhandislarni mexanika, tishli g‘ildiraklar tushunchasi va fizika qonunlari bilan tanishtiring.',
      ru: 'Знакомство юных умов с механикой, передачами, рычагами и базовой физикой с использованием специализированных наборов LEGO Education.'
    },
    ageGroup: '7-9',
    duration: {
      en: '3 Months (2 sessions/week)',
      uz: '3 Oy (haftada 2 marta)',
      ru: '3 Месяца (2 раза/неделя)'
    },
    skillLevel: {
      en: 'Beginner',
      uz: 'Boshlang\'ich',
      ru: 'Начинающий'
    },
    skillLevelKey: 'beginner',
    learningOutcomes: {
      en: [
        'Assemble basic gears and driving systems',
        'Understand principles of friction, speed, and force',
        'Learn sensor interaction (touch and color sensors)',
        'Develop early team collaboration habits'
      ],
      uz: [
        'Tishli uzatmalar va harakatlanuvchi moslamalarni yig‘ish',
        'Ishqalanish, tezlik va kuch tushunchalarini anglash',
        'Datchiklar (rang va teginish separatorlari) bilan ishlash',
        'Jamoada samarali ishlash ko‘nikmalari'
      ],
      ru: [
        'Сборка базовых передач и ходовых систем',
        'Понимание трения, скорости и крутящего момента',
        'Работа с датчиками (касания, цвета)',
        'Развитие командного взаимодействия'
      ]
    }
  },
  {
    id: 'scratch-programming',
    title: {
      en: 'Scratch Coding & Interactive Games',
      uz: 'Scratch dasturlash va o‘yinlar',
      ru: 'Scratch-Программирование и Игры'
    },
    image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=600',
    description: {
      en: 'Unlock algorithmic thinking through visual drag-and-drop block coding. Kids create interactive cartoons and dynamic games.',
      uz: 'Blokli qiziqarli vizual dasturlash orqali algoritmik fikrlashni rivojlantiring. Bolalar o‘z o‘yinlari va multfilmlarini yaratishadi.',
      ru: 'Развитие алгоритмического мышления через визуальное блочное кодирование. Создание собственных мультфильмов и увлекательных игр.'
    },
    ageGroup: '8-11',
    duration: {
      en: '4 Months (2 sessions/week)',
      uz: '4 Oy (haftada 2 marta)',
      ru: '4 Месяца (2 раза/неделя)'
    },
    skillLevel: {
      en: 'Beginner',
      uz: 'Boshlang\'ich',
      ru: 'Начинающий'
    },
    skillLevelKey: 'beginner',
    learningOutcomes: {
      en: [
        'Master core software concepts (loops, variables, conditions)',
        'Design custom game assets and movement mechanics',
        'Nurture logical troubleshooting and math coordination',
        'Establish initial structured computer literacy'
      ],
      uz: [
        'Asosiy dasturlash tushunchalari (sikl, o‘zgaruvchilar, shartlar)',
        'O‘yin qahramonlari dizayni va harakat mexanikasi',
        'Mantiqiy muammolarni bartaraf etish va koordinatalarni o‘rganish',
        'Kompyuter savodxonligi asosi'
      ],
      ru: [
        'Освоение понятий циклов, переменных и разветвлений',
        'Создание игровых миров и механик движения',
        'Развитие логического мышления и дебаггинга',
        'Основы компьютерной грамотности'
      ]
    }
  },
  {
    id: 'electronics-fundamentals',
    title: {
      en: 'Electronics & DIY Smart Circuits',
      uz: 'Elektronika va Aqlli sxemalar',
      ru: 'Основы Электроники и Создание Схем'
    },
    image: 'https://images.unsplash.com/photo-1517420784867-114a649d2374?auto=format&fit=crop&q=80&w=600',
    description: {
      en: 'Step into hardware assembly. Understand breadboards, LEDs, resistors, capacitors, and integrate smart physical elements.',
      uz: 'Haqiqiy elektronika olamiga qadam qo‘ying. Maket platalari, svetodiodlar, rezistorlar va kondensatorlar bilan amaliy ishlar olib boring.',
      ru: 'Шаг внутрь аппаратного обеспечения. Изучение макетных плат, светодиодов, резисторов, базовых транзисторов и физических цепей.'
    },
    ageGroup: '10-14',
    duration: {
      en: '3 Months (2 sessions/week)',
      uz: '3 Oy (haftada 2 marta)',
      ru: '3 Месяца (2 раза/неделя)'
    },
    skillLevel: {
      en: 'Intermediate',
      uz: 'O\'rta',
      ru: 'Средний'
    },
    skillLevelKey: 'intermediate',
    learningOutcomes: {
      en: [
        'Read and design basic schematic prints',
        'Solder and connect elements prototype boards autonomously',
        'Understand serial and parallel alignments of current',
        'Safely use voltmeters and diagnostic tools'
      ],
      uz: [
        'Asosiy elektr sxemalarni o‘qish va chizish',
        'Elementlarni ishonchli va xavfsiz tarzda sxemada ulash',
        'Ketma-ket va parallel elektr zanjirlaring tushunish',
        'Multimetr va boshqa asboblardan xavfsiz foydalanish'
      ],
      ru: [
        'Чтение принципиальных схем электроцепей',
        'Работа с макетной платой без пайки',
        'Понимание параллельного и последовательного соединения',
        'Безопасное тестирование девайсов мультиметром'
      ]
    }
  },
  {
    id: 'mblock-programming',
    title: {
      en: 'mBlock Coding & AI Extensions',
      uz: 'mBlock dasturlash va AI imkoniyatlari',
      ru: 'Программирование mBlock и ИИ'
    },
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600',
    description: {
      en: 'Bridging software onto functional machinery. Program physical robots like mBot, explore AI camera tracking and smart sensory responses.',
      uz: 'Dasturiy taminotni robotlar bilan birlashtiring. mBot robotini dasturlang, intellektual skanerlash va ovozli buyruqlarni o‘rganing.',
      ru: 'Мост от софта к железу. Программирование роботов mBot, распознавание лиц с помощью ИИ-камер и датчик звука.'
    },
    ageGroup: '10-13',
    duration: {
      en: '4 Months (2 sessions/week)',
      uz: '4 Oy (haftada 2 marta)',
      ru: '4 Месяца (2 раза/неделя)'
    },
    skillLevel: {
      en: 'Intermediate',
      uz: 'O\'rta',
      ru: 'Средний'
    },
    skillLevelKey: 'intermediate',
    learningOutcomes: {
      en: [
        'Sync visual coding blocks directly into real hardware microchips',
        'Configure infrared tracking and ultrasonic distance guards',
        'Utilize machine learning and facial recognition assets',
        'Solve robotics navigation challenges'
      ],
      uz: [
        'Vizual kod bloklarini to‘g‘ridan-to‘g‘ri mikrokontrolerga yuklash',
        'Infrasariq va ultratovushli datchiklarni yo‘naltirish',
        'Mashinali o‘qitish va yuzni aniqlash texnologiyasidan foydalanish',
        'Robotning to‘siqlarni chetlab o‘tish masalalarini hal qilish'
      ],
      ru: [
        'Зашивка визуального блока в микрочип реального робота',
        'Настройка инфракрасных трекеров и сонаров расстояния',
        'Использование технологий распознавания изображений и речи',
        'Решение задач по прохождению лабиринтов и полос препятствий'
      ]
    }
  },
  {
    id: 'arduino-robotics',
    title: {
      en: 'Arduino Automation & Real C++',
      uz: 'Arduino Avtomatlashtirish va Haqiqiy C++',
      ru: 'Робототехника Arduino и C++'
    },
    image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&q=80&w=600',
    description: {
      en: 'Move to textual programming in C++. Code microcontrollers directly, use complex relays, motor shields, and build heavy IoT robotics.',
      uz: 'C++ tili orqali matnli dasturlashga o‘ting. Mikrokontrolerlarni dasturlab, sensorlar, rele va dvigatellar drayverini boshqaring.',
      ru: 'Переход к профессиональному текстовому кодингу на C++. Прямое управление микроконтроллером, реле, IoT-устройствами.'
    },
    ageGroup: '12-16',
    duration: {
      en: '6 Months (2 sessions/week)',
      uz: '6 Oy (haftada 2 marta)',
      ru: '6 Месяцев (2 раза/неделя)'
    },
    skillLevel: {
      en: 'Advanced',
      uz: 'Mukammal',
      ru: 'Продвинутый'
    },
    skillLevelKey: 'advanced',
    learningOutcomes: {
      en: [
        'Write solid lines of C++ code without visual cues',
        'Control step and servo motors with high precision',
        'Interface dynamic LCD screens and Bluetooth elements',
        'Construct fully functional automated home prototypes'
      ],
      uz: [
        'Vizual darslarsiz real C++ tilida to‘g‘ridan-to‘g‘ri kod yozish',
        'Qadamli dvigatellar va servoharakatlarni aniqlikda boshqarish',
        'Bluetooth modullari va LCD displeylarni mikrokontrolerga ulash',
        'Aqlli uy yoki to‘liq avtonom qurilmalar muhandisligini tugatish'
      ],
      ru: [
        'Написание чистого синтаксического кода на Arduino C++',
        'Прецизионное управление серводвигателями и шаговиками',
        'Настройка экранов телеметрии, Bluetooth и Wi-Fi модулей',
        'Сборка полноценной функциональной системы "Умного Дома"'
      ]
    }
  }
];

export const learningPathSteps = [
  {
    step: 1,
    title: {
      en: 'LEGO Robotics Engineering',
      uz: 'LEGO muhandisligi',
      ru: 'LEGO Робототехника'
    },
    age: '7-9',
    desc: {
      en: 'Primary introduction to physical mechanics, speed ratio balances, structure rigidity and basic logic structures.',
      uz: 'Fizik mexanizm, tishli uzatmalar mutanosibligi, mustahkam konstruksiya va sodda muloqot tizimlari bilan birlamchi tanishuv.',
      ru: 'Первое знакомство с физической механикой, передаточными числами, жесткостью конструкций и понятием алгоритма.'
    },
    iconName: 'Wrench'
  },
  {
    step: 2,
    title: {
      en: 'Scratch Coding Foundations',
      uz: 'Scratch dasturlash asoslari',
      ru: 'Основы Scratch'
    },
    age: '8-11',
    desc: {
      en: 'Nurture algorithmic paths and visual logic flow maps. Code games, characters, loops, and conditions.',
      uz: 'Algoritmik fikrlash, o‘yinlar yaratish va chiziqli mantiqiy jarayonlarni vizual loyihalash asosi.',
      ru: 'Развитие логического мышления через визуальное создание игр, управление персонажами и изучение ветвления.'
    },
    iconName: 'Cpu'
  },
  {
    step: 3,
    title: {
      en: 'Electronics Fundamentals',
      uz: 'Murakkab elektronika sxemalari',
      ru: 'Основы Электроники'
    },
    age: '10-14',
    desc: {
      en: 'Master breadboards, understand Ohm’s law, current parameters, resistors, and diagnose hardware errors.',
      uz: 'Maket platalarini o‘rganish, Om Qonuni, elektr tokining kuchi va kuchlanishi, elektron komponentlar va diagnostic.',
      ru: 'Сборка физических электроцепей на макетных платах, понимание Закона Ома, диагностика мультиметром.'
    },
    iconName: 'Zap'
  },
  {
    step: 4,
    title: {
      en: 'mBlock Real Hardware Control',
      uz: 'mBlock va avtonom robot boshqaruvi',
      ru: 'Управление Роботами в mBlock'
    },
    age: '10-13',
    desc: {
      en: 'Translate code onto physical processors. Interact with sonar, motion detection, line trackers, and AI cameras.',
      uz: 'Dasturiy kodlarni jismoniy mikrosxemalarga yuklash. Sonar, infraqizil datchiklar, harakat aniqlagich va AI kamera elementlari.',
      ru: 'Компиляция кода на микроконтроллер. Обработка сигналов дальномеров, датчиков линии и камер с элементами ИИ.'
    },
    iconName: 'Bot'
  },
  {
    step: 5,
    title: {
      en: 'Arduino Robotics & Text C++',
      uz: 'Arduino va C++ dasturlash',
      ru: 'Программирование Arduino на C++'
    },
    age: '12-16',
    desc: {
      en: 'Ditch block systems and code using syntactical C++. Build customized microcontrollers, IoT rigs, and industrial modules.',
      uz: 'Rangli bloklarni chetga surib, matnli C++ tilida tizimlarni yozish. IoT (Internet buyumlar) va sanoat robotlari boshqaruvi.',
      ru: 'Переход на профессиональный C++. Создание сложных комплексных устройств, автоматизации, IoT систем и контроллеров.'
    },
    iconName: 'Code'
  },
  {
    step: 6,
    title: {
      en: 'Advanced Robotics and AI Labs',
      uz: 'Kengaytirilgan Robototexnika va sun‘iy intellekt',
      ru: 'Прогрессивная Робототехника и ИИ'
    },
    age: '14-17',
    desc: {
      en: 'Master machine vision, neural networks, complex computer science fields, and construct customized competition-ready systems.',
      uz: "Kompyuter ko'rish qobiliyati, neyroshartlar, murakkab muhandislik ishlari va xalqaro chempionatlarga mos innovatsion asboblar.",
      ru: 'Разработка нейросетевых моделей, машинное зрение, сложная кинематика манипуляторов и подготовка к мировым Олимпиадам.'
    },
    iconName: 'Lightbulb'
  }
];

export const projects: Project[] = [
  {
    id: 'robot-arm',
    title: {
      en: 'Autonomous Robotic Arm Manipulator',
      uz: 'Avtonom Robot-Manipulyator Qo‘li',
      ru: 'Автономная Роботизированная Рука'
    },
    description: {
      en: 'A 5-axis robotic manipulator with servo engines, controlled by an Arduino and customized code. It can automatically sort color-coded packages.',
      uz: 'Svetodiod va rang datchiklari orqali paketlarni avtomatik tartiblovchi, Arduino drayverida yasalgan 5 o‘qli metall robot manipulator qo‘li.',
      ru: '5-осевой роботизированный манипулятор на сервоприводах под управлением Arduino. Самостоятельно сортирует объекты по цветам.'
    },
    image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&q=80&w=600',
    techUsed: ['Arduino C++', 'Color Sensor', 'Servo Motors', 'Mechanical Frame'],
    creator: {
      name: 'Samandar Abduvaliyev',
      age: 14
    }
  },
  {
    id: 'smart-home',
    title: {
      en: 'Smart IoT Home Eco-System',
      uz: 'Aqlli IoT Uy tizimi',
      ru: 'Экосистема "Умный Дом" IoT'
    },
    description: {
      en: 'Our students built a modern house mockup packed with Bluetooth controls, temperature metrics, voice-activated fire alarms, and sliding doors.',
      uz: 'Ota-onalar smartfoni bilan Bluetooth orqali eshiklarini o‘chirib-yoqadigan, harorat datchikli, avtomatik yong‘in xavfsizligi tizimiga ega uy maketi.',
      ru: 'Ученики собрали макет дома, напичканный датчиками температуры, Bluetooth-управлением, автоматическим пожаротушением и дверями.'
    },
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=600',
    techUsed: ['mBlock', 'Bluetooth Module', 'Gas & Temp Sensors', 'LCD screen'],
    creator: {
      name: 'Alina Popova',
      age: 11
    }
  },
  {
    id: 'line-follower',
    title: {
      en: 'High-Speed Line Follower Racer',
      uz: 'Tezkor chiziq bo‘ylab harakatlanuvchi robot',
      ru: 'Скоростной Робот, Следующий по Линии'
    },
    description: {
      en: 'A fast visual tracker using infrared sensors and custom PID algorithmic controls to balance movement along sharp curve paths.',
      uz: 'Murakkab burilishlar va yo‘llarni tezkor bosib o‘tish uchun infrasariq datchiklar va PID mantiq drayveri bilan jihozlangan tezyurar robot.',
      ru: 'Быстрый гусеничный колесный робот, использующий ИК-датчики и алгоритм ПИД-регулирования для прохождения трасс за рекордные секунды.'
    },
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600',
    techUsed: ['Arduino', 'PID Algorithms', 'Dual IR Arrays', 'High RPM Motors'],
    creator: {
      name: 'Rustam Rahmonov',
      age: 15
    }
  },
  {
    id: 'obstacle-avoider',
    title: {
      en: 'Obstacle Avoiding Exploration Rover',
      uz: 'To‘siqlardan qochuvchi izlanish roveri',
      ru: 'Исследовательский Ровер, Обходящий Препятствия'
    },
    description: {
      en: 'An autonomous rover using ultrasonic sensor radar arrays. It evaluates clear directions and designs a real-time room map.',
      uz: 'Ultrachastotali radar datchiklari orqali atrof-muhit burchaklarini o‘rnatib, xavfsiz yo‘l chizmalarini chizuvchi aqlli rover mashinasi.',
      ru: 'Автономный вездеход на ультразвуковом сонаре. Рассчитывает безопасный путь, сканируя окружение на 180 градусов.'
    },
    image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=600',
    techUsed: ['mBlock Programming', 'Ultrasonic Radar', 'Servo Sweep', 'Solenoid Bumpers'],
    creator: {
      name: 'Jasur Temirov',
      age: 12
    }
  },
  {
    id: 'traffic-light',
    title: {
      en: 'Smart Intersection Traffic Simulator',
      uz: 'Aqlli chorrahani boshqarish svetofori',
      ru: 'Умный Перекресток Светофоров'
    },
    description: {
      en: 'A functional model of city cross-streets checking car lines using laser triggers, organizing timing to prevent congestion.',
      uz: 'Yo‘llardagi avtomobillar yuklamasini lazer triggers orqali ko‘rib chiqib, svetofor vaqtlarini avtomatik uzoq yoki qisqa qiluvchi chorraha.',
      ru: 'Макет городского перекрестка, переключающий фазы на основе загруженности полос с помощью лазерных триггеров.'
    },
    image: 'https://images.unsplash.com/photo-1517420784867-114a649d2374?auto=format&fit=crop&q=80&w=600',
    techUsed: ['Scratch Code', 'Interactive Board', 'LED Indicators', 'Optocouplers'],
    creator: {
      name: 'Sardor Hakimov',
      age: 9
    }
  },
  {
    id: 'auto-parking',
    title: {
      en: 'Automated Solar Parking System',
      uz: 'Avtomatlashtirilgan quyoshli turargoh',
      ru: 'Автомобильная Парковка на Солнечной Энергии'
    },
    description: {
      en: 'A scale model parking lot equipped with solar accumulators, smart gates that open on license detection, and occupancy display indicators.',
      uz: 'Haqiqiy quyosh panelidan quvvat oluvchi, avtomobil yaqinlashganda avtomatik ochiladigan va bo‘sh joylarni hisoblovchi parkovka.',
      ru: 'Умная стоянка с солнечной панелью, автоматическим шлагбаумом и дисплеем, показывающим количество свободных мест.'
    },
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600',
    techUsed: ['Arduino', 'Solar Shields', 'Micro Servos', 'LCD Display Panel'],
    creator: {
      name: 'Elena Sharafutdinova',
      age: 13
    }
  }
];

export const whyChooseUs = [
  {
    title: {
      en: 'Certified Mentors & Instructors',
      uz: 'Mutaxassis va mehribon ustozlar',
      ru: 'Сертифицированные менторы'
    },
    desc: {
      en: 'Our lessons are led by STEM-qualified university researchers, hardware master technicians, and enthusiastic robotic teachers.',
      uz: 'Darslarimiz tajribali universitet ilmiy xodimlari, muhandislar va xalqaro sertifikatli robototexnika o‘qituvchilari tomonidan o‘tiladi.',
      ru: 'Занятия ведут практикующие инженеры, выпускники технических вузов и сертифицированные на международном уровне преподаватели.'
    },
    iconName: 'Award'
  },
  {
    title: {
      en: '100% Practical Activities',
      uz: 'To‘liq amaliy dars mashg‘ulotlari',
      ru: '100% практики и экспериментов'
    },
    desc: {
      en: 'No boring blackboard lectures. Every student designs, builds, tests, and polishes original mechanical models in active laboratories.',
      uz: 'Zerikarli uzoq ma‘ruzalar yo‘q. Har bir talaba birinchi daqiqalardan boshlab shaxsiy robototexnika qismlarini yig‘adi va kodlaydi.',
      ru: 'Никакой сухой зубрежки. Каждый ученик своими руками создает, перепрограммирует и защищает свои изобретения перед классом.'
    },
    iconName: 'Cpu'
  },
  {
    title: {
      en: 'High-Tech Modern Laboratory',
      uz: 'Zamonaviy jihozlangan laboratoriya',
      ru: 'Передовая хай-тек лаборатория'
    },
    desc: {
      en: 'Equipped with original LEGO kits, high precision 3D printers, soldering units, oscilloscopes, and automated smart-boards.',
      uz: 'Eng yangi noutbuklar, original LEGO va Arduino modullari, 3D printerlar hamda xavfsiz elektr asboblar jamlanmasi.',
      ru: 'Каждый кабинет оснащен современными ПК, 3D-принтерами, Arduino стендами, паяльными станциями и защитными очками.'
    },
    iconName: 'FlaskConical'
  },
  {
    title: {
      en: 'International STEM Standard',
      uz: 'Xalqaro STEM andozasidagi ta‘lim',
      ru: 'Международный подход STEM'
    },
    desc: {
      en: 'Curriculums aligned to global technical standards. Our course designs focus on scientific theories, mathematics, and critical design rules.',
      uz: 'Bizning tizimimiz ilm-fan, matematika va san‘at integratsiyasini qamrab olgan xalqaro STEM standartlariga to‘liq asoslangan.',
      ru: 'Интеграция науки, физики, математики и инженерии. Готовим ребят мыслить как архитекторов систем высокого порядка.'
    },
    iconName: 'Globe'
  },
  {
    title: {
      en: 'Global Tech Competitions',
      uz: 'Xalqaro va milliy chempionatlar',
      ru: 'Олимпиады и хакатоны'
    },
    desc: {
      en: 'We prepare top candidates for World Robot Olympiad (WRO), national hackathons, and regional STEM exhibitions to showcase their talents.',
      uz: 'Iqtidorli talabalarimizni butunjahon robototexnika olimpiadasi (WRO) va milliy musobaqalarga maqsadli yetkazib beramiz.',
      ru: 'Активная подготовка команд к World Robot Olympiad (WRO), республиканским выставкам достижений и детским хакатонам.'
    },
    iconName: 'Trophy'
  },
  {
    title: {
      en: 'Small Interactive Groups',
      uz: 'Kichik guruhlar bilan ishlash',
      ru: 'Небольшие дружные классы'
    },
    desc: {
      en: 'Class limits of 8-10 students ensure maximum educational transparency, direct mentorship contact, and team synergy.',
      uz: 'Har bir guruhda 8-10 tadan ko‘p bo‘lmagan o‘quvchi qabul qilinadi. Bu sifatli yondashuv va mustahkam bilim berish garovidir.',
      ru: 'Группы до 10 человек гарантируют, что ментор уделит внимание деталям сборки и кода каждого участника во время урока.'
    },
    iconName: 'Users'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Dilshod To‘rayev',
    role: {
      en: 'Parent of Sarvar (Age 10)',
      uz: 'Sarvarning dadasi (10 yosh)',
      ru: 'Отец Сарвара (10 лет)'
    },
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
    text: {
      en: 'Our son was so hooked onto mobile games. After joining Future Robotics mBlock course, he now creates his own computer helper apps and codes physical robots. Truly impressive shift!',
      uz: 'O‘g‘limiz faqat telefonda o‘yin o‘ynash bilan band edi. Bu kursda o‘zi mBlock dasturi orqali datchiklar, harakat va robotlarni mustaqil kodlay boshladi. Natija hayratlanarli!',
      ru: 'Сын раньше играл в мобильные игры днями напролет. Записавшись в академию, он сам начал писать алгоритмы и управлять физическим роботом mBot. Перемена просто невероятная!'
    },
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Ekaterina Petrova',
    role: {
      en: 'Parent of Kirill (Age 13)',
      uz: 'Kirillning onasi (13 yosh)',
      ru: 'Мама Кирилла (13 лет)'
    },
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    text: {
      en: 'Arduino and C++ course opened up a genuine carrier vision for Kirill. The labs are hyper-equipped. He built an automated solar charger system that we actually use in our garden!',
      uz: 'Arduino va C++ kursi sharofati bilan Kirill kelajakdagi kasbini aniqlab oldi. U darsda quyosh batareyali aqlli qurilma yig‘di. Uni bog‘imizda muvaffaqiyatli sinab ko‘rdik.',
      ru: 'Курс на Arduino помог сыну определиться с профессией. Отличная лабораторная база. Собрал умную солнечную панель для полива сада, мы подключили ее на даче, и она реально работает!'
    },
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Jasur Shokirov',
    role: {
      en: 'Student of Advanced Arduino (Age 15)',
      uz: "Arduino kursi o'quvchisi (15 yosh)",
      ru: 'Студент направления Arduino (15 лет)'
    },
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
    text: {
      en: 'I loved physics and computer science but never knew how to combine them. Here, I developed a robotic sorting manipulators. Competing in STEM fairs was the highlight of my high school!',
      uz: "Fizika va kompyuterga qiziqardim, lekin qanday birlashtirishni bilmasdim. Akademiyada xalqaro toifadagi robot-manipulyator qurdim. Maktabdagi eng zo'r yillarim shu yerda o'tdi!",
      ru: 'Мне нравилась физика и информатика, но я не знал, как применить это. Здесь я построил автономную руку-манипулятор. Участие в хакатонах дало мощный буст в моем развитии!'
    },
    rating: 5
  }
];

export const events: EventAnnouncement[] = [
  {
    id: 'ev-1',
    title: {
      en: 'Annual Academy STEM Fair 2026',
      uz: "Yillik STEM Akademiyasi ko'rgazmasi 2026",
      ru: 'Ежегодная выставка STEM проектов 2026'
    },
    date: 'June 25, 2026',
    time: '10:00 - 16:00',
    location: {
      en: 'Central Laboratory, Future Academy',
      uz: 'Toshkent sh., Markaziy Laboratoriya',
      ru: 'Ташкент, Главный офис Академии'
    },
    description: {
      en: 'Our smart students showcase over 50 automated rovers, IoT houses, and software codes. Open for visitors, parents, and school representatives.',
      uz: 'Talabalarimizning 50 dan ortiq avtomatlashtirilgan robotlari, aqlli uylari va qiziqarli dars o‘yinlari taqdimoti. Kirish mutlaqo bepul.',
      ru: 'Наши студенты продемонстрируют более 50 роботов, умных гаджетов и собственных игр. Будут интерактивные зоны для всех гостей.'
    },
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=600'
  }
];

export const blogArticles: BlogArticle[] = [
  {
    id: 'blog-1',
    title: {
      en: 'How Robotics Transforms Mathematical Thinking in Younger Kids',
      uz: 'Robototexnika yosh bolalarda matematik va mantiqiy fikrlashni qanday rivojlantiradi',
      ru: 'Как робототехника развивает математическое мышление у детей'
    },
    excerpt: {
      en: 'Discover how physical blocks and spatial navigation on sensors lay a solid foundations for complex geometry.',
      uz: 'Sizning farzandingiz datchik va motorlarni yig‘ayotganda qanday qilib osonlik bilan murakkab makon geometriyasini o‘rganishi haqida.',
      ru: 'Как сборка шестеренок и работа с осями координат готовят ребенка к легкой учебе по сложной школьной геометрии.'
    },
    content: {
      en: 'When constructing a functional LEGO car, children calculate speed ratios, wheels circumference, and distances. It provides tangible evidence to pure theoretical equations. Instead of memory formulas, kids visualize speed vectors and force balances dynamically.',
      uz: 'Amaliy robototexnika darsida bolalar radiuslar ko‘paytmasi, aylanma doira uzunligi hamda dvigatel aylanish tezligini to‘g‘ridan-to‘g‘ri hisoblashadi. Bu esa darsliklardagi o‘lik tenglamalarni jonlantiradi va eslab qolishni tezlashtiradi.',
      ru: 'Собирая колесного робота, ребенок замеряет диаметры колес, высчитывает путь по PI и координирует сервомоторы. Это дает понимание реальной пользы математики, выводит геометрию и физику из скучных книг в захватывающее действие.'
    },
    date: 'May 15, 2026',
    author: 'Prof. Alisher Nematov',
    readTime: {
      en: '4 min read',
      uz: '4 daqiqa o‘qish',
      ru: '4 мин чтения'
    },
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=600'
  }
];

export const competitionCalendar: CompetitionMilestone[] = [
  {
    id: 'mil-1',
    title: {
      en: 'Central Asian Robot Cup 2026',
      uz: 'Markaziy Osiyo Robot kubogi 2026',
      ru: 'Кубок Робототехники Центральной Азии 2026'
    },
    date: 'July 12-14, 2026',
    location: {
      en: 'Inno Tech Park, Tashkent',
      uz: 'Toshkent Inno Texnopark',
      ru: 'Инно Технопарк, Ташкент'
    },
    status: 'upcoming',
    statusLabel: {
      en: 'Preparing Teams',
      uz: 'Tayyorgarlik ketyapti',
      ru: 'Подготовка команд'
    }
  },
  {
    id: 'mil-2',
    title: {
      en: 'World Robot Olympiad (WRO) Uzbekistan Selection',
      uz: 'Jahon Robot Olimpiadasi milliy saralash bosqichi',
      ru: 'Национальный отбор на World Robot Olympiad'
    },
    date: 'August 05, 2026',
    location: {
      en: 'Youth Palace, Samarkand',
      uz: 'Samarqand Yoshlar Saroyi',
      ru: 'Дворец Молодежи, Самарканд'
    },
    status: 'upcoming',
    statusLabel: {
      en: 'Registration Open',
      uz: "Arizalar o'yin",
      ru: 'Регистрация открыта'
    }
  },
  {
    id: 'mil-3',
    title: {
      en: 'National Robo-Sumo Challenge 2026',
      uz: 'Milliy Robot-Sumo musobaqasi 2026',
      ru: 'Национальный турнир по Робо-Сумо 2026'
    },
    date: 'May 20, 2026',
    location: {
      en: 'Academic Lyceum Complex',
      uz: 'Akademik litsey binosi',
      ru: 'Здание Академического лицея'
    },
    status: 'completed',
    statusLabel: {
      en: 'Took 1st & 2nd Place!',
      uz: '1 va 2-o‘rinni oldik!',
      ru: 'Взяли 1-е и 2-е место!'
    }
  }
];

export const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: {
      en: 'Does my child need prior computer or engineering skills?',
      uz: "Bolamda dasturlash yoki mexanika ko'nikmalari oldindan bo'lishi shartmi?",
      ru: 'Нужны ли ребенку начальные знания компьютера или инженерии?'
    },
    answer: {
      en: 'No. Our courses start from absolute ground zero. LEGO Robotics and Scratch courses are specifically tailored to teach computer literacy step-by-step in an interactive, friendly environment.',
      uz: "Yo‘q. Darslarimiz mutlaq noldan boshlanadi. LEGO hamda Scratch darslarimiz aynan kompyuter savodxonligini dastlabki darslarda oson yo‘l bilan tushuntirish uchun maxsus ishlab chiqilgan.",
      ru: 'Абсолютно нет. Мы обучаем всему с нуля. Курсы LEGO Robotics и Scratch как раз разработаны для плавного входа, где ребенок осваивает даже базовую работу с мышкой и клавиатурой в процессе логической игры.'
    }
  },
  {
    id: 'faq-2',
    question: {
      en: 'How long does a course last and what is the weekly schedule?',
      uz: 'Kurslar qancha davom etadi va haftalik dars jadvali qanday?',
      ru: 'Сколько длится курс и каково расписание?'
    },
    answer: {
      en: 'Most modules last between 3 to 6 months. Classes run twice a week, each lasting 90 minutes. We support morning, afternoon, and weekend sessions for convenience.',
      uz: "Ko‘p kurslarimiz 3 oydan 6 oygacha davom etadi. Darslar haftada ikki marta, har bir dars 90 daqiqa (1.5 soat) davom etadi. Ertalabki, tushdan keyingi va shanba-yakshanba smenalari mavjud.",
      ru: 'Большинство модулей длится от 3 до 6 месяцев. Занятия проходят 2 раза в неделю по 90 минут. На выбор доступны утренние, дневные группы и группы выходного дня.'
    }
  },
  {
    id: 'faq-3',
    question: {
      en: 'Will my child receive a certificate at completion?',
      uz: 'Bitiruvchilarga rasmiy sertifikat beriladimi?',
      ru: 'Выдается ли подтверждающий сертификат по окончанию?'
    },
    answer: {
      en: 'Yes! Upon passing their final practical exam (building and defending an original technical project), students will receive a serialized, official STEM Academy Certificate of Mastery.',
      uz: "Albatta! O'quvchi yakuniy amaliy loyihasini (shaxsiy ixtirosini) muvaffaqiyatli himoya qilgandan so'ng, xalqaro STEM andozasiga mos, rasmiy sertifikat bilan taqdirlanadi.",
      ru: 'Да! После защиты финального выпускного проекта перед другими студентами и родителями, каждый ученик получает официальный именной STEM-сертификат академии.'
    }
  },
  {
    id: 'faq-4',
    question: {
      en: 'What tools and equipment are provided during the class?',
      uz: "Dars davomida qanday jihozlar taqdim etiladi?",
      ru: 'Какое оборудование предоставляется во время уроков?'
    },
    answer: {
      en: 'Everything is fully provided. Each student gets their own computer station, a set of original LEGO Mindstorms, Arduino kits, breadboards, sensors, electronic elements, and workshop materials without additional payments.',
      uz: "Hamma narsa to'quvchiga taqdim etiladi. Qo'shimcha to'lovsiz har bir talaba shaxsiy noutbuk, original LEGO Mindstorms to'plamlar, breadboard platalar, datchik va butun elektron detallardan xavfsiz foydalanish huquqiga ega.",
      ru: 'Всё необходимое уже включено в стоимость. Каждый ученик обеспечивается персональным ноутбуком за столом и индивидуальным робототехническим набором, конструктором, датчиками и инструментами.'
    }
  }
];
