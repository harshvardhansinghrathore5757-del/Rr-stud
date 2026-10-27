import React from 'react';
import { MapPin, Phone, Instagram, User, Clock, Navigation, MessageSquare } from 'lucide-react';
import { academyConfig } from '../config/academyData';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#EFE8DC] border-b border-[#4A3426]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#B8903D] font-semibold mb-3">
            Visit & Connect
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#4A3426] tracking-tight text-balance">
            Find Us in Bhilwara
          </h2>
          <div className="w-16 h-0.5 bg-[#B8903D] mx-auto mt-4" />
          <p className="mt-4 text-sm sm:text-base text-[#4A3426]/80 font-light">
            Conveniently situated right off National Highway 48 at Dhullkheda, with easy highway access and tranquil open riding grounds.
          </p>
        </div>

        {/* 2-Column Split: Contact Cards & Embedded Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact Details Cards (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {/* Primary Details Box */}
            <div className="bg-[#F7F1E8] p-7 rounded-xl border border-[#4A3426]/12 shadow-sm space-y-6">
              {/* Contact Person */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#4A3426] flex items-center justify-center shrink-0 text-[#B8903D]">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#B8903D] font-semibold">
                    Contact Person
                  </span>
                  <h4 className="font-serif text-lg font-bold text-[#4A3426]">
                    {academyConfig.contact.contactPerson}
                  </h4>
                  <p className="text-xs text-[#4A3426]/75 mt-0.5">
                    Chief Coach: {academyConfig.contact.chiefCoach}
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#4A3426]/10">
                <div className="w-10 h-10 rounded-lg bg-[#4A3426] flex items-center justify-center shrink-0 text-[#B8903D]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#B8903D] font-semibold">
                    Academy & Farm Location
                  </span>
                  <p className="font-serif text-base font-bold text-[#4A3426] mt-0.5">
                    {academyConfig.contact.address}
                  </p>
                  <a
                    href={academyConfig.contact.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B8903D] hover:text-[#9E7A31] mt-2 group"
                  >
                    <Navigation className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    <span>Get Directions on Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Phone (Tap-to-call) */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#4A3426]/10">
                <div className="w-10 h-10 rounded-lg bg-[#4A3426] flex items-center justify-center shrink-0 text-[#B8903D]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#B8903D] font-semibold">
                    Phone & WhatsApp
                  </span>
                  <div className="mt-0.5">
                    <a
                      href={`tel:${academyConfig.contact.phone}`}
                      className="font-serif text-xl font-bold text-[#4A3426] hover:text-[#B8903D] transition-colors block"
                    >
                      {academyConfig.contact.phoneFormatted}
                    </a>
                    <span className="text-xs text-[#4A3426]/70">
                      Tap to call directly or message via WhatsApp
                    </span>
                  </div>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#4A3426]/10">
                <div className="w-10 h-10 rounded-lg bg-[#4A3426] flex items-center justify-center shrink-0 text-[#B8903D]">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#B8903D] font-semibold">
                    Instagram Official
                  </span>
                  <a
                    href={academyConfig.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-base font-bold text-[#4A3426] hover:text-[#B8903D] transition-colors block mt-0.5"
                  >
                    {academyConfig.contact.instagramHandle}
                  </a>
                  <span className="text-xs text-[#4A3426]/70">
                    Follow for horse videos, training clips & daily farm updates
                  </span>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#4A3426]/10">
                <div className="w-10 h-10 rounded-lg bg-[#4A3426] flex items-center justify-center shrink-0 text-[#B8903D]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#B8903D] font-semibold">
                    Riding & Visiting Hours
                  </span>
                  <p className="text-xs sm:text-sm text-[#241C18]/90 mt-0.5 leading-relaxed">
                    {academyConfig.contact.timings}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Strip */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${academyConfig.contact.phone}`}
                className="py-3 px-4 bg-[#4A3426] hover:bg-[#382E28] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-lg text-center flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#B8903D]" />
                <span>Call Now</span>
              </a>
              <a
                href={`https://wa.me/${academyConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                  'Hello, I would like to visit RR Stud & Equestrian Academy in Bhilwara.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-lg text-center flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Map (lg:col-span-7) */}
          <div className="lg:col-span-7 rounded-xl overflow-hidden shadow-md border border-[#4A3426]/15 bg-[#F7F1E8] flex flex-col min-h-[420px] lg:min-h-full">
            <div className="p-4 bg-[#4A3426] text-[#F7F1E8] flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#B8903D]" />
                <span className="font-serif text-sm font-semibold">
                  NH 48 Bhilwara Highway, Dhullkheda
                </span>
              </div>
              <a
                href={academyConfig.contact.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#B8903D] hover:underline whitespace-nowrap"
              >
                Open in Google Maps ↗
              </a>
            </div>
            <div className="flex-1 w-full min-h-[360px] relative">
              <iframe
                title="RR Stud Farm & Equestrian Academy Map Location"
                src={academyConfig.contact.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[360px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
