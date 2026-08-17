import React from 'react';
import { Link } from 'react-router-dom';

const BoutiqueSection: React.FC = () => {
  return (
    <section
      className="relative w-full py-24 px-6 md:px-12 flex items-center justify-end min-h-[60vh] md:min-h-[75vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/Images/store%20image.png')",
      }}
    >
      {/* Subtle overlay to enhance text readability */}
      <div className="absolute inset-0 bg-black/15 pointer-events-none" />

      {/* Right Aligned Content Overlay Card */}
      <div
        className="relative z-10 w-full max-w-xl md:mr-16 flex flex-col items-start text-left select-none"
        style={{
          background: 'rgba(255,255,255,0.26)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderRadius: '24px',
          border: '1px solid rgba(255,255,255,0.25)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
          padding: 'clamp(28px, 4vw, 48px)',
          willChange: 'backdrop-filter',
        }}
      >

        <h2 className="font-jost font-light  mb-5"
          style={{ fontSize: 'clamp(36px, 4.5vw, 40px)', color: '#fbede3' }}>
          <span className="font-burgues text-[65px]">E</span>xplore Our Boutique
        </h2>

        {/* Narrative Description */}
        <div className="space-y-4 font-jost font-light text-[15px] md:text-[16px] leading-relaxed text-[#fbede3] py-2">
          <p>
            Wishes by Om Sweets invites you to step inside our boutique and experience the magic of luxury gifting first-hand. Our boutique is a sensory haven featuring a beautifully curated collection of premium sweets, custom-crafted hampers, and stunning floral arrangements.
          </p>

        </div>

        {/* Call to Action Button matching BuildYourBox */}
        <Link
          to="/contact"
          className="inline-block bg-[#b49377] hover:bg-[#9a7b60] text-white uppercase text-[10px] md:text-[11px] font-medium tracking-[0.15em] px-10 py-4 transition-colors mt-6"
        >
          Visit Us
        </Link>

      </div>
    </section>
  );
};

export default BoutiqueSection;
