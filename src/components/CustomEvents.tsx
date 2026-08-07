import React from 'react';

const CustomEvents: React.FC = () => {
  return (
    <section className="relative w-full flex flex-col md:flex-row bg-[#f8f0e5] font-jost">
      {/* Left Side - Text Content (Sticky on Desktop) */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center p-12 lg:p-24 min-h-[50vh] md:h-screen md:sticky md:top-0">

        <span className="uppercase text-[9px] md:text-[10px] tracking-[0.25em] text-[#8b7d72] mb-6 font-medium">
          Discover
        </span>

        <h2 className="font-jost text-3xl md:text-[40px] font-light text-[#5a4d41] leading-[0.9] mb-12 max-w-lg">
          <span className="font-burgues text-[90px] sm:text-[110px] md:text-[145px]">O</span>ur Custom Creations<br /> <span className="font-burgues text-[65px] md:text-[60px]">F</span>or Your Events
        </h2>

        <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-6">
          <a
            href="/catalog"
            className="bg-[#b49377] hover:bg-[#9a7b60] text-white uppercase text-[10px] md:text-[11px] font-medium tracking-[0.15em] px-10 py-4 transition-colors"
          >
            View Catalog
          </a>
        </div>

      </div>

      {/* Right Side - Images Grid */}
      <div className="w-full md:w-1/2 p-2 md:p-4">
        <div className="grid grid-cols-2 gap-2 md:gap-2">

          {/* --- Set 1 --- */}
          {/* Row 1: 2 Images */}
          <div className="w-full aspect-[4/5] bg-[#f8f0e5] overflow-hidden group">
            <img
              src="/Images/WS-3.jpg"
              alt="Custom Event Cake"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="w-full aspect-[4/5] bg-[#f8f0e5] overflow-hidden group">
            <img
              src="/Images/WS-6.jpg"
              alt="Gifting Collection"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Row 2: 1 Full Width Image */}
          <div className="w-full aspect-[2/1] col-span-2 bg-[#f8f0e5] overflow-hidden group">
            <img
              src="/Images/WS-7.jpg"
              alt="Artisanal Tart"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* --- Set 2 --- */}
          {/* Row 3: 2 Images */}
          <div className="w-full aspect-[4/5] bg-[#f8f0e5] overflow-hidden group">
            <img
              src="/Images/WS-8.jpg"
              alt="Wedding Treats"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="w-full aspect-[4/5] bg-[#f8f0e5] overflow-hidden group">
            <img
              src="/Images/WS-14.jpg"
              alt="Corporate Boxes"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Row 4: 1 Full Width Image */}
          <div className="w-full aspect-[2/1] col-span-2 bg-[#f8f0e5] overflow-hidden group">
            <img
              src="/Images/WS-15.jpg"
              alt="Special Sweets"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              loading="lazy"
              decoding="async"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default CustomEvents;
