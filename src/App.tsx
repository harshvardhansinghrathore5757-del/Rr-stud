import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CoachProfile } from './components/CoachProfile';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { BookingForm } from './components/BookingForm';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string | undefined>(
    undefined
  );

  const scrollToBooking = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedServiceForBooking(serviceTitle);
    }
    const element = document.getElementById('book');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F1E8] text-[#241C18] flex flex-col font-sans selection:bg-[#B8903D]/25 selection:text-[#4A3426]">
      {/* 1. Sticky 3-Zone Navbar */}
      <Navbar onBookClick={() => scrollToBooking()} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onBookClick={() => scrollToBooking()} />

        {/* 3. About Section (Story, Marwari horses, Values) */}
        <About />

        {/* 4. Services Section (5 cards with icons) */}
        <Services onSelectService={(title) => scrollToBooking(title)} />

        {/* 5. Why Choose Us Section (6 core points) */}
        <WhyChooseUs />

        {/* 6. Coach Profile Section (Silver Banna) */}
        <CoachProfile onBookClick={() => scrollToBooking()} />

        {/* 7. Gallery Section (Responsive masonry grid + Lightbox) */}
        <Gallery />

        {/* 8. Testimonials Section (3 editable placeholder cards) */}
        <Testimonials />

        {/* 9. Class Booking / Enquiry Form (Pre-filled WhatsApp generator) */}
        <BookingForm
          preselectedService={selectedServiceForBooking}
          onClearPreselectedService={() => setSelectedServiceForBooking(undefined)}
        />

        {/* 10. Contact Section (Address, Radhey Raman Vyas, Tap-to-call, Instagram, Google Map) */}
        <Contact />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
