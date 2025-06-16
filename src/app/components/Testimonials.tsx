'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { COLORS, FONTS, SIZES, SPACING } from '@/theme';

const testimonials = [
    {
      name: 'María López',
      image: 'https://ui-avatars.com/api/?name=Maria+Lopez&background=1E3A8A&color=fff',
      role: 'Jugadora intermedia',
      quote: 'Gracias a Padpok he conocido gente nueva y juego cada semana sin complicaciones. ¡La comunidad es increíble!'
    },
    {
      name: 'Carlos Ruiz',
      image: 'https://ui-avatars.com/api/?name=Carlos+Ruiz&background=1E3A8A&color=fff',
      role: 'Organizador y jugador',
      quote: 'Organizar partidos nunca fue tan fácil. Me encanta poder gestionar grupos y recibir notificaciones automáticas.'
    },
    {
      name: 'Lucía Fernández',
      image: 'https://ui-avatars.com/api/?name=Lucia+Fernandez&background=1E3A8A&color=fff',
      role: 'Competidora y fan de medallas',
      quote: 'El sistema de medallas y rankings me motiva a mejorar. ¡Padpok ha cambiado mi forma de disfrutar el pádel!'
    }
  ];
  

const Testimonials = () => {
  return (
    <section style={{ padding: `${SPACING.xxl}px 0`, background: COLORS.white }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: `0 ${SPACING.xl}px` }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: SPACING.xxl }}
        >
          <h2 style={{ fontSize: SIZES.xxl, fontWeight: 700, color: COLORS.primary, marginBottom: SPACING.md, fontFamily: FONTS.bold, lineHeight: 1.15 }}>
            Lo que dicen nuestros jugadores
          </h2>
          <p style={{ fontSize: SIZES.lg, color: COLORS.dark, fontFamily: FONTS.regular, lineHeight: 1.4 }}>
            Únete a miles de jugadores que ya disfrutan de Padpok
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: SPACING.xl }}>
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
                style={{
                  background: COLORS.background,
                  borderRadius: SPACING.lg,
                  padding: SPACING.xl,
                  boxShadow: `0 4px 24px 0 ${COLORS.shadow}`,
                  border: `1px solid ${COLORS.border}`,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  fontFamily: FONTS.regular,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: SPACING.lg }}>
                  <div style={{ position: 'relative', width: 64, height: 64, borderRadius: '50%', overflow: 'hidden', marginRight: SPACING.md }}>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      style={{ borderRadius: '50%', objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <h3 style={{ fontSize: SIZES.lg, fontWeight: 700, color: COLORS.primary, fontFamily: FONTS.bold, lineHeight: 1.2 }}>{testimonial.name}</h3>
                    <p style={{ color: COLORS.gray, fontFamily: FONTS.regular, lineHeight: 1.2 }}>{testimonial.role}</p>
                  </div>
                </div>
                <blockquote style={{ color: COLORS.dark, flexGrow: 1, fontFamily: FONTS.regular, fontSize: SIZES.md, lineHeight: 1.5 }}>
                  &ldquo;{testimonial.quote}&rdquo;
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