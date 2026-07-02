import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-white/90 backdrop-blur-md font-jost font-normal border-b border-gray-100 sticky top-0 z-30 px-6 md:px-16 pt-4 shadow-sm">
        <div className=" flex flex-col gap-4">
          {/* Row 1: Left Links/Hamburger, Center Logo, Right Icons */}
          <div className="flex items-center justify-between">
            {/* Left Area: Desktop Extra Links & Mobile Hamburger */}
            <div className="flex-1 flex items-center justify-start">
              {/* Desktop Extra Links */}
              <div className="hidden md:flex items-center gap-6 text-[14px] tracking-[0.04rem] text-black capitalize">
                <a href="/about" className="hover:text-black transition-colors">The House</a>
                <a href="/locations" className="hover:text-black transition-colors">Our Addresses</a>
              </div>

              {/* Mobile Hamburger button */}
              <button
                onClick={() => setIsOpen(true)}
                className="md:hidden text-black focus:outline-none p-2"
                aria-label="Open Menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Center Area: Logo */}
            <div className="flex-shrink-0 flex justify-center">
              <a href="/">
                <img src="/logo/wishes%20logo.png" alt="Wishes Logo" className="h-12 w-auto object-contain brightness-0" />
              </a>
            </div>

            {/* Right Area: Desktop Icons & Mobile Icons */}
            <div className="flex-1 flex items-center justify-end gap-6 text-gray-500">
              {/* Search (Desktop only) */}
              <button className="hidden md:block hover:text-black transition-colors p-1" aria-label="Search">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.602 10.602z" />
                </svg>
              </button>

              {/* Help/Contact (Desktop only) */}
              <a href="/contact" className="hidden md:block hover:text-black transition-colors p-1" aria-label="Help">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
              </a>

              {/* Account (Desktop only) */}

            </div>
          </div>

          {/* Row 2: Desktop Main Menu */}
          <div className="hidden md:flex items-center justify-center gap-8 pb-4 pt-2 text-[14px] uppercase tracking-[-0.01rem] text-black border-t border-gray-50">
            <a href="/" className="hover:text-black transition-colors">Home</a>
            <a href="/shop" className="hover:text-black transition-colors">Shop</a>
            <a href="/bulk-order" className="hover:text-black transition-colors">Bulk Order</a>
            <a href="/gifting" className="hover:text-black transition-colors">Gifting</a>
            <a href="/contact" className="hover:text-black transition-colors">Contact</a>
            <a href="/order-online" className="hover:text-black transition-colors">Order Online</a>
          </div>
        </div>
      </nav>

      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white z-50 md:hidden shadow-2xl transition-transform duration-300 ease-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Close Button inside Drawer */}
        <div className="flex justify-end p-6">
          <button
            onClick={() => setIsOpen(false)}
            className="text-black focus:outline-none p-2"
            aria-label="Close Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col px-8 gap-6 text-[16px] uppercase tracking-wider text-black font-jost">
          <a href="/about" className="hover:text-gray-600 transition-colors py-2 border-b border-gray-100" onClick={() => setIsOpen(false)}>The House</a>
          <a href="/locations" className="hover:text-gray-600 transition-colors py-2 border-b border-gray-100" onClick={() => setIsOpen(false)}>Our Addresses</a>
          <a href="/" className="hover:text-gray-600 transition-colors py-2 border-b border-gray-100" onClick={() => setIsOpen(false)}>Home</a>
          <a href="/shop" className="hover:text-gray-600 transition-colors py-2 border-b border-gray-100" onClick={() => setIsOpen(false)}>Shop</a>
          <a href="/bulk-order" className="hover:text-gray-600 transition-colors py-2 border-b border-gray-100" onClick={() => setIsOpen(false)}>Bulk Order</a>
          <a href="/gifting" className="hover:text-gray-600 transition-colors py-2 border-b border-gray-100" onClick={() => setIsOpen(false)}>Gifting</a>
          <a href="/contact" className="hover:text-gray-600 transition-colors py-2 border-b border-gray-100" onClick={() => setIsOpen(false)}>Contact</a>
          <a href="/order-online" className="hover:text-gray-600 transition-colors py-2" onClick={() => setIsOpen(false)}>Order Online</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
