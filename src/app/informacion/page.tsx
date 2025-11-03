"use client";

import Navbar from '../components/Navbar';
import { useTheme } from '../components/ThemeProvider';
import { useLanguage } from '../components/LanguageProvider';
/* no collapsibles */

export default function InformacionPage() {
  const { darkMode } = useTheme();
  const { t } = useLanguage();

  return (
    <main
      className={`min-h-screen ${
        darkMode ? "bg-[#202023] text-white" : "bg-[#f5e9da] text-black"
      } transition-colors duration-300`}
    >
      {/* NAVBAR STICKY (compartida) */}
      <Navbar />

      {/* CONTENIDO */}
      <div className="w-full max-w-2xl mx-auto px-6 py-10 mt-16">
        {/* SOBRE MÍ */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-0.5">{t('about.me.title')}</h2>
          {/* Línea decorativa gris */}
          <div className={`w-22 h-1 mb-6 ${darkMode ? "bg-neutral-600" : "bg-gray-400"}`}></div>
          
          <div className="mb-8">
            <p className={`leading-relaxed text-lg mb-4 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>{t('about.me.p1')}</p>
            <p className={`leading-relaxed text-lg ${darkMode ? "text-gray-300" : "text-gray-700"}`}>{t('about.me.p2')}</p>
          </div>
          
          {/* Botón Mi Portafolio */}
          <div className="flex justify-center mb-12">
            <div
              onClick={() => window.location.href = '/proyectos'}
              className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-0.5 cursor-pointer ${
                darkMode
                  ? "bg-teal-300 text-black hover:bg-teal-400"
                  : "bg-teal-600 text-black hover:bg-teal-500"
              }`}
            >
              {t('about.portfolio.button')}
              <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
            </div>
          </div>
        </section>

        {/* ESTADÍSTICAS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className={`rounded-xl p-6 text-center transition-all duration-300 hover:scale-[1.02] hover:border-teal-500 ${
            darkMode ? "bg-gray-900/50 border border-gray-800" : "bg-gray-50 border border-gray-200"
          }`}>
            <h3 className="text-4xl font-bold mb-2">3+</h3>
            <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>{t('about.stats.experience')}</p>
          </div>
          
          <div className={`rounded-xl p-6 text-center transition-all duration-300 hover:scale-[1.02] hover:border-teal-500 ${
            darkMode ? "bg-gray-900/50 border border-gray-800" : "bg-gray-50 border border-gray-200"
          }`}>
            <h3 className="text-4xl font-bold mb-2">15+</h3>
            <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>{t('about.stats.projects')}</p>
          </div>
          
          <div className={`rounded-xl p-6 text-center transition-all duration-300 hover:scale-[1.02] hover:border-teal-500 ${
            darkMode ? "bg-gray-900/50 border border-gray-800" : "bg-gray-50 border border-gray-200"
          }`}>
            <h3 className="text-4xl font-bold mb-2">12+</h3>
            <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>{t('about.stats.tech')}</p>
          </div>
        </div>

        {/* HABILIDADES TÉCNICAS */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-2">{t('about.skills.title')}</h2>
          {/* Línea decorativa gris */}
          <div className={`w-52 h-1 mb-10 ${darkMode ? "bg-neutral-600" : "bg-gray-400"}`}></div>
          
          <div className="grid grid-cols-1 gap-8">
            {/* Frontend Skills */}
            <div className={`rounded-xl p-6 ${
              darkMode ? "bg-[#1a1b26] border border-gray-800" : "bg-white border border-gray-200"
            } transition-all duration-300 hover:scale-[1.01] hover:border-teal-500`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="text-3xl text-blue-500">
                  <span className="font-bold">⚛️ {t('about.skills.frontend')}</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className={`p-3 rounded-lg ${darkMode ? "bg-[#2d3748]/60" : "bg-gray-100"} transition-all duration-300 hover:scale-[1.02]`}>
                  <div className="flex flex-col items-center gap-2 text-center w-full">
                    <span className="text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-6 h-6" fill="currentColor">
                        <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/>
                      </svg>
                    </span>
                    <span className="text-sm md:text-base break-words">HTML</span>
                  </div>
                </div>
                
                <div className={`p-3 rounded-lg ${darkMode ? "bg-[#2d3748]/60" : "bg-gray-100"} transition-all duration-300 hover:scale-[1.02]`}>
                  <div className="flex flex-col items-center gap-2 text-center w-full">
                    <span className="text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-6 h-6" fill="currentColor">
                        <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/>
                      </svg>
                    </span>
                    <span className="text-sm md:text-base break-words">CSS</span>
                  </div>
                </div>
                
                <div className={`p-3 rounded-lg ${darkMode ? "bg-[#2d3748]/60" : "bg-gray-100"} transition-all duration-300 hover:scale-[1.02]`}>
                  <div className="flex flex-col items-center gap-2 text-center w-full">
                    <span className="text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-6 h-6" fill="currentColor">
                        <path d="M301.84 378.92c-.3.6-.6 1.08 0 0zm249.13-87a131.16 131.16 0 0 0-58 13.5c-5.9-11.9-12-22.3-13-30.1-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.3-6.7-24 2.5-25.29 5.9a122.83 122.83 0 0 0-5.3 19.1c-2.3 11.7-25.79 53.5-39.09 75.3-4.4-8.5-8.1-16-8.9-22-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.29-6.7-24 2.5-25.3 5.9-2.7 11.4-5.3 19.1-33.89 77.3-42.08 95.4c-4.2 9.2-7.8 16.6-10.4 21.6-.4.8-.7 1.3-.9 1.7.3-.5.5-1 .5-.8-2.2 4.3-3.5 6.7-3.5 6.7v.1c-1.7 3.2-3.6 6.1-4.5 6.1-.6 0-1.9-8.4.3-19.9 4.7-24.2 15.8-61.8 15.7-63.1-.1-.7 2.1-7.2-7.3-10.7-9.1-3.3-12.4 2.2-13.2 2.2s-1.4 2-1.4 2 10.1-42.4-19.39-42.4c-18.3 0-43.69 20.1-56.18 38.4a1549.86 1549.86 0 0 0-79-42.5c-28.3-14.6-57.51-28.8-57-51.4.15-7.3 2.8-26.6 47.5-50.3 36.5-19.4 65.69-14.1 70.79-22.2 7.2-11.5-15.5-31.5-53.09-33.8-21.51-1.4-44.19 3.8-61.88 13.1-50.5 26.5-81.2 79.9-78.2 142.7a138.55 138.55 0 0 0 21.41 70.4c-3.29 1.8-6.2 3.4-8.9 4.9-32.5 17-111.59 60.7-133.49 112.2-24.69 58.1 3.9 99.8 22.6 105.5 58 17.8 117.58-14.3 149.58-67.1 32-52.8 28.3-121.5 13.4-153l-.5-.9 17.41-10.2c11.2-6.6 22.5-12.7 32.21-17.8-5.4 14.8-9.31 32.5-11.31 58.1-2.4 30.1 9.9 68.8 26.1 84.1 7.1 6.7 15.7 6.7 21.1 6.7 18.8 0 27.3-15.6 36.71-34.2 11.5-22.7 21.8-49 21.8-49s-12.9 71.5 22.19 71.5c12.8 0 25.6-16.6 31.31-25v.1s.3-.6.9-1.8c1.29-2 1.9-3.1 1.9-3.1v-.2c5.1-8.9 16.4-29.2 33.4-62.7 21.9-43.2 42.9-97.1 42.9-97.1s2 13.1 8.3 34.9c3.7 12.9 11.7 27 18 40.6-5.1 7.1-8.2 11.1-8.2 11.1l.1.1c-4.1 5.4-8.6 11.3-13.4 17-17.2 20.6-37.8 44-40.6 50.8-3.3 8.1-2.5 14 3.8 18.8 4.5 3.4 12.5 4 20.8 3.4 15.2-1.1 25.9-4.8 31.2-7.1 8.2-2.9 17.8-7.4 26.8-14 16.6-12.1 26.6-29.4 25.7-52.4-.5-12.6-4.6-25.1-9.6-37 1.5-2.1 3-4.3 4.5-6.5 25.9-37.9 46-79.5 46-79.5s2 13.1 8.3 34.9c3.2 11 9.6 23 15.3 34.7-24.9 20.3-40.5 44-45.9 59.4-10 28.8-2.2 41.8 12.5 44.8 6.7 1.4 16.1-1.7 23.2-4.7 8.8-2.9 19.4-7.5 29.3-14.5 16.6-12.1 32.6-29 31.7-51.9-.4-10.5-3.3-20.9-7.1-30.9 20.9-8.7 48-13.5 82.5-9.5 74 8.5 88.5 54.9 85.7 74.3-2.8 19.4-18.4 30.1-23.6 33.3-5.2 3.2-6.8 4.3-6.4 6.7.7 3.4 3 3.3 7.5 2.5 6.1-1 39.2-15.9 40.6-52 1.9-45.9-41.5-96.5-118.8-96.1-31.7.2-64.3 9-88.2 22.1-1.4-.8-2.9-1.6-4.3-2.3-63.1-33.8-180.3-57.7-175-103.1 1.9-16.4 15.4-59.5 104.1-111.8 80.1-47.2 144.2-34.3 155.2-5.4 15.8 41.3-34.2 118.1-117.1 129.1-31.6 4.2-48.2-8.7-52.3-13.3-4.4-4.8-5-5-6.7-4.1-2.7 1.5-1 5.7 0 8.3 2.5 6.5 13 18.1 30.7 23.8 15.6 5 53.6 7.8 99.5-9.6 51.4-19.4 91.5-73.3 79.7-118.4-11.8-45.5-89.5-60.4-162.7-35.1-43.6 15-90.8 38.7-124.8 69.6-40.4 36.9-46.8 69-44.1 82.3 9.4 48.8 76.5 80.6 103.2 104.1-1.3.7-2.6 1.4-3.8 2.1-13.8 6.9-66.5 34.4-79.7 63.6-15 33.3 2.4 57.2 14 60.4 35.9 9.9 72.8-7.9 92.6-37.3 19.7-29.4 17.3-67.6 8.2-85.1 0-.1-.1-.2-.1-.3 7.8-4.6 15.7-9.5 23.6-14.3 15.2-9.2 30.2-17.7 43.3-22.6 23.2 38.5 43.6 55.2 52.5 61.7-7.1 21.5-6.1 43.8 3.3 55.1 4.2 5.1 13.8 6.5 18.5 6.5 16.5 0 24-13.7 32.2-30 10.2-20.1 19.2-43.5 19.2-43.5s-11.3 63 19.6 63c11.3 0 22.6-14.6 27.7-22.1v.1s.3-.5.9-1.6c1.2-1.9 1.9-3 1.9-3v-.2c4.5-7.8 14.6-25.8 29.6-55.3 19.5-38.3 38.1-86.3 38.1-86.3s1.7 11.7 7.4 31c3.3 11.3 10.4 23.8 16 35.9-4.6 6.6-7.5 10.4-7.5 10.4l.1.1c-3.7 4.9-7.8 10.2-12.1 15.3-15.4 18.4-33.7 39.5-36.3 45.5-2.9 7.2-2.2 12.5 3.4 16.7 4.1 3 11.1 3.5 18.6 3 13.6-1 23.2-4.3 27.9-6.3 7.4-2.6 15.9-6.6 24-12.5 14.9-10.8 23.8-26.2 23-46.7-.4-11.2-4.1-22.4-8.6-33 13.1-5.5 30.1-8.5 51.8-6 46.4 5.3 55.6 34.3 53.8 46.4-1.8 12.1-11.5 18.8-14.8 20.8-3.2 2-4.2 2.7-4 4.2.4 2.1 1.9 2 4.7 1.6 3.8-.7 24.5-9.9 25.4-32.5 1.4-28.6-26.1-60.1-74.4-59.8zm-370.1 89.7c-15.4 16.8-37 23.2-46.2 17.9-10-5.8-6-30.6 12.9-48.4 11.5-10.8 26.3-20.9 36.2-27 2.2-1.4 5.5-3.4 9.5-5.8.7-.4 1.1-.7 1.1-.7l2.4-1.5c7 25.9.3 48.6-15.9 65.5zm112.2-56.2c-5.4 13.1-16.5 46.6-23.3 44.8-5.8-1.5-9.4-26.9-1.2-51.9 4.1-12.6 13-27.7 18.1-33.5 8.3-9.4 17.5-12.5 19.7-8.7 2.8 5-10.2 41.3-13.3 49.3zm89.1 40.3c-2.3 1.2-4.4 2-5.3 1.4-.7-.4.9-2 .9-2s11.1-11.9 15.5-17.4c2.5-3.2 5.5-7 8.7-11.2v1.2c0 14.5-13.8 24.2-19.8 28zm67.9-15.5c-1.7-1.2-1.4-5.2 4.3-17.7 2.2-4.9 7.4-13.1 16.2-21 1 3.2 1.7 6.3 1.6 9.2-.1 19.3-13.9 26.5-22.1 29.5z"/>
                      </svg>
                    </span>
                    <span className="text-sm md:text-base break-words">SCSS</span>
                  </div>
                </div>
                
                <div className={`p-3 rounded-lg ${darkMode ? "bg-[#2d3748]/60" : "bg-gray-100"} transition-all duration-300 hover:scale-[1.02]`}>
                  <div className="flex flex-col items-center gap-2 text-center w-full">
                    <span className="text-yellow-500">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6" fill="currentColor">
                        <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/>
                      </svg>
                    </span>
                    <span className="text-sm md:text-base break-words">JavaScript</span>
                  </div>
                </div>
                
                <div className={`p-3 rounded-lg ${darkMode ? "bg-[#2d3748]/60" : "bg-gray-100"} transition-all duration-300 hover:scale-[1.02]`}>
                  <div className="flex flex-col items-center gap-2 text-center w-full">
                    <span className="text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6" fill="currentColor">
                        <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/>
                      </svg>
                    </span>
                    <span className="text-sm md:text-base break-words">TypeScript</span>
                  </div>
                </div>
                
                <div className={`p-3 rounded-lg ${darkMode ? "bg-[#2d3748]/60" : "bg-gray-100"} transition-all duration-300 hover:scale-[1.02]`}>
                  <div className="flex flex-col items-center gap-2 text-center w-full">
                    <span className="text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
                      </svg>
                    </span>
                    <span className="text-sm md:text-base break-words">Tailwind</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Backend Skills */}
            <div className={`rounded-xl p-6 ${
              darkMode ? "bg-[#1a1b26] border border-gray-800" : "bg-white border border-gray-200"
            } transition-all duration-300 hover:scale-[1.01] hover:border-teal-500`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="text-3xl text-blue-500">
                  <span className="font-bold">🔧 {t('about.skills.backend')}</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className={`p-3 rounded-lg ${darkMode ? "bg-[#2d3748]/60" : "bg-gray-100"} transition-all duration-300 hover:scale-[1.02]`}>
                  <div className="flex flex-col items-center gap-2 text-center w-full">
                    <span className="text-green-500">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6" fill="currentColor">
                        <path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"/>
                      </svg>
                    </span>
                    <span className="text-sm md:text-base break-words">Node.js</span>
                  </div>
                </div>
                
                <div className={`p-3 rounded-lg ${darkMode ? "bg-[#2d3748]/60" : "bg-gray-100"} transition-all duration-300 hover:scale-[1.02]`}>
                  <div className="flex flex-col items-center gap-2 text-center w-full">
                    <span className="text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6" fill="currentColor">
                        <path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"/>
                      </svg>
                    </span>
                    <span className="text-sm md:text-base break-words">Python</span>
                  </div>
                </div>
                
                <div className={`p-3 rounded-lg ${darkMode ? "bg-[#2d3748]/60" : "bg-gray-100"} transition-all duration-300 hover:scale-[1.02]`}>
                  <div className="flex flex-col items-center gap-2 text-center w-full">
                    <span className="text-orange-500">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-6 h-6" fill="currentColor">
                        <path d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"/>
                      </svg>
                    </span>
                    <span className="text-sm md:text-base break-words">Java</span>
                  </div>
                </div>
                
                <div className={`p-3 rounded-lg ${darkMode ? "bg-[#2d3748]/60" : "bg-gray-100"} transition-all duration-300 hover:scale-[1.02]`}>
                  <div className="flex flex-col items-center gap-2 text-center w-full">
                    <span className="text-green-500">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6" fill="currentColor">
                        <path d="M248 504C111.25 504 0 393.25 0 256S111.25 8 248 8s248 110.75 248 248-111.25 248-248 248zm-96-312c-13.25 0-24 10.75-24 24s10.75 24 24 24 24-10.75 24-24-10.75-24-24-24zm40 56c-13.25 0-24 10.75-24 24s10.75 24 24 24 24-10.75 24-24-10.75-24-24-24zm40 56c-13.25 0-24 10.75-24 24s10.75 24 24 24 24-10.75 24-24-10.75-24-24-24zm40 56c-13.25 0-24 10.75-24 24s10.75 24 24 24 24-10.75 24-24-10.75-24-24-24zm96-160c-13.25 0-24 10.75-24 24s10.75 24 24 24 24-10.75 24-24-10.75-24-24-24zm-40 56c-13.25 0-24 10.75-24 24s10.75 24 24 24 24-10.75 24-24-10.75-24-24-24zm-40 56c-13.25 0-24 10.75-24 24s10.75 24 24 24 24-10.75 24-24-10.75-24-24-24zm-40 56c-13.25 0-24 10.75-24 24s10.75 24 24 24 24-10.75 24-24-10.75-24-24-24zm-40 56c-13.25 0-24 10.75-24 24s10.75 24 24 24 24-10.75 24-24-10.75-24-24-24z"/>
                      </svg>
                    </span>
                    <span className="text-sm md:text-base break-words">MongoDB</span>
                  </div>
                </div>
                
                <div className={`p-3 rounded-lg ${darkMode ? "bg-[#2d3748]/60" : "bg-gray-100"} transition-all duration-300 hover:scale-[1.02]`}>
                  <div className="flex flex-col items-center gap-2 text-center w-full">
                    <span className="text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6" fill="currentColor">
                        <path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"/>
                      </svg>
                    </span>
                    <span className="text-sm md:text-base break-words">MySQL</span>
                  </div>
                </div>
                
                <div className={`p-3 rounded-lg ${darkMode ? "bg-[#2d3748]/60" : "bg-gray-100"} transition-all duration-300 hover:scale-[1.02]`}>
                  <div className="flex flex-col items-center gap-2 text-center w-full">
                    <span className="text-purple-500">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-6 h-6" fill="currentColor">
                        <path d="M414.8 40.79L286.8 488.8C281.9 505.8 264.2 515.6 247.2 510.8C230.2 505.9 220.4 488.2 225.2 471.2L353.2 23.21C358.1 6.216 375.8-3.624 392.8 1.232C409.8 6.087 419.6 23.8 414.8 40.79H414.8zM518.6 121.4L630.6 233.4C643.1 245.9 643.1 266.1 630.6 278.6L518.6 390.6C506.1 403.1 485.9 403.1 473.4 390.6C460.9 378.1 460.9 357.9 473.4 345.4L562.7 256L473.4 166.6C460.9 154.1 460.9 133.9 473.4 121.4C485.9 108.9 506.1 108.9 518.6 121.4V121.4zM166.6 166.6L77.25 256L166.6 345.4C179.1 357.9 179.1 378.1 166.6 390.6C154.1 403.1 133.9 403.1 121.4 390.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4L121.4 121.4C133.9 108.9 154.1 108.9 166.6 121.4C179.1 133.9 179.1 154.1 166.6 166.6V166.6z"/>
                      </svg>
                    </span>
                    <span className="text-sm md:text-base break-words">APIs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HERRAMIENTAS Y OTROS */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-2">{t('about.tools.title')}</h2>
          {/* Línea decorativa gris */}
          <div className={`w-52 h-1 mb-6 ${darkMode ? "bg-neutral-600" : "bg-gray-400"}`}></div>
          
          <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}>
            <div className={`p-4 rounded-lg text-center transition-all duration-300 hover:scale-[1.01] hover:border-teal-500 ${
              darkMode ? "bg-[#1a1b26] border border-gray-800" : "bg-white border border-gray-200"
            }`}>
              <div className="text-2xl mb-2">🔄</div>
              <div>Git</div>
            </div>
            <div className={`p-4 rounded-lg text-center transition-all duration-300 hover:scale-[1.01] hover:border-teal-500 ${
              darkMode ? "bg-[#1a1b26] border border-gray-800" : "bg-white border border-gray-200"
            }`}>
              <div className="text-2xl mb-2">🐳</div>
              <div>Docker</div>
            </div>
            <div className={`p-4 rounded-lg text-center transition-all duration-300 hover:scale-[1.01] hover:border-teal-500 ${
              darkMode ? "bg-[#1a1b26] border border-gray-800" : "bg-white border border-gray-200"
            }`}>
              <div className="text-2xl mb-2">💻</div>
              <div>VS Code</div>
            </div>
            <div className={`p-4 rounded-lg text-center transition-all duration-300 hover:scale-[1.01] hover:border-teal-500 ${
              darkMode ? "bg-[#1a1b26] border border-gray-800" : "bg-white border border-gray-200"
            }`}>
              <div className="text-2xl mb-2">🎨</div>
              <div>Figma</div>
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