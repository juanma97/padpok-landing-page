'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, Calendar, MessageSquare } from 'lucide-react';

const benefits = [
  {
    name: 'Encuentra Compañeros',
    description: 'Conecta con jugadores de tu nivel y zona para formar partidos sin depender de un club.',
    icon: Users,
    gradient: 'from-blue-500 to-blue-700'
  },
  {
    name: 'Planifica Partidos',
    description: 'Crea o únete a partidos con jugadores disponibles cerca de ti.',
    icon: Calendar,
    gradient: 'from-blue-500 to-blue-700'
  },
  {
    name: 'Grupos por Nivel y Zona',
    description: 'Una vez confirmado el partido, accede a un grupo de Telegram para coordinarlo fácilmente.',
    icon: MessageSquare,
    gradient: 'from-blue-500 to-blue-700'
  },
  {
    name: 'Ranking de Jugadores',
    description: 'Sube en el ranking participando en partidos. Mejora tu posición semana a semana.',
    icon: Trophy,
    gradient: 'from-blue-500 to-blue-700'
  },
];


export default function Benefits() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Todo lo que necesitas para jugar al pádel
          </h2>
          <p className="text-xl text-gray-600">
            Descubre cómo PadPok puede transformar tu experiencia en el pádel
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 10px 40px -15px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-full bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-blue-200"
              >
                <div className={`mb-6 w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.gradient} flex items-center justify-center transform transition-transform group-hover:scale-110`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.name}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 