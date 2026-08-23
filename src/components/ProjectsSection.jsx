import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Github, ExternalLink, ChevronLeft, ChevronRight, Sparkles, CheckCircle2, ArrowUpRight, Cpu, Layers } from 'lucide-react';

export default function ProjectsSection() {
  const { projects } = portfolioData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const activeProject = projects[currentIndex] || projects[0];

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  // Touch swipe gesture handlers for mobile
  const minSwipeDistance = 45;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      nextProject();
    } else if (isRightSwipe) {
      prevProject();
    }
  };

  return (
    <section id="projects" className="py-24 relative z-20 container mx-auto px-6 max-w-6xl">
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs md:text-sm font-extrabold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/30 shadow-lg shadow-amber-500/10">
          <Sparkles className="w-4 h-4 text-amber-400" />
          FEATURED PROJECTS & INNOVATIONS
        </span>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mt-5 mb-5 tracking-tight leading-tight">
          Featured <span className="gradient-heading">Projects</span>
        </h2>
        <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed">
          Explore flagship intelligent systems, autonomous agent architectures, and machine learning pipelines.
        </p>
      </div>

      {/* Quick Project Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
        {projects.map((item, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-lg shadow-amber-500/20 scale-105'
                  : 'glass-panel text-slate-400 hover:text-white hover:border-amber-500/40'
              }`}
            >
              <span className="font-mono text-[11px] opacity-75">0{idx + 1}.</span>
              <span className="truncate max-w-[150px] sm:max-w-[200px]">{item.title}</span>
            </button>
          );
        })}
      </div>

      {/* BIG FEATURED PROJECT SPOTLIGHT CARD */}
      <div
        className="relative select-none"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Glow ambient background */}
        <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/20 via-orange-500/10 to-amber-500/20 rounded-[36px] blur-2xl opacity-75 pointer-events-none" />

        <div className="relative rounded-[32px] overflow-hidden glass-panel border-2 border-amber-500/50 bg-gradient-to-br from-[#0e1322] via-[#090d18] to-[#060810] p-5 sm:p-8 lg:p-10 shadow-2xl shadow-amber-500/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left: Big Showcase Image (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="relative h-64 sm:h-80 lg:h-[420px] w-full rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl bg-slate-950 group">
                <img
                  key={activeProject.id}
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />

                {/* Direct Image Overlay Swap Buttons (Left & Right Arrows) */}
                <button
                  onClick={(e) => { e.stopPropagation(); prevProject(); }}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-slate-950/85 border border-amber-500/40 text-amber-400 hover:text-white hover:bg-amber-500 hover:border-amber-400 shadow-xl backdrop-blur-md transition-all active:scale-95 z-20 cursor-pointer"
                  title="Swap to Previous Project"
                  aria-label="Previous Project"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={(e) => { e.stopPropagation(); nextProject(); }}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-slate-950/85 border border-amber-500/40 text-amber-400 hover:text-white hover:bg-amber-500 hover:border-amber-400 shadow-xl backdrop-blur-md transition-all active:scale-95 z-20 cursor-pointer"
                  title="Swap to Next Project"
                  aria-label="Next Project"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Badges on Image */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2 pointer-events-none">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-black bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 flex items-center gap-1.5 shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 fill-current" />
                    FEATURED #{activeProject.id}
                  </span>
                </div>

                {activeProject.category && (
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[11px] font-bold bg-slate-900/80 backdrop-blur-md text-amber-300 border border-amber-500/30 pointer-events-none">
                    {activeProject.category}
                  </span>
                )}

                {/* Bottom Overlay bar on Image */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300 bg-slate-950/80 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-800 pointer-events-none">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Cpu className="w-3.5 h-3.5 text-amber-400" /> AI / ML Production Model
                  </span>
                  <span className="text-amber-400 font-mono font-bold">
                    0{currentIndex + 1} / 0{projects.length}
                  </span>
                </div>
              </div>

              {/* Mobile Dedicated Swap Navigation Buttons Bar */}
              <div className="flex lg:hidden items-center gap-2.5 pt-1">
                <button
                  onClick={prevProject}
                  className="flex-1 py-3 px-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 text-amber-400 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Prev Project</span>
                </button>
                <button
                  onClick={nextProject}
                  className="flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 active:scale-95 transition-all cursor-pointer"
                >
                  <span>Next Project</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Big Showcase Details (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              {/* Header Info */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-black tracking-wide uppercase bg-gradient-to-r from-amber-500/25 to-orange-500/25 text-amber-300 border border-amber-500/50 shadow-md">
                      ★ Active Featured Spotlight
                    </span>
                    {activeProject.category && (
                      <span className="text-xs font-semibold text-slate-400">
                        • {activeProject.category}
                      </span>
                    )}
                  </div>

                  {/* Navigation Switchers for desktop */}
                  <div className="hidden lg:flex items-center gap-2">
                    <button
                      onClick={prevProject}
                      className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-800 text-amber-400 transition-all shadow-md active:scale-95 flex items-center gap-1 text-xs font-bold cursor-pointer"
                      title="Previous Project"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Prev</span>
                    </button>
                    <button
                      onClick={nextProject}
                      className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-800 text-amber-400 transition-all shadow-md active:scale-95 flex items-center gap-1 text-xs font-bold cursor-pointer"
                      title="Next Project"
                    >
                      <span>Next</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                  {activeProject.title}
                </h3>

                <p className="text-slate-300 text-base lg:text-lg leading-relaxed">
                  {activeProject.description}
                </p>
              </div>

              {/* Key Feature Highlights */}
              {activeProject.highlights && activeProject.highlights.length > 0 && (
                <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/90 space-y-2.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Key Architectural Highlights
                  </div>
                  <div className="space-y-1.5">
                    {activeProject.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack Badges */}
              <div>
                <div className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
                  Technologies & Frameworks
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tech.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-900 text-amber-300 border border-amber-500/30 hover:border-amber-400 transition-all shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/25 hover:scale-105 transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                  <span>View GitHub Repository</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                {activeProject.live ? (
                  <a
                    href={activeProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl glass-panel border border-amber-500/40 text-amber-400 hover:text-white hover:border-amber-400 hover:bg-slate-800 transition-all text-sm font-bold shadow-lg"
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <div className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs font-semibold text-slate-400">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Open-Source Research & ML Model</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Pagination Dots & Index Switcher */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
          <div className="flex items-center gap-2.5 bg-slate-900/90 backdrop-blur-md px-5 py-2.5 rounded-full border border-slate-800 shadow-xl">
            {projects.map((proj, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-300 flex items-center justify-center cursor-pointer ${
                  i === currentIndex
                    ? 'w-10 bg-gradient-to-r from-amber-500 to-orange-500 shadow-md shadow-amber-500/30'
                    : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                }`}
                title={`View ${proj.title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
