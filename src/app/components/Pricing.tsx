'use client';

import React from 'react';
import { Check } from 'lucide-react';
import { useRouter } from 'next/navigation';

type Plan = {
  name: string;
  price: string;
  description: string;
  cta: string;
  features: string[];
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    name: 'Starter',
    price: 'Free',
    description: '1 tournament, up to 8 players',
    cta: 'Get Started',
    features: ['1 tournament', 'Up to 8 players', 'Basic standings'],
  },
  {
    name: 'Pro',
    price: '€9.99/mo',
    description: 'Unlimited tournaments, up to 100 players',
    cta: 'Get Started',
    features: ['Unlimited tournaments', 'Up to 100 players', 'Advanced stats'],
    highlighted: true,
  },
  {
    name: 'Club',
    price: '€29.99/mo',
    description: 'Unlimited everything, for clubs',
    cta: 'Get Started',
    features: ['Unlimited everything', 'Club management', 'Priority support'],
  },
];

export default function Pricing() {
  const router = useRouter();

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Simple pricing
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Start free. Upgrade when you need more power. No commissions.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 border shadow-sm transition-shadow hover:shadow-lg ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-blue-600/5 to-emerald-500/5 border-blue-600/20'
                  : 'bg-white border-slate-200'
              }`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold text-slate-900">{plan.name}</h3>
                <p className="text-2xl font-bold text-slate-900">{plan.price}</p>
              </div>
              <p className="mt-2 text-slate-600">{plan.description}</p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-slate-700">
                    <Check className="w-5 h-5 text-emerald-500 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => router.push('/registro-temprano')}
                className={`mt-8 w-full inline-flex items-center justify-center rounded-xl px-4 py-3 font-semibold transition-colors ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-blue-600 to-emerald-500 text-white hover:opacity-95'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

