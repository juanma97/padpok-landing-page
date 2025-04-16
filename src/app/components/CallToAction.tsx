'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const CallToAction = () => {
  const router = useRouter();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative isolate overflow-hidden bg-gradient-to-r from-blue-600 to-blue-900 px-6 py-24 text-center shadow-2xl rounded-3xl sm:px-16"
        >
          {/* Efectos de fondo */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 translate-y-1/2 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              ¿Listo para empezar a jugar?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Únete ahora a la comunidad de pádel más activa y empieza a disfrutar de partidos increíbles
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/registro-temprano')}
                className="rounded-full bg-white px-12 py-4 text-lg font-semibold text-blue-900 shadow-sm hover:bg-blue-50 transition-all duration-300 hover:cursor-pointer"
              >
                Únete a la lista de espera
              </motion.button>
            </div>
            <p className="mt-6 text-sm text-blue-200">
              Sin tarjeta de crédito · Cancela cuando quieras
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction; 