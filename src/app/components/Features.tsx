'use client';

import React from 'react';
import { Trophy, Users, Sparkles, Timer } from 'lucide-react';

type Feature = {
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const features: Feature[] = [
  {
    title: 'Create tournaments in minutes',
    description:
      'Spin up a league or tournament with formats, brackets and schedules in a few clicks.',
    Icon: Timer,
  },
  {
    title: 'Automatic rankings & medals',
    description:
      'Standings, points, medals and awards update automatically as results come in.',
    Icon: Trophy,
  },
  {
    title: 'Easy player registration',
    description:
      'Share a link and let players register themselves. No spreadsheets. No headaches.',
    Icon: Users,
  },
  {
    title: 'Works for padel, tennis, badminton and more',
    description:
      'Optimized for racket sports today, extendable to any sport tomorrow.',
    Icon: Sparkles,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Everything you need to run great events
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Padpok makes organizing leagues and tournaments fast, simple and fun for everyone.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="group h-full rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 text-white">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                {title}
              </h3>
              <p className="mt-2 text-slate-600 text-base">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

