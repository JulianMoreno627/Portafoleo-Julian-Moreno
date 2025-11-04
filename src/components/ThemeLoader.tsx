"use client";

import { useTheme } from "./ThemeProvider";

export function ThemeLoader({ children }: { children: React.ReactNode }) {
  const { isLoaded } = useTheme();

  // Evitar el problema de hidratación mostrando un div vacío mientras carga
  if (!isLoaded) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
  }

  return <>{children}</>;
}