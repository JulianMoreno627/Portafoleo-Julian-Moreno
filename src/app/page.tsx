"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-10">
      {/* NAVBAR: logo a la izquierda, links centrados, control a la derecha (como en la imagen) */}
      <nav className="w-full max-w-4xl mx-auto flex items-center justify-between py-4">
        {/* Logo / nombre */}
        <div className="flex items-center gap-3">
          <span className="text-sm">🐾</span>
          <span className="text-sm font-semibold">Julián Moreno</span>
        </div>

        {/* Links centrados en la barra superior (ordenados en fila) */}
        <div className="flex gap-6 text-sm items-center">
          <a href="#" className="text-gray-300 hover:text-cyan-400 transition">Works</a>
          <a href="#" className="text-gray-300 hover:text-cyan-400 transition">Posts</a>
          <a href="#" className="text-gray-300 hover:text-cyan-400 transition">Uses</a>
          <a href="#" className="text-gray-300 hover:text-cyan-400 transition">Source</a>
        </div>

        {/* Acción / toggle (ejemplo) */}
        <div>
          <button
            aria-label="theme"
            className="w-9 h-9 rounded-md bg-yellow-200 text-black flex items-center justify-center shadow"
          >
            ☀
          </button>
        </div>
      </nav>

      {/* CONTENEDOR PRINCIPAL CENTRADO (similar al layout del ejemplo) */}
      <section className="w-full max-w-4xl mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* Nombre, rol y descripción (ocupa 2 columnas en pantallas md+) */}
        <div className="md:col-span-2 flex flex-col justify-center">
          {/* pequeño badge sombreado (opcional) */}
          <div className="inline-block bg-gray-800/60 px-4 py-2 rounded-md text-sm text-gray-300 mb-6">
            Hola — desarrollador de aplicaciones · Pasto, Colombia
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Julián Moreno</h1>
          <p className="mt-2 text-gray-400">
            Digital Craftsman · Desarrollador / Diseñador / Emprendedor
          </p>

          <div className="mt-6 max-w-xl text-gray-300 leading-relaxed">
            <p>
              Soy una persona creativa e intuitiva, con una gran curiosidad por aprender y conocer nuevas ideas. En
              mis tiempos libres disfruto cocinar, y compartir con quienes me rodean. El deporte también ocupa un un gran lugar en mi vida: 
              me gusta ir al gimnasio y mantenerme activo. Cuando no estoy frente al computador, puedes encontrarme entrenando,
              disfrutando del aire libre o pasando tiempo de calidad con mi familia.
            </p>
          </div>

          <div className="mt-6">
            <a
              href="#"
              className="inline-block px-5 py-2 bg-cyan-500 text-black font-semibold rounded-md shadow hover:bg-cyan-400 transition"
            >
              Mi portafolio →
            </a>
          </div>
        </div>

        {/* Avatar a la derecha (alineado con contenido, con anillo) */}
        <div className="flex justify-center md:justify-end">
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden ring-4 ring-cyan-600/40">
            <Image
              src="/Images/foto-perfil.jpg"
              alt="Foto de Julián Moreno"
              width={144}
              height={144}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECCIONES: Work y Bio, en paneles oscuros (no blancos) */}
      <section className="w-full max-w-4xl mt-12 grid grid-cols-1 gap-8">
        {/* Work (panel oscuro con borde sutil) */}
        <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-white">Trabajo</h3>
          <p className="mt-4 text-gray-300 leading-relaxed max-w-3xl">
            Soy un programador apasionado por el desarrollo web, con un enfoque especial 
            en el frontend.Disfruto diseñar interfaces atractivas, crear aplicaciones web y 
            trabajar en experiencias responsivas y funcionales. Me gusta combinar creatividad y técnica para dar vida a proyectos
            que conecten con los usuarios. Aunque mi fortaleza está en el frontend, también me interesa profundizar en el backend para poder construir soluciones más completas y robustas.
          </p>

          {/* imagen ilustrativa centrada */}
          <div className="mt-6 flex justify-center">
            <div className="w-full max-w-xl rounded-lg overflow-hidden">
              <Image
                src="/Images/lampara-v.jpg"
                alt="Ilustración Work"
                width={920}
                height={360}
                className="object-cover w-full h-auto rounded-lg"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <a className="inline-block px-5 py-2 bg-cyan-600 text-black font-semibold rounded-md shadow hover:bg-cyan-500 transition" href="#">
              Ver proyectos →
            </a>
          </div>
        </div>

        {/* Bio (panel oscuro) */}
        <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white">Biografía</h3>
          <ul className="mt-4 space-y-3 text-gray-300">
            <li><span className="font-bold">2005</span> — Nace en Pasto, Nariño, Colombia.</li>
          </ul>
        </div>
      </section>

      {/* Pie (opcional) */}
      <footer className="w-full max-w-4xl mx-auto mt-12 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Julián Moreno — Diseño oscuro y minimalista
      </footer>
    </main>
  );
}
