'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  GlobeAltIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Producto",
      links: [
        { name: "Características", href: "#features" },
        { name: "Precios", href: "#pricing" },
        { name: "Casos de Éxito", href: "#success" },
        { name: "API", href: "/api" },
        { name: "Integraciones", href: "/integrations" }
      ]
    },
    {
      title: "Recursos",
      links: [
        { name: "Centro de Ayuda", href: "/help" },
        { name: "Documentación", href: "/docs" },
        { name: "Blog", href: "/blog" },
        { name: "Webinars", href: "/webinars" },
        { name: "Comunidad", href: "/community" }
      ]
    },
    {
      title: "Empresa",
      links: [
        { name: "Sobre Nosotros", href: "/about" },
        { name: "Equipo", href: "/team" },
        { name: "Carreras", href: "/careers" },
        { name: "Prensa", href: "/press" },
        { name: "Contacto", href: "/contact" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Términos de Servicio", href: "/terms" },
        { name: "Política de Privacidad", href: "/privacy" },
        { name: "Cookies", href: "/cookies" },
        { name: "GDPR", href: "/gdpr" },
        { name: "Seguridad", href: "/security" }
      ]
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/company/padpok", icon: "💼" },
    { name: "Twitter", href: "https://twitter.com/padpok", icon: "🐦" },
    { name: "Facebook", href: "https://facebook.com/padpok", icon: "📘" },
    { name: "Instagram", href: "https://instagram.com/padpok", icon: "📷" },
    { name: "YouTube", href: "https://youtube.com/padpok", icon: "📺" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <span className="text-2xl font-bold">PadPok</span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                La plataforma líder para gestionar torneos, ligas y competiciones deportivas. 
                Digitaliza tu club deportivo y lleva tu gestión al siguiente nivel.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <MapPinIcon className="w-5 h-5 mr-3 text-blue-400" />
                  <span>Madrid, España</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <PhoneIcon className="w-5 h-5 mr-3 text-blue-400" />
                  <span>+34 900 000 000</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <EnvelopeIcon className="w-5 h-5 mr-3 text-blue-400" />
                  <span>hola@padpok.com</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-white">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-gray-800"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Mantente al día con las novedades
            </h3>
            <p className="text-gray-300 mb-6">
              Recibe las últimas actualizaciones, consejos y casos de éxito directamente en tu email.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200">
                Suscribirse
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center text-gray-400 text-sm mb-4 md:mb-0"
            >
              <span>© {currentYear} PadPok. Todos los derechos reservados.</span>
              <span className="mx-2">•</span>
              <span>Hecho con</span>
              <HeartIcon className="w-4 h-4 mx-1 text-red-500" />
              <span>en España</span>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center space-x-6"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* SEO Footer Links */}
      <div className="bg-gray-950 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-gray-500">
            <div>
              <h4 className="font-semibold text-gray-400 mb-2">Deportes</h4>
              <ul className="space-y-1">
                <li><a href="/padel" className="hover:text-gray-300">Pádel</a></li>
                <li><a href="/tenis" className="hover:text-gray-300">Tenis</a></li>
                <li><a href="/badminton" className="hover:text-gray-300">Bádminton</a></li>
                <li><a href="/squash" className="hover:text-gray-300">Squash</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-400 mb-2">Funcionalidades</h4>
              <ul className="space-y-1">
                <li><a href="/torneos" className="hover:text-gray-300">Gestión de Torneos</a></li>
                <li><a href="/ligas" className="hover:text-gray-300">Ligas Deportivas</a></li>
                <li><a href="/rankings" className="hover:text-gray-300">Rankings</a></li>
                <li><a href="/estadisticas" className="hover:text-gray-300">Estadísticas</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-400 mb-2">Soluciones</h4>
              <ul className="space-y-1">
                <li><a href="/clubes" className="hover:text-gray-300">Para Clubes</a></li>
                <li><a href="/federaciones" className="hover:text-gray-300">Para Federaciones</a></li>
                <li><a href="/eventos" className="hover:text-gray-300">Para Eventos</a></li>
                <li><a href="/jugadores" className="hover:text-gray-300">Para Jugadores</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-400 mb-2">Recursos</h4>
              <ul className="space-y-1">
                <li><a href="/blog" className="hover:text-gray-300">Blog</a></li>
                <li><a href="/tutoriales" className="hover:text-gray-300">Tutoriales</a></li>
                <li><a href="/faq" className="hover:text-gray-300">FAQ</a></li>
                <li><a href="/soporte" className="hover:text-gray-300">Soporte</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 