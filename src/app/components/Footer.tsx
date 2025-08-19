import { COLORS, FONTS, SIZES, SPACING } from '@/theme';

export default function Footer() {
  return (
    <footer style={{ background: COLORS.white, borderTop: `1px solid ${COLORS.border}` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: `${SPACING.xl}px ${SPACING.xl}px`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: SPACING.md }}>
        <nav style={{ display: 'flex', gap: SPACING.xl, marginBottom: SPACING.md }}>
          <a href="#pricing" style={{ color: COLORS.primary, fontFamily: FONTS.regular, fontSize: SIZES.md, textDecoration: 'none' }}>Pricing</a>
          <a href="#faq" style={{ color: COLORS.primary, fontFamily: FONTS.regular, fontSize: SIZES.md, textDecoration: 'none' }}>FAQ</a>
          <a href="/terms" style={{ color: COLORS.primary, fontFamily: FONTS.regular, fontSize: SIZES.md, textDecoration: 'none' }}>Terms</a>
          <a href="/policy-privacy" style={{ color: COLORS.primary, fontFamily: FONTS.regular, fontSize: SIZES.md, textDecoration: 'none' }}>Privacy</a>
          <a href="/contact" style={{ color: COLORS.primary, fontFamily: FONTS.regular, fontSize: SIZES.md, textDecoration: 'none' }}>Contact</a>
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