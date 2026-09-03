import React, { useState } from 'react';
import { Brain, Layout, Code, Server, Check, Layers, Cpu } from 'lucide-react';
import { skillsData } from '../data/skills';

const iconMap = {
  Brain: Brain,
  Layout: Layout,
  Code: Code,
  Server: Server,
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            Capabilities Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Technical <span className="text-gradient">Skills</span> & Toolkit
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            A comprehensive overview of programming languages, modern full-stack frameworks, AI/ML inference pipelines, and cloud systems.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillsData.map((category, idx) => {
            const IconComponent = iconMap[category.icon] || Code;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm flex items-center gap-2 transition-all ${
                  activeTab === idx
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 scale-[1.02]'
                    : 'glass-card text-slate-300 hover:text-white hover:border-cyan-500/30'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{category.category}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Skills Grid */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-cyan-500/20 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {skillsData[activeTab].skills.map((skill, sIdx) => {
              const getLevelBadgeClass = (level) => {
                switch (level) {
                  case 'Expert':
                    return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
                  case 'Advanced':
                    return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40';
                  case 'Intermediate':
                    return 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40';
                  default:
                    return 'bg-slate-800 text-slate-300 border-slate-700';
                }
              };

              return (
                <div
                  key={sIdx}
                  className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/30 transition-all flex flex-col justify-between space-y-2 group"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display font-bold text-sm sm:text-base text-white group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded-md text-[10px] font-mono border font-semibold ${getLevelBadgeClass(
                        skill.level
                      )}`}
                    >
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
