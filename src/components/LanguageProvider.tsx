"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traducciones
const translations = {
  es: {
    // Navbar
    'nav.home': 'Inicio',
    'nav.projects': 'Proyectos',
    'nav.services': 'Servicios',
    'nav.about': 'Información',
    'nav.testimonials': 'Testimonios',
    'nav.experiences': 'Experiencias',
    'nav.contact': 'Contacto',
    
    // Home page
    'home.welcome': '¡Hola, soy un desarrollador independiente en Colombia!',
    'home.name': 'Julián Moreno',
    'home.greeting': 'Hola, soy Julián',
    'home.title': 'Desarrollador Full Stack & Diseñador',
    'home.subtitle': '💼 Freelancer · 🎓 Ingeniería de Software',
    'home.work': 'Trabajo',
    'home.work.description': 'Soy una persona creativa e intuitiva, con una gran curiosidad por aprender y explorar nuevas ideas. Mi enfoque principal está en el desarrollo web y móvil full stack, donde combino creatividad y lógica para construir interfaces atractivas y sistemas escalables. Me apasiona transformar ideas en soluciones digitales funcionales que generen experiencias útiles y significativas para las personas.',
    'home.download.cv': 'Descargar CV',
    'home.bio': 'Bio',
    'home.bio.education': 'Ingeniería de software - Universidad Cooperativa de Colombia',
    'home.contact.me': 'Contáctame',
    'home.on.web': 'En la web',
    
    // Projects page
    'projects.title': 'Proyectos',
    'projects.subtitle': 'Algunos de mis trabajos más destacados',
    'projects.works': 'Obras',
    'projects.collaborations': 'Colaboraciones',
    'projects.view.github': 'Ver en GitHub',
    'projects.view.demo': 'Ver Demo en Vivo',
    'projects.works.item1.title': 'Inicio Sesión',
    'projects.works.item1.desc': 'Proyecto frontend sobre un inicio de sesión elegante con Tailwind CSS.',
    'projects.works.item2.title': 'Diseño Interfaz',
    'projects.works.item2.desc': 'Interfaz sobre tarjetas creada con Tailwind y Next.js.',
    'projects.works.item3.title': 'Diseño Ticket',
    'projects.works.item3.desc': 'Diseño web sobre un boleto de bus con Tailwind CSS.',
    'projects.works.item4.title': 'Almacenamiento de libros',
    'projects.works.item4.desc': 'Aplicación en Django con dos modelos y enfoque de base de datos relacional.',
    'projects.collab.item1.title': 'Mascotas',
    'projects.collab.item1.desc': 'Proyecto frontend de una página para mascotas realizado con Angular.',
    'projects.collab.item2.title': 'Biblioteca Nexus',
    'projects.collab.item2.desc': 'Bibliote Digital.',
    
    // Services page
    'services.title': 'Servicios',
    'services.subtitle': 'Lo que puedo hacer por ti',
    'services.description': 'Ofrezco soluciones completas de desarrollo web y móvil, desde el concepto inicial hasta el despliegue final. Trabajo con empresas y emprendedores para dar vida a sus ideas digitales.',
    'services.web.development': 'Desarrollo Web',
    'services.web.description': 'Creación de sitios web modernos y responsivos',
    'services.mobile.development': 'Desarrollo Móvil',
    'services.mobile.description': 'Aplicaciones móviles nativas y multiplataforma',
    'services.ui.design': 'Diseño UI/UX',
    'services.ui.description': 'Interfaces intuitivas y experiencias de usuario',
    'services.optimization': 'Optimización',
    'services.optimization.description': 'Mejora de rendimiento, SEO y experiencia del usuario.',
    'services.backend': 'Backend y APIs',
    'services.backend.description': 'APIs robustas y escalables con Node.js, Python y SQL/NoSQL.',
    'services.consulting': 'Consultoría',
    'services.consulting.description': 'Asesoría técnica en arquitectura y elección de tecnologías.',
    'services.process.title': 'Mi proceso de trabajo',
    'services.process.step1.title': 'Consulta inicial',
    'services.process.step1.description': 'Conversamos sobre tu proyecto, objetivos y necesidades específicas.',
    'services.process.step2.title': 'Planificación',
    'services.process.step2.description': 'Defino arquitectura, tecnologías y cronograma del proyecto.',
    'services.process.step3.title': 'Desarrollo',
    'services.process.step3.description': 'Implemento la solución con actualizaciones constantes.',
    'services.process.step4.title': 'Entrega y soporte',
    'services.process.step4.description': 'Despliegue del proyecto y soporte post-lanzamiento.',
    'services.cta.title': '¿Listo para comenzar?',
    'services.cta.description': 'Conversemos sobre tu proyecto y cómo puedo ayudarte a alcanzar tus objetivos.',
    'services.cta.button': 'Contactar ahora →',
    
    // About page
    'about.title': 'Información',
    'about.subtitle': 'Conoce más sobre mí',
    'about.me.title': 'Sobre mí',
    'about.me.p1': 'Soy un estudiante de Ingeniería de Software apasionado por aprender, crecer y dejar una huella a través de lo que hago.',
    'about.me.p1b': 'Aspiro a convertirme en un programador que no solo escriba código, sino que cree soluciones con propósito, que inspiren y generen soluciones cotidianas.',
    'about.me.p2': 'Cuando no estoy programando, disfruto entrenar, cocinar, explorar la naturaleza y pasar tiempo de calidad con mi familia. Creo firmemente en el aprendizaje continuo y en mantener un equilibrio entre la vida profesional y personal.',
    'about.portfolio.button': 'Mi portafolio',
    'about.stats.experience': 'Años de experiencia',
    'about.stats.projects': 'Proyectos completados',
    'about.stats.tech': 'Tecnologías dominadas',
    'about.skills.title': 'Habilidades Técnicas',
    'about.skills.frontend': 'Frontend',
    'about.skills.backend': 'Backend',
    'about.tools.title': 'Herramientas y Otros',
    
    // Contact page
    'contact.title': 'Contacto',
    'contact.subtitle': 'Hablemos sobre tu proyecto',
    'contact.description': 'Completa el formulario y me pondré en contacto contigo pronto.',
    'contact.name': 'Nombre',
    'contact.email': 'Correo electrónico',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar mensaje',
    'contact.form.success': '¡Mensaje enviado! Te contactaré pronto.',
    'contact.form.name': 'Nombre',
    'contact.form.name.placeholder': 'Tu nombre',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'tu@email.com',
    'contact.form.message': 'Mensaje',
    'contact.form.message.placeholder': 'Cuéntame sobre tu proyecto...',
    'contact.form.submit': 'Enviar mensaje →',
    'contact.other.title': 'Otras formas de contacto',
    'contact.other.email': 'Email',
    'contact.other.location': 'Ubicación',
    'contact.other.social': 'Redes sociales',
    'contact.response.time': 'Tiempo de respuesta',
    'contact.response.description': 'Normalmente respondo en 24-48 horas hábiles.',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados.',
    
    // Testimonials page
    'testimonials.title': 'Testimonios',
    'testimonials.subtitle': 'Lo que dicen clientes y colaboradores',
    'testimonials.description': 'Algunas palabras de personas con quienes he trabajado. Gracias por su confianza.',
    'testimonials.item1.name': 'Andres Cordoba',
    'testimonials.item1.role': 'Ingeniero de Software',
    'testimonials.item1.company': 'Equipo de Desarrollo',
    'testimonials.item1.quote': 'Trabajamos mucho tiempo juntos. Destaca por su compromiso, trabajo en equipo y fiabilidad en cada entrega.',
    'testimonials.item2.name': 'Luis Cajigas',
    'testimonials.item2.role': 'Ingeniero en Software',
    'testimonials.item2.company': 'Colaborador',
    'testimonials.item2.quote': 'Hemos estudiado y trabajado juntos. Aporta colaboración, enfoque técnico y mejora continua que elevan la calidad del proyecto.',
    'testimonials.item3.name': 'Dirkin Ojeda',
    'testimonials.item3.role': 'Ingeniero de Software',
    'testimonials.item3.company': 'Equipo de Desarrollo',
    'testimonials.item3.quote': 'Trabajamos bien en un proyecto de largo alcance y desarrollo, y también en iniciativas próximas a lanzar, siempre con excelente coordinación y resultados.',
    'testimonials.item4.name': 'Diego S.',
    'testimonials.item4.role': 'Lead Dev',
    'testimonials.item4.company': 'Consultora Tech',
    'testimonials.item4.quote': 'Buen trabajo en equipo y atención a detalles. Ayudó a estandarizar componentes y mejorar DX.',

    // Experiences page
    'experiences.title': 'Experiencias',
    'experiences.academic.title': 'Experiencia Académica',
    'experiences.academic.item1': 'Ingeniería de software · Universidad Cooperativa ',
    'experiences.academic.item2': 'Diplomado en Desarrollo Web · Platzi ',
    'experiences.academic.item1.desc': 'Formación en fundamentos de programación, algoritmos, estructuras de datos, bases de datos y redes.',
    'experiences.academic.item2.desc': 'Diplomado orientado a desarrollo web moderno: HTML, CSS, JavaScript y librerías frontend.',
    'experiences.work.title': 'Experiencia Laboral',
    'experiences.work.item1': 'Frontend Developer · Tech Evolution ',
    'experiences.work.item1.desc': 'Implementación de interfaces con React/Next.js, estilos con Tailwind y consumo de APIs REST.',
    'experiences.work.item2': 'Desarrollador Junior',
    'experiences.work.item2.desc': 'Apoyo en desarrollo, pruebas y automatización; colaboración bajo Scrum.',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.testimonials': 'Testimonials',
    'nav.experiences': 'Experiences',
    'nav.contact': 'Contact',
    
    // Home page
    'home.welcome': 'Hello, I\'m an independent developer in Colombia!',
    'home.name': 'Julián Moreno',
    'home.greeting': 'Hi, I\'m Julián',
    'home.title': 'Full Stack Developer & Designer',
    'home.subtitle': '💼 Freelancer · 🎓 Software Engineering',
    'home.work': 'Work',
    'home.work.description': 'I am a creative and intuitive person, with great curiosity to learn and explore new ideas. My main focus is on full stack web and mobile development, where I combine creativity and logic to build attractive interfaces and scalable systems. I am passionate about transforming ideas into functional digital solutions that generate useful and meaningful experiences for people.',
    'home.download.cv': 'Download CV',
    'home.bio': 'Bio',
    'home.bio.education': 'Software Engineering - Universidad Cooperativa de Colombia',
    'home.contact.me': 'Contact Me',
    'home.on.web': 'On the web',
    
    // Projects page
    'projects.title': 'Projects',
    'projects.subtitle': 'Some of my most outstanding work',
    'projects.works': 'Works',
    'projects.collaborations': 'Collaborations',
    'projects.view.github': 'View on GitHub',
    'projects.view.demo': 'View Live Demo',
    'projects.works.item1.title': 'Login UI',
    'projects.works.item1.desc': 'Frontend project of an elegant sign-in built with Tailwind CSS.',
    'projects.works.item2.title': 'Interface Design',
    'projects.works.item2.desc': 'Card interface built with Tailwind and Next.js.',
    'projects.works.item3.title': 'Ticket Design',
    'projects.works.item3.desc': 'Web design of a bus ticket with Tailwind CSS.',
    'projects.works.item4.title': 'Book Storage',
    'projects.works.item4.desc': 'Django app with two models focused on relational database design.',
    'projects.collab.item1.title': 'Pets',
    'projects.collab.item1.desc': 'Frontend project for a pets page built with Angular.',
    'projects.collab.item2.title': 'Muscles',
    'projects.collab.item2.desc': 'Collaborative web app built with WebSocket.',
    
    // Services page
    'services.title': 'Services',
    'services.subtitle': 'What I can do for you',
    'services.description': 'I offer complete web and mobile development solutions, from the initial concept to the final deployment. I work with companies and entrepreneurs to bring their digital ideas to life.',
    'services.web.development': 'Web Development',
    'services.web.description': 'Creation of modern and responsive websites',
    'services.mobile.development': 'Mobile Development',
    'services.mobile.description': 'Native and cross-platform mobile applications',
    'services.ui.design': 'UI/UX Design',
    'services.ui.description': 'Intuitive interfaces and user experiences',
    'services.optimization': 'Optimization',
    'services.optimization.description': 'Performance, SEO, and user experience improvements.',
    'services.backend': 'Backend & APIs',
    'services.backend.description': 'Robust and scalable APIs with Node.js, Python and SQL/NoSQL.',
    'services.consulting': 'Consulting',
    'services.consulting.description': 'Technical consulting in architecture and technology choices.',
    'services.process.title': 'My working process',
    'services.process.step1.title': 'Initial consultation',
    'services.process.step1.description': 'We discuss your project, goals and specific needs.',
    'services.process.step2.title': 'Planning',
    'services.process.step2.description': 'I define architecture, technologies and project timeline.',
    'services.process.step3.title': 'Development',
    'services.process.step3.description': 'I implement the solution with constant updates.',
    'services.process.step4.title': 'Delivery and support',
    'services.process.step4.description': 'Project deployment and post-launch support.',
    'services.cta.title': 'Ready to start?',
    'services.cta.description': 'Let’s talk about your project and how I can help you reach your goals.',
    'services.cta.button': 'Contact now →',
    
    // About page
    'about.title': 'About',
    'about.subtitle': 'Learn more about me',
    'about.me.title': 'About me',
    'about.me.p1': 'I am a Software Engineering student passionate about creating unique digital experiences. I was born in 2005 in Pasto, Colombia, a place that has taught me the value of constant work and perseverance.',
    'about.me.p1b': 'I aspire to become a programmer who not only writes code, but creates purposeful solutions that inspire and solve everyday problems.',
    'about.me.p2': 'When I am not coding, I enjoy training, cooking, exploring nature and spending quality time with my family. I firmly believe in continuous learning and maintaining a balance between professional and personal life.',
    'about.portfolio.button': 'My portfolio',
    'about.stats.experience': 'Years of experience',
    'about.stats.projects': 'Completed projects',
    'about.stats.tech': 'Technologies mastered',
    'about.skills.title': 'Technical Skills',
    'about.skills.frontend': 'Frontend',
    'about.skills.backend': 'Backend',
    'about.tools.title': 'Tools & Others',
    
    // Contact page
    'contact.title': 'Contact',
    'contact.subtitle': 'Let\'s talk about your project',
    'contact.description': 'Fill out the form and I will get back to you soon.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send message',
    'contact.form.success': 'Message sent! I will contact you soon.',
    'contact.form.name': 'Name',
    'contact.form.name.placeholder': 'Your name',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'your@email.com',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Tell me about your project...',
    'contact.form.submit': 'Send message →',
    'contact.other.title': 'Other contact methods',
    'contact.other.email': 'Email',
    'contact.other.location': 'Location',
    'contact.other.social': 'Social networks',
    'contact.response.time': 'Response time',
    'contact.response.description': 'I usually respond within 24-48 business hours.',
    
    // Footer
    'footer.rights': 'All rights reserved.',

    // Testimonials page
    'testimonials.title': 'Testimonials',
    'testimonials.subtitle': 'What clients and collaborators say',
    'testimonials.description': 'A few words from people I have worked with. Thank you for your trust.',
    'testimonials.item1.name': 'Andres Cordoba',
    'testimonials.item1.role': 'Software Engineer',
    'testimonials.item1.company': 'Development Team',
    'testimonials.item1.quote': 'We worked together for a long time. He stands out for commitment, teamwork, and reliable delivery.',
    'testimonials.item2.name': 'Luis Cajigas',
    'testimonials.item2.role': 'Software Engineer',
    'testimonials.item2.company': 'Collaborator',
    'testimonials.item2.quote': 'We have studied and worked together. He brings collaboration, solid engineering focus, and continuous improvement to raise quality.',
    'testimonials.item3.name': 'Dirkin Ojeda',
    'testimonials.item3.role': 'Software Engineer',
    'testimonials.item3.company': 'Development Team',
    'testimonials.item3.quote': 'We worked well on a long‑reach development project and on upcoming launches, always with solid coordination and results.',
    'testimonials.item4.name': 'Diego S.',
    'testimonials.item4.role': 'Lead Dev',
    'testimonials.item4.company': 'Tech Consulting',
    'testimonials.item4.quote': 'Great teamwork and attention to detail. Helped standardize components and improve DX.',

    // Experiences page
    'experiences.title': 'Experiences',
    'experiences.academic.title': 'Academic Experience',
    'experiences.academic.item1': 'Software Engineering · Universidad Cooperativa · 2023-2027',
    'experiences.academic.item2': 'Web Development Diploma · Platzi · 2023-2024',
    'experiences.academic.item1.desc': 'Training in programming fundamentals, algorithms, data structures, databases and networks.',
    'experiences.academic.item2.desc': 'Diploma focused on modern web development: HTML, CSS, JavaScript and frontend libraries.',
    'experiences.work.title': 'Work Experience',
    'experiences.work.item1': 'Frontend Developer · Tech Evolution · 2023-2024',
    'experiences.work.item1.desc': 'Built interfaces with React/Next.js, styled with Tailwind, and integrated REST APIs.',
    'experiences.work.item2': 'Junior Developer',
    'experiences.work.item2.desc': 'Assisted in development, testing and basic automation; collaborated under Scrum.',
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  // Cargar idioma desde localStorage al inicializar
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Guardar idioma en localStorage cuando cambie
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  // Función de traducción
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}