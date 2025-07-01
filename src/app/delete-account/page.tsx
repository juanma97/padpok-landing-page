'use client';
import React, { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function DeleteAccount() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await addDoc(collection(db, 'delete-accounts-requests'), {
        email,
        password,
        createdAt: serverTimestamp(),
      });
      setSubmitted(true);
    } catch {
      setError('Hubo un error al enviar la solicitud. Intenta de nuevo.');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', padding: '48px 24px' }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24 }}>Solicitar eliminación de cuenta</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              style={{ width: '100%', padding: 10, marginTop: 4, borderRadius: 8, border: '1px solid #ccc' }}
            />
          </label>
          <label>
            Contraseña
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              style={{ width: '100%', padding: 10, marginTop: 4, borderRadius: 8, border: '1px solid #ccc' }}
            />
          </label>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit" style={{ background: '#0070f3', color: '#fff', padding: 12, borderRadius: 8, border: 'none', fontWeight: 600, cursor: 'pointer' }}>
            Solicitar eliminación
          </button>
        </form>
      ) : (
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <h2 style={{ color: '#0070f3', fontWeight: 700 }}>¡Solicitud enviada!</h2>
          <p>Procesaremos tu solicitud lo antes posible.</p>
        </div>
      )}
    </div>
  );
} 