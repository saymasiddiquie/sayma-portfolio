import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-20 border-t border-slate-900 bg-[#05070a] py-12 text-slate-400 text-sm">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Copy */}
        <div className="flex items-center gap-3">
          <img
            src={personal.githubAvatar}
            alt={personal.name}
            className="w-8 h-8 rounded-full border border-amber-500/40 object-cover"
          />
          <div>
            <div className="font-bold text-white text-base">{personal.name}</div>
            <div className="text-xs text-slate-500">
              © {new Date().getFullYear()} All rights reserved. Crafted with <Heart className="w-3 h-3 text-red-500 inline fill-current" />
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-slate-900 hover:bg-amber-500/20 text-slate-300 hover:text-amber-400 transition-colors"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-slate-900 hover:bg-amber-500/20 text-slate-300 hover:text-amber-400 transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={personal.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-slate-900 hover:bg-amber-500/20 text-slate-300 hover:text-amber-400 transition-colors"
            title="LeetCode Profile"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .666-1.607 2.6 2.6 0 0 1 .388-.392l4.255-4.547 4.405-4.705c.545-.545.545-1.428 0-1.973A1.372 1.372 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
            </svg>
          </a>
          <a
            href={personal.socials.codeforces}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-slate-900 hover:bg-amber-500/20 text-slate-300 hover:text-amber-400 transition-colors"
            title="Codeforces Profile"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3A1.5 1.5 0 0 1 0 19.5V9a1.5 1.5 0 0 1 1.5-1.5h3zm7.5-4.5A1.5 1.5 0 0 1 13.5 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 7.5 19.5V4.5A1.5 1.5 0 0 1 9 3h3zm7.5 7.5A1.5 1.5 0 0 1 21 12v7.5a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 1.5-1.5h3z"/>
            </svg>
          </a>
          <a
            href={personal.socials.email}
            className="p-2.5 rounded-full bg-slate-900 hover:bg-amber-500/20 text-slate-300 hover:text-amber-400 transition-colors"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-amber-400 hover:bg-amber-500 hover:text-slate-950 transition-all font-bold text-xs shadow-lg"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
