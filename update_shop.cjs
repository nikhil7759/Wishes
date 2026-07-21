const fs = require('fs');
const path = require('path');
const base_dir = 'public/Images/product';
const folders = ['Sweets', 'Bar', 'Macaron', 'Namkeen', 'Box', 'Cake'];
const products = [];
let id_counter = 1;
folders.forEach(folder => {
  const folder_path = path.join(base_dir, folder);
  if (!fs.existsSync(folder_path)) return;
  const files = fs.readdirSync(folder_path);
  // for sweets limit to 12
  const limit = folder === 'Sweets' ? 12 : files.length;
  let count = 0;
  files.forEach(file => {
    if (count >= limit) return;
    if (file.endsWith('.jpg') || file.endsWith('.png')) {
      const name = path.basename(file, path.extname(file)).replace(/_/g, ' ').replace(/\.[^/.]+$/, '').trim();
      products.push({
        id: id_counter++,
        name: name,
        image: '/Images/product/' + folder + '/' + encodeURIComponent(file).replace(/%20/g, ' '), // keep spaces unencoded for simplicity, or encode correctly
        category: folder
      });
      count++;
    }
  });
});

const fileContent = `import React, { useState } from 'react';

const categories = ['Sweets', 'Bar', 'Macaron', 'Namkeen', 'Box', 'Cake'];

const products = ${JSON.stringify(products, null, 2)};

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
              className={\`cursor-pointer pb-4 text-[11px] md:text-[13px] tracking-[0.2em] uppercase transition-all duration-300 relative \${
                activeCategory === category
                  ? 'text-[#2b4c3b] font-medium'
                  : 'text-gray-500 hover:text-gray-800'
              }\`}
            >
              {category}
              {/* Elegant active indicator underline */}
              <span 
                className={\`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-[#2b4c3b] transition-all duration-500 \${
                  activeCategory === category ? 'w-full' : 'w-0'
                }\`}
              />
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pt-6 px-2">
          {products.filter(p => p.category === activeCategory).map((product, index) => {
            const number = String(index + 1).padStart(2, '0');
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

                {/* Top Number Badge Background Cutout */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#f8f0e5] px-3 z-10">
                  <div className="w-10 h-10 rounded-full bg-[#f4c3c0] flex items-center justify-center text-white text-sm font-jost shadow-sm">
                    {number}
                  </div>
                </div>

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
`;

fs.writeFileSync('src/components/ShopSection.tsx', fileContent, 'utf8');
console.log('Successfully updated ShopSection.tsx');
