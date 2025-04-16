'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
    {
      name: 'María López',
      image: 'https://ui-avatars.com/api/?name=Maria+Lopez&background=1E3A8A&color=fff',
      role: 'Jugadora amateur',
      quote: 'Padpok me ha permitido conocer nuevos amigos y jugar cada semana. ¡Muy recomendable!'
    },
    {
      name: 'Carlos Ruiz',
      image: 'https://ui-avatars.com/api/?name=Carlos+Ruiz&background=1E3A8A&color=fff',
      role: 'Jugador intermedio',
      quote: 'La organización de partidos es súper sencilla y siempre encuentro rivales de mi nivel.'
    },
    {
      name: 'Lucía Fernández',
      image: 'https://ui-avatars.com/api/?name=Lucia+Fernandez&background=1E3A8A&color=fff',
      role: 'Jugadora avanzada',
      quote: 'He jugado mucho más desde que uso Padpok. Me encanta lo fácil que es organizar un partido.'
    }
  ];
  

const Testimonials = () => {
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros jugadores
          </h2>
          <p className="text-xl text-gray-600">
            Únete a miles de jugadores que ya disfrutan de Padpok
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100 h-full flex flex-col"
              >
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 flex-grow">
                  {testimonial.quote}
                </blockquote>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 