'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

const FAQLanding = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Qué deportes soporta PadPok?",
      answer: "PadPok está optimizado para deportes de raqueta como pádel, tenis, bádminton y squash, pero es flexible para adaptarse a cualquier deporte. Nuestra plataforma se puede personalizar según las necesidades específicas de tu club.",
      category: "general"
    },
    {
      question: "¿Cuánto tiempo tarda la configuración inicial?",
      answer: "La configuración básica toma menos de 5 minutos. Puedes crear tu primer torneo en menos tiempo del que tardas en preparar una pista. Nuestro equipo de onboarding te guía durante todo el proceso.",
      category: "clubes"
    },
    {
      question: "¿Hay límites en el número de jugadores o torneos?",
      answer: "Depende del plan que elijas. El plan Starter incluye hasta 100 jugadores y 5 torneos simultáneos. El plan Professional permite hasta 500 jugadores y torneos ilimitados. El plan Enterprise no tiene límites.",
      category: "clubes"
    },
    {
      question: "¿La app móvil es gratuita para los jugadores?",
      answer: "Sí, la app móvil es completamente gratuita para todos los jugadores. Pueden descargarla desde App Store o Google Play sin coste alguno y acceder a todos los torneos y funcionalidades.",
      category: "usuarios"
    },
    {
      question: "¿Ofrecen soporte en español?",
      answer: "Absolutamente. Nuestro equipo de soporte habla español nativo y entiende perfectamente la cultura deportiva española. Ofrecemos soporte por email, chat y teléfono en horario laboral español.",
      category: "clubes"
    },
    {
      question: "¿Puedo integrar PadPok con mi sistema actual?",
      answer: "Sí, PadPok ofrece API completa y integraciones con sistemas populares como Google Calendar, Microsoft Outlook, y herramientas de gestión de clubes. También podemos desarrollar integraciones personalizadas.",
      category: "clubes"
    },
    {
      question: "¿Cómo se manejan los pagos y comisiones?",
      answer: "PadPok no cobra comisiones por transacciones. Ofrecemos un modelo de suscripción mensual o anual con precio fijo. Los pagos se procesan de forma segura a través de Stripe.",
      category: "clubes"
    },
    {
      question: "¿Qué pasa si no estoy satisfecho con el servicio?",
      answer: "Ofrecemos una garantía de satisfacción de 30 días. Si no estás satisfecho, te devolvemos tu dinero sin preguntas. También puedes cancelar tu suscripción en cualquier momento.",
      category: "clubes"
    },
    {
      question: "¿Los datos de mis jugadores están seguros?",
      answer: "Sí, la seguridad es nuestra prioridad. Cumplimos con GDPR, utilizamos encriptación de extremo a extremo, y realizamos auditorías de seguridad regulares. Tus datos nunca se comparten con terceros.",
      category: "clubes"
    },
    {
      question: "¿Puedo probar PadPok antes de comprar?",
      answer: "¡Por supuesto! Ofrecemos una demo gratuita de 14 días sin compromiso y sin tarjeta de crédito. Nuestro equipo te guía personalmente para que veas todas las funcionalidades en acción.",
      category: "clubes"
    }
  ];

  const categories = [
    { id: "all", name: "Todas", count: faqs.length },
    { id: "clubes", name: "Para Clubes", count: faqs.filter(f => f.category === "clubes").length },
    { id: "usuarios", name: "Para Usuarios", count: faqs.filter(f => f.category === "usuarios").length },
    { id: "general", name: "Generales", count: faqs.filter(f => f.category === "general").length }
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredFaqs = activeCategory === "all" 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl mb-6"
          >
            <QuestionMarkCircleIcon className="w-8 h-8 text-blue-600" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Preguntas Frecuentes
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Resolvemos las dudas más comunes sobre PadPok. Si no encuentras lo que buscas, 
            nuestro equipo está aquí para ayudarte.
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4"
        >
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 rounded-2xl transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <ChevronDownIcon 
                  className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              ¿No encuentras la respuesta que buscas?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Nuestro equipo de expertos está aquí para ayudarte. Contáctanos y te responderemos en menos de 24 horas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
                Contactar Soporte
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-200">
                Ver Documentación
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQLanding;

