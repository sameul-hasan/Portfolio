import React from 'react';
import { Terminal, Github, Linkedin, Mail, ArrowUp, Phone, MapPin, ExternalLink } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-16 pb-12 border-t border-slate-900 bg-[#04060d] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Organized Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand & Identity Column (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-display font-bold text-xl text-white tracking-tight block">
                  Sameul Hasan
                </span>
                <span className="text-[11px] font-mono text-cyan-400">
                  Software Engineer & AI Systems Developer
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Software Engineering undergraduate at Daffodil International University, President of DIU Robotics Club, and NASA Space Apps Global Nominee.
            </p>

            <div className="pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/20 text-[11px] font-mono text-cyan-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>"{profileData.tagline}"</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Column (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li>
                <a href="#home" className="hover:text-cyan-300 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-300 transition-colors">About & Philosophy</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-300 transition-colors">Featured Projects</a>
              </li>
              <li>
                <a href="#workflows" className="hover:text-cyan-300 transition-colors">n8n Automation Bots</a>
              </li>
            </ul>
          </div>

          {/* Highlights Column (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 font-bold">
              Highlights
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li>
                <a href="#leadership" className="hover:text-cyan-300 transition-colors">DIU Robotics Club</a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-cyan-300 transition-colors">IEEE RAS Chapter</a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-amber-300 transition-colors">NASA Space Apps</a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-cyan-300 transition-colors">Certifications</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-300 transition-colors">Skills & Capabilities</a>
              </li>
            </ul>
          </div>

          {/* Connect Column (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 font-bold">
              Direct Contact
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-400">
              <div>
                <a
                  href={`mailto:${profileData.socials.email}`}
                  className="text-white hover:text-cyan-300 transition-colors font-mono flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{profileData.socials.email}</span>
                </a>
              </div>

              <div className="flex items-center gap-1.5 font-mono text-slate-300">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{profileData.socials.phone}</span>
              </div>

              <div className="flex items-center gap-1.5 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{profileData.socials.location}</span>
              </div>
            </div>

            {/* Social Icons Row */}
            <div className="pt-2 flex items-center gap-2">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-cyan-400 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profileData.socials.email}`}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-emerald-400 transition-all"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Clean & Organized */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            &copy; {currentYear} Md Sameul Hasan. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-300 transition-colors group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
