import React from 'react';

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
    imageUrl: '/Images/collection1.jpg',
    link: '/after-the-rain',
  },
  {
    id: 2,
    title: 'Chocolate',
    description: 'Earthy herbal flavors paired with delicate wild chamomile, daisies, and seasonal white blooms.',
    imageUrl: '/Images/collection2.jpg',
    link: '/barefoot-on-grass',
  },
  {
    id: 3,
    title: 'Hampers',
    description: 'Rich gourmet sweets nestled amidst blue delphinium, peach ranunculus, and wild meadow branches.',
    imageUrl: '/Images/collection3.jpg',
    link: '/dragonflies-hide',
  },
  {
    id: 4,
    title: 'Dry Fruits',
    description: 'Warm sun-kissed honey lollipops, apricot nectar, and delicate dried marigold petals.',
    imageUrl: '/Images/collection4.jpg',
    link: '/golden-hour-dreams',
  },
];

const ArtisanalCollection: React.FC = () => {
  return (
    <section className="bg-[#faf6ee] py-16 px-6 md:px-16 lg:px-24 select-none">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading matching Premium Collection */}
        <div className="text-center mb-16">
          <h2 className="font-jost font-light text-3xl md:text-[26px] tracking-[0.01rem] uppercase text-black">
            Artisanal Collection
          </h2>
        </div>

        {/* Product Cards Grid matching PremiumCollection columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {collections.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="group flex flex-col items-center focus:outline-none"
            >
              {/* Arched Outline Wrapper */}
              <div className="w-full p-3 border border-[#b2a496]/30 rounded-t-full aspect-[4/5] flex items-center justify-center bg-transparent transition-all duration-300 group-hover:border-[#b2a496]/60 shadow-sm">

                {/* Arched Image Container */}
                <div className="w-full h-full overflow-hidden rounded-t-full bg-[#faf6ee]">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

              </div>

              {/* Title using premium angled quotes */}
              <h3 className="mt-6 font-jost font-light text-[16px] md:text-[16px] text-black capitalize tracking-[0.01rem] text-center transition-colors duration-300 group-hover:text-black">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-2 font-jost font-light text-[13px] md:text-[14px] text-gray-500 leading-relaxed text-center">
                {item.description}
              </p>

            </a>
          ))}
        </div>

        {/* Centered CTA Button matching BuildYourBox */}
        <div className="flex justify-center mt-16">
          <button
            type="button"
            className="bg-[#c8c8ae] hover:bg-[#c8c8ae] text-black font-jost text-xs uppercase tracking-[0.2em] font-medium py-3 px-8 border border-[#c8c8ae] transition-all duration-300 active:scale-95 shadow-sm hover:shadow-md cursor-pointer rounded-sm"
          >
            Explore All
          </button>
        </div>

      </div>
    </section>
  );
};

export default ArtisanalCollection;
