import React from 'react';

interface CollectionItem {
  id: number;
  title: string;
  imageUrl: string;
  link: string;
}

const PremiumCollection: React.FC = () => {
  const collections: CollectionItem[] = [
    {
      id: 1,
      title: 'Wedding Special',
      imageUrl: '/Images/collection1.jpg',
      link: '/wedding-special',
    },
    {
      id: 2,
      title: 'Birthday Wishes',
      imageUrl: '/Images/collection3.jpg',
      link: '/birthday-wishes',
    },
    {
      id: 3,
      title: 'Corporate Special',
      imageUrl: '/Images/collection4.jpg',
      link: '/corporate-special',
    },
    {
      id: 4,
      title: 'Anniversary Special',
      imageUrl: '/Images/collection2.jpg',
      link: '/anniversary-special',
    },
  ];

  return (
    <section className="bg-[#f8f0e5] py-8 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          {/* <h3 className="font-jost text-sm uppercase tracking-[0.25em] text-[#8b7d72] mb-1">
            Explore Our
          </h3> */}
          <h2 className="font-jost font-light text-3xl md:text-[26px] tracking-[0.01rem] uppercase text-black">
            Premium Collection
          </h2>
        </div>

        {/* Collection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="group flex flex-col items-center focus:outline-none"
            >
              {/* Image Container */}
              <div className="w-full aspect-[4/5] overflow-hidden bg-gray-100 shadow-md transition-shadow duration-300 group-hover:shadow-xl">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Caption */}
              <h4 className="mt-6 font-jost font-light text-[16px] md:text-[16px] text-black capitalize tracking-[0.01rem] transition-colors duration-300 group-hover:text-black">
                {item.title}
              </h4>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumCollection;
