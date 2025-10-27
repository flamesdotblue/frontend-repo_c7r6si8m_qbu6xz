import React from 'react';
import { Shield, Settings, Headphones, BarChart3, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: Headphones,
    title: 'Response Automation',
    desc: 'Answers repetitive questions instantly with cited sources across every channel.'
  },
  {
    icon: Settings,
    title: 'Contextual Actions',
    desc: 'Executes workflows like warranty validation, order lookup, RMA creation, and bookings.'
  },
  {
    icon: Shield,
    title: 'Policy Guardrails',
    desc: 'Enforces refund limits, region rules, approvals, and escalation logic—by design.'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Feedback',
    desc: 'Tracks deflection, FCR, AHT and suggests retraining from real outcomes.'
  }
];

export default function Capabilities() {
  return (
    <section className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Instant Support That Mirrors Your Best Agents
          </h2>
          <p className="mt-3 text-slate-300">
            CloudKitect replicates your internal playbook—never guessing, always executing.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/80 to-sky-500/80 text-white shadow-lg">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{desc}</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Cites sources
                <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Escalates smartly
                <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Learns continuously
              </div>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-4">
          {[
            { step: '1', title: 'Connect Knowledge', desc: 'Plug in FAQs, manuals, ticket logs, policies, and CRMs.' },
            { step: '2', title: 'Train Behavior', desc: 'We model your SOPs: who handles what, and when.' },
            { step: '3', title: 'Deploy & Learn', desc: 'Starts answering, citing sources, routing complex cases.' },
            { step: '4', title: 'Monitor & Evolve', desc: 'Dashboards track accuracy, CSAT, and time saved.' },
          ].map((s) => (
            <div key={s.step} className="rounded-xl border border-white/10 bg-slate-900/40 p-5">
              <div className="text-sm text-slate-300">Step {s.step}</div>
              <div className="mt-1 font-medium text-white">{s.title}</div>
              <div className="mt-1 text-sm text-slate-300">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
