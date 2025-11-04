"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useTheme as useNextTheme } from "next-themes";

type ThemeContextType = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  isLoaded: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { resolvedTheme, setTheme } = useNextTheme();
  const [darkMode, setDarkModeState] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  // Marcar como cargado tras hidratación
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Sincronizar con el tema resuelto de next-themes
  useEffect(() => {
    if (resolvedTheme) {
      setDarkModeState(resolvedTheme === "dark");
    }
  }, [resolvedTheme]);

  const setDarkMode = (value: boolean) => {
    setDarkModeState(value);
    try {
      setTheme(value ? "dark" : "light");
    } catch {}
  };

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