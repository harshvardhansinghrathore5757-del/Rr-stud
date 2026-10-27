import React from 'react';
import { Quote, Phone, MessageSquare, ShieldCheck, Award } from 'lucide-react';
import { HorseIcon } from './HorseIcon';
import { academyConfig } from '../config/academyData';

interface CoachProfileProps {
  onBookClick: () => void;
}

export const CoachProfile: React.FC<CoachProfileProps> = ({ onBookClick }) => {
  const hasPhoto = Boolean(academyConfig.coach.image);

  return (
    <section id="coach" className="py-20 md:py-28 bg-[#4A3426] text-[#F7F1E8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#B8903D] font-semibold mb-3">
            Instruction & Leadership
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight text-balance">
            Chief Coach Silver Banna
          </h2>
          <div className="w-16 h-0.5 bg-[#B8903D] mx-auto mt-4" />
        </div>

        {/* Coach Profile Card (Split Grid) */}
        <div className="max-w-5xl mx-auto bg-[#382E28] rounded-2xl border border-white/10 shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 items-stretch">
          {/* Left Column: Photo (if available) or Prestigious Equestrian Crest / Monogram Badge */}
          <div className="md:col-span-5 relative min-h-[320px] md:min-h-[440px] bg-[#241C18] flex flex-col items-center justify-center p-8 text-center border-b md:border-b-0 md:border-r border-white/10">
            {hasPhoto ? (
              <>
                <img
                  src={academyConfig.coach.image}
                  alt="Silver Banna - Chief Coach and Equine Trainer at RR Stud Farm"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#382E28] via-transparent to-transparent md:hidden" />
              </>
            ) : (
              <div className="flex flex-col items-center justify-center space-y-4">
                {/* Royal Equestrian Crest */}
                <div className="relative">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#4A3426] border-2 border-[#B8903D] flex items-center justify-center shadow-xl">
                    <HorseIcon className="w-12 h-12 sm:w-14 sm:h-14 text-[#B8903D]" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#B8903D] text-[#241C18] text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full shadow-sm">
                    Master Trainer
                  </div>
                </div>

                <div className="pt-2">
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
                    {academyConfig.coach.name}
                  </h4>
                  <p className="text-xs uppercase tracking-widest text-[#B8903D] mt-1 font-semibold">
                    {academyConfig.coach.designation}
                  </p>
                  <p className="text-xs text-[#F7F1E8]/70 mt-1">
                    RR Stud & Equestrian Academy · Bhilwara
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-center gap-4 text-xs text-[#F7F1E8]/75">
                  <span className="inline-flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#B8903D]" />
                    <span>Equine Advocate</span>
                  </span>
                  <span aria-hidden="true" className="text-white/20">·</span>
                  <span className="inline-flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-[#B8903D]" />
                    <span>Marwari Mentor</span>
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Coach Bio & Information Column */}
          <div className="md:col-span-7 p-7 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded bg-[#B8903D]/20 text-[#B8903D] text-xs font-semibold uppercase tracking-wider mb-3">
                {academyConfig.coach.designation}
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                {academyConfig.coach.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#B8903D] font-medium mb-5">
                Well-Known Horse Trainer · Riding Instructor · Equine Welfare Advocate
              </p>

              <div className="space-y-4 text-sm sm:text-base text-[#F7F1E8]/85 font-light leading-relaxed mb-6">
                {academyConfig.coach.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Coach Quote Box */}
              <div className="p-4 rounded-lg bg-[#241C18]/60 border border-white/5 relative mb-6">
                <Quote className="w-6 h-6 text-[#B8903D]/40 absolute top-3 right-3" />
                <p className="font-serif italic text-sm text-[#F7F1E8]/90 pr-6">
                  “{academyConfig.coach.quote}”
                </p>
              </div>

              {/* Verified Coach Profile note */}
              <p className="text-xs text-[#F7F1E8]/50 italic mb-6">
                {academyConfig.coach.credentialsNote}
              </p>
            </div>

            {/* Direct Connect Buttons */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onBookClick}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#4A3426] bg-[#B8903D] hover:bg-[#9E7A31] hover:text-white rounded-md transition-colors shadow-sm"
              >
                Schedule Session With Coach
              </button>

              <a
                href={`tel:${academyConfig.contact.phone}`}
                className="px-4 py-2.5 text-xs font-medium text-white border border-white/20 hover:bg-white/10 rounded-md transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#B8903D]" />
                <span>Call Directly</span>
              </a>

              <a
                href={`https://wa.me/${academyConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Silver Banna ji, I would like to inquire about horse riding training at RR Stud & Equestrian Academy.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 text-xs font-medium text-emerald-300 border border-emerald-500/30 hover:bg-emerald-950/40 rounded-md transition-colors inline-flex items-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
