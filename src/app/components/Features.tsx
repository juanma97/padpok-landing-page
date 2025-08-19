'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrophyIcon, 
  UsersIcon, 
  ChartBarIcon, 
  BellIcon,
  CalendarIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const Features = () => {
  const features = [
    {
      icon: TrophyIcon,
      title: "Gestión de Torneos",
      description: "Crea y gestiona torneos de cualquier deporte con brackets automáticos, calendarios y resultados en tiempo real.",
      category: "clubes",
      color: "blue"
    },
    {
      icon: UsersIcon,
      title: "Gestión de Jugadores",
      description: "Administra perfiles de jugadores, rankings, estadísticas y comunicación masiva desde un solo lugar.",
      category: "clubes",
      color: "purple"
    },
    {
      icon: ChartBarIcon,
      title: "Analytics y Reportes",
      description: "Obtén insights detallados sobre participación, rendimiento y tendencias de tu club deportivo.",
      category: "clubes",
      color: "green"
    },
    {
      icon: BellIcon,
      title: "Notificaciones Inteligentes",
      description: "Sistema de alertas automáticas para recordatorios, resultados y actualizaciones importantes.",
      category: "ambos",
      color: "orange"
    },
    {
      icon: CalendarIcon,
      title: "Calendario Integrado",
      description: "Sincroniza todos los eventos deportivos con calendarios personales y de equipos.",
      category: "ambos",
      color: "red"
    },
    {
      icon: ShieldCheckIcon,
      title: "Seguridad y Privacidad",
      description: "Protección de datos GDPR, autenticación segura y control de acceso granular.",
      category: "clubes",
      color: "indigo"
    },
    {
      icon: DevicePhoneMobileIcon,
      title: "App Móvil Nativa",
      description: "Aplicación móvil para iOS y Android con funcionalidades completas para jugadores.",
      category: "usuarios",
      color: "pink"
    },
    {
      icon: GlobeAltIcon,
      title: "Multiidioma",
      description: "Soporte completo en español, inglés y otros idiomas para clubes internacionales.",
      category: "clubes",
      color: "teal"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50 text-blue-600 border-blue-200",
      purple: "bg-purple-50 text-purple-600 border-purple-200",
      green: "bg-green-50 text-green-600 border-green-200",
      orange: "bg-orange-50 text-orange-600 border-orange-200",
      red: "bg-red-50 text-red-600 border-red-200",
      indigo: "bg-indigo-50 text-indigo-600 border-indigo-200",
      pink: "bg-pink-50 text-pink-600 border-pink-200",
      teal: "bg-teal-50 text-teal-600 border-teal-200"
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
            Todo lo que necesitas para
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> gestionar tu deporte</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            PadPok ofrece herramientas completas para clubes deportivos y una experiencia móvil excepcional para jugadores
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl border-2 mb-6 ${getColorClasses(feature.color)} group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8" />
              </div>

              {/* Category Badge */}
              <div className="mb-4">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                  feature.category === 'clubes' 
                    ? 'bg-blue-100 text-blue-800' 
                    : feature.category === 'usuarios'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-purple-100 text-purple-800'
                }`}>
                  {feature.category === 'clubes' ? 'Para Clubes' : 
                   feature.category === 'usuarios' ? 'Para Usuarios' : 'Para Ambos'}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Listo para transformar tu club deportivo?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Únete a cientos de clubes que ya confían en PadPok para gestionar sus competiciones
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
                Solicitar Demo Gratuita
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-200">
                Ver Casos de Éxito
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;

