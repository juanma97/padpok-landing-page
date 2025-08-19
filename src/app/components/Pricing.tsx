'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, StarIcon, UsersIcon } from '@heroicons/react/24/solid';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfecto para clubes pequeños y eventos ocasionales",
      price: { monthly: 29, yearly: 290 },
      features: [
        "Hasta 100 jugadores",
        "5 torneos simultáneos",
        "Brackets automáticos",
        "App móvil básica",
        "Soporte por email",
        "Plantillas de torneos"
      ],
      icon: UsersIcon,
      popular: false,
      category: "clubes"
    },
    {
      name: "Professional",
      description: "Ideal para clubes medianos con múltiples deportes",
      price: { monthly: 79, yearly: 790 },
      features: [
        "Hasta 500 jugadores",
        "Torneos ilimitados",
        "Ligas y rankings",
        "Analytics avanzados",
        "Comunicación masiva",
        "Soporte prioritario",
        "Integración con calendarios",
        "Multiidioma"
      ],
      icon: StarIcon,
      popular: true,
      category: "clubes"
    },
    {
      name: "Enterprise",
      description: "Para federaciones y clubes grandes",
      price: { monthly: 199, yearly: 1990 },
      features: [
        "Jugadores ilimitados",
        "Funciones personalizadas",
        "API completa",
        "Soporte 24/7",
        "Onboarding dedicado",
        "White-label disponible",
        "Múltiples sedes",
        "Reportes personalizados"
      ],
      icon: StarIcon,
      popular: false,
      category: "clubes"
    }
  ];

  const userPlan = {
    name: "App Gratuita",
    description: "Para jugadores que quieren participar en competiciones",
    price: 0,
    features: [
      "Acceso a todos los torneos",
      "Perfil de jugador completo",
      "Notificaciones en tiempo real",
      "Historial de partidas",
      "Rankings y estadísticas",
      "Comunidad de jugadores"
    ],
    icon: UsersIcon,
    category: "usuarios"
  };

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

  return (
    <section id="pricing" className="py-24 bg-gray-50">
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
            Planes simples y transparentes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Elige el plan que mejor se adapte a las necesidades de tu club. Sin sorpresas, sin comisiones ocultas.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center mt-8"
          >
            <span className={`mr-3 text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Mensual
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isAnnual ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Anual
              <span className="ml-1 text-green-600 font-semibold">(Ahorra 20%)</span>
            </span>
          </motion.div>
        </div>

        {/* Plans Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative bg-white rounded-2xl p-8 border-2 ${
                plan.popular 
                  ? 'border-blue-500 shadow-2xl scale-105' 
                  : 'border-gray-200 shadow-lg'
              } hover:shadow-xl transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Más Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-blue-50 text-blue-600 mb-4">
                  <plan.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">
                    €{isAnnual ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className="text-gray-500 ml-2">
                    /{isAnnual ? 'año' : 'mes'}
                  </span>
                </div>
                {isAnnual && (
                  <p className="text-sm text-green-600 mt-2">
                    Ahorras €{plan.price.monthly * 12 - plan.price.yearly} al año
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transform hover:-translate-y-1'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.popular ? 'Comenzar Ahora' : 'Elegir Plan'}
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* User Plan Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-12 border-2 border-green-200">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 mb-6">
              <userPlan.icon className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{userPlan.name}</h3>
            <p className="text-xl text-gray-600 mb-6">{userPlan.description}</p>
            
            <div className="text-4xl font-bold text-green-600 mb-8">
              Gratis
            </div>

            <ul className="space-y-3 mb-8 text-left max-w-md mx-auto">
              {userPlan.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200">
                App Store
              </button>
              <button className="px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200">
                Google Play
              </button>
            </div>
          </div>
        </motion.div>

        {/* FAQ Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-4">
            ¿Tienes preguntas sobre nuestros planes?
          </p>
          <button className="text-blue-600 hover:text-blue-700 font-semibold underline">
            Ver Preguntas Frecuentes
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;

