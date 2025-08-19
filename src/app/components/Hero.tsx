'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, StarIcon, UsersIcon, TrophyIcon } from '@heroicons/react/24/solid';

const Hero = () => {
  const [activeTab, setActiveTab] = useState<'clubes' | 'usuarios'>('clubes');

  const features = [
    { icon: TrophyIcon, text: "Gestión completa de torneos" },
    { icon: UsersIcon, text: "Comunicación con jugadores" },
    { icon: CheckCircleIcon, text: "Sin comisiones ocultas" },
    { icon: StarIcon, text: "Soporte prioritario" }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center mb-16">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-8"
          >
            <StarIcon className="w-4 h-4 mr-2" />
            Plataforma líder en gestión deportiva
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Revoluciona
            </span>
            <br />
            tu gestión deportiva
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            PadPok es la plataforma completa para gestionar torneos, ligas y competiciones deportivas. 
            <span className="font-semibold text-gray-900"> Ideal para clubes que quieren digitalizar su gestión</span> y para 
            <span className="font-semibold text-gray-900"> jugadores que buscan participar en competiciones</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <button
              onClick={() => {
                const element = document.getElementById('demo');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              <span className="relative z-10">Comenzar Gratis</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </button>
            
            <button
              onClick={() => {
                const element = document.getElementById('demo');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-200"
            >
              Ver Demo
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500"
          >
            <div className="flex items-center">
              <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
              Sin tarjetas de crédito
            </div>
            <div className="flex items-center">
              <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
              Configuración en 5 minutos
            </div>
            <div className="flex items-center">
              <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
              Soporte en español
            </div>
          </motion.div>
        </div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-xl p-1 shadow-lg">
              <button
                onClick={() => setActiveTab('clubes')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === 'clubes'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Para Clubes
              </button>
              <button
                onClick={() => setActiveTab('usuarios')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === 'usuarios'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Para Usuarios
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {activeTab === 'clubes' ? (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Digitaliza tu club deportivo
                </h3>
                <p className="text-gray-600 mb-8 text-lg">
                  Gestiona torneos, ligas y competiciones de forma profesional y eficiente
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="text-center">
                      <feature.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">{feature.text}</p>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => {
                    const element = document.getElementById('demo');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Solicitar Demo para Clubes
                </button>
              </div>
            ) : (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Participa en competiciones
                </h3>
                <p className="text-gray-600 mb-8 text-lg">
                  Descarga la app y únete a torneos y ligas en tu zona
                </p>
                <div className="flex justify-center space-x-4 mb-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-2">
                      <span className="text-2xl">📱</span>
                    </div>
                    <p className="text-sm text-gray-600">App Móvil</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-2">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <p className="text-sm text-gray-600">Torneos</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-2">
                      <span className="text-2xl">👥</span>
                    </div>
                    <p className="text-sm text-gray-600">Comunidad</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200">
                    App Store
                  </button>
                  <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200">
                    Google Play
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
