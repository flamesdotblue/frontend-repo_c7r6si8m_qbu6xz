import React from 'react';

const metrics = [
  { label: 'faster resolutions', value: '2x' },
  { label: 'lower ticket volume', value: '40%' },
  { label: 'boost in CSAT', value: '52%' },
  { label: 'avg response time', value: '2s' },
];

export default function MetricsStrip() {
  return (
    <section className="w-full border-y border-white/10 bg-slate-950/60 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-10 sm:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.label} className="flex flex-col items-center text-center">
            <div className="text-3xl font-semibold tracking-tight sm:text-4xl bg-gradient-to-r from-violet-300 via-sky-300 to-amber-200 bg-clip-text text-transparent">
              {m.value}
            </div>
            <div className="mt-2 text-xs uppercase tracking-wide text-slate-300">{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
