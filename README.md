# PadPok - Plataforma de Gestión Deportiva

## 🏆 Descripción

PadPok es una plataforma completa para gestionar torneos, ligas y competiciones deportivas. Diseñada específicamente para clubes deportivos que quieren digitalizar su gestión y para jugadores que buscan participar en competiciones.

## ✨ Características Principales

### Para Clubes Deportivos
- **Gestión de Torneos**: Crea y gestiona torneos con brackets automáticos
- **Gestión de Jugadores**: Administra perfiles, rankings y estadísticas
- **Analytics y Reportes**: Insights detallados sobre participación y rendimiento
- **Comunicación Masiva**: Sistema de notificaciones inteligentes
- **Calendario Integrado**: Sincronización con calendarios personales
- **Multiidioma**: Soporte completo en español e inglés

### Para Jugadores
- **App Móvil Gratuita**: Disponible en iOS y Android
- **Acceso a Torneos**: Únete a competiciones en tu zona
- **Perfil Completo**: Historial de partidas y estadísticas
- **Notificaciones**: Alertas en tiempo real
- **Comunidad**: Conecta con otros jugadores

## 🚀 Tecnologías Utilizadas

- **Frontend**: Next.js 15, React 19, TypeScript
- **Estilos**: Tailwind CSS 4, Framer Motion
- **Iconos**: Heroicons
- **Fuentes**: Poppins
- **Animaciones**: CSS personalizado y Framer Motion

## 📱 Diseño y UX

La landing page ha sido rediseñada con un estilo moderno y profesional similar a TextMagic, incluyendo:

- **Diseño Responsivo**: Optimizado para todos los dispositivos
- **Animaciones Suaves**: Transiciones y efectos visuales atractivos
- **Funnel de Ventas**: Enfoque claro en conversión para clubes y usuarios
- **SEO Optimizado**: Metadatos, sitemap, robots.txt y schema markup
- **Accesibilidad**: Navegación por teclado y lectores de pantalla

## 🎯 Funnel de Ventas

### Para Clubes
1. **Awareness**: Hero section con valor claro
2. **Interest**: Características y beneficios detallados
3. **Consideration**: Casos de éxito y testimonios
4. **Decision**: Planes de precios transparentes
5. **Action**: Formulario de demo gratuita

### Para Usuarios
1. **Descarga**: App gratuita en stores
2. **Onboarding**: Registro simple y rápido
3. **Engagement**: Participación en torneos
4. **Retention**: Rankings y estadísticas

## 🔧 Instalación y Desarrollo

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/padpok.git
cd padpok

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── components/          # Componentes de la landing page
│   │   ├── Hero.tsx        # Sección principal con CTA
│   │   ├── Features.tsx    # Características del producto
│   │   ├── Pricing.tsx     # Planes y precios
│   │   ├── TestimonialsLanding.tsx  # Casos de éxito
│   │   ├── FAQLanding.tsx  # Preguntas frecuentes
│   │   ├── CallToAction.tsx # Formulario de contacto
│   │   └── Footer.tsx      # Pie de página con enlaces
│   ├── globals.css         # Estilos globales y animaciones
│   ├── layout.tsx          # Layout principal con SEO
│   └── page.tsx            # Página principal
├── lib/                    # Utilidades y configuraciones
└── theme.ts                # Configuración de colores y fuentes

public/
├── manifest.json           # Manifiesto PWA
├── robots.txt             # Configuración SEO
├── sitemap.xml            # Sitemap para motores de búsqueda
└── icons/                 # Iconos de la aplicación
```

## 🎨 Paleta de Colores

- **Primario**: Azul (#1e3a8a)
- **Secundario**: Púrpura (#5b21b6)
- **Acento**: Azul cielo (#0ea5e9)
- **Fondo**: Gris claro (#f8fafc)
- **Texto**: Gris oscuro (#111827)

## 📊 SEO y Rendimiento

- **Metadatos Optimizados**: Títulos, descripciones y keywords
- **Schema Markup**: Datos estructurados para motores de búsqueda
- **Sitemap XML**: Indexación automática de páginas
- **Robots.txt**: Control del rastreo de bots
- **Open Graph**: Compartir en redes sociales
- **Twitter Cards**: Optimización para Twitter
- **PWA Ready**: Manifest y service workers

## 🚀 Despliegue

El proyecto está configurado para desplegarse en Vercel con optimizaciones automáticas:

- **Build Optimization**: Next.js 15 con optimizaciones automáticas
- **Image Optimization**: Optimización automática de imágenes
- **Code Splitting**: Carga lazy de componentes
- **CDN**: Distribución global de contenido

## 📈 Métricas y Analytics

- **Core Web Vitals**: Optimizado para LCP, FID y CLS
- **Lighthouse Score**: Objetivo 90+ en todas las categorías
- **Mobile First**: Diseño optimizado para dispositivos móviles
- **Performance**: Carga rápida y experiencia fluida

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Email**: hola@padpok.com
- **Website**: https://padpok.com
- **LinkedIn**: [PadPok](https://linkedin.com/company/padpok)
- **Twitter**: [@padpok](https://twitter.com/padpok)

## 🙏 Agradecimientos

- Diseño inspirado en [TextMagic](https://www.textmagic.com/)
- Iconos de [Heroicons](https://heroicons.com/)
- Animaciones con [Framer Motion](https://www.framer.com/motion/)
- Framework [Next.js](https://nextjs.org/)
