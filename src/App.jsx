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
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioRef = useRef(null);

  // Initialize and play/pause the exact commercial-upbeat-energetic-rock-354637.mp3 audio
  useEffect(() => {
    if (!audioRef.current) {
      const audio = new Audio('/sounds/commercial-upbeat-energetic-rock-354637.mp3');
      audio.loop = true;
      audio.volume = 0.15; // 15% volume default
      audioRef.current = audio;
    }

    if (soundEnabled) {
      audioRef.current.play().catch((err) => {
        console.warn('Background music play blocked by browser policy:', err);
      });
    } else {
      audioRef.current.pause();
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [soundEnabled]);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-300 relative overflow-x-hidden">
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
