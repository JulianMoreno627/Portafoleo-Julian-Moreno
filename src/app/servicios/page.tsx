"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useTheme } from "@/components/ThemeProvider";
import { useLanguage } from "@/components/LanguageProvider";
import SpotlightCard from "../templates/SpotlightCard";
import CodeIcon from '@mui/icons-material/Code';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import SpeedIcon from '@mui/icons-material/Speed';
import StorageIcon from '@mui/icons-material/Storage';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import type { ReactNode } from 'react';

export default function ServiciosPage() {
  const { darkMode } = useTheme();
  const { t } = useLanguage();

  type Servicio = {
    icono: ReactNode;
    titulo: string;
    descripcion: string;
  };

  const servicios: Servicio[] = [
    {
      icono: <CodeIcon />,
      titulo: "Desarrollo Web",
      descripcion:
        "Sitios modernos y responsivos con React, Next.js y Tailwind.",
    },
    {
      icono: <PhoneIphoneIcon />,
      titulo: "Aplicaciones Móviles",
      descripcion:
        "Apps nativas y multiplataforma con excelente experiencia de usuario.",
    },
    {
      icono: <DesignServicesIcon />,
      titulo: "Diseño UI/UX",
      descripcion:
        "Interfaces intuitivas y atractivas que mejoran la conversión.",
    },
    {
      icono: <SpeedIcon />,
      titulo: "Optimización",
      descripcion:
        "Mejora de rendimiento, SEO y experiencia del usuario.",
    },
    {
      icono: <StorageIcon />,
      titulo: "Backend y APIs",
      descripcion:
        "APIs robustas y escalables con Node.js, Python y SQL/NoSQL.",
    },
    {
      icono: <SupportAgentIcon />,
      titulo: "Consultoría",
      descripcion:
        "Asesoría técnica en arquitectura y elección de tecnologías.",
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
        <h1 className="text-3xl font-bold mb-1">{t('services.title')}</h1>
        <div className="h-1 w-36 mb-8 bg-neutral-600"></div>
        <p className={`mb-12 max-w-2xl ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
          {t('services.description')}
        </p>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((servicio, index) => (
            <SpotlightCard
              key={index}
              variant={darkMode ? 'dark' : 'light'}
              spotlightColor={darkMode ? 'rgba(0, 229, 255, 0.12)' : 'rgba(0, 199, 255, 0.18)'}
              className="group transition-all duration-300 hover:scale-105 hover:border-cyan-500"
            >
              <div
                className={`relative w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-300'}`}
              >
                <div className={`${darkMode ? 'text-white' : 'text-black'} text-3xl drop-shadow-sm`}>
                  {servicio.icono}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{servicio.titulo}</h3>
              <p
                className={`text-xs md:text-sm leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                {servicio.descripcion}
              </p>
            </SpotlightCard>
          ))}
        </div>

        {/* CTA arriba (reubicado) */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold mb-4">{t('services.cta.title')}</h2>
          <p className={`mb-6 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            {t('services.cta.description')}
          </p>
          <Link
            href="/contacto"
            className={`inline-block px-8 py-3 ${
              darkMode
                ? "bg-cyan-500 text-black hover:bg-cyan-400"
                : "bg-cyan-600 text-white hover:bg-cyan-500"
            } font-semibold rounded-md shadow transition`}
          >
            {t('services.cta.button')}
          </Link>
        </div>

        {/* CTA inferior eliminado para evitar duplicado */}
      </section>

      <footer className="w-full max-w-4xl mx-auto mt-20 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Julián Moreno. {t('footer.rights')}
      </footer>
    </main>
  );
}