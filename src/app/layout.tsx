import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ThemeLoader } from "@/components/ThemeLoader";
import { LanguageProvider } from "@/components/LanguageProvider";


export const metadata: Metadata = {
  title: "Julián Moreno - Developer & Designer",
  description: "Portafolio personal de Julián Moreno",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeProvider>
            <LanguageProvider>
              <ThemeLoader>{children}</ThemeLoader>
            </LanguageProvider>
          </ThemeProvider>
        </NextThemeProvider>
      </body>
    </html>
  );
}