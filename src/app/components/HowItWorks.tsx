'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { UserCircleIcon, UserGroupIcon, TrophyIcon } from '@heroicons/react/24/outline';
import { COLORS, FONTS, SIZES, SPACING } from '@/theme';

const steps = [
  {
    name: 'Paso 1: Crea tu perfil',
    description: 'Indica tu nivel, ubicación y disponibilidad para encontrar jugadores compatibles.',
    icon: UserCircleIcon,
  },
  {
    name: 'Paso 2: Únete o crea un partido',
    description: 'Explora partidos en tu zona o crea uno nuevo. Se generará un grupo de Telegram para organizarlo.',
    icon: UserGroupIcon,
  },
  {
    name: 'Paso 3: Juega y sube en el ranking',
    description: 'Participa en partidos y gana puntos. Pronto podrás competir en torneos locales.',
    icon: TrophyIcon,
  },
];

export default function HowItWorks() {
  return (
    <section style={{ position: 'relative', padding: `${SPACING.xxl}px 0`, overflow: 'hidden', background: COLORS.white }}>
      {/* Gradientes decorativos */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '33%', height: '33%', background: `${COLORS.primary}20`, borderRadius: '50%', filter: 'blur(48px)' }}></div>
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: '33%', height: '33%', background: `${COLORS.accent}20`, borderRadius: '50%', filter: 'blur(32px)' }}></div>
      </div>

      <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: `0 ${SPACING.xl}px`, zIndex: 10 }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center', marginBottom: SPACING.xxl }}
        >
          <h2 style={{ fontSize: SIZES.xxl, fontWeight: 700, color: COLORS.primary, fontFamily: FONTS.bold, lineHeight: 1.15 }}>
            ¿Cómo funciona?
          </h2>
          <p style={{ marginTop: SPACING.lg, fontSize: SIZES.lg, color: COLORS.dark, fontFamily: FONTS.regular, lineHeight: 1.4 }}>
            Empieza a jugar al pádel en tres sencillos pasos
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: SPACING.xl }}>
          {steps.map((step, index) => (
            <motion.div
              key={step.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: SPACING.lg,
                background: COLORS.primary + 'E6',
                backdropFilter: 'blur(8px)',
                padding: SPACING.xl,
                boxShadow: `0 8px 32px 0 ${COLORS.shadow}`,
                border: `1px solid ${COLORS.primary}22`,
                minHeight: 360,
                transition: 'box-shadow 0.2s, transform 0.2s',
                cursor: 'pointer',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 80, height: 80, borderRadius: '50%', background: COLORS.white, color: COLORS.primary, marginBottom: SPACING.lg, transition: 'transform 0.2s' }}>
                  <step.icon style={{ width: 40, height: 40 }} aria-hidden="true" />
                </div>
                <h3 style={{ fontSize: SIZES.xl, fontWeight: 700, color: COLORS.white, marginBottom: SPACING.md, fontFamily: FONTS.bold, lineHeight: 1.2 }}>
                  {step.name}
                </h3>
                <p style={{ fontSize: SIZES.md, color: COLORS.accent, fontFamily: FONTS.regular, lineHeight: 1.4 }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
