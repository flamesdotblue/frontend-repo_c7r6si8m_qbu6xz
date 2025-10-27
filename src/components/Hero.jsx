import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Play, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[86vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white">
      {/* Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient veil so text stays readable without blocking pointer events */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950/90" />

      <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 py-24 text-center md:py-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <Rocket className="h-3.5 w-3.5 text-violet-300" />
          <span>Support Agent</span>
        </div>

        <h1 className="mt-6 bg-gradient-to-r from-violet-300 via-sky-300 to-amber-200 bg-clip-text text-4xl font-semibold leading-tight text-transparent md:text-6xl">
          From Firefighting to Frictionless Support
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-200 md:text-lg">
          Deliver Instant, Accurate Answers—Before Your Customers Even Ask. CloudKitect's AI Agent learns your exact processes, connects to every source of truth, and delivers support that's fast, compliant, and human‑level accurate.
        </p>

        {/* Quick metrics pill */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-300">
          <span className="rounded-full bg-white/5 px-3 py-1 backdrop-blur">Avg Response: <span className="font-semibold text-white">2s</span></span>
          <span className="rounded-full bg-white/5 px-3 py-1 backdrop-blur">Deflection: <span className="font-semibold text-white">60%</span></span>
          <span className="rounded-full bg-white/5 px-3 py-1 backdrop-blur">CSAT: <span className="font-semibold text-white">+22%</span></span>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href="#demo" className="group inline-flex items-center gap-2 rounded-lg bg-violet-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/25 transition hover:bg-violet-400">
            See Live Demo
            <Play className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
          <a href="#contact" className="group inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10">
            Book a Discovery Call
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Chat preview card */}
        <div className="mt-12 w-full max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-4 text-left backdrop-blur-md">
          <div className="text-xs text-slate-300">AI Agent · 0.8s</div>
          <div className="mt-2 rounded-lg bg-slate-900/70 p-4 text-sm text-slate-100">
            Yes! Your device is covered until March 2026. I can help you create an RMA or schedule a repair.
            <div className="mt-3 text-xs text-slate-400">Verified Source: Warranty Portal</div>
          </div>
          <div className="mt-3 flex gap-2">
            <button className="rounded-md bg-sky-500/90 px-3 py-2 text-xs font-medium text-white hover:bg-sky-400">Create RMA</button>
            <button className="rounded-md border border-white/15 bg-white/5 px-3 py-2 text-xs font-medium text-white/90 hover:bg-white/10">Schedule Repair</button>
          </div>
        </div>
      </div>
    </section>
  );
}
