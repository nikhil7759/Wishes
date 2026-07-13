import React, { useState } from 'react';

const categories = ['Sweets', 'Bite Chocolates', 'Macrones'];

const products = [
  { id: 1, name: 'Premium Sweet Delight', image: '/Images/sweets/OM%20Whites-11.jpg', category: 'Sweets' },
  { id: 2, name: 'Luxury Sweet Box', image: '/Images/sweets/OM%20Whites-13.jpg', category: 'Sweets' },
  { id: 3, name: 'Assorted Gourmet Sweets', image: '/Images/sweets/OM%20Whites-15.jpg', category: 'Sweets' },
  { id: 4, name: 'Signature Sweet Collection', image: '/Images/sweets/OM%20Whites-19.jpg', category: 'Sweets' },
  { id: 5, name: 'Classic Indian Sweets', image: '/Images/sweets/OM%20Whites-21.jpg', category: 'Sweets' },
  { id: 6, name: 'Festive Sweet Platter', image: '/Images/sweets/OM%20Whites-23.jpg', category: 'Sweets' },
  { id: 7, name: 'Royal Sweet Selection', image: '/Images/sweets/OM%20Whites-25.jpg', category: 'Sweets' },
  { id: 8, name: 'Deluxe Sweets Combo', image: '/Images/sweets/OM%20Whites-27.jpg', category: 'Sweets' },
  { id: 9, name: 'Handcrafted Sweet Mix', image: '/Images/sweets/OM%20Whites-29.jpg', category: 'Sweets' },
  { id: 10, name: 'Artisanal Sweets', image: '/Images/sweets/OM%20Whites-3.jpg', category: 'Sweets' },
  { id: 11, name: 'Traditional Sweet Box', image: '/Images/sweets/OM%20Whites-31.jpg', category: 'Sweets' },
  { id: 12, name: 'Premium Cashew Sweets', image: '/Images/sweets/OM%20Whites-33.jpg', category: 'Sweets' },
  { id: 13, name: 'Gourmet Almond Treats', image: '/Images/sweets/OM%20Whites-35.jpg', category: 'Sweets' },
  { id: 14, name: 'Luxury Pistachio Sweets', image: '/Images/sweets/OM%20Whites-5.jpg', category: 'Sweets' },
  { id: 15, name: 'Signature Saffron Sweets', image: '/Images/sweets/OM%20Whites-7.jpg', category: 'Sweets' },
  { id: 16, name: 'Exclusive Mixed Sweets', image: '/Images/sweets/OM%20Whites-9.jpg', category: 'Sweets' },
];

const ShopSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Sweets');

  return (
    <section className="w-full max-w-[1600px] mx-auto py-12 px-6 md:px-16  font-jost">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="font-sloop text-3xl md:text-4xl lg:text-[70px] font-light text-[#5a4d41] capatalize  leading-[1.4] ">
          Our Special Menu
        </h2>
      </div>

      {/* Category Navigation */}
      <div className="flex flex-wrap items-center justify-start gap-3 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`cursor-pointer px-5 py-2 rounded-full text-[11px] md:text-xs tracking-wider uppercase border transition-colors ${activeCategory === category
              ? 'bg-[#f8f0e5] text-black border-[#2b4c3b]'
              : 'bg-transparent text-gray-700 border-black hover:border-black'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.filter(p => p.category === activeCategory).map((product) => (
          <div
            key={product.id}
            className="relative bg-[#f4c3c0] rounded-xl p-6 flex flex-col items-center justify-between min-h-[320px] transition-transform hover:-translate-y-1 cursor-pointer"
          >
            {/* Product Image */}
            <div className="flex-1 w-full flex items-center justify-center mt-6 mb-8">
              <img
                src={product.image}
                alt={product.name}
                className="w-40 h-40 object-cover drop-shadow-md rounded-full"
              />
            </div>

            {/* Product Details */}
            <div className="w-full flex justify-center items-center mt-auto">
              <h3 className="text-sm md:text-[15px] font-medium text-black leading-tight text-center">
                {product.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopSection;
