'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, MapPin, Calendar, MessageSquare, Bell } from 'lucide-react';

const benefits = [
  {
    name: 'Encuentra Compañeros',
    description: 'Conecta con jugadores de tu nivel y zona para partidos regulares.',
    icon: Users,
  },
  {
    name: 'Organiza Torneos',
    description: 'Crea y participa en torneos locales. Gestiona inscripciones y resultados fácilmente.',
    icon: Trophy,
  },
  {
    name: 'Descubre Pistas',
    description: 'Encuentra las mejores pistas de pádel cerca de ti con opiniones reales.',
    icon: MapPin,
  },
  {
    name: 'Planifica Partidos',
    description: 'Organiza tus partidos con facilidad y mantén un calendario actualizado.',
    icon: Calendar,
  },
  {
    name: 'Comunidad Activa',
    description: 'Únete a grupos locales, comparte experiencias y aprende de otros jugadores.',
    icon: MessageSquare,
  },
  {
    name: 'Notificaciones',
    description: 'Mantente al día con alertas de partidos, torneos y mensajes importantes.',
    icon: Bell,
  }
];

export default function Benefits() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden" style={{ backgroundColor: '#1E3A8A' }}>
      {/* Gradiente sutil animado en el fondo */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 to-indigo-900/20"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-600/10 via-transparent to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-600/10 via-transparent to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl lg:text-center mb-20"
        >
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Todo lo que necesitas para jugar al pádel
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/80">
            Descubre cómo PadPok puede transformar tu experiencia en el pádel
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl bg-white/90 backdrop-blur-sm p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/20 hover:bg-white/95"
                style={{ 
                  boxShadow: '0 10px 40px -15px rgba(0, 0, 0, 0.2)',
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-[#1E3A8A] mb-8 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                    <benefit.icon className="h-10 w-10 transition-all duration-300" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold leading-7 text-gray-900 mb-4">
                    {benefit.name}
                  </h3>
                  <p className="text-base leading-7 text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Poppins:wght@500;700&display=swap');
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
} 