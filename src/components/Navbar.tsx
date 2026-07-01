import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full flex items-center justify-between px-24 py-4 bg-white font-heading border-b border-gray-100">
      <div className="flex-shrink-0">
        <a href="/">
          {/* Using URL encoding for the space in the filename */}
          <img src="/logo/wishes%20logo.png" alt="Wishes Logo" className="h-12 w-auto object-contain" />
        </a>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider text-gray-900">
        <a href="/" className="hover:text-black transition-colors capitalize">Home</a>
        <a href="/shop" className="hover:text-black transition-colors capitalize">Shop</a>
        <a href="/bulk-order" className="hover:text-black transition-colors capitalize">Bulk Order</a>
        <a href="/gifting" className="hover:text-black transition-colors capitalize">Gifting</a>
        <a href="/contact" className="hover:text-black transition-colors capitalize">Contact</a>
        <a href="/order-online" className="hover:text-black transition-colors capitalize">Order Online</a>
      </div>
    </nav>
  );
};

export default Navbar;
s