import React, { useEffect } from 'react';
import { X, Github, ExternalLink, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in"
        onClick={onClose}
      ></div>

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card rounded-2xl border border-cyan-500/30 p-6 sm:p-8 shadow-2xl shadow-cyan-500/10 z-10 animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Title */}
        <div className="space-y-2 mb-6">
          <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-mono text-xs uppercase tracking-wider">
            {project.category}
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm font-medium text-cyan-400">
            {project.tagline}
          </p>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.badges.map((badge, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Architecture Pipeline Diagram */}
        {project.architecture && (
          <div className="mb-6 p-4 rounded-xl bg-slate-950 border border-cyan-500/20 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-300 uppercase tracking-wide">
              <Cpu className="w-3.5 h-3.5" />
              <span>System Architecture & Pipeline</span>
            </div>
            <div className="text-xs font-mono text-slate-300 bg-slate-900/90 p-3 rounded-lg border border-slate-800/80 leading-relaxed overflow-x-auto">
              {project.architecture}
            </div>
          </div>
        )}

        {/* Full Summary */}
        <div className="space-y-4 mb-6 text-slate-300 text-sm leading-relaxed">
          <p>{project.summary}</p>

          {/* Highlights List */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-2 pt-2">
              <h4 className="font-display font-bold text-sm text-white">Key Engineering Highlights:</h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Metrics Badge & Actions */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-mono text-cyan-300 bg-cyan-500/10 px-3 py-1.5 rounded-lg border border-cyan-500/20">
            {project.metrics}
          </div>

          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold border border-slate-700 flex items-center gap-2 transition"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-semibold shadow-md shadow-cyan-500/20 flex items-center gap-2 transition"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
