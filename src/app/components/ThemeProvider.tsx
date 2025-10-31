"use client";

import { createContext, useContext, useState, useEffect } from "react";

type ThemeContextType = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  isLoaded: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  // Cargar preferencia guardada
  useEffect(() => {
    const loadTheme = () => {
      try {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme !== null) {
          setDarkMode(savedTheme === "dark");
        }
      } catch (error) {
        console.warn("Error loading theme from localStorage:", error);
      } finally {
        setIsLoaded(true);
      }
    };

    // Usar setTimeout para evitar problemas de hidratación
    const timeoutId = setTimeout(loadTheme, 0);
    return () => clearTimeout(timeoutId);
  }, []);

  // Guardar preferencia cuando cambie (solo después de cargar)
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem("theme", darkMode ? "dark" : "light");
      } catch (error) {
        console.warn("Error saving theme to localStorage:", error);
      }
    }
  }, [darkMode, isLoaded]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, isLoaded }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme debe usarse dentro de ThemeProvider");
  }
  return context;
}