import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Github, Linkedin, Mail, FileText, Code2, Bot, Database, Cpu, ArrowUpRight, User, Sparkles } from 'lucide-react';
import ResumeModal from './ResumeModal';

export default function AboutSection() {
  const { personal } = portfolioData;
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const stats = [
    {
      label: "Published Repositories",
      value: "30+",
      icon: Github,
      sub: "Open Source ML & Web Projects",
      link: personal.socials.github,
      tooltip: "View GitHub Repositories"
    },
    { label: "Core Specialization", value: "AI / ML", icon: Bot, sub: "NLP & Predictive Modeling" },
    { label: "Agentic Engineering", value: "MCPs", icon: Cpu, sub: "Model Context Protocol Tools" },
    { label: "Data Analytics", value: "Data Science", icon: Database, sub: "EDA & Geospatial Risk Analysis" }
  ];

  return (
    <section id="about" className="py-24 relative z-20 container mx-auto px-6 max-w-6xl">
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs md:text-sm font-extrabold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/30 shadow-lg shadow-amber-500/10">
          <User className="w-4 h-4 text-amber-400" />
          GET TO KNOW ME • BACKGROUND & EXPERIENCE
        </span>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mt-5 mb-5 tracking-tight leading-tight">
          About <span className="gradient-heading">Me</span>
        </h2>
        <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed">
          Innovating with AI, Autonomous Agents & Data Intelligence. {personal.tagline}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Avatar & Quick Info */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="relative group w-full max-w-[440px] flex justify-center">
            <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 rounded-[32px] sm:rounded-[36px] blur-2xl opacity-45 group-hover:opacity-80 transition duration-500" />
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[380px] md:h-[380px] lg:w-[440px] lg:h-[440px] max-w-full aspect-square rounded-[28px] sm:rounded-[32px] overflow-hidden glass-panel p-2.5 sm:p-3 border-2 border-amber-500/50 shadow-2xl shadow-amber-500/20">
              <img
                src={personal.githubAvatar}
                alt={personal.name}
                className="w-full h-full object-cover rounded-[20px] sm:rounded-[24px] transition-transform duration-700 group-hover:scale-105 group-hover:brightness-105"
              />
            </div>
          </div>

          {/* Social Badges & Resume CTA */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mt-8">
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl glass-panel text-slate-300 hover:text-amber-400 hover:border-amber-500/50 hover:scale-110 transition-all shadow-lg"
              title="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl glass-panel text-slate-300 hover:text-amber-400 hover:border-amber-500/50 hover:scale-110 transition-all shadow-lg"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={personal.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl glass-panel text-slate-300 hover:text-amber-400 hover:border-amber-500/50 hover:scale-110 transition-all shadow-lg"
              title="LeetCode Profile (@sashasiddiquie)"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .666-1.607 2.6 2.6 0 0 1 .388-.392l4.255-4.547 4.405-4.705c.545-.545.545-1.428 0-1.973A1.372 1.372 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
              </svg>
            </a>
            <a
              href={personal.socials.codeforces}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl glass-panel text-slate-300 hover:text-amber-400 hover:border-amber-500/50 hover:scale-110 transition-all shadow-lg"
              title="Codeforces Profile (@saymasiddiquie)"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3A1.5 1.5 0 0 1 0 19.5V9a1.5 1.5 0 0 1 1.5-1.5h3zm7.5-4.5A1.5 1.5 0 0 1 13.5 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 7.5 19.5V4.5A1.5 1.5 0 0 1 9 3h3zm7.5 7.5A1.5 1.5 0 0 1 21 12v7.5a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 1.5-1.5h3z"/>
              </svg>
            </a>
            <a
              href={personal.socials.email}
              className="p-3.5 rounded-2xl glass-panel text-slate-300 hover:text-amber-400 hover:border-amber-500/50 hover:scale-110 transition-all shadow-lg"
              title="Email Sayma"
            >
              <Mail className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsResumeOpen(true)}
              className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-extrabold hover:scale-105 transition-all shadow-xl shadow-amber-500/20 text-sm cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </button>
          </div>
        </div>

        {/* Right Column: Bio & Stat Cards */}
        <div className="lg:col-span-7 space-y-8">
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-4">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              Hello, I'm <span className="text-amber-400">{personal.name}</span>
            </h3>
            <p className="text-slate-300 leading-relaxed text-base md:text-lg">
              {personal.bio}
            </p>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              AI & ML undergraduate with a strong foundation in Python, SQL, OOP, and Data Structures & Algorithms, and hands-on experience designing multi-agent AI systems, ETL pipelines, and cloud data workflows on GCP.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((st, i) => {
              const Icon = st.icon;
              const content = (
                <>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-2xl font-extrabold text-white group-hover:text-amber-400 transition-colors">
                        {st.value}
                      </span>
                    </div>
                    {st.link && (
                      <span className="p-1 rounded-lg bg-amber-500/10 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </div>
                  <div className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">{st.label}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{st.sub}</div>
                </>
              );

              return st.link ? (
                <a
                  key={i}
                  href={st.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={st.tooltip || st.label}
                  className="glass-panel p-5 rounded-2xl border border-amber-500/30 hover:border-amber-400/80 hover:bg-slate-900/90 transition-all group block shadow-lg hover:shadow-amber-500/15 hover:-translate-y-1 cursor-pointer"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={i}
                  className="glass-panel p-5 rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all group"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Interactive Official Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
}
