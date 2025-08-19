'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon, TrophyIcon, UsersIcon, ChartBarIcon } from '@heroicons/react/24/solid';

const TestimonialsLanding = () => {
  const testimonials = [
    {
      name: "Carlos Rodríguez",
      role: "Director Deportivo",
      company: "Club Deportivo Madrid",
      image: "/testimonials/carlos.jpg",
      content: "PadPok ha revolucionado la gestión de nuestro club. Antes pasábamos horas organizando torneos manualmente. Ahora todo está automatizado y nuestros jugadores están más satisfechos que nunca.",
      rating: 5,
      stats: { tournaments: 45, players: 320, satisfaction: "98%" }
    },
    {
      name: "María García",
      role: "Gerente",
      company: "Pádel Club Barcelona",
      image: "/testimonials/maria.jpg",
      content: "La plataforma es increíblemente fácil de usar. En solo una semana teníamos torneos funcionando y la comunicación con los jugadores mejoró drásticamente. El ROI fue inmediato.",
      rating: 5,
      stats: { tournaments: 28, players: 180, satisfaction: "95%" }
    },
    {
      name: "David López",
      role: "Propietario",
      company: "Tennis Club Valencia",
      image: "/testimonials/david.jpg",
      content: "Llevamos 2 años usando PadPok y ha transformado completamente nuestro negocio. Los rankings automáticos y las estadísticas nos han ayudado a retener más jugadores.",
      rating: 5,
      stats: { tournaments: 67, players: 450, satisfaction: "99%" }
    }
  ];

  const stats = [
    { number: "500+", label: "Clubes activos", icon: TrophyIcon },
    { number: "50K+", label: "Jugadores registrados", icon: UsersIcon },
    { number: "10K+", label: "Torneos organizados", icon: ChartBarIcon },
    { number: "99%", label: "Satisfacción del cliente", icon: StarIcon }
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
            Clubes que confían en PadPok
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Descubre cómo clubes deportivos de toda España han transformado su gestión 
            y aumentado la satisfacción de sus jugadores con PadPok.
          </motion.p>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl mb-4">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <div className="w-8 h-8 text-blue-100 text-2xl">&ldquo;</div>
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900">{testimonial.stats.tournaments}</div>
                  <div className="text-xs text-gray-500">Torneos</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900">{testimonial.stats.players}</div>
                  <div className="text-xs text-gray-500">Jugadores</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">{testimonial.stats.satisfaction}</div>
                  <div className="text-xs text-gray-500">Satisfacción</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Success Stories CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Quieres ser el próximo caso de éxito?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Únete a cientos de clubes que ya han transformado su gestión deportiva con PadPok
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
                Solicitar Demo Gratuita
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-200">
                Ver Más Casos de Éxito
              </button>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 mb-8">Clubes que confían en nosotros</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">Club Deportivo Madrid</div>
            <div className="text-2xl font-bold text-gray-400">Pádel Club Barcelona</div>
            <div className="text-2xl font-bold text-gray-400">Tennis Club Valencia</div>
            <div className="text-2xl font-bold text-gray-400">Badminton Center</div>
            <div className="text-2xl font-bold text-gray-400">Squash Pro</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsLanding;

