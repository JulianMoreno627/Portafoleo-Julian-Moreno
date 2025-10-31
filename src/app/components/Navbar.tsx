"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme();
  const pathname = usePathname();
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
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition"
        >
          <span className="text-sm">🐾</span>
          <span className="text-sm font-semibold">Julián Moreno</span>
        </Link>

        {/* Links */}
        <div className="flex gap-6 text-sm items-center">
          <Link
            href="/informacion"
            className={`transition ${
              isActive("/informacion")
                ? "text-cyan-400"
                : "hover:text-cyan-400"
            }`}
          >
            Información
          </Link>
          <Link
            href="/proyectos"
            className={`transition ${
              isActive("/proyectos")
                ? "text-cyan-400"
                : "hover:text-cyan-400"
            }`}
          >
            Proyectos
          </Link>
          <Link
            href="/servicios"
            className={`transition ${
              isActive("/servicios")
                ? "text-cyan-400"
                : "hover:text-cyan-400"
            }`}
          >
            Servicios
          </Link>
          <Link
            href="/contacto"
            className={`transition ${
              isActive("/contacto")
                ? "text-cyan-400"
                : "hover:text-cyan-400"
            }`}
          >
            Contacto
          </Link>
        </div>

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
    </nav>
  );
}