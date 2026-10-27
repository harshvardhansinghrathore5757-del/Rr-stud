import React from 'react';
import { Phone, Calendar, ArrowDown } from 'lucide-react';
import { academyConfig } from '../config/academyData';

interface HeroProps {
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden bg-[#241C18]"
    >
      {/* Background Image with Fallback and Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={academyConfig.hero.image}
          alt="Majestic horse and rider galloping in the Rajasthan arena at RR Stud & Equestrian Academy"
          className="w-full h-full object-cover object-center filter brightness-[0.88]"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Measured dark gradient scrim for WCAG AA text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#241C18] via-[#241C18]/65 to-[#241C18]/40" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#241C18]/30 to-[#241C18]/80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#F7F1E8]">
        {/* Subtitle / Location Kicker */}
        <div className="inline-flex items-center gap-2 mb-4 text-xs sm:text-sm uppercase tracking-[0.25em] text-[#B8903D] font-semibold">
          <span>{academyConfig.brand.foundedLocation}</span>
          <span aria-hidden="true">·</span>
          <span>Equestrian Academy & Stud Farm</span>
        </div>

        {/* Primary Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1] text-balance">
          {academyConfig.hero.headline}
        </h1>

        {/* Value Proposition Subtext */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#F7F1E8]/90 font-light leading-relaxed mb-9 text-balance">
          {academyConfig.hero.subtext}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14">
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto px-8 py-3.5 text-sm sm:text-base font-semibold uppercase tracking-wider text-white bg-[#B8903D] hover:bg-[#9E7A31] rounded-md shadow-lg transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8903D]"
          >
            <Calendar className="w-4 h-4" />
            <span>{academyConfig.hero.ctaPrimary}</span>
          </button>

          <a
            href={`tel:${academyConfig.contact.phone}`}
            className="w-full sm:w-auto px-8 py-3.5 text-sm sm:text-base font-semibold uppercase tracking-wider text-[#F7F1E8] bg-[#4A3426]/70 hover:bg-[#4A3426] border border-white/20 rounded-md backdrop-blur-sm transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Phone className="w-4 h-4 text-[#B8903D]" />
            <span>{academyConfig.hero.ctaSecondary}</span>
          </a>
        </div>

        {/* Key Highlights Strip (Zero-Pill: clean typographic separator) */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-4 text-xs sm:text-sm text-[#F7F1E8]/80 font-medium">
          {academyConfig.hero.keyPoints.map((point, idx) => (
            <React.Fragment key={point}>
              {idx > 0 && <span className="text-[#B8903D]" aria-hidden="true">·</span>}
              <span>{point}</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#F7F1E8]/60 hover:text-white transition-colors p-2"
        aria-label="Scroll down to About section"
      >
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
};
