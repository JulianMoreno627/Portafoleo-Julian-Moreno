"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";

// Importar el componente 3D dinámicamente para evitar SSR
const Model3D = dynamic(() => import("./components/Model3D"), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500"></div>
    </div>
  ),
});

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <main
      className={`min-h-screen ${
        darkMode ? "bg-[#202023] text-white" : "bg-[#f5e9da] text-black"
      } transition-colors duration-300`}
    >
      {/* NAVBAR STICKY */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* CONTENEDOR PRINCIPAL */}
      <div className="w-full max-w-2xl mx-auto px-6 py-10 mt-16">
        {/* Modelo 3D */}
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-md">
            <Model3D darkMode={darkMode} />
          </div>
        </div>

        {/* Badge de bienvenida */}
        <div className="flex justify-center mb-8">
          <div className={`inline-block px-6 py-3 rounded-lg ${
            darkMode 
              ? "bg-neutral-800 backdrop-blur-sm" 
              : "bg-gray-200/60 backdrop-blur-sm"
          }`}>
            <p className="text-sm text-center">
              ¡Hola, soy un desarrollador independiente en Colombia!
            </p>
          </div>
        </div>

        {/* Sección de perfil con foto a la derecha */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-12">
          {/* Info del perfil */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-3">Julián Moreno</h1>
            <p className={`text-base text-white`}>
              Desarrollador Full Stack ( Desarrollador / Diseñador )
            </p>
          </div>

          {/* Foto de perfil a la derecha */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 rounded-full overflow-hidden ring-2 ring-white">
              <Image
                src="/images/foto-perfil.jpg"
                alt="Julián Moreno"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Sección Trabajo con línea debajo del título */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-2 inline-block">
            Trabajo
          </h3>
          {/* Línea decorativa removida según solicitud */}
          
          <p className={`leading-relaxed mb-6 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}>
            Soy una persona creativa e intuitiva, con una gran curiosidad por
            aprender y conocer nuevas ideas. Me especializo en desarrollo web y
            móvil, creando experiencias digitales que combinan funcionalidad con
            diseño. En mis tiempos libres disfruto cocinar, compartir con quienes
            me rodean y mantenerme activo.
          </p>

          {/* Botones con colores cyan/teal */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/proyectos"
              className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-medium transition-all ${
                darkMode
                  ? "bg-teal-500 text-white hover:bg-teal-400"
                  : "bg-teal-600 text-white hover:bg-teal-500"
              }`}
            >
              Mi portafolio
              <span>→</span>
            </Link>

            <a
              href="/cv.pdf"
              download
              className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-medium transition-all ${
                darkMode
                  ? "bg-teal-500 text-white hover:bg-teal-400"
                  : "bg-teal-600 text-white hover:bg-teal-500"
              }`}
            >
              Descargar CV
              <span>→</span>
            </a>
          </div>
        </section>

        {/* Sección "En la web" con línea debajo del título */}
        <section className="mb-12">
          <h3 className="text-xl font-bold mb-2 inline-block">
            En la web
          </h3>
          {/* Línea decorativa removida según solicitud */}
          
          <div className="flex items-center gap-4 mt-4">
            {/* GitHub */}
            <a
              href="https://github.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                darkMode
                  ? "w-12 h-12 rounded-lg flex items-center justify-center bg-[#2d3748]/60 hover:bg-[#2d3748]/80 text-cyan-400 shadow"
                  : "w-12 h-12 rounded-lg flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 shadow"
              } transition-all`}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                darkMode
                  ? "w-12 h-12 rounded-lg flex items-center justify-center bg-[#2d3748]/60 hover:bg-[#2d3748]/80 text-cyan-400 shadow"
                  : "w-12 h-12 rounded-lg flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 shadow"
              } transition-all`}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/573001234567"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                darkMode
                  ? "w-12 h-12 rounded-lg flex items-center justify-center bg-[#2d3748]/60 hover:bg-[#2d3748]/80 text-cyan-400 shadow"
                  : "w-12 h-12 rounded-lg flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 shadow"
              } transition-all`}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="w-full max-w-4xl mx-auto mt-20 pb-10 text-center text-sm text-gray-500 px-6">
        © {new Date().getFullYear()} Julián Moreno. Todos los derechos reservados.
      </footer>
    </main>
  );
}