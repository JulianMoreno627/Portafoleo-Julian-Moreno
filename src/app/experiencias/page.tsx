"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { useTheme } from "@/components/ThemeProvider";
import { useLanguage } from "@/components/LanguageProvider";
import SpotlightCard from "../templates/SpotlightCard";
 

type ExperienceItem = {
  category: 'academic' | 'work';
  titleKey: string; // main line
  descKey: string; // description
  icon: 'grad' | 'brief';
  period: string; // e.g. 2023 — 2027
  tagsEs: string[];
  tagsEn: string[];
};

export default function ExperienciasPage() {
  const { darkMode } = useTheme();
  const { t, language } = useLanguage();

  return (
    <main
      className={`min-h-screen ${
        darkMode ? "bg-[#202023] text-white" : "bg-[#f5e9da] text-black"
      } transition-colors duration-300`}
    >
      <Navbar />

      <section className="w-full max-w-4xl mx-auto px-6 py-10 mt-16">
        <div className="mb-8 animate-fade-in-right">
          <h1 className={`text-3xl font-bold mb-1 ${darkMode ? "text-white" : "text-gray-900"}`}>
            {language === 'es' ? 'Experiencia Académica' : 'Academic Experience'}
          </h1>
          <div className="h-1 w-92 mb-8 bg-neutral-600"></div>
        </div>

        {/* Sección Académica estilo Testimonios */}
        <div className="mb-18">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {([
                {
                  category: 'academic',
                  titleKey: 'experiences.academic.item1',
                  descKey: 'experiences.academic.item1.desc',
                  icon: 'grad',
                  period: '2023 — 2027',
                  tagsEs: ['Algoritmos', 'Frontend', 'Backend'],
                  tagsEn: ['Foundations', 'Algorithms', 'Databases', 'Networks'],
                },
                {
                  category: 'academic',
                  titleKey: 'experiences.academic.item2',
                  descKey: 'experiences.academic.item2.desc',
                  icon: 'grad',
                  period: '2023 — 2024',
                  tagsEs: ['HTML', 'CSS', 'JavaScript', 'React'],
                  tagsEn: ['HTML', 'CSS', 'JavaScript', 'React'],
                },
              ] as ExperienceItem[]).map((item, i) => (
                <SpotlightCard
                  key={`a-${i}`}
                  variant={darkMode ? 'dark' : 'light'}
                  spotlightColor={darkMode ? 'rgba(0, 229, 255, 0.12)' : 'rgba(0, 199, 255, 0.18)'}
                  className="group hover:scale-[1.02] hover:shadow-lg transition-transform duration-300 animate-pulse-fade-in"
                >
                  <div className="flex flex-col space-y-3">
                    <div>
                      <span className={`${darkMode ? 'text-gray-300 bg-white/5' : 'text-gray-700 bg-gray-200/60'} inline-block text-xs font-medium uppercase tracking-wider rounded-md px-2 py-1`}>{item.period}</span>
                    </div>
                    <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{t(item.titleKey).replace(/\s*[•\-–—]\s*\d{4}(?:\s*[–—\-]\s*\d{4})?$/, '')}</h3>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-800'} text-sm`}>{t(item.descKey)}</p>
                    <div className="flex flex-wrap gap-2">
                      {(language === 'es' ? item.tagsEs : item.tagsEn).map((tag, idx) => (
                        <span key={idx} className={`${darkMode ? 'bg-cyan-900 text-cyan-200' : 'bg-cyan-100 text-cyan-800 border border-cyan-200'} px-3 py-1 rounded-md text-xs font-semibold`}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              ))}
          </div>
        </div>

        {/* Encabezado: Experiencias Laborales */}
        <div className="mb-8 animate-fade-in-right">
          <h2 className={`text-3xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {language === 'es' ? 'Experiencia Laboral' : 'Work Experience'}
          </h2>
          <div className="h-1 w-77 mb-8 bg-neutral-600"></div>
        </div>

        {/* Sección Laboral estilo Testimonios */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {([
                {
                  category: 'work',
                  titleKey: 'experiences.work.item1',
                  descKey: 'experiences.work.item1.desc',
                  icon: 'brief',
                  period: '2023 — 2024',
                  tagsEs: ['React', 'Next.js', 'Tailwind', 'APIs'],
                  tagsEn: ['React', 'Next.js', 'Tailwind', 'APIs'],
                },
                {
                  category: 'work',
                  titleKey: 'experiences.work.item2',
                  descKey: 'experiences.work.item2.desc',
                  icon: 'brief',
                  period: '2023 — 2024',
                  tagsEs: ['Testing', 'Automatizado', 'Scrum Master'],
                  tagsEn: ['Testing', 'Automation', 'Scrum Master'],
                },
              ] as ExperienceItem[]).map((item, i) => (
                <SpotlightCard
                  key={`w-${i}`}
                  variant={darkMode ? 'dark' : 'light'}
                  spotlightColor={darkMode ? 'rgba(0, 229, 255, 0.12)' : 'rgba(0, 199, 255, 0.18)'}
                  className="group hover:scale-[1.02] hover:shadow-lg transition-transform duration-300 min-h-[260px] animate-pulse-fade-in"
                >
                  <div className="flex flex-col space-y-3">
                    <div>
                      <span className={`${darkMode ? 'text-gray-300 bg-white/5' : 'text-gray-700 bg-gray-200/60'} inline-block text-xs font-medium uppercase tracking-wider rounded-md px-2 py-1`}>{item.period}</span>
                    </div>
                    <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{t(item.titleKey).replace(/\s*[•\-–—]\s*\d{4}(?:\s*[–—\-]\s*\d{4})?$/, '')}</h3>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-800'} text-sm`}>{t(item.descKey)}</p>
                    <div className="flex flex-wrap gap-2">
                      {(language === 'es' ? item.tagsEs : item.tagsEn).map((tag, idx) => (
                        <span key={idx} className={`${darkMode ? 'bg-cyan-900 text-cyan-200' : 'bg-cyan-100 text-cyan-800 border border-cyan-200'} px-3 py-1 rounded-md text-xs font-semibold`}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}