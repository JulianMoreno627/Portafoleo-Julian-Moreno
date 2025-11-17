"use client";

import Image from "next/image";
import PersonIcon from '@mui/icons-material/Person';
import Navbar from "@/components/Navbar";
import { useTheme } from "@/components/ThemeProvider";
import { useLanguage } from "@/components/LanguageProvider";
import SpotlightCard from "../templates/SpotlightCard";
import { Quote, Star } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  company: string;
  avatar?: string;
  quote: string;
  stars?: number;
};

export default function TestimoniosPage() {
  const { darkMode } = useTheme();
  const { t } = useLanguage();

  const testimonials: Testimonial[] = [
    {
      name: "Andrea P.",
      role: "PM",
      company: "Startup Fintech",
      avatar: "/images/foto-perfil.jpg",
      quote:
        "Julián es muy comprometido y mantiene una excelente comunicación. Entregó a tiempo y con calidad.",
      stars: 5,
    },
    {
      name: "Carlos R.",
      role: "CTO",
      company: "Agencia Web",
      avatar: "/images/foto-perfil.jpg",
      quote:
        "Su enfoque en detalle y buenas prácticas nos ayudó a mejorar el rendimiento y la accesibilidad.",
      stars: 5,
    },
    {
      name: "María V.",
      role: "Founder",
      company: "E-Commerce",
      avatar: "/images/foto-perfil.jpg",
      quote:
        "Propuso soluciones creativas y se adaptó rápidamente a cambios de alcance sin perder calidad.",
      stars: 4,
    },
    {
      name: "Diego S.",
      role: "Lead Dev",
      company: "Consultora Tech",
      avatar: "/images/foto-perfil.jpg",
      quote:
        "Buen trabajo en equipo y atención a detalles. Ayudó a estandarizar componentes y mejorar DX.",
      stars: 5,
    },
  ];

  return (
    <main
      className={`min-h-screen ${
        darkMode ? "bg-[#202023] text-white" : "bg-[#f5e9da] text-black"
      } transition-colors duration-300`}
    >
      <Navbar />

      <section className="w-full max-w-4xl mx-auto px-6 py-10 mt-16">
        <div className="mb-8 animate-fade-in-right">
          <h1 className={`text-3xl md:text-4xl font-bold mb-1 ${darkMode ? "text-white" : "text-gray-900"}`}>
            {t("testimonials.title")}
          </h1>
          <div className="h-1 w-28 md:w-47 mb-8 bg-neutral-600"></div>
          {/* Descripción removida según solicitud */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((item, i) => (
            <SpotlightCard
              key={i}
              variant={darkMode ? "dark" : "light"}
              spotlightColor={darkMode ? "rgba(0, 229, 255, 0.12)" : "rgba(0, 199, 255, 0.18)"}
              className="group hover:scale-[1.03] hover:shadow-lg transition-transform duration-300 animate-pulse-fade-in"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full overflow-hidden flex items-center justify-center ${darkMode ? "bg-gray-800 ring-1 ring-gray-700" : "bg-gray-200 ring-1 ring-gray-300"}`}>
                  <PersonIcon className={`${darkMode ? 'text-white' : 'text-black'}`} fontSize="small" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Quote className={`w-5 h-5 ${darkMode ? "text-cyan-400" : "text-cyan-600"}`} />
                    <span className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>{item.company}</span>
                  </div>
                  <p className={`${darkMode ? "text-gray-200" : "text-gray-800"} italic leading-relaxed mb-4`}>
                    “{item.quote}”
                  </p>
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: item.stars ?? 5 }).map((_, s) => (
                      <Star key={s} className={`w-4 h-4 ${darkMode ? "text-yellow-400" : "text-yellow-500"}`} fill="currentColor" />
                    ))}
                  </div>
                  <div className="text-sm font-semibold">
                    <span className={`${darkMode ? "text-white" : "text-gray-900"}`}>{item.name}</span>
                    <span className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}> · {item.role}</span>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>

      <footer className="w-full max-w-4xl mx-auto mt-20 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Julián Moreno. {t('footer.rights')}
      </footer>
    </main>
  );
}