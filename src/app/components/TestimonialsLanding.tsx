'use client';

import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Ana García',
    role: 'Club Organizer',
    quote:
      'Padpok saved us so much time organizing our local padel league. Players love the rankings and medals!',
    image: 'https://ui-avatars.com/api/?name=Ana+Garcia&background=1E3A8A&color=fff',
  },
  {
    name: 'Marco Rossi',
    role: 'Tennis Coach',
    quote:
      'Registration is smooth and match management is effortless. We moved our tournaments to Padpok.',
    image: 'https://ui-avatars.com/api/?name=Marco+Rossi&background=1E3A8A&color=fff',
  },
  {
    name: 'Laura Pérez',
    role: 'Player',
    quote:
      'I joined a league in minutes and now I can track my progress each week. Super easy to use!',
    image: 'https://ui-avatars.com/api/?name=Laura+Perez&background=1E3A8A&color=fff',
  },
];

export default function TestimonialsLanding() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Loved by organizers and players
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Real stories from people who run and play in Padpok events.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={56}
                  height={56}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
              <p className="mt-4 text-slate-700">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

