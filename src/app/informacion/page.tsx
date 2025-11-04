"use client";

import Navbar from '@/components/Navbar';
import { useTheme } from '@/components/ThemeProvider';
import { useLanguage } from '@/components/LanguageProvider';
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
        <section className="mb-16 text-center">
          <h2 className="text-2xl font-bold mb-1">{t('about.me.title')}</h2>
          {/* Línea decorativa gris pegada */}
          <div className={`w-16 h-0.5 mx-auto mb-8 ${darkMode ? "bg-neutral-600" : "bg-gray-400"}`}></div>
          
          <div className="mb-8 max-w-3xl mx-auto">
            <p className={`leading-relaxed text-lg mb-4 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>{t('about.me.p1')}</p>
            <p className={`leading-relaxed text-lg ${darkMode ? "text-gray-300" : "text-gray-700"}`}>{t('about.me.p2')}</p>
          </div>
          
          {/* Botón Mi Portafolio */}
          <div className="flex justify-center mb-12">
            <div
              onClick={() => window.location.href = '/proyectos'}
              className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold transition-all duration-300 transform hover:scale-[1.03] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-500/30 cursor-pointer ${
                darkMode
                  ? "bg-teal-300 text-black hover:bg-teal-400"
                  : "bg-teal-600 text-white hover:bg-teal-500"
              }`}
            >
              {t('about.portfolio.button')}
            </div>
          </div>
        </section>

        {/* ESTADÍSTICAS */}
        <div className="flex justify-center mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl">
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
        </div>

        {/* HABILIDADES TÉCNICAS */}
        <section className="mb-16 text-center">
          <h2 className="text-2xl font-bold mb-1">{t('about.skills.title')}</h2>
          {/* Línea decorativa gris pegada */}
          <div className={`w-20 h-0.5 mx-auto mb-10 ${darkMode ? "bg-neutral-600" : "bg-gray-400"}`}></div>
          
          <div className="grid grid-cols-1 gap-8">
            {/* Frontend Skills - Diseño Minimalista */}
            <div className={`rounded-xl p-6 ${
              darkMode ? "bg-[#1a1b26] border border-gray-800" : "bg-white border border-gray-200"
            } transition-all duration-300 hover:scale-[1.01] hover:border-teal-500`}>
              <div className="flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="text-2xl mb-2">🎨</div>
                  <h3 className="text-lg font-semibold text-blue-500">{t('about.skills.frontend')}</h3>
                  <div className={`w-16 h-0.5 mx-auto mt-2 ${darkMode ? "bg-neutral-600" : "bg-gray-400"}`}></div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div className={`p-3 rounded-lg transition-all duration-300 hover:scale-[1.02] ${
                  darkMode ? "bg-gray-800/50 hover:bg-gray-700/50" : "bg-white/70 hover:bg-white"
                } backdrop-blur-sm border border-transparent hover:border-blue-300`}>
                  <div className="flex flex-col items-center gap-2 text-center">
                    <span className="text-blue-500 text-lg">📄</span>
                    <span className="text-sm font-medium">HTML</span>
                  </div>
                </div>
                
                <div className={`p-3 rounded-lg transition-all duration-300 hover:scale-[1.02] ${
                  darkMode ? "bg-gray-800/50 hover:bg-gray-700/50" : "bg-white/70 hover:bg-white"
                } backdrop-blur-sm border border-transparent hover:border-blue-300`}>
                  <div className="flex flex-col items-center gap-2 text-center">
                    <span className="text-blue-500 text-lg">🎨</span>
                    <span className="text-sm font-medium">CSS</span>
                  </div>
                </div>
                
                <div className={`p-3 rounded-lg transition-all duration-300 hover:scale-[1.02] ${
                  darkMode ? "bg-gray-800/50 hover:bg-gray-700/50" : "bg-white/70 hover:bg-white"
                } backdrop-blur-sm border border-transparent hover:border-blue-300`}>
                  <div className="flex flex-col items-center gap-2 text-center">
                    <span className="text-blue-500 text-lg">🎭</span>
                    <span className="text-sm font-medium">SCSS</span>
                  </div>
                </div>
                
                <div className={`p-3 rounded-lg transition-all duration-300 hover:scale-[1.02] ${
                  darkMode ? "bg-gray-800/50 hover:bg-gray-700/50" : "bg-white/70 hover:bg-white"
                } backdrop-blur-sm border border-transparent hover:border-yellow-300`}>
                  <div className="flex flex-col items-center gap-2 text-center">
                    <span className="text-yellow-500 text-lg">⚡</span>
                    <span className="text-sm font-medium">JavaScript</span>
                  </div>
                </div>
                
                <div className={`p-3 rounded-lg transition-all duration-300 hover:scale-[1.02] ${
                  darkMode ? "bg-gray-800/50 hover:bg-gray-700/50" : "bg-white/70 hover:bg-white"
                } backdrop-blur-sm border border-transparent hover:border-blue-300`}>
                  <div className="flex flex-col items-center gap-2 text-center">
                    <span className="text-blue-500 text-lg">🔷</span>
                    <span className="text-sm font-medium">TypeScript</span>
                  </div>
                </div>
                
                <div className={`p-3 rounded-lg transition-all duration-300 hover:scale-[1.02] ${
                  darkMode ? "bg-gray-800/50 hover:bg-gray-700/50" : "bg-white/70 hover:bg-white"
                } backdrop-blur-sm border border-transparent hover:border-cyan-300`}>
                  <div className="flex flex-col items-center gap-2 text-center">
                    <span className="text-cyan-500 text-lg">🎯</span>
                    <span className="text-sm font-medium">Tailwind</span>
                  </div>
                </div>
                
                <div className={`p-3 rounded-lg transition-all duration-300 hover:scale-[1.02] ${
                  darkMode ? "bg-gray-800/50 hover:bg-gray-700/50" : "bg-white/70 hover:bg-white"
                } backdrop-blur-sm border border-transparent hover:border-green-300`}>
                  <div className="flex flex-col items-center gap-2 text-center">
                    <span className="text-green-500 text-lg">⚛️</span>
                    <span className="text-sm font-medium">React</span>
                  </div>
                </div>
                
                <div className={`p-3 rounded-lg transition-all duration-300 hover:scale-[1.02] ${
                  darkMode ? "bg-gray-800/50 hover:bg-gray-700/50" : "bg-white/70 hover:bg-white"
                } backdrop-blur-sm border border-transparent hover:border-blue-300`}>
                  <div className="flex flex-col items-center gap-2 text-center">
                    <span className="text-blue-500 text-lg">🌀</span>
                    <span className="text-sm font-medium">Next.js</span>
                  </div>
                </div>
                
                <div className={`p-3 rounded-lg transition-all duration-300 hover:scale-[1.02] ${
                  darkMode ? "bg-gray-800/50 hover:bg-gray-700/50" : "bg-white/70 hover:bg-white"
                } backdrop-blur-sm border border-transparent hover:border-purple-300`}>
                  <div className="flex flex-col items-center gap-2 text-center">
                    <span className="text-purple-500 text-lg">📱</span>
                    <span className="text-sm font-medium">React Native</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Backend Skills */}
            <div className={`rounded-xl p-6 ${
              darkMode ? "bg-[#1a1b26] border border-gray-800" : "bg-white border border-gray-200"
            } transition-all duration-300 hover:scale-[1.01] hover:border-teal-500`}>
              <div className="flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="text-2xl mb-2">🔧</div>
                  <h3 className="text-lg font-semibold text-blue-500">{t('about.skills.backend')}</h3>
                  <div className={`w-16 h-0.5 mx-auto mt-2 ${darkMode ? "bg-neutral-600" : "bg-gray-400"}`}></div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div className={`p-3 rounded-lg transition-all duration-300 hover:scale-[1.02] ${
                  darkMode ? "bg-gray-800/50 hover:bg-gray-700/50" : "bg-white/70 hover:bg-white"
                } backdrop-blur-sm border border-transparent hover:border-green-300`}>
                  <div className="flex flex-col items-center gap-2 text-center">
                    <span className="text-green-500 text-lg">🟢</span>
                    <span className="text-sm font-medium">Node.js</span>
                  </div>
                </div>
                
                <div className={`p-3 rounded-lg transition-all duration-300 hover:scale-[1.02] ${
                  darkMode ? "bg-gray-800/50 hover:bg-gray-700/50" : "bg-white/70 hover:bg-white"
                } backdrop-blur-sm border border-transparent hover:border-blue-300`}>
                  <div className="flex flex-col items-center gap-2 text-center">
                    <span className="text-blue-500 text-lg">🐍</span>
                    <span className="text-sm font-medium">Python</span>
                  </div>
                </div>
                
                <div className={`p-3 rounded-lg transition-all duration-300 hover:scale-[1.02] ${
                  darkMode ? "bg-gray-800/50 hover:bg-gray-700/50" : "bg-white/70 hover:bg-white"
                } backdrop-blur-sm border border-transparent hover:border-orange-300`}>
                  <div className="flex flex-col items-center gap-2 text-center">
                    <span className="text-orange-500 text-lg">☕</span>
                    <span className="text-sm font-medium">Java</span>
                  </div>
                </div>
                
                <div className={`p-3 rounded-lg transition-all duration-300 hover:scale-[1.02] ${
                  darkMode ? "bg-gray-800/50 hover:bg-gray-700/50" : "bg-white/70 hover:bg-white"
                } backdrop-blur-sm border border-transparent hover:border-green-300`}>
                  <div className="flex flex-col items-center gap-2 text-center">
                    <span className="text-green-500 text-lg">🍃</span>
                    <span className="text-sm font-medium">MongoDB</span>
                  </div>
                </div>
                
                <div className={`p-3 rounded-lg transition-all duration-300 hover:scale-[1.02] ${
                  darkMode ? "bg-gray-800/50 hover:bg-gray-700/50" : "bg-white/70 hover:bg-white"
                } backdrop-blur-sm border border-transparent hover:border-blue-300`}>
                  <div className="flex flex-col items-center gap-2 text-center">
                    <span className="text-blue-500 text-lg">🗄️</span>
                    <span className="text-sm font-medium">MySQL</span>
                  </div>
                </div>
                
                <div className={`p-3 rounded-lg transition-all duration-300 hover:scale-[1.02] ${
                  darkMode ? "bg-gray-800/50 hover:bg-gray-700/50" : "bg-white/70 hover:bg-white"
                } backdrop-blur-sm border border-transparent hover:border-purple-300`}>
                  <div className="flex flex-col items-center gap-2 text-center">
                    <span className="text-purple-500 text-lg">🔗</span>
                    <span className="text-sm font-medium">APIs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HERRAMIENTAS Y OTROS */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold mb-2">{t('about.tools.title')}</h2>
            <div className={`w-24 h-0.5 mx-auto ${darkMode ? "bg-neutral-600" : "bg-gray-400"}`}></div>
          </div>
          
          <div className={`grid grid-cols-2 sm:grid-cols-4 gap-3 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}>
            <div className={`p-4 rounded-lg text-center transition-all duration-300 hover:scale-[1.01] hover:border-teal-500 ${
              darkMode ? "bg-[#1a1b26] border border-gray-800" : "bg-white border border-gray-200"
            }`}>
              <div className="text-2xl mb-2">⚡</div>
              <div className="text-sm font-medium">VS Code</div>
            </div>
            
            <div className={`p-4 rounded-lg text-center transition-all duration-300 hover:scale-[1.01] hover:border-teal-500 ${
              darkMode ? "bg-[#1a1b26] border border-gray-800" : "bg-white border border-gray-200"
            }`}>
              <div className="text-2xl mb-2">🌿</div>
              <div className="text-sm font-medium">Git</div>
            </div>
            
            <div className={`p-4 rounded-lg text-center transition-all duration-300 hover:scale-[1.01] hover:border-teal-500 ${
              darkMode ? "bg-[#1a1b26] border border-gray-800" : "bg-white border border-gray-200"
            }`}>
              <div className="text-2xl mb-2">🐙</div>
              <div className="text-sm font-medium">GitHub</div>
            </div>
            
            <div className={`p-4 rounded-lg text-center transition-all duration-300 hover:scale-[1.01] hover:border-teal-500 ${
              darkMode ? "bg-[#1a1b26] border border-gray-800" : "bg-white border border-gray-200"
            }`}>
              <div className="text-2xl mb-2">🚀</div>
              <div className="text-sm font-medium">Vercel</div>
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