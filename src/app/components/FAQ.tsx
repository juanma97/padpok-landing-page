'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { COLORS, FONTS, SIZES, SPACING } from '@/theme';

const faqs = [
    {
      question: '¿Necesito ser experto para usar Padpok?',
      answer: 'No, Padpok está diseñado para jugadores de todos los niveles. Puedes filtrar grupos y partidos según tu experiencia y preferencias.'
    },
    {
      question: '¿Puedo crear grupos privados con amigos?',
      answer: 'Sí, puedes crear grupos privados, invitar a tus amigos y organizar partidos solo para ellos o abrirlos a la comunidad.'
    },
    {
      question: '¿Cómo funcionan las medallas y el ranking?',
      answer: 'Ganas medallas por participar, ganar partidos y organizar eventos. Tu perfil muestra tus logros y posición en el ranking local y global.'
    },
    {
      question: '¿La app es gratuita?',
      answer: 'Sí, puedes empezar gratis y disfrutar de todas las funciones principales. Habrá opciones premium para usuarios avanzados y clubes.'
    }
  ];
  

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section style={{ padding: `${SPACING.xxl}px 0`, background: COLORS.background }}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: `0 ${SPACING.xl}px` }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: SPACING.xxl }}
        >
          <h2 style={{ fontSize: SIZES.xxl, fontWeight: 700, color: COLORS.primary, marginBottom: SPACING.md, fontFamily: FONTS.bold, lineHeight: 1.15 }}>
            Preguntas frecuentes
          </h2>
          <p style={{ fontSize: SIZES.lg, color: COLORS.dark, fontFamily: FONTS.regular, lineHeight: 1.4 }}>
            Todo lo que necesitas saber para empezar a jugar
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: SPACING.lg }}>
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
                style={{
                  background: COLORS.white,
                  borderRadius: SPACING.lg,
                  boxShadow: `0 4px 24px 0 ${COLORS.shadow}`,
                  border: `1px solid ${COLORS.border}`,
                  cursor: 'pointer',
                  transition: 'box-shadow 0.2s',
                }}
              >
                <div style={{ padding: SPACING.xl }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontSize: SIZES.lg, fontWeight: 600, color: COLORS.primary, fontFamily: FONTS.bold, lineHeight: 1.2 }}>
                      {faq.question}
                    </h3>
                    <ChevronDown
                      style={{ width: 20, height: 20, color: COLORS.gray, transition: 'transform 0.2s', transform: openIndex === index ? 'rotate(180deg)' : 'none' }}
                    />
                  </div>
                  {openIndex === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ marginTop: SPACING.md, color: COLORS.dark, fontFamily: FONTS.regular, lineHeight: 1.4 }}
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