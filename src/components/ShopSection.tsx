import React, { useState } from 'react';

const categories = ['Sweets', 'Bar', 'Macaron', 'Namkeen', 'Box', 'Cake'];

const products = [
  {
    "id": 1,
    "name": "Almond Fig Ball",
    "image": "/Images/product/Sweets/Almond Fig Ball 1pc.jpg",
    "category": "Sweets"
  },
  {
    "id": 2,
    "name": "Apricot Date Truffle",
    "image": "/Images/product/Sweets/Apricot Date Truffle 1pc.jpg",
    "category": "Sweets"
  },
  {
    "id": 3,
    "name": "Caramel Delight Cookie",
    "image": "/Images/product/Sweets/Caramel Delight Cookie 1 PC.jpg",
    "category": "Sweets"
  },
  {
    "id": 4,
    "name": "CHOCO ORANGE DELIGHT",
    "image": "/Images/product/Sweets/CHOCO ORANGE DELIGHT .jpg",
    "category": "Sweets"
  },
  {
    "id": 5,
    "name": "Chocolate Kaju Katli",
    "image": "/Images/product/Sweets/Chocolate Kaju Katli.jpg",
    "category": "Sweets"
  },
  {
    "id": 6,
    "name": "Classic Butter Crunch Cookie",
    "image": "/Images/product/Sweets/Classic Butter Crunch Cookie 1 PC.jpg",
    "category": "Sweets"
  },
  {
    "id": 7,
    "name": "Coffee Biscoff Ladoo",
    "image": "/Images/product/Sweets/Coffee Biscoff Ladoo 1pc.jpg",
    "category": "Sweets"
  },
  {
    "id": 8,
    "name": "COFFEE CARDAMOM BARFI",
    "image": "/Images/product/Sweets/COFFEE CARDAMOM BARFI.jpg",
    "category": "Sweets"
  },
  {
    "id": 9,
    "name": "Coffee Kick Cookie",
    "image": "/Images/product/Sweets/Coffee Kick Cookie 1 PC.jpg",
    "category": "Sweets"
  },
  {
    "id": 10,
    "name": "Coffee Milk Cake",
    "image": "/Images/product/Sweets/Coffee Milk Cake 1pc.jpg",
    "category": "Sweets"
  },
  {
    "id": 11,
    "name": "Cranberry Slice",
    "image": "/Images/product/Sweets/Cranberry Slice 1pc.jpg",
    "category": "Sweets"
  },
  {
    "id": 12,
    "name": "Dark Chocolate Mysore Pak",
    "image": "/Images/product/Sweets/Dark Chocolate Mysore Pak 1pc.jpg",
    "category": "Sweets"
  },
  {
    "id": 13,
    "name": "45 Almond Praline Chocolate Tablet",
    "image": "/Images/product/Bar/45_ Almond Praline Chocolate Tablet.jpg",
    "category": "Bar"
  },
  {
    "id": 14,
    "name": "55 Pistachio Rose Chocolate Tablet",
    "image": "/Images/product/Bar/55_ Pistachio Rose Chocolate Tablet.jpg",
    "category": "Bar"
  },
  {
    "id": 15,
    "name": "70 Single Origin Dark Chocolate Tablet",
    "image": "/Images/product/Bar/70_ Single Origin Dark Chocolate Tablet.jpg",
    "category": "Bar"
  },
  {
    "id": 16,
    "name": "90 Intense Dark Chocolate Tablet",
    "image": "/Images/product/Bar/90_ Intense Dark Chocolate Tablet.jpg",
    "category": "Bar"
  },
  {
    "id": 17,
    "name": "Coconut Jaggery Bark",
    "image": "/Images/product/Bar/Coconut Jaggery Bark 100g.jpg",
    "category": "Bar"
  },
  {
    "id": 18,
    "name": "HAZELNUT GIANDUJA CHOCOLATE",
    "image": "/Images/product/Bar/HAZELNUT GIANDUJA CHOCOLATE.jpg",
    "category": "Bar"
  },
  {
    "id": 19,
    "name": "Roasted Pistachio White Chocolate Tablet",
    "image": "/Images/product/Bar/Roasted Pistachio White Chocolate Tablet.jpg",
    "category": "Bar"
  },
  {
    "id": 20,
    "name": "SIGNATURE PROTEIN BAR",
    "image": "/Images/product/Bar/SIGNATURE PROTEIN BAR.jpg",
    "category": "Bar"
  },
  {
    "id": 21,
    "name": "Chocolate Macaron",
    "image": "/Images/product/Macaron/Chocolate Macaron 1pc.jpg",
    "category": "Macaron"
  },
  {
    "id": 22,
    "name": "Pista Lauj Macaron",
    "image": "/Images/product/Macaron/Pista Lauj Macaron 1pc.jpg",
    "category": "Macaron"
  },
  {
    "id": 23,
    "name": "RASBERRY MACAROON",
    "image": "/Images/product/Macaron/RASBERRY MACAROON.jpg",
    "category": "Macaron"
  },
  {
    "id": 24,
    "name": "Exotic Paneer Tikka Puff",
    "image": "/Images/product/Namkeen/Exotic Paneer Tikka Puff.jpg",
    "category": "Namkeen"
  },
  {
    "id": 25,
    "name": "Mushroom Thyme Puff",
    "image": "/Images/product/Namkeen/Mushroom Thyme Puff.jpg",
    "category": "Namkeen"
  },
  {
    "id": 26,
    "name": "Assorted Luxury Sweets",
    "image": "/Images/product/Box/Assorted Luxury Sweets (Box of 10).jpg",
    "category": "Box"
  },
  {
    "id": 27,
    "name": "Assorted Luxury Sweets",
    "image": "/Images/product/Box/Assorted Luxury Sweets (Box of 16).jpg",
    "category": "Box"
  },
  {
    "id": 28,
    "name": "KUNAFA DATES",
    "image": "/Images/product/Box/KUNAFA DATES PACK OF 12 PC.jpg",
    "category": "Box"
  },
  {
    "id": 29,
    "name": "LUXURY SWEETS",
    "image": "/Images/product/Box/LUXURY SWEETS PACK OF 36 PC.jpg",
    "category": "Box"
  },
  {
    "id": 30,
    "name": "LUXURY SWEETS",
    "image": "/Images/product/Box/LUXURY SWEETS PACK OF 6 PC.jpg",
    "category": "Box"
  },
  {
    "id": 31,
    "name": "WISHES HAMPER",
    "image": "/Images/product/Box/WISHES HAMPER.jpg",
    "category": "Box"
  },
  {
    "id": 32,
    "name": "PECAN CAKE",
    "image": "/Images/product/Cake/PECAN CAKE.jpg",
    "category": "Cake"
  },
  {
    "id": 33,
    "name": "WISHES HAZELNUT CAKE",
    "image": "/Images/product/Cake/WISHES HAZELNUT CAKE 500 GM.jpg",
    "category": "Cake"
  },
  {
    "id": 34,
    "name": "WISHES KUNAFA CHOCOLATE CAKE",
    "image": "/Images/product/Cake/WISHES KUNAFA CHOCOLATE CAKE 500GM.jpg",
    "category": "Cake"
  },
  {
    "id": 35,
    "name": "WISHES MANGO CAKE",
    "image": "/Images/product/Cake/WISHES MANGO CAKE.jpg",
    "category": "Cake"
  }
];

const ShopSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Sweets');

  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-12 lg:px-20 font-jost bg-[#f8f0e5] relative overflow-hidden select-none z-0">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="font-jost text-3xl md:text-[42px] font-light text-[#5a4d41] capitalize leading-[1.4]">
            <span className="font-burgues text-[65px] md:text-[100px] lowercase -mr-2">o</span>ur Special Menu
          </h2>
          <p className="mt-4 text-[14px] md:text-[15px] text-gray-600 max-w-xl mx-auto font-light tracking-wide">
            Discover our carefully curated selection of premium sweets and chocolates, crafted with passion and elegance.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-12 border-b border-[#e8dfd5] pb-1">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`cursor-pointer pb-4 text-[11px] md:text-[13px] tracking-[0.2em] uppercase transition-all duration-300 relative ${
                activeCategory === category
                  ? 'text-[#2b4c3b] font-medium'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              {category}
              {/* Elegant active indicator underline */}
              <span 
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-[#2b4c3b] transition-all duration-500 ${
                  activeCategory === category ? 'w-full' : 'w-0'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pt-6 px-2">
          {products.filter(p => p.category === activeCategory).map((product, index) => {
            return (
              <a
                key={product.id}
                href={'#'}
                className="group relative flex flex-col items-center focus:outline-none p-0 bg-[#fffdfa] w-full  transition-all duration-300 hover:shadow-lg mt-4 sm:mt-0"
                style={{
                  border: '1px solid #e8dcc8',
                  borderRadius: '8px',
                }}
              >
                {/* Inner dashed/dotted border */}
                <div className="absolute inset-[6px] border border-dashed border-[#d1b19a] rounded-sm pointer-events-none opacity-50" />

                

                {/* Top Sparkles (Decorative) */}
                <div className="absolute top-8 left-6 text-[#d1b19a] opacity-50 text-xl font-light">
                  ✦
                </div>

                {/* Image Container */}
                <div className="w-full flex-grow flex items-center justify-center relative z-10 mt-0 mb-9 h-48 md:h-56">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-[100%] h-[85%] object-contain transition-transform duration-700 ease-out group-hover:scale-110 drop-shadow-md"
                    loading="lazy"
                  />
                </div>

                {/* Title */}
                <h3 className="font-jost font-normal text-[15px] md:text-[14px] text-[#5a4d41] uppercase text-center w-full relative z-10 mt-[-20px] px-2">
                  {product.name}
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
      </div>
    </section>
  );
};

export default ShopSection;
