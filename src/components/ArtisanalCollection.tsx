import React from 'react';
import { Link } from 'react-router-dom';

interface CollectionItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const collections: CollectionItem[] = [
  {
    id: 1,
    title: 'Burfi',
    description: 'A refreshing combination of sweet lavender, pastel roses, and fresh morning garden herbs.',
    imageUrl: '/Images/sweets/1.png',
    link: '/after-the-rain',
  },
  {
    id: 2,
    title: 'Rose Lychee Ladoo',
    description: 'Earthy herbal flavors paired with delicate wild chamomile, daisies, and seasonal white blooms.',
    imageUrl: '/Images/sweets/2.png',
    link: '/barefoot-on-grass',
  },
  {
    id: 3,
    title: 'Pista Paan ',
    description: 'Rich gourmet sweets nestled amidst blue delphinium, peach ranunculus, and wild meadow branches.',
    imageUrl: '/Images/sweets/3.png',
    link: '/dragonflies-hide',
  },
  {
    id: 4,
    title: 'Macadamia Fig ',
    description: 'Warm sun-kissed honey lollipops, apricot nectar, and delicate dried marigold petals.',
    imageUrl: '/Images/sweets/4.png',
    link: '/golden-hour-dreams',
  },
];

const ArtisanalCollection: React.FC = () => {
  return (
    <section className="bg-[#f8f0e5] py-16 px-6 md:px-16 lg:px-24 relative overflow-hidden select-none z-0">

      {/* Section Heading matching Premium Collection */}
      <div className="text-center mb-12">
        <h2 className="font-jost font-light text-3xl md:text-[40px] text-[#5a4d41]">
          <span className="font-burgues text-[65px]">H</span>eritage Collection
        </h2>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pt-6 px-2">
        {collections.map((item, index) => {
          const number = String(index + 1).padStart(2, '0');
          return (
            <a
              key={item.id}
              href={item.link}
              className="group relative flex flex-col items-center focus:outline-none p-0 bg-[#fffdfa] w-full  transition-all duration-300 hover:shadow-lg mt-4 sm:mt-0"
              style={{
                border: '1px solid #e8dcc8',
                borderRadius: '8px',
              }}
            >
              {/* Inner dashed/dotted border */}
              <div className="absolute inset-[6px] border border-dashed border-[#d1b19a] rounded-sm pointer-events-none opacity-50" />

              {/* Top Number Badge Background Cutout */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#f8f0e5] px-3 z-10">
                <div className="w-10 h-10 rounded-full bg-[#f4c3c0] flex items-center justify-center text-white text-sm font-jost shadow-sm">
                  {number}
                </div>
              </div>

              {/* Top Sparkles (Decorative) */}
              <div className="absolute top-8 left-6 text-[#d1b19a] opacity-50 text-xl font-light">
                ✦
              </div>

              {/* Image Container */}
              <div className="w-full flex-grow flex items-center justify-center relative z-10 mt-0 mb-9">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-[100%] h-[85%] object-contain transition-transform duration-700 ease-out group-hover:scale-110 drop-shadow-md"
                  loading="lazy"
                  decoding="async"
                />

                {/* Decorative Heart near Image */}
                {/* <div className="absolute bottom-2 right-2 text-[#5a4d41] opacity-40">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div> */}
              </div>

              {/* Title */}
              <h3 className="font-jost font-normal text-[15px] md:text-[14px] text-[#5a4d41] uppercase  text-center w-full relative z-10 mt-[-56px]">
                {item.title}
              </h3>

              {/* Decorative bottom line */}
              <div className="flex items-center justify-center w-full gap-3 mt-3 mb-9 relative z-10 opacity-70">
                <div className="h-[1px] w-10 bg-[#d1b19a]"></div>
                <svg className="w-2.5 h-2.5 text-[#d1b19a] fill-current" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <div className="h-[1px] w-10 bg-[#d1b19a]"></div>
              </div>
            </a>
          );
        })}
      </div>

      {/* Centered CTA Button matching BuildYourBox */}
      <div className="flex justify-center mt-16">
        <Link
          to="/shop"
          className="inline-block bg-[#b49377] hover:bg-[#9a7b60] text-white uppercase text-[10px] md:text-[11px] font-medium tracking-[0.15em] px-10 py-4 transition-colors shadow-sm"
        >
          Explore All
        </Link>
      </div>
    </section>
  );
};

export default ArtisanalCollection;
