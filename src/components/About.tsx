import React from 'react';
import { Compass, Heart, Award } from 'lucide-react';
import { academyConfig } from '../config/academyData';

export const About: React.FC = () => {
  const valueIcons = [
    <Award className="w-5 h-5 text-[#B8903D]" />,
    <Heart className="w-5 h-5 text-[#B8903D]" />,
    <Compass className="w-5 h-5 text-[#B8903D]" />,
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#F7F1E8] border-b border-[#4A3426]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#B8903D] font-semibold mb-3">
            {academyConfig.about.eyebrow}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#4A3426] tracking-tight text-balance">
            {academyConfig.about.title}
          </h2>
          <div className="w-16 h-0.5 bg-[#B8903D] mx-auto mt-4" />
        </div>

        {/* 2-Column Split: Story & Pedigree Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Column: Story text */}
          <div className="lg:col-span-7 space-y-6 text-[#241C18]/90 text-base sm:text-lg leading-relaxed">
            {academyConfig.about.paragraphs.map((p, idx) => (
              <p key={idx} className="font-light">
                {p}
              </p>
            ))}

            <div className="pt-2">
              <div className="p-5 rounded-lg bg-[#EFE8DC] border border-[#4A3426]/10">
                <h4 className="font-serif text-lg font-bold text-[#4A3426] mb-1">
                  The Pride of Mewar: The Marwari Horse
                </h4>
                <p className="text-sm text-[#4A3426]/85 leading-normal">
                  Distinguished by inward-pointing lyre ears that can rotate 180 degrees, native desert hardiness, and fierce historical loyalty to Rajput warriors, our Marwari horses are bred for temperament, beauty, and authentic breed standards.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Marwari Showcase with Caption */}
          <div className="lg:col-span-5">
            <div className="relative group rounded-xl overflow-hidden shadow-lg border border-[#4A3426]/15 bg-[#EFE8DC]">
              <img
                src={academyConfig.about.featureImage}
                alt="Marwari pedigree horse at RR Stud Farm Bhilwara"
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="p-4 bg-[#4A3426] text-[#F7F1E8]">
                <p className="font-serif text-sm font-semibold tracking-wide">
                  Royal Marwari Pedigree Stallion
                </p>
                <p className="text-xs text-[#F7F1E8]/75 mt-0.5">
                  Maintained with meticulous nutrition and open-air paddocks at Dhullkheda, Bhilwara
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Academy Core Values: Discipline, Care for Horses, Confidence in Riders */}
        <div className="border-t border-[#4A3426]/10 pt-14">
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#4A3426]">
              Our Guiding Principles
            </h3>
            <p className="text-sm text-[#4A3426]/75 mt-1">
              Every lesson and interaction at RR Stud Farm is rooted in three foundational pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {academyConfig.about.values.map((v, i) => (
              <div
                key={v.title}
                className="bg-[#EFE8DC]/80 p-7 rounded-xl border border-[#4A3426]/10 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-lg bg-[#4A3426] flex items-center justify-center mb-5">
                  {valueIcons[i]}
                </div>
                <h4 className="font-serif text-xl font-bold text-[#4A3426] mb-2">
                  {v.title}
                </h4>
                <p className="text-sm text-[#241C18]/80 leading-relaxed font-light">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
