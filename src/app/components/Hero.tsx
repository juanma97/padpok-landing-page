'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const Hero = () => {
  const router = useRouter();

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-padel.jpg"
          alt="Jugadores de pádel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-white/20 to-transparent" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-4 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="max-w-3xl w-full bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl px-8 py-14 text-center border border-white/50 ring-1 ring-blue-100"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6 rounded-full bg-green-100 text-green-800 px-4 py-1 text-sm font-medium"
          >
            Nuevo en tu ciudad 🚀
          </motion.div>

          {/* Logo y tagline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl font-extrabold text-gray-900 mb-2 tracking-tight"
          >
            padpok
          </motion.h1>
          <p className="text-lg text-blue-800 font-medium mb-8">
            Tu red social de pádel
          </p>

          {/* Título grande */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 drop-shadow"
          >
            ¿Te falta un jugador? <br /> Encuentra partidos en segundos
          </motion.h2>

          {/* Descripción */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-700 mb-10"
          >
            Únete a cientos de jugadores como tú. Organiza partidos, encuentra rivales y disfruta del pádel sin complicaciones.
          </motion.p>

          {/* CTA principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/registro-temprano')}
              className="rounded-full bg-white px-12 py-4 text-lg font-semibold text-blue-900 shadow-sm hover:bg-blue-50 transition-all duration-300"
            >
              Únete a la lista de espera
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
