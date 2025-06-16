'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, CheckCircle } from 'lucide-react';
import { COLORS, FONTS, SIZES, SPACING } from '@/theme';

const steps = [
  {
    icon: Search,
    title: 'Descubre y Únete',
    description: 'Explora grupos y partidos en tu zona. Filtra por nivel, ubicación o intereses y encuentra siempre dónde jugar.',
    color: COLORS.primary
  },
  {
    icon: Calendar,
    title: 'Organiza en Segundos',
    description: 'Crea partidos o grupos, invita a amigos o abre la convocatoria a la comunidad. Todo desde una app intuitiva.',
    color: COLORS.success
  },
  {
    icon: CheckCircle,
    title: 'Juega, Gana y Progresa',
    description: 'Disfruta del pádel, gana medallas, sube en el ranking y haz nuevos amigos en una comunidad activa y segura.',
    color: COLORS.secondary
  }
];

const VisualFlow = () => {
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
            ¿Cómo funciona?
          </h2>
          <p style={{ fontSize: SIZES.lg, color: COLORS.dark, fontFamily: FONTS.regular, lineHeight: 1.4 }}>
            Empieza a jugar al pádel en tres sencillos pasos
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: SPACING.xl }}>
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
            >
              {/* Conector vertical en mobile */}
              {index < steps.length - 1 && (
                <div style={{ display: 'block', position: 'absolute', bottom: -32, width: 2, height: 32, background: COLORS.border, zIndex: 0 }} />
              )}

              {/* Conector horizontal en desktop */}
              {index < steps.length - 1 && (
                <div style={{ display: 'none', position: 'absolute', top: '50%', right: -40, width: 40, height: 2, background: COLORS.border, zIndex: 0 }} />
              )}

              <motion.div
                whileHover={{ scale: 1.03 }}
                style={{
                  background: COLORS.white,
                  borderRadius: SPACING.lg,
                  padding: SPACING.xl,
                  boxShadow: `0 4px 24px 0 ${COLORS.shadow}`,
                  border: `1px solid ${COLORS.border}`,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: 300,
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ position: 'relative', marginBottom: SPACING.lg }}>
                    <div style={{ background: step.color, width: 64, height: 64, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <step.icon style={{ width: 32, height: 32, color: COLORS.white, transition: 'transform 0.3s' }} />
                    </div>
                    <div style={{ position: 'absolute', top: -8, right: -8, width: 24, height: 24, background: COLORS.white, border: `1px solid ${COLORS.border}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: SIZES.sm, color: COLORS.dark, boxShadow: `0 2px 8px ${COLORS.shadow}` }}>
                      {index + 1}
                    </div>
                  </div>
                  <h3 style={{ fontSize: SIZES.xl, fontWeight: 700, color: COLORS.primary, marginBottom: SPACING.md, fontFamily: FONTS.bold, textAlign: 'center', lineHeight: 1.2 }}>{step.title}</h3>
                  <p style={{ color: COLORS.dark, fontFamily: FONTS.regular, textAlign: 'center', lineHeight: 1.4 }}>{step.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualFlow;
