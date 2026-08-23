import React, { useState, useEffect, useRef } from 'react';
import FloatingNavbar from './components/FloatingNavbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const audioRef = useRef(null);

  // Synchronize audio element state with soundEnabled and mobile gesture unlock
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.2; // 20% comfortable ambient volume

    const playAudio = () => {
      if (audio && soundEnabled) {
        audio.play().catch(() => {
          // Will unblock on first touch/gesture
        });
      }
    };

    if (soundEnabled) {
      playAudio();
    } else {
      audio.pause();
    }

    // Capture first touch/click/scroll on entire document for mobile browsers
    const handleGesture = () => {
      if (audio && soundEnabled && audio.paused) {
        audio.play().catch(() => {});
      }
    };

    const events = ['touchstart', 'touchend', 'pointerdown', 'mousedown', 'click', 'scroll'];
    events.forEach((evt) => {
      document.addEventListener(evt, handleGesture, { capture: true, passive: true });
    });

    return () => {
      events.forEach((evt) => {
        document.removeEventListener(evt, handleGesture, { capture: true });
      });
    };
  }, [soundEnabled]);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-300 relative overflow-x-hidden">
      {/* Hidden Persistent DOM Audio Element */}
      <audio
        ref={audioRef}
        src="/sounds/commercial-upbeat-energetic-rock-354637.mp3"
        loop
        preload="auto"
        playsInline
      />

      {/* Floating Pill Navbar */}
      <FloatingNavbar soundEnabled={soundEnabled} setSoundEnabled={setSoundEnabled} />

      {/* Sections */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
