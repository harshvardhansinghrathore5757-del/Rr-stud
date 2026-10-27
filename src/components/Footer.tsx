import React from 'react';
import { Phone, Instagram, MapPin, MessageSquare, ArrowUp } from 'lucide-react';
import { HorseIcon } from './HorseIcon';
import { academyConfig } from '../config/academyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#241C18] text-[#F7F1E8] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#B8903D] text-[#4A3426] flex items-center justify-center">
                <HorseIcon className="w-5 h-5" />
              </div>
              <span className="font-serif text-lg font-bold text-white tracking-tight">
                {academyConfig.brand.name}
              </span>
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#B8903D] font-semibold">
              {academyConfig.brand.tagline}
            </p>
            <p className="text-xs sm:text-sm text-[#F7F1E8]/70 font-light leading-relaxed">
              Bhilwara’s dedicated equestrian home for royal Marwari horse breeding, certified riding instruction, and professional equine care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-wider font-bold text-white mb-4">
              Explore Academy
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#F7F1E8]/80">
              <li>
                <a href="#home" className="hover:text-[#B8903D] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#B8903D] transition-colors">
                  About & Marwari Heritage
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#B8903D] transition-colors">
                  Riding & Stud Services
                </a>
              </li>
              <li>
                <a href="#coach" className="hover:text-[#B8903D] transition-colors">
                  Chief Coach Silver Banna
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#B8903D] transition-colors">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#book" className="hover:text-[#B8903D] transition-colors">
                  Book a Trial Class
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#B8903D] transition-colors">
                  Contact & Map
                </a>
              </li>
            </ul>
          </div>

          {/* Services Quick Reference */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-wider font-bold text-white mb-4">
              Disciplines & Care
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#F7F1E8]/70">
              {academyConfig.services.map((s) => (
                <li key={s.id} className="hover:text-white transition-colors">
                  {s.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary & Social */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm uppercase tracking-wider font-bold text-white mb-4">
              Get in Touch
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#F7F1E8]/80">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#B8903D] shrink-0 mt-0.5" />
                <span>{academyConfig.contact.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#B8903D] shrink-0" />
                <a href={`tel:${academyConfig.contact.phone}`} className="hover:text-[#B8903D]">
                  {academyConfig.contact.phoneFormatted}
                </a>
              </p>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={academyConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#B8903D] hover:text-[#4A3426] flex items-center justify-center text-white transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${academyConfig.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Chat"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-emerald-600 flex items-center justify-center text-white transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={`tel:${academyConfig.contact.phone}`}
                aria-label="Call Academy"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#B8903D] hover:text-[#4A3426] flex items-center justify-center text-white transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={academyConfig.contact.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps Location"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#B8903D] hover:text-[#4A3426] flex items-center justify-center text-white transition-all duration-200"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F1E8]/60">
          <p>
            © {new Date().getFullYear()} {academyConfig.brand.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span>Bhilwara, Rajasthan, India</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
