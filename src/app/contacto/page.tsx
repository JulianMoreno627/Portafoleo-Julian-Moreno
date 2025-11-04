"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { useTheme } from "@/components/ThemeProvider";
import { useLanguage } from "@/components/LanguageProvider";

export default function ContactoPage() {
  const { darkMode } = useTheme();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
    alert(t('contact.form.success'));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main
      className={`min-h-screen ${
        darkMode ? "bg-[#202023] text-white" : "bg-[#f5e9da] text-black"
      } flex flex-col items-center px-6 py-10 transition-colors duration-300`}
    >
      {/* NAVBAR STICKY (compartida) */}
      <Navbar />

      {/* CONTENIDO */}
      <section className="w-full max-w-4xl mt-16">
        <h1 className="text-4xl font-bold mb-4">{t('contact.title')}</h1>
        <p className={`mb-12 max-w-2xl ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
          {t('contact.description')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Formulario */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="nombre"
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg ${
                    darkMode
                      ? "bg-gray-900 border border-gray-800 focus:border-cyan-500"
                      : "bg-gray-50 border border-gray-300 focus:border-cyan-500"
                  } outline-none transition`}
                  placeholder={t('contact.form.name.placeholder')}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg ${
                    darkMode
                      ? "bg-gray-900 border border-gray-800 focus:border-cyan-500"
                      : "bg-gray-50 border border-gray-300 focus:border-cyan-500"
                  } outline-none transition`}
                  placeholder={t('contact.form.email.placeholder')}
                />
              </div>

              <div>
                <label
                  htmlFor="mensaje"
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg ${
                    darkMode
                      ? "bg-gray-900 border border-gray-800 focus:border-cyan-500"
                      : "bg-gray-50 border border-gray-300 focus:border-cyan-500"
                  } outline-none transition resize-none`}
                  placeholder={t('contact.form.message.placeholder')}
                />
              </div>

              <button
                type="submit"
                className={`w-full py-3 ${
                  darkMode
                    ? "bg-cyan-500 text-black hover:bg-cyan-400"
                    : "bg-cyan-600 text-white hover:bg-cyan-500"
                } font-semibold rounded-lg shadow transition`}
              >
                {t('contact.form.submit')}
              </button>
            </form>
          </div>

          {/* Información de contacto */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">
              {t('contact.other.title')}
            </h2>

            <div className="space-y-6">
              <div
                className={`p-5 rounded-lg ${
                  darkMode
                    ? "bg-gray-900 border border-gray-800"
                    : "bg-gray-50 border border-gray-200"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">📧</span>
                  <h3 className="font-semibold">{t('contact.other.email')}</h3>
                </div>
                <a
                  href="mailto:julianmoreno@example.com"
                  className={`${
                    darkMode ? "text-cyan-400" : "text-cyan-600"
                  } hover:underline`}
                >
                  julianmoreno@example.com
                </a>
              </div>

              <div
                className={`p-5 rounded-lg ${
                  darkMode
                    ? "bg-gray-900 border border-gray-800"
                    : "bg-gray-50 border border-gray-200"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">📍</span>
                  <h3 className="font-semibold">{t('contact.other.location')}</h3>
                </div>
                <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                  Pasto, Nariño, Colombia
                </p>
              </div>

              <div
                className={`p-5 rounded-lg ${
                  darkMode
                    ? "bg-gray-900 border border-gray-800"
                    : "bg-gray-50 border border-gray-200"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🔗</span>
                  <h3 className="font-semibold">{t('contact.other.social')}</h3>
                </div>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className={`w-10 h-10 flex items-center justify-center rounded-lg ${
                      darkMode
                        ? "bg-gray-800 hover:bg-gray-700"
                        : "bg-gray-200 hover:bg-gray-300"
                    } transition`}
                  >
                    <span>💼</span>
                  </a>
                  <a
                    href="#"
                    className={`w-10 h-10 flex items-center justify-center rounded-lg ${
                      darkMode
                        ? "bg-gray-800 hover:bg-gray-700"
                        : "bg-gray-200 hover:bg-gray-300"
                    } transition`}
                  >
                    <span>🐙</span>
                  </a>
                  <a
                    href="#"
                    className={`w-10 h-10 flex items-center justify-center rounded-lg ${
                      darkMode
                        ? "bg-gray-800 hover:bg-gray-700"
                        : "bg-gray-200 hover:bg-gray-300"
                    } transition`}
                  >
                    <span>🐦</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                💡 <strong>{t('contact.response.time')}:</strong> {t('contact.response.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full max-w-4xl mx-auto mt-20 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Julián Moreno. Todos los derechos reservados.
      </footer>
    </main>
  );
}