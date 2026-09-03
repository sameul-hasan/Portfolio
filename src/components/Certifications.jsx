import React, { useState, useEffect, useRef } from 'react';
import { Award, ChevronLeft, ChevronRight, ExternalLink, CheckCircle2, ShieldCheck } from 'lucide-react';
import { certificatesData } from '../data/certificates';

export default function Certifications() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = certificatesData.length;

  // Auto slideshow left-to-right (moving forward)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, total]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  return (
    <section id="certifications" className="py-20 relative bg-slate-950/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              Verified Credentials
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Professional <span className="text-gradient">Certifications</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Formal accreditations across Cloud Security, Machine Learning, Python, SQL, Web Engineering, and UI/UX from AWS Academy, DataCamp, CodeSignal, and Udemy.
            </p>
          </div>

          {/* Controls & GitHub Link */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/sameul-hasan/Cirtification-I-Have"
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-xs font-mono text-cyan-300 flex items-center gap-1.5 transition-all"
            >
              <span>Verify on GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <div className="flex items-center gap-1.5 bg-slate-900/80 p-1 rounded-xl border border-slate-800">
              <button
                onClick={handlePrev}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
                aria-label="Previous certificate"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
                aria-label="Next certificate"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Slideshow Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Slides Track */}
          <div className="overflow-hidden rounded-3xl p-1">
            <div
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {certificatesData.map((cert) => (
                <div
                  key={cert.id}
                  className="w-full shrink-0 max-w-full md:max-w-xl lg:max-w-2xl mx-auto"
                >
                  <div className="glass-card rounded-3xl border border-cyan-500/20 overflow-hidden shadow-2xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-center">
                    
                    {/* Certificate Thumbnail */}
                    <div className="w-full md:w-64 shrink-0 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/80 group">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-44 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    {/* Certificate Info */}
                    <div className="flex-grow space-y-3 text-center md:text-left">
                      <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold">
                          {cert.category}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {cert.year}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                        {cert.title}
                      </h3>

                      <div className="text-xs font-semibold text-slate-300">
                        Issuer: <span className="text-cyan-400">{cert.issuer}</span>
                      </div>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 pt-2">
                        {cert.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-1.5 mt-8">
            {certificatesData.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === dotIdx
                    ? 'w-6 bg-cyan-400'
                    : 'w-2 bg-slate-800 hover:bg-slate-700'
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
