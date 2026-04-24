/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Menu, 
  Shield, 
  Zap, 
  Layers, 
  Sparkles, 
  Activity, 
  Moon, 
  Sun,
  ChevronRight,
  Monitor,
  Heart,
  Globe
} from 'lucide-react';

export default function App() {
  return (
    <div className="relative min-h-screen font-sans bg-brand-black pb-20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-brand-bg-card/80 backdrop-blur-md border-b border-brand-border md:px-12">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-brand-accent-blue flex items-center justify-center">
            <Sparkles className="text-white w-5 h-5" />
          </div>
          <span className="font-sans font-bold text-xl tracking-tight uppercase">LUMINA</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest opacity-50">
          <a href="#features" className="hover:opacity-100 transition-opacity">Expertise</a>
          <a href="#showcase" className="hover:opacity-100 transition-opacity">Showcase</a>
          <a href="#about" className="hover:opacity-100 transition-opacity">Contact</a>
        </div>

        <button className="px-5 py-2 rounded-full bg-brand-white text-brand-black text-xs font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-transform flex items-center gap-2">
          Voir Projets
          <ArrowRight className="w-4 h-4" />
        </button>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-32 grid grid-cols-1 md:grid-cols-4 md:grid-rows-[repreat(auto-fill,300px)] gap-4 md:gap-6">
        
        {/* HERO CARD */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-2 md:row-span-2 bento-card bg-gradient-to-br from-[#1e1e1e] to-[#111111] min-h-[400px]"
        >
          <div>
            <div className="bento-label">Studio Créatif</div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-2 mb-6 text-balance">
              Propulser vos idées<br/>dans le <span className="text-brand-accent-blue italic font-serif lowercase tracking-normal">futur</span> digital.
            </h1>
          </div>
          
          <div className="flex flex-col gap-6">
             <button className="w-fit px-8 py-3 rounded-full bg-brand-white text-brand-black font-bold text-sm tracking-widest uppercase flex items-center gap-2 hover:bg-opacity-90 transition-all">
                Voir Projets
                <ChevronRight className="w-4 h-4" />
             </button>
             
             <div className="relative h-32 w-full bg-brand-black/40 rounded-2xl border border-brand-border overflow-hidden p-4 flex gap-4">
               <div className="flex-1 bg-white/5 rounded-lg animate-pulse" />
               <div className="flex-1 bg-white/10 rounded-lg animate-pulse delay-75" />
             </div>
          </div>
        </motion.div>

        {/* EXPERTISE CARD */}
        <div className="md:col-span-1 md:row-span-1 bento-card bg-[#1e1e1e]">
          <div className="bento-label">Expertise</div>
          <div className="flex flex-col justify-center flex-1">
            <div className="text-6xl font-bold text-brand-white">12+</div>
            <div className="text-xs text-[#888] font-medium mt-1 uppercase tracking-widest">Années d'expérience</div>
          </div>
        </div>

        {/* SOCIAL CARD */}
        <div className="md:col-span-1 md:row-span-1 bento-card bg-[#0077b5] text-white flex items-center justify-center text-2xl font-bold hover:opacity-90 cursor-pointer">
          LinkedIn
        </div>

        {/* LOCATION CARD */}
        <div className="md:col-span-1 md:row-span-1 bento-card">
          <div className="bento-label">Localisation</div>
          <div className="flex flex-col flex-1 justify-center">
            <div className="text-xl font-semibold">Paris, FR</div>
            <div className="text-xs text-[#666] mt-1 font-medium">Global Remote Possible</div>
          </div>
        </div>

        {/* SERVICES CARD */}
        <div className="md:col-span-1 md:row-span-2 bento-card">
          <div className="bento-label">Services</div>
          <ul className="flex-1 flex flex-col justify-center space-y-4 my-6">
            {['Brand Design', 'Web Development', 'Mobile Apps', 'UI/UX Audit', '3D Motion'].map((service, i) => (
              <li key={i} className="text-lg font-medium border-b border-brand-border pb-2 opacity-80 hover:opacity-100 transition-opacity cursor-default">
                {service}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 text-sm text-[#4ade80] font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#4ade80]" />
            Disponible
          </div>
        </div>

        {/* LATEST PROJECT CARD */}
        <div id="showcase" className="md:col-span-2 md:row-span-1 bento-card group overflow-hidden">
          <div className="bento-label">Dernier Projet</div>
          <div className="flex justify-between items-end">
            <h2 className="text-3xl font-bold">NeoBank App</h2>
            <div className="text-xs text-[#888] uppercase tracking-widest mb-1">Fintech / 2024</div>
          </div>
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent-blue/10 blur-[60px] group-hover:bg-brand-accent-blue/20 transition-all" />
        </div>

        {/* PROJECT 2 CARD */}
        <div className="md:col-span-2 md:row-span-2 bento-card group overflow-hidden relative p-0">
          <img 
            src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2070&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
            alt="Showcase"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          <div className="absolute bottom-10 left-10 z-10">
            <div className="bento-label !text-white/70">Showcase</div>
            <h3 className="text-4xl font-bold text-white">Lumina Wellness</h3>
            <p className="text-white/60 text-sm mt-2 max-w-xs">An AI-powered wellness journey designed for the modern rhythm.</p>
          </div>
        </div>

        {/* CONTACT CARD */}
        <div className="md:col-span-1 md:row-span-1 bento-card bg-gradient-to-br from-brand-accent-purple to-brand-accent-blue cursor-pointer hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
          <div className="bento-label !text-white/80">Contact</div>
          <div className="flex flex-col flex-1 justify-center">
            <div className="text-2xl font-bold text-white mb-1">Parlons-en</div>
            <ArrowRight className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* CLIENTS CARD */}
        <div className="md:col-span-1 md:row-span-1 bento-card">
          <div className="bento-label">Clients</div>
          <div className="flex flex-col flex-1 justify-center">
            <div className="text-5xl font-bold">150+</div>
            <div className="text-xs text-[#888] font-medium mt-1 uppercase tracking-widest">Projets livrés</div>
          </div>
        </div>

        {/* FEEDBACK CARD */}
        <div className="md:col-span-1 md:row-span-1 bento-card bg-[#1a1a1a]">
          <div className="bento-label">Feedback</div>
          <div className="flex flex-col flex-1 justify-center italic text-[#ccc] text-sm leading-relaxed">
            "Un travail exceptionnel et une vision unique. Lumina a transformé notre approche digitale."
          </div>
          <div className="text-[10px] text-[#666] font-bold uppercase tracking-widest mt-4">
            — Marc L. (CTO)
          </div>
        </div>

        {/* FEATURES GRID REPLICATED IN BENTO STYLE */}
        <div className="md:col-span-1 md:row-span-1 bento-card group">
          <div className="flex flex-col h-full justify-between">
            <Shield className="w-8 h-8 text-emerald-400 opacity-50 group-hover:opacity-100 transition-opacity" />
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-1">Security</h4>
              <p className="text-[10px] text-[#666]">Encrypted by design.</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-1 md:row-span-1 bento-card group">
          <div className="flex flex-col h-full justify-between">
            <Zap className="w-8 h-8 text-yellow-400 opacity-50 group-hover:opacity-100 transition-opacity" />
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-1">Speed</h4>
              <p className="text-[10px] text-[#666]">Optimized performance.</p>
            </div>
          </div>
        </div>

      </main>

      <footer className="max-w-7xl mx-auto px-6 mt-12 flex flex-col md:flex-row justify-between items-center py-10 border-t border-brand-border">
        <div className="text-[10px] font-bold uppercase tracking-[3px] opacity-30">
          © 2026 LUMINA STUDIO • PARIS
        </div>
        <div className="flex gap-10 mt-6 md:mt-0 text-[10px] font-bold uppercase tracking-widest opacity-40">
          <a href="#" className="hover:opacity-100 transition-opacity">Privacy</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Behance</a>
        </div>
      </footer>
    </div>
  );
}
