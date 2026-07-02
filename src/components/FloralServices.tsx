import React from 'react';

const FloralServices: React.FC = () => {
  return (
    <section className="relative bg-[#c8c8ae] pt-24 pb-28 px-6 md:px-12 lg:px-24 overflow-hidden">
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
            <h2 className="font-jost  text-[38px] sm:text-[46px] md:text-[40px] lg:text-[40px] text-black  mb-6 font-normal tracking-[-1.4px] max-w-xl">
              ABOUT US
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
            {/* <div className="mt-8">
              <a
                href="/about"
                className="group inline-flex items-center gap-2 font-jost uppercase tracking-[0.15em] text-[13px] md:text-[14px] text-[#2d3319] font-medium transition-colors duration-300 hover:text-[#faf6ee]"
              >
                <span>Discover Our Story</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </a>
              <div className="h-[1px] w-full bg-[#2d3319] mt-1 transition-transform duration-300 origin-left scale-x-100 group-hover:scale-x-110 group-hover:bg-[#faf6ee]" />
            </div> */}
          </div>

          {/* RIGHT COLUMN: LARGE IMAGE */}
          <div className="md:col-span-6 flex justify-center items-center animate-float">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-full md:aspect-square max-w-[480px] lg:max-w-[500px] overflow-hidden bg-[#faf6ee]/10 group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500 ">
              {/* Soft border overlay for visual depth */}
              <div className="absolute inset-0 pointer-events-none z-10" />

              <img
                src="/Images/about.jpg"
                alt="Wishes florist arranging premium wedding flowers"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM WHITE SCALLOPED DIVIDER */}
      <div
        className="absolute bottom-0 left-0 w-full h-[20px] bg-repeat-x z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 16' fill='%23faf6ee'%3E%3Cpath d='M 0 16 Q 10 0, 20 16 Q 30 0, 40 16 Z'/%3E%3C/svg%3E")`,
          // backgroundSize: '40px 18px',
        }}
      />
    </section>
  );
};

export default FloralServices;
