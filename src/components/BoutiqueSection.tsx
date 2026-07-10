import React from 'react';

const BoutiqueSection: React.FC = () => {
  return (
    <section
      className="relative w-full py-24 md: px-6 md:px-12 flex items-center justify-end min-h-[60vh] md:min-h-[75vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/Images/store image.png')",
      }}
    >
      {/* Subtle overlay to enhance text readability */}
      <div className="absolute inset-0 bg-black/15 pointer-events-none" />

      {/* Right Aligned Content Overlay Card */}
      <div
        className="relative z-10 w-full max-w-xl md:mr-16 flex flex-col items-start text-left select-none"
        style={{
          background: 'rgba(255,255,255,0.18)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: '24px',
          border: '1px solid rgba(255,255,255,0.25)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
          padding: 'clamp(28px, 4vw, 48px)',
        }}
      >

        <h2 className="font-sloop font-normal leading-[1.15] tracking-[2px] mb-5"
          style={{ fontSize: 'clamp(36px, 4.5vw, 45px)', color: '#fbede3' }}>
          Explore Our Boutique
        </h2>

        {/* Narrative Description */}
        <div className="space-y-4 font-jost font-light text-[15px] md:text-[16px] leading-relaxed text-[#fbede3] py-2">
          <p>
            Wishes by Om Sweets invites you to step inside our boutique and experience the magic of luxury gifting first-hand. Located in the heart of West London, our boutique is a sensory haven featuring a beautifully curated collection of premium sweets, custom-crafted hampers, and stunning floral arrangements.
          </p>

        </div>

        {/* Call to Action Button matching BuildYourBox */}
        <button
          type="button"
          className="bg-[#d1b19a] hover:bg-[#d1b19a] text-black font-jost text-xs uppercase tracking-[0.2em] font-medium py-3.5 px-8 border border-[#d1b19a] transition-all duration-300 active:scale-95 shadow-sm hover:shadow-md cursor-pointer rounded-sm mt-6"
        >
          Visit Us
        </button>

      </div>
    </section>
  );
};

export default BoutiqueSection;
