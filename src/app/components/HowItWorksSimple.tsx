'use client';

import React from 'react';
import { ClipboardList, UserPlus, BarChart3 } from 'lucide-react';

const steps = [
  {
    title: 'Create a tournament',
    description: 'Set the sport, format and rules. Publish your event in under 2 minutes.',
    Icon: ClipboardList,
  },
  {
    title: 'Invite players',
    description: 'Share a link or add players directly. Registration is smooth and simple.',
    Icon: UserPlus,
  },
  {
    title: 'Track results & rankings',
    description: 'Enter scores from mobile and Padpok updates brackets, standings and medals.',
    Icon: BarChart3,
  },
];

export default function HowItWorksSimple() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            How it works
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Run your league or tournament in three simple steps.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map(({ title, description, Icon }, index) => (
            <div
              key={title}
              className="relative rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 text-white">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{index + 1}. {title}</h3>
              <p className="mt-2 text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

