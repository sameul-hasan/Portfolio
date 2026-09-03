import React from 'react';
import { Users, Award, Calendar, CheckCircle2, ChevronRight, ShieldCheck, Flame } from 'lucide-react';
import { leadershipData } from '../data/leadership';

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-cyan-400" />
            Governance & Community Impact
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Leadership & <span className="text-gradient">Organization</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Leading engineering organizations, organizing high-stakes technology congresses, and fostering hands-on technical environments where fellow students thrive.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadershipData.map((item, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-slate-800 relative overflow-hidden group"
            >
              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {item.period}
                  </span>
                </div>

                {/* Role & Org */}
                <div>
                  <h3 className="font-display font-bold text-2xl text-white group-hover:text-cyan-300 transition-colors">
                    {item.role}
                  </h3>
                  <div className="text-sm font-semibold text-slate-300 mt-0.5">
                    {item.organization}
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-2 pt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.highlights.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Stat pill */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <div className="text-xs font-mono text-cyan-400 font-medium">
                  {item.stats}
                </div>
                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
