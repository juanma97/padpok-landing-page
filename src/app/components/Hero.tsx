'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-padel.jpg"
          alt="Jugadores de pádel"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="max-w-3xl w-full bg-white/30 backdrop-blur-2xl rounded-3xl shadow-2xl px-8 py-14 text-center border border-blue-100/60 ring-1 ring-white/30"
        >
          {/* Logo de PadPok */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            className="mb-8"
          >
            <h1 className="text-6xl font-extrabold text-blue-700 mb-2 drop-shadow-lg tracking-tight">
              padpok
            </h1>
            <p className="text-xl text-gray-700 font-medium">Tu red social de pádel</p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 drop-shadow"
          >
            Encuentra tu compañero de pádel ideal
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-xl text-gray-700 mb-10"
          >
            Únete a la comunidad de jugadores de pádel más activa y encuentra partidos, 
            torneos y compañeros de juego cerca de ti.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* Botón principal con gradiente animado y efecto pulse */}
            <button
              className="relative rounded-full bg-gradient-to-r from-blue-400 via-blue-600 to-blue-900 px-10 py-4 text-lg font-bold text-white shadow-xl transition-all duration-500 cursor-pointer border-none outline-none focus-visible:ring-2 focus-visible:ring-blue-500 hover:brightness-110 hover:scale-105 active:scale-100 animate-pulse-slow"
            >
              Comenzar ahora
              <span className="absolute -right-3 -top-3 w-4 h-4 bg-blue-400 rounded-full blur-md opacity-60 pointer-events-none"></span>
            </button>
            {/* Botón secundario con icono y efecto desplazamiento */}
            <button
              className="group rounded-full bg-white/70 px-10 py-4 text-lg font-bold text-gray-800 border-2 border-blue-400 shadow-md hover:bg-blue-100 hover:text-blue-900 transition-all duration-500 cursor-pointer flex items-center justify-center gap-2"
            >
              Ver torneos
              <ArrowRight className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>
        </motion.div>
      </div>
      <style jsx global>{`
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradient-move 8s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;