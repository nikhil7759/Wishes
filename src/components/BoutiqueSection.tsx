import React from 'react';

const BoutiqueSection: React.FC = () => {
  return (
    <section
      className="relative w-full py-24 md:py-36 px-6 md:px-12 flex items-center justify-end min-h-[60vh] md:min-h-[75vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/Images/store image.png')",
      }}
    >
      {/* Subtle overlay to enhance text readability */}
      <div className="absolute inset-0 bg-black/15 pointer-events-none" />

      {/* Right Aligned Content Overlay Card */}
      <div className="relative z-10 w-full max-w-xl bg-[#faf6ee] p-10 md:p-14  md:mr-16 lg:mr-24 flex flex-col items-start text-left select-none ">

        {/* Section Heading matching Jost size & tracking of About Us */}
        <h2 className="font-jost font-light text-3xl md:text-[26px] tracking-[0.01rem] uppercase text-black mb-4">
          Explore Our Boutique
        </h2>

        {/* Narrative Description */}
        <div className="space-y-4 font-jost font-light text-[15px] md:text-[16px] leading-relaxed text-black py-2">
          <p>
            Wishes by Om Sweets invites you to step inside our boutique and experience the magic of luxury gifting first-hand. Located in the heart of West London, our boutique is a sensory haven featuring a beautifully curated collection of premium sweets, custom-crafted hampers, and stunning floral arrangements.
          </p>
          <p>
            Our in-store design experts are here to help you personalize the perfect gift basket for weddings, corporate milestones, or personal celebrations. Experience our authentic, rich flavors and elegant packaging in person.
          </p>
        </div>

        {/* Call to Action Button matching BuildYourBox */}
        <button
          type="button"
          className="bg-[#c8c8ae] hover:bg-[#c8c8ae] text-black font-jost text-xs uppercase tracking-[0.2em] font-medium py-3.5 px-8 border border-[#c8c8ae] transition-all duration-300 active:scale-95 shadow-sm hover:shadow-md cursor-pointer rounded-sm mt-6"
        >
          Visit Us
        </button>

      </div>
    </section>
  );
};

export default BoutiqueSection;
