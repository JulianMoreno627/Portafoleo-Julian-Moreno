"use client";

import { Download } from "lucide-react";
import Navbar from "../components/Navbar";
import TiltedCard from "./templates/TiltedCard";
import SocialStrip from "./templates/SocialStrip";
import { useTheme } from "../components/ThemeProvider";
import { useLanguage } from "../components/LanguageProvider";

export default function Home() {
  const { darkMode } = useTheme();
  const { t } = useLanguage();

  return (
    <main
      className={`min-h-screen ${
        darkMode ? "bg-[#202023] text-white" : "bg-[#f5e9da] text-black"
      } transition-colors duration-300`}
    >
      {/* NAVBAR STICKY */}
      <Navbar />

      {/* CONTENEDOR PRINCIPAL */}
      <div className="w-full max-w-3xl mx-auto px-6 py-14 mt-10">
        {/* Hero: texto alineado a la izquierda, foto al lado */}
        <div className="flex flex-col md:flex-row items-start gap-8 mb-10">
          {/* Info del perfil */}
          <div className="flex-1 text-left">
            {/* Tarjeta inclinada con la foto de perfil */}
            <div className="mb-6">
              <TiltedCard
                imageSrc="/images/foto-perfil.jpg"
                altText="Foto de Julián Moreno"
                captionText=""
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
              />
            </div>
            <div className="mt-14 md:mt-16 space-y-5 md:space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Hola, soy Julián</h1>
              {/* Subtítulo actualizado */}
              <p className={`${darkMode ? "text-gray-300" : "text-gray-800"} text-lg md:text-xl`}>Desarrollador Full Stack y Diseñador</p>
              {/* Párrafo movido hacia arriba */}
              <p className={`text-base md:text-lg max-w-2xl ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                {t('home.work.description')}
              </p>
              {/* Íconos sociales justo debajo del párrafo */}
              <SocialStrip variant={darkMode ? 'dark' : 'light'} />
              {/* Botón Descargar CV con icono */}
              <div className="pt-2">
                <a
                  href="/CV_JulianMoreno.pdf"
                  download
                  className={`group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-0.5 ${
                    darkMode
                      ? "bg-teal-300 text-black hover:bg-teal-400"
                      : "bg-teal-600 text-white hover:bg-teal-500"
                  }`}
                >
                  <Download className="w-5 h-5" />
                  Descargar CV
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria bajo el hero eliminada según solicitud */}

        {/* Sección de CV eliminada según solicitud */}

        {/* Sección Educación eliminada según solicitud */}

        {/* Íconos ya ubicados debajo del texto en el hero */}
      </div>

      {/* FOOTER */}
      <footer className="w-full max-w-4xl mx-auto mt-20 pb-10 text-center text-sm text-gray-500 px-6">
        © {new Date().getFullYear()} Julián Moreno. {t('footer.rights')}
      </footer>
    </main>
  );
}