'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-padel.jpg"
          alt="Jugadores de pádel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          {/* Logo de PadPok */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-6xl font-bold text-white mb-2">
              <span className="text-primary">Pad</span>Pok
            </h1>
            <p className="text-xl text-gray-200">Tu red social de pádel</p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Encuentra tu compañero de pádel ideal
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-xl text-gray-200 mb-8"
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
            <Button size="lg" variant="outline">
              Comenzar ahora
            </Button>
            <Button size="lg" variant="outline">
              Ver torneos
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 