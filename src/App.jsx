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

  // Global reliable audio engine for all browsers (Desktop, Laptop, Mobile)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.02;
    audio.muted = false;

    // Function to play sound directly inside a genuine user activation gesture
    const playSound = () => {
      if (!audio || !soundEnabled) return;
      audio.muted = false;
      audio.volume = 0.02;

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Audio is now actively playing with sound!
            // Clean up the global gesture listeners once playback has started
            cleanUpListeners();
          })
          .catch(() => {
            // Will retry on next user tap/click
          });
      }
    };

    // Attempt to play on mount (if browser allows it)
    if (soundEnabled) {
      playSound();
    } else {
      audio.pause();
    }

    // Only genuine user activation gestures accepted by Chrome / Safari / Edge / Mobile
    const validActivationEvents = ['pointerdown', 'touchstart', 'click', 'keydown'];

    const handleUserGesture = () => {
      if (soundEnabled) {
        playSound();
      }
    };

    validActivationEvents.forEach((evt) => {
      document.addEventListener(evt, handleUserGesture, { capture: true, passive: true });
      window.addEventListener(evt, handleUserGesture, { capture: true, passive: true });
    });

    function cleanUpListeners() {
      validActivationEvents.forEach((evt) => {
        document.removeEventListener(evt, handleUserGesture, { capture: true });
        window.removeEventListener(evt, handleUserGesture, { capture: true });
      });
    }

    return () => {
      cleanUpListeners();
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
