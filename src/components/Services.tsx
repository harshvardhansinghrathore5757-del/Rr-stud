import React, { useState } from 'react';
import {
  GraduationCap,
  Award,
  ShieldCheck,
  Home,
  Camera,
  ArrowRight,
  CheckCircle2,
  X,
} from 'lucide-react';
import { academyConfig, ServiceItem } from '../config/academyData';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-[#B8903D]' };
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap {...props} />;
      case 'Award':
        return <Award {...props} />;
      case 'ShieldCheck':
        return <ShieldCheck {...props} />;
      case 'Home':
        return <Home {...props} />;
      case 'Camera':
        return <Camera {...props} />;
      default:
        return <GraduationCap {...props} />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#EFE8DC] border-b border-[#4A3426]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#B8903D] font-semibold mb-3">
            Our Offerings
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#4A3426] tracking-tight text-balance">
            Equestrian Services & Programs
          </h2>
          <div className="w-16 h-0.5 bg-[#B8903D] mx-auto mt-4" />
          <p className="mt-4 text-sm sm:text-base text-[#4A3426]/80 font-light">
            From premier riding lessons to royal Marwari stud services, explore the disciplines we offer at RR Stud & Equestrian Academy.
          </p>
        </div>

        {/* 5 Services Cards Grid (2 in row 1, 3 in row 2 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {academyConfig.services.map((service, index) => {
            const isFeatured = index === 0;
            return (
              <div
                key={service.id}
                className={`relative flex flex-col justify-between rounded-xl p-7 transition-all duration-300 bg-[#F7F1E8] border border-[#4A3426]/12 hover:border-[#B8903D]/60 hover:shadow-lg hover:-translate-y-1 ${
                  isFeatured ? 'md:col-span-2 lg:col-span-1 border-t-4 border-t-[#B8903D]' : ''
                }`}
              >
                <div>
                  {/* Top Bar with Icon and Suitable For */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="w-12 h-12 rounded-lg bg-[#4A3426] flex items-center justify-center shrink-0">
                      {getServiceIcon(service.icon)}
                    </div>
                    <span className="text-xs text-[#4A3426]/70 font-medium">
                      {service.suitableFor}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#4A3426] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#241C18]/80 leading-relaxed font-light mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Key Highlights */}
                  <ul className="space-y-2.5 mb-6 pt-4 border-t border-[#4A3426]/10 text-xs sm:text-sm text-[#4A3426]/90">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#B8903D] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Controls */}
                <div className="pt-4 border-t border-[#4A3426]/10 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveModalService(service)}
                    className="text-xs sm:text-sm font-semibold text-[#4A3426] hover:text-[#B8903D] transition-colors underline-offset-4 hover:underline"
                  >
                    View Details
                  </button>
                  <button
                    type="button"
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#4A3426] hover:bg-[#382E28] rounded-md transition-colors"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Details Modal */}
      {activeModalService && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in"
          onClick={() => setActiveModalService(null)}
        >
          <div
            className="relative w-full max-w-lg bg-[#F7F1E8] rounded-xl p-6 sm:p-8 shadow-2xl border border-[#4A3426]/20 text-[#241C18]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-[#4A3426]/70 hover:text-[#4A3426] hover:bg-[#4A3426]/10 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#4A3426] flex items-center justify-center">
                {getServiceIcon(activeModalService.icon)}
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#4A3426]">
                  {activeModalService.title}
                </h3>
                <span className="text-xs text-[#B8903D] font-medium">
                  {activeModalService.suitableFor}
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#241C18]/85 font-light leading-relaxed mb-6">
              {activeModalService.fullDesc}
            </p>

            <h4 className="text-xs uppercase tracking-wider font-bold text-[#4A3426] mb-3">
              Included Highlights & Standards
            </h4>
            <ul className="space-y-2 mb-8 text-sm text-[#4A3426]">
              {activeModalService.features.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B8903D]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#4A3426]/15">
              <button
                type="button"
                onClick={() => setActiveModalService(null)}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#4A3426] hover:bg-[#4A3426]/10 rounded-md transition-colors"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  const title = activeModalService.title;
                  setActiveModalService(null);
                  onSelectService(title);
                }}
                className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#B8903D] hover:bg-[#9E7A31] rounded-md shadow-sm transition-colors"
              >
                Book / Inquire Now
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
