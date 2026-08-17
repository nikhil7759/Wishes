import React, { useState, useEffect } from 'react';

interface SlideItem {
  id: number;
  image: string;
  overline: string;
  title: string;
  subtitle: string;
  buttonText: string;
}

const slides: SlideItem[] = [
  {
    id: 1,
    image: '/Images/bgwishes1.jpg',
    overline: 'NOW AVAILABLE',
    title: 'Artisan Craft',
    subtitle: 'Handcrafted luxury sweets & artisanal delicacies,\ndelivered straight to your doorstep with perfection',
    buttonText: 'ORDER NOW',
  },
  {
    id: 2,
    image: '/Images/bgwishes2.jpg',
    overline: 'NEW COLLECTION',
    title: 'Gifting Boxes',
    subtitle: 'Discover our exclusive range of bespoke gourmet gift boxes,\nelegantly curated for your most cherished celebrations',
    buttonText: 'EXPLORE NOW',
  },
];

const FullScreenCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[650px] md:h-[800px] overflow-hidden bg-black font-jost select-none">
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
                loading="eager"
                fetchPriority={index === 0 ? 'high' : 'auto'}
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/45" />
            </div>

            {/* Slide Content */}
            <div className="relative z-20 w-full h-full flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto">
              <span className="text-white/90 text-[11px] md:text-xs uppercase tracking-[0.25em] font-medium mb-4">
                {slide.overline}
              </span>

              <h2 className="font-jost text-white text-3xl sm:text-5xl lg:text-[52px] font-light mb-6">
                <span className="font-burgues text-[50px] lg:text-[70px]">
                  {slide.title.charAt(0)}
                </span>
                {slide.title.slice(1)}
              </h2>

              <p className="text-white/90 text-[14px] md:text-[16px] font-light max-w-xl leading-relaxed whitespace-pre-line mb-8">
                {slide.subtitle}
              </p>

              <a
                href="https://airmenus.in/wishes/order"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#b49377] hover:bg-[#9a7b60] text-white uppercase text-[11px] font-medium tracking-[0.2em] px-10 py-4 rounded-sm transition-colors duration-200"
              >
                {slide.buttonText}
              </a>
            </div>
          </div>
        );
      })}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer focus:outline-none ${
              index === currentSlide ? 'w-8 bg-white' : 'w-2.5 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default FullScreenCarousel;
