import React, { useState } from 'react';
import { Sparkles, Github, ExternalLink, ArrowUpRight, Cpu, Layers } from 'lucide-react';
import { projectsData } from '../data/projects';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    'All',
    'AI & SLMs',
    'AI & HealthTech',
    'AI & Agentic Systems',
    'Web & Full-Stack',
  ];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              Flagship Engineering
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Featured <span className="text-gradient">Projects</span> & Systems
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore intelligent systems spanning quantized local language models, medical vision triage platforms, rapid full-stack operations, and distributed edge schedulers.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  activeCategory === cat
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group border ${
                project.featured
                  ? 'border-cyan-500/30 bg-gradient-to-b from-slate-900/90 to-slate-950/90'
                  : 'border-slate-800/80'
              }`}
            >
              {/* Corner Aura for Featured items */}
              {project.featured && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all pointer-events-none"></div>
              )}

              <div className="space-y-4">
                {/* Top Badge Row */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-slate-900 border border-cyan-500/30 text-cyan-300 font-mono text-[11px]">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {project.metrics}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-cyan-400/90 line-clamp-1">
                    {project.tagline}
                  </p>
                </div>

                {/* Summary */}
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {project.summary}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {project.badges.slice(0, 4).map((badge, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800 text-[10px] font-mono text-slate-300"
                    >
                      {badge}
                    </span>
                  ))}
                  {project.badges.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded bg-slate-950 text-[10px] font-mono text-slate-400">
                      +{project.badges.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-cyan-300 hover:text-cyan-200 flex items-center gap-1 group/btn"
                >
                  <span>Architecture & Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
                      aria-label="View source on GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Deep-Dive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
