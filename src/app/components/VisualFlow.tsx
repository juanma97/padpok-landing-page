'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Buscar jugadores',
    description: 'Encuentra jugadores de tu nivel y zona fácilmente',
    color: 'bg-blue-500'
  },
  {
    icon: Calendar,
    title: 'Crear un partido',
    description: 'Organiza partidos y gestiona inscripciones en segundos',
    color: 'bg-green-500'
  },
  {
    icon: CheckCircle,
    title: 'Confirmar y jugar',
    description: 'Confirma tu asistencia y disfruta del pádel',
    color: 'bg-blue-700'
  }
];

const VisualFlow = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-xl text-gray-600">
            Empieza a jugar al pádel en tres sencillos pasos
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Conector vertical en mobile */}
              {index < steps.length - 1 && (
                <div className="block md:hidden absolute bottom-[-2rem] w-0.5 h-8 bg-gray-300 z-0" />
              )}

              {/* Conector horizontal en desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-[-2.5rem] w-10 h-0.5 bg-gray-300 z-0" />
              )}

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl border border-gray-100 hover:border-blue-200 transition-all w-full h-full flex flex-col justify-between min-h-[300px]"
              >
                <div className="flex flex-col items-center">
                  <div className="relative mb-6">
                    <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center`}>
                      <step.icon className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center text-sm font-semibold text-gray-700 shadow">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualFlow;
