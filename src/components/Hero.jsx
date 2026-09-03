import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Terminal, Sparkles, Trophy, Cpu, Code2, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const roles = profileData.roles;
    const currentRole = roles[currentRoleIndex];
    let timeout;

    if (!isDeleting && displayedText !== currentRole) {
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
      }, 70);
    } else if (!isDeleting && displayedText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText !== '') {
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
      }, 40);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Decorative Grids & Radial Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 shadow-sm shadow-cyan-500/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-xs font-mono text-cyan-300 font-medium tracking-wide">
                Available for High-Impact Projects & Roles
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h2 className="text-sm md:text-base font-mono uppercase tracking-widest text-slate-400">
                Hello World, I'm
              </h2>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white">
                Sameul <span className="text-gradient">Hasan</span>
              </h1>
              
              {/* Dynamic Typewriter Title */}
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                <span className="text-lg sm:text-2xl font-mono text-cyan-400 font-semibold">
                  {displayedText}
                </span>
                <span className="w-0.5 h-6 sm:h-8 bg-cyan-400 ml-1 animate-pulse"></span>
              </div>
            </div>

            {/* Subtitle / Bio summary */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {profileData.bio}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all flex items-center gap-2 group"
              >
                <span>Explore Featured Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-xl glass-card text-slate-200 font-semibold text-sm hover:text-white hover:border-cyan-500/40 transition-all flex items-center gap-2"
              >
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Quick Metrics Badges */}
            <div className="pt-6 grid grid-cols-2 gap-3 max-w-xs sm:max-w-sm mx-auto lg:mx-0">
              {profileData.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm text-left hover:border-cyan-500/30 transition-all"
                >
                  <div className="text-lg sm:text-xl font-display font-bold text-white tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-xs font-medium text-cyan-400 -mt-0.5">{metric.label}</div>
                  <div className="text-[10px] text-slate-400 font-mono mt-0.5">{metric.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Right Visuals */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end space-y-6">
            
            {/* Visual Photo Card with Cyber Halo */}
            <div className="relative group">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 rounded-3xl blur-md opacity-40 group-hover:opacity-75 transition duration-500"></div>

              {/* Main Photo Card */}
              <div className="relative w-64 sm:w-80 h-80 sm:h-96 rounded-2xl overflow-hidden glass-card p-2 border border-cyan-500/30 shadow-2xl">
                <div className="w-full h-full rounded-xl overflow-hidden bg-slate-950 relative">
                  <img
                    src="Sameul.png"
                    alt="Sameul Hasan"
                    className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition duration-700 ease-out"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  
                  {/* Overlay Badge at Bottom of Photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-cyan-500/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-white">Sameul Hasan</div>
                        <div className="text-[10px] text-cyan-300 font-mono">Daffodil Int'l Univ.</div>
                      </div>
                      <div className="px-2 py-1 rounded bg-cyan-500/20 border border-cyan-500/40 text-[10px] font-mono font-bold text-cyan-300 flex items-center gap-1">
                        <Trophy className="w-3 h-3 text-amber-400" />
                        Global Nominee
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Tech Pill 1 */}
              <div className="absolute -top-4 -left-4 px-3 py-1.5 rounded-lg glass-card border border-cyan-500/30 shadow-lg text-xs font-mono text-cyan-300 flex items-center gap-1.5 animate-float">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>AI & Web Developer</span>
              </div>

              {/* Floating Tech Pill 2 */}
              <div className="absolute -bottom-4 -right-4 px-3 py-1.5 rounded-lg glass-card border border-indigo-500/30 shadow-lg text-xs font-mono text-indigo-300 flex items-center gap-1.5 animate-float-delayed">
                <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>Full-Stack & SLMs</span>
              </div>
            </div>

            {/* Interactive Micro Terminal Widget */}
            <div className="w-full max-w-sm rounded-xl bg-slate-950/90 border border-slate-800 p-3.5 font-mono text-[11px] shadow-xl text-left backdrop-blur-md">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 mb-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                </div>
                <span className="text-[10px] text-slate-500">engineer_identity.sh</span>
              </div>
              <div className="space-y-1 text-slate-300">
                <p><span className="text-cyan-400">$</span> status --active</p>
                <p className="text-emerald-400">✓ DIU Robotics Club President</p>
                <p className="text-emerald-400">✓ NASA Space Apps 2024 Global Nominee</p>
                <p className="text-cyan-300 font-semibold">→ "Build with AI. Lead with purpose."</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
