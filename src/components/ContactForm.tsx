"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";
import emailjs from "@emailjs/browser";

type ContactFormProps = {
  serviceId?: string;
  templateId?: string;
};

export default function ContactForm({
  serviceId = "default_service",
  templateId = "template_p2hwfcg",
}: ContactFormProps) {
  const { darkMode } = useTheme();
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    const form = formRef.current;
    if (!form) return;
    const btn = document.getElementById("button") as HTMLButtonElement | HTMLInputElement | null;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "7rgFeS9GAwKUxhcWp";
    const handler = (event: Event) => {
      event.preventDefault();
      const formDataNombre = (form.querySelector('#nombre') as HTMLInputElement | null)?.value || '';
      const formDataCorreo = (form.querySelector('#correo') as HTMLInputElement | null)?.value || '';
      const formDataMensaje = (form.querySelector('#mensaje') as HTMLInputElement | HTMLTextAreaElement | null)?.value || '';
      const nameHidden = form.querySelector('#name_hidden') as HTMLInputElement | null;
      const emailHidden = form.querySelector('#email_hidden') as HTMLInputElement | null;
      const messageHidden = form.querySelector('#message_hidden') as HTMLInputElement | null;
      if (nameHidden) nameHidden.value = formDataNombre;
      if (emailHidden) emailHidden.value = formDataCorreo;
      if (messageHidden) messageHidden.value = formDataMensaje;
      const isInput = btn instanceof HTMLInputElement;
      const originalText = isInput
        ? (btn as HTMLInputElement).value
        : (btn as HTMLButtonElement | null)?.textContent || "";
      if (btn) {
        if (isInput) (btn as HTMLInputElement).value = "Enviando...";
        else (btn as HTMLButtonElement).textContent = "Enviando...";
        (btn as HTMLElement).setAttribute("disabled", "true");
      }
      emailjs
        .sendForm(serviceId, templateId, form, { publicKey })
        .then(() => {
          if (btn) {
            if (isInput) (btn as HTMLInputElement).value = originalText;
            else (btn as HTMLButtonElement).textContent = originalText;
            (btn as HTMLElement).removeAttribute("disabled");
          }
          form.reset();
        }, () => {
          if (btn) {
            if (isInput) (btn as HTMLInputElement).value = originalText;
            else (btn as HTMLButtonElement).textContent = originalText;
            (btn as HTMLElement).removeAttribute("disabled");
          }
        });
    };
    form.addEventListener("submit", handler);
    return () => {
      form.removeEventListener("submit", handler);
    };
  }, [serviceId, templateId]);

  return (
    <form id="form" ref={formRef} className="space-y-6">
      <div>
        <label
          htmlFor="nombre"
          className={`block text-sm font-medium mb-2 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {t("contact.form.name")}
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          required
          className={`w-full px-4 py-3 rounded-lg ${
            darkMode
              ? "bg-gray-900 border border-gray-800 focus:border-cyan-500"
              : "bg-gray-50 border border-gray-300 focus:border-cyan-500"
          } outline-none transition`}
          placeholder={t("contact.form.name.placeholder")}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className={`block text-sm font-medium mb-2 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {t("contact.form.email")}
        </label>
        <input
          type="email"
          id="correo"
          name="correo"
          required
          className={`w-full px-4 py-3 rounded-lg ${
            darkMode
              ? "bg-gray-900 border border-gray-800 focus:border-cyan-500"
              : "bg-gray-50 border border-gray-300 focus:border-cyan-500"
          } outline-none transition`}
          placeholder={t("contact.form.email.placeholder")}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className={`block text-sm font-medium mb-2 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {t("contact.form.message")}
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={6}
          className={`w-full px-4 py-3 rounded-lg ${
            darkMode
              ? "bg-gray-900 border border-gray-800 focus:border-cyan-500"
              : "bg-gray-50 border border-gray-300 focus:border-cyan-500"
          } outline-none transition resize-none`}
          placeholder={t("contact.form.message.placeholder")}
        />
      </div>

      <input type="hidden" id="title_hidden" name="title" value="Contacto" />
      <input type="hidden" id="name_hidden" name="name" />
      <input type="hidden" id="email_hidden" name="email" />
      <input type="hidden" id="message_hidden" name="message" />

      <button
        id="button"
        type="submit"
        className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-0.5 animate-fade-in-right ${
          darkMode
            ? "bg-teal-300 text-black hover:bg-teal-400"
            : "bg-teal-600 text-white hover:bg-teal-500"
        }`}
      >
        {t("contact.form.submit")}
      </button>
    </form>
  );
}