import React from 'react';

export default function PolicyPrivacy() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px' }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 24 }}>Política de Privacidad</h1>
      <p style={{ marginBottom: 16 }}>
        En Padpok, valoramos tu privacidad y nos comprometemos a proteger tus datos personales. Esta política explica cómo recopilamos, usamos y protegemos tu información cuando utilizas nuestra aplicación.
      </p>
      <h2 style={{ fontSize: 22, fontWeight: 600, marginTop: 32, marginBottom: 12 }}>1. Información que recopilamos</h2>
      <ul style={{ marginBottom: 16, paddingLeft: 24 }}>
        <li>• Datos de registro: correo electrónico y nombre.</li>
        <li>• Información de uso: actividades dentro de la app, partidos organizados, grupos creados, etc.</li>
        <li>• Datos técnicos: tipo de dispositivo, sistema operativo y dirección IP.</li>
      </ul>
      <h2 style={{ fontSize: 22, fontWeight: 600, marginTop: 32, marginBottom: 12 }}>2. Uso de la información</h2>
      <ul style={{ marginBottom: 16, paddingLeft: 24 }}>
        <li>• Mejorar la experiencia de usuario y las funcionalidades de la app.</li>
        <li>• Enviar notificaciones relevantes sobre partidos, grupos o novedades.</li>
        <li>• Cumplir con obligaciones legales y de seguridad.</li>
      </ul>
      <h2 style={{ fontSize: 22, fontWeight: 600, marginTop: 32, marginBottom: 12 }}>3. Compartir datos</h2>
      <p style={{ marginBottom: 16 }}>
        No compartimos tu información personal con terceros, salvo cuando sea necesario para el funcionamiento de la app o requerido por ley.
      </p>
      <h2 style={{ fontSize: 22, fontWeight: 600, marginTop: 32, marginBottom: 12 }}>4. Seguridad</h2>
      <p style={{ marginBottom: 16 }}>
        Implementamos medidas de seguridad para proteger tus datos contra accesos no autorizados.
      </p>
      <h2 style={{ fontSize: 22, fontWeight: 600, marginTop: 32, marginBottom: 12 }}>5. Tus derechos</h2>
      <p style={{ marginBottom: 16 }}>
        Puedes solicitar el acceso, rectificación o eliminación de tus datos personales escribiéndonos a soporte@padpok.com.
      </p>
      <h2 style={{ fontSize: 22, fontWeight: 600, marginTop: 32, marginBottom: 12 }}>6. Cambios en la política</h2>
      <p style={{ marginBottom: 16 }}>
        Nos reservamos el derecho de modificar esta política. Notificaremos cualquier cambio relevante a través de la app o por email.
      </p>
      <p style={{ marginTop: 32, color: '#888' }}>
        Última actualización: {new Date().toLocaleDateString('es-ES')}
      </p>
    </div>
  );
} 