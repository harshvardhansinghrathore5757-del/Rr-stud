import React from 'react';
import { MessageSquare } from 'lucide-react';
import { academyConfig } from '../config/academyData';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${academyConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    'Hello RR Stud & Equestrian Academy, I would like to inquire about horse riding classes / stud farm details.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip on hover for desktop */}
      <span className="hidden sm:inline-block mr-3 px-3 py-1.5 bg-[#241C18] text-[#F7F1E8] text-xs font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Chat with us on WhatsApp
      </span>

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with RR Stud & Equestrian Academy on WhatsApp"
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"
      >
        <MessageSquare className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
};
