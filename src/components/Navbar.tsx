import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { HorseIcon } from './HorseIcon';
import { academyConfig } from '../config/academyData';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Coach', href: '#coach' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F1E8]/95 backdrop-blur-md border-b border-[#4A3426]/10 shadow-sm py-3.5'
          : 'bg-[#4A3426]/85 backdrop-blur-sm border-b border-white/10 text-white py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark with horse icon */}
          <a
            href="#home"
            className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8903D]"
            aria-label="RR Stud & Equestrian Academy Home"
          >
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                isScrolled ? 'bg-[#4A3426] text-[#B8903D]' : 'bg-[#B8903D] text-[#4A3426]'
              }`}
            >
              <HorseIcon className="w-5 h-5" />
            </div>
            <span
              className={`font-serif text-lg sm:text-xl font-bold tracking-tight transition-colors ${
                isScrolled ? 'text-[#4A3426]' : 'text-[#F7F1E8]'
              }`}
            >
              {academyConfig.brand.name}
            </span>
          </a>

          {/* Zone 2: 4-6 concise single-line text navigation links */}
          <nav
            className="hidden md:flex items-center gap-7 text-sm font-medium"
            aria-label="Primary Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 border-b-2 border-transparent hover:border-[#B8903D] ${
                  isScrolled
                    ? 'text-[#4A3426]/85 hover:text-[#4A3426]'
                    : 'text-[#F7F1E8]/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onBookClick}
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide uppercase rounded-md shadow-sm transition-all duration-200 whitespace-nowrap shrink-0 bg-[#B8903D] text-white hover:bg-[#9E7A31] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8903D]"
            >
              Book a Trial Class
            </button>
          </div>

          {/* Mobile hamburger trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8903D] ${
                isScrolled ? 'text-[#4A3426] hover:bg-[#4A3426]/10' : 'text-white hover:bg-white/10'
              }`}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#F7F1E8] border-b border-[#4A3426]/15 px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-[#4A3426] hover:bg-[#4A3426]/5 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-[#4A3426]/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-3 text-center text-sm font-semibold uppercase tracking-wider text-white bg-[#B8903D] hover:bg-[#9E7A31] rounded-md shadow-sm"
            >
              Book a Trial Class
            </button>
            <a
              href={`tel:${academyConfig.contact.phone}`}
              className="w-full py-2.5 flex items-center justify-center gap-2 text-sm font-medium text-[#4A3426] border border-[#4A3426]/20 rounded-md hover:bg-[#4A3426]/5"
            >
              <Phone className="w-4 h-4 text-[#B8903D]" />
              <span>Call: {academyConfig.contact.phoneFormatted}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
