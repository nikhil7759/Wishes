import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[86vh] bg-gray-50 flex items-end justify-end p-8 md:p-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/Images/heroimg.png"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        {/* Optional overlay to make text readable if you decide to add text later */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-right px-6 max-w-md">
        <h1 className="text-3xl md:text-4xl text-white font-heading mb-4 tracking-wide drop-shadow-md">
          Discover Our Collection
        </h1>
        <p className="text-base text-white/90 mb-6 font-sans drop-shadow">
          Experience the finest selection crafted just for you.
        </p>
        <button className="bg-white text-gray-900 px-6 py-2 uppercase tracking-widest text-xs hover:bg-gray-100 transition-colors shadow-lg">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
