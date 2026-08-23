import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ChevronDown, Sparkles, Terminal, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function HeroSection() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const canvasRef = useRef(null);

  const targetText = `Hey, I'm ${portfolioData.personal.name}`;
  const phrases = portfolioData.personal.hero_phrases;

  // Typing effect
  useEffect(() => {
    let timer;
    if (!isDeleting && displayText.length < targetText.length) {
      timer = setTimeout(() => {
        setDisplayText(targetText.slice(0, displayText.length + 1));
      }, 100);
    } else if (!isDeleting && displayText.length === targetText.length) {
      timer = setTimeout(() => setIsDeleting(true), 3000);
    } else if (isDeleting && displayText.length > 8) {
      timer = setTimeout(() => {
        setDisplayText(targetText.slice(0, displayText.length - 1));
      }, 50);
    } else if (isDeleting && displayText.length <= 8) {
      setIsDeleting(false);
    }
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, targetText]);

  // Starfield canvas particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const particles = Array.from({ length: 90 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.8 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.7 + 0.3,
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.fillStyle = `rgba(245, 158, 11, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleCtaClick = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f59e0b', '#ff6b00', '#ffffff']
    });
    setPhraseIndex((prev) => (prev + 1) % phrases.length);

    const contactSec = document.getElementById('contact');
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />

      {/* Tilted Photo Grid Backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25 z-0">
        <div className="tilted-grid grid grid-cols-3 gap-6 w-[140%] -ml-[20%]">
          {[
            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600",
            "https://images.unsplash.com/photo-1516214104703-d870798883c5?q=80&w=600",
            "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=600",
            "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?q=80&w=600",
            "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=600",
            "https://images.unsplash.com/photo-1556742049-0a67daf4005a?q=80&w=600"
          ].map((img, i) => (
            <div key={i} className="h-64 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
              <img src={img} alt="Backdrop" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/80 to-[#07090e]" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 container mx-auto px-6 text-center max-w-4xl">
        {/* Avatar Pill */}
        <div className="inline-flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full glass-panel border border-amber-500/30 mb-6 sm:mb-8 animate-float max-w-full">
          <img
            src={portfolioData.personal.githubAvatar}
            alt={portfolioData.personal.name}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-amber-400 object-cover shrink-0"
          />
          <span className="text-xs sm:text-sm font-semibold text-amber-400 flex items-center gap-1.5 truncate">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> AI/ML Developer & MCP Specialist
          </span>
        </div>

        {/* Typing Title */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4 sm:mb-6 min-h-[48px] sm:min-h-[64px] md:min-h-[80px] leading-tight">
          {displayText}
          <span className="inline-block w-1 sm:w-1.5 h-8 sm:h-12 md:h-16 bg-amber-400 ml-1.5 sm:ml-2 animate-pulse align-middle" />
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-medium mb-2 sm:mb-3">
          {portfolioData.personal.title}
        </p>

        {/* Glowing Highlight */}
        <p className="text-sm sm:text-lg md:text-xl text-amber-400 font-semibold mb-8 sm:mb-10 glow-orange-text max-w-xl mx-auto">
          {portfolioData.personal.subtext}
        </p>

        {/* Dynamic Glowing CTA Button */}
        <div className="relative inline-block mb-10 sm:mb-14 max-w-full">
          {/* Outer Dashed Orbit Circle */}
          <div className="absolute -inset-3 sm:-inset-4 rounded-full border-2 border-dashed border-amber-500/40 animate-spin-slow pointer-events-none" />

          <button
            onClick={handleCtaClick}
            className="relative group px-5 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-slate-950 font-bold text-sm sm:text-lg shadow-xl shadow-amber-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 mx-auto max-w-full cursor-pointer"
          >
            <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950 group-hover:rotate-12 transition-transform shrink-0" />
            <span className="truncate">{phrases[phraseIndex]}</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform shrink-0" />
          </button>
        </div>

        {/* Scroll Down Arrow */}
        <div>
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="p-3 rounded-full text-amber-400/80 hover:text-amber-300 hover:bg-slate-800/50 transition-all animate-bounce"
            title="Scroll Down"
          >
            <ChevronDown className="w-7 h-7" />
          </button>
        </div>
      </div>
    </section>
  );
}
