"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useTheme as useNextTheme } from "next-themes";

type ThemeSelection = "light" | "dark" | "system";

type ThemeContextType = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  mode: ThemeSelection;
  setMode: (value: ThemeSelection) => void;
  isLoaded: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { resolvedTheme, setTheme, theme } = useNextTheme();
  const [darkMode, setDarkModeState] = useState(false);
  const [mode, setModeState] = useState<ThemeSelection>((theme as ThemeSelection) || "system");
  const [isLoaded, setIsLoaded] = useState(false);

  // Sincronizar con el tema resuelto de next-themes
  useEffect(() => {
    if (resolvedTheme) {
      setDarkModeState(resolvedTheme === "dark");
      setIsLoaded(true);
    }
  }, [resolvedTheme]);

  // Mantener el estado de modo sincronizado con next-themes
  useEffect(() => {
    if (theme) {
      setModeState(theme as ThemeSelection);
    }
  }, [theme]);

  const setDarkMode = (value: boolean) => {
    setDarkModeState(value);
    setModeState(value ? "dark" : "light");
    try {
      setTheme(value ? "dark" : "light");
    } catch {}
  };

  const setMode = (value: ThemeSelection) => {
    setModeState(value);
    try {
      setTheme(value);
    } catch {}
  };

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, mode, setMode, isLoaded }}>
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