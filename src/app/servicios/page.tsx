"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import { useTheme } from "../components/ThemeProvider";

export default function ServiciosPage() {
  const { darkMode } = useTheme();

  const servicios = [
    {
      icono: "💻",
      titulo: "Desarrollo Web",
      descripcion:
        "Creación de sitios web modernos y responsivos usando las últimas tecnologías como React, Next.js y Tailwind CSS.",
    },
    {
      icono: "📱",
      titulo: "Aplicaciones Móviles",
      descripcion:
        "Desarrollo de aplicaciones móviles nativas y multiplataforma con experiencias de usuario excepcionales.",
    },
    {
      icono: "🎨",
      titulo: "Diseño UI/UX",
      descripcion:
        "Diseño de interfaces intuitivas y atractivas que mejoran la experiencia del usuario y la conversión.",
    },
    {
      icono: "⚡",
      titulo: "Optimización",
      descripcion:
        "Mejora del rendimiento de aplicaciones existentes, optimización SEO y experiencia del usuario.",
    },
    {
      icono: "🔧",
      titulo: "Backend y APIs",
      descripcion:
        "Desarrollo de APIs robustas y escalables con Node.js, Python y bases de datos SQL/NoSQL.",
    },
    {
      icono: "🚀",
      titulo: "Consultoría",
      descripcion:
        "Asesoramiento técnico para proyectos, arquitectura de software y selección de tecnologías.",
    },
  ];

  return (
    <main
      className={`min-h-screen ${
        darkMode ? "bg-[#202023] text-white" : "bg-[#f5e9da] text-black"
      } flex flex-col items-center px-6 py-10 transition-colors duration-300`}
    >
      {/* NAVBAR STICKY (compartida) */}
      <Navbar />

      {/* CONTENIDO */}
      <section className="w-full max-w-4xl mt-16">
        <h1 className="text-4xl font-bold mb-4">Servicios</h1>
        <p className={`mb-12 max-w-2xl ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
          Ofrezco soluciones completas de desarrollo web y móvil, desde el
          concepto inicial hasta el despliegue final. Trabajo con empresas y
          emprendedores para dar vida a sus ideas digitales.
        </p>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl ${
                darkMode
                  ? "bg-gray-900 border border-gray-800 hover:border-cyan-500"
                  : "bg-gray-50 border border-gray-200 hover:border-cyan-500"
              } transition-all duration-300 hover:scale-105`}
            >
              <div className="text-4xl mb-4">{servicio.icono}</div>
              <h3 className="text-xl font-semibold mb-3">{servicio.titulo}</h3>
              <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                {servicio.descripcion}
              </p>
            </div>
          ))}
        </div>

        {/* Proceso de trabajo */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8">Mi proceso de trabajo</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                  darkMode
                    ? "bg-cyan-900/30 text-cyan-400"
                    : "bg-cyan-100 text-cyan-700"
                }`}
              >
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Consulta inicial</h3>
                <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                  Conversamos sobre tu proyecto, objetivos y necesidades específicas.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                  darkMode
                    ? "bg-cyan-900/30 text-cyan-400"
                    : "bg-cyan-100 text-cyan-700"
                }`}
              >
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Planificación</h3>
                <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                  Defino arquitectura, tecnologías y cronograma del proyecto.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                  darkMode
                    ? "bg-cyan-900/30 text-cyan-400"
                    : "bg-cyan-100 text-cyan-700"
                }`}
              >
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Desarrollo</h3>
                <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                  Implemento la solución con actualizaciones constantes.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                  darkMode
                    ? "bg-cyan-900/30 text-cyan-400"
                    : "bg-cyan-100 text-cyan-700"
                }`}
              >
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Entrega y soporte</h3>
                <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                  Despliegue del proyecto y soporte post-lanzamiento.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">¿Listo para comenzar?</h2>
          <p className={`mb-6 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            Conversemos sobre tu proyecto y cómo puedo ayudarte a alcanzar tus objetivos.
          </p>
          <Link
            href="/contacto"
            className={`inline-block px-8 py-3 ${
              darkMode
                ? "bg-cyan-500 text-black hover:bg-cyan-400"
                : "bg-cyan-600 text-white hover:bg-cyan-500"
            } font-semibold rounded-md shadow transition`}
          >
            Contactar ahora →
          </Link>
        </div>
      </section>

      <footer className="w-full max-w-4xl mx-auto mt-20 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Julián Moreno. Todos los derechos reservados.
      </footer>
    </main>
  );
}