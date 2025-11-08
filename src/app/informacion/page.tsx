"use client";

import { useState } from 'react';
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
      } transition-colors duration-300`}
    >
      {/* NAVBAR STICKY (compartida) */}
      <Navbar />

      {/* CONTENIDO */}
      <div className="w-full max-w-4xl mx-auto px-6 py-10 mt-16">
        {/* SOBRE MÍ */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,1fr] gap-8 items-start">
            {/* Columna izquierda - Texto */}
            <div className="space-y-6">
              <div>
                <h2 className={`text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {t('about.me.title')}
                </h2>
              </div>

              <div className="lg:max-w-[29rem]">
                <p className={`leading-relaxed text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('about.me.p1')}
                </p>
              </div>

              {/* Nuevo párrafo aspiracional, alineado y con espacio inferior */}
              <div className="lg:max-w-[29rem] mt-4">
                <p className={`leading-relaxed text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t('about.me.p1b')}
                </p>
              </div>
            </div>

            {/* Columna derecha - Espacio para imagen */}
            <div className="flex justify-center items-start lg:justify-end">
              <div className={`w-80 h-80 rounded-2xl overflow-hidden lg:-mt-80 ${
                darkMode ? 'bg-gray-800' : 'bg-gray-200'
              }`}>
                <img src="/images/info.jpeg" alt="Foto de información" className="w-110 h-115 object-cover" />
              </div>
            </div>
          </div>

          {/* Párrafo extendido que ocupa todo el ancho */}
          <div className="mt-12">
            <p className={`leading-relaxed text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('about.me.p2')}
            </p>
          </div>

          {/* Botón Mi Portafolio alineado a la izquierda */}
          <div className="mt-8">
            <button
              onClick={() => window.location.href = '/proyectos'}
              className={`px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                darkMode
                  ? 'bg-purple-600 hover:bg-purple-700'
                  : 'bg-purple-600 hover:bg-purple-700'
              }`}
            >
              {t('about.portfolio.button')}
            </button>
          </div>
        </section>

        {/* HABILIDADES TÉCNICAS - DISEÑO COMO LA IMAGEN */}
        <section className="mb-16">
          <div className="mb-10">
            <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {t('about.skills.title')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* FRONTEND */}
            <div className={`rounded-2xl p-6 transform transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-lg ${
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
                    <img src={skill.logo} alt={skill.name} className="w-6 h-6" />
                    <span className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* BACKEND */}
            <div className={`rounded-2xl p-6 transform transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-lg ${
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
                    <img src={skill.logo} alt={skill.name} className="w-6 h-6" />
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