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
    'nav.contact': 'Contacto',
    
    // Home page
    'home.welcome': '¡Hola, soy un desarrollador independiente en Colombia!',
    'home.name': 'Julián Moreno',
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
    'about.me.p1': 'Soy un estudiante de Ingeniería de Software apasionado por crear experiencias digitales únicas. Nací en 2005 en la ciudad de Pasto, Colombia, un lugar que me ha enseñado el valor del trabajo constante y la perseverancia.',
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
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Home page
    'home.welcome': 'Hello, I\'m an independent developer in Colombia!',
    'home.name': 'Julián Moreno',
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