import './globals.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';
import { COLORS } from '@/theme';

export const metadata = {
  metadataBase: new URL('https://padpok.com'),
  title: "PadPok - Plataforma de Gestión de Torneos y Ligas Deportivas | Para Clubes y Jugadores",
  description: "PadPok es la plataforma líder para gestionar torneos, ligas y competiciones deportivas. Ideal para clubes deportivos que quieren digitalizar su gestión y para jugadores que buscan participar en competiciones. Comienza gratis.",
  keywords: "torneos deportivos, ligas deportivas, gestión de clubes, padel, tenis, badminton, competiciones deportivas, app deportiva, organización de torneos",
  authors: [{ name: "PadPok Team" }],
  creator: "PadPok",
  publisher: "PadPok",
  robots: "index, follow",
  openGraph: {
    title: "PadPok - Gestión de Torneos y Ligas Deportivas",
    description: "Plataforma completa para gestionar torneos y ligas deportivas. Ideal para clubes y jugadores.",
    type: "website",
    locale: "es_ES",
    siteName: "PadPok",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PadPok - Plataforma de Gestión Deportiva"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "PadPok - Gestión de Torneos y Ligas Deportivas",
    description: "Plataforma completa para gestionar torneos y ligas deportivas",
    images: ["/og-image.jpg"]
  },
  alternates: {
    canonical: "https://padpok.com"
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-touch-icon.png'
  },
  manifest: "/manifest.json",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#1e3a8a"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <meta name="google-site-verification" content="your-verification-code" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "PadPok",
              "description": "Plataforma de gestión de torneos y ligas deportivas",
              "applicationCategory": "SportsApplication",
              "operatingSystem": "iOS, Android, Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "EUR"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1250"
              }
            })
          }}
        />
      </head>
      <body
        className="font-poppins antialiased"
        style={{ background: COLORS.background }}
      >
        {children}
      </body>
    </html>
  );
}
