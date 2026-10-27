import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, MessageSquare, Phone, RefreshCw } from 'lucide-react';
import { academyConfig } from '../config/academyData';

interface BookingFormProps {
  preselectedService?: string;
  onClearPreselectedService?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  preselectedService,
  onClearPreselectedService,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [ageGroup, setAgeGroup] = useState('Kids (Ages 6 – 12)');
  const [experienceLevel, setExperienceLevel] = useState('Complete Beginner (First time)');
  const [serviceType, setServiceType] = useState('Horse Riding Trial Class');
  const [preferredTime, setPreferredTime] = useState('Morning Batch (6:00 AM – 9:00 AM)');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (preselectedService) {
      setServiceType(preselectedService);
    }
  }, [preselectedService]);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!name.trim()) {
      errs.name = 'Please provide your name';
    }
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = 'Please provide a valid 10-digit phone number';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const messageLines = [
      `*New Inquiry - RR Stud & Equestrian Academy*`,
      `---------------------------------------`,
      `*Name:* ${name.trim()}`,
      `*Phone:* ${phone.trim()}`,
      `*Age Group:* ${ageGroup}`,
      `*Experience Level:* ${experienceLevel}`,
      `*Service / Program:* ${serviceType}`,
      `*Preferred Slot:* ${preferredTime}`,
      message.trim() ? `*Notes:* ${message.trim()}` : null,
      `---------------------------------------`,
      `Sent via Academy Website Booking Form`,
    ].filter(Boolean);

    const waText = encodeURIComponent(messageLines.join('\n'));
    const waUrl = `https://wa.me/${academyConfig.contact.whatsappNumber}?text=${waText}`;

    setLastWhatsAppUrl(waUrl);
    setSubmitted(true);

    // Open WhatsApp in new tab/window
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setMessage('');
    setSubmitted(false);
    setErrors({});
    if (onClearPreselectedService) onClearPreselectedService();
  };

  return (
    <section id="book" className="py-20 md:py-28 bg-[#F7F1E8] border-b border-[#4A3426]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#B8903D] font-semibold mb-3">
            Get In The Saddle
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#4A3426] tracking-tight text-balance">
            Book a Trial Class & Inquiries
          </h2>
          <div className="w-16 h-0.5 bg-[#B8903D] mx-auto mt-4" />
          <p className="mt-4 text-sm sm:text-base text-[#4A3426]/80 font-light">
            Fill out your preferences below. Submitting will instantly connect you with Chief Coach Silver Banna and the RR Stud team on WhatsApp with your details prefilled.
          </p>
        </div>

        {/* Confirmation Screen if submitted */}
        {submitted ? (
          <div className="bg-[#EFE8DC] p-8 sm:p-10 rounded-2xl border border-[#4A3426]/20 shadow-lg text-center animate-in fade-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center mb-5">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#4A3426] mb-3">
              Inquiry Prepared & WhatsApp Launched!
            </h3>
            <p className="text-sm sm:text-base text-[#4A3426]/85 max-w-lg mx-auto font-light leading-relaxed mb-6">
              Thank you, <strong>{name}</strong>. If WhatsApp did not open automatically on your device, click the button below to complete your message to <strong>{academyConfig.contact.phoneFormatted}</strong>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href={lastWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-md shadow-sm transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open in WhatsApp</span>
              </a>

              <a
                href={`tel:${academyConfig.contact.phone}`}
                className="w-full sm:w-auto px-6 py-3 bg-[#4A3426] hover:bg-[#382E28] text-white font-semibold rounded-md shadow-sm transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4 text-[#B8903D]" />
                <span>Call Directly: {academyConfig.contact.phone}</span>
              </a>
            </div>

            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 text-xs text-[#4A3426]/70 hover:text-[#4A3426] underline-offset-4 hover:underline"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Submit another inquiry</span>
            </button>
          </div>
        ) : (
          /* Form Container */
          <div className="bg-[#EFE8DC]/80 p-6 sm:p-10 rounded-2xl border border-[#4A3426]/15 shadow-md">
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Row 1: Name and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="rider-name" className="block text-xs uppercase tracking-wider font-semibold text-[#4A3426] mb-2">
                    Full Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="rider-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                    }}
                    placeholder="e.g. Yashvardhan Singh"
                    className={`w-full px-4 py-3 rounded-md bg-white border text-sm text-[#241C18] placeholder:text-[#4A3426]/40 focus:outline-none focus:ring-2 focus:ring-[#B8903D] transition-colors ${
                      errors.name ? 'border-rose-500' : 'border-[#4A3426]/20'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-rose-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="rider-phone" className="block text-xs uppercase tracking-wider font-semibold text-[#4A3426] mb-2">
                    Phone / WhatsApp Number <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="rider-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }));
                    }}
                    placeholder="10-digit mobile number"
                    className={`w-full px-4 py-3 rounded-md bg-white border text-sm text-[#241C18] placeholder:text-[#4A3426]/40 focus:outline-none focus:ring-2 focus:ring-[#B8903D] transition-colors ${
                      errors.phone ? 'border-rose-500' : 'border-[#4A3426]/20'
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-rose-600">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Row 2: Age Group & Experience Level */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="rider-age" className="block text-xs uppercase tracking-wider font-semibold text-[#4A3426] mb-2">
                    Age Group
                  </label>
                  <select
                    id="rider-age"
                    value={ageGroup}
                    onChange={(e) => setAgeGroup(e.target.value)}
                    className="w-full px-4 py-3 rounded-md bg-white border border-[#4A3426]/20 text-sm text-[#241C18] focus:outline-none focus:ring-2 focus:ring-[#B8903D] transition-colors"
                  >
                    {academyConfig.bookingOptions.ageGroups.map((grp) => (
                      <option key={grp.id} value={grp.label}>
                        {grp.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="rider-exp" className="block text-xs uppercase tracking-wider font-semibold text-[#4A3426] mb-2">
                    Riding Experience Level
                  </label>
                  <select
                    id="rider-exp"
                    value={experienceLevel}
                    onChange={(e) => setExperienceLevel(e.target.value)}
                    className="w-full px-4 py-3 rounded-md bg-white border border-[#4A3426]/20 text-sm text-[#241C18] focus:outline-none focus:ring-2 focus:ring-[#B8903D] transition-colors"
                  >
                    {academyConfig.bookingOptions.experienceLevels.map((lvl) => (
                      <option key={lvl.id} value={lvl.label}>
                        {lvl.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Service Type & Preferred Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service-type" className="block text-xs uppercase tracking-wider font-semibold text-[#4A3426] mb-2">
                    Inquiry Type / Service
                  </label>
                  <select
                    id="service-type"
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full px-4 py-3 rounded-md bg-white border border-[#4A3426]/20 text-sm text-[#241C18] focus:outline-none focus:ring-2 focus:ring-[#B8903D] transition-colors"
                  >
                    {academyConfig.bookingOptions.serviceTypes.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="time-slot" className="block text-xs uppercase tracking-wider font-semibold text-[#4A3426] mb-2">
                    Preferred Time Slot
                  </label>
                  <select
                    id="time-slot"
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-4 py-3 rounded-md bg-white border border-[#4A3426]/20 text-sm text-[#241C18] focus:outline-none focus:ring-2 focus:ring-[#B8903D] transition-colors"
                  >
                    {academyConfig.bookingOptions.preferredTimes.map((tm) => (
                      <option key={tm.id} value={tm.label}>
                        {tm.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4: Additional Notes */}
              <div>
                <label htmlFor="notes" className="block text-xs uppercase tracking-wider font-semibold text-[#4A3426] mb-2">
                  Any specific requests or questions (Optional)
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us if you want to book for a child, are inquiring about Marwari stud services, or have any specific questions..."
                  className="w-full px-4 py-3 rounded-md bg-white border border-[#4A3426]/20 text-sm text-[#241C18] placeholder:text-[#4A3426]/40 focus:outline-none focus:ring-2 focus:ring-[#B8903D] transition-colors"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 text-sm sm:text-base font-semibold uppercase tracking-wider text-white bg-[#B8903D] hover:bg-[#9E7A31] rounded-md shadow-md transition-all duration-200 active:scale-[0.99] flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8903D]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry via WhatsApp to 8005511727</span>
                </button>
                <p className="text-center text-xs text-[#4A3426]/70 mt-3 font-light">
                  Submitting directly connects to WhatsApp with your details neatly formatted. We reply promptly.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};
