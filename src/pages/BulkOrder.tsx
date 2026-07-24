import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BulkOrder: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    occasion: 'Corporate Gifting',
    quantity: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate luxury booking processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      occasion: 'Corporate Gifting',
      quantity: '',
      message: '',
    });
  };

  const occasions = [
    {
      id: '01',
      title: 'Corporate gifting & festive hampers',
      desc: 'Customized luxury boxes featuring your company branding, logo ribbons, and curated gourmet selections for clients and employees.',
    },
    {
      id: '02',
      title: 'Weddings, anniversaries & special celebrations',
      desc: 'Opulent sweet boxes and bespoke gift trays crafted to complement your wedding theme and invite packaging.',
    },
    {
      id: '03',
      title: 'Institutional & ceremonial events',
      desc: 'Elegant bulk sweet arrangements designed for large scale corporate milestones, summits, and galas.',
    },
    {
      id: '04',
      title: 'Luxury hospitality welcome kits',
      desc: 'Bespoke room hampers and VIP welcome treats tailored for 5-star hotels, luxury resorts, and high-profile guests.',
    },
    {
      id: '05',
      title: 'Personalized return gifts & premium assortments',
      desc: 'Handcrafted sweets in customized keepsake boxes to express gratitude to your guests.',
    },
  ];

  const steps = [
    {
      title: 'Share Your Requirement',
      desc: 'Let us know your occasion, guest count, preferred sweets, and packaging style.',
      icon: (
        <svg className="w-5 h-5 text-[#d1b19a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      title: 'Personalized Curation',
      desc: 'Our team will craft a bespoke selection of sweets and hampers aligned to your taste, theme, and budget range.',
      icon: (
        <svg className="w-5 h-5 text-[#d1b19a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
    },
    {
      title: 'Approval & Production',
      desc: 'Once finalized, our chefs prepare each batch fresh, ensuring unmatched quality and presentation.',
      icon: (
        <svg className="w-5 h-5 text-[#d1b19a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Delivery & Delight',
      desc: 'Your gifts are delivered beautifully packaged, ready to make a memorable impression.',
      icon: (
        <svg className="w-5 h-5 text-[#d1b19a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f0e5] pt-24 md:pt-28 pb-20 font-jost select-none">

      {/* ========================================================================= */}
      {/* SECTION 1: PINKISH HERO HEADER BANNER WITH SCALLOPED PATTERN (LIKE SHOP)    */}
      {/* ========================================================================= */}
      <div className="relative w-full bg-[#f4c3c0] pt-16 md:pt-12 pb-16 md:pb-24 mb-16 ">
        <div className="text-center px-6 md:px-12 relative z-10 max-w-4xl mx-auto">

          {/* Subtle Top Sparkle Badge */}


          {/* Main Title matching Shop Section Pattern */}
          <h1 className="font-jost text-3xl md:text-[40px] font-light text-black capitalize leading-[1]">
            <span className="font-burgues text-[65px] md:text-[145px] lowercase -mr-2">
              c
            </span>
            elebrate Every Occasion with Elegance
          </h1>

          {/* Subtitle / Narrative Intro */}
          <p className="font-jost text-[15px] md:text-[17px] text-black/85 font-light leading-relaxed max-w-[960px] mx-auto tracking-wide">
            At <strong className="font-medium text-black">WishesIndia</strong>, we believe that every celebration deserves a touch of sweetness and sophistication. Whether it's a corporate milestone, festive gifting, or a grand event, our handcrafted luxury sweets and hampers are designed to leave a lasting impression. At WishesIndia, we don't just deliver sweets — we deliver emotions wrapped in luxury.
          </p>

        </div>

        {/* Scalloped Bottom Edge matching Shop Page pattern */}
        <div
          className="absolute -bottom-[2px] left-0 w-full h-[16px] pointer-events-none z-20"
          style={{
            backgroundImage: "radial-gradient(circle at 15px 15px, #f8f0e5 14.5px, transparent 15px)",
            backgroundSize: "30px 15px",
            backgroundRepeat: "repeat-x"
          }}
        />
      </div>

      {/* Main Container */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">

        {/* ========================================================================= */}
        {/* SECTION 2: PERFECT FOR EVERY OCCASION                                   */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-28 md:mb-36">

          {/* Left Text Column */}
          <div className="w-full lg:w-1/2">
            <div className="inline-block bg-[#fffdfa] border border-[#e8dcc8] px-4 py-1.5 rounded-full mb-4 shadow-sm">
              <span className="font-jost text-xs uppercase tracking-widest text-[#8b7d72] font-medium">
                Tailored Solutions
              </span>
            </div>

            <h2 className="font-jost font-light text-3xl sm:text-4xl lg:text-[44px] text-[#5a4d41] mb-8 leading-[1.2]">
              Perfect for Every Occasion
            </h2>

            {/* List with inverted white cards matching pattern styling */}
            <div className="space-y-4">
              {occasions.map((item) => (
                <div
                  key={item.id}
                  className="group p-4 sm:p-5 bg-[#fffdfa] border border-[#e8dcc8] rounded-md transition-all duration-300 hover:shadow-md hover:border-[#d1b19a] relative"
                >
                  {/* Inner dashed border on hover */}
                  <div className="absolute inset-[4px] border border-dashed border-[#d1b19a] rounded pointer-events-none opacity-0 group-hover:opacity-40 transition-opacity" />

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#f4c3c0]/60 border border-[#d1b19a]/50 flex items-center justify-center shrink-0 text-[#5a4d41] font-jost text-sm font-medium mt-0.5">
                      {item.id.replace(/^0/, '')}
                    </div>
                    <div>
                      <h3 className="font-jost text-[16px] md:text-[17px] font-normal text-[#1d2b45] leading-snug">
                        {item.title}
                      </h3>
                      <p className="font-jost font-light text-[14px] text-[#555] mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Column */}
          <div className="w-full lg:w-1/2">
            <div className="overflow-hidden rounded-lg relative h-[420px] sm:h-[500px] md:h-[580px] lg:h-[640px] w-full">
              <img
                src="/Images/bulk1.jpg"
                alt="Perfect for Every Occasion - Luxury Gifting Hamper"
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* SECTION 3: HOW IT WORKS                                                  */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-28 md:mb-36">

          {/* Left Image Column */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="overflow-hidden rounded-lg relative h-[420px] sm:h-[500px] md:h-[580px] lg:h-[640px] w-full">
              <img
                src="/Images/bulk3.jpg"
                alt="How It Works - Bespoke Curation"
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Steps Column */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="inline-block bg-[#fffdfa] border border-[#e8dcc8] px-4 py-1.5 rounded-full mb-4 shadow-sm">
              <span className="font-jost text-xs uppercase tracking-widest text-[#8b7d72] font-medium">
                Seamless Process
              </span>
            </div>

            <h2 className="font-jost font-light text-3xl sm:text-4xl lg:text-[44px] text-[#5a4d41] mb-8 leading-[1.2]">
              How It Works
            </h2>

            {/* 4 Steps Timeline with inverted white cards */}
            <div className="space-y-4">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-[#fffdfa] border border-[#e8dcc8] p-5 rounded-lg shadow-sm hover:shadow-md hover:border-[#d1b19a] transition-all flex items-start gap-4"
                >
                  {/* Step Dot Icon */}
                  <div className="w-10 h-10 rounded-full bg-[#f8f0e5] border border-[#d1b19a] flex items-center justify-center shrink-0 shadow-sm">
                    {step.icon}
                  </div>

                  {/* Step Content */}
                  <div>
                    <h3 className="font-jost text-[16px] md:text-[17px] font-medium text-[#1d2b45] uppercase tracking-wide">
                      {step.title}
                    </h3>
                    <p className="font-jost font-light text-[14px] text-[#555] mt-1 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* SECTION 4: FEATURE HIGHLIGHTS / VALUE PROPS CARD GRID                     */}
        {/* ========================================================================= */}
        <div className="bg-[#fffdfa] border border-[#e8dcc8] rounded-xl p-8 md:p-12 mb-28 relative overflow-hidden shadow-sm">
          {/* Inner dashed border */}
          <div className="absolute inset-[8px] border border-dashed border-[#d1b19a]/60 rounded-lg pointer-events-none opacity-50" />

          <div className="text-center max-w-2xl mx-auto mb-10 relative z-10">
            <h3 className="font-jost font-light text-2xl md:text-3xl text-[#5a4d41]">
              <span className="font-burgues text-[50px] inline-block -mr-1">T</span>he Wishes Gifting Promise
            </h3>
            <p className="font-jost font-light text-sm md:text-base text-[#666] mt-2">
              Uncompromising quality, artisanal craftsmanship, and flawless execution for every order.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">

            <div className="bg-[#f8f0e5] p-6 rounded-lg border border-[#e8dcc8] text-center flex flex-col items-center hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-full bg-[#f4c3c0]/60 flex items-center justify-center text-[#5a4d41] mb-4 text-xl border border-[#d1b19a]/40">
                🎨
              </div>
              <h4 className="font-jost text-[15px] font-medium text-[#1d2b45] uppercase tracking-wider mb-2">
                Custom Branding
              </h4>
              <p className="font-jost font-light text-xs text-[#666] leading-relaxed">
                Add personalized logo box sleeves, custom cards, and branded satin ribbons.
              </p>
            </div>

            <div className="bg-[#f8f0e5] p-6 rounded-lg border border-[#e8dcc8] text-center flex flex-col items-center hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-full bg-[#f4c3c0]/60 flex items-center justify-center text-[#5a4d41] mb-4 text-xl border border-[#d1b19a]/40">
                🍃
              </div>
              <h4 className="font-jost text-[15px] font-medium text-[#1d2b45] uppercase tracking-wider mb-2">
                Freshly Handcrafted
              </h4>
              <p className="font-jost font-light text-xs text-[#666] leading-relaxed">
                Prepared fresh using 100% pure desi ghee, premium nuts, and natural ingredients.
              </p>
            </div>

            <div className="bg-[#f8f0e5] p-6 rounded-lg border border-[#e8dcc8] text-center flex flex-col items-center hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-full bg-[#f4c3c0]/60 flex items-center justify-center text-[#5a4d41] mb-4 text-xl border border-[#d1b19a]/40">
                📦
              </div>
              <h4 className="font-jost text-[15px] font-medium text-[#1d2b45] uppercase tracking-wider mb-2">
                Luxe Packaging
              </h4>
              <p className="font-jost font-light text-xs text-[#666] leading-relaxed">
                Handcrafted rigid boxes, gold foiling, velvet inserts, and keepsake hampers.
              </p>
            </div>

            <div className="bg-[#f8f0e5] p-6 rounded-lg border border-[#e8dcc8] text-center flex flex-col items-center hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-full bg-[#f4c3c0]/60 flex items-center justify-center text-[#5a4d41] mb-4 text-xl border border-[#d1b19a]/40">
                🚚
              </div>
              <h4 className="font-jost text-[15px] font-medium text-[#1d2b45] uppercase tracking-wider mb-2">
                Pan-India Shipping
              </h4>
              <p className="font-jost font-light text-xs text-[#666] leading-relaxed">
                Seamless multi-address dispatch across India with climate-safe packaging.
              </p>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 5: BULK ORDER INQUIRY FORM (WHITE CONTAINER CARD)                 */}
        {/* ========================================================================= */}
        <div id="bulk-inquiry-form" className="max-w-4xl mx-auto">
          <div className="bg-[#fffdfa] border border-[#e8dcc8] rounded-xl shadow-xl p-8 sm:p-12 md:p-16 relative overflow-hidden">

            {/* Inner Dashed Frame */}
            <div className="absolute inset-[8px] sm:inset-[12px] border border-dashed border-[#d1b19a]/70 rounded-lg pointer-events-none opacity-60" />

            {/* Top Sparkle Ornament */}
            <div className="text-center mb-8 relative z-10">
              <span className="text-[#d1b19a] text-xl block mb-1">✦</span>
              <h2 className="font-jost font-light text-3xl sm:text-4xl text-[#5a4d41] mb-3">
                <span className="font-burgues text-[65px] inline-block -mr-1">R</span>equest a Custom Quote
              </h2>
              <p className="font-jost font-light text-base text-[#666] max-w-xl mx-auto leading-relaxed">
                Please provide your details below and our corporate gifting concierges will get back to you within 24 hours with custom options and pricing.
              </p>
            </div>

            {submitted ? (
              /* Success Submission Banner */
              <div className="bg-[#f8f0e5] border border-[#d1b19a] p-8 md:p-12 rounded-lg text-center relative z-10 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#f4c3c0] text-[#5a4d41] flex items-center justify-center mx-auto mb-4 text-2xl shadow-md border border-[#d1b19a]/50">
                  ✓
                </div>
                <h3 className="font-jost font-medium text-2xl text-[#5a4d41] mb-2 uppercase tracking-wide">
                  Thank You, {formData.name || 'Valued Guest'}!
                </h3>
                <p className="font-jost font-light text-base text-[#555] max-w-md mx-auto mb-6">
                  We have received your bulk order inquiry. Our gifting specialist will connect with you shortly via phone or email.
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-[#d1b19a] hover:bg-[#b49377] text-[#5a4d41] hover:text-white font-jost text-xs uppercase font-medium py-3 px-8 border border-[#d1b19a] transition-all duration-300 rounded-sm cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              /* Main Inquiry Form */
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block font-jost text-xs uppercase tracking-widest text-[#5a4d41] font-medium mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ananya Sharma"
                      className="w-full bg-[#f8f0e5] border border-[#e8dcc8] focus:border-[#d1b19a] focus:ring-1 focus:ring-[#d1b19a] rounded-sm px-4 py-3 text-sm text-[#333] placeholder-gray-400 outline-none transition-all"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block font-jost text-xs uppercase tracking-widest text-[#5a4d41] font-medium mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. ananya@company.com"
                      className="w-full bg-[#f8f0e5] border border-[#e8dcc8] focus:border-[#d1b19a] focus:ring-1 focus:ring-[#d1b19a] rounded-sm px-4 py-3 text-sm text-[#333] placeholder-gray-400 outline-none transition-all"
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                  {/* Phone Field */}
                  <div>
                    <label htmlFor="phone" className="block font-jost text-xs uppercase tracking-widest text-[#5a4d41] font-medium mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-[#f8f0e5] border border-[#e8dcc8] focus:border-[#d1b19a] focus:ring-1 focus:ring-[#d1b19a] rounded-sm px-4 py-3 text-sm text-[#333] placeholder-gray-400 outline-none transition-all"
                    />
                  </div>

                  {/* Occasion Selection */}
                  <div>
                    <label htmlFor="occasion" className="block font-jost text-xs uppercase tracking-widest text-[#5a4d41] font-medium mb-2">
                      Occasion / Event Type
                    </label>
                    <select
                      id="occasion"
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleChange}
                      className="w-full bg-[#f8f0e5] border border-[#e8dcc8] focus:border-[#d1b19a] focus:ring-1 focus:ring-[#d1b19a] rounded-sm px-4 py-3 text-sm text-[#333] outline-none transition-all"
                    >
                      <option value="Corporate Gifting">Corporate Gifting &amp; Festive Hampers</option>
                      <option value="Wedding">Weddings &amp; Anniversaries</option>
                      <option value="Institutional">Institutional &amp; Ceremonial Events</option>
                      <option value="Hospitality">Luxury Hospitality Welcome Kits</option>
                      <option value="Other">Personalized Return Gifts</option>
                    </select>
                  </div>

                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block font-jost text-xs uppercase tracking-widest text-[#5a4d41] font-medium mb-2">
                    Your Message &amp; Requirements <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please tell us about your estimated guest count / quantity, preferred date, target budget, or special packaging requests..."
                    className="w-full bg-[#f8f0e5] border border-[#e8dcc8] focus:border-[#d1b19a] focus:ring-1 focus:ring-[#d1b19a] rounded-sm px-4 py-3 text-sm text-[#333] placeholder-gray-400 outline-none transition-all resize-y"
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#d1b19a] hover:bg-[#b49377] text-[#5a4d41] hover:text-white font-jost text-xs uppercase font-medium py-4 px-12 border border-[#d1b19a] transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 rounded-sm cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-current" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending Request...
                      </>
                    ) : (
                      <>
                        Submit Bulk Inquiry
                        <span className="text-base">→</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-center text-[12px] font-jost text-gray-500 font-light mt-3">
                  For immediate assistance, call our Gifting Hotline at{' '}
                  <a href="tel:+919289714461" className="underline font-medium text-[#5a4d41]">
                    +91 92897 14461
                  </a>
                </p>

              </form>
            )}

          </div>
        </div>

        {/* Direct Contact Banner */}
        <div className="mt-20 text-center">
          <p className="font-jost text-sm text-[#777] font-light">
            Need inspiration or wish to visit our studios?{' '}
            <Link to="/contact" className="text-[#5a4d41] font-medium underline hover:text-[#d1b19a]">
              Find Our Boutique Locations
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default BulkOrder;
