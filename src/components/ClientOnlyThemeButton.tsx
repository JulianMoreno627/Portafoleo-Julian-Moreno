"use client";

import { useEffect, useState } from "react";
import { ThemeTogglerButton } from "@/components/animate-ui/components/buttons";
import { useTheme } from "./ThemeProvider";

export default function ClientOnlyThemeButton() {
  const { setMode } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return (
      <button className="flex items-center justify-center rounded-md transition-[box-shadow,_color,_background-color,_border-color,_outline-color,_text-decoration-color,_fill,_stroke] disabled:pointer-events-none disabled:opacity-50 size-9 bg-primary text-primary-foreground shadow-xs hover:bg-primary/90">
        <div className="w-4 h-4"></div>
      </button>
    );
  }

  return (
    <ThemeTogglerButton
      variant="default"
      size="default"
      modes={["light", "dark", "system"]}
      onImmediateChange={(next) => {
        setMode(next);
      }}
    />
  );
}