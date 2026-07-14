import React from 'react';

interface CollectionItem {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
  link: string;
}

const PremiumCollection: React.FC = () => {
  // const [activeCategory, setActiveCategory] = useState('New Arrivals');

  // const categories = [
  //   'New Arrivals',
  //   'Signature Sweets',
  //   'Gift Boxes',
  //   'Corporate',
  //   'Wedding'
  // ];

  const collections: CollectionItem[] = [
    {
      id: 1,
      title: 'Wedding Special',
      subtitle: 'Starting at ₹1,500',
      imageUrl: '/Images/collection1.jpg',
      link: '/wedding-special',
    },
    {
      id: 2,
      title: 'Birthday Wishes',
      subtitle: 'Starting at ₹850',
      imageUrl: '/Images/collection3.jpg',
      link: '/birthday-wishes',
    },
    {
      id: 3,
      title: 'Corporate Special',
      subtitle: 'Starting at ₹2,200',
      imageUrl: '/Images/collection4.jpg',
      link: '/corporate-special',
    },
    {
      id: 4,
      title: 'Anniversary Special',
      subtitle: 'Starting at ₹1,800',
      imageUrl: '/Images/collection2.jpg',
      link: '/anniversary-special',
    },
  ];

  return (
    <section className="bg-[#f8f0e5] py-12 md:py-20 px-6 md:px-12 lg:px-16 font-jost">
      <div className=" mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="font-sloop font-light text-3xl md:text-[50px] capitalize text-[#5a4d41]">
            For special Ocassions
          </h2>
        </div>

        {/* Categories */}
        {/* <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mb-12 overflow-x-auto whitespace-nowrap scrollbar-hide pb-2 md:pb-0">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`cursor-pointer uppercase text-[12px] md:text-[14px] tracking-[0.15em] transition-colors focus:outline-none ${activeCategory === category
                ? 'text-[#5a4d41] font-medium'
                : 'text-[#a39485] hover:text-[#5a4d41]'
                }`}
            >
              {category}
            </button>
          ))}
        </div> */}

        {/* Collection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-2">
          {collections.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="group flex flex-col items-start focus:outline-none"
            >
              {/* Image Container */}
              <div className="w-full aspect-[4/5] overflow-hidden bg-[#e8dccb] transition-shadow duration-300 group-hover:shadow-lg">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 mix-blend-multiply"
                  loading="lazy"
                />
              </div>

              {/* Caption */}
              <div className="mt-4 flex flex-col items-start w-full">
                <h4 className="font-jost text-[12px] md:text-[15px] text-[#6d4833] capitalize  font-medium transition-colors duration-300">
                  {item.title}
                </h4>
                {/* <span className="font-jost text-[11px] md:text-[12px] text-black/50 tracking-wide mt-1 font-light">
                  {item.subtitle}
                </span> */}
              </div>
            </a>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-8 flex justify-center md:hidden">
          <a
            href="/premium"
            className="flex items-center gap-2 uppercase text-[11px] tracking-[0.15em] text-black/40 hover:text-black transition-colors font-light"
          >
            View All
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default PremiumCollection;
