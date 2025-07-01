import { COLORS, FONTS, SIZES, SPACING } from '@/theme';

export default function Footer() {
  return (
    <footer style={{ background: COLORS.white, borderTop: `1px solid ${COLORS.border}` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: `${SPACING.xl}px ${SPACING.xl}px`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: SPACING.md }}>
        <nav style={{ display: 'flex', gap: SPACING.xl, marginBottom: SPACING.md }}>
          <a href="/soporte" style={{ color: COLORS.primary, fontFamily: FONTS.regular, fontSize: SIZES.md, textDecoration: 'none' }}>Soporte</a>
          <a href="/faq" style={{ color: COLORS.primary, fontFamily: FONTS.regular, fontSize: SIZES.md, textDecoration: 'none' }}>FAQ</a>
          <a href="/terminos" style={{ color: COLORS.primary, fontFamily: FONTS.regular, fontSize: SIZES.md, textDecoration: 'none' }}>Términos</a>
          <a href="/policy-privacy" style={{ color: COLORS.primary, fontFamily: FONTS.regular, fontSize: SIZES.md, textDecoration: 'none' }}>Política de Privacidad</a>
          <a href="/delete-account" style={{ color: COLORS.primary, fontFamily: FONTS.regular, fontSize: SIZES.md, textDecoration: 'none' }}>Eliminar cuenta</a>
          <a href="https://instagram.com/padpok" target="_blank" rel="noopener noreferrer" style={{ color: COLORS.primary, fontFamily: FONTS.regular, fontSize: SIZES.md, textDecoration: 'none' }}>Instagram</a>
        </nav>
        <div style={{ marginTop: SPACING.lg }}>
          <p style={{ textAlign: 'center', fontSize: SIZES.sm, color: COLORS.gray, fontFamily: FONTS.regular }}>
            &copy; {new Date().getFullYear()} Padpok – Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  )
} 