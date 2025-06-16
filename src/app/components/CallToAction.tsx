'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { COLORS, FONTS, SIZES, SPACING } from '@/theme';

const CallToAction = () => {
  const router = useRouter();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            position: 'relative',
            overflow: 'hidden',
            background: `linear-gradient(90deg, ${COLORS.primary} 0%, ${COLORS.secondary} 100%)`,
            padding: `${SPACING.xxl}px ${SPACING.xl}px`,
            textAlign: 'center',
            borderRadius: SPACING.xxl,
            boxShadow: `0 8px 32px 0 ${COLORS.shadow}`,
          }}
        >
          {/* Efectos de fondo */}
          <div style={{ position: 'absolute', inset: 0, zIndex: -10 }}>
            <div style={{ position: 'absolute', top: 0, left: 0, transform: 'translateY(-50%)', width: 500, height: 500, background: COLORS.primary + '20', borderRadius: 9999, filter: 'blur(48px)' }}></div>
            <div style={{ position: 'absolute', bottom: 0, right: 0, transform: 'translateY(50%)', width: 500, height: 500, background: COLORS.accent + '20', borderRadius: 9999, filter: 'blur(48px)' }}></div>
          </div>

          <div style={{ position: 'relative', zIndex: 10 }}>
            <h2 style={{
              margin: '0 auto',
              maxWidth: 600,
              fontSize: SIZES.xxl,
              fontWeight: 700,
              color: COLORS.white,
              fontFamily: FONTS.bold,
              letterSpacing: '-0.5px',
              lineHeight: 1.15,
            }}>
              Lleva tu pasión por el pádel al siguiente nivel
            </h2>
            <p style={{
              margin: '24px auto 0',
              maxWidth: 400,
              fontSize: SIZES.lg,
              color: COLORS.white,
              fontFamily: FONTS.regular,
              lineHeight: 1.4,
            }}>
              Únete gratis a la comunidad más activa, organiza partidos y haz nuevos amigos. Todo desde una sola app.
            </p>
            <div style={{ marginTop: SPACING.xxl, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: SPACING.lg }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/registro-temprano')}
                style={{
                  borderRadius: 9999,
                  background: COLORS.white,
                  color: COLORS.primary,
                  padding: `${SPACING.md}px ${SPACING.xxl}px`,
                  fontSize: SIZES.lg,
                  fontWeight: 700,
                  fontFamily: FONTS.bold,
                  boxShadow: `0 2px 8px 0 ${COLORS.shadow}`,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                  letterSpacing: 0.2,
                }}
              >
                Únete gratis
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction; 