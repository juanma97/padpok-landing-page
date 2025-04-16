'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function EarlyAccessForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await addDoc(collection(db, 'earlyAccess'), {
        email,
        createdAt: serverTimestamp()
      });
      setSubmitted(true);
    } catch (err) {
      setError('Hubo un error al guardar tu email. Por favor, inténtalo de nuevo.');
      console.error('Error al guardar email:', err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-3xl shadow-xl p-8 sm:p-12"
    >
      {!submitted ? (
        <>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Únete a la lista de espera
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Sé uno de los primeros en probar PadPok y disfruta de beneficios exclusivos
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-3 text-lg text-gray-900 rounded-xl border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
                placeholder="tu@email.com"
                required
              />
              {error && (
                <p className="mt-2 text-sm text-red-600">{error}</p>
              )}
            </div>
            
            <button
              type="submit"
              className="w-full rounded-full bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Unirme a la lista de espera
            </button>
          </form>

          <div className="mt-12 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Beneficios exclusivos</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-500 mr-2 mt-1" />
                <span className="text-gray-900">Acceso anticipado a la aplicación</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-500 mr-2 mt-1" />
                <span className="text-gray-900">Influencia en el desarrollo de nuevas características</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-500 mr-2 mt-1" />
                <span className="text-gray-900">Badge de &ldquo;Early Adopter&rdquo; en tu perfil</span>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <div className="text-center py-12">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¡Gracias por unirte!
          </h2>
          <p className="text-xl text-gray-600">
            Te mantendremos informado sobre el lanzamiento y los próximos pasos.
          </p>
        </div>
      )}
    </motion.div>
  );
} 