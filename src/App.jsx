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

  // Robust universal audio engine for Desktop, Laptop, and Mobile
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.25; // 25% comfortable ambient sound
    audio.muted = false;

    // Function to forcefully unlock and play audio with sound
    const forcePlayWithSound = () => {
      if (!audio || !soundEnabled) return;
      audio.muted = false;
      audio.volume = 0.25;

      // Resume AudioContext if suspended (Web Audio API)
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        try {
          const ctx = new AudioContextClass();
          if (ctx.state === 'suspended') {
            ctx.resume();
          }
        } catch (e) {}
      }

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            audio.muted = false;
          })
          .catch(() => {
            // If browser blocks unmuted audio on load, start stream and unmute on mousemove/scroll
            audio.muted = true;
            audio.play().then(() => {
              const unmuteImmediate = () => {
                if (audio && soundEnabled) {
                  audio.muted = false;
                  audio.volume = 0.25;
                }
                removeUnlockListeners();
              };

              const unlockEvents = ['mousemove', 'pointermove', 'wheel', 'scroll', 'click', 'touchstart', 'keydown'];
              unlockEvents.forEach((evt) => {
                window.addEventListener(evt, unmuteImmediate, { capture: true, once: true });
              });

              function removeUnlockListeners() {
                unlockEvents.forEach((evt) => {
                  window.removeEventListener(evt, unmuteImmediate, { capture: true });
                });
              }
            }).catch(() => {});
          });
      }
    };

    if (soundEnabled) {
      forcePlayWithSound();
    } else {
      audio.pause();
    }

    // Capture all desktop & mobile triggers (cursor move, wheel, touch, click, scroll)
    const gestureEvents = [
      'mousemove',
      'pointermove',
      'mouseenter',
      'mouseover',
      'wheel',
      'scroll',
      'click',
      'pointerdown',
      'pointerup',
      'touchstart',
      'touchend',
      'keydown',
      'focus'
    ];

    const onUserGesture = () => {
      if (soundEnabled && audio) {
        audio.muted = false;
        audio.volume = 0.25;
        if (audio.paused) {
          audio.play().catch(() => {});
        }
      }
    };

    gestureEvents.forEach((evt) => {
      document.addEventListener(evt, onUserGesture, { capture: true, passive: true });
      window.addEventListener(evt, onUserGesture, { capture: true, passive: true });
    });

    return () => {
      gestureEvents.forEach((evt) => {
        document.removeEventListener(evt, onUserGesture, { capture: true });
        window.removeEventListener(evt, onUserGesture, { capture: true });
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
