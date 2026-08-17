import React from 'react';

const FloralServices: React.FC = () => {
  return (
    <section className="relative bg-[#f4c3c0] pt-24 pb-28 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* SVG Clip Path Definitions */}
      <svg className="absolute w-0 h-0" width="0" height="0">
        <defs>
          {/* Symmetrical 4-petal flower shape with axial indents and diagonal petals */}
          <clipPath id="flower-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0.5,0.18 C 0.5,0.02 0.98,0.02 0.82,0.5 C 0.98,0.5 0.98,0.98 0.5,0.82 C 0.5,0.98 0.02,0.98 0.18,0.5 C 0.02,0.5 0.02,0.02 0.5,0.18 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* ABOUT US LAYOUT CONTAINER */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 lg:gap-24 items-center">

          {/* LEFT COLUMN: TEXT CONTENT */}
          <div className="md:col-span-6 flex flex-col items-center md:items-start text-center md:text-left">
            {/* Subtitle */}


            {/* Heading */}
            <h2 className="font-jost text-[38px] sm:text-[46px] md:text-[36px] lg:text-[36px] text-black mb-6 font-light max-w-xl">
              <span className="font-burgues text-[50px] lg:text-[70px]">A</span>bout Us
            </h2>

            {/* Body Paragraphs */}
            <div className="space-y-4 max-w-xl text-[#000] font-jost font-light text-[15px] md:text-[16px] leading-relaxed py-4">
              <p>
                Wishes by Om Sweets is dedicated to making every celebration unforgettable by offering thoughtfully handcrafted, premium-quality sweets and beautifully curated, custom-made hampers. Every creation is designed with exceptional attention to detail, combining authentic flavors, elegant presentation, and a touch of luxury to make every occasion truly special.
              </p>
              <p>
                Whether it's a wedding, festival, corporate event, or a personal milestone, Wishes strives to create memorable gifting experiences that leave a lasting impression. With a commitment to craftsmanship, quality, innovation, and customer satisfaction, the brand aims to redefine luxury gifting and become India's most trusted destination for premium sweets and bespoke hampers, celebrated for excellence, elegance, and unforgettable moments.
              </p>
            </div>

            {/* Interactive Call to Action */}
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-block bg-[#b49377] hover:bg-[#9a7b60] text-white uppercase text-[10px] md:text-[11px] font-medium tracking-[0.15em] px-10 py-4 transition-colors"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: LARGE IMAGE */}
          <div className="md:col-span-6 flex justify-center items-center animate-float">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-full md:aspect-square max-w-[480px] lg:max-w-[500px] overflow-hidden bg-[#f8f0e5]/10 group cursor-pointer shadow-lg">
              {/* Soft border overlay for visual depth */}
              <div className="absolute inset-0 pointer-events-none z-10" />

              <img
                src="/Images/about.jpg"
                alt="Wishes florist arranging premium wedding flowers"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM WHITE SCALLOPED DIVIDER */}
      <div
        className="absolute bottom-0 left-0 w-full h-[20px] bg-repeat-x z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 16' fill='%23f8f0e5'%3E%3Cpath d='M 0 16 Q 10 0, 20 16 Q 30 0, 40 16 Z'/%3E%3C/svg%3E")`,
          // backgroundSize: '40px 18px',
        }}
      />
    </section>
  );
};

export default FloralServices;
