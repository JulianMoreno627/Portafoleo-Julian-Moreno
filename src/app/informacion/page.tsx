"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function InformacionPage() {
  const [darkMode, setDarkMode] = useState(true);

  const frontendSkills = [
    { name: "HTML", icon: "🌐", color: "from-orange-500 to-red-500" },
    { name: "CSS", icon: "🎨", color: "from-blue-500 to-cyan-500" },
    { name: "JavaScript", icon: "⚡", color: "from-yellow-400 to-yellow-600" },
    { name: "TypeScript", icon: "📘", color: "from-blue-600 to-blue-800" },
    { name: "Tailwind", icon: "🎭", color: "from-cyan-400 to-teal-500" },
    { name: "Angular", icon: "🅰️", color: "from-red-600 to-pink-600" },
    { name: "React", icon: "⚛️", color: "from-cyan-500 to-blue-500" },
    { name: "Next.js", icon: "▲", color: "from-gray-700 to-black" },
  ];

  const backendSkills = [
    { name: "Python", icon: "🐍", color: "from-blue-500 to-yellow-500" },
    { name: "Node.js", icon: "🟢", color: "from-green-500 to-green-700" },
    { name: "Java", icon: "☕", color: "from-red-500 to-orange-600" },
    { name: "MongoDB", icon: "🍃", color: "from-green-600 to-green-800" },
    { name: "MySQL", icon: "🐬", color: "from-blue-600 to-cyan-600" },
    { name: "APIs", icon: "🔌", color: "from-purple-500 to-pink-500" },
  ];

  const tools = [
    { name: "Git", icon: "📦" },
    { name: "Docker", icon: "🐳" },
    { name: "VS Code", icon: "💻" },
    { name: "Figma", icon: "🎨" },
  ];

  return (
    <main
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } flex flex-col items-center px-6 py-10 transition-colors duration-300`}
    >
      {/* NAVBAR */}
      <nav className="w-full max-w-4xl mx-auto flex items-center justify-between py-4 mb-12">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
          <span className="text-sm">🐾</span>
          <span className="text-sm font-semibold">Julián Moreno</span>
        </Link>

        <div className="flex gap-6 text-sm items-center">
          <Link href="/informacion" className="text-cyan-400 transition">
            Información
          </Link>
          <Link href="/proyectos" className="hover:text-cyan-400 transition">
            Proyectos
          </Link>
          <Link href="/servicios" className="hover:text-cyan-400 transition">
            Servicios
          </Link>
          <Link href="/contacto" className="hover:text-cyan-400 transition">
            Contacto
          </Link>
        </div>

        <button
          aria-label="theme"
          onClick={() => setDarkMode(!darkMode)}
          className={`w-9 h-9 rounded-md flex items-center justify-center shadow ${
            darkMode ? "bg-yellow-200 text-black" : "bg-gray-800 text-yellow-200"
          } transition`}
        >
          {darkMode ? "☀" : "🌙"}
        </button>
      </nav>

      {/* CONTENIDO */}
      <section className="w-full max-w-4xl">
        {/* HERO CON FOTO Y TÍTULO */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
          {/* Foto de perfil */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-cyan-600/40 hover:ring-cyan-500/60 transition-all hover:scale-105">
              <Image
                src="/images/foto-perfil.jpg"
                alt="Foto de Julián Moreno"
                width={160}
                height={160}
                className="object-cover"
              />
            </div>
          </div>

          {/* Info principal */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
              Julián Moreno
            </h1>
            <p className={`text-xl mb-4 ${darkMode ? "text-cyan-400" : "text-cyan-600"}`}>
              Desarrollador Full Stack & Diseñador
            </p>
            <p className={`text-base mb-6 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              📍 Pasto, Colombia · 💼 Freelancer · 🎓 Ingeniería de Software
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 justify-center md:justify-start">
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 flex items-center justify-center rounded-xl ${
                  darkMode ? "bg-gray-900 hover:bg-gray-800 border border-gray-800" : "bg-gray-100 hover:bg-gray-200 border border-gray-200"
                } transition hover:scale-110 hover:border-cyan-500`}
                title="LinkedIn"
              >
                <span className="text-2xl">💼</span>
              </a>
              <a 
                href="mailto:julianmoreno@example.com"
                className={`w-12 h-12 flex items-center justify-center rounded-xl ${
                  darkMode ? "bg-gray-900 hover:bg-gray-800 border border-gray-800" : "bg-gray-100 hover:bg-gray-200 border border-gray-200"
                } transition hover:scale-110 hover:border-cyan-500`}
                title="Email"
              >
                <span className="text-2xl">📧</span>
              </a>
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 flex items-center justify-center rounded-xl ${
                  darkMode ? "bg-gray-900 hover:bg-gray-800 border border-gray-800" : "bg-gray-100 hover:bg-gray-200 border border-gray-200"
                } transition hover:scale-110 hover:border-cyan-500`}
                title="GitHub"
              >
                <span className="text-2xl">🐙</span>
              </a>
            </div>
          </div>
        </div>

        {/* SOBRE MÍ */}
        <div className={`rounded-2xl p-8 mb-20 ${
          darkMode ? "bg-gray-900/50 border border-gray-800" : "bg-gray-50 border border-gray-200"
        }`}>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold">Sobre mí</h2>
            <span className="text-2xl">👨‍💻</span>
          </div>
          
          <div className="space-y-4">
            <p className={`leading-relaxed text-lg ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              Soy un estudiante de <strong className={darkMode ? "text-white" : "text-black"}>Ingeniería de Software</strong> apasionado 
              por crear experiencias digitales únicas. Nací en 2000 en la ciudad de Pasto, Colombia, 
              un lugar que me ha enseñado el valor del trabajo constante y la perseverancia.
            </p>
            <p className={`leading-relaxed text-lg ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              Mi enfoque principal está en el <strong className={darkMode ? "text-white" : "text-black"}>desarrollo web full stack</strong>, 
              donde combino creatividad y lógica para construir <strong className={darkMode ? "text-white" : "text-black"}>interfaces 
              atractivas</strong> y <strong className={darkMode ? "text-white" : "text-black"}>sistemas escalables</strong>. 
              Me encanta transformar ideas en soluciones digitales funcionales que resuelvan problemas reales.
            </p>
            <p className={`leading-relaxed text-lg ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              Cuando no estoy programando, disfruto entrenar, cocinar, explorar la naturaleza y 
              pasar tiempo de calidad con mi familia. Creo firmemente en el aprendizaje continuo 
              y en mantener un equilibrio entre la vida profesional y personal.
            </p>
          </div>
        </div>

        {/* HABILIDADES TÉCNICAS */}
        <section>
          <div className="flex items-center gap-3 mb-10">
            <h2 className="text-3xl font-bold">Habilidades Técnicas</h2>
            <span className="text-3xl">💡</span>
          </div>
          
          {/* Frontend Skills */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <h3 className={`text-2xl font-semibold ${
                darkMode ? "text-cyan-400" : "text-cyan-600"
              }`}>
                Frontend Development
              </h3>
              <span className="text-2xl">🎨</span>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {frontendSkills.map((skill) => (
                <div
                  key={skill.name}
                  className={`relative group ${
                    darkMode ? "bg-gray-900" : "bg-gray-50"
                  } rounded-xl p-5 border ${
                    darkMode ? "border-gray-800" : "border-gray-200"
                  } hover:border-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer overflow-hidden`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative z-10 text-center">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <h4 className="font-semibold text-base">{skill.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <h3 className={`text-2xl font-semibold ${
                darkMode ? "text-cyan-400" : "text-cyan-600"
              }`}>
                Backend Development
              </h3>
              <span className="text-2xl">⚙️</span>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {backendSkills.map((skill) => (
                <div
                  key={skill.name}
                  className={`relative group ${
                    darkMode ? "bg-gray-900" : "bg-gray-50"
                  } rounded-xl p-5 border ${
                    darkMode ? "border-gray-800" : "border-gray-200"
                  } hover:border-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer overflow-hidden`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative z-10 text-center">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <h4 className="font-semibold text-base">{skill.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Herramientas */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <h3 className={`text-2xl font-semibold ${
                darkMode ? "text-cyan-400" : "text-cyan-600"
              }`}>
                Herramientas & Otros
              </h3>
              <span className="text-2xl">🛠️</span>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl ${
                    darkMode
                      ? "bg-gray-900 border border-gray-800 hover:border-cyan-500"
                      : "bg-gray-50 border border-gray-200 hover:border-cyan-500"
                  } transition-all hover:scale-110 hover:shadow-lg cursor-pointer group`}
                >
                  <span className="text-3xl group-hover:scale-125 transition-transform">
                    {tool.icon}
                  </span>
                  <span className="font-semibold text-base">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className={`rounded-2xl p-8 ${
            darkMode ? "bg-gray-900/50 border border-gray-800" : "bg-gray-50 border border-gray-200"
          }`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-500 mb-2">3+</div>
                <div className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                  Años de Experiencia
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-500 mb-2">15+</div>
                <div className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                  Proyectos Completados
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-500 mb-2">10+</div>
                <div className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                  Tecnologías Dominadas
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-500 mb-2">100%</div>
                <div className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                  Compromiso y Pasión
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <footer className="w-full max-w-4xl mx-auto mt-24 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Julián Moreno. Todos los derechos reservados.
      </footer>
    </main>
  );
}