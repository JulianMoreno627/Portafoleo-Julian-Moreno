"use client";

import Image from 'next/image';
import { Download } from "lucide-react";
import Navbar from '@/components/Navbar';
import { useTheme } from '@/components/ThemeProvider';
import { useLanguage } from '@/components/LanguageProvider';

export default function InformacionPage() {
  const { darkMode } = useTheme();
  const { t } = useLanguage();

  const frontendSkills = [
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: 'text-orange-500' },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: 'text-blue-500' },
    { name: 'SCSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg', color: 'text-pink-500' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: 'text-yellow-500' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: 'text-blue-600' },
    { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: 'text-cyan-500' }
  ];

  const backendSkills = [
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: 'text-green-500' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: 'text-blue-500' },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', color: 'text-orange-600' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: 'text-green-600' },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: 'text-blue-600' },
    { name: 'APIs', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', color: 'text-purple-500' }
  ];

  return (
    <main
      className={`min-h-screen ${
        darkMode ? "bg-[#202023] text-white" : "bg-[#f5e9da] text-black"
      } transition-colors duration-300 overflow-hidden`}
    >
      {/* NAVBAR STICKY (compartida) */}
      <Navbar />

      {/* CONTENIDO */}
      <div className="w-full max-w-4xl mx-auto px-6 py-10 mt-16">
        {/* SOBRE MÍ (ajustado según solicitud) */}
        <section className="mb-24">
          {/* Encabezado alineado a la izquierda y sin "Resumen" */}
          <div className="mb-8 animate-fade-in-right">
            <h1 className={`text-4xl md:text-3xl font-extrabold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{t('about.me.title')}</h1>
            <div className={`h-1 w-24 md:w-34 mb-8 ${darkMode ? "bg-neutral-600" : "bg-neutral-600"}`}></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Columna izquierda - Imagen */}
            <div className="flex justify-center lg:justify-start">
              <div className={`relative w-90 h-125 rounded-2xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} animate-pulse-fade-in`}>
                <Image
                  src="/images/info.jpeg"
                  alt="Foto de información"
                  fill
                  sizes="(min-width: 1024px) 20rem, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Columna derecha - Texto */}
            <div className="space-y-6">
              <h4 className={`text-3xl font-extrabold ${darkMode ? 'text-white' : 'text-black'} animate-fade-in-right`}>Julián Moreno</h4>

              <div className="lg:max-w-[60ch]">
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-sm md:text-base leading-relaxed animate-fade-in-right`}>
                  {t('about.me.p1')}
                </p>
              </div>
              <div className="lg:max-w-[60ch]">
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-sm md:text-base leading-relaxed animate-fade-in-right`}>
                  {t('about.me.p1b')}
                </p>
              </div>
              <div className="lg:max-w-[60ch]">
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-sm md:text-base leading-relaxed animate-fade-in-right`}>
                  {t('about.me.p2')}
                </p>
              </div>

              {/* Botón Mi portafolio (estilo igual al botón de inicio) */}
              <div className="pt-2 animate-fade-in-right">
                <a
                  href="/proyectos"
                  className={`group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-0.5 ${
                    darkMode
                      ? 'bg-teal-300 text-black hover:bg-teal-400'
                      : 'bg-teal-600 text-white hover:bg-teal-500'
                  }`}
                >
                  <span>Mi portafolio</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* HABILIDADES TÉCNICAS - DISEÑO COMO LA IMAGEN */}
        <section className="mb-16">
          <div className="mb-10 animate-fade-in-right">
            <h2 className={`text-3xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {t('about.skills.title')}
            </h2>
            <div className={`h-1 w-32 md:w-83 mb-8 ${darkMode ? "bg-neutral-600" : "bg-neutral-600"}`}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* FRONTEND */}
            <div className={`rounded-2xl p-6 transform transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-lg animate-pulse-fade-in ${
              darkMode 
                ? "bg-[#2a2d3a] border border-gray-700" 
                : "bg-[#e8e9ed] border border-gray-300"
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`text-2xl ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>⚙️</div>
                <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Frontend
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {frontendSkills.map((skill, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:scale-105 ${
                      darkMode 
                        ? "bg-[#1e2028] hover:bg-[#252830]" 
                        : "bg-white hover:bg-gray-50"
                    }`}
                  >
                    <Image src={skill.logo} alt={skill.name} width={24} height={24} />
                    <span className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* BACKEND */}
            <div className={`rounded-2xl p-6 transform transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-lg animate-pulse-fade-in ${
              darkMode 
                ? "bg-[#2a2d3a] border border-gray-700" 
                : "bg-[#e8e9ed] border border-gray-300"
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`text-2xl ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>dj</div>
                <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Backend
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {backendSkills.map((skill, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:scale-105 ${
                      darkMode 
                        ? "bg-[#1e2028] hover:bg-[#252830]" 
                        : "bg-white hover:bg-gray-50"
                    }`}
                  >
                    <Image src={skill.logo} alt={skill.name} width={24} height={24} />
                    <span className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="w-full max-w-2xl mx-auto mt-20 pb-10 text-center text-sm text-gray-500 px-6">
        © {new Date().getFullYear()} Julián Moreno. {t('footer.rights')}
      </footer>
    </main>
  );
}