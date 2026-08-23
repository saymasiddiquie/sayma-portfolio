import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  Calendar,
  ExternalLink,
  Award,
  MapPin,
  Sparkles,
  Github,
  CheckCircle2,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Maximize2
} from 'lucide-react';

export default function AchievementsSection() {
  const { achievements } = portfolioData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const activeAchievement = achievements[currentIndex] || achievements[0];

  const handleNext = () => {
    setActiveImageIndex(0);
    setCurrentIndex((prev) => (prev === achievements.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveImageIndex(0);
    setCurrentIndex((prev) => (prev === 0 ? achievements.length - 1 : prev - 1));
  };

  const handleSelectChapter = (index) => {
    setActiveImageIndex(0);
    setCurrentIndex(index);
  };

  // Touch swipe gesture handlers for mobile
  const minSwipeDistance = 45;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  const currentImages = activeAchievement.images && activeAchievement.images.length > 0
    ? activeAchievement.images
    : [];
  const displayImage = currentImages[activeImageIndex] || currentImages[0];
  const isCertificate = displayImage && displayImage.includes('certificate');
  const actionUrl = activeAchievement.url;
  const isGitHub = actionUrl && actionUrl.includes('github.com');

  return (
    <section id="achievements" className="py-24 relative z-20 container mx-auto px-6 max-w-6xl">
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs md:text-sm font-extrabold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/30 shadow-lg shadow-amber-500/10">
          <Award className="w-4 h-4 text-amber-400" />
          MILESTONES & RECOGNITION
        </span>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mt-5 mb-5 tracking-tight leading-tight">
          Celebrated <span className="gradient-heading">Chapters</span>
        </h2>
        <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed">
          Key highlights, national hackathon Grand Finale achievements, and competitive tech milestones.
        </p>
      </div>

      {/* Quick Chapter Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
        {achievements.map((item, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={item.id}
              onClick={() => handleSelectChapter(idx)}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-lg shadow-amber-500/20 scale-105'
                  : 'glass-panel text-slate-400 hover:text-white hover:border-amber-500/40'
              }`}
            >
              <span className="font-mono text-[11px] opacity-75">0{idx + 1}.</span>
              <span className="truncate max-w-[150px] sm:max-w-[200px]">{item.title.split('—')[0].split('-')[0].trim()}</span>
            </button>
          );
        })}
      </div>

      {/* BIG SPOTLIGHT HERO SHOWCASE CARD */}
      <div
        className="relative select-none"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Ambient Glow Background */}
        <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/20 via-orange-500/10 to-amber-500/20 rounded-[36px] blur-2xl opacity-75 pointer-events-none" />

        <div className="relative rounded-[32px] overflow-hidden glass-panel border-2 border-amber-500/50 bg-gradient-to-br from-[#0e1322] via-[#090d18] to-[#060810] p-5 sm:p-8 lg:p-10 shadow-2xl shadow-amber-500/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Big Showcase Image / Certificate (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="relative h-64 sm:h-80 lg:h-[420px] w-full rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl bg-slate-950 group">
                {displayImage ? (
                  <img
                    key={displayImage}
                    src={displayImage}
                    alt={activeAchievement.title}
                    className={`w-full h-full transition-all duration-700 ${
                      isCertificate
                        ? 'object-contain p-3 bg-slate-900/90'
                        : 'object-cover group-hover:scale-105 group-hover:brightness-105'
                    }`}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-900/60 p-6 text-center">
                    <Award className="w-16 h-16 text-amber-400/40 animate-pulse" />
                  </div>
                )}

                {!isCertificate && (
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
                )}

                {/* Direct Image Overlay Swap Buttons (Left & Right Arrows) */}
                <button
                  onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-slate-950/85 border border-amber-500/40 text-amber-400 hover:text-white hover:bg-amber-500 hover:border-amber-400 shadow-xl backdrop-blur-md transition-all active:scale-95 z-20 cursor-pointer"
                  title="Swap to Previous Chapter"
                  aria-label="Previous Chapter"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={(e) => { e.stopPropagation(); handleNext(); }}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-slate-950/85 border border-amber-500/40 text-amber-400 hover:text-white hover:bg-amber-500 hover:border-amber-400 shadow-xl backdrop-blur-md transition-all active:scale-95 z-20 cursor-pointer"
                  title="Swap to Next Chapter"
                  aria-label="Next Chapter"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Top Badges on Image */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2 pointer-events-none">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-black bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 flex items-center gap-1.5 shadow-lg">
                    <Award className="w-3.5 h-3.5 fill-current" />
                    CHAPTER #{activeAchievement.id}
                  </span>
                </div>

                {activeAchievement.category && (
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[11px] font-bold bg-slate-900/80 backdrop-blur-md text-amber-300 border border-amber-500/30 pointer-events-none">
                    {activeAchievement.category.split('|')[0].trim()}
                  </span>
                )}

                {/* Bottom Overlay bar on Image */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300 bg-slate-950/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-800 pointer-events-none">
                  <span className="flex items-center gap-1.5 font-medium truncate">
                    <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    {activeAchievement.time}
                  </span>
                  <span className="text-amber-400 font-mono font-bold shrink-0">
                    0{currentIndex + 1} / 0{achievements.length}
                  </span>
                </div>
              </div>

              {/* Multi-Image Gallery Switcher (e.g. Meta AI Hackathon photos) */}
              {currentImages.length > 1 && (
                <div className="flex items-center gap-3">
                  {currentImages.map((img, iIdx) => (
                    <button
                      key={iIdx}
                      onClick={() => setActiveImageIndex(iIdx)}
                      className={`relative h-16 w-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                        activeImageIndex === iIdx
                          ? 'border-amber-400 scale-105 shadow-md shadow-amber-500/20'
                          : 'border-slate-800 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`Thumbnail ${iIdx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                  <span className="text-xs text-slate-400 font-medium ml-1">
                    Click to switch photo ({currentImages.length} available)
                  </span>
                </div>
              )}

              {/* Mobile Dedicated Swap Navigation Buttons Bar */}
              <div className="flex lg:hidden items-center gap-2.5 pt-1">
                <button
                  onClick={handlePrev}
                  className="flex-1 py-3 px-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 text-amber-400 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Prev Chapter</span>
                </button>
                <button
                  onClick={handleNext}
                  className="flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 active:scale-95 transition-all cursor-pointer"
                >
                  <span>Next Chapter</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Big Showcase Details (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                {/* Header Subtitle & Prev/Next Switchers */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-black tracking-wide uppercase bg-gradient-to-r from-amber-500/25 to-orange-500/25 text-amber-300 border border-amber-500/50 shadow-md">
                      ★ Celebrated Milestone
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      • {activeAchievement.category}
                    </span>
                  </div>

                  {/* Navigation Switchers */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-800 text-amber-400 transition-all shadow-md active:scale-95 flex items-center gap-1 text-xs font-bold cursor-pointer"
                      title="Previous Milestone"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span className="hidden sm:inline">Prev</span>
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-800 text-amber-400 transition-all shadow-md active:scale-95 flex items-center gap-1 text-xs font-bold cursor-pointer"
                      title="Next Milestone"
                    >
                      <span className="hidden sm:inline">Next</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-3">
                  {activeAchievement.title}
                </h3>

                {/* Location / Venue */}
                {activeAchievement.location && (
                  <div className="flex items-center gap-2 text-sm font-semibold text-amber-400 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{activeAchievement.location}</span>
                  </div>
                )}

                {/* Description */}
                <p className="text-slate-300 text-base lg:text-lg leading-relaxed">
                  {activeAchievement.description}
                </p>
              </div>

              {/* Stats Grid (if available) */}
              {activeAchievement.stats && activeAchievement.stats.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activeAchievement.stats.map((st, sIdx) => (
                    <div key={sIdx} className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800 text-center">
                      <div className="text-xs text-slate-400 font-medium">{st.label}</div>
                      <div className="text-base sm:text-lg font-black text-amber-300 mt-0.5">{st.value}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Key Learnings Badges */}
              {activeAchievement.keyLearnings && activeAchievement.keyLearnings.length > 0 && (
                <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/90 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5" /> Key Learnings & Takeaways
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {activeAchievement.keyLearnings.map((learning, lIdx) => (
                      <span
                        key={lIdx}
                        className="px-3 py-1 rounded-xl text-xs font-semibold bg-slate-800/90 text-slate-200 border border-slate-700 flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3 h-3 text-amber-400" />
                        {learning}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons & Badge Footer */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-slate-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  {activeAchievement.badgeText || (isGitHub ? 'GitHub Project Repository' : 'Verified Milestone')}
                </span>

                {actionUrl && (
                  <a
                    href={actionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-extrabold text-xs sm:text-sm transition-all shadow-xl cursor-pointer ${
                      isGitHub
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 hover:scale-105 shadow-amber-500/25'
                        : 'bg-amber-500 text-slate-950 hover:bg-amber-400 hover:scale-105 shadow-amber-500/20'
                    }`}
                  >
                    {isGitHub ? <Github className="w-4 h-4" /> : null}
                    <span>{activeAchievement.urlLabel || (isGitHub ? 'View Repository on GitHub' : 'Open Post on LinkedIn')}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Glowing Pagination Dots */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {achievements.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleSelectChapter(idx)}
              className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex
                  ? 'w-10 bg-gradient-to-r from-amber-500 to-orange-500 shadow-md shadow-amber-500/50'
                  : 'w-3 bg-slate-800 hover:bg-slate-700'
              }`}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
