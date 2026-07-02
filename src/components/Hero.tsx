import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[54vh] bg-gray-50 flex items-center justify-start p-8 md:p-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/Images/heroimg1.jpg"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        {/* Optional overlay to make text readable if you decide to add text later */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Content */}
      <div className="w-[75vh] relative z-10 text-left px-6  font-jost">
        <h1 className=" text-3xl md:text-4xl text-[#83836e] mb-4 tracking-[-0.09rem] drop-shadow-md uppercase">
          Gourmet Sweets
        </h1>
        <p className="text-base text-[#141313] font-light font-jost drop-shadow">
          Indulge in the rich taste of gourmet luxury sweets, crafted with premium ingredients and timeless recipes. Perfect for gifting or self-pampering, every bite delivers elegance, flavor, and pure delight.
        </p>
        {/* <button className="bg-white text-gray-900 px-6 py-2 uppercase tracking-widest text-xs hover:bg-gray-100 transition-colors shadow-lg">
          Shop Now
        </button> */}
      </div>
    </section>
  );
};

export default Hero;
