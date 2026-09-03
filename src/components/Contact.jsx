import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, MessageSquare, ExternalLink, Github, Linkedin, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { profileData } from '../data/profile';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.socials.email);
    setCopied(true);

    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#38bdf8', '#818cf8', '#34d399']
      });
    } catch (err) {
      // ignore
    }

    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
            Let's Collaborate
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Whether you have an exciting engineering opportunity, startup collaboration, or technical challenge in mind—let’s connect directly.
          </p>
        </div>

        {/* Centered Direct Contact Hub */}
        <div className="max-w-3xl mx-auto space-y-6">
          
          {/* Primary Quick Connect Banner */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-cyan-950/20 shadow-2xl relative overflow-hidden text-center sm:text-left">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
              <div className="space-y-2">
                <span className="text-xs font-mono text-cyan-300 uppercase tracking-wider block">
                  Direct Email Address
                </span>
                <div className="text-xl sm:text-2xl font-mono font-bold text-white tracking-tight">
                  {profileData.socials.email}
                </div>
                <p className="text-xs text-slate-400 font-mono">
                  Quickest response guaranteed within 24 hours
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 shrink-0">
                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-cyan-500/30 hover:border-cyan-500/60 transition flex items-center gap-2 text-xs font-mono font-semibold shadow-sm"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${profileData.socials.email}?subject=Collaboration%20Inquiry%20-%20Sameul%20Hasan`}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Phone / WhatsApp */}
            <a
              href="https://wa.me/8801707654740"
              target="_blank"
              rel="noreferrer"
              className="glass-card glass-card-hover p-5 rounded-2xl border border-slate-800 flex items-center gap-4 group"
            >
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 group-hover:bg-emerald-500/20 transition">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <div className="text-[11px] font-mono text-slate-400">Phone / WhatsApp</div>
                <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-emerald-300 transition truncate">
                  {profileData.socials.phone}
                </div>
              </div>
            </a>

            {/* Location */}
            <div className="glass-card p-5 rounded-2xl border border-slate-800 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <div className="text-[11px] font-mono text-slate-400">Location</div>
                <div className="text-xs sm:text-sm font-semibold text-white truncate">
                  {profileData.socials.location}
                </div>
              </div>
            </div>

            {/* LinkedIn Direct */}
            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="glass-card glass-card-hover p-5 rounded-2xl border border-slate-800 flex items-center gap-4 group"
            >
              <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0 group-hover:bg-indigo-500/20 transition">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <div className="text-[11px] font-mono text-slate-400">LinkedIn</div>
                <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-indigo-300 transition flex items-center gap-1">
                  <span>in/sameulhasan</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-indigo-300 transition" />
                </div>
              </div>
            </a>

          </div>

          {/* Social Links Banner */}
          <div className="glass-card p-4 rounded-2xl border border-slate-800/80 flex items-center justify-around text-xs font-mono">
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>github.com/sameul-hasan</span>
            </a>
            <div className="w-px h-6 bg-slate-800"></div>
            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition"
            >
              <Linkedin className="w-4 h-4 text-indigo-400" />
              <span>linkedin.com/in/sameulhasan</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
