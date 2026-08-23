import React, { useState, useEffect } from 'react';
import { Home, User, Code2, FolderGit2, Trophy, Mail, Volume2, VolumeX, Briefcase } from 'lucide-react';

export default function FloatingNavbar({ soundEnabled, setSoundEnabled }) {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      const sections = navItems.map(item => ({
        id: item.id,
        el: document.getElementById(item.id)
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const { id, el } = sections[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 max-w-[95vw]">
      <nav className="glass-pill px-3 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center gap-1 sm:gap-1.5 shadow-2xl border border-amber-500/35 bg-slate-950/85 backdrop-blur-xl">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              title={item.label}
              className={`relative px-3 py-1.5 rounded-full transition-all duration-300 flex items-center gap-1.5 text-xs sm:text-sm font-semibold cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold shadow-lg shadow-amber-500/25 scale-[1.03]'
                  : 'text-slate-400 hover:text-amber-400 hover:bg-slate-850'
              }`}
            >
              <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className={`transition-all duration-300 ${isActive ? 'inline' : 'hidden md:inline'}`}>
                {item.label}
              </span>
              {isActive && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping" />
              )}
            </button>
          );
        })}

        <div className="w-px h-5 bg-slate-800 mx-1 shrink-0" />

        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          title={soundEnabled ? "Mute Ambient Sound" : "Enable Ambient Sound"}
          className={`p-2 rounded-full transition-all duration-300 cursor-pointer ${
            soundEnabled
              ? 'text-amber-400 bg-amber-500/10 border border-amber-500/30'
              : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          {soundEnabled ? <Volume2 className="w-4 h-4 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
        </button>
      </nav>
    </div>
  );
}
