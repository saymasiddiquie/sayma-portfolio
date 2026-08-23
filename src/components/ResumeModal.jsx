import React from 'react';
import { X, Download, Printer, ExternalLink, Mail, Phone, MapPin, Github, Linkedin, Award, Briefcase, GraduationCap, Code, Sparkles, Globe } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personal, resume } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c101d] border-2 border-amber-500/40 rounded-3xl shadow-2xl shadow-amber-500/10 flex flex-col overflow-hidden text-slate-200">
        
        {/* Modal Top Bar (Actions) */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900/90 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30">
              <Sparkles className="w-4 h-4" />
            </span>
            <span className="font-bold text-sm sm:text-base text-white">
              Sayma Siddiquie — Official Resume
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-500 text-slate-950 hover:bg-amber-400 font-bold text-xs shadow-md transition-all active:scale-95"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all active:scale-95"
              title="Close Resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Printable / Scrollable Content */}
        <div className="p-6 sm:p-8 md:p-10 overflow-y-auto space-y-8 custom-scrollbar bg-[#090d18]">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6">
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase mb-2">
              Sayma Siddiquie
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-300">
              <span className="flex items-center gap-1 text-amber-400 font-medium">
                <MapPin className="w-3.5 h-3.5" /> Jabalpur, Madhya Pradesh, India
              </span>
              <span className="text-slate-600">•</span>
              <a href="tel:+916266100747" className="flex items-center gap-1 hover:text-amber-400 transition-colors">
                <Phone className="w-3.5 h-3.5 text-amber-400" /> +91 6266100747
              </a>
              <span className="text-slate-600">•</span>
              <a href={personal.socials.email} className="flex items-center gap-1 hover:text-amber-400 transition-colors">
                <Mail className="w-3.5 h-3.5 text-amber-400" /> saymasiddiquie@gmail.com
              </a>
              <span className="text-slate-600">•</span>
              <a href={personal.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-amber-400 hover:underline">
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn
              </a>
              <span className="text-slate-600">•</span>
              <a href={personal.socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-amber-400 hover:underline">
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
              <span className="text-slate-600">•</span>
              <a href={personal.socials.leetcode} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-amber-400 hover:underline">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .666-1.607 2.6 2.6 0 0 1 .388-.392l4.255-4.547 4.405-4.705c.545-.545.545-1.428 0-1.973A1.372 1.372 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                </svg>
                <span>LeetCode</span>
              </a>
              <span className="text-slate-600">•</span>
              <a href={personal.socials.codeforces} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-amber-400 hover:underline">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3A1.5 1.5 0 0 1 0 19.5V9a1.5 1.5 0 0 1 1.5-1.5h3zm7.5-4.5A1.5 1.5 0 0 1 13.5 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 7.5 19.5V4.5A1.5 1.5 0 0 1 9 3h3zm7.5 7.5A1.5 1.5 0 0 1 21 12v7.5a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 1.5-1.5h3z"/>
                </svg>
                <span>Codeforces</span>
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-amber-400 flex items-center gap-2 border-b border-slate-800/80 pb-1">
              <Sparkles className="w-4 h-4" /> Professional Summary
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              AI & ML undergraduate (CGPA 8.25/10) with a strong foundation in Python, SQL, OOP, and Data Structures & Algorithms, and hands-on experience designing multi-agent AI systems, ETL pipelines, and cloud data workflows on GCP. Proven ability to take AI/ML systems from architecture to working prototype — including RL environments and agent orchestration — with a collaborative, delivery-focused approach.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-amber-400 flex items-center gap-2 border-b border-slate-800/80 pb-1">
              <Code className="w-4 h-4" /> Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                <span className="font-bold text-white block mb-1 text-xs uppercase tracking-wide text-amber-300">
                  Programming & CS Fundamentals
                </span>
                <p className="text-slate-300">Python (Pandas, NumPy, Streamlit), C++, SQL, Object-Oriented Programming (OOP), Data Structures & Algorithms, Git</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                <span className="font-bold text-white block mb-1 text-xs uppercase tracking-wide text-amber-300">
                  AI, ML & Agentic Systems
                </span>
                <p className="text-slate-300">Machine Learning, Deep Learning, Reinforcement Learning, Multi-Agent Systems, LLMs, Model Context Protocol (MCP), PyTorch, TRL, Unsloth</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                <span className="font-bold text-white block mb-1 text-xs uppercase tracking-wide text-amber-300">
                  Cloud & Data Engineering
                </span>
                <p className="text-slate-300">BigQuery, ETL Pipeline Design, Data Modeling, Data Warehousing</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                <span className="font-bold text-white block mb-1 text-xs uppercase tracking-wide text-amber-300">
                  Analysis & Visualization
                </span>
                <p className="text-slate-300">Exploratory Data Analysis (EDA), Power BI, Interactive Dashboarding</p>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-4">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-amber-400 flex items-center gap-2 border-b border-slate-800/80 pb-1">
              <Award className="w-4 h-4" /> Featured Projects
            </h2>

            {/* Project 1 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-1">
                <h3 className="font-bold text-base text-white">
                  Global-Syndicate-Taskforce — Multi-Agent AML Simulator
                </h3>
                <span className="text-xs font-semibold text-amber-400">April 2026</span>
              </div>
              <div className="text-xs font-medium text-slate-400">
                Python, PyTorch, TRL, Unsloth | Meta PyTorch OpenEnv x Scaler Hackathon 2026 | <span className="text-amber-300 font-bold">Semi-Finalist</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-300 leading-relaxed pl-1">
                <li>Architected a 4-agent anti-money-laundering simulator using an OpenEnv + Blackboard design, enabling scalable, modular context-sharing across agents without a central bottleneck.</li>
                <li>Designed a 3-tier adversarial reward system (+0.20 / +0.30 / +0.50) to shape agent behavior and drive stable reinforcement-learning training and evaluation.</li>
                <li>Fine-tuned and orchestrated LLM-driven agents with TRL and Unsloth to power negotiation-based, forensic decision-making workflows.</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-1">
                <h3 className="font-bold text-base text-white">
                  Network Quality & Revenue Optimization Analytics
                </h3>
                <span className="text-xs font-semibold text-amber-400">December 2025</span>
              </div>
              <div className="text-xs font-medium text-slate-400">
                BigQuery, SQL, Power BI, ETL
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-300 leading-relaxed pl-1">
                <li>Engineered an end-to-end ETL pipeline on BigQuery to ingest, clean, and process large-scale telecom network datasets.</li>
                <li>Wrote optimized SQL queries to aggregate high-volume operational metrics into actionable insights for revenue trend analysis.</li>
                <li>Designed a data schema feeding an interactive Power BI dashboard used to track and visualize revenue trends over time.</li>
              </ul>
            </div>

            {/* Project 3 */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-1">
                <h3 className="font-bold text-base text-white">
                  Human-Verified Content Curation Agent
                </h3>
                <span className="text-xs font-semibold text-amber-400">September 2025</span>
              </div>
              <div className="text-xs font-medium text-slate-400">
                Python, MCP, Streamlit
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-300 leading-relaxed pl-1">
                <li>Built an automated pipeline to curate and verify content data, strengthening data integrity across the workflow.</li>
                <li>Implemented Model Context Protocol (MCP)-based validation logic to catch inconsistencies before they reached downstream systems.</li>
              </ul>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-amber-400 flex items-center gap-2 border-b border-slate-800/80 pb-1">
              <Briefcase className="w-4 h-4" /> Professional Experience
            </h2>

            {/* Exp 1 */}
            <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-1">
                <h3 className="font-bold text-sm sm:text-base text-white">
                  BRBRAITT (Telecom Sector Skill Council) — Trainee, Telecom Analysis
                </h3>
                <span className="text-xs font-semibold text-amber-400">December 2025 | Jabalpur, MP</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-300 leading-relaxed pl-1">
                <li>Completed TSSC-certified training in large-scale data analysis for the telecom industry.</li>
                <li>Gained hands-on exposure to enterprise telecom operations and analytics workflows at BSNL.</li>
              </ul>
            </div>

            {/* Exp 2 */}
            <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-1">
                <h3 className="font-bold text-sm sm:text-base text-white">
                  TechSaksham (Joint CSR by Microsoft & SAP) — AI & Data Intern
                </h3>
                <span className="text-xs font-semibold text-amber-400">Jan 2025 – Feb 2025 | Remote</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-300 leading-relaxed pl-1">
                <li>Developed recommendation algorithms in Python by processing user data and item attributes.</li>
                <li>Built data-preprocessing pipelines to ensure clean, reliable input for downstream logic-based modules.</li>
              </ul>
            </div>

            {/* Exp 3 */}
            <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-1">
                <h3 className="font-bold text-sm sm:text-base text-white">
                  Indian Railways — Technical Intern
                </h3>
                <span className="text-xs font-semibold text-amber-400">August 2024 | Jabalpur, India</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-300 leading-relaxed pl-1">
                <li>Analyzed operational data to support resource optimization and predictive maintenance scheduling.</li>
                <li>Studied real-world application of data-driven decision-making in railway logistics and systems engineering.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-amber-400 flex items-center gap-2 border-b border-slate-800/80 pb-1">
              <GraduationCap className="w-4 h-4" /> Education
            </h2>
            <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-wrap items-center justify-between gap-2">
              <div>
                <h3 className="font-bold text-base text-white">
                  Baderia Global Institute of Engineering and Management
                </h3>
                <p className="text-xs sm:text-sm text-amber-300 font-semibold">
                  B.Tech, Artificial Intelligence & Machine Learning (AI & ML)
                </p>
                <p className="text-xs text-slate-400">Jabalpur, MP | Aggregate CGPA: <span className="font-bold text-white">8.25 / 10</span></p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                2023 – 2027
              </span>
            </div>
          </div>

          {/* Certifications & Achievements & Additional */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
              <h3 className="font-bold text-xs uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <Award className="w-4 h-4" /> Certifications & Achievements
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li>• <strong className="text-white">Semi-Finalist:</strong> Meta PyTorch OpenEnv x Scaler Hackathon 2026 (Multi-agent AI RL environment).</li>
                <li>• <strong className="text-white">Recognized:</strong> Bharatiya Antariksh Hackathon 2025 (ISRO Space-Tech Challenge).</li>
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
              <h3 className="font-bold text-xs uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <Globe className="w-4 h-4" /> Additional Information
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li>• <strong className="text-white">Leadership:</strong> Professional badminton player; 2nd place in public speaking competition.</li>
                <li>• <strong className="text-white">Languages:</strong> Fluent in English; Reading proficiency in French.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900/90 border-t border-slate-800 shrink-0">
          <span className="text-xs text-slate-400">
            Jabalpur, MP, India • +91 6266100747
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-all shadow-lg"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-all"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
