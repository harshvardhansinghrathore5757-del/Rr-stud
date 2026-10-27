import React from 'react';
import { Star, Quote } from 'lucide-react';
import { academyConfig } from '../config/academyData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#EFE8DC] border-b border-[#4A3426]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#B8903D] font-semibold mb-3">
            Voices of Riders & Breeders
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#4A3426] tracking-tight text-balance">
            Experiences at RR Stud Farm
          </h2>
          <div className="w-16 h-0.5 bg-[#B8903D] mx-auto mt-4" />
          <p className="mt-4 text-xs sm:text-sm text-[#4A3426]/60 italic">
            [Sample reviews below — easily customizable in <code className="font-mono text-[#B8903D]">academyData.ts</code>]
          </p>
        </div>

        {/* 3 Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {academyConfig.testimonials.map((t) => (
            <div
              key={t.id}
              className="relative flex flex-col justify-between p-8 rounded-xl bg-[#F7F1E8] border border-[#4A3426]/12 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                {/* Editable Placeholder Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#B8903D] text-[#B8903D]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-[#B8903D]/90 bg-[#B8903D]/10 px-2 py-0.5 rounded">
                    Sample Review
                  </span>
                </div>

                {/* Quote Icon & Content */}
                <Quote className="w-6 h-6 text-[#B8903D]/30 mb-3" />
                <p className="font-serif italic text-base text-[#241C18]/90 leading-relaxed mb-6">
                  “{t.quote}”
                </p>
              </div>

              {/* Author & Context */}
              <div className="pt-4 border-t border-[#4A3426]/10">
                <h4 className="font-serif text-base font-bold text-[#4A3426]">
                  {t.author}
                </h4>
                <p className="text-xs text-[#4A3426]/80 font-medium mt-0.5">
                  {t.role}
                </p>
                <p className="text-xs text-[#B8903D] mt-0.5 font-light">
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
