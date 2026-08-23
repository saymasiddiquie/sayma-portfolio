import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Send, Github, Linkedin, CheckCircle, Sparkles, ArrowUpRight, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const triggerCelebration = () => {
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#f59e0b', '#ff6b00', '#22c55e', '#38bdf8']
    });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  // Direct 1-Click Gmail Dispatcher
  const handleOpenGmail = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      alert('Please enter your Name and Message first.');
      return;
    }
    
    triggerCelebration();

    const subject = encodeURIComponent(`🚀 Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `${formData.message}\n\n` +
      `──────────────────────────\n` +
      `👤 Sender Name: ${formData.name}\n` +
      `📧 Sender Email: ${formData.email || 'Not provided'}\n` +
      `🌐 Sent via: Sayma Siddiquie Portfolio`
    );

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=saymasiddiquie@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  // Direct 1-Click Default Mail Client Dispatcher (Outlook / Apple Mail)
  const handleOpenMailApp = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      alert('Please enter your Name and Message first.');
      return;
    }

    triggerCelebration();

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `${formData.message}\n\n` +
      `──────────────────────────\n` +
      `👤 Sender Name: ${formData.name}\n` +
      `📧 Sender Email: ${formData.email || 'Not provided'}\n` +
      `🌐 Sent via: Sayma Siddiquie Portfolio`
    );

    window.location.href = `mailto:saymasiddiquie@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 relative z-20 container mx-auto px-6 max-w-5xl">
      <div className="text-center mb-16">
        <span className="px-5 py-2 rounded-full text-xs md:text-sm font-extrabold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/30 shadow-lg shadow-amber-500/10">
          LET'S CONNECT
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-4 mb-4 tracking-tight">
          Start a <span className="gradient-heading">Conversation</span>
        </h2>
        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
          Have an AI project, agentic workflow idea, software opportunity, or just want to connect? Send me a direct message!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Direct Links */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-6 bg-gradient-to-br from-[#0e1322] via-[#090d18] to-[#060810] shadow-2xl">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>Reach Out Directly</span>
            </h3>

            <div className="space-y-4">
              <a
                href={personal.socials.email}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-900 transition-all group"
              >
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-slate-400">Direct Email</div>
                  <div className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors truncate">
                    {personal.socials.email.replace('mailto:', '')}
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400" />
              </a>

              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-900 transition-all group"
              >
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-slate-400">LinkedIn Network</div>
                  <div className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors">
                    Sayma Siddiquie
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400" />
              </a>

              <a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-900 transition-all group"
              >
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 group-hover:scale-110 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-slate-400">GitHub Repositories</div>
                  <div className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors">
                    @saymasiddiquie
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400" />
              </a>

              <a
                href={personal.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-900 transition-all group"
              >
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .666-1.607 2.6 2.6 0 0 1 .388-.392l4.255-4.547 4.405-4.705c.545-.545.545-1.428 0-1.973A1.372 1.372 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-slate-400">LeetCode Competitive Coding</div>
                  <div className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors">
                    @sashasiddiquie
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400" />
              </a>

              <a
                href={personal.socials.codeforces}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-900 transition-all group"
              >
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3A1.5 1.5 0 0 1 0 19.5V9a1.5 1.5 0 0 1 1.5-1.5h3zm7.5-4.5A1.5 1.5 0 0 1 13.5 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 7.5 19.5V4.5A1.5 1.5 0 0 1 9 3h3zm7.5 7.5A1.5 1.5 0 0 1 21 12v7.5a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 1.5-1.5h3z"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-slate-400">Codeforces Profile</div>
                  <div className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors">
                    @saymasiddiquie
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-8 md:p-10 rounded-3xl border border-slate-800 bg-gradient-to-br from-[#0e1322] via-[#090d18] to-[#060810] shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto animate-bounce" />
                <h3 className="text-2xl font-bold text-white">Opening Email Window...</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Your message has been pre-filled addressed to <strong className="text-amber-400">saymasiddiquie@gmail.com</strong>. Click "Send" in your mail window to complete!
                </p>
              </div>
            ) : (
              <form onSubmit={handleOpenGmail} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Your Name <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-all text-sm font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Your Email (Optional)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-all text-sm font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Your Message <span className="text-amber-400">*</span>
                  </label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, idea, role, or collaboration..."
                    className="w-full px-5 py-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-all text-sm resize-none font-medium"
                  />
                </div>

                {/* 1-Click Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2">
                  <button
                    type="button"
                    onClick={handleOpenGmail}
                    className="w-full sm:flex-1 py-4 px-5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-amber-500/25 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                  >
                    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                    </svg>
                    <span>Send via Gmail (1-Click)</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleOpenMailApp}
                    className="w-full sm:w-auto py-4 px-6 rounded-2xl glass-panel border border-slate-700 hover:border-amber-500/50 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-sm shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    title="Open in Apple Mail, Outlook, or Default App"
                  >
                    <Mail className="w-4 h-4 text-amber-400" />
                    <span>Default Mail</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
