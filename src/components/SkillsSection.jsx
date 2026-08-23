import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  Terminal,
  Rocket,
  Clock,
  Laptop,
  BarChart3,
  CheckCircle2,
  Code2,
  Brain,
  Cloud,
  PieChart
} from 'lucide-react';

export default function SkillsSection() {
  const { skills } = portfolioData;
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollContainerRef = useRef(null);

  // Stats cards data from recording
  const stats = [
    { icon: Rocket, title: "10+", label: "Technologies Learning", color: "from-purple-500 to-indigo-500" },
    { icon: Clock, title: "30+", label: "Study Hours/Week", color: "from-amber-500 to-orange-500" },
    { icon: Laptop, title: "11+", label: "Projects Building", color: "from-cyan-500 to-blue-500" },
    { icon: BarChart3, title: "60%", label: "Learning Progress", color: "from-emerald-500 to-teal-500" }
  ];

  // Map the 4 exact categories to terminal slugs
  const formattedSections = [
    {
      key: "programming_and_cs",
      slug: "programming-and-cs-fundamentals",
      title: "Programming & CS Fundamentals",
      icon: Code2,
      color: "text-emerald-400",
      items: skills["Programming & CS Fundamentals"] || []
    },
    {
      key: "ai_ml_agentic",
      slug: "ai-ml-and-agentic-systems",
      title: "AI, ML & Agentic Systems",
      icon: Brain,
      color: "text-amber-400",
      items: skills["AI, ML & Agentic Systems"] || []
    },
    {
      key: "cloud_data",
      slug: "cloud-and-data-engineering",
      title: "Cloud & Data Engineering",
      icon: Cloud,
      color: "text-cyan-400",
      items: skills["Cloud & Data Engineering"] || []
    },
    {
      key: "analysis_viz",
      slug: "analysis-and-visualization",
      title: "Analysis & Visualization",
      icon: PieChart,
      color: "text-purple-400",
      items: skills["Analysis & Visualization"] || []
    }
  ];

  // Track scroll progress inside phone/device screen
  const handleContainerScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const totalScroll = el.scrollHeight - el.clientHeight;
    if (totalScroll > 0) {
      const pct = Math.min(100, Math.max(0, Math.round((el.scrollTop / totalScroll) * 100)));
      setScrollProgress(pct);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', handleContainerScroll);
      return () => el.removeEventListener('scroll', handleContainerScroll);
    }
  }, []);

  return (
    <section id="skills" className="py-24 relative z-20 container mx-auto px-6 max-w-6xl">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-amber-400 tracking-wide uppercase mb-3">
          TECH STACK. SKILLS. SOME STATS ;)
        </h2>
        <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto">
          Technologies I work with to bring ideas to life and create meaningful digital experiences
        </p>
      </div>

      {/* 4 Stats Cards Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6 max-w-4xl mx-auto mb-10 sm:mb-14">
        {stats.map((st, idx) => {
          const Icon = st.icon;
          return (
            <div
              key={idx}
              className="glass-panel p-3.5 sm:p-5 rounded-2xl border border-slate-800/80 hover:border-amber-500/40 transition-all duration-300 flex flex-col items-center justify-center text-center group hover:-translate-y-1 shadow-lg"
            >
              <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-slate-900 border border-slate-800 text-amber-400 mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-0.5 sm:mb-1">
                {st.title}
              </span>
              <span className="text-[11px] sm:text-xs text-slate-400 font-medium leading-tight">
                {st.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* 3D Tilted Device Container Screen */}
      <div className="relative max-w-5xl mx-auto">
        {/* Outer Glow */}
        <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-[28px] sm:rounded-[40px] blur-xl sm:blur-2xl pointer-events-none" />

        {/* Device Frame */}
        <div className="relative border-2 sm:border-4 border-[#5a5f70] bg-[#121622] rounded-[24px] sm:rounded-[32px] md:rounded-[40px] shadow-2xl overflow-hidden p-2 sm:p-4 md:p-6">
          {/* Top Window Bar */}
          <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 bg-[#0b0e17] rounded-t-xl sm:rounded-t-2xl border-b border-slate-800 mb-2 sm:mb-4">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80" />
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-slate-400 font-mono truncate max-w-[200px] sm:max-w-none">
              <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
              <span className="truncate">sayma@portfolio: ~/skills</span>
            </div>

            <div className="text-[10px] sm:text-xs text-slate-500 font-mono">zsh</div>
          </div>

          {/* Terminal Content Screen Area */}
          <div
            ref={scrollContainerRef}
            className="h-[420px] sm:h-[480px] md:h-[540px] overflow-y-auto pr-1 sm:pr-2 space-y-6 sm:space-y-8 custom-scrollbar bg-[#090c14] p-3 sm:p-6 md:p-8 rounded-b-xl sm:rounded-b-2xl border border-slate-800/80 relative"
          >
            {formattedSections.map((sec, secIdx) => (
              <div key={secIdx} className="space-y-4">
                {/* Terminal Command Prompt Header */}
                <div className="flex items-center justify-between font-mono text-sm md:text-base font-semibold border-b border-slate-800/80 pb-2">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <span className="text-amber-400 font-bold">$</span>
                    <span>ls {sec.slug}</span>
                  </div>
                  <span className="text-xs text-slate-400 font-normal">
                    {sec.title}
                  </span>
                </div>

                {/* Grid of Skill Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pl-2 md:pl-4">
                  {sec.items.map((sk, skIdx) => (
                    <div
                      key={skIdx}
                      className="p-4 rounded-xl bg-[#141926] border border-slate-800 hover:border-amber-500/40 hover:bg-[#1a2133] transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-amber-400 group-hover:scale-110 transition-transform">
                          <CheckCircle2 className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-100 group-hover:text-white transition-colors">
                            {sk.name}
                          </div>
                          {sk.sub && (
                            <div className="text-[11px] text-slate-400 mt-0.5">
                              {sk.sub}
                            </div>
                          )}
                        </div>
                      </div>

                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase shrink-0 ${
                        sk.level === 'Advanced' || sk.level === 'Expert'
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                          : 'bg-slate-800 text-slate-400 border border-slate-700'
                      }`}>
                        {sk.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Floating Scroll Progress Bar Pill at bottom of screen */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
            <div className="px-4 py-1.5 rounded-full glass-pill border border-amber-500/40 shadow-2xl flex items-center gap-3 bg-[#0d111c]/90">
              <span className="text-xs font-mono font-bold text-amber-400">{scrollProgress}%</span>
              <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-300"
                  style={{ width: `${scrollProgress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
