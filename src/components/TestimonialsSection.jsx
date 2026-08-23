import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { MessageSquareQuote, Quote, Star } from 'lucide-react';

export default function TestimonialsSection() {
  const { testimonials } = portfolioData;
  const [selectedId, setSelectedId] = useState(testimonials[0]?.id || 1);

  const activeTestimonial = testimonials.find(t => t.id === selectedId) || testimonials[0];

  return (
    <section id="testimonials" className="py-24 relative z-20 container mx-auto px-6 max-w-5xl">
      <div className="text-center mb-16">
        <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/20">
          TESTIMONIALS
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-4">
          What Mentors & Peers Say ;)
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto flex items-center justify-center gap-2">
          <span>✈️</span>
          <span className="text-amber-400 font-bold border-b border-dashed border-amber-400/50">HOVER</span>
          <span>over avatars to see testimonials from mentors and peers.</span>
        </p>
      </div>

      {/* Avatar Orbit Grid */}
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-12">
        {testimonials.map((item) => {
          const isSelected = item.id === selectedId;
          return (
            <button
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              onMouseEnter={() => setSelectedId(item.id)}
              className={`relative group transition-all duration-300 ${
                isSelected ? 'scale-125 z-20' : 'opacity-70 hover:opacity-100 hover:scale-110'
              }`}
            >
              <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full p-1 transition-all ${
                isSelected
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 shadow-xl shadow-amber-500/30'
                  : 'bg-slate-800 hover:bg-amber-500/50'
              }`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full rounded-full object-cover border-2 border-slate-950"
                />
              </div>

              {isSelected && (
                <span className="absolute -top-2 -right-2 p-1 rounded-full bg-amber-500 text-slate-950 shadow-lg">
                  <Star className="w-3.5 h-3.5 fill-current" />
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Testimonial Quote Display Box */}
      {activeTestimonial && (
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-amber-500/30 shadow-2xl relative max-w-3xl mx-auto transition-all duration-500">
          <Quote className="w-12 h-12 text-amber-500/20 absolute top-6 left-6 pointer-events-none" />

          <div className="relative z-10 text-center space-y-6">
            <p className="text-xl md:text-2xl text-amber-300 font-medium italic leading-relaxed">
              "{activeTestimonial.comment}"
            </p>

            <div className="pt-4 border-t border-slate-800/80 inline-block">
              <h4 className="text-lg font-bold text-white mb-1">
                {activeTestimonial.name}
              </h4>
              <p className="text-xs md:text-sm text-slate-400 max-w-md mx-auto">
                {activeTestimonial.designation}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
