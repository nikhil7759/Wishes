import React, { useState, useEffect, useRef } from 'react';

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

  // Touch and drag state
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef<number>(0);

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

  // Cloned items configuration for seamless loop
  const clonedEnd = items.slice(-itemsPerPage);
  const clonedStart = items.slice(0, itemsPerPage);
  const extendedItems = [...clonedEnd, ...items, ...clonedStart];

  useEffect(() => {
    setIsAnimating(false);
    setCurrentIndex(itemsPerPage);
  }, [itemsPerPage]);

  const handleNext = () => {
    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    if (currentIndex >= items.length + itemsPerPage) {
      setIsAnimating(false);
      setCurrentIndex(itemsPerPage);
    } else if (currentIndex <= itemsPerPage - 1) {
      setIsAnimating(false);
      setCurrentIndex(items.length + itemsPerPage - 1);
    }
  };

  // Touch / Swipe handlers for mobile drag left/right
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 40;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Mouse Drag handlers for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    const distance = dragStartX.current - e.clientX;
    const minSwipeDistance = 40;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Calculate actual active dot index (0 to items.length - 1)
  const activeDotIndex = (currentIndex - itemsPerPage + items.length) % items.length;

  return (
    <section className="bg-[#f8f0e5] py-16 px-4 sm:px-6 md:px-16 lg:px-24 relative overflow-hidden select-none">
      {/* Section Heading */}
      <div className="text-center mb-10 md:mb-12">
        <h2 className="font-jost font-light text-3xl md:text-[40px] text-[#5a4d41]">
          <span className="font-burgues text-[65px]">T</span>op Selling Items
        </h2>
      </div>

      {/* Carousel Slider Viewport Container */}
      <div className="relative max-w-7xl mx-auto">
        {/* Slider viewport */}
        <div
          className="overflow-hidden w-full cursor-grab active:cursor-grabbing touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="flex"
            style={{
              transform: `translate3d(-${(currentIndex / extendedItems.length) * 100}%, 0, 0)`,
              transition: isAnimating ? 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
              width: `${(extendedItems.length / itemsPerPage) * 100}%`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedItems.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                style={{ width: `${100 / extendedItems.length}%` }}
                className="px-2 sm:px-3 flex-shrink-0"
              >
                <div className="group flex flex-col items-center text-center focus:outline-none">
                  {/* Image container matching PremiumCollection */}
                  <div className="w-full max-w-[340px] sm:max-w-none mx-auto aspect-[4/5] overflow-hidden bg-gray-100 shadow-md rounded-sm transition-shadow duration-300 group-hover:shadow-xl">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
                      loading="lazy"
                    />
                  </div>

                  {/* Caption */}
                  <h4 className="mt-5 font-jost font-light text-[15px] md:text-[16px] text-[#2c1f18] tracking-[0.01rem] text-center w-full transition-colors duration-300 capitalize">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-1 sm:left-[-16px] md:left-[-20px] top-[42%] -translate-y-1/2 z-20 w-9 h-9 md:w-11 md:h-11 bg-white/90 hover:bg-white text-[#5a4d41] border border-[#e5d5c5] rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none"
          aria-label="Previous item"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="absolute right-1 sm:right-[-16px] md:right-[-20px] top-[42%] -translate-y-1/2 z-20 w-9 h-9 md:w-11 md:h-11 bg-white/90 hover:bg-white text-[#5a4d41] border border-[#e5d5c5] rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none"
          aria-label="Next item"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* Pagination Dots for Mobile & Desktop */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAnimating(true);
              setCurrentIndex(itemsPerPage + index);
            }}
            className={`transition-all duration-300 rounded-full ${
              activeDotIndex === index
                ? 'w-6 h-2 bg-[#b49377]'
                : 'w-2 h-2 bg-[#b49377]/30 hover:bg-[#b49377]/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default TopSellingSlider;
