import React from 'react';
import { Trophy, Rocket, Award, Flame, Star, CheckCircle2 } from 'lucide-react';
import { achievementsData } from '../data/achievements';

const iconMap = {
  Rocket: Rocket,
  Trophy: Trophy,
  Award: Award,
  Flame: Flame,
};

export default function Achievements() {
  const featuredItem = achievementsData.find(a => a.featured && a.icon === 'Rocket');
  const otherItems = achievementsData.filter(a => a !== featuredItem);

  return (
    <section id="achievements" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            Milestones & Honors
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Recognized <span className="text-gradient-amber">Achievements</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            From international competitive hackathons to national Olympiad volunteer outreach, validated through execution under high-pressure parameters.
          </p>
        </div>

        {/* Featured Spotlight: NASA Space Apps Challenge 2024 */}
        {featuredItem && (
          <div className="mb-10 glass-card rounded-3xl p-6 sm:p-10 border border-amber-500/30 bg-gradient-to-r from-slate-900 via-slate-900/90 to-amber-950/20 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono text-xs font-bold flex items-center gap-1.5">
                    <Trophy className="w-3.5 h-3.5 text-amber-400" />
                    {featuredItem.award}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-slate-800 text-xs font-mono text-slate-300">
                    {featuredItem.team}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Year: {featuredItem.year}
                  </span>
                </div>

                <h3 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
                  {featuredItem.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                  {featuredItem.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-amber-200/90">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>Global Space Hackathon</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>1st in Barishal Division</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>Rapid 48-Hour Prototyping</span>
                  </div>
                </div>
              </div>

              {/* Visual Badge Graphic */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-3xl bg-gradient-to-tr from-amber-500/20 via-orange-500/20 to-indigo-500/20 border border-amber-500/40 flex flex-col items-center justify-center text-center p-4 shadow-xl shadow-amber-500/10 backdrop-blur-md">
                  <Rocket className="w-14 h-14 text-amber-400 mb-2 animate-float" />
                  <span className="font-display font-extrabold text-sm text-white">NASA Space Apps</span>
                  <span className="font-mono text-xs text-amber-300">Global Nominee</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherItems.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Award;
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between border border-slate-800 relative group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-300">
                      <IconComponent className="w-5 h-5 text-cyan-400" />
                    </div>
                    <span className="text-xs font-mono text-slate-400">{item.year}</span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">
                      {item.category}
                    </span>
                    <h4 className="font-display font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h4>
                    <div className="text-xs font-semibold text-amber-400">
                      {item.award}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
                  {item.team}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
