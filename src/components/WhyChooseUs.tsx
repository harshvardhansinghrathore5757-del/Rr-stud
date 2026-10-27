import React from 'react';
import { academyConfig } from '../config/academyData';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F7F1E8] border-b border-[#4A3426]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#B8903D] font-semibold mb-3">
            The RR Academy Distinction
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#4A3426] tracking-tight text-balance">
            Why Train & Breed With Us
          </h2>
          <div className="w-16 h-0.5 bg-[#B8903D] mx-auto mt-4" />
          <p className="mt-4 text-sm sm:text-base text-[#4A3426]/80 font-light">
            Rooted in horsemanship traditions, driven by modern safety standards and genuine equine welfare.
          </p>
        </div>

        {/* 6 Grid Cards with Clean Editorial Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {academyConfig.whyChooseUs.map((point, index) => {
            const num = (index + 1).toString().padStart(2, '0');
            return (
              <div
                key={point.title}
                className="group relative p-8 rounded-xl bg-[#EFE8DC]/60 border border-[#4A3426]/10 hover:border-[#B8903D]/60 hover:bg-[#EFE8DC] transition-all duration-200"
              >
                <div className="flex items-baseline justify-between mb-4">
                  <span className="font-serif text-2xl font-bold text-[#B8903D]">
                    {num}.
                  </span>
                  <div className="w-8 h-0.5 bg-[#4A3426]/15 group-hover:bg-[#B8903D] transition-colors" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#4A3426] mb-2.5">
                  {point.title}
                </h3>
                <p className="text-sm text-[#241C18]/80 leading-relaxed font-light">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
