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
    title: 'Healthy Namkeen',
    description: 'A refreshing combination of sweet lavender, pastel roses, and fresh morning garden herbs.',
    imageUrl: '/Images/sweets/1.png',
    link: '/after-the-rain',
  },
  {
    id: 2,
    title: 'Chocolate',
    description: 'Earthy herbal flavors paired with delicate wild chamomile, daisies, and seasonal white blooms.',
    imageUrl: '/Images/sweets/2.png',
    link: '/barefoot-on-grass',
  },
  {
    id: 3,
    title: 'Hampers',
    description: 'Rich gourmet sweets nestled amidst blue delphinium, peach ranunculus, and wild meadow branches.',
    imageUrl: '/Images/sweets/3.png',
    link: '/dragonflies-hide',
  },
  {
    id: 4,
    title: 'Dry Fruits',
    description: 'Warm sun-kissed honey lollipops, apricot nectar, and delicate dried marigold petals.',
    imageUrl: '/Images/sweets/4.png',
    link: '/golden-hour-dreams',
  },
];

const ArtisanalCollection: React.FC = () => {
  return (
    <section className="bg-[#f8f0e5] py-16 px-6 md:px-16 lg:px-24 select-none">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading matching Premium Collection */}
        <div className="text-center mb-16">
          <h2 className="font-sloop font-light text-3xl md:text-[50px] capitalize text-[#5a4d41]">
            Artisan Collection
          </h2>
        </div>

        {/* Product Cards Grid matching PremiumCollection columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {collections.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="group flex flex-col items-start focus:outline-none"
            >
              {/* Image Container */}
              <div className="w-full aspect-[4/5] overflow-hidden bg-[#f4c3c0] shadow-md transition-shadow duration-300 group-hover:shadow-xl">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Title using premium angled quotes */}
              <h3 className="mt-6 font-jost font-light text-[16px] md:text-[16px] text-black capitalize tracking-[0.01rem] text-left w-full transition-colors duration-300 group-hover:text-black">
                {item.title}
              </h3>

              {/* Description */}


            </a>
          ))}
        </div>

        {/* Centered CTA Button matching BuildYourBox */}
        <div className="flex justify-center mt-16">
          <Link
            to="/shop"
            className="inline-block bg-[#d1b19a] hover:bg-[#d1b19a] text-[#5a4d41] font-jost text-xs uppercase font-medium py-3 px-8 border border-[#d1b19a] transition-all duration-300 active:scale-95 shadow-sm hover:shadow-md cursor-pointer rounded-sm text-center"
          >
            Explore All
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ArtisanalCollection;
