"use client";

import { useTheme } from "./ThemeProvider";

export function ThemeLoader({ children }: { children: React.ReactNode }) {
  const { isLoaded } = useTheme();

  // Mostrar un loading mínimo mientras se carga el tema
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
      </div>
    );
  }

  return <>{children}</>;
}