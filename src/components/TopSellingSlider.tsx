import React, { useState, useEffect } from 'react';

interface SliderItem {
  id: number;
  title: string;
  imageUrl: string;
  link: string;
}

const items: SliderItem[] = [
  { id: 1, title: 'Wedding Special Box', imageUrl: '/Images/pic1.jpg', link: '/wedding-special' },
  { id: 2, title: 'Luxury Birthday Hamper', imageUrl: '/Images/pic2.jpg', link: '/birthday-wishes' },
  { id: 3, title: 'Corporate Luxury Basket', imageUrl: '/Images/pic3.jpg', link: '/corporate-special' },
  { id: 4, title: 'Anniversary Gift Box', imageUrl: '/Images/pic4.jpg', link: '/anniversary-special' },
  { id: 5, title: 'Royal Dry Fruit Gift Hamper', imageUrl: '/Images/pic5.jpg', link: '/wedding-special' },
  { id: 6, title: 'Kaju Katli Special', imageUrl: '/Images/pic6.jpg', link: '/birthday-wishes' },
  { id: 7, title: 'Deluxe Celebrations Assortment', imageUrl: '/Images/pic7.jpg', link: '/corporate-special' },
  { id: 8, title: 'Classic Premium Hamper', imageUrl: '/Images/pic8.jpg', link: '/anniversary-special' },
];

const TopSellingSlider: React.FC = () => {
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Track viewport resize to adjust items shown per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(4);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 640) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Dynamic cloned items configuration for seamless loop
  const clonedEnd = items.slice(-itemsPerPage);
  const clonedStart = items.slice(0, itemsPerPage);
  const extendedItems = [...clonedEnd, ...items, ...clonedStart];

  // Set initial position to first actual element (skipping clonedEnd)
  useEffect(() => {
    setIsAnimating(false);
    setCurrentIndex(itemsPerPage);
  }, [itemsPerPage]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);

    // Boundary checks for wrapping around infinitely
    if (currentIndex >= items.length + itemsPerPage) {
      // Reached end clone, jump silently to original start element
      setIsAnimating(false);
      setCurrentIndex(itemsPerPage);
    } else if (currentIndex <= itemsPerPage - 1) {
      // Reached start clone, jump silently to original end element
      setIsAnimating(false);
      setCurrentIndex(items.length + itemsPerPage - 1);
    }
  };

  return (
    <section className="bg-[#f8f0e5] py-16 px-6 md:px-16 lg:px-24 relative overflow-hidden select-none">


      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="font-sloop font-light text-3xl md:text-[50px] capitalize text-[#5a4d41]">
          Top Selling Items
        </h2>
      </div>

      {/* Carousel Slider Viewport Container */}
      <div className="relative overflow-visible ">

        {/* Slider viewport */}
        <div className="overflow-hidden w-full">
          <div
            className="flex"
            style={{
              transform: `translate3d(-${(currentIndex / extendedItems.length) * 100}%, 0, 0)`,
              transition: isAnimating ? 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
              width: `${(extendedItems.length / itemsPerPage) * 100}%`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedItems.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                style={{ width: `${100 / extendedItems.length}%` }}
                className="px-1 flex-shrink-0"
              >
                <a
                  href={item.link}
                  className="group flex flex-col items-start focus:outline-none"
                >
                  {/* Image container matching PremiumCollection */}
                  <div className="w-full aspect-[4/5] overflow-hidden bg-gray-100 shadow-md transition-shadow duration-300 group-hover:shadow-xl">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Caption */}
                  <h4 className="mt-6 font-jost font-light text-[15px] md:text-[16px] text-black tracking-[0.01rem] text-left w-full transition-colors duration-300 group-hover:text-black capitalize">
                    {item.title}
                  </h4>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        {/* <button
          onClick={handlePrev}
          className="absolute left-[-16px] md:left-0 top-[40%] -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 bg-white/90 hover:bg-white text-black border border-gray-100 rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none"
          aria-label="Previous items"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="absolute right-[-16px] md:right-0 top-[40%] -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 bg-white/90 hover:bg-white text-black border border-gray-100 rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none"
          aria-label="Next items"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button> */}

      </div>


    </section>
  );
};

export default TopSellingSlider;
