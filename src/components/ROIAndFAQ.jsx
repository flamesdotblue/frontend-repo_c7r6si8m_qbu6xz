import React from 'react';
import { TrendingUp, HelpCircle, PhoneCall, CheckCircle2 } from 'lucide-react';

export default function ROIAndFAQ() {
  return (
    <section className="w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* ROI Panel */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
              <TrendingUp className="h-3.5 w-3.5" /> Measurable ROI
            </div>
            <h3 className="mt-4 text-2xl font-semibold md:text-3xl">The ROI You Can Prove</h3>

            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-300">
              <Stat label="Avg Response Time" before="12 hrs" after="2 mins" />
              <Stat label="Resolution Rate" before="65%" after="93%" />
              <Stat label="Ticket Volume" before="baseline" after="↓ 40%" />
              <Stat label="CSAT" before="68%" after="89%" />
              <Stat label="Cost per Ticket" before="baseline" after="↓ 45%" />
            </div>

            <blockquote className="mt-6 rounded-xl border border-white/10 bg-white/5 p-5 text-slate-200">
              “We reduced repeat queries by half and improved customer satisfaction without adding a single headcount.”
              <div className="mt-2 text-sm text-slate-400">— Head of CX, Global Consumer Brand</div>
            </blockquote>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#roi" className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-400">See Your ROI Estimate</a>
              <a href="#demo" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10">
                <PhoneCall className="h-4 w-4" /> Book Discovery Call
              </a>
            </div>
          </div>

          {/* FAQ Panel */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200">
              <HelpCircle className="h-3.5 w-3.5" /> Frequently Asked Questions
            </div>
            <div className="mt-4 divide-y divide-white/10 rounded-xl border border-white/10 bg-slate-900/40">
              {faq.map((f) => (
                <details key={f.q} className="group p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-white">
                    <span className="text-sm font-medium">{f.q}</span>
                    <span className="text-slate-400">+</span>
                  </summary>
                  <p className="mt-2 text-sm text-slate-300">{f.a}</p>
                </details>
              ))}
            </div>

            <ul className="mt-6 grid grid-cols-1 gap-3 text-sm text-slate-300 md:grid-cols-2">
              {[
                'Private by design (runs in your VPC)',
                'Custom-built workflows and guardrails',
                'Human-level experience, policy-compliant',
                'Omnichannel: chat, email, WhatsApp, portal',
              ].map((b) => (
                <li key={b} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" />{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, before, after }) {
  return (
    <div className="rounded-lg border border-white/10 bg-slate-900/40 p-4">
      <div className="text-xs uppercase tracking-wide text-slate-400">{label}</div>
      <div className="mt-2 flex items-baseline justify-between">
        <span className="text-sm text-slate-400">Before: {before}</span>
        <span className="text-base font-semibold text-emerald-300">After: {after}</span>
      </div>
    </div>
  );
}

const faq = [
  {
    q: 'Will the agent hallucinate?',
    a: 'It cites sources for every answer and follows strict policy guardrails. When uncertain, it escalates with full context.'
  },
  {
    q: 'Can it issue refunds or RMAs?',
    a: 'Yes—with permissions. It executes workflows like refunds and RMAs exactly as your SOP defines.'
  },
  {
    q: 'Where does it run?',
    a: 'Inside your cloud (VPC) for full control, privacy, and compliance.'
  },
  {
    q: 'How do we keep knowledge fresh?',
    a: 'It auto-syncs from your sources (FAQs, CRMs, ticket logs) and flags stale content.'
  },
  {
    q: 'How fast can we launch?',
    a: 'Most teams go live in days, not months—connect data, set guardrails, deploy.'
  },
];
