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

  // Robust mobile & desktop audio unlocking engine
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.3;
    audio.muted = false;

    // Function to forcefully unlock and play audio with sound
    const forcePlayWithSound = () => {
      if (!audio) return;
      audio.muted = false;
      audio.volume = 0.3;

      // Resume AudioContext if available on iOS/WebKit
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        try {
          const ctx = new AudioContextClass();
          if (ctx.state === 'suspended') {
            ctx.resume();
          }
        } catch (e) {}
      }

      if (soundEnabled) {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      }
    };

    if (soundEnabled) {
      forcePlayWithSound();
    } else {
      audio.pause();
    }

    // Attach immediate capture triggers to all user interaction events
    const gestureEvents = ['touchstart', 'touchend', 'pointerdown', 'pointerup', 'click', 'scroll', 'keydown'];
    
    const onUserInteraction = () => {
      if (soundEnabled) {
        forcePlayWithSound();
      }
    };

    gestureEvents.forEach((evt) => {
      document.addEventListener(evt, onUserInteraction, { capture: true, passive: true });
      window.addEventListener(evt, onUserInteraction, { capture: true, passive: true });
    });

    return () => {
      gestureEvents.forEach((evt) => {
        document.removeEventListener(evt, onUserInteraction, { capture: true });
        window.removeEventListener(evt, onUserInteraction, { capture: true });
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
