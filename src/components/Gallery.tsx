import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { academyConfig, GalleryItem } from '../config/academyData';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Riding & Training', 'Marwari Stud', 'Academy Grounds', 'Events & Shoots'];

  const filteredItems = selectedCategory === 'All'
    ? academyConfig.gallery
    : academyConfig.gallery.filter((item) => item.category === selectedCategory);

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! + 1) % filteredItems.length);
  }, [lightboxIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
  }, [lightboxIndex, filteredItems.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handleNext, handlePrev]);

  const currentLightboxItem: GalleryItem | null =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#F7F1E8] border-b border-[#4A3426]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#B8903D] font-semibold mb-3">
            Life at the Academy
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#4A3426] tracking-tight text-balance">
            Photo Gallery
          </h2>
          <div className="w-16 h-0.5 bg-[#B8903D] mx-auto mt-4" />
          <p className="mt-4 text-sm sm:text-base text-[#4A3426]/80 font-light">
            Glimpses of our Marwari bloodlines, open-air arena sessions, and tranquil Rajasthani grounds.
          </p>
        </div>

        {/* Interactive Filter Tabs (Zero-Pill: segmented controls with clean active state) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setSelectedCategory(cat);
                setLightboxIndex(null);
              }}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-all duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8903D] ${
                selectedCategory === cat
                  ? 'bg-[#4A3426] text-white shadow-sm'
                  : 'bg-[#EFE8DC] text-[#4A3426]/80 hover:bg-[#4A3426]/10 hover:text-[#4A3426]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative rounded-xl overflow-hidden bg-[#EFE8DC] border border-[#4A3426]/10 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#241C18]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Hover overlay with zoom hint */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#241C18]/90 via-[#241C18]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-xs uppercase tracking-wider text-[#B8903D] font-medium">
                    {item.category}
                  </span>
                  <Maximize2 className="w-4 h-4 text-[#B8903D]" />
                </div>
                <h4 className="font-serif text-lg font-bold text-white leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-[#F7F1E8]/80 line-clamp-2 mt-1">
                  {item.caption}
                </p>
              </div>

              {/* Mobile always-visible caption bar */}
              <div className="p-3.5 bg-[#F7F1E8] sm:hidden border-t border-[#4A3426]/10">
                <div className="flex items-center justify-between text-xs mb-0.5">
                  <span className="text-[#B8903D] font-semibold">{item.category}</span>
                  <span className="text-[#4A3426]/60">Tap to expand</span>
                </div>
                <p className="font-serif text-sm font-bold text-[#4A3426] truncate">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentLightboxItem && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6 animate-in fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 p-3 rounded-full text-white/80 hover:text-white bg-white/10 hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8903D]"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation: Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full text-white/80 hover:text-white bg-black/40 hover:bg-black/70 border border-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8903D]"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation: Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full text-white/80 hover:text-white bg-black/40 hover:bg-black/70 border border-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8903D]"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Content Box */}
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[70vh] overflow-hidden rounded-lg shadow-2xl bg-black">
              <img
                src={currentLightboxItem.image}
                alt={currentLightboxItem.title}
                className="max-h-[70vh] w-auto max-w-full object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Lightbox Caption & Details */}
            <div className="w-full text-center mt-4 px-4">
              <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-wider text-[#B8903D] font-semibold mb-1">
                <span>{currentLightboxItem.category}</span>
                <span aria-hidden="true">·</span>
                <span>
                  Photo {lightboxIndex + 1} of {filteredItems.length}
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                {currentLightboxItem.title}
              </h3>
              <p className="text-sm text-[#F7F1E8]/80 max-w-xl mx-auto mt-1 font-light">
                {currentLightboxItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
