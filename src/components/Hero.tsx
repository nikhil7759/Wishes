import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      className="w-full min-h-[70vh] flex flex-col justify-center items-start p-8 md:p-16 text-left font-jost relative overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/Images/Sweets.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to ensure text readability against background video */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      <div className="relative z-20 max-w-2xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl text-white mb-4 tracking-[0.03rem] capatalize drop-shadow-lg">
          Gourmet Sweets
        </h1>
        <p className="text-base md:text-lg text-white font-light font-jost mb-6 drop-shadow-md">
          Indulge in the rich taste of gourmet luxury sweets, crafted with premium ingredients and timeless recipes. Perfect for gifting or self-pampering, every bite delivers elegance, flavor, and pure delight.
        </p>
        <button className="bg-[#d1b19a] text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-[#6b6b58] transition-colors shadow-lg">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
