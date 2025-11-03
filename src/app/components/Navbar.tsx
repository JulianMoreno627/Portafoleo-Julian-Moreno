"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        darkMode 
          ? `${isScrolled ? "bg-[#202023]/60 backdrop-blur-lg shadow-md" : "bg-[#202023]"}` 
          : `${isScrolled ? "bg-[#f5e9da]/85 backdrop-blur-md shadow-sm" : "bg-[#f7efe3]"}`
      }`}
    >
      <div className="w-full max-w-4xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div
          onClick={() => router.push('/')}
          className="flex items-center gap-3 hover:opacity-80 transition cursor-pointer"
        >
        <span className="text-sm font-semibold">Julián Moreno</span>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm items-center">
          <div
            onClick={() => router.push('/informacion')}
            className={`transition-all duration-200 transform hover:scale-[1.02] cursor-pointer ${
              isActive("/informacion")
                ? "text-cyan-400"
                : "hover:text-cyan-400"
            }`}
          >
            {t('nav.about')}
          </div>
          <div
            onClick={() => router.push('/proyectos')}
            className={`transition-all duration-200 transform hover:scale-[1.02] cursor-pointer ${
              isActive("/proyectos")
                ? "text-cyan-400"
                : "hover:text-cyan-400"
            }`}
          >
            {t('nav.projects')}
          </div>
          <div
            onClick={() => router.push('/servicios')}
            className={`transition-all duration-200 transform hover:scale-[1.02] cursor-pointer ${
              isActive("/servicios")
                ? "text-cyan-400"
                : "hover:text-cyan-400"
            }`}
          >
            {t('nav.services')}
          </div>
          <div
            onClick={() => router.push('/contacto')}
            className={`transition-all duration-200 transform hover:scale-[1.02] cursor-pointer ${
              isActive("/contacto")
                ? "text-cyan-400"
                : "hover:text-cyan-400"
            }`}
          >
            {t('nav.contact')}
          </div>
        </div>

        {/* Controles: Idioma y Tema */}
        <div className="flex items-center gap-2">
          {/* Botón cambio de idioma */}
          <button
            aria-label="language"
            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
            className={`w-9 h-9 rounded-md flex items-center justify-center shadow text-xs font-semibold ${
              darkMode
                ? "bg-blue-200 text-black hover:bg-blue-300"
                : "bg-blue-600 text-white hover:bg-blue-700"
            } transition`}
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>

          {/* Botón modo claro / oscuro */}
          <button
          aria-label="theme"
          onClick={() => {
            const next = !darkMode;
            setDarkMode(next);
            try {
              if (typeof window !== "undefined") {
                localStorage.setItem("theme", next ? "dark" : "light");
              }
            } catch {}
          }}
          className={`w-9 h-9 rounded-md flex items-center justify-center shadow ${
            darkMode
              ? "bg-yellow-200 text-black"
              : "bg-gray-800 text-yellow-200"
          } transition`}
        >
            {darkMode ? "☀" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}