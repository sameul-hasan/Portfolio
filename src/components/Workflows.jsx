import React from 'react';
import { Download, Newspaper, Lightbulb, BrainCircuit, MailCheck, Bot, CheckCircle2, ArrowDownToLine } from 'lucide-react';
import { workflowsData } from '../data/workflows';

const iconMap = {
  Newspaper: Newspaper,
  Lightbulb: Lightbulb,
  BrainCircuit: BrainCircuit,
  MailCheck: MailCheck,
};

export default function Workflows() {
  return (
    <section id="workflows" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-mono text-xs uppercase tracking-wider">
            <Bot className="w-3.5 h-3.5 text-indigo-400" />
            Agentic Automation & Bots
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Production <span className="text-gradient">n8n Workflows</span> & Bots
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Practical autonomous automation pipelines connecting open-source LLMs (Groq / Llama 3.3) with messaging platforms, web APIs, and Gmail. Downloadable and ready to import into your own n8n instance.
          </p>
        </div>

        {/* Workflows Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workflowsData.map((bot) => {
            const IconComponent = iconMap[bot.icon] || Bot;
            return (
              <div
                key={bot.id}
                className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-indigo-500/20 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-36 h-36 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/15 transition-all pointer-events-none"></div>

                <div className="space-y-4">
                  {/* Top Row */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-300 shadow-sm">
                      <IconComponent className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-300">
                        {bot.nodesCount} Nodes
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/30 text-[11px] font-mono text-indigo-300">
                        {bot.trigger}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1.5">
                    <h3 className="font-display font-bold text-xl text-white group-hover:text-indigo-300 transition-colors">
                      {bot.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {bot.description}
                    </p>
                  </div>

                  {/* Integrations Tags */}
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Connected Nodes & APIs:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {bot.integrations.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded-md bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-slate-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Download Trigger */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">
                    File: <span className="text-slate-300">{bot.fileName}</span>
                  </span>
                  <a
                    href={`${import.meta.env.BASE_URL}${bot.downloadFile}`}
                    download={bot.fileName}
                    className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white text-xs font-semibold border border-indigo-500/30 hover:border-indigo-500 flex items-center gap-2 transition-all shadow-sm group/btn"
                  >
                    <ArrowDownToLine className="w-3.5 h-3.5 text-cyan-400 group-hover/btn:text-white transition-colors" />
                    <span>Download JSON</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
