'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
      question: '¿Necesito reservar una pista?',
      answer: 'No es necesario en esta fase. Padpok te conecta con otros jugadores para organizar el partido, y una vez coordinado, podéis decidir dónde jugar y cómo hacer la reserva.'
    },
    {
      question: '¿Cómo me uno a un partido?',
      answer: 'Busca un partido en tu zona y nivel, y haz clic en "Unirse". Una vez confirmada tu plaza, se creará un grupo de Telegram con los jugadores para coordinar el partido.'
    },
    {
      question: '¿Qué pasa si falta un jugador?',
      answer: 'Podrás abrir el partido nuevamente para que otros jugadores de tu zona lo vean y se apunten. Padpok te facilita encontrar reemplazos fácilmente.'
    },
    {
      question: '¿Puedo jugar con amigos?',
      answer: 'Sí, puedes crear un partido privado y compartir el enlace solo con tus amigos para que se unan al grupo y organicen el partido juntos.'
    }
  ];
  

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-xl text-gray-600">
            Todo lo que necesitas saber para empezar a jugar
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                        openIndex === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </div>
                  {openIndex === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-4 text-gray-600"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 