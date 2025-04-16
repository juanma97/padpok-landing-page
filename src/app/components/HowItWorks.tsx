'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { UserCircleIcon, UserGroupIcon, TrophyIcon } from '@heroicons/react/24/outline';

const steps = [
  {
    name: 'Paso 1: Crea tu perfil',
    description: 'Indica tu nivel, ubicación y disponibilidad para encontrar jugadores compatibles.',
    icon: UserCircleIcon,
  },
  {
    name: 'Paso 2: Únete o crea un partido',
    description: 'Explora partidos en tu zona o crea uno nuevo. Se generará un grupo de Telegram para organizarlo.',
    icon: UserGroupIcon,
  },
  {
    name: 'Paso 3: Juega y sube en el ranking',
    description: 'Participa en partidos y gana puntos. Pronto podrás competir en torneos locales.',
    icon: TrophyIcon,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-white">
      {/* Gradientes decorativos */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-100/60 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-200/40 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-20"
        >
          <h2 className="text-4xl font-bold tracking-tight text-blue-900 sm:text-5xl">
            ¿Cómo funciona?
          </h2>
          <p className="mt-6 text-lg leading-8 text-blue-900/80">
            Empieza a jugar al pádel en tres sencillos pasos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col justify-between rounded-2xl bg-blue-800/90 backdrop-blur-sm p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-900/10 hover:bg-blue-900 min-h-[360px]"
            >
              <div className="flex flex-col items-center text-center flex-1">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-blue-800 mb-8 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                  <step.icon className="h-10 w-10 transition-all duration-300" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold leading-7 text-white mb-4">
                  {step.name}
                </h3>
                <p className="text-base leading-7 text-blue-100">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
