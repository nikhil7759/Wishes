import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    image: '/Images/bgwishes1.jpg',
    overline: 'NOW AVAILABLE',
    title: 'Artisan Craft',
    subtitle: 'Handcrafted luxury sweets & artisanal delicacies,\ndelivered straight to your doorstep with perfection',
    buttonText: 'ORDER NOW'
  },
  {
    id: 2,
    image: '/Images/bgwishes2.jpg',
    overline: 'NEW COLLECTION',
    title: 'Gifting Boxes',
    subtitle: 'Discover our exclusive range of bespoke gourmet gift boxes,\nelegantly curated for your most cherished celebrations',
    buttonText: 'EXPLORE NOW'
  },

];

const FullScreenCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[800px] overflow-hidden bg-black font-jost">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
        >
          {/* Background Image with Ken Burns effect */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover transition-transform duration-[7000ms] ease-out ${index === currentSlide ? 'scale-110' : 'scale-100'
                }`}
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Text Content */}
          <div className="relative z-20 w-full h-full flex flex-col items-center justify-center text-center px-6">

            <span
              className={`text-white text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium mb-4 transition-all duration-1000 delay-200 ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
            >
              {slide.overline}
            </span>

            <h2
              className={`font-jost text-white text-3xl sm:text-5xl md:text-5xl lg:text-[50px]   font-light mb-6 drop-shadow-sm transition-all duration-1000 delay-300 ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
            >
              <span className="font-burgues text-[50px] lg:text-[70px]">{slide.title.charAt(0)}</span>{slide.title.slice(1)}
            </h2>

            <p
              className={`text-white/95 text-[13px] md:text-[15px] font-normal drop-shadow-sm max-w-xl leading-relaxed whitespace-pre-line transition-all duration-1000 delay-500 ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
            >
              {slide.subtitle}
            </p>

            <button
              className={`mt-10 px-10 py-3 border border-white/80 text-white uppercase text-[11px] tracking-[0.15em] font-medium hover:bg-white hover:text-black transition-colors duration-300 transition-all delay-700 ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
            >
              {slide.buttonText}
            </button>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      {/* <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-500 focus:outline-none ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/80'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
    </section>
  );
};

export default FullScreenCarousel;
