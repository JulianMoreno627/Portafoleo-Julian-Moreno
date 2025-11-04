import type { Metadata } from 'next';
import ThemeTogglerButtonDemo from './ThemeTogglerButtonDemo';
import { ThemeTogglerButton } from '@/components/animate-ui/components/buttons';

export const metadata: Metadata = {
  title: 'Template · Theme Toggler',
  description: 'Demostración del botón animado para modo claro/oscuro',
};

export default function ThemeTogglerTemplatePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-2xl font-bold">Theme Toggler (Animate UI)</h1>

      {/* Uso directo (solo claro/oscuro) */}
      <div className="flex items-center gap-4">
        <ThemeTogglerButton modes={["light","dark"]} />
        <span className="text-sm opacity-70">Uso básico</span>
      </div>

      {/* Demo con variantes */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-4">
          <ThemeTogglerButtonDemo variant="default" size="default" direction="ltr" system={false} />
          <ThemeTogglerButtonDemo variant="secondary" size="default" direction="rtl" system={false} />
          <ThemeTogglerButtonDemo variant="ghost" size="sm" direction="ttb" system={false} />
        </div>
        <span className="text-sm opacity-70">Variantes y dirección de la animación</span>
      </div>
    </main>
  );
}