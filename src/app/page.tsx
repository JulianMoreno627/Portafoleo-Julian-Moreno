"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import Link from "next/link";

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
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } flex flex-col items-center px-6 py-10 transition-colors duration-300`}
    >
      {/* NAVBAR */}
      <nav className="w-full max-w-4xl mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
          <span className="text-sm">🐾</span>
          <span className="text-sm font-semibold">Julián Moreno</span>
        </Link>

        {/* Links */}
        <div className="flex gap-6 text-sm items-center">
          <Link href="/informacion" className="hover:text-cyan-400 transition">
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

        {/* Botón modo claro / oscuro */}
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

      {/* HERO SECTION */}
      <section className="w-full max-w-4xl mt-16 text-center">
        {/* Modelo 3D */}
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-md">
            <Model3D darkMode={darkMode} />
          </div>
        </div>

        {/* Mensaje de bienvenida */}
        <div
          className={`inline-block ${
            darkMode ? "bg-gray-800/60" : "bg-gray-200"
          } px-6 py-3 rounded-lg text-sm mb-6`}
        >
          Soy desarrollador con sede en Colombia!
        </div>

        {/* Nombre y título */}
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          ¡Hola! Yo soy Julián 
        </h1>
        <p
          className={`text-lg ${
            darkMode ? "text-gray-400" : "text-gray-700"
          }`}
        >
          Digital Craftsman ( Desarrollador / Diseñador / Emprendedor )
        </p>
      </section>

      {/* SECCIÓN WORK */}
      <section className="w-full max-w-4xl mt-20">
        <h2 className="text-3xl font-bold mb-6">Work</h2>
        <p
          className={`leading-relaxed mb-6 ${
            darkMode ? "text-gray-300" : "text-gray-800"
          }`}
        >
          Soy una persona creativa e intuitiva, con una gran curiosidad por
          aprender y conocer nuevas ideas. Me especializo en desarrollo web y
          móvil, creando experiencias digitales que combinan funcionalidad con
          diseño. En mis tiempos libres disfruto cocinar, compartir con quienes
          me rodean y mantenerme activo. Cuando no estoy frente al computador,
          me gusta entrenar, disfrutar del aire libre o pasar tiempo de calidad
          con mi familia.
        </p>
        <Link
          href="/proyectos"
          className={`inline-flex items-center gap-2 px-5 py-2 ${
            darkMode
              ? "bg-cyan-500 text-black hover:bg-cyan-400"
              : "bg-cyan-600 text-white hover:bg-cyan-500"
          } font-semibold rounded-md shadow transition`}
        >
          Mi portafolio →
        </Link>
      </section>

      {/* SECCIÓN BIO */}
      <section className="w-full max-w-4xl mt-20">
        <h2 className="text-3xl font-bold mb-6">Bio</h2>
        <div className="space-y-4">
          <div className="flex gap-8">
            <span className={`font-bold ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              2000
            </span>
            <span>Nacido en Pasto, Colombia</span>
          </div>
          <div className="flex gap-8">
            <span className={`font-bold ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              2023
            </span>
            <span>Desarrollador Full Stack independiente</span>
          </div>
          <div className="flex gap-8">
            <span className={`font-bold ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              2024
            </span>
            <span>Enfoque en proyectos personales y emprendimiento</span>
          </div>
        </div>
      </section>

      {/* SECCIÓN I ❤ */}
      <section className="w-full max-w-4xl mt-20">
        <h2 className="text-3xl font-bold mb-6">I ❤</h2>
        <p className={darkMode ? "text-gray-300" : "text-gray-800"}>
          Tecnología, Diseño, Cocina, Fitness, Naturaleza, Fotografía
        </p>
      </section>

      {/* FOOTER */}
      <footer className="w-full max-w-4xl mx-auto mt-20 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Julián Moreno. Todos los derechos reservados.
      </footer>
    </main>
  );
}