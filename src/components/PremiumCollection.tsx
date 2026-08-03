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
      imageUrl: '/Images/collection5.jpg',
      link: '/wedding-special',
    },
    {
      id: 2,
      title: 'Birthday Wishes',
      subtitle: 'Starting at ₹850',
      imageUrl: '/Images/collection6.jpg',
      link: '/birthday-wishes',
    },
    {
      id: 3,
      title: 'Corporate Special',
      subtitle: 'Starting at ₹2,200',
      imageUrl: '/Images/collection7.jpg',
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
    <section className="bg-[#f8f0e5] py-12 md:py-20 px-6 md:px-12 lg:px-16 font-jost relative overflow-hidden select-none z-0">
      <div className=" mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="font-jost font-light text-3xl md:text-[40px]  text-[#5a4d41]">
            <span className="font-burgues text-[65px]">F</span>or Special Ocassions
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-6 mt-4">
          {collections.map((item) => (
            <div key={item.id} className="relative group filter drop-shadow-md hover:drop-shadow-xl transition-all duration-300 hover:-translate-y-2 h-[420px] sm:h-[600px]">
              <a

                className="flex flex-col items-center justify-start focus:outline-none bg-[#eabfb9] pb-12 h-full w-full"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 30px), 50% 100%, 0 calc(100% - 30px))'
                }}
              >
                {/* Image Container */}
                <div className="w-full h-[90%] sm:h-[90%] overflow-hidden bg-[#fffdfa] mb-4 flex-shrink-0">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 mix-blend-multiply"
                    loading="lazy"
                  />
                </div>

                {/* Title */}
                <h4 className="font-jost font-light text-[14px] sm:text-[15px]  capitalize text-center text-[#000]  px-4 mt-auto leading-tight">
                  {item.title}
                </h4>
              </a>
            </div>
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
