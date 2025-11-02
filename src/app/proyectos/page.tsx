"use client";

import Image from "next/image";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { useTheme } from "../components/ThemeProvider";

export default function ProyectosPage() {
  const { darkMode } = useTheme();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const obras = [
    {
      titulo: "Inicio Sesión",
      descripcion: "Proyecto frontend sobre un inicio de sesión elegante con Tailwind CSS.",
      imagen: "/images/inicio-sesion.png",
      tecnologias: ["Tailwind CSS", "TypeScript", "Next.js"],
      github: "https://github.com/JulianMoreno627/Inicio-Sesion-Tailwind.git",
      demo: "https://inicio-sesion-tailwind.vercel.app/",
    },
    {
      titulo: "Diseno Interfaz",
      descripcion: "Interfaz sobre tarjetas creado con tailwindv y next.js.",
      imagen: "/images/Diseno-Interfaz.png",
      tecnologias: ["Next.js", "Tailwind CSS"],
      github: "https://github.com/JulianMoreno627/Taller-Tailwind-con-Vercel.git",
      demo: "https://taller-tailwind-con-vercel-5x1ih26jy-julianmoreno627s-projects.vercel.app/",
    },
    {
      titulo: "Diseño Ticket",
      descripcion: "Diseño web sobre un boleto de bus con Tailwind CSS.",
      imagen: "/images/Diseno-ticket.png",
      tecnologias: ["HTML", "Tailwind CSS", "Next.js"],
      github: "https://github.com/JulianMoreno627/diseno-ticket.git",
      demo: "https://diseno-ticket.vercel.app/",
    },
    {
      titulo: "Almacenamiento de libros",
      descripcion: "Aplicación en Django con dos modelos con el enfoque de base de datos relacional, el proyecto cuenta con dos modelos para una sola aplicación",
      imagen: "/images/Almacenamiento-de-libros.png",
      tecnologias: ["Django", "CSS", "Python", "SQLITE"],
      github: "https://github.com/JulianMoreno627/almacenar-libros.git",
      demo: "https://agencia.vercel.app",
    },
  ];

  const colaboraciones = [
    {
      titulo: "Mascotas",
      descripcion: "Proyecto fronted sobre una página para mascotas realizada con Angular.",
      imagen: "/images/Proyecto-Mascotas.png",
      tecnologias: ["Angular", "TypeScript", "Javascript", "HTML"],
      github: "https://github.com/JulianMoreno627/proyecto-mascotas.git",
      demo: "https://proyecto-mascotas-six.vercel.app/",
    },
    {
      titulo: "Músculos",
      descripcion: "App web sobre colier realizador de muscular realizada con Websoket.",
      imagen: "/images/collab2.jpg",
      tecnologias: ["WebSocket", "Node.js", "React"],
      github: "https://github.com/tu-usuario/musculos",
      demo: "https://musculos.vercel.app",
    },
  ];

  const closeModal = () => setSelectedProject(null);

  const ProjectCard = ({ 
    project, 
    index 
  }: { 
    project: typeof obras[0]; 
    index: number;
  }) => (
    <div
      onClick={() => setSelectedProject(index)}
      className={`rounded-xl overflow-hidden cursor-pointer ${
        darkMode
          ? "bg-gray-900 border border-gray-800"
          : "bg-gray-50 border border-gray-200"
      } transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl ${darkMode ? 'hover:shadow-teal-500/20' : 'hover:shadow-teal-600/30'}`}
    >
      <div className="relative h-48 w-full bg-gray-800">
        <Image
          src={project.imagen}
          alt={project.titulo}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{project.titulo}</h3>
        <p className={`text-sm mb-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
          {project.descripcion}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tecnologias.map((tech, i) => (
            <span
              key={i}
              className={`px-3 py-1 rounded-full text-xs ${
                darkMode
                  ? "bg-cyan-900/30 text-cyan-400"
                  : "bg-cyan-100 text-cyan-700"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

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
        {/* OBRAS */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-2">Obras</h2>
          <div className={`h-1 w-16 mb-8 ${darkMode ? "bg-cyan-500" : "bg-cyan-600"}`}></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {obras.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* COLABORACIONES */}
        <div>
          <h2 className="text-3xl font-bold mb-2">Colaboraciones</h2>
          <div className={`h-1 w-16 mb-8 ${darkMode ? "bg-cyan-500" : "bg-cyan-600"}`}></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {colaboraciones.map((project, index) => (
              <ProjectCard 
                key={index} 
                project={project} 
                index={index + obras.length} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selectedProject !== null && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4 animate-fade-in"
          onClick={closeModal}
        >
          <div
            className={`${
              darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"
            } border rounded-2xl max-w-md w-full p-8 animate-scale-in shadow-2xl`}
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const allProjects = [...obras, ...colaboraciones];
              const project = allProjects[selectedProject];
              
              return (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold">{project.titulo}</h3>
                    <button
                      onClick={closeModal}
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        darkMode
                          ? "hover:bg-gray-800"
                          : "hover:bg-gray-100"
                      } transition`}
                    >
                      ✕
                    </button>
                  </div>

                  <p className={`mb-6 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                    {project.descripcion}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tecnologias.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-xs ${
                          darkMode
                            ? "bg-cyan-900/30 text-cyan-400"
                            : "bg-cyan-100 text-cyan-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-3 w-full py-3 rounded-lg font-semibold transition transform hover:scale-105 duration-300 ${
                        darkMode
                          ? "bg-gray-800 hover:bg-gray-700 text-white hover:shadow-md"
                          : "bg-gray-900 hover:bg-gray-800 text-white hover:shadow-md"
                      }`}
                    >
                      <span className="text-xl">🐙</span>
                      Ver en GitHub
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-3 w-full py-3 rounded-lg font-semibold transition transform hover:scale-105 duration-300 ${
                        darkMode
                          ? "bg-cyan-600 hover:bg-cyan-500 text-black hover:shadow-md hover:shadow-cyan-500/30"
                          : "bg-cyan-500 hover:bg-cyan-600 text-white hover:shadow-md hover:shadow-cyan-500/30"
                      }`}
                    >
                      <span className="text-xl">🚀</span>
                      Ver Demo en Vivo
                    </a>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}

      <footer className="w-full max-w-4xl mx-auto mt-20 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Julián Moreno. Todos los derechos reservados.
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </main>
  );
}