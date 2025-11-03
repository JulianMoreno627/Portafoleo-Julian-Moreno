import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeLoader } from "./components/ThemeLoader";
import { LanguageProvider } from "./components/LanguageProvider";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="es">
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            <ThemeLoader>{children}</ThemeLoader>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}