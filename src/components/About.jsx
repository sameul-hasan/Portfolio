import React from 'react';
import { Code2, Users, Sparkles, Target, HeartHandshake, GraduationCap, BookOpen, Layers } from 'lucide-react';
import { profileData } from '../data/profile';

const iconMap = {
  Code2: Code2,
  Users: Users,
  Sparkles: Sparkles,
  Target: Target,
  HeartHandshake: HeartHandshake,
};

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Engineering Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Driven by Purpose. <span className="text-gradient">Anchored in Code.</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            I believe technology is at its best when it serves as a force multiplier—not just for individual productivity, but for elevating entire student and developer communities.
          </p>
        </div>

        {/* 5 Brand Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-14">
          {profileData.brandPillars.map((pillar, i) => {
            const IconComponent = iconMap[pillar.icon] || Sparkles;
            return (
              <div
                key={i}
                className="glass-card glass-card-hover p-5 rounded-2xl flex flex-col justify-between space-y-4 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/15 transition-all"></div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 shadow-sm">
                  <IconComponent className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-display font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Academic Journey Card */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 relative overflow-hidden max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-indigo-500/20 border border-indigo-500/30 text-indigo-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-white">Academic Foundation</h3>
              <p className="text-xs font-mono text-indigo-300">Software Engineering Program</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Degree Details */}
            <div className="md:col-span-6 space-y-3 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center justify-between gap-2">
                <span className="font-bold text-white text-base">
                  {profileData.education.degree}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold">
                  CGPA {profileData.education.cgpa}
                </span>
              </div>
              <div className="text-xs text-slate-400">
                {profileData.education.university} — {profileData.education.location}
              </div>
              <div className="flex flex-wrap gap-2 text-[11px] font-mono text-slate-400 pt-1">
                <span className="px-2 py-1 rounded bg-slate-800 text-slate-300">
                  {profileData.education.status}
                </span>
                <span className="px-2 py-1 rounded bg-slate-800 text-cyan-300">
                  Expected Grad: {profileData.education.expectedGraduation}
                </span>
              </div>
            </div>

            {/* Core Curriculum Highlight */}
            <div className="md:col-span-6 space-y-3">
              <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase tracking-wide">
                <BookOpen className="w-4 h-4" />
                <span>Core Competencies & Coursework</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Strong theoretical and practical grounding in Data Structures & Algorithms, Object-Oriented Software Design (Java & Python), Web Systems Engineering, Database Systems (MySQL & MongoDB), and Applied Artificial Intelligence.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
