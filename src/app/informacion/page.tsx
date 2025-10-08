"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function InformacionPage() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <main
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } flex flex-col items-center px-6 py-10 transition-colors duration-300`}
    >
      {/* NAVBAR */}
      <nav className="w-full max-w-4xl mx-auto flex items-center justify-between py-4">
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
      <section className="w-full max-w-4xl mt-16">
        <h1 className="text-4xl font-bold mb-8">Julián Moreno</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">Presentación</h2>
            <p className={`leading-relaxed mb-4 ${darkMode ? "text-gray-300" : "text-gray-800"}`}>
              Soy un estudiante de <strong>Ingeniería de Software</strong> que cada
              día aprende y crece profesionalmente. Nací en 2000 en la ciudad de
              Pasto, Colombia, un lugar que me gusta por su paisaje, el
              transitar de su formación ha implementado varias cosas de las 
              cuales he aprendido, de caídas, de trabajo y desarrollo de proyectos.
            </p>
            <p className={`leading-relaxed mb-4 ${darkMode ? "text-gray-300" : "text-gray-800"}`}>
              Me apasiona crear <strong>interfaces digitales</strong> atractivas,
              usar <strong>aplicaciones web</strong> y estudiar el <strong>desarrollo
              web</strong>, que es mi enfoque profesional. Me gusta crear
              soluciones innovadoras para problemas reales.
            </p>
            <p className={`leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-800"}`}>
              Me gusta continuar creatividad y lógica para dar vida a ideas,
              desde el frontend hasta el backend. Cuando no estoy programando,
              disfruto entrenar, compartir con mi familia y aprender cosas nuevas.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a href="#" className={`w-10 h-10 flex items-center justify-center rounded-lg ${
                darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-200 hover:bg-gray-300"
              } transition`}>
                <span className="text-xl">💼</span>
              </a>
              <a href="#" className={`w-10 h-10 flex items-center justify-center rounded-lg ${
                darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-200 hover:bg-gray-300"
              } transition`}>
                <span className="text-xl">📧</span>
              </a>
              <a href="#" className={`w-10 h-10 flex items-center justify-center rounded-lg ${
                darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-200 hover:bg-gray-300"
              } transition`}>
                <span className="text-xl">🐙</span>
              </a>
            </div>

            <Link
              href="/contacto"
              className={`inline-block mt-6 px-5 py-2 ${
                darkMode
                  ? "bg-cyan-500 text-black hover:bg-cyan-400"
                  : "bg-cyan-600 text-white hover:bg-cyan-500"
              } font-semibold rounded-md shadow transition`}
            >
              Contáctame
            </Link>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-40 h-40 rounded-full overflow-hidden ring-4 ring-cyan-600/40">
              <Image
                src="/images/foto-perfil.jpg"
                alt="Foto de Julián Moreno"
                width={160}
                height={160}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Habilidades */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Habilidades</h2>
          
          <h3 className={`text-lg font-semibold mb-3 flex items-center gap-2 ${
            darkMode ? "text-cyan-400" : "text-cyan-600"
          }`}>
            ◆ Frontend
          </h3>
          <div className="flex flex-wrap gap-3 mb-6">
            {["HTML", "CSS", "JavaScript", "TypeScript", "Tailwind", "Angular"].map((skill) => (
              <span
                key={skill}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  darkMode
                    ? "bg-gray-800 border border-gray-700"
                    : "bg-gray-200 border border-gray-300"
                }`}
              >
                {skill}
              </span>
            ))}
          </div>

          <h3 className={`text-lg font-semibold mb-3 flex items-center gap-2 ${
            darkMode ? "text-cyan-400" : "text-cyan-600"
          }`}>
            ◆ Backend
          </h3>
          <div className="flex flex-wrap gap-3">
            {["Python", "Node.js", "Java", "MongoDB", "MySQL", "APIs"].map((skill) => (
              <span
                key={skill}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  darkMode
                    ? "bg-gray-800 border border-gray-700"
                    : "bg-gray-200 border border-gray-300"
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </section>

      <footer className="w-full max-w-4xl mx-auto mt-20 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Julián Moreno. Todos los derechos reservados.
      </footer>
    </main>
  );
}