"use client";

import Image from "next/image";
import { useTheme } from "../components/ThemeProvider";
import { useLanguage } from "../components/LanguageProvider";

export default function IntroStrip() {
  const { darkMode } = useTheme();
  const { t } = useLanguage();

  return (
    <div
      className={`w-full rounded-xl p-4 flex items-center gap-4 transition-all duration-300 ${
        darkMode
          ? "bg-[#1a1b26] border border-gray-800 hover:border-cyan-500/40"
          : "bg-white border border-gray-200 hover:border-cyan-500/40"
      }`}
    >
      <Image
        src="/images/foto-perfil.jpg"
        alt="Foto de perfil de Julián Moreno"
        width={56}
        height={56}
        className="rounded-full ring-2 ring-cyan-400/40"
        priority
      />

      <div className="flex flex-col">
        <span
          className={`text-sm md:text-base font-semibold ${
            darkMode ? "text-cyan-300" : "text-cyan-700"
          }`}
        >
          {t("home.title")}
        </span>
        <span
          className={`text-xs md:text-sm ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {t("home.subtitle")}
        </span>
      </div>
    </div>
  );
}