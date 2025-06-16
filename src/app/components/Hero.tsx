'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { COLORS, FONTS, SIZES, SPACING } from '@/theme';

const Hero = () => {
  const router = useRouter();

  return (
    <section style={{ background: COLORS.background, padding: '96px 0 64px 0', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 64, flexWrap: 'wrap' }}>
        {/* Lado izquierdo: texto */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: 'spring' }}
          style={{ flex: 1, minWidth: 320 }}
        >
          <span style={{
            display: 'inline-block',
            background: COLORS.accent,
            color: COLORS.white,
            borderRadius: 9999,
            padding: '6px 22px',
            fontSize: SIZES.md,
            fontFamily: FONTS.bold,
            letterSpacing: 1,
            marginBottom: SPACING.lg,
            boxShadow: `0 2px 8px 0 ${COLORS.shadow}`,
          }}>
            Nuevo · Comunidad exclusiva
          </span>
          <h1 style={{
            fontSize: 54,
            fontWeight: 800,
            color: COLORS.primary,
            fontFamily: FONTS.bold,
            lineHeight: 1.08,
            marginBottom: SPACING.xl,
            letterSpacing: -1,
            textShadow: `0 2px 8px ${COLORS.shadow}`,
          }}>
            Descubre, organiza y juega<br />al pádel como nunca
          </h1>
          <p style={{
            fontSize: 22,
            color: COLORS.dark,
            margin: '32px 0',
            fontFamily: FONTS.regular,
            lineHeight: 1.4,
            maxWidth: 480,
          }}>
            Únete a la comunidad de pádel más activa. Encuentra grupos, organiza partidos, gana medallas y haz nuevos amigos. Todo desde una app moderna, fácil y segura.
          </p>
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => router.push('/registro-temprano')}
            style={{
              background: COLORS.primary,
              color: COLORS.white,
              borderRadius: 9999,
              padding: '18px 48px',
              fontSize: 20,
              fontWeight: 700,
              fontFamily: FONTS.bold,
              boxShadow: `0 2px 8px 0 ${COLORS.shadow}`,
              border: 'none',
              cursor: 'pointer',
              marginTop: 16,
              letterSpacing: 0.2,
              transition: 'background 0.2s',
            }}
          >
            Únete gratis
          </motion.button>
        </motion.div>
        {/* Lado derecho: mockup */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: 'spring', delay: 0.2 }}
          style={{ flex: 1, minWidth: 320, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <div style={{ position: 'relative', width: 340, height: 680, borderRadius: 40, boxShadow: `0 8px 32px 0 ${COLORS.shadow}`, background: COLORS.white, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Imagen de mockup móvil, reemplaza por tu mockup real */}
            <img
              src="/mockup-app.png"
              alt="Padpok app"
              style={{ width: 320, height: 660, objectFit: 'cover', borderRadius: 36, boxShadow: `0 2px 16px 0 ${COLORS.shadow}` }}
            />
            {/* Efecto de brillo */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', background: 'linear-gradient(120deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)', borderRadius: 40 }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
