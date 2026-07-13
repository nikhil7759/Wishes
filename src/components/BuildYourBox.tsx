import React from 'react';

const BuildYourBox: React.FC = () => {
  return (
    <section
      className="relative py-20 md:py-28 px-6 md:px-12 flex items-center justify-center select-none bg-[#f4c3c0]"

    >
      {/* Centered White Card Container - "not too big neither small" */}
      <div className="w-full max-w-4xl bg-[#f8f0e5] shadow-xl py-14 px-8 md:px-16 text-center border border-gray-100 rounded-sm">

        {/* Section Title */}
        <h2 className="font-sloop font-light text-3xl md:text-[50px] capitalize text-[#5a4d41]">
          Build Your Box
        </h2>

        {/* Curation Steps (3-column layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start mb-12">

          {/* STEP 1 */}
          <div className="flex flex-col items-center">
            {/* Delicate Pink Heart Icon */}
            <svg
              className="w-4 h-4 text-[#e8b5b7] fill-current mb-3"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <h3 className="font-jost text-[12px] md:text-[13px] font-medium text-[#2d3319] uppercase mb-4">
              Step One
            </h3>
            <p className="font-jost font-light text-[14px] leading-relaxed text-[#555] max-w-[240px]">
              Select your base box size and design to match the theme of your special celebration.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="flex flex-col items-center">
            {/* Delicate Pink Heart Icon */}
            <svg
              className="w-4 h-4 text-[#e8b5b7] fill-current mb-3"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <h3 className="font-jost text-[12px] md:text-[13px] font-medium  text-[#2d3319] uppercase mb-4">
              Step Two
            </h3>
            <p className="font-jost font-light text-[14px] leading-relaxed text-[#555] max-w-[240px]">
              Fill your box with a handpicked assortment of our gourmet luxury sweets and treats.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="flex flex-col items-center">
            {/* Delicate Pink Heart Icon */}
            <svg
              className="w-4 h-4 text-[#e8b5b7] fill-current mb-3"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <h3 className="font-jost text-[12px] md:text-[13px] font-medium  text-[#2d3319] uppercase mb-4">
              Step Three
            </h3>
            <p className="font-jost font-light text-[14px] leading-relaxed text-[#555] max-w-[240px]">
              Write a custom heartfelt message for the greeting card and wrap it in premium ribbons.
            </p>
          </div>

        </div>

        {/* Centered CTA Button */}
        <div className="flex justify-center mt-6">
          <button
            type="button"
            className="bg-[#d1b19a] hover:bg-[#d1b19a] text-black font-jost text-xs uppercase tracking-[0.2em] font-medium py-3 px-8 border border-[#d1b19a] transition-all duration-300 active:scale-95 shadow-sm hover:shadow-md cursor-pointer rounded-sm"
          >
            Sign Me Up
          </button>
        </div>

      </div>
    </section>
  );
};

export default BuildYourBox;
