'use client';

import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-blue-400 to-blue-900">
      <div className="absolute inset-0 pointer-events-none -z-10">
      </div>
      <div className="relative mx-auto max-w-3xl px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="isolate overflow-hidden bg-white px-8 py-20 text-center shadow-2xl rounded-3xl border border-blue-100"
        >
          <h2 className="mx-auto max-w-2xl text-4xl font-extrabold tracking-tight text-blue-900 sm:text-5xl">
            ¿Estás listo para jugar?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-900/80">
            Únete hoy a la comunidad de pádel más activa y empieza a disfrutar de partidos, torneos y nuevas amistades. ¡No te quedes fuera!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              className="rounded-full bg-gradient-to-r from-blue-400 via-blue-600 to-blue-900 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-700 hover:brightness-140 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 cursor-pointer"
            >
              Empieza gratis
            </button>
          </div>
          <p className="mt-6 text-sm text-blue-900/60">
            Sin tarjeta de crédito · Sin compromiso
          </p>
        </motion.div>
      </div>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Poppins:wght@500;700&display=swap');
      `}</style>
    </section>
  );
} 