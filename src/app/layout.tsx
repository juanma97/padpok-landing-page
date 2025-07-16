import './globals.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';
import { COLORS } from '@/theme';

export const metadata = {
  title: "padpok",
  description: "Padel a otro nivel",
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className="font-poppins antialiased"
        style={{ background: COLORS.background }}
      >
        {children}
      </body>
    </html>
  );
}
