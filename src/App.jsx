import React from 'react';
import Hero from './components/Hero';
import MetricsStrip from './components/MetricsStrip';
import Capabilities from './components/Capabilities';
import ROIAndFAQ from './components/ROIAndFAQ';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-violet-400 via-sky-400 to-amber-300" />
            <span className="text-sm font-semibold tracking-tight">CloudKitect</span>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#how" className="hover:text-white">How It Works</a>
            <a href="#capabilities" className="hover:text-white">Capabilities</a>
            <a href="#roi" className="hover:text-white">ROI</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="#demo" className="rounded-lg bg-violet-500 px-3 py-1.5 font-medium text-white hover:bg-violet-400">See Live Demo</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <MetricsStrip />
        <section id="capabilities"><Capabilities /></section>
        <section id="roi"><ROIAndFAQ /></section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950 py-10 text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <div className="text-sm">© 2025 CloudKitect. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <a className="hover:text-white" href="#">Privacy Policy</a>
            <a className="hover:text-white" href="#">Terms of Service</a>
            <a className="hover:text-white" href="#">Documentation</a>
            <a className="hover:text-white" href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
