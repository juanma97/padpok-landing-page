'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, Calendar, MessageSquare } from 'lucide-react';
import { COLORS, FONTS, SIZES, SPACING } from '@/theme';

const benefits = [
  {
    name: 'Descubre Grupos y Partidos',
    description: 'Explora grupos públicos y partidos en tu ciudad. Filtra por nivel, ubicación o intereses y encuentra siempre dónde y con quién jugar.',
    icon: Users,
    gradient: 'from-blue-500 to-blue-700'
  },
  {
    name: 'Organiza y Gestiona Fácil',
    description: 'Crea tus propios grupos y partidos, invita a amigos o abre la convocatoria a la comunidad. Todo desde una app intuitiva y segura.',
    icon: Calendar,
    gradient: 'from-blue-500 to-blue-700'
  },
  {
    name: 'Gana Medallas y Logros',
    description: 'Consigue medallas por participación, victorias y organización. Sube en el ranking y presume tu perfil con estadísticas y logros.',
    icon: Trophy,
    gradient: 'from-blue-500 to-blue-700'
  },
  {
    name: 'Comunidad Activa y Feedback',
    description: 'Valora a otros jugadores, recibe notificaciones y disfruta de una comunidad segura, activa y en constante crecimiento.',
    icon: MessageSquare,
    gradient: 'from-blue-500 to-blue-700'
  },
];


export default function Benefits() {
  return (
    <section style={{ padding: `${SPACING.xxl}px 0`, background: COLORS.background }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: `0 ${SPACING.xl}px` }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: SPACING.xxl }}
        >
          <h2 style={{ fontSize: SIZES.xxl, fontWeight: 700, color: COLORS.primary, marginBottom: SPACING.md, fontFamily: FONTS.bold, lineHeight: 1.15 }}>
            Todo lo que necesitas para jugar al pádel
          </h2>
          <p style={{ fontSize: SIZES.lg, color: COLORS.dark, fontFamily: FONTS.regular, lineHeight: 1.4 }}>
            Descubre cómo PadPok puede transformar tu experiencia en el pádel
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: SPACING.lg }}>
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: `0 10px 40px -15px ${COLORS.shadow}`
                }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{
                  height: '100%',
                  background: COLORS.white,
                  borderRadius: SPACING.lg,
                  padding: SPACING.xl,
                  boxShadow: `0 4px 24px 0 ${COLORS.shadow}`,
                  border: `1px solid ${COLORS.border}`,
                  fontFamily: FONTS.regular,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  minHeight: 320,
                }}
              >
                <div style={{ marginBottom: SPACING.lg, width: 64, height: 64, borderRadius: SPACING.lg, background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.secondary})`, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'scale(1)', transition: 'transform 0.2s' }}>
                  <benefit.icon style={{ width: 32, height: 32, color: COLORS.white }} />
                </div>
                <h3 style={{ fontSize: SIZES.xl, fontWeight: 700, color: COLORS.primary, marginBottom: SPACING.md, fontFamily: FONTS.bold, textAlign: 'center', lineHeight: 1.2 }}>
                  {benefit.name}
                </h3>
                <p style={{ color: COLORS.dark, fontFamily: FONTS.regular, textAlign: 'center', lineHeight: 1.4 }}>
                  {benefit.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 