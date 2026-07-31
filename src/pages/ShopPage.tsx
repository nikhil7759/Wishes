import React from 'react';
import SEO from '../components/SEO';
import ShopSection from '../components/ShopSection';

const ShopPage: React.FC = () => {
  return (
    <div className="min-h-screen mt-20 bg-[#f8f0e5]">
      <SEO
        title="Shop Luxury Collections | Wishes by Om Sweets"
        description="Browse our exclusive collection of luxury chocolates, artisanal gourmet sweets, corporate gift boxes, and floral arrangements."
      />
      <ShopSection />
    </div>
  );
};

export default ShopPage;

