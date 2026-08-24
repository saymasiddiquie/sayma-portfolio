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
  const audioCtxRef = useRef(null);
  const gainNodeRef = useRef(null);
  const isInitializedRef = useRef(false);

  // Soft volume level (1.5% - 2%) that works across iOS/iPadOS, Android, and Desktop
  const SOFT_VOLUME = 0.015;

  const initWebAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!isInitializedRef.current) {
      try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          const ctx = new AudioContextClass();
          const source = ctx.createMediaElementSource(audio);
          const gainNode = ctx.createGain();
          gainNode.gain.setValueAtTime(SOFT_VOLUME, ctx.currentTime);
          source.connect(gainNode);
          gainNode.connect(ctx.destination);

          audioCtxRef.current = ctx;
          gainNodeRef.current = gainNode;
          isInitializedRef.current = true;
        }
      } catch (err) {
        console.warn('Web Audio fallback:', err);
      }
    }

    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume().catch(() => {});
    }
  };

  // Global reliable audio engine for all browsers (Phones, Tablets, Laptops, Desktops)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = SOFT_VOLUME;
    audio.muted = false;

    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(
        soundEnabled ? SOFT_VOLUME : 0,
        audioCtxRef.current.currentTime
      );
    }

    // Function to play sound directly inside a genuine user activation gesture
    const playSound = () => {
      if (!audio || !soundEnabled) return;

      initWebAudio();
      audio.muted = false;
      audio.volume = SOFT_VOLUME;

      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.setValueAtTime(SOFT_VOLUME, audioCtxRef.current.currentTime);
      }

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

    // Only genuine user activation gestures accepted by Chrome / Safari / Edge / Mobile / Tablets
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
