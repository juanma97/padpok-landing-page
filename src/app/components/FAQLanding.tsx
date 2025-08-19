'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Do players need to pay?',
    a: 'Players can join tournaments for free on the Starter tier. Organizers choose if they want to charge entry fees externally. Padpok takes no commission.',
  },
  {
    q: 'Can I use it for my club?',
    a: 'Yes. The Club plan includes club management tools, unlimited tournaments and priority support.',
  },
  {
    q: 'Which sports are supported?',
    a: 'Padpok focuses on racket sports first (padel, tennis, badminton) and is extendable to more sports soon.',
  },
  {
    q: 'How do rankings and medals work?',
    a: 'Standings update automatically after each match. Medals are awarded based on results, participation and event milestones.',
  },
];

export default function FAQLanding() {
  const [open, setOpen] = React.useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Answers for organizers and players.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((item, idx) => (
            <div key={idx} className="rounded-xl border border-slate-200 bg-white shadow-sm">
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <span className="text-slate-900 font-medium">{item.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 transition-transform ${open === idx ? 'rotate-180' : ''}`}
                />
              </button>
              {open === idx && (
                <div className="px-5 pb-5 -mt-2 text-slate-600">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

