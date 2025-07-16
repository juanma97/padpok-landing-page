'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { COLORS, FONTS, SIZES, SPACING } from '@/theme';

const Hero = () => {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array de imágenes del carrusel
  const appImages = [
    '/app/app-screen-1.jpeg',
    '/app/app-screen-2.jpeg',
    '/app/app-screen-3.jpeg',
    '/app/app-screen-4.jpeg',
    '/app/app-screen-5.jpeg',
    '/app/app-screen-6.jpeg',
    '/app/app-screen-7.jpeg',
    '/app/app-screen-8.jpeg',
    '/app/app-screen-9.jpeg',
  ];

  // Efecto para cambiar automáticamente la imagen cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === appImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [appImages.length]);

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
        {/* Lado derecho: carrusel de mockups */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: 'spring', delay: 0.2 }}
          style={{ flex: 1, minWidth: 320, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <div style={{ position: 'relative', width: 340, height: 680, borderRadius: 40, boxShadow: `0 8px 32px 0 ${COLORS.shadow}`, background: COLORS.white, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Carrusel de imágenes */}
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={appImages[currentImageIndex]}
                alt={`Padpok app - Pantalla ${currentImageIndex + 1}`}
                style={{ 
                  width: 320, 
                  height: 660, 
                  objectFit: 'cover', 
                  borderRadius: 36, 
                  boxShadow: `0 2px 16px 0 ${COLORS.shadow}`,
                  position: 'absolute'
                }}
                initial={{ x: 320, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -320, opacity: 0 }}
              />
            </AnimatePresence>
            {/* Efecto de brillo */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', background: 'linear-gradient(120deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)', borderRadius: 40 }} />
            {/* Indicadores de progreso */}
            <div style={{ 
              position: 'absolute', 
              bottom: 20, 
              left: '50%', 
              transform: 'translateX(-50%)', 
              display: 'flex', 
              gap: 8,
              zIndex: 10
            }}>
              {appImages.map((_, index) => (
                <div
                  key={index}
                  style={{
                    width: index === currentImageIndex ? 24 : 8,
                    height: 8,
                    borderRadius: 4,
                    background: index === currentImageIndex ? COLORS.primary : 'rgba(255,255,255,0.5)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
