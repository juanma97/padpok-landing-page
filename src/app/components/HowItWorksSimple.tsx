'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  RocketLaunchIcon, 
  UserGroupIcon, 
  TrophyIcon, 
  SparklesIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const HowItWorksSimple = () => {
  const steps = [
    {
      icon: RocketLaunchIcon,
      title: "Configuración Rápida",
      description: "Crea tu club en menos de 5 minutos. Importa jugadores existentes o déjalos que se registren solos.",
      time: "5 min",
      color: "blue"
    },
    {
      icon: UserGroupIcon,
      title: "Organiza Torneos",
      description: "Diseña brackets automáticos, establece fechas y comunícate con todos los participantes desde un lugar.",
      time: "2 min",
      color: "purple"
    },
    {
      icon: TrophyIcon,
      title: "Gestiona Resultados",
      description: "Los rankings se actualizan automáticamente. Los jugadores reciben notificaciones en tiempo real.",
      time: "1 min",
      color: "green"
    },
    {
      icon: SparklesIcon,
      title: "Analiza y Mejora",
      description: "Obtén insights sobre participación, rendimiento y tendencias para optimizar tu club.",
      time: "Ongoing",
      color: "orange"
    }
  ];

  const userSteps = [
    {
      icon: CheckCircleIcon,
      title: "Descarga la App",
      description: "Disponible gratis en App Store y Google Play. Sin costes ocultos.",
      action: "Descargar"
    },
    {
      icon: UserGroupIcon,
      title: "Únete a Torneos",
      description: "Busca competiciones cerca de ti y regístrate con un solo toque.",
      action: "Explorar"
    },
    {
      icon: TrophyIcon,
      title: "Juega y Gana",
      description: "Participa en partidas, sigue tu progreso y compite por rankings.",
      action: "Jugar"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50 text-blue-600 border-blue-200",
      purple: "bg-purple-50 text-purple-600 border-purple-200",
      green: "bg-green-50 text-green-600 border-green-200",
      orange: "bg-orange-50 text-orange-600 border-orange-200"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Así de simple es usar PadPok
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            En menos tiempo del que tardas en preparar una pista, tendrás torneos funcionando 
            y jugadores satisfechos. La simplicidad es nuestro secreto.
          </motion.p>
        </div>

        {/* For Clubs Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Para Clubes Deportivos
            </h3>
            <p className="text-lg text-gray-600">
              Digitaliza tu gestión en 4 pasos simples
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm z-10">
                  {index + 1}
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group-hover:border-blue-200">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl border-2 mb-6 ${getColorClasses(step.color)} group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>

                  {/* Time */}
                  <div className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    {step.time}
                  </div>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-0">
                    <ArrowRightIcon className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* For Users Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Para Jugadores
            </h3>
            <p className="text-lg text-gray-600">
              Participa en competiciones en 3 pasos
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {userSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border-2 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-2xl mb-6">
                  <step.icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <h4 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>

                {/* Action Button */}
                <button className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200">
                  {step.action}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Listo para empezar?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Únete a cientos de clubes que ya han transformado su gestión deportiva. 
              La primera demo es completamente gratuita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
                Comenzar Gratis
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-200">
                Ver Demo en Vivo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSimple;

